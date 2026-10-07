# Project Handoff

**Last reviewed:** 2026-10-07

This file is a concise engineering handoff. The [README](README.md) is the project introduction; the [blueprint](kids_islamic_good_deeds_app_mockup_prompt.md) is the product vision, not a claim that every requirement is shipped.

## Current status

| Area                                               | Status      | Notes                                                                                       |
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| Onboarding, child profiles, avatars, pattern locks | Implemented | Flutter screens and state actions are present.                                              |
| Nightly check-in and results                       | Implemented | Responses calculate points and record entries in app state.                                 |
| Parent, habit, and reward controls                 | Partial     | Core screens and persistent settings exist; some dashboard/report features remain limited. |
| Scratch rewards and learning screens               | Partial     | Interactive screens use bundled voice clips for selected feedback; some learning prompts still need recordings. |
| Journey and reports                                | Partial     | Monthly summaries, weekly trends, and date details use child-scoped check-ins; the family leaderboard remains demo data. |
| Device persistence                                 | Implemented | Profiles, settings, deeds, rewards, active child, PIN, and child-scoped check-in history use SharedPreferences; version 1 history migrates to the active profile. PIN is stored unencrypted. |
| Voice feedback                                     | Implemented | Eight supplied MP3 clips cover check-in feedback and selected learning prompts; Qari recitations, dua transliterations, phonics, and dynamic accuracy feedback still need recordings. |

## Architecture

- `lib/` is the Flutter application.
- `lib/providers/app_state_provider.dart` owns app state and restores/saves it with SharedPreferences; check-in history is scoped by child and existing version 1 history is migrated to the active profile.
- `lib/screens/` contains the main child, parent, check-in, rewards, journey, and learning flows.
- `lib/services/audio_service.dart` plays bundled voice clips for supported prompts; no text-to-speech engine is used.
- `web_preview/` is a separate Vite/JavaScript prototype with seeded sample data.
- `docs/screenshots/` contains screenshots captured from the web preview for the README.

## Run and verify

```bash
flutter pub get
flutter run
flutter test
npm --prefix web_preview install
npm --prefix web_preview run dev
```

## Work tracking

Before starting a task, record it under **Active work** and note the last verified checkpoint. Review the pending list before each change. After validation and commit, move the task to **Recently completed** and refresh the pending priorities. If work stops midway, leave the active task and checkpoint here.

### Active work

- [ ] Test Flutter build and playback with audioplayers integration; verify no compilation errors and sound mute behavior.
- [ ] Test web preview build with clip playback; verify `/sounds/` asset path resolution in Vite dev and production.
- [ ] Remove `flutter_tts` from `pubspec.yaml` and Android manifest after testing confirms no lingering references.

### Planned and pending work

- [ ] Record voice clips for remaining app interactions:
  - Qari recitations (male voice, Arabic surahs and transliterations)
  - Dua transliterations (male voice, three duas)
  - Phonics letters (28 Arabic letter names)
  - Dynamic accuracy feedback (variable percentages, optional)
- [ ] Continue aligning remaining web-preview flows with the Flutter app.

### Recently completed

- [x] Replace text-to-speech with eight user-supplied bundled voice clips across Flutter and web (2026-10-07).
  - Integrated audioplayers package into Flutter; rewrote audio_service.dart with clip lookup and playback.
  - Replaced browser speechSynthesis with HTML5 Audio element playback in web preview.
  - Unified clip mappings across platforms; disabled unrecorded interactions with "coming soon" UI or silent fallback.
  - Commit: refactor: replace text-to-speech with bundled voice clips across flutter and web
- [x] Calculate Journey monthly totals, weekly trends, and date details from child-scoped check-ins; migrate version 1 history and align web-preview summaries (2026-10-07).
- [x] Reorganize the project docs, add current preview screenshots to the README, and clarify implementation status (2026-10-06).
- [x] Persist profiles, settings, deeds, rewards, active child, parent PIN, and check-in history with SharedPreferences; verify restore and reset behavior (2026-10-06).
- [x] Add device text-to-speech voice feedback and a test-voice control; prefer an identifiable male English voice when available (2026-10-07).
- [x] Mirror the sound toggle and test-voice control in the web preview; verify settings persistence and browser feedback behavior (2026-10-07).
- [x] Handle browsers with no speech voices: wait for late-loaded voices and explain how to enable an English voice rather than reporting a generic playback failure (2026-10-07).
