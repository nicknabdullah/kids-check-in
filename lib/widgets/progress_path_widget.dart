import 'package:flutter/material.dart';
import '../theme/app_colors.dart';

/// Visual Adventure Progress Path: 🌙 → ⭐ → 🕌 → 🌳 → 🏆
/// Represents step-by-step good deed completion along a playful curving trail.
class ProgressPathWidget extends StatelessWidget {
  final int completedDeeds;
  final int totalDeeds;

  const ProgressPathWidget({
    Key? key,
    required this.completedDeeds,
    required this.totalDeeds,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // 5 Visual Stages along the journey map
    final stages = [
      {'emoji': '🌙', 'name': 'Bismillah'},
      {'emoji': '⭐', 'name': 'Deeds'},
      {'emoji': '🕌', 'name': 'Prayer'},
      {'emoji': '🌳', 'name': 'Garden'},
      {'emoji': '🏆', 'name': 'Reward'},
    ];

    double progressFraction = totalDeeds > 0 ? (completedDeeds / totalDeeds).clamp(0.0, 1.0) : 0.0;
    int currentStageIndex = (progressFraction * (stages.length - 1)).floor();

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(24),
        boxShadow: [
          BoxShadow(
            color: AppColors.primaryTeal.withOpacity(0.08),
            blurRadius: 15,
            offset: const Offset(0, 5),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                '🗺️ Today\'s Adventure Path',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textDark,
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                decoration: BoxDecoration(
                  color: AppColors.softTealBg,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Text(
                  '$completedDeeds / $totalDeeds Completed',
                  style: const TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.bold,
                    color: AppColors.primaryTeal,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 20),

          // Horizontal Animated Stage Nodes
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: List.generate(stages.length, (index) {
              bool isReached = index <= currentStageIndex;
              bool isCurrent = index == currentStageIndex;

              return Column(
                children: [
                  AnimatedContainer(
                    duration: const Duration(milliseconds: 300),
                    width: isCurrent ? 52 : 44,
                    height: isCurrent ? 52 : 44,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: isReached ? AppColors.softGoldBg : Colors.grey.shade100,
                      border: Border.all(
                        color: isCurrent
                            ? AppColors.accentGold
                            : isReached
                                ? AppColors.primaryTeal
                                : Colors.grey.shade300,
                        width: isCurrent ? 3 : 2,
                      ),
                      boxShadow: isCurrent
                          ? [
                              BoxShadow(
                                color: AppColors.accentGold.withOpacity(0.4),
                                blurRadius: 10,
                                spreadRadius: 2,
                              ),
                            ]
                          : [],
                    ),
                    child: Center(
                      child: Text(
                        stages[index]['emoji']!,
                        style: TextStyle(
                          fontSize: isCurrent ? 26 : 20,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    stages[index]['name']!,
                    style: TextStyle(
                      fontSize: 12,
                      fontWeight: isCurrent ? FontWeight.bold : FontWeight.normal,
                      color: isReached ? AppColors.textDark : AppColors.textMuted,
                    ),
                  ),
                ],
              );
            }),
          ),
        ],
      ),
    );
  }
}
