# 🚀 Kids Islamic Good-Deeds App — Release Folder

This folder contains release artifacts and instructions for building the Android APK (`app-release.apk`) and iOS release package.

---

## 📱 How to Build Native Android APK (`.apk`)

On any computer with Flutter SDK & Android Studio / Java installed:

```bash
# 1. Navigate to the project root
cd /home/surface/dev/projects/kids-app

# 2. Install dependencies
flutter pub get

# 3. Build release APK
flutter build apk --release

# 4. Copy APK to release folder
cp build/app/outputs/flutter-apk/app-release.apk release/kids-good-deeds-v1.0.apk
```

The output file will be saved in `release/kids-good-deeds-v1.0.apk`.

---

## 🌐 Pre-Built Web Release Bundle Included

The `release/` folder also contains a standalone HTML5/JS compiled production release bundle (`index.html`, `assets/`) that can be hosted on any web server or opened directly in mobile browsers.
