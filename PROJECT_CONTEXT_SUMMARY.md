# Project Handoff

**Last reviewed:** 2026-10-07

This file is a concise engineering handoff. The [README](README.md) is the project introduction; the [blueprint](kids_islamic_good_deeds_app_mockup_prompt.md) is the product vision, not a claim that every requirement is shipped.

## Current status

| Area                                               | Status      | Notes                                                                                       |
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| Onboarding, child profiles, avatars, pattern locks | Implemented | Flutter screens and state actions are present.                                              |
| Nightly check-in and results                       | Implemented | Responses calculate points and record entries in app state.                                 |
| Parent, habit, and reward controls                 | Partial     | Core screens and persistent settings exist; some dashboard/report features remain limited. |
| Scratch rewards and learning screens               | Partial     | Interactive screens and device text-to-speech feedback exist; recorded audio is not bundled. |
| Journey and reports                                | Partial     | Trend values and date details are demo data.                                                |
| Device persistence                                 | Implemented | Profiles, settings, deeds, rewards, active child, PIN, and check-in history use SharedPreferences. PIN is stored unencrypted. |
| Voice feedback                                     | Partial     | Flutter uses device text-to-speech and prefers a male-sounding English voice when available; voice varies by device. |

## Architecture

- `lib/` is the Flutter application.
- `lib/providers/app_state_provider.dart` owns app state and restores/saves it with SharedPreferences.
- `lib/screens/` contains the main child, parent, check-in, rewards, journey, and learning flows.
- `lib/services/audio_service.dart` uses platform text-to-speech for voice prompts; it does not play bundled recordings.
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

- None.

### Planned and pending work

- [ ] Calculate journey summaries from recorded check-ins instead of demo values.
- [ ] Keep the web prototype aligned with Flutter flows where it is used for review.
- [ ] Bundle licensed voice recordings if consistent narration is needed across devices.

### Recently completed

- [x] Reorganize the project docs, add current preview screenshots to the README, and clarify implementation status (2026-10-06).
- [x] Persist profiles, settings, deeds, rewards, active child, parent PIN, and check-in history with SharedPreferences; verify restore and reset behavior (2026-10-06).
- [x] Add device text-to-speech voice feedback and a test-voice control; prefer an identifiable male English voice when available (2026-10-07).
