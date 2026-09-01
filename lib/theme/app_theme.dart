import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'app_colors.dart';

/// Configures the ThemeData for a rounded, modern child-friendly look.
class AppTheme {
  static ThemeData get lightTheme {
    final baseTextTheme = GoogleFonts.fredokaTextTheme();

    return ThemeData(
      useMaterial3: true,
      scaffoldBackgroundColor: AppColors.backgroundLight,
      colorScheme: ColorScheme.fromSeed(
        seedColor: AppColors.primaryTeal,
        primary: AppColors.primaryTeal,
        secondary: AppColors.accentGold,
        surface: AppColors.cardBackground,
      ),
      textTheme: baseTextTheme.copyWith(
        displayLarge: GoogleFonts.fredoka(
          fontSize: 32,
          fontWeight: FontWeight.bold,
          color: AppColors.textDark,
        ),
        titleLarge: GoogleFonts.fredoka(
          fontSize: 22,
          fontWeight: FontWeight.w600,
          color: AppColors.textDark,
        ),
        bodyLarge: GoogleFonts.fredoka(
          fontSize: 16,
          fontWeight: FontWeight.normal,
          color: AppColors.textDark,
        ),
        bodyMedium: GoogleFonts.fredoka(
          fontSize: 14,
          color: AppColors.textMuted,
        ),
      ),
      cardTheme: CardThemeData(
        color: AppColors.cardBackground,
        elevation: 4,
        shadowColor: Colors.black12,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(24),
        ),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: AppColors.primaryTeal,
          foregroundColor: Colors.white,
          elevation: 3,
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),
          textStyle: GoogleFonts.fredoka(
            fontSize: 18,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
    );
  }
}
