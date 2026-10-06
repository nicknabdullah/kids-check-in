# 📌 Project context summary and handoff guide

**Project:** Kids Islamic good-deeds app (Flutter)  
**Location:** `/home/surface/dev/projects/kids-check-in/`  
**Last Updated:** September 2026

---

## 🎯 Project overview and philosophy

A modern, delightful Flutter application for children aged 4–10 that gamifies daily good deeds, Islamic manners, and positive habits **without shaming or punishment**.

### Key principles:

1. **Kid-friendly visual avatar builder**: Designed so a 3-year-old child can customize their own avatar! Uses 5 visual category cards (Gender, Hair style, Hair color, Skin tone, Eye/glasses) that open sub-grids of clickable sample image cards!
2. **Touch-drag 3x3 line pattern lock**: Kids drag their finger continuously across 3x3 star dots to draw glowing connecting lines (just like phone pattern locks). Supports first-time pattern creation and parent resets.
3. **Parent PIN security and PIN changer**: Protected by 4-digit Parent PIN code (`1234`), with an option in settings to change the security PIN.
4. **Non-punitive UX & locked mystery scratch card**: Gifts are locked until check-in points are calculated! Missed habits show gentle prompts (_"Tomorrow is another chance, InshaAllah!"_).
5. **100% offline device storage**: All data, settings, scores, and audio clips run locally on device with zero internet dependency.

---

## 📱 Implemented features and code map

```text
lib/
├── main.dart                                   # First-time onboarding router & persistent bottom navigation
├── models/
│   ├── child_model.dart                    # Child profile & AvatarConfig model (11 boy styles, 12 girl styles, glasses styles)
│   ├── deed_model.dart                     # Habit checklist model with Islamic references
│   ├── reward_model.dart                   # Touch scratch reward model
│   ├── achievement_model.dart              # Badge achievement model
│   └── daily_entry_model.dart              # Daily check-in log summary
├── providers/
│   └── app_state_provider.dart             # Central state management (ChangeNotifier) with PIN updater
├── services/
│   └── audio_service.dart                  # Voice feedback clips (Male voice) & sound effects manager
├── theme/
│   ├── app_colors.dart                     # Warm, soft Islamic color palette
│   └── app_theme.dart                      # Fredoka typography & rounded material theme
├── widgets/
│   ├── faceless_avatar.dart                # CustomPainter head-only vector avatar portrait
│   ├── pattern_lock_widget.dart            # Continuous touch-drag 3x3 star pattern lock component
│   ├── islamic_pattern_background.dart    # 8-point geometric star background
│   ├── scratch_card_widget.dart            # Touch gesture scratch foil widget
│   └── custom_bottom_nav.dart            # Rounded floating navigation tab bar
└── screens/
    ├── home/
    │   └── child_home_screen.dart          # Today's adventure, sibling switcher & pattern unlock
    ├── profile/
    │   └── avatar_customizer_screen.dart   # 3-year-old kid-friendly visual category & sample grid builder
    └── parent/
        ├── parent_dashboard_screen.dart    # Parent dashboard, children grid view & PIN changer
        └── first_time_onboarding_screen.dart# Parent PIN setup & initial child profile creation
```

---

## 🛠️ How to resume and run the project

### 1. Interactive web preview (host / browser)

The dev server runs on port 3000:

```bash
cd /home/surface/dev/projects/kids-check-in/web_preview
npm run dev
# Access at: http://localhost:3000/
```

### 2. Flutter native command line execution

```bash
cd /home/surface/dev/projects/kids-check-in
flutter pub get
flutter run
# Or test on web browser:
flutter run -d chrome
```
