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

Before starting a task, record it under **Active work** and note the last verified checkpoint. Review the pending list before each change. When work is complete, remove it from **Active work** rather than keeping a completed-work archive. If work stops midway, leave the active task and checkpoint here.

### Active work

- No active work.

### Planned and pending work

- [ ] Record voice clips for remaining app interactions:
  - Qari recitations (male voice, Arabic surahs and transliterations)
  - Dua transliterations (male voice, three duas)
  - Phonics letters (28 Arabic letter names)
  - Dynamic accuracy feedback (variable percentages, optional)
- [ ] Continue aligning remaining web-preview flows with the Flutter app.
