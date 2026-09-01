// Web Interactive Prototype for Kids Islamic Good-Deeds App

let activeTab = 'today';
let calendarViewYear = 2026;
let calendarViewMonth = 8; // 8 = September (0-indexed: 0=Jan, 8=Sept)
let selectedDateDetails = null;
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let childrenList = [
  {
    id: '1',
    name: 'Ahmad',
    level: 1,
    points: 120,
    streak: 5,
    title: 'Good deeds explorer 🌟',
    gender: 'boy',
    skinTone: '#f5d0a0',
    hairColor: '#0e0e0e',
    hairStyleIndex: 1,
    eyeGlassesIndex: 1,
    outfitColor: '#00897b',
    headwearColor: '#ffb300',
    hasHeadwear: true,
    patternLock: null, // NO default pattern set, so kid creates pattern on first tap!
    claimedRewards: [
      { emoji: '🍦', title: 'Delicious Ice Cream' },
      { emoji: '📖', title: 'Choose Bedtime Story' }
    ],
    checkInHistory: {
      '2026-08-05': { completed: true, score: 16, reward: { emoji: '🍦', title: 'Delicious Ice Cream' }, details: ['Morning Dua recited 🤲', 'Prayed Salah on time 🕌', 'Helped clean up toys 🧸'] },
      '2026-08-10': { completed: true, score: 18, reward: { emoji: '📖', title: 'Choose Bedtime Story' }, details: ['Said Bismillah before eating 🍽️', 'Gave Salam to family 💬', 'Listened to Mom ❤️'] },
      '2026-08-15': { completed: true, score: 20, reward: { emoji: '🤗', title: 'Big Warm Bear Hug' }, details: ['Prayed Salah on time 🕌', 'Shared toys with sibling 🤝', 'Recited morning dua 🤲'] },
      '2026-08-20': { completed: true, score: 15, reward: { emoji: '🎮', title: 'Extra Play Time' }, details: ['Put toys away 🧸', 'Gave Salam 💬', 'Listened to parents ❤️'] },
      '2026-08-25': { completed: true, score: 22, reward: { emoji: '🌳', title: 'Family Outing' }, details: ['Prayed on time 🕌', 'Morning dua 🤲', 'Helped clean room 🤝'] },
      '2026-08-30': { completed: true, score: 19, reward: { emoji: '🍦', title: 'Delicious Ice Cream' }, details: ['Bismillah before eating 🍽️', 'Gave Salam 💬', 'Listened to Mom ❤️'] }
    }
  },
  {
    id: '2',
    name: 'Maryam',
    level: 2,
    points: 210,
    streak: 8,
    title: 'Kindness champion 🌸',
    gender: 'girl',
    skinTone: '#e0ac69',
    hairColor: '#4a2e1b',
    hairStyleIndex: 2,
    eyeGlassesIndex: 1,
    outfitColor: '#e91e63',
    headwearColor: '#81c784',
    hasHeadwear: true,
    patternLock: null, // NO default pattern set, so kid creates pattern on first tap!
    claimedRewards: [
      { emoji: '🤗', title: 'Big Warm Bear Hug' },
      { emoji: '🌳', title: 'Family Outing' }
    ],
    checkInHistory: {
      '2026-08-04': { completed: true, score: 18, reward: { emoji: '🤗', title: 'Big Warm Bear Hug' }, details: ['Gave Salam to family 💬', 'Prayed Salah on time 🕌', 'Helped clean up 🧸'] },
      '2026-08-12': { completed: true, score: 21, reward: { emoji: '🌳', title: 'Family Outing' }, details: ['Morning Dua 🤲', 'Helped someone 🤝', 'Shared toys 🧸'] },
      '2026-08-18': { completed: true, score: 19, reward: { emoji: '📖', title: 'Choose Bedtime Story' }, details: ['Bismillah before eating 🍽️', 'Prayed on time 🕌', 'Spoke kindly ❤️'] },
      '2026-08-28': { completed: true, score: 24, reward: { emoji: '🍦', title: 'Delicious Ice Cream' }, details: ['Recited morning dua 🤲', 'Listened respectfully ❤️', 'Helped clean 🧸'] }
    }
  }
];

let activeChildIndex = -1; // -1 means initial entry gate
let isParentPinUnlocked = false;
let parentPinCode = '1234';
let enteredPinText = '';
let activePressedPinKey = null;

let patternDrawn = [];
let patternFirstStep = null;
let isPatternConfirming = false;
let isDraggingPattern = false;

// Check-In State
let isCheckingIn = false;
let isShowingResults = false;
let currentCardIndex = 0;
let checkInPointsEarned = 0;
let checkInResults = [];

const deedsList = [
  { emoji: '🤲', text: 'Did you recite your morning dua?',       points: 3, positive: true,  isEnabled: true },
  { emoji: '🍽️', text: 'Did you say Bismillah before eating?',   points: 2, positive: true,  isEnabled: true },
  { emoji: '💬', text: 'Did you give Salam to family?',          points: 2, positive: true,  isEnabled: true },
  { emoji: '🤝', text: 'Did you help someone today?',            points: 3, positive: true,  isEnabled: true },
  { emoji: '🕌', text: 'Did you pray Salah on time?',            points: 4, positive: true,  isEnabled: true },
  { emoji: '❤️', text: 'Did you listen respectfully to parents?',points: 3, positive: true,  isEnabled: true },
  { emoji: '🧸', text: 'Did you put your toys away?',            points: 2, positive: true,  isEnabled: true },
  { emoji: '🕊️', text: 'Did you fight or argue with anyone?',   points: 2, positive: false, isEnabled: true },
];

let rewardsList = [
  { emoji: '🍦', title: 'Delicious Ice Cream',      requiredPoints: 50, probability: 0.25 },
  { emoji: '📖', title: 'Choose Bedtime Story',     requiredPoints: 40, probability: 0.30 },
  { emoji: '🤗', title: 'Big Warm Bear Hug',        requiredPoints: 30, probability: 0.35 },
  { emoji: '🎮', title: 'Extra Play Time',          requiredPoints: 60, probability: 0.15 },
  { emoji: '🌳', title: 'Family Outing',            requiredPoints: 100, probability: 0.05 },
];

// Kid Avatar Builder Active State
let activeCategory = 'hairStyle'; // 'gender', 'hairStyle', 'hairColor', 'skinTone', 'eyeGlasses'
let tempAvatarConfig = {
  gender: 'boy',
  skinTone: '#f5d0a0',
  hairColor: '#0e0e0e',
  hairStyleIndex: 1,
  eyeGlassesIndex: 1,
  headwearColor: '#ffb300',
  hasHeadwear: true,
};

const skinTonesList = [
  { color: '#f5d0a0', name: 'Fair' },
  { color: '#e0ac69', name: 'Tan' },
  { color: '#c68642', name: 'Olive' },
  { color: '#8d5524', name: 'Bronze' },
  { color: '#5c3317', name: 'Mahogany' }
];

const hairColorsList = [
  { color: '#0e0e0e', name: 'Black' },
  { color: '#4a2e1b', name: 'Brown' },
  { color: '#d4a359', name: 'Blonde' }
];

const maleHairStyles = [
  { index: 1, label: 'Short Crop 💇‍♂️', emoji: '👦' },
  { index: 2, label: 'Curly Top 🦱', emoji: '🦱' },
  { index: 3, label: 'Spiky Cut 🧑', emoji: '🧑' },
  { index: 4, label: 'Buzz Cut 💈', emoji: '💈' },
  { index: 5, label: 'Side Part 👦', emoji: '👨' }
];

const femaleHairStyles = [
  { index: 1, label: 'Emerald Hijab 🧕', emoji: '🧕' },
  { index: 2, label: 'Rose Hijab 🌸', emoji: '🌸' },
  { index: 3, label: 'Crown Hijab 👑', emoji: '👑' },
  { index: 4, label: 'Twin Tails 👧', emoji: '👧' },
  { index: 5, label: 'Bob Cut 💇‍♀️', emoji: '💇‍♀️' }
];

const eyeGlassesList = [
  { index: 1, label: 'Clean 🌟', emoji: '✨' },
  { index: 2, label: 'Round 👓', emoji: '👓' },
  { index: 3, label: 'Square 🤓', emoji: '🤓' },
  { index: 4, label: 'Shades 🕶️', emoji: '🕶️' },
  { index: 5, label: 'Star ⭐', emoji: '⭐' }
];

// SPEECH SYNTHESIS VOICE OVER FEEDBACK
function speakGreeting(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.2;
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
}

// Faceless HEAD ONLY Vector SVG Renderer (Fixed Female Hijab - NO BEARD GLITCH!)
function renderFacelessHeadSVG(gender = 'boy', skinTone = '#f5d0a0', hairColor = '#0e0e0e', hairStyleIndex = 1, eyeGlassesIndex = 1, headwearColor = '#ffb300', hasHeadwear = true) {
  const outfitColor = (gender === 'girl') ? '#e91e63' : '#00897b';

  let headContent = '';

  if (gender === 'girl') {
    if (hasHeadwear || hairStyleIndex <= 3) {
      const hijabColor = hairStyleIndex === 2 ? '#ec407a' : (hairStyleIndex === 3 ? '#ffb300' : '#4db6ac');

      headContent = `
        <circle cx="50" cy="48" r="34" fill="${hijabColor}" />
        <ellipse cx="50" cy="50" rx="22" ry="26" fill="${skinTone}" />
        <path d="M 28 42 C 35 22 65 22 72 42 C 60 28 40 28 28 42 Z" fill="${hijabColor}" />
      `;
    } else if (hairStyleIndex === 4) {
      headContent = `
        <circle cx="22" cy="48" r="14" fill="${hairColor}" />
        <circle cx="78" cy="48" r="14" fill="${hairColor}" />
        <circle cx="50" cy="48" r="26" fill="${skinTone}" />
        <circle cx="21" cy="50" r="5" fill="${skinTone}" />
        <circle cx="79" cy="50" r="5" fill="${skinTone}" />
        <path d="M 24 44 C 35 24 65 24 76 44 C 60 32 40 32 24 44 Z" fill="${hairColor}" />
      `;
    } else {
      headContent = `
        <circle cx="50" cy="46" r="30" fill="${hairColor}" />
        <circle cx="50" cy="48" r="26" fill="${skinTone}" />
      `;
    }
  } else {
    let maleHair = '';
    switch (hairStyleIndex) {
      case 2:
        maleHair = `<circle cx="28" cy="25" r="9" fill="${hairColor}" />
                    <circle cx="39" cy="23" r="9" fill="${hairColor}" />
                    <circle cx="50" cy="21" r="9" fill="${hairColor}" />
                    <circle cx="61" cy="23" r="9" fill="${hairColor}" />
                    <circle cx="72" cy="25" r="9" fill="${hairColor}" />`;
        break;
      case 3:
        maleHair = `<path d="M 22 44 L 30 18 L 40 30 L 50 16 L 60 30 L 70 18 L 78 44 Z" fill="${hairColor}" />`;
        break;
      case 4:
        maleHair = `<path d="M 22 46 A 28 28 0 0 1 78 46 Z" fill="${hairColor}" />`;
        break;
      case 5:
        maleHair = `<path d="M 22 44 C 30 18 70 22 78 44 Z" fill="${hairColor}" />`;
        break;
      case 1:
      default:
        maleHair = `<path d="M 22 45 A 28 28 0 0 1 78 45 Z" fill="${hairColor}" />`;
        break;
    }

    headContent = `
      <circle cx="21" cy="50" r="5" fill="${skinTone}" />
      <circle cx="79" cy="50" r="5" fill="${skinTone}" />
      <circle cx="50" cy="48" r="27" fill="${skinTone}" />
      ${maleHair}
    `;
  }

  let glassesSVG = '';
  switch (eyeGlassesIndex) {
    case 2:
      glassesSVG = `<circle cx="38" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <circle cx="62" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;
      break;
    case 3:
      glassesSVG = `<rect x="30" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <rect x="54" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;
      break;
    case 4:
      glassesSVG = `<rect x="28" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <rect x="53" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <line x1="47" y1="45" x2="53" y2="45" stroke="#212121" stroke-width="3" />`;
      break;
    case 5:
      glassesSVG = `<circle cx="38" cy="48" r="9" fill="#ffb300" />
                    <circle cx="62" cy="48" r="9" fill="#ffb300" />`;
      break;
  }

  return `
    <svg class="faceless-avatar-svg" viewBox="0 0 100 100">
      <path d="M 15 100 C 30 75 70 75 85 100 Z" fill="${outfitColor}" />
      <rect x="40" y="65" width="20" height="15" fill="${skinTone}" />
      ${headContent}
      ${glassesSVG}
    </svg>
  `;
}

