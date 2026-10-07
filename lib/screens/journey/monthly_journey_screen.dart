import 'package:flutter/material.dart';
import 'package:intl/intl.dart' show DateFormat;
import 'package:provider/provider.dart';
import '../../models/daily_entry_model.dart';
import '../../models/monthly_journey_summary.dart';
import '../../providers/app_state_provider.dart';
import '../../theme/app_colors.dart';
import '../../widgets/islamic_pattern_background.dart';

/// Screen 6 — Monthly Journey & Visual Calendar View
class MonthlyJourneyScreen extends StatefulWidget {
  const MonthlyJourneyScreen({super.key});

  @override
  State<MonthlyJourneyScreen> createState() => _MonthlyJourneyScreenState();
}

class _MonthlyJourneyScreenState extends State<MonthlyJourneyScreen> {
  late DateTime _selectedMonth;

  @override
  void initState() {
    super.initState();
    final now = DateTime.now();
    _selectedMonth = DateTime(now.year, now.month);
  }

  void _changeMonth(int delta) {
    final target = DateTime(_selectedMonth.year, _selectedMonth.month + delta);
    final now = DateTime.now();
    if (target.isAfter(DateTime(now.year, now.month))) return;
    setState(() => _selectedMonth = target);
  }

  void _showDateDetailDialog(
    BuildContext context,
    DateTime date,
    List<DeedCheckResult>? results,
  ) {
    final dailyPoints =
        results?.fold<int>(0, (total, result) => total + result.pointsEarned) ??
            0;

    showDialog(
      context: context,
      builder: (_) => Dialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 460, maxHeight: 560),
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(22),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    const Icon(Icons.calendar_today_rounded,
                        color: AppColors.primaryTeal),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        DateFormat.yMMMMd().format(date),
                        style: const TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          color: AppColors.textDark,
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: AppColors.softGoldBg,
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text('Points earned:',
                          style: TextStyle(fontSize: 13)),
                      Text(
                        '${dailyPoints > 0 ? '+' : ''}$dailyPoints pts ⭐',
                        style: const TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.bold,
                          color: AppColors.textGold,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 14),
                const Text(
                  'Check-in results:',
                  style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 6),
                if (results == null || results.isEmpty)
                  const Text(
                    'No check-in recorded for this date.',
                    style: TextStyle(
                      fontSize: 12,
                      color: AppColors.textMuted,
                      height: 1.5,
                    ),
                  )
                else
                  ...results.map(
                    (result) => Padding(
                      padding: const EdgeInsets.symmetric(vertical: 4),
                      child: Row(
                        children: [
                          Text(result.deed.iconEmoji),
                          const SizedBox(width: 8),
                          Expanded(
                            child: Text(
                              result.deed.title,
                              style: const TextStyle(
                                fontSize: 12,
                                color: AppColors.textMuted,
                              ),
                            ),
                          ),
                          Text(
                            '${result.pointsEarned > 0 ? '+' : ''}${result.pointsEarned}',
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                              color: result.pointsEarned < 0
                                  ? Colors.red
                                  : AppColors.primaryTeal,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                const SizedBox(height: 18),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () => Navigator.pop(context),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.primaryTeal,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(16)),
                      padding: const EdgeInsets.symmetric(vertical: 12),
                    ),
                    child: const Text('Close'),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);
    final activeChild = appState.activeChild;
    final history = appState.dailyHistoryForChild(activeChild.id);
    final summary = MonthlyJourneySummary.fromHistory(history, _selectedMonth);
    final monthName = DateFormat.yMMMM().format(_selectedMonth);
    final daysInMonth =
        DateTime(_selectedMonth.year, _selectedMonth.month + 1, 0).day;
    final firstDayOffset =
        DateTime(_selectedMonth.year, _selectedMonth.month, 1).weekday % 7;
    final calendarCellCount = ((firstDayOffset + daysInMonth + 6) ~/ 7) * 7;
    final now = DateTime.now();
    final isCurrentMonth =
        _selectedMonth.year == now.year && _selectedMonth.month == now.month;

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
                  Text(
                    '$monthName summary 🌟',
                    style: const TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      _StatColumn(
                        title: 'Points',
                        value: '${summary.totalPoints}',
                      ),
                      _StatColumn(
                        title: 'Good deeds',
                        value: '${summary.completedGoodDeeds}',
                      ),
                      _StatColumn(
                        title: 'Check-in days',
                        value: '${summary.checkInDays}',
                      ),
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
                    children: [
                      const Text(
                        '📊 Achievement trend graph',
                        style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                            color: AppColors.textDark),
                      ),
                      Text(
                        monthName,
                        style: const TextStyle(
                          fontSize: 12,
                          color: AppColors.primaryTeal,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),

                  // Visual Line Chart
                  if (summary.checkInDays == 0)
                    const Padding(
                      padding: EdgeInsets.symmetric(vertical: 24),
                      child: Center(
                        child: Text(
                          'No check-ins recorded for this month yet.',
                          style: TextStyle(color: AppColors.textMuted),
                        ),
                      ),
                    )
                  else
                    SizedBox(
                      height: 140,
                      width: double.infinity,
                      child: CustomPaint(
                        painter: _LineChartPainter(
                          dataPoints: summary.weeklyPoints,
                          labels: List.generate(
                            summary.weeklyPoints.length,
                            (index) => 'W${index + 1}',
                          ),
                        ),
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
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        '📅 Calendar (Tap a date for details)',
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                          color: AppColors.textDark,
                        ),
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          IconButton(
                            tooltip: 'Previous month',
                            onPressed: () => _changeMonth(-1),
                            icon: const Icon(Icons.chevron_left_rounded),
                          ),
                          Text(
                            monthName,
                            style: const TextStyle(
                              color: AppColors.primaryTeal,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          IconButton(
                            tooltip: 'Next month',
                            onPressed:
                                isCurrentMonth ? null : () => _changeMonth(1),
                            icon: const Icon(Icons.chevron_right_rounded),
                          ),
                        ],
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

                  // Calendar days are aligned to their weekday.
                  GridView.builder(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    gridDelegate:
                        const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 7,
                      mainAxisSpacing: 8,
                      crossAxisSpacing: 8,
                    ),
                    itemCount: calendarCellCount,
                    itemBuilder: (context, index) {
                      if (index < firstDayOffset ||
                          index >= firstDayOffset + daysInMonth) {
                        return const SizedBox.shrink();
                      }

                      final dayNum = index - firstDayOffset + 1;
                      final date = DateTime(
                        _selectedMonth.year,
                        _selectedMonth.month,
                        dayNum,
                      );
                      final dateKey = DateFormat('yyyy-MM-dd').format(date);
                      final dayResults = history[dateKey];
                      final isToday = isCurrentMonth && dayNum == now.day;

                      return InkWell(
                        borderRadius: BorderRadius.circular(14),
                        onTap: () => _showDateDetailDialog(
                          context,
                          date,
                          dayResults,
                        ),
                        child: Container(
                          decoration: BoxDecoration(
                            color: dayResults != null
                                ? AppColors.softTealBg
                                : Colors.grey.shade50,
                            borderRadius: BorderRadius.circular(14),
                            border: Border.all(
                              color: isToday
                                  ? AppColors.accentGold
                                  : dayResults != null
                                      ? AppColors.primaryTeal.withOpacity(0.3)
                                      : Colors.transparent,
                              width: isToday ? 2 : 1,
                            ),
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
                              if (dayResults != null)
                                const Text('⭐', style: TextStyle(fontSize: 12)),
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

    const double margin = 20.0;
    final double chartWidth = size.width - margin * 2;
    final double chartHeight = size.height - 40.0;
    final lowestPoint = dataPoints.reduce((a, b) => a < b ? a : b);
    final highestPoint = dataPoints.reduce((a, b) => a > b ? a : b);
    var minValue = lowestPoint < 0 ? lowestPoint.toDouble() : 0.0;
    var maxValue = highestPoint > 0 ? highestPoint.toDouble() : 0.0;
    if (minValue == maxValue) {
      minValue -= 1;
      maxValue += 1;
    }
    final valueRange = maxValue - minValue;
    final baseline =
        chartHeight - ((0 - minValue) / valueRange * chartHeight) + 10;
    final stepX =
        dataPoints.length == 1 ? 0.0 : chartWidth / (dataPoints.length - 1);

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

    final List<Offset> points = [];

    for (int i = 0; i < dataPoints.length; i++) {
      final x = margin + i * stepX;
      final y = chartHeight -
          ((dataPoints[i] - minValue) / valueRange * chartHeight) +
          10;
      points.add(Offset(x, y));
    }

    final path = Path()..moveTo(points.first.dx, points.first.dy);
    final fillPath = Path()
      ..moveTo(points.first.dx, baseline)
      ..lineTo(points.first.dx, points.first.dy);
    for (final point in points.skip(1)) {
      path.lineTo(point.dx, point.dy);
      fillPath.lineTo(point.dx, point.dy);
    }
    fillPath
      ..lineTo(points.last.dx, baseline)
      ..close();

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
        style: const TextStyle(
            fontSize: 10,
            fontWeight: FontWeight.bold,
            color: AppColors.primaryTeal),
      );
      textPainter.layout();
      textPainter.paint(
          canvas, Offset(pt.dx - textPainter.width / 2, pt.dy - 18));

      // Week label
      textPainter.text = TextSpan(
        text: labels[i],
        style: const TextStyle(fontSize: 11, color: AppColors.textMuted),
      );
      textPainter.layout();
      textPainter.paint(
          canvas, Offset(pt.dx - textPainter.width / 2, chartHeight + 16));
    }
  }

  @override
  bool shouldRepaint(covariant _LineChartPainter oldDelegate) {
    return oldDelegate.dataPoints != dataPoints || oldDelegate.labels != labels;
  }
}
