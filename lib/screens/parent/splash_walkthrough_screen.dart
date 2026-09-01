import 'package:flutter/material.dart';
import '../../theme/app_colors.dart';
import '../../widgets/islamic_pattern_background.dart';
import 'first_time_onboarding_screen.dart';

class WalkthroughSlide {
  final String emoji;
  final String title;
  final String subtitle;
  final String description;
  final Color cardColor;

  WalkthroughSlide({
    required this.emoji,
    required this.title,
    required this.subtitle,
    required this.description,
    required this.cardColor,
  });
}

/// Interactive 5-Slide Splash Walkthrough & Help Tour
class SplashWalkthroughScreen extends StatefulWidget {
  final bool isHelpMode;

  const SplashWalkthroughScreen({Key? key, this.isHelpMode = false}) : super(key: key);

  @override
  State<SplashWalkthroughScreen> createState() => _SplashWalkthroughScreenState();
}

class _SplashWalkthroughScreenState extends State<SplashWalkthroughScreen> {
  final PageController _pageController = PageController();
  int _currentPage = 0;

  final List<WalkthroughSlide> _slides = [
    WalkthroughSlide(
      emoji: '🕌',
      title: 'Welcome to Kids Good-Deeds!',
      subtitle: 'Positive Islamic Habit Building',
      description: 'Build daily Islamic manners, prayers, and kindness in a fun, encouraging environment with ZERO shaming or negative punishment.',
      cardColor: const Color(0xFFE0F2F1),
    ),
    WalkthroughSlide(
      emoji: '👦',
      title: 'Faceless Avatars 🎨',
      subtitle: 'Islamic Visual Guidelines',
      description: 'Strictly adheres to faceless character rules (no eyes, nose, or mouth). Kids can customize outfits, skin tones, Kufi caps, Hijabs, and backpacks!',
      cardColor: const Color(0xFFFFF8E1),
    ),
    WalkthroughSlide(
      emoji: '🌙',
      title: 'Nightly Check-In Ritual 🗺️',
      subtitle: 'Gentle Encouragement',
      description: 'A guided 1-question card deck check-in. Positive deeds earn stars. Missed habits show gentle prompts: "Tomorrow is another chance, InshaAllah!"',
      cardColor: const Color(0xFFE1F5FE),
    ),
    WalkthroughSlide(
      emoji: '🎁',
      title: 'Scratch Rewards & Games 🤲',
      subtitle: 'Engaging Kids Quests',
      description: 'Touch-to-scratch mystery reward cards, 80%+ accuracy Dua recitation hurdles, Arabic alphabet bubble pop, and sticker garden!',
      cardColor: const Color(0xFFF3E5F5),
    ),
    WalkthroughSlide(
      emoji: '👨‍👩‍👧',
      title: 'Parent Controls & Pattern Locks 🔒',
      subtitle: 'Full Security & Customization',
      description: 'Protected by a 4-digit PIN lock. Parents customize habits, set reward drop rates, and assign secret 3x3 pattern locks for each child!',
      cardColor: const Color(0xFFE8F5E9),
    ),
  ];

  void _finishWalkthrough() {
    if (widget.isHelpMode) {
      Navigator.pop(context);
    } else {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (_) => const FirstTimeOnboardingScreen()),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IslamicPatternBackground(
        child: SafeArea(
          child: Column(
            children: [
              // Top Bar with Skip Button
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      widget.isHelpMode ? '❓ App Guide' : '🌟 Welcome Guide',
                      style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppColors.primaryTeal),
                    ),
                    TextButton(
                      onPressed: _finishWalkthrough,
                      child: Text(
                        widget.isHelpMode ? 'Close' : 'Skip ➡️',
                        style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: AppColors.textMuted),
                      ),
                    ),
                  ],
                ),
              ),

              // Page View Slider
              Expanded(
                child: PageView.builder(
                  controller: _pageController,
                  onPageChanged: (idx) => setState(() => _currentPage = idx),
                  itemCount: _slides.length,
                  itemBuilder: (context, index) {
                    final slide = _slides[index];
                    return Padding(
                      padding: const EdgeInsets.all(24.0),
                      child: Container(
                        padding: const EdgeInsets.all(28),
                        decoration: BoxDecoration(
                          color: slide.cardColor,
                          borderRadius: BorderRadius.circular(36),
                          boxShadow: [
                            BoxShadow(
                              color: AppColors.primaryTeal.withOpacity(0.08),
                              blurRadius: 20,
                              offset: const Offset(0, 8),
                            ),
                          ],
                        ),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(slide.emoji, style: const TextStyle(fontSize: 72)),
                            const SizedBox(height: 20),
                            Text(
                              slide.title,
                              style: const TextStyle(
                                fontSize: 24,
                                fontWeight: FontWeight.bold,
                                color: AppColors.textDark,
                              ),
                              textAlign: TextAlign.center,
                            ),
                            const SizedBox(height: 6),
                            Text(
                              slide.subtitle,
                              style: const TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.bold,
                                color: AppColors.primaryTeal,
                              ),
                              textAlign: TextAlign.center,
                            ),
                            const SizedBox(height: 16),
                            Text(
                              slide.description,
                              style: const TextStyle(
                                fontSize: 14,
                                color: AppColors.textDark,
                                height: 1.5,
                              ),
                              textAlign: TextAlign.center,
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),

              // Bottom Indicator & Next Button
              Padding(
                padding: const EdgeInsets.all(24.0),
                child: Column(
                  children: [
                    // Dot Indicators
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: List.generate(_slides.length, (idx) {
                        return AnimatedContainer(
                          duration: const Duration(milliseconds: 250),
                          margin: const EdgeInsets.symmetric(horizontal: 4),
                          width: _currentPage == idx ? 24 : 8,
                          height: 8,
                          decoration: BoxDecoration(
                            color: _currentPage == idx ? AppColors.primaryTeal : Colors.grey.shade300,
                            borderRadius: BorderRadius.circular(4),
                          ),
                        );
                      }),
                    ),
                    const SizedBox(height: 20),

                    ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppColors.primaryTeal,
                        minimumSize: const Size(double.infinity, 56),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                      ),
                      onPressed: () {
                        if (_currentPage < _slides.length - 1) {
                          _pageController.nextPage(
                            duration: const Duration(milliseconds: 300),
                            curve: Curves.easeInOut,
                          );
                        } else {
                          _finishWalkthrough();
                        }
                      },
                      child: Text(
                        _currentPage == _slides.length - 1
                            ? (widget.isHelpMode ? 'Done 👍' : 'Get Started! 🚀')
                            : 'Next ➡️',
                        style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
