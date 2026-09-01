import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../models/daily_entry_model.dart';
import '../../theme/app_colors.dart';
import '../../widgets/islamic_pattern_background.dart';
import '../rewards/scratch_reward_screen.dart';

/// Screen 3 — Daily Results & Celebration Screen
/// Celebrates child's daily good deeds with positive reinforcement cards and points total.
class DailyResultsScreen extends StatelessWidget {
  final List<DeedCheckResult> checkResults;

  const DailyResultsScreen({Key? key, required this.checkResults}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);
    final activeChild = appState.activeChild;

    int totalPointsToday = 0;
    for (var r in checkResults) {
      totalPointsToday += r.pointsEarned;
    }

    return Scaffold(
      body: IslamicPatternBackground(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            children: [
              const SizedBox(height: 20),

              // Celebration Header
              const Text(
                '🌟 What a Day!',
                style: TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textDark,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                '${activeChild.name} earned $totalPointsToday points today!',
                style: const TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.w600,
                  color: AppColors.primaryTeal,
                ),
              ),
              const SizedBox(height: 20),

              // Completed Deeds List
              Expanded(
                child: ListView.builder(
                  itemCount: checkResults.length,
                  itemBuilder: (context, index) {
                    final item = checkResults[index];
                    bool isPositiveGain = item.pointsEarned >= 0;

                    return Container(
                      margin: const EdgeInsets.only(bottom: 10),
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(18),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.03),
                            blurRadius: 8,
                            offset: const Offset(0, 3),
                          ),
                        ],
                      ),
                      child: Row(
                        children: [
                          Text(item.deed.iconEmoji, style: const TextStyle(fontSize: 26)),
                          const SizedBox(width: 14),
                          Expanded(
                            child: Text(
                              item.deed.title,
                              style: const TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.bold,
                                color: AppColors.textDark,
                              ),
                            ),
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                            decoration: BoxDecoration(
                              color: isPositiveGain
                                  ? AppColors.softGoldBg
                                  : const Color(0xFFFFEBEE),
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Text(
                              isPositiveGain
                                  ? '+${item.pointsEarned} pts'
                                  : '${item.pointsEarned} pts',
                              style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.bold,
                                color: isPositiveGain
                                    ? AppColors.textGold
                                    : Colors.red.shade600,
                              ),
                            ),
                          ),
                        ],
                      ),
                    );
                  },
                ),
              ),

              // Total Points Card & Encouraging Message
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: AppColors.softTealBg,
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: AppColors.primaryTeal.withOpacity(0.3)),
                ),
                child: Column(
                  children: [
                    const Text(
                      'MashaAllah! You did many good things today.',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: AppColors.primaryTeal,
                      ),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Text('⭐ Today\'s Total: ',
                            style: TextStyle(fontSize: 18, color: AppColors.textDark)),
                        Text(
                          '$totalPointsToday Points',
                          style: const TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.bold,
                            color: AppColors.textGold,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 20),

              // Action Buttons: Scratch Reward or Complete
              Row(
                children: [
                  Expanded(
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppColors.accentGold,
                      ),
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (_) => const ScratchRewardScreen(),
                          ),
                        );
                      },
                      child: const Text('🎁 Open Scratch Reward'),
                    ),
                  ),
                  const SizedBox(width: 12),
                  ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.primaryTeal,
                    ),
                    onPressed: () {
                      Navigator.popUntil(context, (route) => route.isFirst);
                    },
                    child: const Text('Done'),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
