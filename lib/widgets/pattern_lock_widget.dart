import 'package:flutter/material.dart';
import '../theme/app_colors.dart';
import '../services/audio_service.dart';

/// Interactive Touch-Drag 3x3 Pattern Lock Widget
class PatternLockWidget extends StatefulWidget {
  final Function(String pattern) onPatternComplete;
  final String title;
  final bool requireConfirmation;

  const PatternLockWidget({
    Key? key,
    required this.onPatternComplete,
    this.title = 'Draw your secret pattern ⭐',
    this.requireConfirmation = false,
  }) : super(key: key);

  @override
  State<PatternLockWidget> createState() => _PatternLockWidgetState();
}

class _PatternLockWidgetState extends State<PatternLockWidget> {
  final List<int> _selectedDots = [];
  String? _firstPattern;
  bool _isConfirming = false;
  Offset? _currentDragPos;

  // Calculate 100% exact pixel-perfect dot center for 3x3 grid inside 240x240 box
  Offset _getDotCenter(int num) {
    final row = (num - 1) ~/ 3;
    final col = (num - 1) % 3;
    const double cellSize = 240.0 / 3.0;
    return Offset(
      (col + 0.5) * cellSize,
      (row + 0.5) * cellSize,
    );
  }

  void _onPanUpdate(Offset localPos) {
    setState(() {
      _currentDragPos = localPos;
    });

    for (int num = 1; num <= 9; num++) {
      final center = _getDotCenter(num);
      final distance = (localPos - center).distance;
      if (distance < 32) {
        if (!_selectedDots.contains(num)) {
          setState(() {
            _selectedDots.add(num);
          });
          AudioService.instance.playSparkleSound(context);
        }
      }
    }
  }

  void _onPanEnd() {
    setState(() {
      _currentDragPos = null;
    });
    _submitPattern();
  }

  void _clearPattern() {
    setState(() {
      _selectedDots.clear();
      _firstPattern = null;
      _isConfirming = false;
      _currentDragPos = null;
    });
  }

