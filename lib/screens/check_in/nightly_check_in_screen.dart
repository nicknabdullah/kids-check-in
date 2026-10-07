import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../models/deed_model.dart';
import '../../models/daily_entry_model.dart';
import '../../theme/app_colors.dart';
import '../../widgets/islamic_pattern_background.dart';
import '../../services/audio_service.dart';
import 'daily_results_screen.dart';

/// Screen 2 — Nightly Family Check-In (Single-Card Flow)
/// Presents ONE habit question at a time with realistic chalkboard score and celebratory feedback overlays.
class NightlyCheckInScreen extends StatefulWidget {
  const NightlyCheckInScreen({Key? key}) : super(key: key);

  @override
  State<NightlyCheckInScreen> createState() => _NightlyCheckInScreenState();
}

class _NightlyCheckInScreenState extends State<NightlyCheckInScreen> {
  int _currentIndex = 0;
  final List<DeedCheckResult> _completedResults = [];
  int _runningScore = 0;
  int? _lastDelta;
  bool _showOverlay = false;
  _AnimationType? _animationType;
  bool _isProcessing = false;

  void _handleAnswer(DeedModel deed, ResponseType response, int points) {
    if (_isProcessing) return;
    _isProcessing = true;

    _completedResults.add(
      DeedCheckResult(deed: deed, response: response, pointsEarned: points),
    );

    setState(() {
      _runningScore += points;
      _lastDelta = points;
      _showOverlay = true;

      if (deed.isPositive) {
        if (response == ResponseType.great) {
          _animationType = _AnimationType.balloons;
          AudioService.instance.playVoiceFeedback(
            context,
            AudioService.feedbackForDeed(deed),
          );
        } else if (response == ResponseType.tried) {
          _animationType = _AnimationType.stars;
          AudioService.instance.playVoiceFeedback(
            context,
            'Mashaa Allah! Wonderful job!',
          );
        } else {
          _animationType = _AnimationType.droopyRose;
        }
      } else {
        if (response == ResponseType.negativeAvoided) {
          _animationType = _AnimationType.balloons;
          AudioService.instance.playVoiceFeedback(
            context,
            'Mashaa Allah! Keep doing your best!',
          );
        } else {
          _animationType = _AnimationType.droopyRose;
        }
      }
    });

    Future.delayed(const Duration(milliseconds: 1400), () {
      if (!mounted) return;
      final appState = Provider.of<AppStateProvider>(context, listen: false);
      final activeDeeds = appState.activeDeeds;

      setState(() {
        _showOverlay = false;
        _animationType = null;
        _lastDelta = null;
        _isProcessing = false;
      });

      if (_currentIndex < activeDeeds.length - 1) {
        setState(() {
          _currentIndex++;
        });
      } else {
        appState.recordCheckInResult(
            appState.activeChild.id, _completedResults);
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (_) => DailyResultsScreen(checkResults: _completedResults),
          ),
        );
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);
    final activeDeeds = appState.activeDeeds;

    if (activeDeeds.isEmpty) {
      return Scaffold(
        appBar: AppBar(title: const Text('Nightly check-in')),
        body: const Center(child: Text('No active deeds configured yet.')),
      );
    }

    final currentDeed = activeDeeds[_currentIndex];
    final double progress = (_currentIndex + 1) / activeDeeds.length;

    return Scaffold(
      body: IslamicPatternBackground(
        child: Stack(
          children: [
            SafeArea(
              child: LayoutBuilder(
                builder: (context, constraints) => SingleChildScrollView(
                  padding: const EdgeInsets.fromLTRB(20, 12, 20, 12),
                  child: ConstrainedBox(
                    constraints: BoxConstraints(
                      minHeight: constraints.maxHeight - 24,
                    ),
                    child: IntrinsicHeight(
                      child: Column(
                        children: [
                          // Header Bar
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              IconButton(
                                icon: const Icon(Icons.close_rounded,
                                    size: 26, color: AppColors.textDark),
                                onPressed: () => Navigator.pop(context),
                              ),
                              Container(
                                padding: const EdgeInsets.symmetric(
                                    horizontal: 12, vertical: 6),
                                decoration: BoxDecoration(
                                  color: AppColors.softTealBg,
                                  borderRadius: BorderRadius.circular(16),
                                ),
                                child: Text(
                                  'Question ${_currentIndex + 1} of ${activeDeeds.length}',
                                  style: const TextStyle(
                                    fontSize: 13,
                                    fontWeight: FontWeight.bold,
                                    color: AppColors.primaryTeal,
                                  ),
                                ),
                              ),
                              const SizedBox(width: 48),
                            ],
                          ),
                          const SizedBox(height: 8),

                          // Progress Bar
                          ClipRRect(
                            borderRadius: BorderRadius.circular(8),
                            child: LinearProgressIndicator(
                              value: progress,
                              backgroundColor: Colors.grey.shade200,
                              valueColor: const AlwaysStoppedAnimation<Color>(
                                  AppColors.accentGold),
                              minHeight: 8,
                            ),
                          ),
                          const SizedBox(height: 18),

                          // Single Mission Card
                          Container(
                            width: double.infinity,
                            padding: const EdgeInsets.all(22),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(28),
                              border: Border.all(
                                color: currentDeed.isPositive
                                    ? const Color(0xFF80CBC4)
                                    : const Color(0xFFFFE082),
                                width: 2,
                              ),
                              boxShadow: [
                                BoxShadow(
                                  color: AppColors.primaryTeal
                                      .withValues(alpha: 0.08),
                                  blurRadius: 18,
                                  offset: const Offset(0, 6),
                                ),
                              ],
                            ),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Container(
                                  width: 72,
                                  height: 72,
                                  decoration: BoxDecoration(
                                    color: currentDeed.isPositive
                                        ? AppColors.softGoldBg
                                        : const Color(0xFFFFEBEE),
                                    shape: BoxShape.circle,
                                  ),
                                  child: Center(
                                    child: Text(currentDeed.iconEmoji,
                                        style: const TextStyle(fontSize: 36)),
                                  ),
                                ),
                                const SizedBox(height: 14),
                                Text(
                                  currentDeed.description,
                                  style: const TextStyle(
                                    fontSize: 19,
                                    fontWeight: FontWeight.bold,
                                    color: AppColors.textDark,
                                    height: 1.35,
                                  ),
                                  textAlign: TextAlign.center,
                                ),
                                const SizedBox(height: 8),
                                Container(
                                  padding: const EdgeInsets.symmetric(
                                      horizontal: 12, vertical: 4),
                                  decoration: BoxDecoration(
                                    color: currentDeed.isPositive
                                        ? AppColors.softTealBg
                                        : const Color(0xFFFFE0B2),
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                  child: Text(
                                    currentDeed.isPositive
                                        ? '+${currentDeed.points} pts if yes'
                                        : '-${currentDeed.points} pts if occurred',
                                    style: TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.bold,
                                      color: currentDeed.isPositive
                                          ? AppColors.primaryTeal
                                          : const Color(0xFFE65100),
                                    ),
                                  ),
                                ),
                                if (currentDeed.islamicReference != null) ...[
                                  const SizedBox(height: 8),
                                  Text(
                                    '📖 ${currentDeed.islamicReference}',
                                    style: const TextStyle(
                                      fontSize: 11,
                                      fontStyle: FontStyle.italic,
                                      color: AppColors.primaryTeal,
                                    ),
                                    textAlign: TextAlign.center,
                                  ),
                                ],
                              ],
                            ),
                          ),
                          const SizedBox(height: 16),

                          // Response Buttons
                          if (currentDeed.isPositive) ...[
                            _buildAnswerButton(
                              label: '✅ Yes, Alhamdulillah!',
                              sublabel: '+${currentDeed.points} pts',
                              color: AppColors.mintGreen,
                              onTap: () => _handleAnswer(currentDeed,
                                  ResponseType.great, currentDeed.points),
                            ),
                            const SizedBox(height: 8),
                            _buildAnswerButton(
                              label: '🙂 Tried my best',
                              sublabel: '+1 pt',
                              color: AppColors.skyBlue,
                              onTap: () => _handleAnswer(
                                  currentDeed, ResponseType.tried, 1),
                            ),
                            const SizedBox(height: 8),
                            _buildAnswerButton(
                              label: '➖ Not today',
                              sublabel: '0 pts',
                              color: Colors.grey.shade400,
                              onTap: () => _handleAnswer(
                                  currentDeed, ResponseType.notToday, 0),
                            ),
                          ] else ...[
                            _buildAnswerButton(
                              label: '💪 No, avoided it!',
                              sublabel: '0 pts',
                              color: AppColors.mintGreen,
                              onTap: () => _handleAnswer(
                                  currentDeed, ResponseType.negativeAvoided, 0),
                            ),
                            const SizedBox(height: 8),
                            _buildAnswerButton(
                              label: '😕 Yes, happened',
                              sublabel: '-${currentDeed.points} pts',
                              color: AppColors.softCoral,
                              onTap: () => _handleAnswer(
                                  currentDeed,
                                  ResponseType.negativeOccurred,
                                  -currentDeed.points),
                            ),
                          ],
                          const Spacer(),
                          _BlackboardScoreWidget(
                            score: _runningScore,
                            lastDelta: _lastDelta,
                          ),
                          const Spacer(),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ),

            // Animated Celebration Overlay
            if (_showOverlay && _animationType != null)
              _FeedbackAnimationOverlay(animationType: _animationType!),
          ],
        ),
      ),
    );
  }

  Widget _buildAnswerButton({
    required String label,
    required String sublabel,
    required Color color,
    required VoidCallback onTap,
  }) {
    return SizedBox(
      width: double.infinity,
      height: 52,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: color,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(18),
          ),
          elevation: 2,
        ),
        onPressed: _isProcessing ? null : onTap,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              label,
              style: const TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
            const SizedBox(width: 8),
            Text(
              '($sublabel)',
              style: const TextStyle(
                fontSize: 12,
                color: Colors.white70,
                fontWeight: FontWeight.w600,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _BlackboardScoreWidget extends StatelessWidget {
  final int score;
  final int? lastDelta;

  const _BlackboardScoreWidget({
    required this.score,
    required this.lastDelta,
  });

  @override
  Widget build(BuildContext context) {
    return Stack(
      clipBehavior: Clip.none,
      alignment: Alignment.center,
      children: [
        TweenAnimationBuilder<double>(
          key: ValueKey('$score:$lastDelta'),
          tween: Tween(begin: 0.7, end: 1),
          duration: const Duration(milliseconds: 480),
          curve: Curves.elasticOut,
          builder: (context, scale, child) => Transform.rotate(
            angle: 0.035,
            child: Transform.scale(scale: scale, child: child),
          ),
          child: Text(
            '$score pts',
            style: GoogleFonts.cabinSketch(
              fontSize: 34,
              fontWeight: FontWeight.bold,
              fontStyle: FontStyle.italic,
              color: const Color(0xFF1B281F),
              shadows: const [
                Shadow(
                    color: Colors.white70, offset: Offset(1, 1), blurRadius: 0),
                Shadow(
                    color: Colors.black26, offset: Offset(0, 2), blurRadius: 0),
              ],
            ),
          ),
        ),
        if (lastDelta != null)
          Positioned(
            top: -20,
            right: 10,
            child: _ChalkDeltaPopup(delta: lastDelta!),
          ),
      ],
    );
  }
}

class _ChalkDeltaPopup extends StatelessWidget {
  final int delta;
  const _ChalkDeltaPopup({required this.delta});

  @override
  Widget build(BuildContext context) {
    final color = delta > 0
        ? const Color(0xFFB9F6CA)
        : delta < 0
            ? const Color(0xFFFF8A80)
            : const Color(0xFFE0E0E0);
    final sign = delta > 0 ? '+' : '';

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        color: Colors.black87,
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: color, width: 1.5),
      ),
      child: Text(
        '$sign$delta pts',
        style: TextStyle(
          fontFamily: 'Fredoka',
          fontSize: 14,
          fontWeight: FontWeight.bold,
          color: color,
        ),
      ),
    );
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Animation types
// ─────────────────────────────────────────────────────────────────────────────
enum _AnimationType { balloons, stars, droopyRose }

// ─────────────────────────────────────────────────────────────────────────────
// Full-card animated feedback overlay
// ─────────────────────────────────────────────────────────────────────────────
class _FeedbackAnimationOverlay extends StatefulWidget {
  final _AnimationType animationType;
  const _FeedbackAnimationOverlay({required this.animationType});

  @override
  State<_FeedbackAnimationOverlay> createState() =>
      _FeedbackAnimationOverlayState();
}

class _FeedbackAnimationOverlayState extends State<_FeedbackAnimationOverlay>
    with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;
  late final Animation<double> _fadeAnim;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(
        duration: const Duration(milliseconds: 1800), vsync: this);
    _fadeAnim = CurvedAnimation(parent: _ctrl, curve: Curves.easeInOut);
    _ctrl.forward();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Positioned.fill(
      child: FadeTransition(
        opacity: ReverseAnimation(_fadeAnim),
        child: Container(
          decoration: BoxDecoration(
            color: _overlayColor.withValues(alpha: 0.92),
            borderRadius: BorderRadius.circular(24),
          ),
          child: Center(child: _buildContent()),
        ),
      ),
    );
  }

  Color get _overlayColor {
    switch (widget.animationType) {
      case _AnimationType.balloons:
        return const Color(0xFFF1FFF8);
      case _AnimationType.stars:
        return const Color(0xFFFFFBE6);
      case _AnimationType.droopyRose:
        return const Color(0xFFF8F8F8);
    }
  }

  Widget _buildContent() {
    switch (widget.animationType) {
      case _AnimationType.balloons:
        return const _BalloonsAnimation();
      case _AnimationType.stars:
        return const _StarsAnimation();
      case _AnimationType.droopyRose:
        return const _DroopyRoseAnimation();
    }
  }
}

// ── 🎈 Balloons: "Yes!" ──────────────────────────────────────────────────────
class _BalloonsAnimation extends StatefulWidget {
  const _BalloonsAnimation();

