# 🌟 Kids Islamic good-deeds app — core specification and blueprint

A polished, modern, child-friendly mobile app for children roughly ages 4–10, focused on **daily good deeds, Islamic manners, positive habits, family interaction, and encouragement**.

The app is built as a **fun daily adventure**, rather than a school task, chore tracker, or punitive system.

> This is the product blueprint, not a release checklist. Requirements below describe the intended experience; the status snapshot distinguishes implemented flows from partial or planned work. See [README.md](README.md) for the short project overview and [PROJECT_CONTEXT_SUMMARY.md](PROJECT_CONTEXT_SUMMARY.md) for the engineering handoff.

## Implementation status snapshot

Reviewed 2026-10-06 against the Flutter source and interactive web preview.

| Area                                                        | Status      | Current implementation                                                                                                                                         |
| ----------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Onboarding, child profiles, faceless avatars, pattern locks | Implemented | Flutter screens and state actions are present.                                                                                                                 |
| Nightly check-in and daily results                          | Implemented | Scored answers, feedback, and result flow are present.                                                                                                         |
| Parent dashboard, habit and reward controls                 | Partial     | Main UI and editing flows exist; state is memory-only.                                                                                                         |
| Scratch rewards and learning screens                        | Partial     | Interactive screens exist; real audio playback is incomplete.                                                                                                  |
| Journey and reports                                         | Partial     | Trend chart and date details use demo values.                                                                                                                  |
| Device persistence                                          | Planned     | App state is not saved across process restarts.                                                                                                                |
| Voice feedback                                              | Partial     | Web preview uses browser speech synthesis and generated chimes; Flutter currently shows a snackbar instead of playing a recording. No audio clips are bundled. |

Treat the remaining sections as product requirements unless the implementation status above says otherwise.

## Core concept

Every night, the family gathers together for a short **“Today’s Good Deeds”** session.

The parent opens the app and goes through the child's customizable daily checklist.

### Good deeds

- Did you recite your morning dua?
- Did you eat your food properly?
- Did you listen to Mom?
- Did you listen to your sister/brother?
- Did you help someone?
- Did you give Salam?
- Did you pray on time?
- Did you say Bismillah before eating?
- Did you put your toys away?
- Did you speak kindly?
- Did you share something?
- Did you thank someone?

### Things to improve

- Did you fight with someone? → negative points
- Did you shout?
- Did you lie?
- Did you refuse to listen?
- Did you hurt someone's feelings?
- Did you waste food?

The parent taps a simple positive/negative response for each item.

The system calculates the child's daily score automatically.

**Important:** The experience should emphasize **encouragement and improvement**, not shame or punishment.

---

## Visual style

Create a visual identity that combines:

- Islamic geometric patterns
- Crescent moons
- Stars
- Clouds
- Lanterns
- Mosques/silhouettes
- Gardens
- Friendly animals
- Floating stars and sparkles
- Soft rounded cards
- Playful but clean typography
- Warm, cheerful colors
- Subtle gradients
- Large touch-friendly buttons
- Smooth animations

The overall aesthetic should feel like a combination of:

**modern children's educational app + Islamic children's book + light gamification**

Avoid making it look overly religious, old-fashioned, or like a mosque management application.

Do NOT use frightening imagery.

Do NOT use realistic human faces.

---

## Character and avatar system

Children have customizable faceless avatars (`AvatarCustomizerScreen`).

Avatar customization includes:

- Boy / girl selection
- 4 customizable skin tone swatches (Light, Warm Tan, Golden Olive, Deep Bronze)
- Hair color selections (Dark Brown, Jet Black, Soft Chocolate, Amber)
- Outfit color palettes (Emerald Teal, Royal Gold, Sapphire Blue, Coral Pink, Sunset Purple)
- Islamic headwear (Kufi prayer cap / Hijab hood & color picker)
- Accessories (Equipped / unequipped school & deeds backpack)

### Critical visual rule

**Human avatars must NOT have eyes, nose, or mouth.**

Use faceless vector characters adhering strictly to simple children's illustrations.

Animated objects should also NOT have faces.

For example, a star can sparkle, bounce, rotate, or glow, but should not have eyes or a mouth.

---

## Main navigation

Use a very simple bottom navigation suitable for children.

Suggested sections:

1. **Today**
2. **My Journey**
3. **Rewards**
4. **Learn**
5. **Parent**

The Learn section should exist in the UI architecture even if most learning features are marked **“Coming Soon”**.

This allows the application to grow later without redesigning the whole app.

---

## Screen 1 — child home / today

Create a beautiful home screen.

At the top:

