import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../theme/app_colors.dart';
import '../../widgets/faceless_avatar.dart';
import '../../widgets/progress_path_widget.dart';
import '../../widgets/islamic_pattern_background.dart';
import '../check_in/nightly_check_in_screen.dart';
import '../profile/avatar_customizer_screen.dart';
import '../profile/child_profile_screen.dart';
import '../../widgets/pattern_lock_widget.dart';

/// Screen 1 — Child Home / Today's Adventure
/// Central hub for the child showing daily greeting, avatar, progress trail, and start check-in button.
class ChildHomeScreen extends StatelessWidget {
  final Function(int) onNavigateTab;

  const ChildHomeScreen({Key? key, required this.onNavigateTab}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);
    final activeChild = appState.activeChild;

    return IslamicPatternBackground(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Top Bar: Sibling Switcher & Profile
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                // Family Sibling Selector Drops
                Row(
                  children: appState.children.map((child) {
                    final isSelected = child.id == activeChild.id;
                    return GestureDetector(
                      onTap: () {
                        if (child.patternLock != null && child.id != activeChild.id) {
                          showDialog(
                            context: context,
                            builder: (_) => Dialog(
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
                              child: PatternLockWidget(
                                title: 'Draw ${child.name}\'s Secret Pattern ⭐',
                                onPatternComplete: (drawnPattern) {
                                  if (drawnPattern == child.patternLock) {
                                    appState.setActiveChild(child.id);
                                    Navigator.pop(context);
                                  } else {
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      const SnackBar(content: Text('Try drawing the pattern again! 🌱'), backgroundColor: Colors.orange),
                                    );
                                  }
                                },
                              ),
                            ),
                          );
                        } else {
                          appState.setActiveChild(child.id);
                        }
                      },
                      child: Container(
                        margin: const EdgeInsets.only(right: 8),
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(
                          color: isSelected ? AppColors.accentGold : Colors.white,
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(
                            color: isSelected ? AppColors.accentGold : Colors.grey.shade300,
                          ),
                        ),
                        child: Row(
                          children: [
                            if (child.patternLock != null) ...[
                              const Text('🔒 ', style: TextStyle(fontSize: 10)),
                            ],
                            Text(
                              child.name,
                              style: TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.bold,
                                color: isSelected ? Colors.white : AppColors.textDark,
                              ),
                            ),
                          ],
                        ),
                      ),
                    );
                  }).toList(),
                ),

                // Streak Badge
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                  decoration: BoxDecoration(
                    color: AppColors.softGoldBg,
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Row(
                    children: [
                      const Text('🔥', style: TextStyle(fontSize: 16)),
                      const SizedBox(width: 4),
                      Text(
                        '${activeChild.streakDays} Days',
                        style: const TextStyle(
                          fontSize: 13,
                          fontWeight: FontWeight.bold,
                          color: AppColors.textGold,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),

            // Greeting Card with Faceless Avatar
            GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (_) => const ChildProfileScreen()),
                );
              },
              child: Container(
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  gradient: AppColors.primaryGradient,
                  borderRadius: BorderRadius.circular(28),
                  boxShadow: [
                    BoxShadow(
                      color: AppColors.primaryTeal.withOpacity(0.3),
                      blurRadius: 15,
                      offset: const Offset(0, 6),
                    ),
                  ],
                ),
                child: Row(
                  children: [
                    FacelessAvatarWidget(
                      config: activeChild.avatar,
                      size: 80,
                    ),
                    const SizedBox(width: 16),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            'Assalamu Alaikum!',
                            style: TextStyle(
                              fontSize: 15,
                              color: Colors.white70,
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                          Text(
                            activeChild.name,
                            style: const TextStyle(
                              fontSize: 24,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                            decoration: BoxDecoration(
                              color: Colors.white.withOpacity(0.2),
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Text(
                              '⭐ Level ${activeChild.level} • ${activeChild.specialTitle}',
                              style: const TextStyle(
                                fontSize: 12,
                                color: Colors.white,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),

            // Quick Actions: Change Avatar & Change Pattern Anytime
            Row(
              children: [
                Expanded(
                  child: ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: AppColors.primaryTeal,
                      elevation: 2,
                      padding: const EdgeInsets.symmetric(vertical: 12),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(16),
                        side: const BorderSide(color: AppColors.softTealBg, width: 2),
                      ),
                    ),
                    icon: const Text('🎨', style: TextStyle(fontSize: 18)),
                    label: const Text('Change avatar', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (_) => const AvatarCustomizerScreen()),
                      );
                    },
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: AppColors.textGold,
                      elevation: 2,
                      padding: const EdgeInsets.symmetric(vertical: 12),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(16),
                        side: const BorderSide(color: AppColors.softGoldBg, width: 2),
                      ),
                    ),
                    icon: const Text('🔒', style: TextStyle(fontSize: 18)),
                    label: const Text('Change pattern', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
                    onPressed: () {
                      showDialog(
                        context: context,
                        builder: (_) => Dialog(
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
                          child: PatternLockWidget(
                            title: 'Create new pattern for ${activeChild.name} ⭐',
                            requireConfirmation: true,
                            onPatternComplete: (newPattern) {
                              appState.setChildPatternLock(activeChild.id, newPattern);
                              Navigator.pop(context);
                              ScaffoldMessenger.of(context).showSnackBar(
                                const SnackBar(content: Text('✨ MashaAllah! New secret pattern saved!')),
                              );
                            },
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),

            // Progress Path Card
            ProgressPathWidget(
              completedDeeds: 7,
              totalDeeds: 10,
            ),
            const SizedBox(height: 24),

            // Prominent Nightly Check-In Launch Button
            Container(
              width: double.infinity,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(24),
                gradient: const LinearGradient(
                  colors: [Color(0xFFFFB300), Color(0xFFF57F17)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                boxShadow: [
                  BoxShadow(
                    color: AppColors.accentGold.withOpacity(0.4),
                    blurRadius: 15,
                    offset: const Offset(0, 6),
                  ),
                ],
              ),
              child: Material(
                color: Colors.transparent,
                child: InkWell(
                  borderRadius: BorderRadius.circular(24),
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => const NightlyCheckInScreen(),
                      ),
                    );
                  },
                  child: Padding(
                    padding: const EdgeInsets.all(20),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: const [
                        Text('🌙', style: TextStyle(fontSize: 32)),
                        SizedBox(width: 12),
                        Text(
                          'Start Nightly Check-In',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                        ),
                        SizedBox(width: 8),
                        Icon(Icons.arrow_forward_rounded, color: Colors.white, size: 28),
                      ],
                    ),
                  ),
                ),
              ),
            ),
            const SizedBox(height: 24),

            // Islamic Daily Motivation Card
            Container(
              padding: const EdgeInsets.all(18),
              decoration: BoxDecoration(
                color: AppColors.softBlueBg,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: AppColors.skyBlue.withOpacity(0.4)),
              ),
              child: Row(
                children: const [
                  Text('💡', style: TextStyle(fontSize: 28)),
                  SizedBox(width: 12),
                  Expanded(
                    child: Text(
                      '“Allah loves those who do good and show kindness to others.” ✨',
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w600,
                        color: AppColors.textDark,
                      ),
                    ),
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
