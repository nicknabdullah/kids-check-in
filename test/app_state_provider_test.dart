import 'package:flutter_test/flutter_test.dart';
import 'package:kids_good_deeds_app/models/child_model.dart';
import 'package:kids_good_deeds_app/models/daily_entry_model.dart';
import 'package:kids_good_deeds_app/models/deed_model.dart';
import 'package:kids_good_deeds_app/models/reward_model.dart';
import 'package:kids_good_deeds_app/providers/app_state_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('restores profiles, settings, deeds, rewards and check-in history',
      () async {
    SharedPreferences.setMockInitialValues({});

    final provider = AppStateProvider();
    await provider.initialized;
    final child = ChildModel(
      id: 'child-1',
      name: 'Amina',
      age: 7,
      avatar: AvatarConfig(gender: 'girl', hasBackpack: false),
    );

    provider.completeFirstTimeSetup('2580', child);
    provider.setChildPatternLock(child.id, '1-2-5');
    provider.toggleLeaderboard(false);
    provider.toggleSound(false);
    provider.addDeed(DeedModel(
      id: 'custom-deed',
      title: 'Share',
      description: 'Did you share today?',
      category: 'Kindness',
      points: 2,
      islamicReference: 'Example reference',
    ));
    provider.addReward(RewardModel(
      id: 'custom-reward',
      title: 'Story time',
      iconEmoji: '📖',
      requiredPoints: 10,
      probability: 0.5,
      isUnlocked: true,
      isClaimed: true,
    ));
    provider.recordCheckInResult(child.id, [
      DeedCheckResult(
        deed: provider.deeds.first,
        response: ResponseType.great,
        pointsEarned: 3,
      ),
    ]);
    await provider.flushPersistence();

    final restored = AppStateProvider();
    await restored.initialized;

    expect(restored.isFirstTimeLaunch, isFalse);
    expect(restored.activeChild.name, 'Amina');
    expect(restored.activeChild.patternLock, '1-2-5');
    expect(restored.activeChild.avatar.gender, 'girl');
    expect(restored.activeChild.avatar.hasBackpack, isFalse);
    expect(restored.activeChild.currentPoints, 3);
    expect(restored.isLeaderboardEnabled, isFalse);
    expect(restored.isSoundEnabled, isFalse);
    expect(restored.verifyParentPin('2580'), isTrue);
    expect(restored.deeds.any((deed) => deed.id == 'custom-deed'), isTrue);
    expect(restored.deeds.last.islamicReference, 'Example reference');
    expect(restored.rewards.last.isClaimed, isTrue);
    expect(restored.dailyHistory.values.single.single.response,
        ResponseType.great);

    restored.resetAllData();
    await restored.flushPersistence();
    final resetProvider = AppStateProvider();
    await resetProvider.initialized;
    expect(resetProvider.isFirstTimeLaunch, isTrue);
    expect(resetProvider.isLeaderboardEnabled, isTrue);
    expect(resetProvider.isSoundEnabled, isTrue);
    expect(resetProvider.verifyParentPin('1234'), isTrue);
    expect(
      resetProvider.deeds.any((deed) => deed.id == 'custom-deed'),
      isFalse,
    );
    expect(
      resetProvider.rewards.any((reward) => reward.id == 'custom-reward'),
      isFalse,
    );
  });
}