// PARENT PIN KEYPAD HANDLER WITH HIGHLIGHT
window.tapPinKey = function(key) {
  activePressedPinKey = key;
  const btn = document.getElementById(`pin-btn-${key}`);
  if (btn) {
    btn.style.transform = 'scale(0.9)';
    btn.style.background = 'var(--primary-teal)';
    btn.style.color = 'white';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
      btn.style.background = '#f9f9f9';
      btn.style.color = 'black';
    }, 150);
  }

  if (key === 'C') {
    enteredPinText = '';
  } else if (key === '✓') {
    _verifyPinInput();
  } else {
    if (enteredPinText.length < 4) {
      enteredPinText += key;
      if (enteredPinText.length === 4) {
        _verifyPinInput();
      }
    }
  }
  updatePinDisplay();
};

function _verifyPinInput() {
  if (enteredPinText === parentPinCode) {
    isParentPinUnlocked = true;
    enteredPinText = '';
    activeTab = 'parent'; // Direct navigation to Parent Dashboard
    renderViewport();
    updateBottomNavFilter();
  } else {
    setTimeout(() => {
      alert('Incorrect Parent PIN! Try PIN code: 1234');
      enteredPinText = '';
      updatePinDisplay();
    }, 150);
  }
}

function updatePinDisplay() {
  const disp = document.getElementById('pin-display-bullets');
  if (disp) {
    disp.innerHTML = [0, 1, 2, 3].map(i => `
      <div style="width:16px; height:16px; border-radius:50%; background:${i < enteredPinText.length ? 'var(--primary-teal)' : '#e0e0e0'}; border:2px solid ${i < enteredPinText.length ? 'var(--primary-teal)' : '#bdbdbd'};"></div>
    `).join('');
  }
}

function updateBottomNavFilter() {
  const navContainer = document.querySelector('.bottom-nav');
  if (!navContainer) return;

  const isChildActive = activeChildIndex >= 0;

  navContainer.innerHTML = isChildActive ? `
    <button class="nav-item ${activeTab === 'today' ? 'active' : ''}" data-tab="today" onclick="switchTab('today')">
      <span class="nav-icon">🌅</span>
      <span class="nav-label">Today</span>
    </button>
    <button class="nav-item ${activeTab === 'journey' ? 'active' : ''}" data-tab="journey" onclick="switchTab('journey')">
      <span class="nav-icon">📅</span>
      <span class="nav-label">Journey</span>
    </button>
    <button class="nav-item ${activeTab === 'learn' ? 'active' : ''}" data-tab="learn" onclick="switchTab('learn')">
      <span class="nav-icon">📖</span>
      <span class="nav-label">Learn</span>
    </button>
  ` : `
    <button class="nav-item ${activeTab === 'today' ? 'active' : ''}" data-tab="today" onclick="switchTab('today')">
      <span class="nav-icon">🏠</span>
      <span class="nav-label">Home</span>
    </button>
    <button class="nav-item ${activeTab === 'parent' ? 'active' : ''}" data-tab="parent" onclick="switchTab('parent')">
      <span class="nav-icon">👨‍👩‍👧</span>
      <span class="nav-label">Parent Menu</span>
    </button>
  `;
}

window.switchTab = function(tab) {
  if (tab === 'parent' && !isParentPinUnlocked) {
    enteredPinText = '';
  }
  // Reset check-in if the user navigates away mid-session
  if (tab !== 'today' && (isCheckingIn || isShowingResults)) {
    isCheckingIn = false;
    isShowingResults = false;
    checkInResults = [];
    currentCardIndex = 0;
    window.currentCheckInReward = null;
  }
  activeTab = tab;
  renderViewport();
  updateBottomNavFilter();
};

