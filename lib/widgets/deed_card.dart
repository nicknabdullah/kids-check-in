import 'package:flutter/material.dart';
import '../models/deed_model.dart';
import '../theme/app_colors.dart';

/// Soft Rounded Card Widget for displaying good deeds & habits.
class DeedCardWidget extends StatelessWidget {
  final DeedModel deed;
  final VoidCallback? onTap;

  const DeedCardWidget({
    Key? key,
    required this.deed,
    this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
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
      child: ListTile(
        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        leading: Container(
          width: 48,
          height: 48,
          decoration: BoxDecoration(
            color: deed.isPositive ? AppColors.softTealBg : const Color(0xFFFFEBEE),
            shape: BoxShape.circle,
          ),
          child: Center(
            child: Text(
              deed.iconEmoji,
              style: const TextStyle(fontSize: 24),
            ),
          ),
        ),
        title: Text(
          deed.title,
          style: const TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.bold,
            color: AppColors.textDark,
          ),
        ),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 4),
            Text(
              deed.description,
              style: const TextStyle(fontSize: 13, color: AppColors.textMuted),
            ),
            if (deed.islamicReference != null) ...[
              const SizedBox(height: 4),
              Text(
                '📖 ${deed.islamicReference}',
                style: const TextStyle(
                  fontSize: 11,
                  fontStyle: FontStyle.italic,
                  color: AppColors.primaryTeal,
                ),
              ),
            ]
          ],
        ),
        trailing: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
          decoration: BoxDecoration(
            color: deed.isPositive ? AppColors.softGoldBg : const Color(0xFFFFCDD2),
            borderRadius: BorderRadius.circular(14),
          ),
          child: Text(
            deed.isPositive ? '+${deed.points} pts' : '-${deed.points} pts',
            style: TextStyle(
              fontSize: 13,
              fontWeight: FontWeight.bold,
              color: deed.isPositive ? AppColors.textGold : Colors.red.shade700,
            ),
          ),
        ),
        onTap: onTap,
      ),
    );
  }
}
