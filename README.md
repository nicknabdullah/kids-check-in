# 🌟 Kids Islamic good-deeds app

A modern, child-friendly mobile app built with **Flutter** for children aged 4–10. Focused on daily good deeds, Islamic manners, positive habits, family bonding, interactive games, and gentle encouragement.

---

## ✨ Complete app features (current release)

### 1. 🎨 3-year-old friendly visual avatar customizer (`AvatarCustomizerScreen`)

- **Top visual category grid**: 5 large icon cards (Gender 👦👧, Hair style 💇‍♂️, Hair color 🎨, Skin tone 🖐️, Eye/glasses 👓).
- **Clickable image sample sub-grid**: Tapping any category displays a grid of visual sample cards (8 boy styles, 9 girl styles, 3 hair colors, 5 skin tones, 5 eye/glasses styles). Kids tap the sample image itself to update their avatar instantly!

### 2. 🔑 Touch-drag continuous line 3x3 pattern lock (`PatternLockWidget`)

- **Real phone pattern experience**: Kids drag their finger across the 3x3 star grid to draw smooth glowing connecting lines!
- **First-time pattern setup & reset**: First time a child logs in, it guides them to draw and save a secret pattern. Parents can reset child patterns anytime.
- **Sibling switcher security**: Switching profiles on the home screen requires drawing the child's secret pattern with celebratory audio feedback (_"Welcome back, Maryam! ✨"_).

### 3. 🔒 Parent PIN security and PIN changer

- **Parent PIN gate**: Default security code `1234` protects dashboard settings.
- **Change parent PIN**: Parents can update their 4-digit security PIN anytime in dashboard settings.

### 4. 📅 Interactive monthly calendar and line chart achievement graph (`MonthlyJourneyScreen`)

- **Achievement trend line chart**: Graph displays weekly point totals (`210`, `245`, `280`, `310`) using a smooth gradient line chart with glowing data points.
- **Clickable date grid (1–31)**: Tapping any date reveals that day's score earned, star rating, unlocked gift (ice cream, storytime, play time), and completed deed checklist.

### 5. 🌙 Nightly family check-in ritual

- **Single-card mission flow**: One habit question presented at a time with progress bar and animated card transitions — keeps focus fun and manageable for young children.
- **Chalkboard score widget**: A realistic blackboard-style score display with chalk-style font and animated delta popups showing points earned per answer.
- **Cheerful interactive feedback overlays**: Tapping choices triggers lively particle animations and audio prompts (balloons & ribbons with _"Alhamdulillah!"_ for Yes, glowing stars with _"MashaAllah!"_ for Tried, and a humorous droopy rose with gentle encouragement for Not today).
- **Non-punitive feedback**: Positive deeds earn points; missed habits trigger gentle prompts (_"Tomorrow is another chance, InshaAllah!"_) with zero red warning screens or shaming.

### 6. 🎁 Touch scratch card mystery rewards

- **Interactive scratch foil**: Kids drag their finger across gold foil to reveal surprise rewards (ice cream, bedtime story, hugs, play time).
- **Parent reward editor**: Custom point thresholds and probability weightings.

### 7. 📖 Short Quran surahs module (male Qari recitation)

- **Short Juz Amma surahs**: Surah Al-Fatiha, Surah Al-Ikhlas, Surah Al-Falaq, Surah An-Nas, Surah Al-Kawtar.
- **Male Qari recitation**: Interactive player with male Qari voice recitations for every verse.
- **Verse-by-verse cards**: Large Arabic Naskh script, English transliteration, and translation.
- **Repeat & memorize**: `🔁 Loop verse` memorization tool + `⭐ Mark as memorized` button (awards +20 stars).

### 8. 🤲 Dua recitation hurdle quest

- **Sequential hurdle map**: Step-by-step hurdle path through regular daily Duas (eating, sleeping, parents, home).
- **Pronunciation audio practice**: `🎧 Listen & practice` button plays authentic audio preview.
- **Speech recitation analyzer (≥ 80% threshold)**: Kids tap `🎤 Recite Dua now`. Evaluates recitation accuracy; scoring ≥ 80% leaps over the hurdle with star explosions and sound feedback!

### 9. 🎈 Arabic alphabet bubble pop game

- **Interactive phonics**: Floating letter bubbles (`ا`, `ب`, `ت`, `ث`) drift upward. Kids listen to the sound prompt and pop the correct letter bubble!

