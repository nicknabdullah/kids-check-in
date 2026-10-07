import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_tts/flutter_tts.dart';
import 'package:provider/provider.dart';
import '../providers/app_state_provider.dart';

class AudioService {
  static final AudioService instance = AudioService._internal();

  AudioService._internal();

  final FlutterTts _tts = FlutterTts();
  String? _configuredLocale;
  Future<void>? _configuration;

  Future<void> _configureVoice(String locale) async {
    if (_configuredLocale == locale) {
      await _configuration;
      return;
    }
    final configuration = _configureVoiceOnce(locale);
    _configuration = configuration;
    await configuration;
    _configuredLocale = locale;
  }

  Future<void> _configureVoiceOnce(String locale) async {
    await _tts.awaitSpeakCompletion(true);
    await _tts.setLanguage(locale);
    await _tts.setSpeechRate(0.45);
    await _tts.setPitch(0.85);
    await _tts.setVolume(1.0);

    final supportsVoiceSelection = kIsWeb ||
        defaultTargetPlatform == TargetPlatform.android ||
        defaultTargetPlatform == TargetPlatform.iOS ||
        defaultTargetPlatform == TargetPlatform.macOS;
    if (!supportsVoiceSelection) return;

    final voices = await _tts.getVoices;
    if (voices is! List) return;

    final englishVoices = voices
        .whereType<Map>()
        .map((voice) => Map<String, dynamic>.from(voice))
        .where((voice) => (voice['locale'] as String? ?? '')
            .toLowerCase()
            .startsWith(locale.substring(0, 2).toLowerCase()))
        .toList();
    if (englishVoices.isEmpty || !locale.toLowerCase().startsWith('en')) {
      return;
    }

    Map<String, dynamic>? maleVoice;
    for (final voice in englishVoices) {
      if (_looksMale(voice)) {
        maleVoice = voice;
        break;
      }
    }
    if (maleVoice != null) {
      await _tts.setVoice({
        'name': maleVoice['name'] as String,
        'locale': maleVoice['locale'] as String,
      });
    }
  }

  bool _looksMale(Map<String, dynamic> voice) {
    final gender = (voice['gender'] as String? ?? '').toLowerCase();
    if (gender == 'male') return true;

    final name = (voice['name'] as String? ?? '').toLowerCase();
    return RegExp(r'(^|[^a-z])(male|man|david|daniel|alex|guy)([^a-z]|$)')
        .hasMatch(name);
  }

  Future<void> _speak(
    BuildContext context,
    String phrase, {
    String locale = 'en-US',
  }) async {
    if (!context.mounted) return;
    final appState = Provider.of<AppStateProvider>(context, listen: false);
    if (!appState.isSoundEnabled || phrase.trim().isEmpty) return;

    try {
      await _configureVoice(locale);
      await _tts.stop();
      final result = await _tts.speak(phrase);
      if (result != 1) {
        throw StateError('The device text-to-speech engine did not start.');
      }
    } catch (error, stackTrace) {
      FlutterError.reportError(FlutterErrorDetails(
        exception: error,
        stack: stackTrace,
        library: 'voice feedback',
        context: ErrorDescription('while speaking "$phrase"'),
      ));
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Voice playback is unavailable. Check the device speech settings.',
            ),
          ),
        );
      }
    }
  }

  Future<void> playMaleVoiceFeedback(BuildContext context, String phrase) =>
      _speak(context, phrase);

  Future<void> playMaleQariRecitation(
    BuildContext context,
    String title,
    String arabicText,
  ) {
    final text = arabicText.trim().isEmpty ? title : arabicText;
    final locale = arabicText.trim().isEmpty ? 'en-US' : 'ar-SA';
    return _speak(context, text, locale: locale);
  }

  Future<void> playSparkleSound(BuildContext context) =>
      _speak(context, 'MashaAllah!');

  Future<void> playVoiceFeedback(BuildContext context, String phrase) =>
      _speak(context, phrase);
}
