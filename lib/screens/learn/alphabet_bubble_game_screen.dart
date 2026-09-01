import 'dart:async';
import 'dart:math';
import 'package:flutter/material.dart';
import '../../theme/app_colors.dart';
import '../../widgets/islamic_pattern_background.dart';
import '../../services/audio_service.dart';

class BubbleItem {
  final String letter;
  final String phonicsName;
  double x;
  double y;
  final Color color;

  BubbleItem({
    required this.letter,
    required this.phonicsName,
    required this.x,
    required this.y,
    required this.color,
  });
}

/// Screen 14 — Arabic & English Alphabet Bubble Pop Game
class AlphabetBubbleGameScreen extends StatefulWidget {
  const AlphabetBubbleGameScreen({Key? key}) : super(key: key);

  @override
  State<AlphabetBubbleGameScreen> createState() => _AlphabetBubbleGameScreenState();
}

class _AlphabetBubbleGameScreenState extends State<AlphabetBubbleGameScreen> {
  final List<BubbleItem> _bubbles = [];
  Timer? _timer;
  int _score = 0;
  late String _targetLetter;
  late String _targetPhonics;

  final List<Map<String, String>> _arabicLetters = [
    {'letter': 'ا', 'name': 'Alif'},
    {'letter': 'ب', 'name': 'Baa'},
    {'letter': 'ت', 'name': 'Taa'},
    {'letter': 'ث', 'name': 'Thaa'},
    {'letter': 'ج', 'name': 'Jeem'},
    {'letter': 'ح', 'name': 'Haa'},
  ];

  @override
  void initState() {
    super.initState();
    _pickNewTarget();
    _spawnBubbles();
    _startBubbleFloatTimer();
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  void _pickNewTarget() {
    final item = _arabicLetters[Random().nextInt(_arabicLetters.length)];
    setState(() {
      _targetLetter = item['letter']!;
      _targetPhonics = item['name']!;
    });
    AudioService.instance.playVoiceFeedback(context, 'Find and pop: $_targetPhonics!');
  }

  void _spawnBubbles() {
    _bubbles.clear();
    final colors = [
      AppColors.skyBlue,
      AppColors.mintGreen,
      AppColors.accentGold,
      AppColors.lavenderViolet,
      AppColors.softCoral,
    ];

    for (var item in _arabicLetters) {
      _bubbles.add(
        BubbleItem(
          letter: item['letter']!,
          phonicsName: item['name']!,
          x: Random().nextDouble() * 260,
          y: 400 + Random().nextDouble() * 200,
          color: colors[Random().nextInt(colors.length)],
        ),
      );
    }
  }

  void _startBubbleFloatTimer() {
    _timer = Timer.periodic(const Duration(milliseconds: 50), (timer) {
      if (!mounted) return;
      setState(() {
        for (var b in _bubbles) {
          b.y -= 2.5;
          if (b.y < -60) {
            b.y = 500;
          }
        }
      });
    });
  }

  void _popBubble(BubbleItem bubble) {
    if (bubble.letter == _targetLetter) {
      setState(() {
        _score += 10;
      });
      AudioService.instance.playVoiceFeedback(context, 'MashaAllah! You popped $_targetPhonics! ✨');
      _pickNewTarget();
      _spawnBubbles();
    } else {
      AudioService.instance.playVoiceFeedback(context, 'That is ${bubble.phonicsName}! Try finding $_targetPhonics!');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('🎈 Alphabet Bubble Pop'),
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: IslamicPatternBackground(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            children: [
              // Score & Target Header
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
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text('Pop the Bubble:', style: TextStyle(fontSize: 12, color: AppColors.textMuted)),
                        Text(
                          '$_targetLetter ($_targetPhonics)',
                          style: const TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.bold,
                            color: AppColors.primaryTeal,
                          ),
                        ),
                      ],
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                      decoration: BoxDecoration(
                        color: AppColors.softGoldBg,
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: Text(
                        '⭐ Score: $_score',
                        style: const TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                          color: AppColors.textGold,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 20),

              // Interactive Floating Bubbles Arena
              Expanded(
                child: Container(
                  width: double.infinity,
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.6),
                    borderRadius: BorderRadius.circular(32),
                    border: Border.all(color: AppColors.skyBlue.withOpacity(0.3)),
                  ),
                  child: Stack(
                    children: _bubbles.map((b) {
                      return Positioned(
                        left: b.x,
                        top: b.y,
                        child: GestureDetector(
                          onTap: () => _popBubble(b),
                          child: Container(
                            width: 70,
                            height: 70,
                            decoration: BoxDecoration(
                              color: b.color.withOpacity(0.85),
                              shape: BoxShape.circle,
                              boxShadow: [
                                BoxShadow(
                                  color: b.color.withOpacity(0.4),
                                  blurRadius: 10,
                                  offset: const Offset(0, 4),
                                ),
                              ],
                            ),
                            child: Center(
                              child: Text(
                                b.letter,
                                style: const TextStyle(
                                  fontSize: 32,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.white,
                                ),
                              ),
                            ),
                          ),
                        ),
                      );
                    }).toList(),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
