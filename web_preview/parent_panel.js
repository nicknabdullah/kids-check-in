// ─── Parent Dashboard Sections ─────────────────────────────────────────────

export function renderParentDashboard(viewport, {
  childrenList, parentPinCode,
  deedsList, rewardsList,
  onResetAll, onChangePIN, onResetPattern, onEditChild, onDeleteChild, onAddChild,
  onToggleDeed, onEditDeed, onDeleteDeed, onAddDeed,
  onToggleReward, onDeleteReward, onAddReward,
  onLock,
}) {
  viewport.innerHTML = `
    <h2 style="font-size:22px; margin-bottom:4px;">👨‍👩‍👧 Parent Dashboard</h2>
    <p style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">Manage children, habits, rewards & settings</p>

    <!-- CHILDREN -->
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <strong style="font-size:15px;">👶 Children</strong>
        <button style="border:none; background:var(--primary-teal); color:white; border-radius:12px; padding:4px 12px; font-family:var(--font-fredoka); font-size:12px; cursor:pointer;" onclick="window._addChild()">+ Add</button>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        ${childrenList.length === 0
          ? `<div style="grid-column:span 2; text-align:center; color:var(--text-muted); padding:12px; font-size:13px;">No children yet. Tap + Add above.</div>`
          : childrenList.map((c, i) => `
          <div style="background:var(--soft-teal-bg); padding:10px; border-radius:16px; text-align:center; position:relative;">
            <div style="width:52px; height:52px; margin:0 auto 4px auto;">${window._renderHead(c)}</div>
            <strong style="font-size:13px; display:block;">${c.name}</strong>
            <div style="font-size:10px; color:var(--text-muted);">🔥 ${c.streak}d • ⭐ ${c.points}pts</div>
            <div style="margin-top:6px; display:flex; justify-content:center; gap:4px; flex-wrap:wrap;">
              <button style="${btnStyle('#00897b')}" onclick="window._editChildAvatar(${i})">🎨</button>
              <button style="${btnStyle('#f9a825','#333')}" onclick="window._resetPattern(${i})">🔒</button>
              <button style="${btnStyle('#e53935')}" onclick="window._deleteChild(${i})">🗑️</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- DAILY HABITS -->
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <strong style="font-size:15px;">✅ Daily Habits</strong>
        <button style="border:none; background:var(--primary-teal); color:white; border-radius:12px; padding:4px 12px; font-family:var(--font-fredoka); font-size:12px; cursor:pointer;" onclick="window._addDeed()">+ Add</button>
      </div>
      ${deedsList.map((d, i) => `
        <div style="display:flex; align-items:center; gap:8px; padding:7px 0; border-bottom:1px solid #f0f0f0;">
          <span style="font-size:20px;">${d.emoji}</span>
          <div style="flex:1;">
            <div style="font-size:13px; font-weight:700; color:${d.isEnabled !== false ? 'var(--text-dark)' : '#aaa'};">${d.text}</div>
            <div style="font-size:10px; color:${d.positive ? 'var(--primary-teal)' : '#e53935'};">${d.positive ? '+' : '-'}${d.points} pts</div>
          </div>
          <label style="position:relative; display:inline-block; width:36px; height:20px;">
            <input type="checkbox" ${d.isEnabled !== false ? 'checked' : ''} onchange="window._toggleDeed(${i})" style="opacity:0; width:0; height:0;">
            <span style="position:absolute; inset:0; background:${d.isEnabled !== false ? 'var(--primary-teal)' : '#ccc'}; border-radius:20px; cursor:pointer;"></span>
          </label>
          <button style="${btnStyle('#e53935')}" onclick="window._deleteDeed(${i})">🗑️</button>
        </div>
      `).join('')}
    </div>

    <!-- REWARDS -->
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <strong style="font-size:15px;">🎁 Rewards</strong>
        <button style="border:none; background:var(--primary-teal); color:white; border-radius:12px; padding:4px 12px; font-family:var(--font-fredoka); font-size:12px; cursor:pointer;" onclick="window._addReward()">+ Add</button>
      </div>
      ${rewardsList.map((r, i) => `
        <div style="display:flex; align-items:center; gap:8px; padding:7px 0; border-bottom:1px solid #f0f0f0;">
          <span style="font-size:22px;">${r.emoji}</span>
          <div style="flex:1;">
            <div style="font-size:13px; font-weight:700;">${r.title}</div>
            <div style="font-size:10px; color:var(--text-muted);">Requires ${r.requiredPoints} pts • ${Math.round(r.probability * 100)}% chance</div>
          </div>
          <button style="${btnStyle('#e53935')}" onclick="window._deleteReward(${i})">🗑️</button>
        </div>
      `).join('')}
    </div>

    <!-- SETTINGS -->
    <div class="card">
      <strong style="display:block; margin-bottom:10px; font-size:15px;">⚙️ Settings</strong>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
          <span>🔊 Sound Effects</span>
          <label style="position:relative; display:inline-block; width:36px; height:20px;">
            <input type="checkbox" checked style="opacity:0; width:0; height:0;">
            <span style="position:absolute; inset:0; background:var(--primary-teal); border-radius:20px; cursor:pointer;"></span>
          </label>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
          <span>🏆 Family Leaderboard</span>
          <label style="position:relative; display:inline-block; width:36px; height:20px;">
            <input type="checkbox" checked style="opacity:0; width:0; height:0;">
            <span style="position:absolute; inset:0; background:var(--primary-teal); border-radius:20px; cursor:pointer;"></span>
          </label>
        </div>
        <button class="btn-primary" style="margin-top:6px;" onclick="window._changePIN()">🔒 Change Parent PIN</button>
      </div>
    </div>

    <!-- DANGER ZONE -->
    <div class="card" style="border:2px solid #ffcdd2;">
      <strong style="display:block; margin-bottom:6px; color:#d32f2f; font-size:15px;">⚠️ Reset All Data</strong>
      <p style="font-size:12px; color:var(--text-muted); margin-bottom:10px;">Delete all profiles, points & history.</p>
      <button class="btn-primary" style="background:linear-gradient(135deg,#e53935,#c62828); box-shadow:0 4px 14px rgba(229,57,53,.3);" onclick="window._resetAll()">⚠️ Reset app to factory fresh</button>
    </div>

    <button style="border:none; background:none; color:red; font-family:var(--font-fredoka); font-size:13px; margin-top:14px; width:100%; cursor:pointer;" onclick="window._lockParent()">
      🔒 Lock Parent Menu &amp; Exit
    </button>
  `;
}

function btnStyle(bg, color = 'white') {
  return `border:none; background:${bg}; color:${color}; border-radius:8px; padding:3px 7px; font-size:12px; cursor:pointer;`;
}
