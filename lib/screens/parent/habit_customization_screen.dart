import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../models/deed_model.dart';
import '../../theme/app_colors.dart';

/// Parent Screen for Adding / Customizing Daily Habits and Good Deeds.
class HabitCustomizationScreen extends StatefulWidget {
  const HabitCustomizationScreen({Key? key}) : super(key: key);

  @override
  State<HabitCustomizationScreen> createState() => _HabitCustomizationScreenState();
}

class _HabitCustomizationScreenState extends State<HabitCustomizationScreen> {
  void _showAddHabitDialog(BuildContext context) {
    final titleController = TextEditingController();
    final descController = TextEditingController();
    final pointsController = TextEditingController(text: '3');
    bool isPositive = true;

    showDialog(
      context: context,
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setDialogState) {
            return AlertDialog(
              title: const Text('Add Custom Habit'),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  TextField(
                    controller: titleController,
                    decoration: const InputDecoration(labelText: 'Habit Title (e.g. Give Salam)'),
                  ),
                  TextField(
                    controller: descController,
                    decoration: const InputDecoration(labelText: 'Question text for check-in'),
                  ),
                  TextField(
                    controller: pointsController,
                    keyboardType: TextInputType.number,
                    decoration: const InputDecoration(labelText: 'Points'),
                  ),
                  Row(
                    children: [
                      const Text('Positive Deed?'),
                      Switch(
                        value: isPositive,
                        onChanged: (val) {
                          setDialogState(() => isPositive = val);
                        },
                      ),
                    ],
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
                      appState.addDeed(
                        DeedModel(
                          id: DateTime.now().millisecondsSinceEpoch.toString(),
                          title: titleController.text,
                          description: descController.text.isNotEmpty
                              ? descController.text
                              : titleController.text,
                          category: 'Custom',
                          points: int.tryParse(pointsController.text) ?? 2,
                          isPositive: isPositive,
                          iconEmoji: isPositive ? '⭐' : '🌱',
                        ),
                      );
                      Navigator.pop(context);
                    }
                  },
                  child: const Text('Add Habit'),
                ),
              ],
            );
          },
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Customize Habits & Deeds'),
      ),
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: AppColors.primaryTeal,
        icon: const Icon(Icons.add_rounded),
        label: const Text('Add New Habit'),
        onPressed: () => _showAddHabitDialog(context),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: appState.deeds.length,
        itemBuilder: (context, index) {
          final deed = appState.deeds[index];
          return Card(
            margin: const EdgeInsets.only(bottom: 12),
            child: SwitchListTile(
              secondary: Text(deed.iconEmoji, style: const TextStyle(fontSize: 26)),
              title: Text(
                deed.title,
                style: const TextStyle(fontWeight: FontWeight.bold),
              ),
              subtitle: Text(
                '${deed.category} • ${deed.isPositive ? '+' : '-'}${deed.points} pts',
              ),
              value: deed.isEnabled,
              onChanged: (_) {
                appState.toggleDeedEnabled(deed.id);
              },
            ),
          );
        },
      ),
    );
  }
}
