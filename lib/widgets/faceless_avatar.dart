import 'package:flutter/material.dart';
import '../models/child_model.dart';

/// Faceless Child Avatar Head Portrait Widget.
/// CRITICAL SPECIFICATION: Human characters MUST NOT have eyes or facial mouth features.
/// Renders a HEAD ONLY cute vector avatar portrait with customizable styles.
class FacelessAvatarWidget extends StatelessWidget {
  final AvatarConfig config;
  final double size;

  const FacelessAvatarWidget({
    Key? key,
    required this.config,
    this.size = 120.0,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            color: (config.gender == 'girl' ? const Color(0xFFE91E63) : const Color(0xFF00897B)).withOpacity(0.25),
            blurRadius: 12,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: ClipOval(
        child: CustomPaint(
          size: Size(size, size),
          painter: _FacelessHeadAvatarPainter(config: config),
        ),
      ),
    );
  }
}

class _FacelessHeadAvatarPainter extends CustomPainter {
  final AvatarConfig config;

  _FacelessHeadAvatarPainter({required this.config});

  @override
  void paint(Canvas canvas, Size size) {
    final scale = size.width / 100.0;

    final skinPaint = Paint()
      ..color = config.skinTone
      ..style = PaintingStyle.fill;

    final hairPaint = Paint()
      ..color = config.hairColor
      ..style = PaintingStyle.fill;

    final outfitColor = config.gender == 'girl' ? const Color(0xFFE91E63) : const Color(0xFF00897B);
    final headwearColor = config.headwearColor;

    // 1. Shoulders / Collar
    final shoulderPath = Path()
      ..moveTo(15 * scale, 100 * scale)
      ..cubicTo(30 * scale, 75 * scale, 70 * scale, 75 * scale, 85 * scale, 100 * scale)
      ..close();
    canvas.drawPath(shoulderPath, Paint()..color = outfitColor);

    // 2. Neck
    final neckPath = Path()
      ..moveTo(40 * scale, 65 * scale)
      ..lineTo(60 * scale, 65 * scale)
      ..lineTo(60 * scale, 80 * scale)
      ..lineTo(40 * scale, 80 * scale)
      ..close();
    canvas.drawPath(neckPath, skinPaint);

    if (config.gender == 'girl') {
      // FEMALE AVATAR (Graceful Hijab or Cute Girl Hair - NO BEARD EFFECT!)
      if (config.hasHeadwear || [1, 2, 3, 6, 7].contains(config.hairStyleIndex)) {
        // Soft Hijab Frame
        final Color hijabColor;
        switch (config.hairStyleIndex) {
          case 2:
            hijabColor = const Color(0xFFEC407A); // Rose
            break;
          case 3:
            hijabColor = const Color(0xFFFFB300); // Crown Gold
            break;
          case 6:
            hijabColor = const Color(0xFF9575CD); // Lavender
            break;
          case 7:
            hijabColor = const Color(0xFF42A5F5); // Ocean Blue
            break;
          case 1:
          default:
            hijabColor = const Color(0xFF4DB6AC); // Emerald
            break;
        }

        // Hijab Backing
        canvas.drawCircle(Offset(50 * scale, 48 * scale), 34 * scale, Paint()..color = hijabColor);

        // Face Oval (Clear skin face overlaying hijab backing)
        final facePath = Path()
          ..addOval(Rect.fromLTWH(28 * scale, 24 * scale, 44 * scale, 52 * scale));
        canvas.drawPath(facePath, skinPaint);

        // Hijab forehead wrap
        final wrapPath = Path()
          ..moveTo(28 * scale, 42 * scale)
          ..cubicTo(35 * scale, 22 * scale, 65 * scale, 22 * scale, 72 * scale, 42 * scale)
          ..cubicTo(60 * scale, 28 * scale, 40 * scale, 28 * scale, 28 * scale, 42 * scale)
          ..close();
        canvas.drawPath(wrapPath, Paint()..color = hijabColor);
      } else if (config.hairStyleIndex == 4) {
        // Long Twin Pigtails
        canvas.drawCircle(Offset(22 * scale, 48 * scale), 14 * scale, hairPaint);
        canvas.drawCircle(Offset(78 * scale, 48 * scale), 14 * scale, hairPaint);

        // Face Oval
        canvas.drawCircle(Offset(50 * scale, 48 * scale), 26 * scale, skinPaint);
        canvas.drawCircle(Offset(22 * scale, 48 * scale), 5 * scale, skinPaint);
        canvas.drawCircle(Offset(78 * scale, 48 * scale), 5 * scale, skinPaint);

        // Hair Bangs
        final bangs = Path()
          ..moveTo(24 * scale, 44 * scale)
          ..cubicTo(35 * scale, 24 * scale, 65 * scale, 24 * scale, 76 * scale, 44 * scale)
          ..cubicTo(60 * scale, 32 * scale, 40 * scale, 32 * scale, 24 * scale, 44 * scale)
          ..close();
        canvas.drawPath(bangs, hairPaint);
      } else if (config.hairStyleIndex == 8) {
        // Cute High Bun 👱‍♀️
        canvas.drawCircle(Offset(50 * scale, 18 * scale), 13 * scale, hairPaint);
        canvas.drawCircle(Offset(50 * scale, 26 * scale), 5 * scale, Paint()..color = const Color(0xFFFFB300));

        // Ears and Face
        canvas.drawCircle(Offset(22 * scale, 50 * scale), 5 * scale, skinPaint);
        canvas.drawCircle(Offset(78 * scale, 50 * scale), 5 * scale, skinPaint);
        canvas.drawCircle(Offset(50 * scale, 48 * scale), 26 * scale, skinPaint);

        // Forehead Bangs
        final bangs = Path()
          ..moveTo(24 * scale, 44 * scale)
          ..cubicTo(35 * scale, 24 * scale, 65 * scale, 24 * scale, 76 * scale, 44 * scale)
          ..cubicTo(60 * scale, 32 * scale, 40 * scale, 32 * scale, 24 * scale, 44 * scale)
          ..close();
        canvas.drawPath(bangs, hairPaint);
      } else if (config.hairStyleIndex == 9) {
        // Long Flowing Hair 💁‍♀️
        final longHair = Path()
          ..moveTo(20 * scale, 40 * scale)
          ..lineTo(16 * scale, 76 * scale)
          ..lineTo(32 * scale, 76 * scale)
          ..lineTo(32 * scale, 55 * scale)
          ..lineTo(68 * scale, 55 * scale)
          ..lineTo(68 * scale, 76 * scale)
          ..lineTo(84 * scale, 76 * scale)
          ..lineTo(80 * scale, 40 * scale)
          ..close();
        canvas.drawPath(longHair, hairPaint);
        canvas.drawCircle(Offset(50 * scale, 46 * scale), 30 * scale, hairPaint);
        canvas.drawCircle(Offset(50 * scale, 48 * scale), 26 * scale, skinPaint);
      } else {
        // Soft Bob Cut (Index 5)
        canvas.drawCircle(Offset(50 * scale, 46 * scale), 30 * scale, hairPaint);
        canvas.drawCircle(Offset(50 * scale, 48 * scale), 26 * scale, skinPaint);
      }
    } else {
      // MALE AVATAR
      // Base Face Circle & Ears
      canvas.drawCircle(Offset(21 * scale, 50 * scale), 5 * scale, skinPaint);
      canvas.drawCircle(Offset(79 * scale, 50 * scale), 5 * scale, skinPaint);
      canvas.drawCircle(Offset(50 * scale, 48 * scale), 27 * scale, skinPaint);

      if (config.hasHeadwear || config.hairStyleIndex == 8) {
        // Kufi Cap (Index 8 or hasHeadwear)
        final capPath = Path()
          ..addArc(Rect.fromCircle(center: Offset(50 * scale, 44 * scale), radius: 29 * scale), 3.14, 3.14);
        final capColor = config.hairStyleIndex == 8 ? const Color(0xFFECEFF1) : headwearColor;
        canvas.drawPath(capPath, Paint()..color = capColor);
        canvas.drawLine(
          Offset(21 * scale, 44 * scale),
          Offset(79 * scale, 44 * scale),
          Paint()
            ..color = const Color(0xFF00897B).withValues(alpha: 0.7)
            ..strokeWidth = 3 * scale,
        );
      } else {
        // Male Hair Styles
        switch (config.hairStyleIndex) {
          case 2: // Curly Top
            for (int i = 0; i < 5; i++) {
              canvas.drawCircle(Offset((28 + i * 11) * scale, 25 * scale), 9 * scale, hairPaint);
            }
            break;
          case 3: // Spiky Cut
            final spikyPath = Path()
              ..moveTo(22 * scale, 44 * scale)
              ..lineTo(30 * scale, 18 * scale)
              ..lineTo(40 * scale, 30 * scale)
              ..lineTo(50 * scale, 16 * scale)
              ..lineTo(60 * scale, 30 * scale)
              ..lineTo(70 * scale, 18 * scale)
              ..lineTo(78 * scale, 44 * scale)
              ..close();
            canvas.drawPath(spikyPath, hairPaint);
            break;
          case 4: // Buzz Cut
            final buzzPath = Path()
              ..addArc(Rect.fromCircle(center: Offset(50 * scale, 46 * scale), radius: 28 * scale), 3.14, 3.14);
            canvas.drawPath(buzzPath, hairPaint);
            break;
          case 5: // Side Part
            final sidePart = Path()
              ..moveTo(22 * scale, 44 * scale)
              ..cubicTo(30 * scale, 18 * scale, 70 * scale, 22 * scale, 78 * scale, 44 * scale)
              ..close();
            canvas.drawPath(sidePart, hairPaint);
            break;
          case 6: // Wavy Waves
            final wavePath = Path()
              ..moveTo(22 * scale, 44 * scale)
              ..cubicTo(28 * scale, 20 * scale, 40 * scale, 24 * scale, 50 * scale, 18 * scale)
              ..cubicTo(60 * scale, 14 * scale, 72 * scale, 22 * scale, 78 * scale, 44 * scale)
              ..close();
            canvas.drawPath(wavePath, hairPaint);
            break;
          case 7: // Neat Combed
            final combedPath = Path()
              ..moveTo(22 * scale, 44 * scale)
              ..cubicTo(26 * scale, 18 * scale, 74 * scale, 20 * scale, 78 * scale, 44 * scale)
              ..close();
            canvas.drawPath(combedPath, hairPaint);
            break;
          case 1:
          default: // Short Crop
            final cropPath = Path()
              ..addArc(Rect.fromCircle(center: Offset(50 * scale, 45 * scale), radius: 28 * scale), 3.14, 3.14);
            canvas.drawPath(cropPath, hairPaint);
            break;
        }
      }
    }

    // Eyewear Styles
    if (config.eyeGlassesIndex > 1) {
      final framePaint = Paint()
        ..color = const Color(0xFF37474F)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3 * scale;

      switch (config.eyeGlassesIndex) {
        case 2: // Round Glasses
          canvas.drawCircle(Offset(38 * scale, 48 * scale), 8 * scale, framePaint);
          canvas.drawCircle(Offset(62 * scale, 48 * scale), 8 * scale, framePaint);
          canvas.drawLine(Offset(46 * scale, 48 * scale), Offset(54 * scale, 48 * scale), framePaint);
          break;
        case 3: // Square Glasses
          canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(30 * scale, 40 * scale, 16 * scale, 16 * scale), Radius.circular(3 * scale)), framePaint);
          canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(54 * scale, 40 * scale, 16 * scale, 16 * scale), Radius.circular(3 * scale)), framePaint);
          canvas.drawLine(Offset(46 * scale, 48 * scale), Offset(54 * scale, 48 * scale), framePaint);
          break;
        case 4: // Sunglasses
          final shadesPaint = Paint()..color = const Color(0xFF212121);
          canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(28 * scale, 41 * scale, 19 * scale, 14 * scale), Radius.circular(4 * scale)), shadesPaint);
          canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(53 * scale, 41 * scale, 19 * scale, 14 * scale), Radius.circular(4 * scale)), shadesPaint);
          canvas.drawLine(Offset(47 * scale, 45 * scale), Offset(53 * scale, 45 * scale), shadesPaint..strokeWidth = 3 * scale);
          break;
        case 5: // Star Frames
          final starPaint = Paint()..color = const Color(0xFFFFB300);
          canvas.drawCircle(Offset(38 * scale, 48 * scale), 9 * scale, starPaint);
          canvas.drawCircle(Offset(62 * scale, 48 * scale), 9 * scale, starPaint);
          break;
      }
    }
  }

  @override
  bool shouldRepaint(covariant _FacelessHeadAvatarPainter oldDelegate) {
    return oldDelegate.config != config;
  }
}
