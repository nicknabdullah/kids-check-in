import 'package:flutter/material.dart';

/// Faceless Avatar Customization Options
class AvatarConfig {
  final String gender; // 'boy' or 'girl'
  final Color skinTone;
  final Color outfitColor;
  final Color hairColor;
  final Color headwearColor;
  final int hairStyleIndex; // 1 to 9 (Boys 1-8, Girls 1-9)
  final int eyeGlassesIndex; // 1 to 5 (1: Clean, 2: Round, 3: Square, 4: Sunglasses, 5: Star)
  final bool hasHeadwear;
  final bool hasBackpack;

  AvatarConfig({
    this.gender = 'boy',
    this.skinTone = const Color(0xFFF5D0A0),
    this.outfitColor = const Color(0xFF00897B),
    this.hairColor = const Color(0xFF2C1D11),
    this.headwearColor = const Color(0xFFFFB300),
    this.hairStyleIndex = 1,
    this.eyeGlassesIndex = 1,
    this.hasHeadwear = true,
    this.hasBackpack = true,
  });

  AvatarConfig copyWith({
    String? gender,
    Color? skinTone,
    Color? outfitColor,
    Color? hairColor,
    Color? headwearColor,
    int? hairStyleIndex,
    int? eyeGlassesIndex,
    bool? hasHeadwear,
    bool? hasBackpack,
  }) {
    return AvatarConfig(
      gender: gender ?? this.gender,
      skinTone: skinTone ?? this.skinTone,
      outfitColor: outfitColor ?? this.outfitColor,
      hairColor: hairColor ?? this.hairColor,
      headwearColor: headwearColor ?? this.headwearColor,
      hairStyleIndex: hairStyleIndex ?? this.hairStyleIndex,
      eyeGlassesIndex: eyeGlassesIndex ?? this.eyeGlassesIndex,
      hasHeadwear: hasHeadwear ?? this.hasHeadwear,
      hasBackpack: hasBackpack ?? this.hasBackpack,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'gender': gender,
      'skinTone': skinTone.value,
      'outfitColor': outfitColor.value,
      'hairColor': hairColor.value,
      'headwearColor': headwearColor.value,
      'hairStyleIndex': hairStyleIndex,
      'eyeGlassesIndex': eyeGlassesIndex,
      'hasHeadwear': hasHeadwear,
      'hasBackpack': hasBackpack,
    };
  }

  factory AvatarConfig.fromMap(Map<String, dynamic> map) {
    return AvatarConfig(
      gender: map['gender'] ?? 'boy',
      skinTone: map['skinTone'] != null ? Color(map['skinTone']) : const Color(0xFFF5D0A0),
      outfitColor: map['outfitColor'] != null ? Color(map['outfitColor']) : const Color(0xFF00897B),
      hairColor: map['hairColor'] != null ? Color(map['hairColor']) : const Color(0xFF2C1D11),
      headwearColor: map['headwearColor'] != null ? Color(map['headwearColor']) : const Color(0xFFFFB300),
      hairStyleIndex: map['hairStyleIndex'] ?? 1,
      eyeGlassesIndex: map['eyeGlassesIndex'] ?? 1,
      hasHeadwear: map['hasHeadwear'] ?? true,
      hasBackpack: map['hasBackpack'] ?? true,
    );
  }
}

/// Data Model representing a Child user profile
class ChildModel {
  final String id;
  final String name;
  final int age;
  final AvatarConfig avatar;
  final int currentPoints;
  final int lifetimePoints;
  final int streakDays;
  final String specialTitle;
  final String? patternLock; // Custom 3x3 Star Pattern sequence e.g. "1-2-5-9"

  ChildModel({
    required this.id,
    required this.name,
    required this.age,
    required this.avatar,
    this.currentPoints = 0,
    this.lifetimePoints = 0,
    this.streakDays = 1,
    this.specialTitle = 'Kindness Hero 🌟',
    this.patternLock,
  });

  int get points => currentPoints;
  int get level => (lifetimePoints / 100).floor() + 1;

  ChildModel copyWith({
    String? id,
    String? name,
    int? age,
    AvatarConfig? avatar,
    int? currentPoints,
    int? lifetimePoints,
    int? streakDays,
    String? specialTitle,
    String? patternLock,
  }) {
    return ChildModel(
      id: id ?? this.id,
      name: name ?? this.name,
      age: age ?? this.age,
      avatar: avatar ?? this.avatar,
      currentPoints: currentPoints ?? this.currentPoints,
      lifetimePoints: lifetimePoints ?? this.lifetimePoints,
      streakDays: streakDays ?? this.streakDays,
      specialTitle: specialTitle ?? this.specialTitle,
      patternLock: patternLock ?? this.patternLock,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'age': age,
      'avatar': avatar.toMap(),
      'currentPoints': currentPoints,
      'lifetimePoints': lifetimePoints,
      'streakDays': streakDays,
      'specialTitle': specialTitle,
      'patternLock': patternLock,
    };
  }

  factory ChildModel.fromMap(Map<String, dynamic> map) {
    return ChildModel(
      id: map['id'] ?? '',
      name: map['name'] ?? '',
      age: map['age'] ?? 6,
      avatar: AvatarConfig.fromMap(map['avatar'] ?? {}),
      currentPoints: map['currentPoints'] ?? 0,
      lifetimePoints: map['lifetimePoints'] ?? 0,
      streakDays: map['streakDays'] ?? 1,
      specialTitle: map['specialTitle'] ?? 'Kindness Hero 🌟',
      patternLock: map['patternLock'],
    );
  }
}
