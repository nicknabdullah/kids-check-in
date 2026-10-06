import 'dart:math';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../models/reward_model.dart';
import '../../theme/app_colors.dart';
import '../../widgets/scratch_card_widget.dart';
import '../../widgets/islamic_pattern_background.dart';

/// Screen 5 — Scratch Card Mystery Reward Reveal Screen
class ScratchRewardScreen extends StatefulWidget {
  const ScratchRewardScreen({Key? key}) : super(key: key);

  @override
  State<ScratchRewardScreen> createState() => _ScratchRewardScreenState();
}

class _ScratchRewardScreenState extends State<ScratchRewardScreen> {
  late RewardModel _selectedReward;
  bool _isScratched = false;

  @override
  void initState() {
    super.initState();
    final appState = Provider.of<AppStateProvider>(context, listen: false);
    final rewards = appState.rewards;
    // Pick a mystery reward based on available parent rewards
    _selectedReward = rewards[Random().nextInt(rewards.length)];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Mystery reward'),
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: IslamicPatternBackground(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            children: [
              const Text(
                '🎁 You earned a reward!',
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                  color: AppColors.textDark,
                ),
              ),
              const SizedBox(height: 8),
              const Text(
                'Scratch to discover your surprise!',
                style: TextStyle(fontSize: 16, color: AppColors.textMuted),
              ),
              const SizedBox(height: 30),

              // Interactive Scratch Card Widget
              Center(
                child: ScratchCardWidget(
                  rewardContent: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        _selectedReward.iconEmoji,
                        style: const TextStyle(fontSize: 72),
                      ),
                      const SizedBox(height: 16),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16),
                        child: Text(
                          _selectedReward.title,
                          style: const TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.bold,
                            color: AppColors.textDark,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ),
                      const SizedBox(height: 10),
                      const Text(
                        '🎉 Mabrouk! Claim with Mom/Dad!',
                        style: TextStyle(
                          fontSize: 14,
                          fontWeight: FontWeight.bold,
                          color: AppColors.primaryTeal,
                        ),
                      ),
                    ],
                  ),
                  onScratchedComplete: () {
                    setState(() {
                      _isScratched = true;
                    });
                  },
                ),
              ),
              const SizedBox(height: 30),

              if (_isScratched)
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.primaryTeal,
                    minimumSize: const Size(200, 52),
                  ),
                  onPressed: () {
                    Navigator.pop(context);
                  },
                  child: const Text('Awesome!'),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
