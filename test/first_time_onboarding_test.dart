import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_good_deeds_app/main.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('saving first-time setup opens the main app', (tester) async {
    SharedPreferences.setMockInitialValues({});

    await tester.pumpWidget(const KidsGoodDeedsApp());
    await tester.pumpAndSettle();

    await tester.tap(find.text('Skip ➡️'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Next step ➔'));
    await tester.pumpAndSettle();

    await tester.enterText(find.byType(TextField).first, 'Maryam');
    await tester.tap(find.text('Save & Start App! 🚀'));
    await tester.pumpAndSettle();

    expect(find.text('Step 2: Add your child'), findsNothing);
    expect(find.text('Maryam'), findsWidgets);
  });
}
