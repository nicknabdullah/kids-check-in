(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();let l="today",o=[],s=0,p=0;const v=[{title:"Dua Before Eating 🍽️",arabic:"بِسْمِ اللهِ وَعَلَى بَرَكَةِ اللهِ",transliteration:"Bismillahi wa 'ala barakatillah"},{title:"Dua After Meals 🍉",arabic:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا",transliteration:"Alhamdulillahilladhi at'amana wa saqana"},{title:"Dua Before Sleeping 🌙",arabic:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",transliteration:"Bismika Allahumma amutu wa ahya"},{title:"Dua For Parents ❤️",arabic:"رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",transliteration:"Rabbir hamhuma kama rabbayani sagheera"}];function u(e="boy",i="#00897b"){return`
    <svg class="faceless-avatar-svg" viewBox="0 0 100 100">
      <path d="M 25 100 L 35 62 Q 50 58 65 62 L 75 100 Z" fill="${i}" />
      <rect x="44" y="50" width="12" height="12" rx="4" fill="#f5d0a0" />
      <circle cx="50" cy="42" r="20" fill="#f5d0a0" />
      ${e==="boy"?'<path d="M 25 35 A 20 20 0 0 1 75 35 Z" fill="#ffb300" />':'<path d="M 22 45 C 18 65 30 80 50 80 C 70 80 82 65 78 45 Z" fill="#81c784" />'}
    </svg>
  `}function d(){const e=document.getElementById("app-viewport");if(o.length===0){e.innerHTML=`
      <div style="text-align:center; padding:10px 0;">
        <h2 style="font-size:22px; color:var(--text-dark);">🌟 Assalamu Alaikum!</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">First-Time Parent Onboarding Setup</p>
      </div>

      <div class="card" style="margin-top:14px;">
        <strong style="font-size:16px; display:block; margin-bottom:8px;">Step 1: Set Parent Security PIN</strong>
        <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px;">Default PIN code: 1234</p>
        <input type="password" id="pin-input" value="1234" maxlength="4" style="width:100%; text-align:center; font-size:24px; padding:10px; border-radius:12px; border:1px solid #ccc; font-family:var(--font-fredoka);" />
      </div>

      <div class="card">
        <strong style="font-size:16px; display:block; margin-bottom:8px;">Step 2: Add Your Child</strong>
        <input type="text" id="child-name-input" placeholder="Child Name (e.g. Maryam)" style="width:100%; padding:12px; border-radius:12px; border:1px solid #ccc; font-family:var(--font-fredoka); margin-bottom:12px;" />
        
        <div style="display:flex; justify-content:center; gap:12px; margin-bottom:14px;">
          <label><input type="radio" name="gender" value="boy" checked /> Boy 👦</label>
          <label><input type="radio" name="gender" value="girl" /> Girl 👧</label>
        </div>

        <button class="btn-primary" id="btn-save-child">Save Child & Launch App! 🚀</button>
      </div>
    `,document.getElementById("btn-save-child").addEventListener("click",()=>{const t=document.getElementById("child-name-input").value.trim(),a=document.querySelector('input[name="gender"]:checked').value;t?(o.push({name:t,level:1,points:0,streak:1,title:"Good Deeds Explorer 🌟",gender:a}),s=0,d()):alert("Please enter your child's name!")});return}const i=o[s];if(l==="today")e.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <div style="display:flex; gap:6px;">
          ${o.map((t,a)=>`
            <button style="padding:4px 10px; border-radius:12px; border:none; font-family:var(--font-fredoka); font-size:11px; font-weight:700; background:${a===s?"var(--accent-gold)":"white"}; color:${a===s?"white":"var(--text-dark)"}; cursor:pointer;" onclick="switchChild(${a})">
              ${t.name}
            </button>
          `).join("")}
        </div>
        <span style="font-size:11px; font-weight:700; color:var(--text-gold); background:var(--soft-gold-bg); padding:4px 8px; border-radius:12px;">🔥 ${i.streak} Days</span>
      </div>

      <div class="card greeting-card">
        <div class="avatar-circle">
          ${u(i.gender)}
        </div>
        <div>
          <div style="font-size:13px; opacity:0.8;">Assalamu Alaikum!</div>
          <div style="font-size:22px; font-weight:700;">${i.name}</div>
          <div style="font-size:11px; background:rgba(255,255,255,0.25); padding:2px 8px; border-radius:10px; display:inline-block; margin-top:4px;">
            Level ${i.level} • ${i.title}
          </div>
        </div>
      </div>

      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size:16px;">🗺️ Today's Adventure Trail</strong>
          <span style="color:var(--primary-teal); font-weight:700; font-size:13px;">7 / 10 Completed</span>
        </div>
        <div class="trail-container">
          <div class="trail-node active">🌙</div>
          <div class="trail-node active">⭐</div>
          <div class="trail-node active">🕌</div>
          <div class="trail-node">🌳</div>
          <div class="trail-node">🏆</div>
        </div>
      </div>

      <button class="btn-primary" id="btn-start-checkin">
        <span>🌙</span> Start Nightly Check-In
      </button>
    `,document.getElementById("btn-start-checkin").addEventListener("click",()=>{alert("🌙 Starting Nightly Check-In Flow for "+i.name+"!")});else if(l==="journey")e.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">📅 My Good-Deed Journey</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Track ${i.name}'s growth and habits</p>

      <div class="card" style="background:linear-gradient(135deg, var(--primary-teal), #26a69a); color:white;">
        <div style="text-align:center; font-size:18px; font-weight:700; margin-bottom:12px;">August Summary 🌟</div>
        <div style="display:flex; justify-content:space-around; text-align:center;">
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${i.points}</div><div style="font-size:11px;">Points</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">87</div><div style="font-size:11px;">Good Deeds</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">6</div><div style="font-size:11px;">Rewards</div></div>
        </div>
      </div>
    `;else if(l==="rewards"){e.innerHTML=`
      <h2 style="font-size:22px; text-align:center; margin-bottom:6px;">🎁 Mystery Reward Card</h2>
      <div class="scratch-card">
        <div style="font-size:64px;">🍦</div>
        <div style="font-size:18px; font-weight:700; margin-top:8px;">Delicious Ice Cream Treat!</div>
        <div class="scratch-foil" id="scratch-foil">
          <span style="font-size:32px; margin-bottom:8px;">✨</span>
          <span>SCRATCH ME!</span>
        </div>
      </div>
    `;const t=document.getElementById("scratch-foil");t&&t.addEventListener("click",()=>{t.style.opacity="0",setTimeout(()=>t.style.display="none",400)})}else if(l==="learn"){const t=v[p];e.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">📖 Learn & Play Quests</h2>
      
      <!-- Quran Surahs (Male Qari) Card -->
      <div class="card" style="border:2px solid var(--primary-teal); background:#fff8e1;">
        <strong style="color:var(--primary-teal);">📖 Short Quran Surahs (Male Qari)</strong>
        <p style="font-size:12px; color:var(--text-muted); margin:4px 0 10px 0;">Listen & repeat short Juz Amma Surahs with Male Qari recitation.</p>
        <button class="btn-primary" id="btn-play-quran">🎙️ Play Male Qari Recitation</button>
        <div id="quran-audio-msg" style="text-align:center; font-size:12px; font-weight:700; color:var(--primary-teal); margin-top:6px;"></div>
      </div>

      <!-- Dua Recitation Challenge -->
      <div class="card" style="border:2px solid var(--accent-gold);">
        <strong style="color:var(--primary-teal);">🤲 Dua Hurdle Quest (Level ${p+1})</strong>
        <div style="text-align:center; margin:14px 0;">
          <div style="font-size:18px; font-weight:700;">${t.title}</div>
          <div style="font-size:20px; font-weight:700; color:var(--primary-teal); margin:8px 0;">${t.arabic}</div>
          <div style="font-size:12px; color:var(--text-muted);">"${t.transliteration}"</div>
        </div>
        <button class="btn-secondary" id="btn-recite-dua">🎤 Recite Dua Now</button>
        <div id="recitation-result" style="text-align:center; font-size:13px; font-weight:700; color:var(--text-gold); margin-top:8px;"></div>
      </div>
    `,document.getElementById("btn-play-quran").addEventListener("click",()=>{const a=document.getElementById("quran-audio-msg");a.innerText="🎙️ Reciting Surah Al-Fatiha in Male Qari Voice...",setTimeout(()=>{a.innerText="✨ MashaAllah! Completed Recitation!"},2e3)}),document.getElementById("btn-recite-dua").addEventListener("click",()=>{const a=document.getElementById("recitation-result");a.innerText="🎙️ Listening...",setTimeout(()=>{a.innerText="✨ MashaAllah! 88% Accuracy! Hurdle Overcome! 🎉"},1500)})}else l==="parent"&&(e.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">👨‍👩‍👧 Parent Dashboard</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Children Management & Settings</p>

      <div class="card">
        <strong style="display:block; margin-bottom:8px;">👶 Managed Children</strong>
        ${o.map((t,a)=>`
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span>${t.name} (${t.gender})</span>
            <button style="color:red; border:none; background:none; cursor:pointer;" onclick="deleteChild(${a})">Delete</button>
          </div>
        `).join("")}
        <button class="btn-secondary" style="margin-top:10px;" onclick="addAnotherChild()">+ Add Sibling / Child</button>
      </div>

      <div class="card">
        <strong style="display:block; margin-bottom:8px;">⚙️ Habit & Reward Customizer</strong>
        <p style="font-size:12px; color:var(--text-muted);">Customize positive deeds, habits to improve, and rewards.</p>
      </div>
    `)}window.switchChild=function(e){s=e,d()};window.deleteChild=function(e){o.splice(e,1),s=0,d()};window.addAnotherChild=function(){const e=prompt("Enter Sibling Name:");e&&(o.push({name:e,level:1,points:0,streak:1,title:"Good Deeds Explorer 🌟",gender:"boy"}),d())};document.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(i=>i.classList.remove("active")),e.classList.add("active"),l=e.dataset.tab,d()})});d();