**Assalamu Alaikum, [Child Name]!**

Show the child's avatar.

Display:

**Today's Adventure**

A large progress card:

⭐ **Today's Good Deeds**  
**7 / 10 completed**

Show a visual progress path rather than a boring percentage.

For example:

🌙 → ⭐ → 🕌 → 🌳 → 🏆

The child moves along the path as good deeds are completed.

Include encouraging messages such as:

- “MashaAllah!”
- “Good job!”
- “Excellent!”
- “You helped someone today!”
- “Keep going!”
- “One more good deed!”
- “Alhamdulillah!”

Use subtle animations such as stars appearing, cards bouncing slightly, sparkles, and progress movement.

No music.

Background ambient sounds and short voice feedback are allowed.

---

## Screen 2 — nightly family check-in

This is the most important screen.

Title:

**🌙 How Was Your Day?**

Subtitle:

**Let's remember the good things you did today!**

Show one large question at a time rather than displaying a huge checklist.

Example:

> Did you remember to say Bismillah before eating?

Large buttons:

✅ **Yes, Alhamdulillah!**

➖ **Not today**

The parent can optionally choose:

⭐ Great — full points  
🙂 Tried — partial points  
— Not today — zero points

For negative behavior:

> Did you fight with someone today?

Buttons:

🙂 **No**

😕 **Yes**

If yes, deduct the configured number of points.

Make the interaction playful and gentle.

After each answer, show a small animation.

For a positive answer:

✨ stars appear  
✨ progress moves forward  
✨ short voice says “MashaAllah!”

For a negative answer:

Use a calm animation.

Do NOT use red warning screens, angry faces, crying characters, or humiliating language.

Instead say:

**“It's okay. Tomorrow is another chance, InshaAllah.”**

---

## Customizable daily checklist

Parents can completely customize the list.

Each habit should support:

- Name
- Description
- Category
- Positive / negative
- Points
- Frequency
- Whether it is enabled
- Optional Islamic reference
- Optional reminder

Example:

**Give Salam**

+2 points

Category: Manners

---

**Help someone**

+3 points

Category: Kindness

---

**Fight**

-2 points

Category: Behavior

Parents can add, edit, delete, reorder, enable, or disable items.

---

## Screen 3 — daily results

After completing the nightly check-in, show a celebration screen.

Title:

**🌟 What a Day!**

Show:

**Mabrur earned 18 points today!**

Display the completed deeds as colorful cards.

Example:

⭐ Gave Salam +2  
🤝 Helped someone +3  
🍽 Ate properly +2  
❤️ Listened to Mom +2  
📖 Recited dua +3  
😔 Fighting -2

Then show:

### Today's total

**18 Points**

Include an encouraging message based on the result.

Examples:

**“MashaAllah! You did many good things today.”**

**“Alhamdulillah! Keep trying tomorrow.”**

Avoid making the child feel like their worth depends on their score.

---

## Screen 4 — family leaderboard

Allow multiple children.

Example:

## 🌟 Family stars

🥇 Maimun — 124 points  
🥈 Mabrur — 117 points  
🥉 Maryam — 101 points

Use fun podiums, trophies, stars, and avatars.

However, avoid making children who score lower feel like they failed.

Consider showing additional categories:

**Kindness Champion**  
**Helping Hero**  
**Good Manners Star**  
**Dua Champion**  
**Family Helper**

This allows different children to be recognized for different strengths.

Parents should be able to disable the competitive leaderboard completely if desired.

---

## Screen 5 — scratch card rewards

After reaching a reward threshold, the child receives a mystery reward.

Instead of immediately revealing it, show:

## 🎁 You earned a reward!

A large colorful scratch card.

Text:

**Scratch to discover your surprise!**

Underneath could be:

- 🏆 Trophy
- 🍫 Chocolate
- 🍦 Ice cream
- 🍭 Lollipop
- 🍗 Fried chicken
- 🤗 Hug from Mom/Dad
- 💋 Kiss from Mom/Dad
- 🎮 Extra play time
- 📖 Choose tonight's story
- 🌳 Family outing
- ⭐ Bonus points
- 🎨 Choose a family activity

Important:

Rewards must be completely customizable by parents.

Parents can:

- Add rewards
- Delete rewards
- Change reward names
- Set point requirements
- Set probabilities
- Set reward limits
- Enable/disable rewards
- Create special rewards

Example:

**100 points → Mystery Reward**

Possible rewards:

- Chocolate — 20%
- Ice cream — 15%
- Lollipop — 15%
- Hug — 20%
- Family outing — 5%
- Trophy — 1%

The reward system should be configurable without encouraging excessive food consumption.

