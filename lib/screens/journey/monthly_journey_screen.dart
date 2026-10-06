import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../theme/app_colors.dart';
import '../../widgets/islamic_pattern_background.dart';

/// Screen 6 — Monthly Journey & Visual Calendar View
class MonthlyJourneyScreen extends StatelessWidget {
  const MonthlyJourneyScreen({Key? key}) : super(key: key);

  void _showDateDetailDialog(BuildContext context, int dayNum, String childName) {
    final int score = 30 + (dayNum * 3) % 40;
    final String reward = dayNum % 5 == 0 ? '🍦 Ice cream treat' : (dayNum % 3 == 0 ? '📖 Bedtime story' : '✨ 30 Min play time');

    showDialog(
      context: context,
      builder: (_) => Dialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
        child: Padding(
          padding: const EdgeInsets.all(22.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  const Icon(Icons.calendar_today_rounded, color: AppColors.primaryTeal),
                  const SizedBox(width: 10),
                  Text('August $dayNum, 2026', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppColors.textDark)),
                ],
              ),
              const SizedBox(height: 14),
              Text('Child: $childName', style: const TextStyle(fontWeight: FontWeight.bold, color: AppColors.primaryTeal)),
              const SizedBox(height: 12),
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: AppColors.softGoldBg,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text('Daily score earned:', style: TextStyle(fontSize: 13)),
                    Text('🌟 +$score pts', style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: AppColors.textGold)),
                  ],
                ),
              ),
              const SizedBox(height: 12),
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: AppColors.softTealBg,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Row(
                  children: [
                    const Text('🎁 Gift unlocked: ', style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold)),
                    Expanded(child: Text(reward, style: const TextStyle(fontSize: 13, color: AppColors.primaryTeal))),
                  ],
                ),
              ),
              const SizedBox(height: 14),
              const Text('Completed deeds:', style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold)),
              const SizedBox(height: 6),
              const Text('• Morning Dua recited 👍\n• Prayed Salah on time 🕌\n• Helped clean up toys 🧸', style: TextStyle(fontSize: 12, color: AppColors.textMuted, height: 1.5)),
              const SizedBox(height: 18),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () => Navigator.pop(context),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.primaryTeal,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    padding: const EdgeInsets.symmetric(vertical: 12),
                  ),
                  child: const Text('Close'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);
    final activeChild = appState.activeChild;

    // Daily trends mock data (Point totals for 4 weeks)
    final List<int> weeklyTrends = [210, 245, 280, 310];
    final List<String> weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

    return IslamicPatternBackground(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              '📅 My good-deed journey',
              style: TextStyle(
                fontSize: 28,
                fontWeight: FontWeight.bold,
                color: AppColors.textDark,
              ),
            ),
            const SizedBox(height: 6),
            Text(
              'Track ${activeChild.name}\'s growth, habits, and rewards!',
              style: const TextStyle(fontSize: 14, color: AppColors.textMuted),
            ),
            const SizedBox(height: 20),

            // Monthly Statistics Banner
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                gradient: AppColors.primaryGradient,
                borderRadius: BorderRadius.circular(24),
                boxShadow: [
                  BoxShadow(
                    color: AppColors.primaryTeal.withOpacity(0.2),
                    blurRadius: 12,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: Column(
                children: [
                  const Text(
                    'August summary 🌟',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      _StatColumn(title: 'Total points', value: '${activeChild.lifetimePoints}'),
                      _StatColumn(title: 'Good deeds', value: '87'),
                      _StatColumn(title: 'Rewards', value: '6'),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),

            // Achievement Trend Bar Graph Container
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(28),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.04),
                    blurRadius: 12,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: const [
                      Text(
                        '📊 Achievement trend graph',
                        style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: AppColors.textDark),
                      ),
                      Text('August 2026', style: TextStyle(fontSize: 12, color: AppColors.primaryTeal, fontWeight: FontWeight.bold)),
                    ],
                  ),
                  const SizedBox(height: 16),

                  // Visual Line Chart
                  SizedBox(
                    height: 140,
                    width: double.infinity,
                    child: CustomPaint(
                      painter: _LineChartPainter(dataPoints: weeklyTrends, labels: weeks),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),

            // Calendar Grid Container
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(28),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.04),
                    blurRadius: 12,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: const [
                      Text(
                        '📅 August calendar (Tap date for details)',
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                          color: AppColors.textDark,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),

                  // Days of Week Header
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
                        .map((day) => Text(
                              day,
                              style: const TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.bold,
                                color: AppColors.textMuted,
                              ),
                            ))
                        .toList(),
                  ),
                  const SizedBox(height: 12),

                  // 31 Days Clickable Grid
                  GridView.builder(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 7,
                      mainAxisSpacing: 8,
                      crossAxisSpacing: 8,
                    ),
                    itemCount: 31,
                    itemBuilder: (context, index) {
                      final dayNum = index + 1;
                      String emoji = '⭐';
                      if (dayNum % 5 == 0) emoji = '🎁';
                      if (dayNum % 7 == 0) emoji = '🏆';

                      return GestureDetector(
                        onTap: () => _showDateDetailDialog(context, dayNum, activeChild.name),
                        child: Container(
                          decoration: BoxDecoration(
                            color: dayNum <= 24 ? AppColors.softTealBg : Colors.grey.shade50,
                            borderRadius: BorderRadius.circular(14),
                            border: Border.all(color: dayNum <= 24 ? AppColors.primaryTeal.withOpacity(0.3) : Colors.transparent),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                '$dayNum',
                                style: const TextStyle(
                                  fontSize: 11,
                                  fontWeight: FontWeight.bold,
                                  color: AppColors.textDark,
                                ),
                              ),
                              if (dayNum <= 24)
                                Text(emoji, style: const TextStyle(fontSize: 12)),
                            ],
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

class _StatColumn extends StatelessWidget {
  final String title;
  final String value;

  const _StatColumn({required this.title, required this.value});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          value,
          style: const TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.bold,
            color: AppColors.accentGold,
          ),
        ),
        const SizedBox(height: 4),
        Text(
          title,
          style: const TextStyle(
            fontSize: 12,
            color: Colors.white70,
          ),
        ),
      ],
    );
  }
}

