import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../models/reward_model.dart';
import '../../theme/app_colors.dart';

/// Parent Screen for Managing Scratch Card Rewards.
class RewardCustomizationScreen extends StatefulWidget {
  const RewardCustomizationScreen({Key? key}) : super(key: key);

  @override
  State<RewardCustomizationScreen> createState() => _RewardCustomizationScreenState();
}

class _RewardCustomizationScreenState extends State<RewardCustomizationScreen> {
  void _showAddRewardDialog(BuildContext context) {
    final titleController = TextEditingController();
    final pointsController = TextEditingController(text: '50');

    showDialog(
      context: context,
      builder: (context) {
        return Dialog(
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
          child: Padding(
            padding: const EdgeInsets.all(22.0),
            child: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text(
                    '🎁 Add custom reward',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: AppColors.textDark),
                  ),
                  const SizedBox(height: 16),
                  TextField(
                    controller: titleController,
                    decoration: InputDecoration(
                      labelText: 'Reward title (e.g. Family outing)',
                      filled: true,
                      fillColor: AppColors.softTealBg,
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                    ),
                  ),
                  const SizedBox(height: 10),
                  TextField(
                    controller: pointsController,
                    keyboardType: TextInputType.number,
                    decoration: InputDecoration(
                      labelText: 'Points required',
                      filled: true,
                      fillColor: AppColors.softTealBg,
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                    ),
                  ),
                  const SizedBox(height: 20),
                  Row(
                    children: [
                      Expanded(
                        child: TextButton(
                          onPressed: () => Navigator.pop(context),
                          child: const Text('Cancel'),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        child: ElevatedButton(
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppColors.primaryTeal,
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                            padding: const EdgeInsets.symmetric(vertical: 12),
                          ),
                          onPressed: () {
                            if (titleController.text.isNotEmpty) {
                              final appState = Provider.of<AppStateProvider>(context, listen: false);
                              appState.addReward(
                                RewardModel(
                                  id: DateTime.now().millisecondsSinceEpoch.toString(),
                                  title: titleController.text,
                                  iconEmoji: '🎁',
                                  requiredPoints: int.tryParse(pointsController.text) ?? 50,
                                  isUnlocked: true,
                                ),
                              );
                              Navigator.pop(context);
                            }
                          },
                          child: const Text('Add reward'),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Customize scratch rewards'),
      ),
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: AppColors.primaryTeal,
        icon: const Icon(Icons.add_rounded),
        label: const Text('Add reward'),
        onPressed: () => _showAddRewardDialog(context),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: appState.rewards.length,
        itemBuilder: (context, index) {
          final reward = appState.rewards[index];
          return Card(
            margin: const EdgeInsets.only(bottom: 12),
            child: ListTile(
              leading: Text(reward.iconEmoji, style: const TextStyle(fontSize: 30)),
              title: Text(
                reward.title,
                style: const TextStyle(fontWeight: FontWeight.bold),
              ),
              subtitle: Text(
                'Required: ${reward.requiredPoints} pts • Weight: ${(reward.probability * 100).toInt()}%',
              ),
              trailing: const Icon(Icons.check_circle_rounded, color: AppColors.mintGreen),
            ),
          );
        },
      ),
    );
  }
}