---

## Screen 6 — monthly journey / calendar

Create a beautiful calendar view.

Title:

**📅 My Good-Deed Journey**

Each day shows:

- ⭐ Excellent day
- 🙂 Good day
- 🌱 Keep trying
- 🏆 Reward earned

Allow the child/parent to tap a date and see:

- Daily score
- Good deeds
- Things to improve
- Rewards earned
- Notes from parents

Also show monthly statistics:

**Total points:** 342  
**Good deeds:** 87  
**Rewards earned:** 6  
**Best day:** Friday, August 21

Use visual charts, stars, plants, or a journey path rather than business-style analytics.

---

## Screen 7 — parent dashboard

Create a separate parent area.

The parent dashboard should look more mature while still matching the app's visual identity.

### Children

- Add child
- Edit child
- Delete child
- Avatar customization
- Birthday/age
- Individual settings

### Daily habits

- Add habit
- Edit habit
- Delete habit
- Change points
- Positive/negative
- Reorder
- Enable/disable

### Rewards

- Add reward
- Edit reward
- Delete reward
- Point threshold
- Probability
- Limits

### Family

- Dad
- Mom
- Other authorized parent/guardian

### Reports

- Daily
- Weekly
- Monthly
- Individual child
- Family overview

### Settings

- Sound effects
- Voice feedback
- Animation intensity
- Language
- Notifications
- Privacy
- Security

---

## Splash walkthrough and help guide

The app includes a visual **5-Slide Onboarding Walkthrough** introducing parents and children to the app's core concepts:

1. **🌟 Welcome**: Positive Islamic habit building without shaming or punishment.
2. **🎨 Faceless Avatars**: Strict adherence to faceless visual rules with customizable clothing, caps/hijabs.
3. **🌙 Nightly Check-In**: Non-punitive card deck check-in flow with gentle encouragement.
4. **🎁 Rewards & Games**: Scratch-to-reveal surprise rewards, 80%+ accuracy Dua recitation hurdles, alphabet bubble pop, and sticker garden.
5. **👨‍👩‍👧 Parent Control & Pattern Locks**: 4-digit parent PIN protection and 3x3 secret pattern locks for children.

**Where Shown**:

- **First Launch**: Automatically presented before initial parent PIN and child setup.
- **Help Menu**: Accessible anytime from Parent Dashboard (`❓ App Guide & Walkthrough`) and Child Profile.

---

## First-time launch and parent onboarding

On initial launch (first time app is opened), the app MUST NOT pre-load hardcoded children.

Instead, the app opens directly into **First-Time Parent Setup**:

1. **Parent Security Setup**: Parent sets up their 4-digit PIN lock.
2. **Add Child / Children**: Parent adds their own child (Name, Age, Faceless Avatar customization).
3. **Finish & Launch Today Screen**: Once at least one child is created, the app unlocks the Child Home / Today screen for the family.

Parents can add, edit, or remove children anytime from the **Parent Dashboard -> Children Management**.

---

## Parent security

During first-time setup, allow parents to protect the parent dashboard using:

- PIN
- Pattern lock
- Fingerprint / biometric authentication
- Face authentication where supported

The app should explain that biometric authentication uses the device's built-in authentication system.

Allow parents to change their authentication method later.

Children should not be able to access parent settings accidentally.

---

## Screen 8 — child profile

Create a fun profile screen.

Show:

Large customizable avatar

**Maimun**

**Level 7**

⭐ 342 lifetime points

🏆 8 rewards

🌱 24 good habits

Then show achievements such as:

- 🏆 First Reward
- ⭐ 7-Day Streak
- 🤝 Helping Hero
- 🌙 Nightly Check-In Champion
- 🕌 Salah Star
- 💚 Kindness Champion

Achievements should be configurable and expandable later.

---

## Streak system

Add an optional streak system.

Example:

**🔥 5 Day Good-Deed Streak**

However, avoid punishing children for breaking streaks.

Instead of:

“Your streak is broken!”

Use:

**“Your new journey starts today! 🌱”**

Parents should be able to disable streaks.

---

## Islamic motivation

The app can occasionally provide short, age-appropriate Islamic reminders.

Examples:

**“Allah loves those who do good.”**

**“A kind word is a good deed.”**

**“Say Salam and spread peace.”**

Use Quran and authentic Hadith carefully.

Do not fabricate quotations.

For any Quran verse or Hadith displayed in the app, include the source/reference in the parent section.

The Islamic content should encourage:

- Salah
- Dua
- Dhikr
- Good manners
- Kindness
- Helping others
- Respecting parents
- Sharing
- Honesty
- Gratitude
- Patience
- Cleanliness

