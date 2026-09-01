/// Model representing a daily habit / good deed item.
/// Supports both positive encouragement deeds and habits to improve upon.
class DeedModel {
  final String id;
  final String title;
  final String description;
  final String category; // e.g. Manners, Kindness, Prayer, Helper, Behavior
  final int points; // Positive (e.g. +3) or Negative (e.g. -2)
  final bool isPositive; // true = good deed, false = behavior to improve
  final bool isEnabled;
  final String iconEmoji;
  final String? islamicReference; // Optional verse/hadith reference

  DeedModel({
    required this.id,
    required this.title,
    required this.description,
    required this.category,
    required this.points,
    this.isPositive = true,
    this.isEnabled = true,
    this.iconEmoji = '⭐',
    this.islamicReference,
  });

  /// Copy with helper for easy state mutation
  DeedModel copyWith({
    String? id,
    String? title,
    String? description,
    String? category,
    int? points,
    bool? isPositive,
    bool? isEnabled,
    String? iconEmoji,
    String? islamicReference,
  }) {
    return DeedModel(
      id: id ?? this.id,
      title: title ?? this.title,
      description: description ?? this.description,
      category: category ?? this.category,
      points: points ?? this.points,
      isPositive: isPositive ?? this.isPositive,
      isEnabled: isEnabled ?? this.isEnabled,
      iconEmoji: iconEmoji ?? this.iconEmoji,
      islamicReference: islamicReference ?? this.islamicReference,
    );
  }
}
