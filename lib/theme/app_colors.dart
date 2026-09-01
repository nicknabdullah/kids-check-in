import 'package:flutter/material.dart';

/// Centralized color palette for the Kids Islamic Good-Deeds App.
/// Designed to feel warm, friendly, soft, and modern for children aged 4-10.
class AppColors {
  // Primary Theme Colors
  static const Color primaryTeal = Color(0xFF00897B); // Deep soft teal
  static const Color accentGold = Color(0xFFFFB300); // Warm radiant crescent gold
  static const Color skyBlue = Color(0xFF4FC3F7); // Friendly sky blue
  static const Color mintGreen = Color(0xFF66BB6A); // Encouraging success green
  static const Color softCoral = Color(0xFFFF7043); // Warm non-punitive accent
  static const Color lavenderViolet = Color(0xFF7E57C2); // Twilight journey violet

  // Background Gradients
  static const Color backgroundLight = Color(0xFFFDFBF); // Soft warm off-white
  static const Color cardBackground = Color(0xFFFFFFFF); // Clean white card
  static const Color softGoldBg = Color(0xFFFFF8E1); // Warm gold tint
  static const Color softTealBg = Color(0xFFE0F2F1); // Soft teal tint
  static const Color softBlueBg = Color(0xFFE1F5FE); // Soft sky tint

  // Text Colors
  static const Color textDark = Color(0xFF2C3E50); // Charcoal for high readability
  static const Color textMuted = Color(0xFF78909C); // Soft slate gray
  static const Color textGold = Color(0xFFF57F17); // Rich gold text

  // Category Colors
  static const Color categoryManners = Color(0xFFAB47BC); // Purple
  static const Color categoryKindness = Color(0xFF42A5F5); // Blue
  static const Color categoryPrayer = Color(0xFF26A69A); // Teal
  static const Color categoryHelper = Color(0xFFFFA72); // Orange
  static const Color categoryBehavior = Color(0xFFEC407A); // Soft Rose

  // Special Gradients
  static const LinearGradient primaryGradient = LinearGradient(
    colors: [Color(0xFF00897B), Color(0xFF26A69A)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const LinearGradient starGradient = LinearGradient(
    colors: [Color(0xFFFFD54F), Color(0xFFFFB300)],
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
  );

  static const LinearGradient nightGradient = LinearGradient(
    colors: [Color(0xFF1A237E), Color(0xFF3949AB)],
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
  );
}