The app should communicate that good deeds are done **for Allah**, while points and rewards are simply a fun family mechanism.

---

## Future learning section

Design the architecture so the following can be added later:

### 📖 Learn

#### Quran

- Learn short surahs
- Listen
- Repeat
- Memorization progress

#### 🤲 Duas

- Daily duas
- Before eating
- After eating
- Before sleeping
- Morning/evening duas

#### 🧩 Games

- Islamic puzzles
- Matching games
- Memory games
- Sorting games

#### 🔤 Languages

English:

A B C

Arabic:

ا ب ت

Bangla:

অ আ ই

#### 🔢 Numbers

- English numbers
- Arabic numbers
- Bangla numbers

Initially show these features as:

**Coming Soon**

but make the navigation and visual architecture ready for them.

---

## Gamification system

Use a light progression system.

Possible structure:

**Points → Levels → Rewards → Achievements**

Example:

- Level 1: Little Helper
- Level 2: Kind Friend
- Level 3: Good Manners Star
- Level 4: Helping Hero
- Level 5: Family Champion

Parents should be able to customize level names and thresholds.

---

## Animation design

Use subtle, delightful animations.

Examples:

- Stars fly toward the score
- Progress path moves forward
- Trophy gently bounces
- Confetti after major achievements
- Scratch card reveals gradually
- Calendar stars twinkle
- Avatar gently waves
- Lanterns sway
- Clouds slowly move
- Islamic geometric patterns subtly animate

No object should have a face.

No eyes.

No mouths.

No talking animated animals with faces.

---

## Sound design

NO background music.

Allow:

- Soft ambient background sounds
- Light sparkle sounds
- Gentle reward sounds
- Page transition sounds
- Short voice feedback

Examples:

- **“MashaAllah!”**
- **“Alhamdulillah!”**
- **“Good job!”**
- **“Excellent!”**
- **“Keep going!”**

Parents can completely disable sounds.

---

## UX principles

The application should be:

- Extremely simple
- Fast
- Child-friendly
- Parent-controlled
- Visually exciting
- Not overwhelming
- Easy to understand without reading much
- Large touch targets
- Minimal text
- Strong visual feedback
- Accessible
- Calm rather than addictive

A child should be able to understand the main screen within a few seconds.

The parent dashboard can contain more advanced configuration.

---

## Important product philosophy

The app should NOT feel like:

❌ A punishment system  
❌ A school grading system  
❌ A productivity app  
❌ A calorie/food tracker  
❌ A surveillance app  
❌ A competition where the weakest child feels bad

It SHOULD feel like:

✅ A family nightly ritual  
✅ A good-deed adventure  
✅ A positive habit builder  
✅ A playful Islamic learning environment  
✅ A way for parents to encourage children  
✅ Something children look forward to every night

The central emotional loop should be:

**Do good → Remember it → Celebrate it → Improve tomorrow → Earn a surprise → Learn something**

---

## Primary mockup screens

Create a cohesive high-fidelity mobile UI mockup showing these screens together:

1. **Child Home / Today's Adventure**
2. **Nightly Good-Deed Check-In**
3. **Daily Results / Celebration**
4. **Family Leaderboard**
5. **Scratch Card Reward**
6. **Monthly Calendar / Journey**
7. **Parent Dashboard**
8. **Habit/Point Customization**
9. **Reward Customization**
10. **Child Avatar Customization**
11. **Child Profile / Achievements**
12. **Future Learn section**

Use the same design system, typography, avatar style, icons, colors, spacing, and visual language across all screens.

Make the final result look like a **real production-quality children's mobile application**, not a generic dashboard.

The design should be **vibrant, engaging, and delightfully interactive for kids, with full creative design freedom for maximum child engagement, interactive micro-animations, and visual-first controls simple enough for a 3-year-old child to use independently.**

### Key security and UX features

- **Parent PIN Gate**: Navigation bar shows only Home (`🌅`) and Parent Menu (`👨‍👩‍👧`) icons before parent PIN entry. Re-entering parent menu always prompts for PIN lock.
- **PIN Keypad Feedback**: Cleared initial input with animated button press highlights (`transform: scale(0.92)`) so users clearly see which digit is tapped.
- **2-Step Confirmation**: Both Parent PIN updates and Child Pattern creation require a 2-step confirmation step to ensure inputs match before saving.
- **Precision Pattern Alignment**: Math-exact center-to-center dot alignment for smooth drag-to-draw pattern connections.
- **Child Empowerment**: Children can customize their avatars and change secret pattern locks anytime right from their home screen.
