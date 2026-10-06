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
            return Dialog(
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
              child: Padding(
                padding: const EdgeInsets.all(22.0),
                child: SingleChildScrollView(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Text(
                        '✨ Add custom habit',
                        style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: AppColors.textDark),
                      ),
                      const SizedBox(height: 16),
                      TextField(
                        controller: titleController,
                        decoration: InputDecoration(
                          labelText: 'Habit title (e.g. Give Salam)',
                          filled: true,
                          fillColor: AppColors.softTealBg,
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                        ),
                      ),
                      const SizedBox(height: 10),
                      TextField(
                        controller: descController,
                        decoration: InputDecoration(
                          labelText: 'Question text for check-in',
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
                          labelText: 'Points',
                          filled: true,
                          fillColor: AppColors.softTealBg,
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                        ),
                      ),
                      const SizedBox(height: 12),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                        decoration: BoxDecoration(
                          color: AppColors.softGoldBg,
                          borderRadius: BorderRadius.circular(16),
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            const Text('Positive deed?', style: TextStyle(fontWeight: FontWeight.bold, color: AppColors.textDark)),
                            Switch(
                              value: isPositive,
                              activeColor: AppColors.primaryTeal,
                              onChanged: (val) {
                                setDialogState(() => isPositive = val);
                              },
                            ),
                          ],
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
                              child: const Text('Add habit'),
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
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Customize habits and deeds'),
      ),
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: AppColors.primaryTeal,
        icon: const Icon(Icons.add_rounded),
        label: const Text('Add new habit'),
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
