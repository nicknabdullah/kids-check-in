import 'package:flutter/material.dart';
import '../theme/app_colors.dart';

/// Custom Bottom Navigation Bar for Kids App.
/// Shows only Home and Parent when child is not selected / parent is locked.
class CustomBottomNavBar extends StatelessWidget {
  final int currentIndex;
  final Function(int) onTap;
  final bool isChildActive;

  const CustomBottomNavBar({
    Key? key,
    required this.currentIndex,
    required this.onTap,
    this.isChildActive = true,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // If no active child selected or locked state, show only Home & Parent
    final List<Map<String, dynamic>> items = isChildActive
        ? [
            {'icon': Icons.home_rounded, 'label': 'Today', 'emoji': '🌅', 'index': 0},
            {'icon': Icons.map_rounded, 'label': 'Journey', 'emoji': '📅', 'index': 1},
            {'icon': Icons.card_giftcard_rounded, 'label': 'Rewards', 'emoji': '🎁', 'index': 2},
            {'icon': Icons.auto_stories_rounded, 'label': 'Learn', 'emoji': '📖', 'index': 3},
            {'icon': Icons.shield_rounded, 'label': 'Parent', 'emoji': '👨‍👩‍👧', 'index': 4},
          ]
        : [
            {'icon': Icons.home_rounded, 'label': 'Home', 'emoji': '🌅', 'index': 0},
            {'icon': Icons.shield_rounded, 'label': 'Parent Menu', 'emoji': '👨‍👩‍👧', 'index': 4},
          ];

    return Container(
      margin: const EdgeInsets.all(12),
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(28),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.08),
            blurRadius: 20,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: items.map((item) {
          final itemIndex = item['index'] as int;
          final isSelected = currentIndex == itemIndex;
          return GestureDetector(
            onTap: () => onTap(itemIndex),
            behavior: HitTestBehavior.opaque,
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 250),
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              decoration: BoxDecoration(
                color: isSelected ? AppColors.softTealBg : Colors.transparent,
                borderRadius: BorderRadius.circular(20),
              ),
              child: Row(
                children: [
                  Text(
                    item['emoji'] as String,
                    style: const TextStyle(fontSize: 20),
                  ),
                  if (isSelected) ...[
                    const SizedBox(width: 6),
                    Text(
                      item['label'] as String,
                      style: const TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.bold,
                        color: AppColors.primaryTeal,
                      ),
                    ),
                  ],
                ],
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}
