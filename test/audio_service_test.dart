import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_good_deeds_app/models/deed_model.dart';
import 'package:kids_good_deeds_app/providers/app_state_provider.dart';
import 'package:kids_good_deeds_app/services/audio_service.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('maps recorded phrases to bundled audio assets', () {
    expect(
      AudioService.assetForText('Alhamdulillah! You did a good deed!'),
      'sounds/[cheerfully] Alhamdulillah! You did a good deed!.mp3',
    );
    expect(
      AudioService.assetForText('Mashaa Allah! Wonderful job!'),
      'sounds/[excited] Mashaa Allah! Wonderful job!.mp3',
    );
    expect(AudioService.assetForText('An unrecorded phrase'), isNull);
  });

  test('chooses task-specific feedback for check-in deeds', () {
    DeedModel deed(String title, String description) => DeedModel(
          id: title,
          title: title,
          description: description,
          category: 'Custom',
          points: 1,
        );

    expect(
      AudioService.feedbackForDeed(
        deed('Morning Dua', 'Did you recite your morning dua?'),
      ),
      'Alhamdulillah! You did a good deed!',
    );
    expect(
      AudioService.feedbackForDeed(
        deed('Give Salam', 'Did you greet family and friends?'),
      ),
      'SubhanAllah! That was so kind of you!',
    );
    expect(
      AudioService.feedbackForDeed(
        deed('Help Someone', 'Did you help your family today?'),
      ),
      'Mashaa Allah! You helped someone today!',
    );
    expect(
      AudioService.feedbackForDeed(
        deed('Pray On Time', 'Did you perform your prayers on time?'),
      ),
      'Alhamdulillah! You remembered your Salah!',
    );
    expect(
      AudioService.feedbackForDeed(
        deed('Listen to Parents', 'Did you listen respectfully?'),
      ),
      'Alhamdulillah! You made your family proud',
    );
    expect(
      AudioService.feedbackForDeed(
        deed('Share Toys', 'Did you share with your sibling?'),
      ),
      'Alhamdulillah! You earned points for your kindness!',
    );
  });

  testWidgets('does not play recorded audio when sound is disabled',
      (tester) async {
    SharedPreferences.setMockInitialValues({});
    final appState = AppStateProvider();
    await appState.initialized;
    appState.toggleSound(false);

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

    final played = await AudioService.instance
        .playVoiceFeedback(context, 'Mashaa Allah! Wonderful job!');
    expect(played, isFalse);
  });
}
