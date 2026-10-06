import 'package:flutter/material.dart';
import '../../theme/app_colors.dart';
import '../../widgets/islamic_pattern_background.dart';
import 'dua_hurdle_game_screen.dart';
import 'alphabet_bubble_game_screen.dart';
import 'sticker_garden_screen.dart';
import 'quran_surah_screen.dart';

/// Screen 12 — Learn & Interactive Play Section
class LearnScreen extends StatelessWidget {
  const LearnScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return IslamicPatternBackground(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              '📖 Learn and play quest',
              style: TextStyle(
                fontSize: 28,
                fontWeight: FontWeight.bold,
                color: AppColors.textDark,
              ),
            ),
            const SizedBox(height: 6),
            const Text(
              'Fun Islamic learning hurdles, Quran surahs, alphabet games, and sticker garden!',
              style: TextStyle(fontSize: 14, color: AppColors.textMuted),
            ),
            const SizedBox(height: 20),

            // 1. Playable Feature: Short Quran Surahs (Male Qari)
            _GameLaunchCard(
              title: '📖 Short Quran surahs (male Qari)',
              desc: 'Listen, repeat and memorize short Juz Amma surahs with Male Qari audio!',
              emoji: '🕌',
              color: const Color(0xFFFFF8E1),
              tag: 'PLAY NOW 🚀',
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const QuranSurahScreen()),
                );
              },
            ),
            const SizedBox(height: 16),

            // 2. Playable Feature: Dua Recitation Hurdle Challenge
            _GameLaunchCard(
              title: '🤲 Dua recitation hurdle quest',
              desc: 'Recite regular Duas! Score 80%+ accuracy to jump over hurdles and win stars!',
              emoji: '🏃‍♂️',
              color: const Color(0xFFF3E5F5),
              tag: 'PLAY NOW 🚀',
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const DuaHurdleGameScreen()),
                );
              },
            ),
            const SizedBox(height: 16),

            // 3. Playable Feature: Alphabet Bubble Pop Game
            _GameLaunchCard(
              title: '🎈 Arabic alphabet bubble pop',
              desc: 'Listen to letter sounds and pop the floating Arabic and English bubbles!',
              emoji: '🎈',
              color: const Color(0xFFE1F5FE),
              tag: 'PLAY NOW 🚀',
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const AlphabetBubbleGameScreen()),
                );
              },
            ),
            const SizedBox(height: 16),

            // 4. Playable Feature: Good-Deed Sticker Garden
            _GameLaunchCard(
              title: '🌸 My good-deed sticker book',
              desc: 'Decorate your personal Islamic garden canvas with unlocked stickers!',
              emoji: '🌴',
              color: const Color(0xFFE8F5E9),
              tag: 'PLAY NOW 🚀',
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const StickerGardenScreen()),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}

class _GameLaunchCard extends StatelessWidget {
  final String title;
  final String desc;
  final String emoji;
  final Color color;
  final String tag;
  final VoidCallback onTap;

  const _GameLaunchCard({
    required this.title,
    required this.desc,
    required this.emoji,
    required this.color,
    required this.tag,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(24),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.04),
              blurRadius: 12,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Row(
          children: [
            Text(emoji, style: const TextStyle(fontSize: 36)),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Expanded(
                        child: Text(
                          title,
                          style: const TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                            color: AppColors.textDark,
                          ),
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                        decoration: BoxDecoration(
                          color: AppColors.primaryTeal,
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: Text(
                          tag,
                          style: const TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 6),
                  Text(
                    desc,
                    style: const TextStyle(fontSize: 12, color: AppColors.textMuted, height: 1.4),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
