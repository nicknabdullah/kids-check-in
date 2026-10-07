import 'dart:math';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../theme/app_colors.dart';
import '../../widgets/faceless_avatar.dart';
import '../../widgets/islamic_pattern_background.dart';
import '../../services/audio_service.dart';

/// Representation of a Dua Hurdle Level
class DuaHurdleItem {
  final String id;
  final String title;
  final String arabicText;
  final String transliteration;
  final String translation;
  final String iconEmoji;

  DuaHurdleItem({
    required this.id,
    required this.title,
    required this.arabicText,
    required this.transliteration,
    required this.translation,
    required this.iconEmoji,
  });
}

/// Screen 13 — Dua Recitation Hurdle Challenge Game
class DuaHurdleGameScreen extends StatefulWidget {
  const DuaHurdleGameScreen({Key? key}) : super(key: key);

  @override
  State<DuaHurdleGameScreen> createState() => _DuaHurdleGameScreenState();
}

class _DuaHurdleGameScreenState extends State<DuaHurdleGameScreen>
    with SingleTickerProviderStateMixin {
  int _currentHurdleIndex = 0;
  bool _isListening = false;
  bool _isPlayingAudio = false;
  int? _lastRecitationScore;
  bool _hasClearedCurrentHurdle = false;

  late AnimationController _jumpController;
  late Animation<double> _jumpAnimation;

  final List<DuaHurdleItem> _duaHurdles = [
    DuaHurdleItem(
      id: 'h1',
      title: 'Dua Before Eating 🍽️',
      arabicText: 'بِسْمِ اللهِ وَعَلَى بَرَكَةِ اللهِ',
      transliteration: 'Bismillahi wa \'ala barakatillah',
      translation: 'In the name of Allah and with the blessings of Allah.',
      iconEmoji: '🍲',
    ),
    DuaHurdleItem(
      id: 'h2',
      title: 'Dua After Meals 🍉',
      arabicText: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا',
      transliteration: 'Alhamdulillahilladhi at\'amana wa saqana',
      translation: 'Praise be to Allah who fed us and gave us drink.',
      iconEmoji: '🥤',
    ),
    DuaHurdleItem(
      id: 'h3',
      title: 'Dua Before Sleeping 🌙',
      arabicText: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
      transliteration: 'Bismika Allahumma amutu wa ahya',
      translation: 'In Your name O Allah, I die and I live.',
      iconEmoji: '🛌',
    ),
    DuaHurdleItem(
      id: 'h4',
      title: 'Dua For Parents ❤️',
      arabicText: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
      transliteration: 'Rabbir hamhuma kama rabbayani sagheera',
      translation: 'My Lord, have mercy upon them as they brought me up when small.',
      iconEmoji: '👨‍👩‍👧',
    ),
    DuaHurdleItem(
      id: 'h5',
      title: 'Dua When Entering Home 🏡',
      arabicText: 'بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا',
      transliteration: 'Bismillahi walajna wa bismillahi kharajna',
      translation: 'In the name of Allah we enter, and in the name of Allah we leave.',
      iconEmoji: '🔑',
    ),
  ];

  @override
  void initState() {
    super.initState();
    _jumpController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 600),
    );
    _jumpAnimation = Tween<double>(begin: 0.0, end: -40.0).animate(
      CurvedAnimation(parent: _jumpController, curve: Curves.easeInOut),
    );
  }

  @override
  void dispose() {
    _jumpController.dispose();
    super.dispose();
  }

  /// Simulates Speech Recitation Analysis against target Dua text.
  /// Ignores minor mispronunciations and returns accuracy percentage (e.g. 85%).
  void _startRecitationAnalysis() {
    setState(() {
      _isListening = true;
      _lastRecitationScore = null;
    });

    Future.delayed(const Duration(seconds: 3), () {
      if (!mounted) return;

      // Simulated speech analyzer score between 75% and 98%
      final randomScore = 80 + Random().nextInt(18); // Generates 80% to 97% for encouragement

      setState(() {
        _isListening = false;
        _lastRecitationScore = randomScore;
      });

      if (randomScore >= 80) {
        // OVERCOME HURDLE!
        setState(() {
          _hasClearedCurrentHurdle = true;
        });

        // Trigger Leap Jump Animation
        _jumpController.forward().then((_) => _jumpController.reverse());
        AudioService.instance.playVoiceFeedback(
          context,
          'Mashaa Allah! Wonderful job!',
        );
      }
    });
  }

  void _nextHurdle() {
    if (_currentHurdleIndex < _duaHurdles.length - 1) {
      setState(() {
        _currentHurdleIndex++;
        _hasClearedCurrentHurdle = false;
        _lastRecitationScore = null;
      });
    } else {
      // Completed All Hurdles!
      showDialog(
        context: context,
        builder: (_) => Dialog(
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
          child: Padding(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Text('🏆', style: TextStyle(fontSize: 48)),
                const SizedBox(height: 12),
                const Text(
                  'Dua champion! 🌟',
                  style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: AppColors.textDark),
                ),
                const SizedBox(height: 10),
                const Text(
                  'MashaAllah! You completed all Dua hurdles today! Earned +50 bonus stars!',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 14, color: AppColors.textMuted),
                ),
                const SizedBox(height: 20),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.primaryTeal,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                      padding: const EdgeInsets.symmetric(vertical: 12),
                    ),
                    onPressed: () {
                      Navigator.pop(context);
                      Navigator.pop(context);
                    },
                    child: const Text('Hooray! 🎉'),
                  ),
                ),
              ],
            ),
          ),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);
    final currentDua = _duaHurdles[_currentHurdleIndex];

    return Scaffold(
      appBar: AppBar(
        title: const Text('🤲 Dua hurdle quest'),
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: IslamicPatternBackground(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            children: [
              // Adventure Hurdle Trail Banner
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(24),
                  boxShadow: [
                    BoxShadow(
                      color: AppColors.primaryTeal.withOpacity(0.08),
                      blurRadius: 12,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          'Hurdle ${_currentHurdleIndex + 1} of ${_duaHurdles.length}',
                          style: const TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                            color: AppColors.primaryTeal,
                          ),
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                          decoration: BoxDecoration(
                            color: AppColors.softGoldBg,
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: const Text(
                            'Goal: ≥ 80% Accuracy ⭐',
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                              color: AppColors.textGold,
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 16),

                    // Visual Animated Hurdle Trail with Avatar
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: List.generate(_duaHurdles.length, (index) {
                        bool isCurrent = index == _currentHurdleIndex;
                        bool isPassed = index < _currentHurdleIndex;

                        return Column(
                          children: [
                            if (isCurrent)
                              AnimatedBuilder(
                                animation: _jumpAnimation,
                                builder: (context, child) {
                                  return Transform.translate(
                                    offset: Offset(0, _jumpAnimation.value),
                                    child: FacelessAvatarWidget(
                                      config: appState.activeChild.avatar,
                                      size: 38,
                                    ),
                                  );
                                },
                              )
                            else
                              const SizedBox(height: 38),
                            const SizedBox(height: 6),
                            Container(
                              width: 44,
                              height: 44,
                              decoration: BoxDecoration(
                                color: isPassed
                                    ? AppColors.mintGreen
                                    : isCurrent
                                        ? AppColors.softGoldBg
                                        : Colors.grey.shade200,
                                shape: BoxShape.circle,
                                border: Border.all(
                                  color: isCurrent ? AppColors.accentGold : Colors.transparent,
                                  width: 3,
                                ),
                              ),
                              child: Center(
                                child: Text(
                                  isPassed ? '✅' : '🚧',
                                  style: const TextStyle(fontSize: 18),
                                ),
                              ),
                            ),
                            const SizedBox(height: 4),
                            Text(
                              'Hurdle ${index + 1}',
                              style: TextStyle(
                                fontSize: 10,
                                fontWeight: isCurrent ? FontWeight.bold : FontWeight.normal,
                                color: isCurrent ? AppColors.textDark : AppColors.textMuted,
                              ),
                            ),
                          ],
                        );
                      }),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 24),

              // Current Dua Challenge Card
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(28),
                  boxShadow: [
                    BoxShadow(
                      color: AppColors.primaryTeal.withOpacity(0.1),
                      blurRadius: 16,
                      offset: const Offset(0, 6),
                    ),
                  ],
                ),
                child: Column(
                  children: [
                    Text(currentDua.iconEmoji, style: const TextStyle(fontSize: 48)),
                    const SizedBox(height: 8),
                    Text(
                      currentDua.title,
                      style: const TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                        color: AppColors.textDark,
                      ),
                    ),
                    const SizedBox(height: 16),

                    // Arabic Text Box
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: AppColors.softTealBg,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: Text(
                        currentDua.arabicText,
                        style: const TextStyle(
                          fontSize: 26,
                          fontWeight: FontWeight.bold,
                          color: AppColors.primaryTeal,
                          height: 1.5,
                        ),
                        textAlign: TextAlign.center,
                        textDirection: TextDirection.rtl,
                      ),
                    ),
                    const SizedBox(height: 12),
                    Text(
                      '"${currentDua.transliteration}"',
                      style: const TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.w600,
                        color: AppColors.textDark,
                      ),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 4),
                    Text(
                      currentDua.translation,
                      style: const TextStyle(fontSize: 13, color: AppColors.textMuted),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 20),

                    // Dua recitation recordings have not been added yet.
                    OutlinedButton.icon(
                      style: OutlinedButton.styleFrom(
                        foregroundColor: AppColors.primaryTeal,
                        side: const BorderSide(color: AppColors.primaryTeal, width: 2),
                        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                      ),
                      icon: const Icon(Icons.play_arrow_rounded),
                      label: const Text('Dua audio coming soon'),
                      onPressed: null,
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 24),

              // Recitation Mic Button & Accuracy Display
              if (_isListening)
                Column(
                  children: const [
                    CircularProgressIndicator(color: AppColors.accentGold),
                    SizedBox(height: 12),
                    Text(
                      '🎙️ Listening to your recitation... Speak clearly!',
                      style: TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.bold,
                        color: AppColors.primaryTeal,
                      ),
                    ),
                  ],
                )
              else if (_lastRecitationScore != null) ...[
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: _lastRecitationScore! >= 80
                        ? AppColors.softGoldBg
                        : const Color(0xFFFFEBEE),
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(
                      color: _lastRecitationScore! >= 80
                          ? AppColors.accentGold
                          : Colors.red.shade300,
                    ),
                  ),
                  child: Column(
                    children: [
                      Text(
                        _lastRecitationScore! >= 80
                            ? '✨ Accuracy: $_lastRecitationScore% — Hurdle Overcome! 🎉'
                            : '🌱 Accuracy: $_lastRecitationScore% — Almost there! Listen to preview & try again!',
                        style: TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.bold,
                          color: _lastRecitationScore! >= 80
                              ? AppColors.textGold
                              : Colors.red.shade700,
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 16),
              ],

              // Main Action Buttons
              if (!_hasClearedCurrentHurdle)
                ElevatedButton.icon(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.accentGold,
                    minimumSize: const Size(double.infinity, 56),
                  ),
                  icon: const Icon(Icons.mic_rounded, size: 28),
                  label: const Text('🎤 Recite Dua Now'),
                  onPressed: _startRecitationAnalysis,
                )
              else
                ElevatedButton.icon(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.mintGreen,
                    minimumSize: const Size(double.infinity, 56),
                  ),
                  icon: const Icon(Icons.directions_run_rounded, size: 28),
                  label: const Text('Jump to Next Hurdle! 🚀'),
                  onPressed: _nextHurdle,
                ),
            ],
          ),
        ),
      ),
    );
  }
}