function renderViewport() {
  const viewport = document.getElementById('app-viewport');
  updateBottomNavFilter();

  // STEP 1: Parent PIN Login Screen (Only when activeTab === 'parent' AND PIN is locked)
  if (activeTab === 'parent' && !isParentPinUnlocked) {
    viewport.innerHTML = `
      <div style="text-align:center; padding:16px 0;">
        <div style="font-size:54px; margin-bottom:8px;">🔒</div>
        <h2 style="font-size:22px; color:var(--text-dark);">Parent PIN Login</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Enter security code to access parent menu</p>
      </div>

      <div class="card" style="text-align:center; padding:24px 16px;">
        <div style="display:flex; justify-content:center; gap:12px; margin-bottom:20px;" id="pin-display-bullets">
          ${[0, 1, 2, 3].map(i => `
            <div style="width:16px; height:16px; border-radius:50%; background:${i < enteredPinText.length ? 'var(--primary-teal)' : '#e0e0e0'}; border:2px solid ${i < enteredPinText.length ? 'var(--primary-teal)' : '#bdbdbd'};"></div>
          `).join('')}
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; width:210px; margin:0 auto;" id="keypad">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, '✓'].map(k => `
            <button id="pin-btn-${k}" class="pattern-dot" style="width:54px; height:54px; border-radius:18px; border:1px solid #ccc; font-size:20px; font-weight:700; background:#f9f9f9; cursor:pointer; transition:transform 0.15s ease;" onclick="window.tapPinKey('${k}')">
              ${k}
            </button>
          `).join('')}
        </div>
        <div style="margin-top:14px; font-size:12px; font-weight:bold; color:var(--primary-teal);">Default PIN: 1234</div>
      </div>
    `;
    return;
  }

  // STEP 2: PARENT DASHBOARD TAB (When activeTab === 'parent' AND isParentPinUnlocked === true)
  if (activeTab === 'parent' && isParentPinUnlocked) {
    viewport.innerHTML = `
      <h2 style="font-size:22px; margin-bottom:6px;">👨‍👩‍👧 Parent dashboard</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Children management & security settings</p>

      <div class="card">
        <strong style="display:block; margin-bottom:10px;">👶 Managed children grid</strong>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          ${childrenList.length > 0 ? childrenList.map((c, i) => `
            <div style="background:var(--soft-teal-bg); padding:10px; border-radius:16px; text-align:center;">
              <div style="width:54px; height:54px; margin:0 auto;">
                ${renderFacelessHeadSVG(c.gender, c.skinTone, c.hairColor, c.hairStyleIndex, c.eyeGlassesIndex, c.headwearColor, c.hasHeadwear)}
              </div>
              <strong style="display:block; font-size:14px; margin-top:4px;">${c.name}</strong>
              <div style="margin-top:6px; display:flex; justify-content:center; gap:4px;">
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--primary-teal); color:white; cursor:pointer;" onclick="openAddChildVisualModal(${i})">🎨 Avatar</button>
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--accent-gold); color:black; cursor:pointer;" onclick="resetChildPattern(${i})">🔒 Pattern</button>
              </div>
            </div>
          `).join('') : `
            <div style="grid-column:span 2; text-align:center; padding:10px;">No children profiles. Add one below!</div>
          `}
        </div>
        <button class="btn-secondary" style="margin-top:14px;" onclick="openAddChildVisualModal()">+ Add new child</button>
      </div>

      <!-- DAILY HABITS -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <strong style="font-size:15px;">✅ Daily Habits</strong>
          <button style="border:none; background:var(--primary-teal); color:white; border-radius:12px; padding:4px 12px; font-family:var(--font-fredoka); font-size:12px; cursor:pointer;" onclick="addDeedModal()">+ Add</button>
        </div>
        ${deedsList.map((d, i) => `
          <div style="display:flex; align-items:center; gap:8px; padding:7px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:20px;">${d.emoji}</span>
            <div style="flex:1;">
              <div style="font-size:13px; font-weight:700; color:${d.isEnabled !== false ? 'var(--text-dark)' : '#aaa'};">${d.text}</div>
              <div style="font-size:10px; color:${d.positive ? 'var(--primary-teal)' : '#e53935'};">${d.positive ? '+' : '-'}${d.points} pts</div>
            </div>
            <input type="checkbox" ${d.isEnabled !== false ? 'checked' : ''} onchange="toggleDeed(${i})" style="width:18px; height:18px; cursor:pointer;">
            <button style="border:none; background:#ffebee; color:#e53935; border-radius:8px; padding:3px 7px; font-size:12px; cursor:pointer;" onclick="deleteDeed(${i})">🗑️</button>
          </div>
        `).join('')}
      </div>

      <!-- REWARDS -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <strong style="font-size:15px;">🎁 Rewards</strong>
          <button style="border:none; background:var(--primary-teal); color:white; border-radius:12px; padding:4px 12px; font-family:var(--font-fredoka); font-size:12px; cursor:pointer;" onclick="addRewardModal()">+ Add</button>
        </div>
        ${rewardsList.map((r, i) => `
          <div style="display:flex; align-items:center; gap:8px; padding:7px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:22px;">${r.emoji}</span>
            <div style="flex:1;">
              <div style="font-size:13px; font-weight:700;">${r.title}</div>
              <div style="font-size:10px; color:var(--text-muted);">Requires ${r.requiredPoints} pts • ${Math.round(r.probability * 100)}% chance</div>
            </div>
            <button style="border:none; background:#ffebee; color:#e53935; border-radius:8px; padding:3px 7px; font-size:12px; cursor:pointer;" onclick="deleteReward(${i})">🗑️</button>
          </div>
        `).join('')}
      </div>

      <!-- SETTINGS -->
      <div class="card">
        <strong style="display:block; margin-bottom:10px; font-size:15px;">⚙️ Settings</strong>
        <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid #f0f0f0; font-size:13px;"><span>🔊 Sound Effects</span><input type="checkbox" checked style="width:18px; height:18px;"></div>
        <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid #f0f0f0; font-size:13px;"><span>🏆 Family Leaderboard</span><input type="checkbox" checked style="width:18px; height:18px;"></div>
        <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; font-size:13px;"><span>🔥 Streak Counter</span><input type="checkbox" checked style="width:18px; height:18px;"></div>
        <button class="btn-primary" style="margin-top:10px;" onclick="changeParentPinModal()">🔒 Change Parent PIN (with confirmation)</button>
      </div>

      <!-- DANGER ZONE -->
      <div class="card" style="border:2px solid #ffcdd2;">
        <strong style="display:block; margin-bottom:6px; color:#d32f2f; font-size:15px;">⚠️ Reset All Data</strong>
        <p style="font-size:12px; color:var(--text-muted); margin-bottom:10px;">Delete all profiles, points &amp; history. Cannot be undone.</p>
        <button class="btn-primary" style="background:linear-gradient(135deg,#e53935,#c62828); box-shadow:0 4px 14px rgba(229,57,53,.3);" onclick="resetAllAppDataModal()">⚠️ Reset app to factory fresh</button>
      </div>

      <button style="border:none; background:none; color:red; font-family:var(--font-fredoka); font-size:13px; margin-top:14px; width:100%; cursor:pointer;" onclick="lockParentGate()">
        🔒 Lock Parent Menu &amp; Exit
      </button>
    `;
    return;
  }

  // STEP 3: Child Selection Grid (When no active child is picked yet)
  if (activeChildIndex === -1) {
    viewport.innerHTML = `
      <div style="text-align:center; padding:10px 0;">
        <h2 style="font-size:22px; color:var(--text-dark);">🌟 Assalamu Alaikum!</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Tap your profile avatar to log in</p>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:20px 0;">
        ${childrenList.length > 0 ? childrenList.map((child, idx) => `
          <div class="card" style="text-align:center; cursor:pointer; padding:16px; border:2px solid transparent;" onclick="selectKidFromGrid(${idx})">
            <div style="width:76px; height:76px; margin:0 auto 10px auto;">
              ${renderFacelessHeadSVG(child.gender, child.skinTone, child.hairColor, child.hairStyleIndex, child.eyeGlassesIndex, child.headwearColor, child.hasHeadwear)}
            </div>
            <strong style="font-size:16px; display:block; color:var(--text-dark);">${child.name}</strong>
            <span style="font-size:11px; color:var(--text-muted);">${child.patternLock ? '🔒 Pattern Set' : '✨ Tap to create pattern'}</span>
          </div>
        `).join('') : `
          <div style="grid-column: span 2; text-align:center; padding:30px; background:white; border-radius:24px;">
            <div style="font-size:40px; margin-bottom:8px;">👶</div>
            <p style="font-size:14px; font-weight:700; color:var(--text-dark);">No children added yet!</p>
            <p style="font-size:12px; color:var(--text-muted);">Tap the button below to add your child</p>
          </div>
        `}
      </div>

      <button class="btn-secondary" style="margin-top:6px;" onclick="openAddChildVisualModal()">
        + Add new sibling / child
      </button>

      <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:12px; margin-top:16px; width:100%; cursor:pointer;" onclick="lockParentGate()">
        🔒 Lock parent PIN gate
      </button>
    `;
    return;
  }

  // STEP 4: Touch-Drag 3x3 Star Pattern Lock / Pattern Creation
  const activeChild = childrenList[activeChildIndex];
  if (activeChild.requiresPatternLock || !activeChild.patternLock) {
    const isFirstTime = !activeChild.patternLock;
    viewport.innerHTML = `
      <div style="text-align:center; padding:16px 0;">
        <div style="width:76px; height:76px; margin:0 auto 10px auto;">
          ${renderFacelessHeadSVG(activeChild.gender, activeChild.skinTone, activeChild.hairColor, activeChild.hairStyleIndex, activeChild.eyeGlassesIndex, activeChild.headwearColor, activeChild.hasHeadwear)}
        </div>
        <h2 style="font-size:20px; color:var(--text-dark);">${isPatternConfirming ? 'Confirm pattern ⭐' : (isFirstTime ? `Create pattern for ${activeChild.name}` : `Welcome back, ${activeChild.name}!`)}</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">${isPatternConfirming ? 'Draw pattern again to confirm!' : 'Drag your finger across stars to draw pattern'}</p>
      </div>

      <!-- VISUAL TOUCH-DRAG 3x3 PATTERN GRID WITH LINE DRAWING -->
      <div class="card" style="text-align:center; padding:24px 12px; position:relative;">
        <svg id="pattern-canvas" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;">
          <path id="pattern-path" d="" stroke="var(--accent-gold)" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; width:220px; margin:0 auto; position:relative; z-index:2;" id="pattern-grid">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => `
            <div id="pattern-dot-${num}" class="pattern-dot" data-num="${num}" style="width:54px; height:54px; border-radius:50%; background:#f0f4f8; border:3px solid var(--primary-teal); display:flex; align-items:center; justify-content:center; font-size:20px; cursor:pointer; user-select:none;">
              ⭐
            </div>
          `).join('')}
        </div>
        <button class="btn-secondary" style="margin-top:14px; width:140px; padding:6px;" onclick="resetPatternDrawn()">Clear pattern</button>
      </div>

      <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:13px; margin-top:16px; cursor:pointer; width:100%; text-align:center;" onclick="cancelKidSelection()">
        ⬅️ Back to child selection
      </button>
    `;

    setTimeout(attachPatternDragListeners, 100);
    return;
  }

  // CHECK-IN CARD FLOW (only intercepts Today tab)
  if (isCheckingIn && activeTab === 'today') {
    const activeDeeds = deedsList.filter(d => d.isEnabled !== false);
    const deed = activeDeeds[currentCardIndex];
    const pct = Math.round((currentCardIndex / activeDeeds.length) * 100);

    // Calculate current running total score
    let runningScore = 0;
    checkInResults.forEach(r => {
      if (r.deed.positive) {
        if (r.answer === 'full') runningScore += r.deed.points;
        else if (r.answer === 'partial') runningScore += Math.floor(r.deed.points / 2);
      } else {
        if (r.answer === 'full') runningScore -= r.deed.points;
      }
    });

    viewport.innerHTML = `
      <!-- Back button row -->
      <div style="display:flex; align-items:center; margin-bottom:4px;">
        <button style="border:none; background:none; font-family:var(--font-fredoka); font-size:13px; font-weight:700; color:var(--text-muted); cursor:pointer; padding:4px 0; display:flex; align-items:center; gap:4px;" onclick="window.cancelCheckIn()">⬅️ Cancel check-in</button>
      </div>
      <div style="text-align:center; padding:4px 0 14px 0;">
        <div style="font-size:13px; color:var(--primary-teal); font-weight:700;">🌙 How was your day, ${activeChild.name}?</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Question ${currentCardIndex + 1} of ${activeDeeds.length}</div>
        <div style="height:6px; background:#e0e0e0; border-radius:6px; margin:10px 0;"><div style="height:6px; width:${pct}%; background:var(--primary-teal); border-radius:6px;"></div></div>
      </div>
      <div class="card" style="text-align:center; padding:24px 20px; background:${deed.positive ? 'linear-gradient(135deg,#e0f2f1,#fff)' : 'linear-gradient(135deg,#fff8e1,#fff)'}; border:2px solid ${deed.positive ? '#b2dfdb' : '#ffe082'};">
        <div style="font-size:64px; margin-bottom:12px;">${deed.emoji}</div>
        <p style="font-size:18px; font-weight:700; color:var(--text-dark); line-height:1.4;">${deed.text}</p>
        <div style="font-size:12px; color:${deed.positive ? 'var(--primary-teal)' : '#e65100'}; margin-top:6px;">${deed.positive ? '+' + deed.points : '-' + deed.points} pts</div>
      </div>
      ${deed.positive ? `
        <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px;">
          <button class="btn-primary" style="background:linear-gradient(135deg,#43a047,#2e7d32);" onclick="window.checkInAnswer('full')">✅ Yes, Alhamdulillah! &nbsp;<span style="font-size:12px; opacity:0.8;">(+${deed.points} pts)</span></button>
          <button class="btn-primary" style="background:linear-gradient(135deg,#fdd835,#f9a825); color:#333;" onclick="window.checkInAnswer('partial')">🙂 Tried today &nbsp;<span style="font-size:12px;">(+${Math.floor(deed.points / 2)} pts)</span></button>
          <button style="width:100%; padding:12px; border-radius:18px; border:2px solid #ccc; background:white; font-family:var(--font-fredoka); font-size:15px; font-weight:700; color:var(--text-muted); cursor:pointer;" onclick="window.checkInAnswer('no')">➖ Not today</button>
        </div>
      ` : `
        <div style="display:flex; gap:10px; margin-top:14px;">
          <button class="btn-primary" style="flex:1; background:linear-gradient(135deg,#43a047,#2e7d32);" onclick="window.checkInAnswer('no')">🙂 No, Alhamdulillah!</button>
          <button class="btn-primary" style="flex:1; background:linear-gradient(135deg,#ef5350,#c62828);" onclick="window.checkInAnswer('full')">😕 Yes, happened</button>
        </div>
      `}

      <!-- Funky Live Running Score Badge Below Buttons -->
      <div style="margin-top:14px; text-align:center;">
        <div style="display:inline-block; padding:8px 18px; background:linear-gradient(135deg,#ffb300,#ff8f00); color:white; border-radius:20px; font-weight:700; font-size:14px; box-shadow:0 4px 12px rgba(255,179,0,0.35); text-shadow:0 1px 2px rgba(0,0,0,0.2); animation:pulse 1.5s infinite;">
          ✨ Running Score: ${runningScore >= 0 ? '+' + runningScore : runningScore} pts ⭐
        </div>
      </div>
    `;
    return;
  }

  window.checkInAnswer = function(answer) {
    const activeDeeds = deedsList.filter(d => d.isEnabled !== false);
    checkInResults.push({ index: currentCardIndex, deed: activeDeeds[currentCardIndex], answer });
    currentCardIndex++;
    if (currentCardIndex >= activeDeeds.length) {
      isCheckingIn = false;
      isShowingResults = true;
    }
    renderViewport();
  };

  // RESULTS SCREEN (only shows on Today tab)
  if (isShowingResults && activeTab === 'today') {
    let total = 0;
    checkInResults.forEach(r => {
      if (r.deed.positive) {
        if (r.answer === 'full') total += r.deed.points;
        else if (r.answer === 'partial') total += Math.floor(r.deed.points / 2);
      } else {
        if (r.answer === 'full') total -= r.deed.points;
      }
    });

    if (!window.currentCheckInReward) {
      window.currentCheckInReward = rewardsList[Math.floor(Math.random() * rewardsList.length)];
    }
    const earnedReward = window.currentCheckInReward;

    const msg = total >= 15
      ? { text: 'MashaAllah! What an amazing day! 🌟', bg: '#e0f2f1', color: '#00897b' }
      : total >= 8
      ? { text: 'Alhamdulillah! Keep it up tomorrow! 😊', bg: '#fff8e1', color: '#f9a825' }
      : { text: "It's okay. Tomorrow is another chance, InshaAllah. 🌱", bg: '#f5f5f5', color: '#78909c' };

    viewport.innerHTML = `
      <div style="text-align:center; padding:12px 0 8px 0;">
        <div style="font-size:48px;">🌟</div>
        <h2 style="font-size:22px; color:var(--text-dark); margin-top:4px;">What a Day, ${activeChild.name}!</h2>
        <div style="font-size:36px; font-weight:700; color:var(--primary-teal); margin:4px 0;">+${total} pts</div>
        <div style="font-size:12px; font-weight:700; color:${msg.color}; background:${msg.bg}; padding:6px 14px; border-radius:12px; display:inline-block;">${msg.text}</div>
      </div>

      <!-- INTERACTIVE REWARD UNLOCKED SCRATCH CARD -->
      <div class="card" style="background:linear-gradient(135deg,#fff8e1,#ffe082); border:2px dashed var(--accent-gold); text-align:center; padding:12px; margin-bottom:12px; position:relative; overflow:hidden;">
        <span style="font-size:10px; font-weight:700; color:#e65100; text-transform:uppercase; letter-spacing:1px;">🎁 You Earned a Mystery Reward!</span>
        <p style="font-size:11px; color:var(--text-dark); margin:2px 0 8px 0;">Scratch with your finger to discover your surprise!</p>
        
        <div style="position:relative; width:250px; height:110px; margin:0 auto; border-radius:14px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.15);">
          <!-- Hidden Prize beneath gold foil -->
          <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:white; display:flex; flex-direction:column; align-items:center; justify-content:center;">
            <div style="font-size:36px; margin:0;">${earnedReward.emoji}</div>
            <strong style="font-size:14px; color:var(--text-dark);">${earnedReward.title}</strong>
          </div>
          <!-- Scratchable foil canvas overlay -->
          <canvas id="checkin-scratch-canvas" style="position:absolute; top:0; left:0; width:100%; height:100%; cursor:pointer; touch-action:none;"></canvas>
        </div>
      </div>

      <div class="card" style="max-height:160px; overflow-y:auto;">
        ${checkInResults.map(r => {
          const earned = r.deed.positive
            ? (r.answer === 'full' ? r.deed.points : r.answer === 'partial' ? Math.floor(r.deed.points / 2) : 0)
            : (r.answer === 'full' ? -r.deed.points : 0);
          const col = earned > 0 ? '#00897b' : earned < 0 ? '#e53935' : '#9e9e9e';
          return `<div style="display:flex; align-items:center; gap:10px; padding:6px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:20px;">${r.deed.emoji}</span>
            <span style="flex:1; font-size:12px;">${r.deed.text}</span>
            <span style="font-size:12px; font-weight:700; color:${col};">${earned > 0 ? '+' + earned : earned < 0 ? earned : '–'}</span>
          </div>`;
        }).join('')}
      </div>

      <button class="btn-primary" style="margin-top:12px;" onclick="window.finishCheckIn(${total}, '${earnedReward.title}', '${earnedReward.emoji}')">🎁 Done — Save & See My Points!</button>
    `;

    setTimeout(() => initScratchCanvas('checkin-scratch-canvas'), 100);

    window.finishCheckIn = function(pts, rewardTitle, rewardEmoji) {
      const child = childrenList[activeChildIndex];
      if (child) {
        child.points += Math.max(0, pts);
        if (!child.claimedRewards) child.claimedRewards = [];
        child.claimedRewards.push({ emoji: rewardEmoji, title: rewardTitle });

        if (!child.checkInHistory) child.checkInHistory = {};
        const deedTitles = checkInResults
          .filter(r => (r.deed.positive && r.answer !== 'no') || (!r.deed.positive && r.answer === 'no'))
          .map(r => `${r.deed.emoji} ${r.deed.text}`);

        child.checkInHistory['2026-09-01'] = {
          completed: true,
          score: pts,
          reward: { emoji: rewardEmoji, title: rewardTitle },
          details: deedTitles
        };
      }

      isShowingResults = false;
      window.currentCheckInReward = null;
      checkInResults = [];
      currentCardIndex = 0;
      renderViewport();
    };
    return;
  }

  // STEP 5: Main Active Child Tabs ('today', 'journey', 'rewards', 'learn')
  if (activeTab === 'today') {
    const todayStr = '2026-09-01';
    const todayCheckIn = activeChild.checkInHistory && activeChild.checkInHistory[todayStr];

    viewport.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:12px; font-weight:700; padding:6px 12px; border-radius:12px; cursor:pointer;" onclick="cancelKidSelection()">
          🔁 Switch child
        </button>
        <div style="display:flex; gap:6px; align-items:center;">
          <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:11px; font-weight:700; padding:4px 8px; border-radius:10px; cursor:pointer;" onclick="openAppGuideModal()">❓ Guide</button>
          <span style="font-size:11px; font-weight:700; color:var(--text-gold); background:var(--soft-gold-bg); padding:4px 10px; border-radius:12px;">🔥 ${activeChild.streak} Days streak</span>
        </div>
      </div>

      <div class="card greeting-card">
        <div style="width:70px; height:70px; flex-shrink:0;">
          ${renderFacelessHeadSVG(activeChild.gender, activeChild.skinTone, activeChild.hairColor, activeChild.hairStyleIndex, activeChild.eyeGlassesIndex, activeChild.headwearColor, activeChild.hasHeadwear)}
        </div>
        <div>
          <div style="font-size:13px; opacity:0.8;">Assalamu Alaikum!</div>
          <div style="font-size:22px; font-weight:700;">${activeChild.name}</div>
          <div style="font-size:11px; background:rgba(255,255,255,0.25); padding:2px 8px; border-radius:10px; display:inline-block; margin-top:4px;">
            Level ${activeChild.level} • ${activeChild.title}
          </div>
        </div>
      </div>

      <!-- Quick Action Buttons: Change Avatar & Change Pattern Anytime -->
      <div style="display:flex; gap:10px; margin-bottom:16px;">
        <button style="flex:1; padding:10px; border-radius:16px; border:2px solid var(--soft-teal-bg); background:white; font-family:var(--font-fredoka); font-weight:700; font-size:12px; color:var(--primary-teal); cursor:pointer;" onclick="openAddChildVisualModal(${activeChildIndex})">
          🎨 Change avatar
        </button>
        <button style="flex:1; padding:10px; border-radius:16px; border:2px solid var(--soft-gold-bg); background:white; font-family:var(--font-fredoka); font-weight:700; font-size:12px; color:var(--text-gold); cursor:pointer;" onclick="changeChildPatternModal(${activeChildIndex})">
          🔒 Change pattern
        </button>
      </div>

      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size:16px;">🗺️ Today's adventure trail</strong>
          <span style="color:var(--primary-teal); font-weight:700; font-size:13px;">${todayCheckIn ? '10 / 10' : '7 / 10'} Completed</span>
        </div>
        <div class="trail-container">
          <div class="trail-node active">🌙</div>
          <div class="trail-node active">⭐</div>
          <div class="trail-node active">🕌</div>
          <div class="trail-node ${todayCheckIn ? 'active' : ''}">🌳</div>
          <div class="trail-node ${todayCheckIn ? 'active' : ''}">🏆</div>
        </div>
      </div>

      ${todayCheckIn ? `
        <!-- TODAY CHECK-IN COMPLETED STATE CARD -->
        <div class="card" style="background:linear-gradient(135deg,#e0f2f1,#ffffff); border:2px solid var(--primary-teal); text-align:center; padding:18px;">
          <div style="font-size:42px; margin-bottom:4px;">🎉</div>
          <strong style="font-size:18px; color:var(--primary-teal); display:block;">Done, Alhamdulillah!</strong>
          <p style="font-size:12px; color:var(--text-dark); margin:4px 0 12px 0;">Today's check-in is complete!</p>

          <div style="display:flex; gap:8px; justify-content:center; margin-bottom:12px;">
            <div style="flex:1; background:white; padding:8px; border-radius:12px; border:1px solid #b2dfdb;">
              <span style="font-size:10px; color:var(--text-muted); display:block;">Points Achieved</span>
              <strong style="font-size:15px; color:var(--primary-teal);">+${todayCheckIn.score} pts ⭐</strong>
            </div>
            <div style="flex:1; background:white; padding:8px; border-radius:12px; border:1px solid #ffe082;">
              <span style="font-size:10px; color:var(--text-muted); display:block;">Reward Unlocked</span>
              <strong style="font-size:13px; color:#e65100;">${todayCheckIn.reward ? todayCheckIn.reward.emoji + ' ' + todayCheckIn.reward.title : '🍦 Ice Cream'}</strong>
            </div>
          </div>

          <button class="btn-secondary" style="font-size:12px; padding:6px 14px;" id="btn-start-checkin">
            🔁 Redo / Update Nightly Check-In
          </button>
        </div>
      ` : `
        <button class="btn-primary" id="btn-start-checkin">
          <span>🌙</span> Start nightly check-in
        </button>
      `}
    `;

    const startBtn = document.getElementById('btn-start-checkin');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        isCheckingIn = true;
        isShowingResults = false;
        currentCardIndex = 0;
        checkInResults = [];
        renderViewport();
      });
    }

  } else if (activeTab === 'journey') {
    const daysInMonth = new Date(calendarViewYear, calendarViewMonth + 1, 0).getDate();
    const isCurrentMonth = calendarViewYear === 2026 && calendarViewMonth === 8;

    // Check if selected date details are available
    let selectedDetailsMarkup = '';
    if (selectedDateDetails && selectedDateDetails.month === calendarViewMonth && selectedDateDetails.year === calendarViewYear) {
      const dayNum = selectedDateDetails.day;
      const dateKey = `${calendarViewYear}-${String(calendarViewMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
      const historyRecord = activeChild.checkInHistory && activeChild.checkInHistory[dateKey];

      selectedDetailsMarkup = `
        <div class="card" style="background:linear-gradient(135deg,#e0f2f1,#fff); border:2px solid var(--primary-teal); position:relative; margin-top:12px;">
          <button style="position:absolute; top:10px; right:12px; border:none; background:none; font-size:16px; cursor:pointer; color:var(--text-muted);" onclick="window.closeDateDetails()">✖️</button>
          
          <div style="font-size:14px; font-weight:700; color:var(--primary-teal); margin-bottom:4px;">
            📅 Date: ${monthNames[calendarViewMonth]} ${dayNum}, ${calendarViewYear}
          </div>

          ${historyRecord ? `
            <div style="font-size:12px; font-weight:700; color:var(--primary-teal); margin-bottom:6px;">
              Done, Alhamdulillah! 🎉
            </div>
            <div style="display:flex; gap:10px; margin:8px 0;">
              <div style="background:white; padding:6px 12px; border-radius:10px; border:1px solid #b2dfdb;">
                <span style="font-size:10px; color:var(--text-muted); display:block;">Score Achieved</span>
                <strong style="font-size:14px; color:var(--primary-teal);">+${historyRecord.score} pts ⭐</strong>
              </div>
              <div style="background:white; padding:6px 12px; border-radius:10px; border:1px solid #ffe082;">
                <span style="font-size:10px; color:var(--text-muted); display:block;">Reward Unlocked</span>
                <strong style="font-size:12px; color:#e65100;">${historyRecord.reward ? historyRecord.reward.emoji + ' ' + historyRecord.reward.title : '🍦 Treat'}</strong>
              </div>
            </div>
            ${historyRecord.details && historyRecord.details.length > 0 ? `
              <div style="font-size:11px; font-weight:700; color:var(--text-dark); margin-top:6px; margin-bottom:2px;">Completed Deeds:</div>
              <ul style="font-size:11px; color:var(--text-muted); padding-left:18px; margin:0;">
                ${historyRecord.details.map(d => `<li>${d}</li>`).join('')}
              </ul>
            ` : ''}
          ` : `
            <div style="font-size:12px; color:var(--text-muted); padding:6px 0;">
              🌱 No check-in recorded for this date.
            </div>
          `}
        </div>
      `;
    }

    viewport.innerHTML = `
      <h2 style="font-size:22px; margin-bottom:6px;">📅 My good-deed journey</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Track ${activeChild.name}'s growth and habits</p>

      <div class="card" style="background:linear-gradient(135deg, var(--primary-teal), #26a69a); color:white;">
        <div style="text-align:center; font-size:18px; font-weight:700; margin-bottom:12px;">${monthNames[calendarViewMonth]} summary 🌟</div>
        <div style="display:flex; justify-content:space-around; text-align:center;">
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${activeChild.points}</div><div style="font-size:11px;">Points</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">87</div><div style="font-size:11px;">Good deeds</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${(activeChild.claimedRewards || []).length}</div><div style="font-size:11px;">Rewards</div></div>
        </div>
      </div>

      <!-- Family Stars Leaderboard -->
      <div class="card">
        <strong style="font-size:15px; display:block; margin-bottom:10px;">🌟 Family Stars Leaderboard</strong>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${childrenList.slice().sort((a,b) => b.points - a.points).map((c, idx) => {
            const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉';
            const badges = ['Kindness Champion 🌸', 'Dua Star 🤲', 'Helping Hero 🤝', 'Manners Explorer 🌟'];
            const childBadge = badges[idx % badges.length];
            return `
              <div style="display:flex; align-items:center; gap:10px; background:${idx === 0 ? 'var(--soft-gold-bg)' : '#f9f9f9'}; padding:8px 12px; border-radius:14px; border:1px solid ${idx === 0 ? 'var(--accent-gold)' : '#eee'};">
                <span style="font-size:22px;">${medal}</span>
                <div style="width:36px; height:36px; flex-shrink:0;">
                  ${renderFacelessHeadSVG(c.gender, c.skinTone, c.hairColor, c.hairStyleIndex, c.eyeGlassesIndex, c.headwearColor, c.hasHeadwear)}
                </div>
                <div style="flex:1;">
                  <strong style="font-size:13px; display:block; color:var(--text-dark);">${c.name}</strong>
                  <span style="font-size:10px; color:var(--primary-teal); font-weight:700;">${childBadge}</span>
                </div>
                <div style="font-size:14px; font-weight:700; color:var(--primary-teal);">${c.points} pts</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Achievement Trend LINE CHART Graph -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <strong style="font-size:15px;">📊 Achievement trend graph (Line Chart)</strong>
          <span style="font-size:11px; color:var(--primary-teal); font-weight:700;">${monthNames[calendarViewMonth]} ${calendarViewYear}</span>
        </div>
        <div style="position:relative; height:120px; width:100%;">
          <svg style="width:100%; height:100%; overflow:visible;">
            <defs>
              <linearGradient id="line-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--primary-teal)" stop-opacity="0.4"/>
                <stop offset="100%" stop-color="var(--primary-teal)" stop-opacity="0.0"/>
              </linearGradient>
            </defs>
            <path d="M 20 80 L 100 65 L 180 40 L 260 15 L 260 100 L 20 100 Z" fill="url(#line-grad)" />
            <path d="M 20 80 L 100 65 L 180 40 L 260 15" stroke="var(--primary-teal)" stroke-width="4" fill="none" stroke-linecap="round" />
            
            <circle cx="20" cy="80" r="5" fill="var(--accent-gold)" />
            <text x="20" y="70" font-size="10" font-weight="bold" fill="var(--primary-teal)" text-anchor="middle">210</text>
            <text x="20" y="115" font-size="10" fill="var(--text-muted)" text-anchor="middle">Wk 1</text>

            <circle cx="100" cy="65" r="5" fill="var(--accent-gold)" />
            <text x="100" y="55" font-size="10" font-weight="bold" fill="var(--primary-teal)" text-anchor="middle">245</text>
            <text x="100" y="115" font-size="10" fill="var(--text-muted)" text-anchor="middle">Wk 2</text>

            <circle cx="180" cy="40" r="5" fill="var(--accent-gold)" />
            <text x="180" y="30" font-size="10" font-weight="bold" fill="var(--primary-teal)" text-anchor="middle">280</text>
            <text x="180" y="115" font-size="10" fill="var(--text-muted)" text-anchor="middle">Wk 3</text>

            <circle cx="260" cy="15" r="6" fill="var(--accent-gold)" />
            <text x="260" y="5" font-size="10" font-weight="bold" fill="var(--primary-teal)" text-anchor="middle">310</text>
            <text x="260" y="115" font-size="10" fill="var(--text-muted)" text-anchor="middle">Wk 4</text>
          </svg>
        </div>
      </div>

      <!-- Interactive Calendar with Month Traversal -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:12px; font-weight:700; padding:4px 10px; border-radius:10px; cursor:pointer;" onclick="window.changeCalendarMonth(-1)">◀ Prev</button>
          <strong style="font-size:15px; color:var(--text-dark);">${monthNames[calendarViewMonth]} ${calendarViewYear}</strong>
          <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:12px; font-weight:700; padding:4px 10px; border-radius:10px; cursor:pointer;" onclick="window.changeCalendarMonth(1)">Next ▶</button>
        </div>

        <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:6px; text-align:center;">
          ${Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => {
            const dateKey = `${calendarViewYear}-${String(calendarViewMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const hasCheckin = activeChild.checkInHistory && activeChild.checkInHistory[dateKey];
            const isToday = isCurrentMonth && d === 1;

            return `
              <div style="background:${isToday ? 'var(--accent-gold)' : hasCheckin ? 'var(--soft-teal-bg)' : '#f5f5f5'}; color:${isToday ? 'white' : 'black'}; border-radius:8px; padding:6px 2px; cursor:pointer; font-size:11px; font-weight:700; border:${isToday ? '2px solid #ff8f00' : 'none'};" onclick="window.showDateDetails(${d})">
                ${d}${isToday ? ' (Today)' : ''}<br>${hasCheckin ? '⭐' : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- INLINE POPUP / CARD FOR SELECTED DATE DETAILS -->
      ${selectedDetailsMarkup}
    `;
  } else if (activeTab === 'rewards') {
    const child = activeChild;
    if (!child.claimedRewards) child.claimedRewards = [];

    viewport.innerHTML = `
      <h2 style="font-size:22px; margin-bottom:4px;">🎁 Surprise Rewards</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">Earn points to unlock mystery scratch cards!</p>

      <div class="card" style="background:linear-gradient(135deg,#ff9800,#f57c00); color:white; text-align:center; padding:14px;">
        <div style="font-size:13px; opacity:0.9;">Your Available Points</div>
        <div style="font-size:32px; font-weight:700; color:#fff; text-shadow:0 2px 4px rgba(0,0,0,0.2);">⭐ ${child.points} Pts</div>
        <button class="btn-primary" style="background:white; color:#e65100; margin-top:8px; font-size:13px; padding:8px 16px;" onclick="window.unlockScratchCardModal()">
          🎁 Unlock Scratch Card (40 pts)
        </button>
      </div>

      <!-- Scratch Card Feature Container -->
      <div class="card" style="text-align:center; position:relative; overflow:hidden;">
        <strong style="font-size:15px; display:block; margin-bottom:8px;">✨ Interactive Mystery Scratch Card</strong>
        <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px;">Use your finger or mouse to scratch the foil & reveal your prize!</p>
        
        <div id="scratch-area-container" style="position:relative; width:220px; height:140px; margin:0 auto; border-radius:18px; border:3px dashed var(--accent-gold); box-shadow:0 4px 12px rgba(0,0,0,0.1); overflow:hidden; background:linear-gradient(135deg,#fff8e1,#ffe082);">
          <!-- Underneath prize layer -->
          <div id="scratch-prize-layer" style="position:absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:10px;">
            <div style="font-size:42px;" id="scratch-prize-emoji">🍦</div>
            <strong style="font-size:14px; color:var(--text-dark);" id="scratch-prize-title">Delicious Ice Cream!</strong>
            <span style="font-size:10px; color:var(--primary-teal); font-weight:700;">Alhamdulillah! 🎉</span>
          </div>

          <!-- Canvas Scratch Foil Layer -->
          <canvas id="scratch-canvas" width="220" height="140" style="position:absolute; top:0; left:0; width:100%; height:100%; cursor:pointer; touch-action:none; z-index:2;"></canvas>
        </div>

        <button class="btn-secondary" style="margin-top:12px; padding:6px 14px; font-size:12px;" onclick="window.resetScratchFoil()">
          🔄 Reset Foil / Scratch Again
        </button>
      </div>

      <!-- Claimed Rewards List -->
      <div class="card">
        <strong style="font-size:15px; display:block; margin-bottom:10px;">🏆 My Unlocked & Claimed Gifts (${child.claimedRewards.length})</strong>
        ${child.claimedRewards.length > 0 ? child.claimedRewards.map(r => `
          <div style="display:flex; align-items:center; gap:10px; padding:8px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:26px;">${r.emoji}</span>
            <div style="flex:1;">
              <strong style="font-size:13px; display:block;">${r.title}</strong>
              <span style="font-size:10px; color:var(--primary-teal); font-weight:700;">✅ Approved by Parents</span>
            </div>
            <span style="font-size:11px; background:var(--soft-teal-bg); color:var(--primary-teal); padding:3px 8px; border-radius:10px; font-weight:700;">Earned</span>
          </div>
        `).join('') : `
          <div style="text-align:center; padding:14px; color:var(--text-muted); font-size:13px;">
            No rewards claimed yet! Earn 40 points in nightly check-in to scratch your first card! 🌟
          </div>
        `}
      </div>
    `;

    setTimeout(initScratchCanvas, 100);
  } else if (activeTab === 'learn') {
    viewport.innerHTML = `
      <h2 style="font-size:22px; margin-bottom:4px;">📖 Learn & Play</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:14px;">Bitesize Islamic stories, duas & games</p>

      <!-- Interactive Daily Duas Drawer -->
      <div class="card" style="background:linear-gradient(135deg,#e0f2f1,#ffffff); border:2px solid var(--primary-teal);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <strong style="font-size:15px; color:var(--text-dark);">🤲 Interactive Daily Duas</strong>
          <span style="font-size:10px; background:var(--primary-teal); color:white; padding:2px 8px; border-radius:10px; font-weight:700;">Ready to Listen</span>
        </div>
        <p style="font-size:12px; color:var(--text-muted); margin-bottom:10px;">Tap any dua to recite & hear pronunciation</p>
        
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div style="background:white; padding:10px; border-radius:12px; border:1px solid #b2dfdb; cursor:pointer;" onclick="window.playDuaAudio('Bismillahhir Rahmanir Rahim', 'Before Eating')">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:700; font-size:13px; color:var(--primary-teal);">🍽️ Before Eating</span>
              <span style="font-size:12px;">🔊 Tap to Listen</span>
            </div>
            <div style="font-size:14px; text-align:right; font-family:serif; margin:4px 0; color:#004d40;">بِسْمِ اللهِ</div>
            <div style="font-size:11px; color:var(--text-muted);">"In the name of Allah"</div>
          </div>

          <div style="background:white; padding:10px; border-radius:12px; border:1px solid #b2dfdb; cursor:pointer;" onclick="window.playDuaAudio('Bismika Allahumma Amutu wa Ahya', 'Before Sleeping')">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:700; font-size:13px; color:var(--primary-teal);">🌙 Before Sleeping</span>
              <span style="font-size:12px;">🔊 Tap to Listen</span>
            </div>
            <div style="font-size:14px; text-align:right; font-family:serif; margin:4px 0; color:#004d40;">بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا</div>
            <div style="font-size:11px; color:var(--text-muted);">"In Your name O Allah I live and die"</div>
          </div>

          <div style="background:white; padding:10px; border-radius:12px; border:1px solid #b2dfdb; cursor:pointer;" onclick="window.playDuaAudio('Rabbi Zidni Ilma', 'For Knowledge')">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:700; font-size:13px; color:var(--primary-teal);">📚 For Knowledge</span>
              <span style="font-size:12px;">🔊 Tap to Listen</span>
            </div>
            <div style="font-size:14px; text-align:right; font-family:serif; margin:4px 0; color:#004d40;">رَّبِّ زِدْنِي عِلْمًا</div>
            <div style="font-size:11px; color:var(--text-muted);">"O Lord, increase me in knowledge"</div>
          </div>
        </div>
      </div>

      <!-- Feature Cards Grid (Coming Soon) -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <div class="card" style="padding:14px; text-align:center;">
          <div style="font-size:32px; margin-bottom:4px;">📖</div>
          <strong style="font-size:13px; display:block;">Surah Memorizer</strong>
          <span style="font-size:10px; color:var(--text-muted);">Short surahs recitation</span>
          <span style="display:inline-block; font-size:9px; background:#fff3e0; color:#e65100; padding:2px 6px; border-radius:8px; margin-top:6px; font-weight:700;">Coming Soon ✨</span>
        </div>

        <div class="card" style="padding:14px; text-align:center;">
          <div style="font-size:32px; margin-bottom:4px;">🧩</div>
          <strong style="font-size:13px; display:block;">Deed Puzzles</strong>
          <span style="font-size:10px; color:var(--text-muted);">Match Islamic values</span>
          <span style="display:inline-block; font-size:9px; background:#fff3e0; color:#e65100; padding:2px 6px; border-radius:8px; margin-top:6px; font-weight:700;">Coming Soon ✨</span>
        </div>

        <div class="card" style="padding:14px; text-align:center;">
          <div style="font-size:32px; margin-bottom:4px;">🔤</div>
          <strong style="font-size:13px; display:block;">Arabic Alphabet</strong>
          <span style="font-size:10px; color:var(--text-muted);">Interactive ا ب ت</span>
          <span style="display:inline-block; font-size:9px; background:#fff3e0; color:#e65100; padding:2px 6px; border-radius:8px; margin-top:6px; font-weight:700;">Coming Soon ✨</span>
        </div>

        <div class="card" style="padding:14px; text-align:center;">
          <div style="font-size:32px; margin-bottom:4px;">🔢</div>
          <strong style="font-size:13px; display:block;">Number Fun</strong>
          <span style="font-size:10px; color:var(--text-muted);">Counting good deeds</span>
          <span style="display:inline-block; font-size:9px; background:#fff3e0; color:#e65100; padding:2px 6px; border-radius:8px; margin-top:6px; font-weight:700;">Coming Soon ✨</span>
        </div>
      </div>
    `;
  }
}

window.lockParentGate = function() {
  isParentPinUnlocked = false;
  activeChildIndex = -1;
  enteredPinText = '';
  renderViewport();
};

window.selectKidFromGrid = function(idx) {
  activeChildIndex = idx;
  const child = childrenList[idx];
  patternDrawn = [];
  isPatternConfirming = false;
  patternFirstStep = null;
  if (child.patternLock) {
    child.requiresPatternLock = true;
  } else {
    child.requiresPatternLock = false;
    activeTab = 'today';
    speakGreeting(`Assalamu Alaikum ${child.name}! Let's see what you did today!`);
  }
  renderViewport();
};

window.resetChildPattern = function(idx) {
  childrenList[idx].patternLock = null;
  alert(`✨ Pattern lock reset for ${childrenList[idx].name}! They can draw a new pattern on login.`);
  renderViewport();
};

window.toggleDeed = function(idx) {
  deedsList[idx].isEnabled = !deedsList[idx].isEnabled;
  renderViewport();
};

window.deleteDeed = function(idx) {
  if (confirm(`Delete habit "${deedsList[idx].text}"?`)) {
    deedsList.splice(idx, 1);
    renderViewport();
  }
};

window.addDeedModal = function() {
  const text = prompt('Habit name (e.g. "Did you share something today?"):');
  if (!text) return;
  const pts = parseInt(prompt('Points (positive number):') || '2', 10);
  const pos = confirm('Is this a POSITIVE habit? OK = Yes, Cancel = Negative (loses points)');
  const emojis = ['⭐','🌟','✨','🤝','💬','❤️','🕌','🌙','🎯','🌱'];
  deedsList.push({ emoji: emojis[Math.floor(Math.random()*emojis.length)], text, points: Math.abs(pts)||2, positive: pos, isEnabled: true });
  renderViewport();
};

window.deleteReward = function(idx) {
  if (confirm(`Delete reward "${rewardsList[idx].title}"?`)) {
    rewardsList.splice(idx, 1);
    renderViewport();
  }
};

window.addRewardModal = function() {
  const title = prompt('Reward name (e.g. "Pizza night 🍕"):');
  if (!title) return;
  const pts = parseInt(prompt('Required points to unlock:') || '50', 10);
  const prob = parseInt(prompt('Probability % (1-100):') || '25', 10);
  const emojis = ['🎁','🏆','🍦','🍕','🎮','🌳','🎨','🤗','📖','⭐'];
  rewardsList.push({ emoji: emojis[Math.floor(Math.random()*emojis.length)], title, requiredPoints: Math.abs(pts)||50, probability: (Math.min(100, Math.abs(prob))||25) / 100 });
  renderViewport();
};

window.deleteChild = function(idx) {
  if (confirm(`Delete ${childrenList[idx].name}'s profile? This cannot be undone.`)) {
    childrenList.splice(idx, 1);
    if (activeChildIndex >= childrenList.length) activeChildIndex = -1;
    renderViewport();
  }
};

window.resetAllAppDataModal = function() {
  if (confirm('⚠️ Are you sure you want to reset all app data?\n\nThis will permanently delete all children profiles, points, streaks, and restore the app to factory fresh settings.')) {
    childrenList = [];
    activeChildIndex = -1;
    isParentPinUnlocked = false;
    parentPinCode = '1234';
    enteredPinText = '';
    alert('✨ MashaAllah! App has been reset to factory fresh state!');
    renderViewport();
  }
};

// 2-STEP CONFIRMATION MATCHING FOR PARENT PIN
window.changeParentPinModal = function() {
  const newPin = prompt('Step 1: Enter new 4-Digit Parent PIN:');
  if (!newPin || newPin.length !== 4) {
    alert('PIN must be exactly 4 digits!');
    return;
  }
  const confirmPin = prompt('Step 2: Re-enter new 4-Digit Parent PIN to confirm:');
  if (newPin === confirmPin) {
    parentPinCode = newPin;
    alert('✨ MashaAllah! Parent PIN code updated successfully!');
    renderViewport();
  } else {
    alert('❌ PINs do not match! Please try again.');
  }
};

window.changeChildPatternModal = function(idx) {
  childrenList[idx].patternLock = null;
  activeChildIndex = idx;
  patternDrawn = [];
  patternFirstStep = null;
  isPatternConfirming = false;
  renderViewport();
};

// EXACT DOT CENTER ALIGNMENT FOR TOUCH DRAG PATTERN LOCK
function attachPatternDragListeners() {
  const grid = document.getElementById('pattern-grid');
  const pathElem = document.getElementById('pattern-path');
  if (!grid || !pathElem) return;

  const dots = document.querySelectorAll('.pattern-dot');

  function getDotCenter(dot) {
    const rect = dot.getBoundingClientRect();
    const parentRect = document.getElementById('pattern-canvas').getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - parentRect.left,
      y: rect.top + rect.height / 2 - parentRect.top,
    };
  }

  function updateSvgPath() {
    if (patternDrawn.length < 2) {
      pathElem.setAttribute('d', '');
      return;
    }
    let d = '';
    patternDrawn.forEach((num, index) => {
      const dot = document.getElementById(`pattern-dot-${num}`);
      if (dot) {
        const center = getDotCenter(dot);
        d += index === 0 ? `M ${center.x} ${center.y}` : ` L ${center.x} ${center.y}`;
      }
    });
    pathElem.setAttribute('d', d);
  }

  function handlePointer(e) {
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const y = e.clientY || (e.touches && e.touches[0].clientY);
    if (!x || !y) return;

    dots.forEach(dot => {
      const rect = dot.getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        const num = parseInt(dot.dataset.num);
        if (!patternDrawn.includes(num)) {
          patternDrawn.push(num);
          dot.style.background = 'var(--accent-gold)';
          dot.style.borderColor = 'var(--accent-gold)';
          dot.style.color = 'white';
          updateSvgPath();
        }
      }
    });
  }

  grid.addEventListener('pointerdown', (e) => {
    isDraggingPattern = true;
    handlePointer(e);
  });

  grid.addEventListener('pointermove', (e) => {
    if (isDraggingPattern) handlePointer(e);
  });

  grid.addEventListener('pointerup', () => {
    if (isDraggingPattern) {
      isDraggingPattern = false;
      submitPatternDrawn();
    }
  });
}

// 2-STEP CONFIRMATION MATCHING FOR PATTERN LOCK WITH VOICE OVER
function submitPatternDrawn() {
  const child = childrenList[activeChildIndex];
  if (!child) return;

  if (!child.patternLock) {
    if (patternDrawn.length < 3) {
      alert('Connect at least 3 stars!');
      resetPatternDrawn();
      return;
    }

    if (!isPatternConfirming) {
      patternFirstStep = patternDrawn.join('-');
      isPatternConfirming = true;
      alert('✨ Pattern recorded! Draw it again to confirm.');
      resetPatternDrawn();
      renderViewport();
    } else {
      const secondStep = patternDrawn.join('-');
      if (secondStep === patternFirstStep) {
        child.patternLock = secondStep;
        child.requiresPatternLock = false;
        isPatternConfirming = false;
        patternFirstStep = null;
        activeTab = 'today';
        renderViewport();
        speakGreeting(`Assalamu Alaikum ${child.name}! Let's see what you did today!`);
      } else {
        alert('❌ Patterns do not match! Please try again.');
        isPatternConfirming = false;
        patternFirstStep = null;
        resetPatternDrawn();
        renderViewport();
      }
    }
  } else {
    const isCorrect = patternDrawn.join('-') === child.patternLock;
    if (isCorrect) {
      child.requiresPatternLock = false;
      activeTab = 'today';
      renderViewport();
      speakGreeting(`Assalamu Alaikum ${child.name}! Let's see what you did today!`);
    } else {
      alert('🔒 Pattern incorrect! Try again.');
      resetPatternDrawn();
    }
  }
}

window.resetPatternDrawn = function() {
  patternDrawn = [];
  const pathElem = document.getElementById('pattern-path');
  if (pathElem) pathElem.setAttribute('d', '');
  [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(num => {
    const dot = document.getElementById(`pattern-dot-${num}`);
    if (dot) {
      dot.style.background = '#f0f4f8';
      dot.style.borderColor = 'var(--primary-teal)';
      dot.style.color = 'black';
    }
  });
};

window.cancelKidSelection = function() {
  activeChildIndex = -1;
  renderViewport();
};

window.cancelCheckIn = function() {
  isCheckingIn = false;
  isShowingResults = false;
  checkInResults = [];
  currentCardIndex = 0;
  window.currentCheckInReward = null;
  renderViewport();
};

window.openAddChildVisualModal = function(editIndex = -1) {
  const childToEdit = editIndex >= 0 ? childrenList[editIndex] : null;

  tempAvatarConfig = {
    name: childToEdit ? childToEdit.name : '',
    gender: childToEdit ? childToEdit.gender : 'boy',
    skinTone: childToEdit ? childToEdit.skinTone : '#f5d0a0',
    hairColor: childToEdit ? childToEdit.hairColor : '#0e0e0e',
    hairStyleIndex: childToEdit ? childToEdit.hairStyleIndex : 1,
    eyeGlassesIndex: childToEdit ? childToEdit.eyeGlassesIndex : 1,
    headwearColor: childToEdit ? childToEdit.headwearColor : '#ffb300',
    hasHeadwear: true,
  };

  activeCategory = 'hairStyle';

  const modal = document.createElement('div');
  modal.id = 'visual-avatar-modal';
  modal.style.cssText = 'position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px;';
  
  modal.innerHTML = `
    <div style="background:white; border-radius:24px; max-width:380px; width:100%; padding:20px; box-shadow:0 10px 25px rgba(0,0,0,0.2); font-family:var(--font-fredoka);" id="modal-content">
      <!-- Rendered dynamically -->
    </div>
  `;

  document.body.appendChild(modal);
  renderModalContent(editIndex);
};

function renderModalContent(editIndex) {
  const container = document.getElementById('modal-content');
  if (!container) return;

  container.innerHTML = `
    <h3 style="font-size:18px; margin-bottom:12px; text-align:center; color:var(--text-dark);">🎨 Create your avatar</h3>

    <div style="width:110px; height:110px; margin:0 auto 14px auto;" id="modal-head-preview">
      ${renderFacelessHeadSVG(tempAvatarConfig.gender, tempAvatarConfig.skinTone, tempAvatarConfig.hairColor, tempAvatarConfig.hairStyleIndex, tempAvatarConfig.eyeGlassesIndex, tempAvatarConfig.headwearColor, true)}
    </div>

    <input type="text" id="input-modal-name" value="${tempAvatarConfig.name}" placeholder="Child's Name (e.g. Maryam / Bilal)" style="width:100%; padding:10px 14px; border-radius:14px; border:1px solid #ccc; font-family:var(--font-fredoka); margin-bottom:14px; text-align:center; font-size:15px; font-weight:700;" />

    <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px; margin-bottom:14px;">
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${activeCategory === 'gender' ? 'var(--primary-teal)' : '#f5f5f5'}; color:${activeCategory === 'gender' ? 'white' : 'black'}; border-radius:12px;" onclick="setModalCategory('gender', ${editIndex})">
        <span style="font-size:18px;">👦👧</span><br><span style="font-size:9px; font-weight:700;">Gender</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${activeCategory === 'hairStyle' ? 'var(--primary-teal)' : '#f5f5f5'}; color:${activeCategory === 'hairStyle' ? 'white' : 'black'}; border-radius:12px;" onclick="setModalCategory('hairStyle', ${editIndex})">
        <span style="font-size:18px;">💇‍♂️</span><br><span style="font-size:9px; font-weight:700;">Style</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${activeCategory === 'hairColor' ? 'var(--primary-teal)' : '#f5f5f5'}; color:${activeCategory === 'hairColor' ? 'white' : 'black'}; border-radius:12px;" onclick="setModalCategory('hairColor', ${editIndex})">
        <span style="font-size:18px;">🎨</span><br><span style="font-size:9px; font-weight:700;">Color</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${activeCategory === 'skinTone' ? 'var(--primary-teal)' : '#f5f5f5'}; color:${activeCategory === 'skinTone' ? 'white' : 'black'}; border-radius:12px;" onclick="setModalCategory('skinTone', ${editIndex})">
        <span style="font-size:18px;">🖐️</span><br><span style="font-size:9px; font-weight:700;">Skin</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${activeCategory === 'eyeGlasses' ? 'var(--primary-teal)' : '#f5f5f5'}; color:${activeCategory === 'eyeGlasses' ? 'white' : 'black'}; border-radius:12px;" onclick="setModalCategory('eyeGlasses', ${editIndex})">
        <span style="font-size:18px;">👓</span><br><span style="font-size:9px; font-weight:700;">Glasses</span>
      </div>
    </div>

    <div style="background:#f9f9f9; padding:12px; border-radius:16px; margin-bottom:16px;">
      ${renderModalSubCategoryGrid(editIndex)}
    </div>

    <div style="display:flex; gap:10px;">
      <button class="btn-secondary" style="flex:1;" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" style="flex:1;" id="btn-save-modal-child">Save avatar 🎨</button>
    </div>
  `;

  document.getElementById('btn-save-modal-child').addEventListener('click', () => {
    const nameInput = document.getElementById('input-modal-name').value.trim();
    if (!nameInput) {
      alert('Please enter your child\'s name!');
      return;
    }

    if (editIndex >= 0) {
      childrenList[editIndex].name = nameInput;
      childrenList[editIndex].gender = tempAvatarConfig.gender;
      childrenList[editIndex].skinTone = tempAvatarConfig.skinTone;
      childrenList[editIndex].hairColor = tempAvatarConfig.hairColor;
      childrenList[editIndex].hairStyleIndex = tempAvatarConfig.hairStyleIndex;
      childrenList[editIndex].eyeGlassesIndex = tempAvatarConfig.eyeGlassesIndex;
    } else {
      childrenList.push({
        id: Date.now().toString(),
        name: nameInput,
        level: 1,
        points: 0,
        streak: 1,
        title: 'Good deeds starter 🌟',
        gender: tempAvatarConfig.gender,
        skinTone: tempAvatarConfig.skinTone,
        hairColor: tempAvatarConfig.hairColor,
        hairStyleIndex: tempAvatarConfig.hairStyleIndex,
        eyeGlassesIndex: tempAvatarConfig.eyeGlassesIndex,
        outfitColor: tempAvatarConfig.gender === 'girl' ? '#e91e63' : '#00897b',
        headwearColor: tempAvatarConfig.gender === 'boy' ? '#ffb300' : '#81c784',
        hasHeadwear: true,
        patternLock: null,
      });
      activeChildIndex = childrenList.length - 1;
    }

    document.getElementById('visual-avatar-modal').remove();
    renderViewport();
  });
}

function renderModalSubCategoryGrid(editIndex) {
  if (activeCategory === 'gender') {
    return `
      <div style="display:flex; gap:12px;">
        <div style="flex:1; padding:12px; border-radius:14px; border:2px solid ${tempAvatarConfig.gender === 'boy' ? 'var(--primary-teal)' : '#ccc'}; background:${tempAvatarConfig.gender === 'boy' ? 'var(--soft-teal-bg)' : 'white'}; text-align:center; cursor:pointer;" onclick="selectModalGender('boy', ${editIndex})">
          <div style="font-size:36px;">👦</div>
          <strong style="font-size:13px; display:block; margin-top:4px;">Boy</strong>
        </div>
        <div style="flex:1; padding:12px; border-radius:14px; border:2px solid ${tempAvatarConfig.gender === 'girl' ? 'var(--primary-teal)' : '#ccc'}; background:${tempAvatarConfig.gender === 'girl' ? 'var(--soft-teal-bg)' : 'white'}; text-align:center; cursor:pointer;" onclick="selectModalGender('girl', ${editIndex})">
          <div style="font-size:36px;">👧</div>
          <strong style="font-size:13px; display:block; margin-top:4px;">Girl</strong>
        </div>
      </div>
    `;
  } else if (activeCategory === 'hairStyle') {
    const activeStyles = tempAvatarConfig.gender === 'girl' ? femaleHairStyles : maleHairStyles;
    return `
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${activeStyles.map(item => `
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${tempAvatarConfig.hairStyleIndex === item.index ? 'var(--accent-gold)' : '#ccc'}; background:${tempAvatarConfig.hairStyleIndex === item.index ? 'var(--soft-gold-bg)' : 'white'}; text-align:center; cursor:pointer;" onclick="selectModalHairStyle(${item.index}, ${editIndex})">
            <div style="font-size:24px;">${item.emoji}</div>
            <span style="font-size:9px; font-weight:700; display:block; margin-top:2px;">${item.label}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (activeCategory === 'hairColor') {
    return `
      <div style="display:flex; justify-content:space-around; align-items:center;">
        ${hairColorsList.map(item => `
          <div style="text-align:center; cursor:pointer;" onclick="selectModalHairColor('${item.color}', ${editIndex})">
            <div style="width:44px; height:44px; border-radius:50%; background:${item.color}; border:3px solid ${tempAvatarConfig.hairColor === item.color ? 'var(--accent-gold)' : '#ccc'}; margin:0 auto;"></div>
            <span style="font-size:10px; font-weight:700; display:block; margin-top:4px;">${item.name}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (activeCategory === 'skinTone') {
    return `
      <div style="display:flex; justify-content:space-around;">
        ${skinTonesList.map(item => `
          <div style="width:40px; height:40px; border-radius:50%; background:${item.color}; border:3px solid ${tempAvatarConfig.skinTone === item.color ? 'var(--accent-gold)' : '#ccc'}; cursor:pointer;" onclick="selectModalSkinTone('${item.color}', ${editIndex})"></div>
        `).join('')}
      </div>
    `;
  } else if (activeCategory === 'eyeGlasses') {
    return `
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${eyeGlassesList.map(item => `
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${tempAvatarConfig.eyeGlassesIndex === item.index ? 'var(--accent-gold)' : '#ccc'}; background:${tempAvatarConfig.eyeGlassesIndex === item.index ? 'var(--soft-gold-bg)' : 'white'}; text-align:center; cursor:pointer;" onclick="selectModalGlasses(${item.index}, ${editIndex})">
            <div style="font-size:24px;">${item.emoji}</div>
            <span style="font-size:9px; font-weight:700; display:block; margin-top:2px;">${item.label}</span>
          </div>
        `).join('')}
      </div>
    `;
  }
}

window.setModalCategory = function(cat, editIndex) {
  activeCategory = cat;
  renderModalContent(editIndex);
};

window.selectModalGender = function(g, editIndex) { tempAvatarConfig.gender = g; renderModalContent(editIndex); };
window.selectModalHairStyle = function(idx, editIndex) { tempAvatarConfig.hairStyleIndex = idx; renderModalContent(editIndex); };
window.selectModalHairColor = function(color, editIndex) { tempAvatarConfig.hairColor = color; renderModalContent(editIndex); };
window.selectModalSkinTone = function(color, editIndex) { tempAvatarConfig.skinTone = color; renderModalContent(editIndex); };
window.selectModalGlasses = function(idx, editIndex) { tempAvatarConfig.eyeGlassesIndex = idx; renderModalContent(editIndex); };

window.closeModal = function() {
  const modal = document.getElementById('visual-avatar-modal');
  if (modal) modal.remove();
};

window.showDateDetails = function(dayNum) {
  const childName = childrenList[activeChildIndex] ? childrenList[activeChildIndex].name : 'Child';
  const score = 30 + (dayNum * 3) % 40;
  const reward = dayNum % 5 === 0 ? '🍦 Ice cream treat' : '📖 Bedtime story';
  alert(`📅 Date: August ${dayNum}, 2026\n👶 Child: ${childName}\n🌟 Score Earned: +${score} pts\n🎁 Unlocked Gift: ${reward}\n\nCompleted Deeds:\n• Morning Dua recited 👍\n• Prayed Salah on time 🕌\n• Helped clean up toys 🧸`);
};

// SCRATCH CARD CANVAS INITIALIZER & INTERACTION
function initScratchCanvas(canvasId = 'scratch-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  canvas.width = canvas.offsetWidth || 260;
  canvas.height = canvas.offsetHeight || 130;

  ctx.globalCompositeOperation = 'source-over';
  // Fill canvas with shiny gold shimmer gradient
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, '#ffd700');
  grad.addColorStop(0.5, '#fff8e1');
  grad.addColorStop(1, '#ffb300');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#5d4037';
  ctx.font = 'bold 13px Fredoka, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('✨ Scratch to Discover Your Surprise! ✨', canvas.width / 2, canvas.height / 2 + 5);

  let isScratching = false;

  function scratch(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  }

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  canvas.onmousedown = (e) => { isScratching = true; const p = getPos(e); scratch(p.x, p.y); };
  canvas.onmousemove = (e) => { if (isScratching) { const p = getPos(e); scratch(p.x, p.y); } };
  window.onmouseup = () => { isScratching = false; };

  canvas.ontouchstart = (e) => { isScratching = true; const p = getPos(e); scratch(p.x, p.y); };
  canvas.ontouchmove = (e) => { if (isScratching) { const p = getPos(e); scratch(p.x, p.y); } };
  window.ontouchend = () => { isScratching = false; };
}

window.resetScratchFoil = function() {
  const prize = rewardsList[Math.floor(Math.random() * rewardsList.length)];
  const emElem = document.getElementById('scratch-prize-emoji');
  const titleElem = document.getElementById('scratch-prize-title');
  if (emElem) emElem.innerText = prize.emoji;
  if (titleElem) titleElem.innerText = prize.title;
  initScratchCanvas();
};

window.unlockScratchCardModal = function() {
  if (activeChildIndex < 0) return;
  const child = childrenList[activeChildIndex];
  if (child.points < 40) {
    alert(`⭐ You need 40 points to unlock a scratch card! Current points: ${child.points}`);
    return;
  }
  child.points -= 40;
  const prize = rewardsList[Math.floor(Math.random() * rewardsList.length)];
  if (!child.claimedRewards) child.claimedRewards = [];
  child.claimedRewards.push(prize);
  alert(`🎉 MashaAllah! You unlocked "${prize.emoji} ${prize.title}"! (40 points used)`);
  renderViewport();
};

window.playDuaAudio = function(text, label) {
  speakGreeting(text);
};

// 5-SLIDE ONBOARDING WALKTHROUGH GUIDE MODAL
let currentWalkthroughSlide = 0;
const walkthroughSlides = [
  {
    icon: '🌟',
    title: 'Welcome to Kids Good-Deeds',
    text: 'A fun nightly adventure encouraging daily good deeds, Islamic manners, and family rituals without shaming or punishment.'
  },
  {
    icon: '🎨',
    title: 'Faceless Vector Avatars',
    text: 'Adheres strictly to faceless visual rules! Customize gender, hijab/kufi colors, skin tone, hair style, and glasses.'
  },
  {
    icon: '🌙',
    title: 'Nightly Family Check-In',
    text: 'Swipeable card deck flow with gentle encouragement. Earn points for positive habits, try again tomorrow for mistakes!'
  },
  {
    icon: '🎁',
    title: 'Scratch-to-Reveal Rewards',
    text: 'Children spend earned points to scratch surprise rewards customizable by parents (e.g. bedtime stories, ice cream).'
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Parent PIN & Pattern Locks',
    text: 'Protect parent settings with a 4-digit PIN (default: 1234). Children use 3x3 star pattern locks to access their profiles.'
  }
];

window.openAppGuideModal = function() {
  currentWalkthroughSlide = 0;
  const modal = document.createElement('div');
  modal.id = 'guide-walkthrough-modal';
  modal.style.cssText = 'position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px;';
  
  modal.innerHTML = `
    <div style="background:white; border-radius:24px; max-width:380px; width:100%; padding:24px; box-shadow:0 10px 25px rgba(0,0,0,0.2); font-family:var(--font-fredoka); text-align:center;" id="guide-modal-content">
      <!-- Content populated dynamically -->
    </div>
  `;

  document.body.appendChild(modal);
  renderGuideSlide();
};

function renderGuideSlide() {
  const container = document.getElementById('guide-modal-content');
  if (!container) return;

  const slide = walkthroughSlides[currentWalkthroughSlide];
  container.innerHTML = `
    <div style="font-size:54px; margin-bottom:10px;">${slide.icon}</div>
    <h3 style="font-size:18px; color:var(--text-dark); margin-bottom:8px;">${slide.title}</h3>
    <p style="font-size:13px; color:var(--text-muted); line-height:1.5; margin-bottom:18px; min-height:60px;">${slide.text}</p>

    <!-- Slide Indicators -->
    <div style="display:flex; justify-content:center; gap:6px; margin-bottom:20px;">
      ${walkthroughSlides.map((_, i) => `
        <div style="width:${i === currentWalkthroughSlide ? '20px' : '8px'}; height:8px; border-radius:4px; background:${i === currentWalkthroughSlide ? 'var(--primary-teal)' : '#e0e0e0'}; transition:all 0.3s ease;"></div>
      `).join('')}
    </div>

    <div style="display:flex; gap:10px;">
      ${currentWalkthroughSlide > 0 ? `
        <button class="btn-secondary" style="flex:1;" onclick="prevGuideSlide()">⬅️ Back</button>
      ` : ''}
      ${currentWalkthroughSlide < walkthroughSlides.length - 1 ? `
        <button class="btn-primary" style="flex:1;" onclick="nextGuideSlide()">Next ➡️</button>
      ` : `
        <button class="btn-primary" style="flex:1; background:linear-gradient(135deg,#43a047,#2e7d32);" onclick="closeGuideModal()">Got it! 🚀</button>
      `}
    </div>
  `;
}

window.nextGuideSlide = function() {
  if (currentWalkthroughSlide < walkthroughSlides.length - 1) {
    currentWalkthroughSlide++;
    renderGuideSlide();
  }
};

window.prevGuideSlide = function() {
  if (currentWalkthroughSlide > 0) {
    currentWalkthroughSlide--;
    renderGuideSlide();
  }
};

window.changeCalendarMonth = function(delta) {
  calendarViewMonth += delta;
  if (calendarViewMonth < 0) {
    calendarViewMonth = 11;
    calendarViewYear--;
  } else if (calendarViewMonth > 11) {
    calendarViewMonth = 0;
    calendarViewYear++;
  }
  selectedDateDetails = null;
  renderViewport();
};

window.showDateDetails = function(dayNum) {
  selectedDateDetails = {
    day: dayNum,
    month: calendarViewMonth,
    year: calendarViewYear
  };
  renderViewport();
};

window.closeDateDetails = function() {
  selectedDateDetails = null;
  renderViewport();
};

renderViewport();
