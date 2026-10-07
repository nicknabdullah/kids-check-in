import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../models/deed_model.dart';
import '../models/child_model.dart';
import '../models/reward_model.dart';
import '../models/achievement_model.dart';
import '../models/daily_entry_model.dart';

/// Central State Management Provider using standard Flutter [ChangeNotifier].
/// Persists app state locally and supports first-time parent onboarding.
class AppStateProvider extends ChangeNotifier {
  static const String _storageKey = 'kids_good_deeds_app_state';

  // Children list starts empty if first time setup, or pre-configured upon setup
  List<ChildModel> _children = [];
  String? _activeChildId;

  List<DeedModel> _deeds = [
    DeedModel(
      id: 'd1',
      title: 'Morning Dua',
      description: 'Did you recite your morning dua?',
      category: 'Prayer',
      points: 3,
      isPositive: true,
      iconEmoji: '🤲',
      islamicReference: 'Al-Bukhari 6312',
    ),
    DeedModel(
      id: 'd2',
      title: 'Bismillah Before Meals',
      description: 'Did you say Bismillah before eating?',
      category: 'Manners',
      points: 2,
      isPositive: true,
      iconEmoji: '🍽️',
      islamicReference: 'Abu Dawood 3767',
    ),
    DeedModel(
      id: 'd3',
      title: 'Give Salam',
      description: 'Did you greet family & friends with Salam?',
      category: 'Manners',
      points: 2,
      isPositive: true,
      iconEmoji: '💬',
      islamicReference: 'Muslim 54',
    ),
    DeedModel(
      id: 'd4',
      title: 'Help Someone',
      description: 'Did you help Mom, Dad, or a sibling today?',
      category: 'Kindness',
      points: 3,
      isPositive: true,
      iconEmoji: '🤝',
    ),
    DeedModel(
      id: 'd5',
      title: 'Pray On Time',
      description: 'Did you perform your prayers on time?',
      category: 'Prayer',
      points: 4,
      isPositive: true,
      iconEmoji: '🕌',
    ),
    DeedModel(
      id: 'd6',
      title: 'Listen to Parents',
      description: 'Did you listen respectfully when spoken to?',
      category: 'Behavior',
      points: 3,
      isPositive: true,
      iconEmoji: '❤️',
    ),
    DeedModel(
      id: 'd7',
      title: 'Put Toys Away',
      description: 'Did you tidy up your room or play space?',
      category: 'Helper',
      points: 2,
      isPositive: true,
      iconEmoji: '🧸',
    ),
    DeedModel(
      id: 'd8',
      title: 'Fight / Argue',
      description: 'Did you fight or argue with anyone today?',
      category: 'Behavior',
      points: 2,
      isPositive: false,
      iconEmoji: '🕊️',
    ),
  ];

  List<RewardModel> _rewards = [
    RewardModel(
      id: 'r1',
      title: 'Delicious Ice Cream 🍦',
      iconEmoji: '🍦',
      requiredPoints: 50,
      probability: 0.25,
      isUnlocked: true,
    ),
    RewardModel(
      id: 'r2',
      title: 'Choose Tonight\'s Bedtime Story 📖',
      iconEmoji: '📖',
      requiredPoints: 40,
      probability: 0.30,
      isUnlocked: true,
    ),
    RewardModel(
      id: 'r3',
      title: 'Big Warm Bear Hug 🤗',
      iconEmoji: '🤗',
      requiredPoints: 30,
      probability: 0.35,
      isUnlocked: true,
    ),
  ];

  List<AchievementModel> _achievements = [
    AchievementModel(
      id: 'a1',
      title: 'First Step Champion',
      description: 'Completed your very first nightly check-in!',
      iconEmoji: '🌱',
      isUnlocked: true,
    ),
    AchievementModel(
      id: 'a2',
      title: '7-Day Star Streak',
      description: 'Completed good deeds for 7 days in a row!',
      iconEmoji: '🔥',
      isUnlocked: true,
    ),
  ];
  late final List<DeedModel> _defaultDeeds;
  late final List<RewardModel> _defaultRewards;

  // Settings & Security
  bool _isLeaderboardEnabled = true;
  bool _isSoundEnabled = true;
  String _parentPinCode = '1234';
  bool _isParentAuthenticated = false;
  Map<String, List<DeedCheckResult>> _dailyHistory = {};
  SharedPreferences? _preferences;
  bool _isLoading = true;
  Object? _initializationError;
  late final Future<void> initialized;
  Future<void> _saveQueue = Future<void>.value();

