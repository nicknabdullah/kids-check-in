# 🌟 Kids Islamic Good-Deeds App

A modern, child-friendly mobile app built with **Flutter** for children aged 4–10. Focused on daily good deeds, Islamic manners, positive habits, family bonding, interactive games, and gentle encouragement.

---

## ✨ Complete App Features (Current Release)

### 1. 🎨 3-Year-Old Friendly Visual Avatar Customizer (`AvatarCustomizerScreen`)
- **Top Visual Category Grid**: 5 large icon cards (Gender 👦👧, Hair Style 💇‍♂️, Hair Color 🎨, Skin Tone 🖐️, Eye/Glasses 👓).
- **Clickable Image Sample Sub-Grid**: Tapping any category displays a grid of visual sample cards (5 hair styles, 5 hair colors, 5 skin tones, 5 eye/glasses styles). Kids tap the sample image itself to update their avatar instantly!

### 2. 🔑 Touch-Drag Continuous Line 3x3 Pattern Lock (`PatternLockWidget`)
- **Real Phone Pattern Experience**: Kids drag their finger across the 3x3 star grid to draw smooth glowing connecting lines!
- **First-Time Pattern Setup & Reset**: First time a child logs in, it guides them to draw and save a secret pattern. Parents can reset child patterns anytime.

### 3. 🔒 Parent PIN Security & PIN Changer
- **Parent PIN Gate**: Default security code `1234` protects dashboard settings.
- **Change Parent PIN**: Parents can update their 4-digit security PIN anytime in dashboard settings.

### 4. 📅 Interactive Monthly Calendar & Line Chart Achievement Graph (`MonthlyJourneyScreen`)
- **Achievement Trend Line Chart**: Graph displays weekly point totals (`210`, `245`, `280`, `310`) using a smooth gradient Line Chart with glowing data points.
- **Clickable Date Grid (1–31)**: Tapping any date reveals that day's score earned, star rating, unlocked gift (ice cream, storytime, play time), and completed deed checklist.

### 4. 🔑 Child 3x3 Star Pattern Lock System (`PatternLockWidget`)
- **Secret Child Locks**: Kids connect 3 or more glowing stars (`⭐`) on an interactive 3x3 grid to set a secret pattern lock.
- **Sibling Switcher Security**: Switching profiles on the home screen requires drawing the child's secret pattern with celebratory audio feedback (*"Welcome back, Maryam! ✨"*).

### 5. 🌙 Nightly Family Check-In Ritual
- **Guided Card Deck**: One question at a time for daily prayers, manners, and kindness.
- **Non-Punitive Feedback**: Positive deeds earn points; missed habits trigger gentle prompts (*"Tomorrow is another chance, InshaAllah!"*) with zero red warning screens or shaming.

### 6. 🎁 Touch Scratch Card Mystery Rewards
- **Interactive Scratch Foil**: Kids drag their finger across gold foil to reveal surprise rewards (ice cream, bedtime story, hugs, play time).
- **Parent Reward Editor**: Custom point thresholds and probability weightings.

### 7. 📖 Short Quran Surahs Module (Male Qari Recitation)
- **Short Juz Amma Surahs**: Surah Al-Fatiha, Surah Al-Ikhlas, Surah Al-Falaq, Surah An-Nas, Surah Al-Kawtar.
- **Male Qari Recitation**: Interactive player with male Qari voice recitations for every verse.
- **Verse-by-Verse Cards**: Large Arabic Naskh script, English transliteration, and translation.
- **Repeat & Memorize**: `🔁 Loop Verse` memorization tool + `⭐ Mark as Memorized` button (awards +20 stars).

### 8. 🤲 Dua Recitation Hurdle Quest
- **Sequential Hurdle Map**: Step-by-step hurdle path through regular daily Duas (eating, sleeping, parents, home).
- **Pronunciation Audio Practice**: `🎧 Listen & Practice` button plays authentic audio preview.
- **Speech Recitation Analyzer (≥ 80% Threshold)**: Kids tap `🎤 Recite Dua Now`. Evaluates recitation accuracy; scoring ≥ 80% leaps over the hurdle with star explosions and sound feedback!

### 9. 🎈 Arabic Alphabet Bubble Pop Game
- **Interactive Phonics**: Floating letter bubbles (`ا`, `ب`, `ت`, `ث`) drift upward. Kids listen to the sound prompt and pop the correct letter bubble!

### 10. 🌸 Good-Deed Sticker Book & Garden
- **2D Garden Canvas**: Kids collect Islamic stickers (Mosque domes, Palm trees, Crescent moons, Camels, Water wells) and drag/place them to design their own garden.

### 11. 🔊 Male Voice Audio Service (`AudioService`)
- Enforces **Male Voice / Male Qari** audio recitations, voice prompts (*"MashaAllah!"*, *"Alhamdulillah!"*), and sparkle sound effects. Integrated with parent settings toggle.

### 11. 🔌 100% Offline Local Device Persistence
- **Zero Cloud Server Required**: Works entirely offline. All child profiles, check-in history, points, and settings are saved locally on device disk.

### 12. 👨‍👩‍👧 Parent Control Dashboard
- **Habit Editor**: Add, edit, reorder, or adjust point values for daily checklist.
- **Children Management**: Add siblings, edit profiles, or clear pattern locks.
- **Leaderboard Toggle**: Option to enable or disable competitive sibling rankings.

---

## 📁 Clean Code Architecture

```text
kids-app/
├── README.md                                   # Comprehensive feature overview
├── kids_islamic_good_deeds_app_mockup_prompt.md # Core specification & blueprint
├── pubspec.yaml                                # Dependencies & configuration
├── release/                                    # Pre-built web release & APK guide
│   ├── index.html
│   └── BUILD_INSTRUCTIONS.md
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
        ├── home/                               # Today's Adventure & Sibling Switcher
        ├── check_in/                           # Nightly Check-In & Results Summary
        ├── leaderboard/                        # Family Podium & Special Strengths
        ├── rewards/                            # Scratch Card Reveal Screen
        ├── journey/                            # Monthly Calendar History & Stats
        ├── profile/                            # Child Profile & Faceless Builder
        ├── learn/
        │   ├── learn_screen.dart               # Learn & Play Hub
        │   ├── dua_hurdle_game_screen.dart      # Dua Recitation Hurdle Quest
        │   ├── alphabet_bubble_game_screen.dart # Arabic Bubble Pop Game
        │   └── sticker_garden_screen.dart       # Good-Deed Sticker Garden
        └── parent/
            ├── splash_walkthrough_screen.dart  # 5-Slide Splash & Help Tour
            ├── first_time_onboarding_screen.dart# Parent PIN & Initial Child Setup
            ├── parent_auth_screen.dart         # Security PIN Gate
            ├── parent_dashboard_screen.dart    # Parent Controls & Children Manager
            ├── habit_customization_screen.dart # Habit Editor
            └── reward_customization_screen.dart# Reward Rate Editor
```

---

## 🚀 Running & Building the App

### 1. Run Flutter Native App (Device / Emulator / Web)
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
```

### 3. Run Live Interactive Web Preview
```bash
cd web_preview
npm run dev
# Live at: http://localhost:3000/
```
