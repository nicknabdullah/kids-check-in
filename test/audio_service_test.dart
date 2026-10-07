import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_good_deeds_app/providers/app_state_provider.dart';
import 'package:kids_good_deeds_app/services/audio_service.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  const ttsChannel = MethodChannel('flutter_tts');

  testWidgets(
      'respects sound setting and speaks feedback with an available male voice',
      (tester) async {
    SharedPreferences.setMockInitialValues({});
    final appState = AppStateProvider();
    await appState.initialized;
    final calls = <MethodCall>[];
    final messenger =
        TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger;

    messenger.setMockMethodCallHandler(ttsChannel, (call) async {
      calls.add(call);
      if (call.method == 'getVoices') {
        return [
          {'name': 'English Female', 'locale': 'en-US', 'gender': 'female'},
          {'name': 'English Male', 'locale': 'en-US', 'gender': 'male'},
        ];
      }
      if (call.method == 'speak') return 1;
      return null;
    });
    addTearDown(() => messenger.setMockMethodCallHandler(ttsChannel, null));

    late BuildContext context;
    await tester.pumpWidget(
      ChangeNotifierProvider.value(
        value: appState,
        child: MaterialApp(
          home: Builder(
            builder: (buildContext) {
              context = buildContext;
              return const Scaffold(body: SizedBox.shrink());
            },
          ),
        ),
      ),
    );

    appState.toggleSound(false);
    await AudioService.instance.playMaleVoiceFeedback(context, 'MashaAllah!');
    expect(calls, isEmpty);

    appState.toggleSound(true);
    await AudioService.instance.playMaleVoiceFeedback(context, 'MashaAllah!');
    expect(calls.any((call) => call.method == 'setVoice'), isTrue);
    expect(
      calls.lastWhere((call) => call.method == 'speak').arguments,
      'MashaAllah!',
    );
  });
}