  AppStateProvider() {
    _defaultDeeds = List.of(_deeds);
    _defaultRewards = List.of(_rewards);
    initialized = _loadState();
  }

  // -------------------------------------------------------------
  // Getters
  // -------------------------------------------------------------
  bool get isFirstTimeLaunch => _children.isEmpty;
  bool get isLoading => _isLoading;
  Object? get initializationError => _initializationError;
  List<ChildModel> get children => List.unmodifiable(_children);

  ChildModel get activeChild {
    if (_children.isEmpty) {
      return ChildModel(
        id: 'temp',
        name: 'My Child',
        age: 6,
        avatar: AvatarConfig(),
      );
    }
    return _children.firstWhere(
      (c) => c.id == _activeChildId,
      orElse: () => _children.first,
    );
  }

  List<DeedModel> get deeds => List.unmodifiable(_deeds);
  List<DeedModel> get activeDeeds => _deeds.where((d) => d.isEnabled).toList();
  List<RewardModel> get rewards => List.unmodifiable(_rewards);
  List<AchievementModel> get achievements => List.unmodifiable(_achievements);
  Map<String, List<DeedCheckResult>> get dailyHistory => Map.unmodifiable(
        _dailyHistory.map(
          (date, entries) =>
              MapEntry(date, List<DeedCheckResult>.unmodifiable(entries)),
        ),
      );

  bool get isLeaderboardEnabled => _isLeaderboardEnabled;
  bool get isSoundEnabled => _isSoundEnabled;
  bool get isParentAuthenticated => _isParentAuthenticated;

