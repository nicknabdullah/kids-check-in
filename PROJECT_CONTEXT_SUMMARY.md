# Project Handoff

**Last reviewed:** 2026-10-06

This file is a concise engineering handoff. The [README](README.md) is the project introduction; the [blueprint](kids_islamic_good_deeds_app_mockup_prompt.md) is the product vision, not a claim that every requirement is shipped.

## Current status

| Area                                               | Status      | Notes                                                                                       |
| -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| Onboarding, child profiles, avatars, pattern locks | Implemented | Flutter screens and state actions are present.                                              |
| Nightly check-in and results                       | Implemented | Responses calculate points and record entries in app state.                                 |
| Parent, habit, and reward controls                 | Partial     | Core screens exist; state is not persisted.                                                 |
| Scratch rewards and learning screens               | Partial     | Screens and interactions exist; audio playback is incomplete.                               |
| Journey and reports                                | Partial     | Trend values and date details are demo data.                                                |
| Device persistence                                 | Planned     | `AppStateProvider` stores data in memory only.                                              |
| Voice feedback                                     | Partial     | Flutter shows a snackbar; web speech depends on browser voices. No audio clips are bundled. |

## Architecture

- `lib/` is the Flutter application.
- `lib/providers/app_state_provider.dart` owns in-memory app state.
- `lib/screens/` contains the main child, parent, check-in, rewards, journey, and learning flows.
- `lib/services/audio_service.dart` currently presents voice prompts as snackbars; it does not play audio files.
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

- [ ] Add local persistence for child profiles, settings, check-in history, and rewards.
- [ ] Implement Flutter audio playback and bundle or configure licensed voice recordings.
- [ ] Calculate journey summaries from recorded check-ins instead of demo values.
- [ ] Keep the web prototype aligned with Flutter flows where it is used for review.

### Recently completed

- [x] Reorganize the project docs, add current preview screenshots to the README, and clarify implementation status (2026-10-06).
