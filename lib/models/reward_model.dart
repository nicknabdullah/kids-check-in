/// Model for mystery scratch card rewards.
/// Rewards are fully customizable by parents with point thresholds & probabilities.
class RewardModel {
  final String id;
  final String
      title; // e.g. "Ice Cream Treat", "Hug from Dad", "Choose Tonight's Story"
  final String iconEmoji;
  final int requiredPoints; // e.g. 50 points to scratch
  final double probability; // Probability weight e.g. 0.20 (20%)
  final bool isUnlocked;
  final bool isClaimed;

  RewardModel({
    required this.id,
    required this.title,
    required this.iconEmoji,
    required this.requiredPoints,
    this.probability = 0.20,
    this.isUnlocked = false,
    this.isClaimed = false,
  });

  RewardModel copyWith({
    String? id,
    String? title,
    String? iconEmoji,
    int? requiredPoints,
    double? probability,
    bool? isUnlocked,
    bool? isClaimed,
  }) {
    return RewardModel(
      id: id ?? this.id,
      title: title ?? this.title,
      iconEmoji: iconEmoji ?? this.iconEmoji,
      requiredPoints: requiredPoints ?? this.requiredPoints,
      probability: probability ?? this.probability,
      isUnlocked: isUnlocked ?? this.isUnlocked,
      isClaimed: isClaimed ?? this.isClaimed,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'title': title,
      'iconEmoji': iconEmoji,
      'requiredPoints': requiredPoints,
      'probability': probability,
      'isUnlocked': isUnlocked,
      'isClaimed': isClaimed,
    };
  }

  factory RewardModel.fromMap(Map<String, dynamic> map) {
    return RewardModel(
      id: map['id'] as String,
      title: map['title'] as String,
      iconEmoji: map['iconEmoji'] as String,
      requiredPoints: map['requiredPoints'] as int,
      probability: (map['probability'] as num?)?.toDouble() ?? 0.20,
      isUnlocked: map['isUnlocked'] as bool? ?? false,
      isClaimed: map['isClaimed'] as bool? ?? false,
    );
  }
}