  void _submitPattern() {
    if (_selectedDots.length < 3) {
      if (_selectedDots.isNotEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: const Text('Connect at least 3 stars! ⭐'),
            backgroundColor: Colors.orange,
            behavior: SnackBarBehavior.floating,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
          ),
        );
      }
      return;
    }

    final currentDrawnPattern = _selectedDots.join('-');

    if (widget.requireConfirmation) {
      if (!_isConfirming) {
        // Step 1 done -> prompt Step 2 confirmation
        setState(() {
          _firstPattern = currentDrawnPattern;
          _selectedDots.clear();
          _isConfirming = true;
        });
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: const Text('✨ Pattern recorded! Draw it again to confirm.'),
            backgroundColor: AppColors.primaryTeal,
            behavior: SnackBarBehavior.floating,
            duration: const Duration(seconds: 2),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
          ),
        );
      } else {
        // Step 2 confirmation check
        if (currentDrawnPattern == _firstPattern) {
          widget.onPatternComplete(currentDrawnPattern);
        } else {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: const Text('❌ Patterns do not match! Please try again.'),
              backgroundColor: Colors.redAccent,
              behavior: SnackBarBehavior.floating,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
            ),
          );
          _clearPattern();
        }
      }
    } else {
      widget.onPatternComplete(currentDrawnPattern);
    }
  }

  @override
  Widget build(BuildContext context) {
    final displayTitle = _isConfirming
        ? 'Confirm your pattern ⭐'
        : widget.title;

    final displaySubtitle = _isConfirming
        ? 'Draw your secret pattern one more time to match!'
        : 'Drag your finger across stars to draw pattern!';

    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(32),
        boxShadow: [
          BoxShadow(
            color: AppColors.accentGold.withOpacity(0.15),
            blurRadius: 20,
            offset: const Offset(0, 8),
          ),
        ],
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            displayTitle,
            style: const TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
              color: AppColors.textDark,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 6),
          Text(
            displaySubtitle,
            style: TextStyle(
              fontSize: 12,
              fontWeight: _isConfirming ? FontWeight.bold : FontWeight.normal,
              color: _isConfirming ? AppColors.primaryTeal : AppColors.textMuted,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 20),

          // 3x3 Drag Canvas Grid (240x240)
          SizedBox(
            width: 240,
            height: 240,
            child: Builder(builder: (ctx) {
              return GestureDetector(
                onPanStart: (details) {
                  final RenderBox renderBox = ctx.findRenderObject() as RenderBox;
                  _onPanUpdate(renderBox.globalToLocal(details.globalPosition));
                },
                onPanUpdate: (details) {
                  final RenderBox renderBox = ctx.findRenderObject() as RenderBox;
                  _onPanUpdate(renderBox.globalToLocal(details.globalPosition));
                },
                onPanEnd: (_) => _onPanEnd(),
                child: CustomPaint(
                  painter: _PatternLinePainter(
                    selectedDots: _selectedDots,
                    getDotCenter: _getDotCenter,
                    currentDragPos: _currentDragPos,
                  ),
                  child: GridView.builder(
                    physics: const NeverScrollableScrollPhysics(),
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 3,
                      mainAxisSpacing: 16,
                      crossAxisSpacing: 16,
                    ),
                    itemCount: 9,
                    itemBuilder: (context, index) {
                      final dotId = index + 1;
                      final isSelected = _selectedDots.contains(dotId);

                      return AnimatedContainer(
                        duration: const Duration(milliseconds: 150),
                        decoration: BoxDecoration(
                          color: isSelected ? AppColors.softGoldBg : Colors.grey.shade100,
                          shape: BoxShape.circle,
                          border: Border.all(
                            color: isSelected ? AppColors.accentGold : Colors.grey.shade300,
                            width: isSelected ? 3.5 : 1.5,
                          ),
                          boxShadow: isSelected
                              ? [
                                  BoxShadow(
                                    color: AppColors.accentGold.withOpacity(0.4),
                                    blurRadius: 10,
                                    offset: const Offset(0, 4),
                                  )
                                ]
                              : [],
                        ),
                        child: Center(
                          child: Text(
                            isSelected ? '⭐' : '✨',
                            style: TextStyle(fontSize: isSelected ? 26 : 20),
                          ),
                        ),
                      );
                    },
                  ),
                ),
              );
            }),
          ),
          const SizedBox(height: 16),

          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              TextButton.icon(
                icon: const Icon(Icons.refresh_rounded, color: AppColors.textMuted),
                label: const Text('Reset', style: TextStyle(color: AppColors.textMuted)),
                onPressed: _clearPattern,
              ),
              ElevatedButton.icon(
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primaryTeal,
                  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
                icon: const Icon(Icons.check_circle_rounded),
                label: Text(_isConfirming ? 'Confirm & Save' : 'Next Step'),
                onPressed: _submitPattern,
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _PatternLinePainter extends CustomPainter {
  final List<int> selectedDots;
  final Offset Function(int) getDotCenter;
  final Offset? currentDragPos;

  _PatternLinePainter({
    required this.selectedDots,
    required this.getDotCenter,
    this.currentDragPos,
  });

  @override
  void paint(Canvas canvas, Size size) {
    if (selectedDots.isEmpty) return;

    final linePaint = Paint()
      ..color = AppColors.accentGold
      ..strokeWidth = 6.0
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round
      ..style = PaintingStyle.stroke;

    final path = Path();
    final firstCenter = getDotCenter(selectedDots.first);
    path.moveTo(firstCenter.dx, firstCenter.dy);

    for (int i = 1; i < selectedDots.length; i++) {
      final center = getDotCenter(selectedDots[i]);
      path.lineTo(center.dx, center.dy);
    }

    if (currentDragPos != null) {
      path.lineTo(currentDragPos!.dx, currentDragPos!.dy);
    }

    canvas.drawPath(path, linePaint);
  }

  @override
  bool shouldRepaint(covariant _PatternLinePainter oldDelegate) {
    return oldDelegate.selectedDots != selectedDots || oldDelegate.currentDragPos != currentDragPos;
  }
}
