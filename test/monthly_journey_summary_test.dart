import 'package:flutter_test/flutter_test.dart';
import 'package:kids_good_deeds_app/models/daily_entry_model.dart';
import 'package:kids_good_deeds_app/models/deed_model.dart';
import 'package:kids_good_deeds_app/models/monthly_journey_summary.dart';

void main() {
  DeedCheckResult result({
    required String id,
    required int points,
    bool isPositive = true,
  }) {
    return DeedCheckResult(
      deed: DeedModel(
        id: id,
        title: id,
        description: id,
        category: 'Test',
        points: points.abs(),
        isPositive: isPositive,
      ),
      response: ResponseType.great,
      pointsEarned: points,
    );
  }

  test('aggregates selected-month points, deeds, days, and weekly totals', () {
    final summary = MonthlyJourneySummary.fromHistory(
      {
        '2026-10-01': [
          result(id: 'dua', points: 3),
          result(id: 'argue', points: -2, isPositive: false),
        ],
        '2026-10-08': [result(id: 'share', points: 1)],
        '2026-10-31': [result(id: 'help', points: 3)],
        '2026-09-30': [result(id: 'outside', points: 9)],
      },
      DateTime(2026, 10),
    );

    expect(summary.totalPoints, 5);
    expect(summary.completedGoodDeeds, 3);
    expect(summary.checkInDays, 3);
    expect(summary.weeklyPoints, [1, 1, 0, 0, 3]);
  });

  test('returns empty totals for a month without check-ins', () {
    final summary = MonthlyJourneySummary.fromHistory(
      {
        '2026-09-30': [result(id: 'outside', points: 3)]
      },
      DateTime(2026, 10),
    );

    expect(summary.totalPoints, 0);
    expect(summary.completedGoodDeeds, 0);
    expect(summary.checkInDays, 0);
    expect(summary.weeklyPoints, [0, 0, 0, 0, 0]);
  });
}
