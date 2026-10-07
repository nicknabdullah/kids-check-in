import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:kids_good_deeds_app/models/child_model.dart';
import 'package:kids_good_deeds_app/models/daily_entry_model.dart';
import 'package:kids_good_deeds_app/providers/app_state_provider.dart';
import 'package:kids_good_deeds_app/screens/journey/monthly_journey_screen.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  testWidgets('shows saved monthly totals and actual date details',
      (tester) async {
    SharedPreferences.setMockInitialValues({});
    final appState = AppStateProvider();
    await appState.initialized;
    final child = ChildModel(
      id: 'child-1',
      name: 'Amina',
      age: 7,
      avatar: AvatarConfig(),
    );
    appState.completeFirstTimeSetup('2580', child);
    appState.recordCheckInResult(child.id, [
      DeedCheckResult(
        deed: appState.deeds.first,
        response: ResponseType.great,
        pointsEarned: 3,
      ),
    ]);

    await tester.pumpWidget(
      ChangeNotifierProvider.value(
        value: appState,
        child: const MaterialApp(
          home: Scaffold(body: MonthlyJourneyScreen()),
        ),
      ),
    );
    await tester.pumpAndSettle();

    expect(find.text('Points'), findsOneWidget);
    expect(find.text('Good deeds'), findsOneWidget);
    expect(find.text('Check-in days'), findsOneWidget);

    final pointsColumn = find
        .ancestor(of: find.text('Points'), matching: find.byType(Column))
        .first;
    expect(
      find.descendant(of: pointsColumn, matching: find.text('3')),
      findsOneWidget,
    );

    final todayCell = find.text('${DateTime.now().day}');
    await tester.ensureVisible(todayCell);
    await tester.tap(todayCell);
    await tester.pumpAndSettle();

    expect(find.text('Morning Dua'), findsOneWidget);
    expect(find.text('+3 pts ⭐'), findsOneWidget);
  });
}