  @override
  State<_BalloonsAnimation> createState() => _BalloonsAnimationState();
}

class _BalloonsAnimationState extends State<_BalloonsAnimation>
    with SingleTickerProviderStateMixin {
  late AnimationController _ctrl;
  late List<_Particle> _particles;
  final math.Random _rng = math.Random();

  @override
  void initState() {
    super.initState();
    _particles = List.generate(12, (_) => _Particle.random(_rng));
    _ctrl = AnimationController(
        vsync: this, duration: const Duration(milliseconds: 1400));
    _ctrl.forward();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _ctrl,
      builder: (_, __) => Stack(
        children: [
          ..._particles.map((p) {
            final y = p.startY - _ctrl.value * p.speed * 120;
            final x =
                p.startX + math.sin(_ctrl.value * math.pi * 2 + p.wobble) * 12;
            return Positioned(
              left: x,
              top: y,
              child: Opacity(
                opacity: (1 - _ctrl.value).clamp(0.0, 1.0),
                child: Text(p.emoji, style: TextStyle(fontSize: p.size)),
              ),
            );
          }),
          const Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text('🎉', style: TextStyle(fontSize: 42)),
                SizedBox(height: 4),
                Text(
                  'Alhamdulillah!',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: AppColors.primaryTeal,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ── 🌟 Stars: "Tried!" ────────────────────────────────────────────────────────
class _StarsAnimation extends StatefulWidget {
  const _StarsAnimation();

  @override
  State<_StarsAnimation> createState() => _StarsAnimationState();
}

class _StarsAnimationState extends State<_StarsAnimation>
    with SingleTickerProviderStateMixin {
  late AnimationController _ctrl;
  late List<_Particle> _particles;
  final math.Random _rng = math.Random();

  @override
  void initState() {
    super.initState();
    _particles = List.generate(10, (_) => _Particle.randomStar(_rng));
    _ctrl = AnimationController(
        vsync: this, duration: const Duration(milliseconds: 1400));
    _ctrl.forward();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _ctrl,
      builder: (_, __) => Stack(
        children: [
          ..._particles.map((p) {
            final y = p.startY - _ctrl.value * p.speed * 80;
            final x =
                p.startX + math.sin(_ctrl.value * math.pi * 3 + p.wobble) * 8;
            return Positioned(
              left: x,
              top: y,
              child: Opacity(
                opacity: (1 - _ctrl.value * 0.9).clamp(0.0, 1.0),
                child: Text(p.emoji, style: TextStyle(fontSize: p.size)),
              ),
            );
          }),
          const Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text('🌟', style: TextStyle(fontSize: 42)),
                SizedBox(height: 4),
                Text(
                  'MashaAllah!',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: AppColors.accentGold,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ── 🥀 Droopy Rose: "Not today" ───────────────────────────────────────────────
class _DroopyRoseAnimation extends StatefulWidget {
  const _DroopyRoseAnimation();

  @override
  State<_DroopyRoseAnimation> createState() => _DroopyRoseAnimationState();
}

class _DroopyRoseAnimationState extends State<_DroopyRoseAnimation>
    with SingleTickerProviderStateMixin {
  late AnimationController _ctrl;
  late Animation<double> _droop;
  late Animation<double> _fade;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(
        vsync: this, duration: const Duration(milliseconds: 1600));
    _droop = Tween<double>(begin: -0.2, end: 0.15)
        .animate(CurvedAnimation(parent: _ctrl, curve: Curves.easeOutBack));
    _fade = CurvedAnimation(
        parent: _ctrl, curve: const Interval(0.7, 1.0, curve: Curves.easeIn));
    _ctrl.forward();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _ctrl,
      builder: (_, __) => Center(
        child: Opacity(
          opacity: (1 - _fade.value).clamp(0.0, 1.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Transform.rotate(
                angle: _droop.value,
                alignment: Alignment.topCenter,
                child: const Text('🥀', style: TextStyle(fontSize: 48)),
              ),
              const SizedBox(height: 6),
              Text(
                'Tomorrow is another\nchance, InshaAllah! 🌱',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                  color: Colors.grey.shade600,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Particle helper for balloon / star animations
// ─────────────────────────────────────────────────────────────────────────────
class _Particle {
  final double startX;
  final double startY;
  final double speed;
  final double wobble;
  final double size;
  final String emoji;

  const _Particle({
    required this.startX,
    required this.startY,
    required this.speed,
    required this.wobble,
    required this.size,
    required this.emoji,
  });

  static const _balloonEmojis = ['🎈', '🎉', '🎊', '✨', '🎈', '🌟'];
  static const _starEmojis = ['🌟', '⭐', '✨', '💫', '🌟', '⭐'];

  factory _Particle.random(math.Random rng) => _Particle(
        startX: rng.nextDouble() * 240 + 10,
        startY: rng.nextDouble() * 60 + 30,
        speed: rng.nextDouble() * 0.5 + 0.7,
        wobble: rng.nextDouble() * math.pi * 2,
        size: rng.nextDouble() * 16 + 16,
        emoji: _balloonEmojis[rng.nextInt(_balloonEmojis.length)],
      );

  factory _Particle.randomStar(math.Random rng) => _Particle(
        startX: rng.nextDouble() * 220 + 10,
        startY: rng.nextDouble() * 50 + 20,
        speed: rng.nextDouble() * 0.4 + 0.6,
        wobble: rng.nextDouble() * math.pi * 2,
        size: rng.nextDouble() * 14 + 12,
        emoji: _starEmojis[rng.nextInt(_starEmojis.length)],
      );
}
