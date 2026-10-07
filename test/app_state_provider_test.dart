import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:kids_good_deeds_app/models/child_model.dart';
import 'package:kids_good_deeds_app/models/daily_entry_model.dart';
import 'package:kids_good_deeds_app/models/deed_model.dart';
import 'package:kids_good_deeds_app/models/reward_model.dart';
import 'package:kids_good_deeds_app/providers/app_state_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('restores profiles, settings, deeds, rewards and check-in history',
      () async {
    SharedPreferences.setMockInitialValues({});

    final provider = AppStateProvider();
    await provider.initialized;
    final child = ChildModel(
      id: 'child-1',
      name: 'Amina',
      age: 7,
      avatar: AvatarConfig(gender: 'girl', hasBackpack: false),
    );

    provider.completeFirstTimeSetup('2580', child);
    provider.setChildPatternLock(child.id, '1-2-5');
    provider.toggleLeaderboard(false);
    provider.toggleSound(false);
    provider.addDeed(DeedModel(
      id: 'custom-deed',
      title: 'Share',
      description: 'Did you share today?',
      category: 'Kindness',
      points: 2,
      islamicReference: 'Example reference',
    ));
    provider.addReward(RewardModel(
      id: 'custom-reward',
      title: 'Story time',
      iconEmoji: '📖',
      requiredPoints: 10,
      probability: 0.5,
      isUnlocked: true,
      isClaimed: true,
    ));
    provider.recordCheckInResult(child.id, [
      DeedCheckResult(
        deed: provider.deeds.first,
        response: ResponseType.great,
        pointsEarned: 3,
      ),
    ]);
    await provider.flushPersistence();

    final restored = AppStateProvider();
    await restored.initialized;

    expect(restored.isFirstTimeLaunch, isFalse);
    expect(restored.activeChild.name, 'Amina');
    expect(restored.activeChild.patternLock, '1-2-5');
    expect(restored.activeChild.avatar.gender, 'girl');
    expect(restored.activeChild.avatar.hasBackpack, isFalse);
    expect(restored.activeChild.currentPoints, 3);
    expect(restored.isLeaderboardEnabled, isFalse);
    expect(restored.isSoundEnabled, isFalse);
    expect(restored.verifyParentPin('2580'), isTrue);
    expect(restored.deeds.any((deed) => deed.id == 'custom-deed'), isTrue);
    expect(restored.deeds.last.islamicReference, 'Example reference');
    expect(restored.rewards.last.isClaimed, isTrue);
    expect(restored.dailyHistory.values.single.single.response,
        ResponseType.great);

    restored.resetAllData();
    await restored.flushPersistence();
    final resetProvider = AppStateProvider();
    await resetProvider.initialized;
    expect(resetProvider.isFirstTimeLaunch, isTrue);
    expect(resetProvider.isLeaderboardEnabled, isTrue);
    expect(resetProvider.isSoundEnabled, isTrue);
    expect(resetProvider.verifyParentPin('1234'), isTrue);
    expect(
      resetProvider.deeds.any((deed) => deed.id == 'custom-deed'),
      isFalse,
    );
    expect(
      resetProvider.rewards.any((reward) => reward.id == 'custom-reward'),
      isFalse,
    );
  });

  test('keeps recorded check-ins separate for each child', () async {
    SharedPreferences.setMockInitialValues({});
    final provider = AppStateProvider();
    await provider.initialized;
    final firstChild = ChildModel(
      id: 'child-1',
      name: 'Amina',
      age: 7,
      avatar: AvatarConfig(),
    );
    final secondChild = ChildModel(
      id: 'child-2',
      name: 'Omar',
      age: 8,
      avatar: AvatarConfig(),
    );
    provider.completeFirstTimeSetup('2580', firstChild);
    provider.addChild(secondChild);

    provider.recordCheckInResult(firstChild.id, [
      DeedCheckResult(
        deed: provider.deeds.first,
        response: ResponseType.great,
        pointsEarned: 3,
      ),
    ]);
    provider.recordCheckInResult(secondChild.id, [
      DeedCheckResult(
        deed: provider.deeds.first,
        response: ResponseType.tried,
        pointsEarned: 1,
      ),
    ]);

    expect(
        provider
            .dailyHistoryForChild(firstChild.id)
            .values
            .single
            .single
            .pointsEarned,
        3);
    expect(
        provider
            .dailyHistoryForChild(secondChild.id)
            .values
            .single
            .single
            .pointsEarned,
        1);

    await provider.flushPersistence();
    final restored = AppStateProvider();
    await restored.initialized;
    expect(
        restored
            .dailyHistoryForChild(firstChild.id)
            .values
            .single
            .single
            .pointsEarned,
        3);
    expect(
        restored
            .dailyHistoryForChild(secondChild.id)
            .values
            .single
            .single
            .pointsEarned,
        1);
  });

  test('migrates version 1 history to the saved active child', () async {
    final child = ChildModel(
      id: 'child-1',
      name: 'Amina',
      age: 7,
      avatar: AvatarConfig(),
    );
    final deed = DeedModel(
      id: 'deed-1',
      title: 'Morning Dua',
      description: 'Recited a dua',
      category: 'Prayer',
      points: 3,
    );
    final result = DeedCheckResult(
      deed: deed,
      response: ResponseType.great,
      pointsEarned: 3,
    );
    SharedPreferences.setMockInitialValues({
      'kids_good_deeds_app_state': jsonEncode({
        'version': 1,
        'children': [child.toMap()],
        'activeChildId': child.id,
        'deeds': [],
        'rewards': [],
        'isLeaderboardEnabled': true,
        'isSoundEnabled': true,
        'parentPinCode': '1234',
        'dailyHistory': {
          '2026-10-07': [result.toMap()],
        },
      }),
    });

    final provider = AppStateProvider();
    await provider.initialized;

    expect(
      provider
          .dailyHistoryForChild(child.id)['2026-10-07']!
          .single
          .pointsEarned,
      3,
    );
    await provider.flushPersistence();
    final preferences = await SharedPreferences.getInstance();
    final savedState = jsonDecode(
      preferences.getString('kids_good_deeds_app_state')!,
    ) as Map<String, dynamic>;
    expect(savedState['version'], 2);
    expect(savedState['dailyHistoryByChildId'][child.id], isNotNull);
  });
}
