import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../models/child_model.dart';
import '../../theme/app_colors.dart';
import '../../widgets/faceless_avatar.dart';
import '../../widgets/islamic_pattern_background.dart';
import '../../widgets/pattern_lock_widget.dart';
import '../profile/avatar_customizer_screen.dart';
import 'habit_customization_screen.dart';
import 'reward_customization_screen.dart';
import 'splash_walkthrough_screen.dart';

/// Screen 7 — Parent Control Dashboard
class ParentDashboardScreen extends StatelessWidget {
  const ParentDashboardScreen({Key? key}) : super(key: key);

  void _showAddChildDialog(BuildContext context) {
    final nameController = TextEditingController();
    final ageController = TextEditingController(text: '6');
    AvatarConfig avatarConfig = AvatarConfig();

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
                        '👶 Add sibling or child',
                        style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: AppColors.textDark),
                      ),
                      const SizedBox(height: 16),
                      FacelessAvatarWidget(config: avatarConfig, size: 84),
                      const SizedBox(height: 16),
                      TextField(
                        controller: nameController,
                        decoration: InputDecoration(
                          labelText: 'Child name',
                          filled: true,
                          fillColor: AppColors.softTealBg,
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                        ),
                      ),
                      const SizedBox(height: 10),
                      TextField(
                        controller: ageController,
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration(
                          labelText: 'Age',
                          filled: true,
                          fillColor: AppColors.softTealBg,
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                        ),
                      ),
                      const SizedBox(height: 14),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          ChoiceChip(
                            label: const Text('Boy 👦'),
                            selected: avatarConfig.gender == 'boy',
                            onSelected: (_) => setDialogState(() => avatarConfig = avatarConfig.copyWith(gender: 'boy')),
                          ),
                          const SizedBox(width: 10),
                          ChoiceChip(
                            label: const Text('Girl 👧'),
                            selected: avatarConfig.gender == 'girl',
                            onSelected: (_) => setDialogState(() => avatarConfig = avatarConfig.copyWith(gender: 'girl')),
                          ),
                        ],
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
                                if (nameController.text.trim().isNotEmpty) {
                                  final appState = Provider.of<AppStateProvider>(context, listen: false);
                                  appState.addChild(
                                    ChildModel(
                                      id: DateTime.now().millisecondsSinceEpoch.toString(),
                                      name: nameController.text.trim(),
                                      age: int.tryParse(ageController.text) ?? 6,
                                      avatar: avatarConfig,
                                      specialTitle: 'Good deeds explorer 🌟',
                                    ),
                                  );
                                  Navigator.pop(context);
                                }
                              },
                              child: const Text('Add child'),
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

    return IslamicPatternBackground(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text(
                  '👨‍👩‍👧 Parent dashboard',
                  style: TextStyle(
                    fontSize: 26,
                    fontWeight: FontWeight.bold,
                    color: AppColors.textDark,
                  ),
                ),
                Row(
                  children: [
                    IconButton(
                      icon: const Icon(Icons.help_outline_rounded, color: AppColors.primaryTeal),
                      tooltip: 'App guide and walkthrough',
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (_) => const SplashWalkthroughScreen(isHelpMode: true),
                          ),
                        );
                      },
                    ),
                    TextButton.icon(
                      icon: const Icon(Icons.lock_rounded, color: Colors.red),
                      label: const Text('Lock', style: TextStyle(color: Colors.red)),
                      onPressed: () => appState.logoutParent(),
                    ),
                  ],
                ),
              ],
            ),
            const SizedBox(height: 6),
            const Text(
              'Manage your children, daily habits, and reward rates.',
              style: TextStyle(fontSize: 14, color: AppColors.textMuted),
            ),
            const SizedBox(height: 20),

            // Children Management Section
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text(
                  '👶 Children profiles',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppColors.textDark),
                ),
                ElevatedButton.icon(
                  style: ElevatedButton.styleFrom(backgroundColor: AppColors.primaryTeal, padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8)),
                  icon: const Icon(Icons.add_rounded, size: 18),
                  label: const Text('Add child', style: TextStyle(fontSize: 13)),
                  onPressed: () => _showAddChildDialog(context),
                ),
              ],
            ),
            const SizedBox(height: 12),

            GridView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                mainAxisSpacing: 12,
                crossAxisSpacing: 12,
                childAspectRatio: 0.82,
              ),
              itemCount: appState.children.length,
              itemBuilder: (context, index) {
                final child = appState.children[index];
                return Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.04),
                        blurRadius: 10,
                        offset: const Offset(0, 4),
                      ),
                    ],
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      FacelessAvatarWidget(config: child.avatar, size: 60),
                      const SizedBox(height: 8),
                      Text(
                        child.name,
                        style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: AppColors.textDark),
                      ),
                      Text(
                        'Age ${child.age} • ${child.patternLock != null ? '🔒 Pattern' : '🔓 No pattern'}',
                        style: const TextStyle(fontSize: 11, color: AppColors.textMuted),
                      ),
                      const SizedBox(height: 8),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: [
                          IconButton(
                            icon: const Icon(Icons.palette_rounded, color: AppColors.primaryTeal, size: 20),
                            tooltip: 'Customize avatar',
                            onPressed: () {
                              appState.setActiveChild(child.id);
                              Navigator.push(
                                context,
                                MaterialPageRoute(builder: (_) => const AvatarCustomizerScreen()),
                              );
                            },
                          ),
                          IconButton(
                            icon: const Icon(Icons.gesture_rounded, color: AppColors.accentGold, size: 20),
                            tooltip: 'Set pattern lock',
                            onPressed: () {
                              showDialog(
                                context: context,
                                builder: (_) => Dialog(
                                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
                                  child: PatternLockWidget(
                                    title: 'Set pattern lock for ${child.name} ⭐',
                                    onPatternComplete: (pattern) {
                                      appState.setChildPatternLock(child.id, pattern);
                                      Navigator.pop(context);
                                      ScaffoldMessenger.of(context).showSnackBar(
                                        SnackBar(content: Text('Pattern lock set for ${child.name}! 🎉')),
                                      );
                                    },
                                  ),
                                ),
                              );
                            },
                          ),
                          IconButton(
                            icon: const Icon(Icons.delete_outline_rounded, color: Colors.red, size: 20),
                            onPressed: () => appState.deleteChild(child.id),
                          ),
                        ],
                      ),
                    ],
                  ),
                );
              },
            ),
            const SizedBox(height: 24),

            // Navigation Options
            _DashboardCard(
              icon: Icons.checklist_rtl_rounded,
              title: 'Customize daily habits and deeds',
              subtitle: 'Add, edit, reorder or adjust points for daily check-in.',
              color: AppColors.softTealBg,
              iconColor: AppColors.primaryTeal,
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const HabitCustomizationScreen()),
                );
              },
            ),
            const SizedBox(height: 12),
            _DashboardCard(
              icon: Icons.card_giftcard_rounded,
              title: 'Customize scratch rewards',
              subtitle: 'Add custom surprise rewards (treats, stories, hugs).',
              color: AppColors.softGoldBg,
              iconColor: AppColors.accentGold,
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const RewardCustomizationScreen()),
                );
              },
            ),
            const SizedBox(height: 24),

            // Settings
            const Text(
              '⚙️ Family and security settings',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: AppColors.textDark,
              ),
            ),
            const SizedBox(height: 12),

            Container(
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.04),
                    blurRadius: 10,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: Column(
                children: [
                  SwitchListTile(
                    title: const Text('Competitive leaderboard'),
                    subtitle: const Text('Allow sibling points ranking'),
                    value: appState.isLeaderboardEnabled,
                    onChanged: (val) => appState.toggleLeaderboard(val),
                  ),
                  const Divider(height: 1),
                  SwitchListTile(
                    title: const Text('Sound effects and voice prompts'),
                    subtitle: const Text('Play gentle encouraging audio tones'),
                    value: appState.isSoundEnabled,
                    onChanged: (val) => appState.toggleSound(val),
                  ),
                  const Divider(height: 1),
                  ListTile(
                    leading: const Icon(Icons.lock_reset_rounded, color: AppColors.primaryTeal),
                    title: const Text('Change parent security PIN'),
                    subtitle: const Text('Update the 4-digit security PIN'),
                    trailing: const Icon(Icons.chevron_right_rounded),
                    onTap: () {
                      final pinController = TextEditingController();
                      final confirmController = TextEditingController();
                      bool isConfirmStep = false;

                      showDialog(
                        context: context,
                        builder: (ctx) => StatefulBuilder(
                          builder: (ctx, setDialogState) {
                            return Dialog(
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
                              child: Padding(
                                padding: const EdgeInsets.all(24.0),
                                child: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    Text(
                                      isConfirmStep ? '🔒 Confirm new parent PIN' : '🔒 Change parent PIN',
                                      style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: AppColors.textDark),
                                    ),
                                    const SizedBox(height: 12),
                                    Text(
                                      isConfirmStep
                                          ? 'Re-enter your new 4-digit PIN to confirm:'
                                          : 'Enter a new 4-digit security code:',
                                      style: const TextStyle(fontSize: 13, color: AppColors.textMuted),
                                    ),
                                    const SizedBox(height: 16),
                                    TextField(
                                      controller: isConfirmStep ? confirmController : pinController,
                                      keyboardType: TextInputType.number,
                                      maxLength: 4,
                                      autofocus: true,
                                      textAlign: TextAlign.center,
                                      style: const TextStyle(fontSize: 28, letterSpacing: 10, fontWeight: FontWeight.bold, color: AppColors.primaryTeal),
                                      decoration: InputDecoration(
                                        hintText: '••••',
                                        filled: true,
                                        fillColor: AppColors.softTealBg,
                                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                                      ),
                                    ),
                                    const SizedBox(height: 16),
                                    Row(
                                      children: [
                                        Expanded(
                                          child: TextButton(
                                            onPressed: () => Navigator.pop(ctx),
                                            child: const Text('Cancel'),
                                          ),
                                        ),
                                        const SizedBox(width: 8),
                                        Expanded(
                                          child: ElevatedButton(
                                            onPressed: () {
                                              if (!isConfirmStep) {
                                                if (pinController.text.length == 4) {
                                                  setDialogState(() => isConfirmStep = true);
                                                } else {
                                                  ScaffoldMessenger.of(context).showSnackBar(
                                                    const SnackBar(content: Text('PIN must be exactly 4 digits!')),
                                                  );
                                                }
                                              } else {
                                                if (confirmController.text == pinController.text) {
                                                  appState.updateParentPin(confirmController.text);
                                                  Navigator.pop(ctx);
                                                  ScaffoldMessenger.of(context).showSnackBar(
                                                    const SnackBar(content: Text('✨ MashaAllah! Parent PIN updated successfully!')),
                                                  );
                                                } else {
                                                  ScaffoldMessenger.of(context).showSnackBar(
                                                    const SnackBar(content: Text('❌ PINs do not match! Please try again.')),
                                                  );
                                                  setDialogState(() {
                                                    pinController.clear();
                                                    confirmController.clear();
                                                    isConfirmStep = false;
                                                  });
                                                }
                                              }
                                            },
                                            style: ElevatedButton.styleFrom(
                                              backgroundColor: AppColors.primaryTeal,
                                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                                              padding: const EdgeInsets.symmetric(vertical: 12),
                                            ),
                                            child: Text(isConfirmStep ? 'Confirm PIN' : 'Next step'),
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                            );
                          },
                        ),
                      );
                    },
                  ),
                  const Divider(height: 1),
                  ListTile(
                    leading: const Icon(Icons.delete_forever_rounded, color: Colors.red),
                    title: const Text('Reset all application data', style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
                    subtitle: const Text('Clear all children profiles, points, history and restore app to fresh'),
                    trailing: const Icon(Icons.chevron_right_rounded, color: Colors.red),
                    onTap: () {
                      showDialog(
                        context: context,
                        builder: (ctx) => Dialog(
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
                          child: Padding(
                            padding: const EdgeInsets.all(24.0),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                const Icon(Icons.warning_amber_rounded, color: Colors.red, size: 48),
                                const SizedBox(height: 12),
                                const Text(
                                  'Reset all data?',
                                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: AppColors.textDark),
                                ),
                                const SizedBox(height: 12),
                                const Text(
                                  'Are you sure you want to reset all data?\n\nThis will permanently delete all children profiles, streak history, and custom rewards, restoring the app to factory fresh state.',
                                  textAlign: TextAlign.center,
                                  style: TextStyle(fontSize: 13, color: AppColors.textMuted),
                                ),
                                const SizedBox(height: 20),
                                Row(
                                  children: [
                                    Expanded(
                                      child: TextButton(
                                        onPressed: () => Navigator.pop(ctx),
                                        child: const Text('Cancel'),
                                      ),
                                    ),
                                    const SizedBox(width: 8),
                                    Expanded(
                                      child: ElevatedButton(
                                        style: ElevatedButton.styleFrom(
                                          backgroundColor: Colors.red,
                                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                                          padding: const EdgeInsets.symmetric(vertical: 12),
                                        ),
                                        onPressed: () {
                                          Navigator.pop(ctx);
                                          appState.resetAllData();
                                        },
                                        child: const Text('Yes, reset all'),
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

class _DashboardCard extends StatelessWidget {
  final IconData icon;
  final String title;
  final String subtitle;
  final Color color;
  final Color iconColor;
  final VoidCallback onTap;

  const _DashboardCard({
    required this.icon,
    required this.title,
    required this.subtitle,
    required this.color,
    required this.iconColor,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(24),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.04),
              blurRadius: 10,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: color,
                borderRadius: BorderRadius.circular(18),
              ),
              child: Icon(icon, color: iconColor, size: 28),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: AppColors.textDark,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    subtitle,
                    style: const TextStyle(fontSize: 12, color: AppColors.textMuted),
                  ),
                ],
              ),
            ),
            const Icon(Icons.arrow_forward_ios_rounded, size: 16, color: AppColors.textMuted),
          ],
        ),
      ),
    );
  }
}
