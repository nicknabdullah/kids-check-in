import 'daily_entry_model.dart';

class MonthlyJourneySummary {
  final int totalPoints;
  final int completedGoodDeeds;
  final int checkInDays;
  final List<int> weeklyPoints;

  MonthlyJourneySummary({
    required this.totalPoints,
    required this.completedGoodDeeds,
    required this.checkInDays,
    required List<int> weeklyPoints,
  }) : weeklyPoints = List.unmodifiable(weeklyPoints);

  factory MonthlyJourneySummary.fromHistory(
    Map<String, List<DeedCheckResult>> history,
    DateTime month,
  ) {
    final daysInMonth = DateTime(month.year, month.month + 1, 0).day;
    final weeklyPoints = List<int>.filled((daysInMonth + 6) ~/ 7, 0);
    var totalPoints = 0;
    var completedGoodDeeds = 0;
    var checkInDays = 0;

    for (final entry in history.entries) {
      final date = DateTime.tryParse(entry.key);
      if (date == null ||
          date.year != month.year ||
          date.month != month.month) {
        continue;
      }
      checkInDays++;
      for (final result in entry.value) {
        totalPoints += result.pointsEarned;
        if (result.deed.isPositive && result.pointsEarned > 0) {
          completedGoodDeeds++;
        }
        weeklyPoints[(date.day - 1) ~/ 7] += result.pointsEarned;
      }
    }

    return MonthlyJourneySummary(
      totalPoints: totalPoints,
      completedGoodDeeds: completedGoodDeeds,
      checkInDays: checkInDays,
      weeklyPoints: weeklyPoints,
    );
  }
}