class _LineChartPainter extends CustomPainter {
  final List<int> dataPoints;
  final List<String> labels;

  _LineChartPainter({required this.dataPoints, required this.labels});

  @override
  void paint(Canvas canvas, Size size) {
    if (dataPoints.isEmpty) return;

    final double margin = 20.0;
    final double chartWidth = size.width - margin * 2;
    final double chartHeight = size.height - 40.0;

    final double maxVal = 350.0;
    final double stepX = chartWidth / (dataPoints.length - 1);

    final linePaint = Paint()
      ..color = AppColors.primaryTeal
      ..strokeWidth = 3.5
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;

    final fillPaint = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          AppColors.primaryTeal.withOpacity(0.35),
          AppColors.primaryTeal.withOpacity(0.0),
        ],
      ).createShader(Rect.fromLTWH(0, 0, size.width, chartHeight));

    final path = Path();
    final fillPath = Path();

    final List<Offset> points = [];

    for (int i = 0; i < dataPoints.length; i++) {
      final x = margin + i * stepX;
      final y = chartHeight - (dataPoints[i] / maxVal * chartHeight) + 10;
      points.add(Offset(x, y));

      if (i == 0) {
        path.moveTo(x, y);
        fillPath.moveTo(x, chartHeight + 10);
        fillPath.lineTo(x, y);
      } else {
        path.lineTo(x, y);
        fillPath.lineTo(x, y);
      }

      if (i == dataPoints.length - 1) {
        fillPath.lineTo(x, chartHeight + 10);
        fillPath.close();
      }
    }

    // Draw Fill Area and Line
    canvas.drawPath(fillPath, fillPaint);
    canvas.drawPath(path, linePaint);

    // Draw Glowing Data Points & Labels
    final dotPaint = Paint()
      ..color = AppColors.accentGold
      ..style = PaintingStyle.fill;

    final textPainter = TextPainter(textDirection: TextDirection.ltr);

    for (int i = 0; i < points.length; i++) {
      final pt = points[i];
      canvas.drawCircle(pt, 6.0, dotPaint);

      // Value label
      textPainter.text = TextSpan(
        text: '${dataPoints[i]}',
        style: const TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: AppColors.primaryTeal),
      );
      textPainter.layout();
      textPainter.paint(canvas, Offset(pt.dx - textPainter.width / 2, pt.dy - 18));

      // Week label
      textPainter.text = TextSpan(
        text: labels[i],
        style: const TextStyle(fontSize: 11, color: AppColors.textMuted),
      );
      textPainter.layout();
      textPainter.paint(canvas, Offset(pt.dx - textPainter.width / 2, chartHeight + 16));
    }
  }

  @override
  bool shouldRepaint(covariant _LineChartPainter oldDelegate) {
    return oldDelegate.dataPoints != dataPoints;
  }
}
