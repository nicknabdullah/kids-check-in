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
| Journey and reports                                | Partial     | Monthly summaries, weekly trends, and date details use child-scoped check-ins; the family leaderboard remains demo data. |
| Device persistence                                 | Implemented | Profiles, settings, deeds, rewards, active child, PIN, and child-scoped check-in history use SharedPreferences; version 1 history migrates to the active profile. PIN is stored unencrypted. |
| Voice feedback                                     | Partial     | Flutter uses device text-to-speech and prefers a male-sounding English voice when available; voice varies by device. |

## Architecture

- `lib/` is the Flutter application.
- `lib/providers/app_state_provider.dart` owns app state and restores/saves it with SharedPreferences; check-in history is scoped by child and existing version 1 history is migrated to the active profile.
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

- Calculate Journey summaries from recorded check-ins.
  - Checkpoint: child-scoped check-in history, version 1 migration, monthly totals, weekly trends, calendar details, and web-preview summaries are implemented. Focused Flutter tests and the Vite production build pass; the task is waiting for commit-message approval.
  - Resume after interruption: get approval for the proposed commit, commit and push the validated changes, then move this item to Recently completed.

### Planned and pending work

- [ ] Bundle real, child-friendly voice recordings for the app prompts. The generated Piper sample and TTSMaker audition were both rejected as too robotic; no audio files have been added.
- [ ] Continue aligning remaining web-preview flows with the Flutter app.

### Recently completed

- [x] Reorganize the project docs, add current preview screenshots to the README, and clarify implementation status (2026-10-06).
- [x] Persist profiles, settings, deeds, rewards, active child, parent PIN, and check-in history with SharedPreferences; verify restore and reset behavior (2026-10-06).
- [x] Add device text-to-speech voice feedback and a test-voice control; prefer an identifiable male English voice when available (2026-10-07).
- [x] Mirror the sound toggle and test-voice control in the web preview; verify settings persistence and browser feedback behavior (2026-10-07).
- [x] Handle browsers with no speech voices: wait for late-loaded voices and explain how to enable an English voice rather than reporting a generic playback failure (2026-10-07).
