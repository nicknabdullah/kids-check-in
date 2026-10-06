import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'providers/app_state_provider.dart';
import 'theme/app_theme.dart';
import 'widgets/custom_bottom_nav.dart';
import 'screens/home/child_home_screen.dart';
import 'screens/journey/monthly_journey_screen.dart';
import 'screens/leaderboard/family_leaderboard_screen.dart';
import 'screens/learn/learn_screen.dart';
import 'screens/parent/parent_auth_screen.dart';
import 'screens/parent/parent_dashboard_screen.dart';
import 'screens/parent/splash_walkthrough_screen.dart';

void main() {
  runApp(const KidsGoodDeedsApp());
}

/// Root Application Widget
class KidsGoodDeedsApp extends StatelessWidget {
  const KidsGoodDeedsApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AppStateProvider()),
      ],
      child: MaterialApp(
        title: 'Kids good deeds app',
        debugShowCheckedModeBanner: false,
        theme: AppTheme.lightTheme,
        home: Consumer<AppStateProvider>(
          builder: (context, appState, child) {
            if (appState.isFirstTimeLaunch) {
              return const SplashWalkthroughScreen();
            }
            return const MainNavigationWrapper();
          },
        ),
      ),
    );
  }
}

/// Wrapper providing Bottom Navigation persistent across main sections.
class MainNavigationWrapper extends StatefulWidget {
  const MainNavigationWrapper({Key? key}) : super(key: key);

  @override
  State<MainNavigationWrapper> createState() => _MainNavigationWrapperState();
}

class _MainNavigationWrapperState extends State<MainNavigationWrapper> {
  int _currentIndex = 0;

  void _onTabSelected(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);

    final List<Widget> pages = [
      ChildHomeScreen(onNavigateTab: _onTabSelected),
      const MonthlyJourneyScreen(),
      const FamilyLeaderboardScreen(),
      const LearnScreen(),
      appState.isParentAuthenticated ? const ParentDashboardScreen() : const ParentAuthScreen(),
    ];

    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: pages,
      ),
      bottomNavigationBar: CustomBottomNavBar(
        currentIndex: _currentIndex,
        onTap: _onTabSelected,
        isChildActive: appState.isParentAuthenticated,
      ),
    );
  }
}
