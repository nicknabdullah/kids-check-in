/// Model representing an achievement badge.
class AchievementModel {
  final String id;
  final String title;
  final String description;
  final String iconEmoji;
  final bool isUnlocked;

  AchievementModel({
    required this.id,
    required this.title,
    required this.description,
    required this.iconEmoji,
    this.isUnlocked = false,
  });
}