  Future<void> _loadState() async {
    try {
      _preferences = await SharedPreferences.getInstance();
      final savedState = _preferences!.getString(_storageKey);
      if (savedState != null) {
        final state = Map<String, dynamic>.from(jsonDecode(savedState) as Map);
        if (state['version'] != 1) {
          throw const FormatException('Unsupported saved app data version.');
        }

        _children = (state['children'] as List<dynamic>)
            .map((child) =>
                ChildModel.fromMap(Map<String, dynamic>.from(child as Map)))
            .toList();
        _activeChildId = state['activeChildId'] as String?;
        _deeds = (state['deeds'] as List<dynamic>)
            .map((deed) =>
                DeedModel.fromMap(Map<String, dynamic>.from(deed as Map)))
            .toList();
        _rewards = (state['rewards'] as List<dynamic>)
            .map((reward) =>
                RewardModel.fromMap(Map<String, dynamic>.from(reward as Map)))
            .toList();
        _isLeaderboardEnabled = state['isLeaderboardEnabled'] as bool;
        _isSoundEnabled = state['isSoundEnabled'] as bool;
        _parentPinCode = state['parentPinCode'] as String;

        final history = Map<String, dynamic>.from(state['dailyHistory'] as Map);
        _dailyHistory = history.map((date, entries) => MapEntry(
              date,
              (entries as List<dynamic>)
                  .map((entry) => DeedCheckResult.fromMap(
                      Map<String, dynamic>.from(entry as Map)))
                  .toList(),
            ));
        if (!_children.any((child) => child.id == _activeChildId)) {
          _activeChildId = _children.isEmpty ? null : _children.first.id;
        }
      }
    } catch (error) {
      _initializationError = error;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Map<String, dynamic> _serializeState() {
    return {
      'version': 1,
      'children': _children.map((child) => child.toMap()).toList(),
      'activeChildId': _activeChildId,
      'deeds': _deeds.map((deed) => deed.toMap()).toList(),
      'rewards': _rewards.map((reward) => reward.toMap()).toList(),
      'isLeaderboardEnabled': _isLeaderboardEnabled,
      'isSoundEnabled': _isSoundEnabled,
      'parentPinCode': _parentPinCode,
      'dailyHistory': _dailyHistory.map(
        (date, entries) =>
            MapEntry(date, entries.map((entry) => entry.toMap()).toList()),
      ),
    };
  }

  void _notifyAndPersist() {
    notifyListeners();
    if (_isLoading || _initializationError != null) return;

    _saveQueue = _saveQueue.then((_) async {
      final preferences = _preferences ?? await SharedPreferences.getInstance();
      _preferences = preferences;
      final saved = await preferences.setString(
        _storageKey,
        jsonEncode(_serializeState()),
      );
      if (!saved) {
        throw StateError('Failed to persist application data.');
      }
    }).catchError((Object error, StackTrace stackTrace) {
      FlutterError.reportError(FlutterErrorDetails(
        exception: error,
        stack: stackTrace,
        library: 'app state persistence',
        context: ErrorDescription('while saving application data'),
      ));
    });
  }

  Future<void> flushPersistence() => _saveQueue;

  // -------------------------------------------------------------
  // Onboarding & Children Management
  // -------------------------------------------------------------
  void completeFirstTimeSetup(String pin, ChildModel initialChild) {
    _parentPinCode = pin;
    _children.add(initialChild);
    _activeChildId = initialChild.id;
    _notifyAndPersist();
  }

  void addChild(ChildModel newChild) {
    _children.add(newChild);
    _activeChildId ??= newChild.id;
    _notifyAndPersist();
  }

  void deleteChild(String childId) {
    _children.removeWhere((c) => c.id == childId);
    if (_children.isNotEmpty) {
      _activeChildId = _children.first.id;
    } else {
      _activeChildId = null;
    }
    _notifyAndPersist();
  }

  void setActiveChild(String childId) {
    _activeChildId = childId;
    _notifyAndPersist();
  }

  void updateAvatar(String childId, AvatarConfig newConfig) {
    final index = _children.indexWhere((c) => c.id == childId);
    if (index != -1) {
      _children[index] = _children[index].copyWith(avatar: newConfig);
      _notifyAndPersist();
    }
  }

  void setChildPatternLock(String childId, String pattern) {
    final index = _children.indexWhere((c) => c.id == childId);
    if (index != -1) {
      _children[index] = _children[index].copyWith(patternLock: pattern);
      _notifyAndPersist();
    }
  }

  void clearChildPatternLock(String childId) {
    final index = _children.indexWhere((c) => c.id == childId);
    if (index != -1) {
      _children[index] = _children[index].copyWith(patternLock: null);
      _notifyAndPersist();
    }
  }

  void recordCheckInResult(String childId, List<DeedCheckResult> results) {
    int totalEarned = 0;
    for (var res in results) {
      totalEarned += res.pointsEarned;
    }

    final index = _children.indexWhere((c) => c.id == childId);
    if (index != -1) {
      final child = _children[index];
      final updatedPoints = (child.currentPoints + totalEarned).clamp(0, 9999);
      final updatedLifetime =
          child.lifetimePoints + (totalEarned > 0 ? totalEarned : 0);

      _children[index] = child.copyWith(
        currentPoints: updatedPoints,
        lifetimePoints: updatedLifetime,
        streakDays: child.streakDays + 1,
      );

      final dateKey = DateTime.now().toIso8601String().split('T')[0];
      _dailyHistory[dateKey] = results;

      _notifyAndPersist();
    }
  }

  bool verifyParentPin(String enteredPin) {
    if (enteredPin == _parentPinCode) {
      _isParentAuthenticated = true;
      notifyListeners();
      return true;
    }
    return false;
  }

  void updateParentPin(String newPin) {
    _parentPinCode = newPin;
    _notifyAndPersist();
  }

  void updateChildProfile(ChildModel updatedChild) {
    final index = _children.indexWhere((c) => c.id == updatedChild.id);
    if (index != -1) {
      _children[index] = updatedChild;
      _notifyAndPersist();
    }
  }

  void logoutParent() {
    _isParentAuthenticated = false;
    notifyListeners();
  }

  void toggleLeaderboard(bool enabled) {
    _isLeaderboardEnabled = enabled;
    _notifyAndPersist();
  }

  void toggleSound(bool enabled) {
    _isSoundEnabled = enabled;
    _notifyAndPersist();
  }

  void addDeed(DeedModel deed) {
    _deeds.add(deed);
    _notifyAndPersist();
  }

  void toggleDeedEnabled(String deedId) {
    final index = _deeds.indexWhere((d) => d.id == deedId);
    if (index != -1) {
      _deeds[index] =
          _deeds[index].copyWith(isEnabled: !_deeds[index].isEnabled);
      _notifyAndPersist();
    }
  }

  void addReward(RewardModel reward) {
    _rewards.add(reward);
    _notifyAndPersist();
  }

  /// Reset all application data back to factory fresh state
  void resetAllData() {
    _children = [];
    _activeChildId = null;
    _deeds = List.of(_defaultDeeds);
    _rewards = List.of(_defaultRewards);
    _isLeaderboardEnabled = true;
    _isSoundEnabled = true;
    _isParentAuthenticated = false;
    _parentPinCode = '1234';
    _dailyHistory.clear();
    _notifyAndPersist();
  }
}
