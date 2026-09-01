import 'dart:math';
import 'package:flutter/material.dart';
import '../theme/app_colors.dart';

/// Islamic Pattern & Sky Background Widget.
/// Draws subtle geometric star patterns, crescent moons, floating stars, and lanterns.
/// CRITICAL RULE: Animated stars, clouds, and moons MUST NOT HAVE FACES.
class IslamicPatternBackground extends StatelessWidget {
  final Widget child;

  const IslamicPatternBackground({Key? key, required this.child}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // Background Soft Gradient
        Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [
                AppColors.backgroundLight,
                Color(0xFFF3F8F8),
                AppColors.softGoldBg,
              ],
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
            ),
          ),
        ),

        // Custom Geometric Star & Crescent Background Painter
        Positioned.fill(
          child: CustomPaint(
            painter: _PatternBackgroundPainter(),
          ),
        ),

        // Foreground Content
        SafeArea(child: child),
      ],
    );
  }
}

class _PatternBackgroundPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final patternPaint = Paint()
      ..color = AppColors.primaryTeal.withOpacity(0.04)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.2;

    final starPaint = Paint()
      ..color = AppColors.accentGold.withOpacity(0.25)
      ..style = PaintingStyle.fill;

    // Draw 8-point Islamic Geometric Stars pattern grid
    const spacing = 70.0;
    for (double x = 20; x < size.width; x += spacing) {
      for (double y = 20; y < size.height; y += spacing) {
        _drawEightPointStar(canvas, Offset(x, y), 14, patternPaint);
      }
    }

    // Draw Floating Stars (Faceless - NO eyes or mouth)
    _drawStarShape(canvas, Offset(size.width * 0.85, size.height * 0.1), 12, starPaint);
    _drawStarShape(canvas, Offset(size.width * 0.15, size.height * 0.22), 8, starPaint);
    _drawStarShape(canvas, Offset(size.width * 0.9, size.height * 0.45), 10, starPaint);

    // Draw Soft Crescent Moon at Top Right
    final moonPaint = Paint()
      ..color = AppColors.accentGold.withOpacity(0.2)
      ..style = PaintingStyle.fill;

    final moonPath = Path()
      ..addOval(Rect.fromCircle(center: Offset(size.width - 40, 50), radius: 24))
      ..addOval(Rect.fromCircle(center: Offset(size.width - 48, 44), radius: 22));

    canvas.drawPath(
      Path.combine(
        PathOperation.difference,
        Path()..addOval(Rect.fromCircle(center: Offset(size.width - 40, 50), radius: 24)),
        Path()..addOval(Rect.fromCircle(center: Offset(size.width - 48, 44), radius: 22)),
      ),
      moonPaint,
    );
  }

  void _drawEightPointStar(Canvas canvas, Offset center, double radius, Paint paint) {
    final path = Path();
    for (int i = 0; i < 8; i++) {
      double angle = i * pi / 4;
      double r = (i % 2 == 0) ? radius : radius * 0.5;
      double x = center.dx + r * cos(angle);
      double y = center.dy + r * sin(angle);
      if (i == 0) {
        path.moveTo(x, y);
      } else {
        path.lineTo(x, y);
      }
    }
    path.close();
    canvas.drawPath(path, paint);
  }

  void _drawStarShape(Canvas canvas, Offset center, double radius, Paint paint) {
    final path = Path();
    for (int i = 0; i < 5; i++) {
      double angle = i * 4 * pi / 5 - pi / 2;
      double x = center.dx + radius * cos(angle);
      double y = center.dy + radius * sin(angle);
      if (i == 0) {
        path.moveTo(x, y);
      } else {
        path.lineTo(x, y);
      }
    }
    path.close();
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
