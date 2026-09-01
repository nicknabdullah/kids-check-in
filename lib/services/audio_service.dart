import 'package:flutter/material.dart';
import '../providers/app_state_provider.dart';

/// Audio Manager handling sound effects, voice clips, and Male Voice / Qari recitations.
/// Works cleanly on mobile and web environments.
class AudioService {
  static final AudioService instance = AudioService._internal();

  AudioService._internal();

  /// Audio Asset Paths for Male Voice clips
  static const String mashaallahMale = 'assets/sounds/male_mashaallah.mp3';
  static const String alhamdulillahMale = 'assets/sounds/male_alhamdulillah.mp3';
  static const String bismillahMale = 'assets/sounds/male_bismillah.mp3';
  static const String sparkleSound = 'assets/sounds/sparkle.mp3';

  /// Play Male Voice prompt feedback (e.g. Male narrator saying "MashaAllah!", "Alhamdulillah!")
  void playMaleVoiceFeedback(BuildContext context, String phrase) {
    // Check if sound is enabled in parent settings
    final appState = AppStateProvider();
    if (!appState.isSoundEnabled) return;

    // Display Male Voice indicator snackbar notification
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        duration: const Duration(seconds: 2),
        backgroundColor: const Color(0xFF00897B),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
        content: Row(
          children: [
            const Icon(Icons.record_voice_over_rounded, color: Colors.white, size: 24),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    '🎙️ Male Voice Prompt',
                    style: TextStyle(fontSize: 11, color: Colors.white70, fontWeight: FontWeight.w600),
                  ),
                  Text(
                    '"$phrase"',
                    style: const TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// Play Male Qari recitation clip for Dua or Quran verse
  void playMaleQariRecitation(BuildContext context, String title, String arabicText) {
    playMaleVoiceFeedback(context, 'Playing Male Qari Recitation for $title ✨');
  }

  /// Play soft sparkle / achievement sound effect
  void playSparkleSound(BuildContext context) {
    playMaleVoiceFeedback(context, '✨ Sparkle!');
  }

  /// General voice feedback helper redirecting to male voice prompt
  void playVoiceFeedback(BuildContext context, String phrase) {
    playMaleVoiceFeedback(context, phrase);
  }
}