### 10. 🌸 Good-deed sticker book and garden

- **2D garden canvas**: Kids collect Islamic stickers (Mosque domes, Palm trees, Crescent moons, Camels, Water wells) and drag/place them to design their own garden.

### 11. 🔊 Male voice audio service (`AudioService`)

- Enforces **male voice / male Qari** audio recitations, voice prompts (_"MashaAllah!"_, _"Alhamdulillah!"_), and sparkle sound effects. Integrated with parent settings toggle.

### 12. 🔌 100% offline local device persistence

- **Zero cloud server required**: Works entirely offline. All child profiles, check-in history, points, and settings are saved locally on device disk.

### 13. 👨‍👩‍👧 Parent control dashboard

- **Habit editor**: Add, edit, reorder, or adjust point values for daily checklist.
- **Children management**: Add siblings, edit profiles, or clear pattern locks.
- **Leaderboard toggle**: Option to enable or disable competitive sibling rankings.

---

## 📁 Clean code architecture

```text
kids-check-in/
├── README.md                                   # Comprehensive feature overview
├── kids_islamic_good_deeds_app_mockup_prompt.md # Core specification & blueprint
├── pubspec.yaml                                # Dependencies & configuration
├── release/                                    # Pre-built release artifacts & APK
│   ├── index.html
│   ├── BUILD_INSTRUCTIONS.md
│   └── kids-good-deeds-app.apk
├── web_preview/                                # Live interactive web preview (Port 3000)
└── lib/
    ├── main.dart                               # Entry point & first-time launch router
    ├── models/
    │   ├── child_model.dart                    # Child profile with PatternLock support
    │   ├── deed_model.dart                     # Habit checklist model
    │   ├── reward_model.dart                   # Scratch reward model
    │   ├── achievement_model.dart              # Badge model
    │   └── daily_entry_model.dart              # Check-in log summary
    ├── providers/
    │   └── app_state_provider.dart             # Central state management (ChangeNotifier)
    ├── services/
    │   └── audio_service.dart                  # Voice feedback & sound effects manager
    ├── theme/
    │   ├── app_colors.dart                     # Soft Islamic color palette
    │   └── app_theme.dart                      # Fredoka typography & material theme
    ├── widgets/
    │   ├── faceless_avatar.dart                # CustomPainter vector faceless avatar
    │   ├── islamic_pattern_background.dart    # Geometric 8-point star background
    │   ├── pattern_lock_widget.dart            # Interactive 3x3 star pattern lock
    │   ├── progress_path_widget.dart           # Step-by-step adventure trail
    │   ├── scratch_card_widget.dart            # Touch gesture scratch foil
    │   ├── deed_card.dart                    # Habit card item
    │   └── custom_bottom_nav.dart            # Floating tab navigation bar
    └── screens/
        ├── home/                               # Today's adventure & sibling switcher
        ├── check_in/                           # Nightly check-in & results summary
        ├── leaderboard/                        # Family podium & special strengths
        ├── rewards/                            # Scratch card reveal screen
        ├── journey/                            # Monthly calendar history & stats
        ├── profile/                            # Child profile & faceless builder
        ├── learn/
        │   ├── learn_screen.dart               # Learn & play hub
        │   ├── dua_hurdle_game_screen.dart      # Dua recitation hurdle quest
        │   ├── alphabet_bubble_game_screen.dart # Arabic bubble pop game
        │   └── sticker_garden_screen.dart       # Good-deed sticker garden
        └── parent/
            ├── splash_walkthrough_screen.dart  # 5-Slide splash & help tour
            ├── first_time_onboarding_screen.dart# Parent PIN & initial child setup
            ├── parent_auth_screen.dart         # Security PIN gate
            ├── parent_dashboard_screen.dart    # Parent controls & children manager
            ├── habit_customization_screen.dart # Habit editor
            └── reward_customization_screen.dart# Reward rate editor
```

---

## 🚀 Running and building the app

### 1. Run Flutter native app (device / emulator / web)

```bash
flutter pub get
flutter run
# Or run on Chrome browser:
flutter run -d chrome
```

### 2. Build Android APK

```bash
flutter build apk --release
# Output: build/app/outputs/flutter-apk/app-release.apk
# Ready-to-install APK copied to: release/kids-good-deeds-app.apk
```

### 3. Run live interactive web preview

```bash
cd web_preview
npm run dev
# Live at: http://localhost:3000/
```
