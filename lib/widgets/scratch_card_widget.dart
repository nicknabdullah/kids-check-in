import 'package:flutter/material.dart';
import '../theme/app_colors.dart';

/// Interactive Touch Scratch Card Widget.
/// Kids scratch off the glittering top layer using touch gestures to reveal the hidden reward.
class ScratchCardWidget extends StatefulWidget {
  final Widget rewardContent;
  final VoidCallback? onScratchedComplete;

  const ScratchCardWidget({
    Key? key,
    required this.rewardContent,
    this.onScratchedComplete,
  }) : super(key: key);

  @override
  State<ScratchCardWidget> createState() => _ScratchCardWidgetState();
}

class _ScratchCardWidgetState extends State<ScratchCardWidget> {
  final List<Offset> _scratchPoints = [];
  bool _isRevealed = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 280,
      height: 280,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(28),
        boxShadow: [
          BoxShadow(
            color: AppColors.accentGold.withOpacity(0.3),
            blurRadius: 20,
            offset: const Offset(0, 8),
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(28),
        child: Stack(
          children: [
            // Revealed Reward Card underneath
            Positioned.fill(
              child: Container(
                color: AppColors.softGoldBg,
                child: widget.rewardContent,
              ),
            ),

            // Top Scratchable Layer (Gold Sparkle Foil)
            if (!_isRevealed)
              Positioned.fill(
                child: GestureDetector(
                  onPanUpdate: (details) {
                    RenderBox renderBox = context.findRenderObject() as RenderBox;
                    Offset localPosition = renderBox.globalToLocal(details.globalPosition);
                    setState(() {
                      _scratchPoints.add(localPosition);
                      if (_scratchPoints.length > 40 && !_isRevealed) {
                        _isRevealed = true;
                        widget.onScratchedComplete?.call();
                      }
                    });
                  },
                  child: CustomPaint(
                    painter: _ScratchFoilPainter(scratchPoints: List.from(_scratchPoints)),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}

class _ScratchFoilPainter extends CustomPainter {
  final List<Offset> scratchPoints;

  _ScratchFoilPainter({required this.scratchPoints});

  @override
  void paint(Canvas canvas, Size size) {
    // 1. Draw Gold Foil Surface
    final foilPaint = Paint()
      ..color = AppColors.accentGold
      ..style = PaintingStyle.fill;

    final rect = Rect.fromLTWH(0, 0, size.width, size.height);
    canvas.drawRect(rect, foilPaint);

    // Decorative Text & Stars on Foil
    final textPainter = TextPainter(
      text: const TextSpan(
        text: '✨ SCRATCH ME! ✨\n🎁',
        style: TextStyle(
          fontSize: 22,
          fontWeight: FontWeight.bold,
          color: Colors.white,
          height: 1.5,
        ),
      ),
      textAlign: TextAlign.center,
      textDirection: TextDirection.ltr,
    );
    textPainter.layout(maxWidth: size.width);
    textPainter.paint(
      canvas,
      Offset(
        (size.width - textPainter.width) / 2,
        (size.height - textPainter.height) / 2,
      ),
    );

    // 2. Erase scratched lines using BlendMode.clear
    final erasePaint = Paint()
      ..blendMode = BlendMode.clear
      ..strokeWidth = 35.0
      ..strokeCap = StrokeCap.round;

    canvas.saveLayer(rect, Paint());
    canvas.drawRect(rect, foilPaint);
    textPainter.paint(
      canvas,
      Offset(
        (size.width - textPainter.width) / 2,
        (size.height - textPainter.height) / 2,
      ),
    );

    for (var point in scratchPoints) {
      canvas.drawCircle(point, 22.0, erasePaint);
    }
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _ScratchFoilPainter oldDelegate) => true;
}
