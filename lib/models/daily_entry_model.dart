import 'deed_model.dart';

/// Single item checked off during the nightly check-in.
enum ResponseType {
  great, // Full positive points
  tried, // Partial positive points
  notToday, // 0 points
  negativeOccurred, // Deduct points gently
  negativeAvoided, // 0 or bonus points
}

class DeedCheckResult {
  final DeedModel deed;
  final ResponseType response;
  final int pointsEarned;

  DeedCheckResult({
    required this.deed,
    required this.response,
    required this.pointsEarned,
  });

  Map<String, dynamic> toMap() {
    return {
      'deed': deed.toMap(),
      'response': response.name,
      'pointsEarned': pointsEarned,
    };
  }

  factory DeedCheckResult.fromMap(Map<String, dynamic> map) {
    return DeedCheckResult(
      deed: DeedModel.fromMap(Map<String, dynamic>.from(map['deed'] as Map)),
      response: ResponseType.values.byName(map['response'] as String),
      pointsEarned: map['pointsEarned'] as int,
    );
  }
}

/// Summary record of a single day's completed check-in.
class DailyCheckInSummary {
  final String dateString; // YYYY-MM-DD
  final String childId;
  final int netPointsEarned;
  final List<DeedCheckResult> checkedDeeds;
  final String encouragingNote;

  DailyCheckInSummary({
    required this.dateString,
    required this.childId,
    required this.netPointsEarned,
    required this.checkedDeeds,
    required this.encouragingNote,
  });
}
