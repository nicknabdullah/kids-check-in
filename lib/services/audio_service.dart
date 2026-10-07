import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/app_state_provider.dart';

class AudioService {
  static final AudioService instance = AudioService._internal();

  AudioService._internal();

  final AudioPlayer _player = AudioPlayer();

  static const Map<String, String> _voiceClips = {
    'alhamdulillah you did a good deed':
        '[cheerfully] Alhamdulillah! You did a good deed!.mp3',
    'alhamdulillah': '[cheerfully] Alhamdulillah! You did a good deed!.mp3',
    'mashaa allah wonderful job':
        '[excited] Mashaa Allah! Wonderful job!.mp3',
    'mashaa allah': '[excited] Mashaa Allah! Wonderful job!.mp3',
    'mashaallah': '[excited] Mashaa Allah! Wonderful job!.mp3',
    'alhamdulillah you remembered your salah':
        '[warmly] Alhamdulillah! You remembered your Salah!.mp3',
    'mashaa allah you helped someone today':
        '[warmly] Mashaa Allah! You helped someone today!.mp3',
    'alhamdulillah you earned points for your kindness':
        '[cheerfully] Alhamdulillah! You earned points for.mp3',
    'mashaa allah keep doing your best':
        '[cheerfully] Mashaa Allah! Keep doing your best!.mp3',
    'alhamdulillah you made your family proud':
        '[warmly] Alhamdulillah! You made your family proud.mp3',
    'subhanallah that was so kind of you':
        '[excited] SubhanAllah! That was so kind of you!.mp3',
  };

  static String? assetForText(String phrase) {
    final normalized = phrase
        .toLowerCase()
        .replaceAll(RegExp(r'[^a-z0-9]+'), ' ')
        .trim();
    final filename = _voiceClips[normalized];
    return filename == null ? null : 'sounds/$filename';
  }

  Future<bool> playVoiceFeedback(
    BuildContext context,
    String phrase,
  ) async {
    if (!context.mounted || phrase.trim().isEmpty) return false;
    final appState = Provider.of<AppStateProvider>(context, listen: false);
    if (!appState.isSoundEnabled) return false;

    final assetPath = assetForText(phrase);
    if (assetPath == null) {
      debugPrint('No recorded voice clip is available for: "$phrase".');
      return false;
    }

    try {
      await _player.stop();
      await _player.play(AssetSource(assetPath));
      return true;
    } catch (error, stackTrace) {
      FlutterError.reportError(FlutterErrorDetails(
        exception: error,
        stack: stackTrace,
        library: 'voice feedback',
        context: ErrorDescription('while playing "$phrase"'),
      ));
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('The recorded voice clip could not be played.'),
          ),
        );
      }
      return false;
    }
  }

  Future<bool> playSparkleSound(BuildContext context) =>
      playVoiceFeedback(context, 'Mashaa Allah! Wonderful job!');
}
