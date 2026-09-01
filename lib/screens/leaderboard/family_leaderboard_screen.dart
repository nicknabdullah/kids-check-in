import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../theme/app_colors.dart';
import '../../widgets/faceless_avatar.dart';
import '../../widgets/islamic_pattern_background.dart';

/// Screen 4 — Family Leaderboard & Special Strengths Recognition
class FamilyLeaderboardScreen extends StatelessWidget {
  const FamilyLeaderboardScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);
    final children = List.of(appState.children)
      ..sort((a, b) => b.currentPoints.compareTo(a.currentPoints));

    return IslamicPatternBackground(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              '🌟 Family Stars',
              style: TextStyle(
                fontSize: 28,
                fontWeight: FontWeight.bold,
                color: AppColors.textDark,
              ),
            ),
            const SizedBox(height: 6),
            const Text(
              'Celebrating everyone\'s good deeds and unique strengths!',
              style: TextStyle(fontSize: 14, color: AppColors.textMuted),
            ),
            const SizedBox(height: 24),

            if (!appState.isLeaderboardEnabled)
              Container(
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: AppColors.softGoldBg,
                  borderRadius: BorderRadius.circular(20),
                ),
                child: const Text(
                  '🔒 The competitive leaderboard is currently disabled by parents to keep focus purely on personal growth and kindness.',
                  style: TextStyle(fontSize: 15, color: AppColors.textDark),
                ),
              )
            else ...[
              // Podium View
              Container(
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(28),
                  boxShadow: [
                    BoxShadow(
                      color: AppColors.primaryTeal.withOpacity(0.08),
                      blurRadius: 16,
                      offset: const Offset(0, 6),
                    ),
                  ],
                ),
                child: Column(
                  children: children.asMap().entries.map((entry) {
                    final index = entry.key;
                    final child = entry.value;
                    final medals = ['🥇', '🥈', '🥉'];
                    final medal = index < 3 ? medals[index] : '⭐';

                    return Container(
                      margin: const EdgeInsets.only(bottom: 12),
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: index == 0 ? AppColors.softGoldBg : Colors.grey.shade50,
                        borderRadius: BorderRadius.circular(20),
                        border: Border.all(
                          color: index == 0 ? AppColors.accentGold : Colors.transparent,
                        ),
                      ),
                      child: Row(
                        children: [
                          Text(medal, style: const TextStyle(fontSize: 28)),
                          const SizedBox(width: 12),
                          FacelessAvatarWidget(config: child.avatar, size: 50),
                          const SizedBox(width: 14),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  child.name,
                                  style: const TextStyle(
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                    color: AppColors.textDark,
                                  ),
                                ),
                                Text(
                                  child.specialTitle,
                                  style: const TextStyle(
                                    fontSize: 12,
                                    color: AppColors.primaryTeal,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Text(
                            '${child.currentPoints} pts',
                            style: const TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                              color: AppColors.textGold,
                            ),
                          ),
                        ],
                      ),
                    );
                  }).toList(),
                ),
              ),
              const SizedBox(height: 24),

              // Special Strength Category Recognition (No Child Left Out!)
              const Text(
                '🎖️ Special Strengths Champions',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textDark,
                ),
              ),
              const SizedBox(height: 14),

              GridView.count(
                crossAxisCount: 2,
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisSpacing: 12,
                mainAxisSpacing: 12,
                childAspectRatio: 1.3,
                children: const [
                  _CategoryBadgeCard(
                    title: 'Kindness Champion',
                    emoji: '🤝',
                    winnerName: 'Maimun',
                    color: Color(0xFFF3E5F5),
                  ),
                  _CategoryBadgeCard(
                    title: 'Helping Hero',
                    emoji: '🦸',
                    winnerName: 'Maryam',
                    color: Color(0xFFE1F5FE),
                  ),
                  _CategoryBadgeCard(
                    title: 'Good Manners Star',
                    emoji: '⭐',
                    winnerName: 'Mabrur',
                    color: Color(0xFFFFF8E1),
                  ),
                  _CategoryBadgeCard(
                    title: 'Dua Champion',
                    emoji: '🤲',
                    winnerName: 'Maimun',
                    color: Color(0xFFE8F5E9),
                  ),
                ],
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _CategoryBadgeCard extends StatelessWidget {
  final String title;
  final String emoji;
  final String winnerName;
  final Color color;

  const _CategoryBadgeCard({
    required this.title,
    required this.emoji,
    required this.winnerName,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: color,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(emoji, style: const TextStyle(fontSize: 32)),
          const SizedBox(height: 6),
          Text(
            title,
            style: const TextStyle(
              fontSize: 13,
              fontWeight: FontWeight.bold,
              color: AppColors.textDark,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 4),
          Text(
            '🌟 $winnerName',
            style: const TextStyle(
              fontSize: 12,
              fontWeight: FontWeight.w600,
              color: AppColors.primaryTeal,
            ),
          ),
        ],
      ),
    );
  }
}
