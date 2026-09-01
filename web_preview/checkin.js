// ─── Nightly Check-In & Results Flow ──────────────────────────────────────

const deedsList = [
  { emoji: '🤲', text: 'Did you recite your morning dua?',      points: 3, positive: true  },
  { emoji: '🍽️', text: 'Did you say Bismillah before eating?',  points: 2, positive: true  },
  { emoji: '💬', text: 'Did you give Salam to family?',         points: 2, positive: true  },
  { emoji: '🤝', text: 'Did you help someone today?',           points: 3, positive: true  },
  { emoji: '🕌', text: 'Did you pray Salah on time?',           points: 4, positive: true  },
  { emoji: '❤️', text: 'Did you listen respectfully to parents?', points: 3, positive: true },
  { emoji: '🧸', text: 'Did you put your toys away?',           points: 2, positive: true  },
  { emoji: '🕊️', text: 'Did you fight or argue with anyone?',  points: 2, positive: false },
];

let checkInResults = []; // {deed, answer: 'full'|'partial'|'no'}

export function renderCheckIn(viewport, childName, onDone) {
  const deed = deedsList[currentCardIndex];
  const total = deedsList.length;
  const pct = Math.round((currentCardIndex / total) * 100);

  viewport.innerHTML = `
    <div style="text-align:center; padding:8px 0 14px 0;">
      <div style="font-size:13px; color:var(--primary-teal); font-weight:700;">🌙 How was your day, ${childName}?</div>
      <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Question ${currentCardIndex + 1} of ${total}</div>
      <div style="height:6px; background:#e0e0e0; border-radius:6px; margin:10px 0; overflow:hidden;">
        <div style="height:6px; width:${pct}%; background:var(--primary-teal); border-radius:6px; transition:width 0.3s;"></div>
      </div>
    </div>

    <div class="card" style="text-align:center; padding:28px 20px; background:${deed.positive ? 'linear-gradient(135deg,#e0f2f1,#fff)' : 'linear-gradient(135deg,#fff8e1,#fff)'}; border:2px solid ${deed.positive ? '#b2dfdb' : '#ffe082'};">
      <div style="font-size:60px; margin-bottom:14px;">${deed.emoji}</div>
      <p style="font-size:18px; font-weight:700; color:var(--text-dark); line-height:1.4;">${deed.text}</p>
      ${deed.positive ? `<div style="font-size:12px; color:var(--primary-teal); margin-top:8px;">+${deed.points} pts</div>` : `<div style="font-size:12px; color:#e65100; margin-top:8px;">-${deed.points} pts if yes</div>`}
    </div>

    ${deed.positive ? `
      <div style="display:flex; flex-direction:column; gap:10px; margin-top:16px;">
        <button class="btn-primary" style="background:linear-gradient(135deg,#43a047,#2e7d32);" onclick="window.checkInAnswer('full')">
          ✅ Yes, Alhamdulillah! <span style="font-size:12px; opacity:0.8;">(+${deed.points} pts)</span>
        </button>
        <button class="btn-primary" style="background:linear-gradient(135deg,#fdd835,#f9a825); color:#333;" onclick="window.checkInAnswer('partial')">
          🙂 Tried today <span style="font-size:12px; opacity:0.7;">(+${Math.floor(deed.points/2)} pts)</span>
        </button>
        <button style="width:100%; padding:14px; border-radius:20px; border:2px solid #ccc; background:white; font-family:var(--font-fredoka); font-size:16px; font-weight:700; color:var(--text-muted); cursor:pointer;" onclick="window.checkInAnswer('no')">
          ➖ Not today
        </button>
      </div>
    ` : `
      <div style="display:flex; gap:12px; margin-top:16px;">
        <button class="btn-primary" style="flex:1; background:linear-gradient(135deg,#43a047,#2e7d32);" onclick="window.checkInAnswer('no')">
          🙂 No, Alhamdulillah!
        </button>
        <button class="btn-primary" style="flex:1; background:linear-gradient(135deg,#ef5350,#c62828);" onclick="window.checkInAnswer('full')">
          😕 Yes, happened
        </button>
      </div>
    `}
  `;
}

export function renderCheckInResults(viewport, child, onFinish) {
  let total = 0;
  checkInResults.forEach(r => {
    const deed = deedsList[r.index];
    if (deed.positive) {
      if (r.answer === 'full') total += deed.points;
      else if (r.answer === 'partial') total += Math.floor(deed.points / 2);
    } else {
      if (r.answer === 'full') total -= deed.points;
    }
  });

  const msg = total >= 15
    ? { text: 'MashaAllah! What an amazing day! 🌟', color: '#00897b' }
    : total >= 8
    ? { text: 'Alhamdulillah! Keep it up tomorrow! 😊', color: '#f9a825' }
    : { text: "It's okay. Tomorrow is another chance, InshaAllah. 🌱", color: '#78909c' };

  viewport.innerHTML = `
    <div style="text-align:center; padding:16px 0 8px 0;">
      <div style="font-size:48px; margin-bottom:6px;">🌟</div>
      <h2 style="font-size:22px; color:var(--text-dark);">What a Day, ${child.name}!</h2>
      <div style="font-size:36px; font-weight:700; color:var(--primary-teal); margin:8px 0;">+${total} pts</div>
      <div style="font-size:14px; font-weight:700; color:${msg.color}; background:${msg.color}18; padding:8px 16px; border-radius:14px; display:inline-block;">${msg.text}</div>
    </div>

    <div class="card" style="max-height:260px; overflow-y:auto;">
      ${checkInResults.map((r, i) => {
        const deed = deedsList[r.index];
        const earned = deed.positive
          ? (r.answer === 'full' ? deed.points : r.answer === 'partial' ? Math.floor(deed.points/2) : 0)
          : (r.answer === 'full' ? -deed.points : 0);
        const color = earned > 0 ? '#00897b' : earned < 0 ? '#e53935' : '#9e9e9e';
        return `
          <div style="display:flex; align-items:center; gap:10px; padding:8px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:22px;">${deed.emoji}</span>
            <span style="flex:1; font-size:13px; color:var(--text-dark);">${deed.text}</span>
            <span style="font-size:13px; font-weight:700; color:${color};">${earned > 0 ? '+' : ''}${earned !== 0 ? earned : '–'}</span>
          </div>`;
      }).join('')}
    </div>

    <div style="display:flex; gap:10px; margin-top:14px;">
      <button class="btn-primary" style="flex:1;" onclick="window.finishCheckIn(${total})">
        🎁 See today's reward!
      </button>
    </div>
  `;
}

// Wire up globals used by inline onclick handlers
window.checkInAnswer = function(answer) {
  checkInResults.push({ index: currentCardIndex, answer });
  currentCardIndex++;
  if (currentCardIndex >= deedsList.length) {
    isCheckingIn = false;
    isShowingResults = true;
  }
  renderViewport();
};

window.finishCheckIn = function(pts) {
  // Award points to active child
  if (activeChildIndex >= 0) {
    childrenList[activeChildIndex].points += Math.max(0, pts);
  }
  isShowingResults = false;
  checkInResults = [];
  currentCardIndex = 0;
  activeTab = 'today';
  renderViewport();
};
