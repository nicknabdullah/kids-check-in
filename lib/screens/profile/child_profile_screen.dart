import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../theme/app_colors.dart';
import '../../widgets/faceless_avatar.dart';
import '../../widgets/islamic_pattern_background.dart';
import 'avatar_customizer_screen.dart';

/// Screen 8 — Child Profile & Achievement Badges
class ChildProfileScreen extends StatelessWidget {
  const ChildProfileScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);
    final activeChild = appState.activeChild;

    return Scaffold(
      appBar: AppBar(
        title: const Text('My Profile'),
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: IslamicPatternBackground(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(20),
          child: Column(
            children: [
              // Avatar Showcase & Edit Trigger
              GestureDetector(
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => const AvatarCustomizerScreen(),
                    ),
                  );
                },
                child: Stack(
                  children: [
                    FacelessAvatarWidget(config: activeChild.avatar, size: 140),
                    Positioned(
                      bottom: 0,
                      right: 0,
                      child: Container(
                        padding: const EdgeInsets.all(8),
                        decoration: const BoxDecoration(
                          color: AppColors.accentGold,
                          shape: BoxShape.circle,
                        ),
                        child: const Icon(Icons.edit_rounded, color: Colors.white, size: 20),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 14),
              Text(
                activeChild.name,
                style: const TextStyle(
                  fontSize: 26,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textDark,
                ),
              ),
              Text(
                'Level ${activeChild.level} Explorer',
                style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                  color: AppColors.primaryTeal,
                ),
              ),
              const SizedBox(height: 20),

              // Stats Row Cards
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  _ProfileStatCard(
                    title: 'Current Pts',
                    value: '${activeChild.currentPoints}',
                    emoji: '⭐',
                  ),
                  _ProfileStatCard(
                    title: 'Lifetime Pts',
                    value: '${activeChild.lifetimePoints}',
                    emoji: '🌟',
                  ),
                  _ProfileStatCard(
                    title: 'Streak',
                    value: '${activeChild.streakDays} Days',
                    emoji: '🔥',
                  ),
                ],
              ),
              const SizedBox(height: 30),

              // Achievements Section
              const Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  '🏆 Badges & Achievements',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: AppColors.textDark,
                  ),
                ),
              ),
              const SizedBox(height: 14),

              ListView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: appState.achievements.length,
                itemBuilder: (context, index) {
                  final item = appState.achievements[index];
                  return Container(
                    margin: const EdgeInsets.only(bottom: 12),
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: item.isUnlocked ? Colors.white : Colors.grey.shade100,
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(
                        color: item.isUnlocked ? AppColors.accentGold : Colors.grey.shade300,
                      ),
                    ),
                    child: Row(
                      children: [
                        Text(item.iconEmoji, style: const TextStyle(fontSize: 32)),
                        const SizedBox(width: 14),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                item.title,
                                style: TextStyle(
                                  fontSize: 16,
                                  fontWeight: FontWeight.bold,
                                  color: item.isUnlocked
                                      ? AppColors.textDark
                                      : AppColors.textMuted,
                                ),
                              ),
                              const SizedBox(height: 2),
                              Text(
                                item.description,
                                style: const TextStyle(
                                  fontSize: 13,
                                  color: AppColors.textMuted,
                                ),
                              ),
                            ],
                          ),
                        ),
                        if (item.isUnlocked)
                          const Icon(Icons.check_circle_rounded, color: AppColors.mintGreen),
                      ],
                    ),
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _ProfileStatCard extends StatelessWidget {
  final String title;
  final String value;
  final String emoji;

  const _ProfileStatCard({
    required this.title,
    required this.value,
    required this.emoji,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.04),
            blurRadius: 8,
            offset: const Offset(0, 3),
          ),
        ],
      ),
      child: Column(
        children: [
          Text(emoji, style: const TextStyle(fontSize: 24)),
          const SizedBox(height: 6),
          Text(
            value,
            style: const TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
              color: AppColors.textDark,
            ),
          ),
          Text(
            title,
            style: const TextStyle(fontSize: 11, color: AppColors.textMuted),
          ),
        ],
      ),
    );
  }
}
