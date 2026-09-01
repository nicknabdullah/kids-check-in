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
        return AlertDialog(
          title: const Text('Add Custom Reward'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: titleController,
                decoration: const InputDecoration(labelText: 'Reward Title (e.g. Family Outing)'),
              ),
              TextField(
                controller: pointsController,
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(labelText: 'Points Required'),
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Cancel'),
            ),
            ElevatedButton(
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
              child: const Text('Add Reward'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Customize Scratch Rewards'),
      ),
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: AppColors.primaryTeal,
        icon: const Icon(Icons.add_rounded),
        label: const Text('Add Reward'),
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
