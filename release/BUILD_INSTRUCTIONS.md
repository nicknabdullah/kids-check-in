# 🚀 Kids Islamic Good-Deeds App — Release Folder

This folder contains the Android APK release artifact and instructions for building it.

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
cp build/app/outputs/flutter-apk/app-release.apk release/kids-good-deeds-app.apk
```

The output file will be saved in `release/kids-good-deeds-app.apk`.
