import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../models/deed_model.dart';
import '../../models/daily_entry_model.dart';
import '../../theme/app_colors.dart';
import '../../widgets/islamic_pattern_background.dart';
import 'daily_results_screen.dart';

/// Screen 2 — Nightly Family Check-In
/// Guided interactive check-in flow presenting ONE habit question at a time.
class NightlyCheckInScreen extends StatefulWidget {
  const NightlyCheckInScreen({Key? key}) : super(key: key);

  @override
  State<NightlyCheckInScreen> createState() => _NightlyCheckInScreenState();
}

class _NightlyCheckInScreenState extends State<NightlyCheckInScreen> {
  int _currentIndex = 0;
  final List<DeedCheckResult> _completedResults = [];
  bool _showEncouragementOverlay = false;
  String _overlayMessage = '';
  bool _isPositiveFeedback = true;

  void _handleAnswer(DeedModel deed, ResponseType response, int points) {
    _completedResults.add(
      DeedCheckResult(deed: deed, response: response, pointsEarned: points),
    );

    // Prepare non-punitive gentle encouragement
    setState(() {
      _showEncouragementOverlay = true;
      if (deed.isPositive) {
        _isPositiveFeedback = true;
        _overlayMessage = points > 0 ? '✨ MashaAllah! Great Job! ✨' : '🌱 Good effort! Keep trying!';
      } else {
        _isPositiveFeedback = false;
        if (response == ResponseType.negativeOccurred) {
          // CRITICAL REQUIREMENT: No shame or anger
          _overlayMessage = '🌱 It\'s okay! Tomorrow is another chance, InshaAllah.';
        } else {
          _overlayMessage = '🌟 Alhamdulillah! Excellent self-control!';
        }
      }
    });

    Future.delayed(const Duration(milliseconds: 1200), () {
      if (!mounted) return;
      setState(() {
        _showEncouragementOverlay = false;
      });

      final appState = Provider.of<AppStateProvider>(context, listen: false);
      final activeDeeds = appState.activeDeeds;

      if (_currentIndex < activeDeeds.length - 1) {
        setState(() {
          _currentIndex++;
        });
      } else {
        // Complete Check-in & Navigate to Results
        appState.recordCheckInResult(appState.activeChild.id, _completedResults);
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
        appBar: AppBar(title: const Text('Nightly Check-In')),
        body: const Center(child: Text('No active deeds configured yet.')),
      );
    }

    final currentDeed = activeDeeds[_currentIndex];
    double progress = (_currentIndex + 1) / activeDeeds.length;

    return Scaffold(
      body: IslamicPatternBackground(
        child: Stack(
          children: [
            Padding(
              padding: const EdgeInsets.all(24.0),
              child: Column(
                children: [
                  // Top Navigation Header & Progress Bar
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      IconButton(
                        icon: const Icon(Icons.close_rounded, size: 28),
                        onPressed: () => Navigator.pop(context),
                      ),
                      Text(
                        'Question ${_currentIndex + 1} of ${activeDeeds.length}',
                        style: const TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                          color: AppColors.textMuted,
                        ),
                      ),
                      const SizedBox(width: 48), // Spacer
                    ],
                  ),
                  const SizedBox(height: 12),
                  LinearProgressIndicator(
                    value: progress,
                    backgroundColor: Colors.grey.shade200,
                    valueColor: const AlwaysStoppedAnimation<Color>(AppColors.accentGold),
                    minHeight: 10,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  const SizedBox(height: 30),

                  // Header Titles
                  const Text(
                    '🌙 How Was Your Day?',
                    style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight.bold,
                      color: AppColors.textDark,
                    ),
                  ),
                  const SizedBox(height: 6),
                  const Text(
                    'Let\'s remember the good things you did today!',
                    style: TextStyle(fontSize: 15, color: AppColors.textMuted),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 30),

                  // Large Question Card
                  Expanded(
                    child: Container(
                      padding: const EdgeInsets.all(24),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(32),
                        boxShadow: [
                          BoxShadow(
                            color: AppColors.primaryTeal.withOpacity(0.1),
                            blurRadius: 20,
                            offset: const Offset(0, 8),
                          ),
                        ],
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Container(
                            width: 80,
                            height: 80,
                            decoration: BoxDecoration(
                              color: currentDeed.isPositive
                                  ? AppColors.softGoldBg
                                  : const Color(0xFFFFEBEE),
                              shape: BoxShape.circle,
                            ),
                            child: Center(
                              child: Text(
                                currentDeed.iconEmoji,
                                style: const TextStyle(fontSize: 40),
                              ),
                            ),
                          ),
                          const SizedBox(height: 20),
                          Text(
                            currentDeed.description,
                            style: const TextStyle(
                              fontSize: 22,
                              fontWeight: FontWeight.bold,
                              color: AppColors.textDark,
                              height: 1.3,
                            ),
                            textAlign: TextAlign.center,
                          ),
                          if (currentDeed.islamicReference != null) ...[
                            const SizedBox(height: 12),
                            Text(
                              '📖 Reference: ${currentDeed.islamicReference}',
                              style: const TextStyle(
                                fontSize: 13,
                                fontStyle: FontStyle.italic,
                                color: AppColors.primaryTeal,
                              ),
                            ),
                          ],
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 30),

                  // Answer Buttons Section
                  if (currentDeed.isPositive) ...[
                    // Positive Good Deed Responses
                    _buildAnswerButton(
                      label: '✅ Yes, Alhamdulillah!',
                      color: AppColors.mintGreen,
                      onTap: () => _handleAnswer(
                        currentDeed,
                        ResponseType.great,
                        currentDeed.points,
                      ),
                    ),
                    const SizedBox(height: 12),
                    _buildAnswerButton(
                      label: '🙂 Tried my best (+1 pt)',
                      color: AppColors.skyBlue,
                      onTap: () => _handleAnswer(
                        currentDeed,
                        ResponseType.tried,
                        1,
                      ),
                    ),
                    const SizedBox(height: 12),
                    _buildAnswerButton(
                      label: '➖ Not today',
                      color: Colors.grey.shade400,
                      onTap: () => _handleAnswer(
                        currentDeed,
                        ResponseType.notToday,
                        0,
                      ),
                    ),
                  ] else ...[
                    // Behavior to Improve Responses (Gentle Non-Punitive)
                    _buildAnswerButton(
                      label: '🙂 No, avoided it!',
                      color: AppColors.mintGreen,
                      onTap: () => _handleAnswer(
                        currentDeed,
                        ResponseType.negativeAvoided,
                        0,
                      ),
                    ),
                    const SizedBox(height: 12),
                    _buildAnswerButton(
                      label: '😕 Yes (-${currentDeed.points} pts)',
                      color: AppColors.softCoral,
                      onTap: () => _handleAnswer(
                        currentDeed,
                        ResponseType.negativeOccurred,
                        -currentDeed.points,
                      ),
                    ),
                  ],
                  const SizedBox(height: 20),
                ],
              ),
            ),

            // Animated Encouragement Overlay Banner
            if (_showEncouragementOverlay)
              AnimatedOpacity(
                duration: const Duration(milliseconds: 300),
                opacity: _showEncouragementOverlay ? 1.0 : 0.0,
                child: Container(
                  color: Colors.black45,
                  child: Center(
                    child: Container(
                      margin: const EdgeInsets.symmetric(horizontal: 30),
                      padding: const EdgeInsets.all(28),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(28),
                        boxShadow: const [
                          BoxShadow(
                            color: Colors.black26,
                            blurRadius: 20,
                          ),
                        ],
                      ),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            _isPositiveFeedback ? '🌟' : '🌱',
                            style: const TextStyle(fontSize: 48),
                          ),
                          const SizedBox(height: 16),
                          Text(
                            _overlayMessage,
                            style: const TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold,
                              color: AppColors.textDark,
                            ),
                            textAlign: TextAlign.center,
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }

  Widget _buildAnswerButton({
    required String label,
    required Color color,
    required VoidCallback onTap,
  }) {
    return SizedBox(
      width: double.infinity,
      height: 56,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: color,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),
          elevation: 2,
        ),
        onPressed: onTap,
        child: Text(
          label,
          style: const TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
      ),
    );
  }
}
