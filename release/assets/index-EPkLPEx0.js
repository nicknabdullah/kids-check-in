(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();let d="today",l=[],c=0,o=0,u=0;const g=[{title:"Dua Before Eating 🍽️",arabic:"بِسْمِ اللهِ وَعَلَى بَرَكَةِ اللهِ",transliteration:"Bismillahi wa 'ala barakatillah"},{title:"Dua After Meals 🍉",arabic:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا",transliteration:"Alhamdulillahilladhi at'amana wa saqana"},{title:"Dua Before Sleeping 🌙",arabic:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",transliteration:"Bismika Allahumma amutu wa ahya"},{title:"Dua For Parents ❤️",arabic:"رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",transliteration:"Rabbir hamhuma kama rabbayani sagheera"}],m=[{emoji:"🕌",title:"Welcome to Kids Good-Deeds!",subtitle:"Positive Islamic Habit Building",description:"Build daily Islamic manners, prayers, and kindness in a fun, encouraging environment with ZERO shaming or negative punishment.",cardColor:"#e0f2f1"},{emoji:"👦",title:"Faceless Avatars 🎨",subtitle:"Islamic Visual Guidelines",description:"Strictly adheres to faceless character rules (no eyes, nose, or mouth). Kids can customize outfits, skin tones, Kufi caps, Hijabs, and backpacks!",cardColor:"#fff8e1"},{emoji:"🌙",title:"Nightly Check-In Ritual 🗺️",subtitle:"Gentle Encouragement",description:'A guided 1-question card deck check-in. Positive deeds earn stars. Missed habits show gentle prompts: "Tomorrow is another chance, InshaAllah!"',cardColor:"#e1f5fe"},{emoji:"🎁",title:"Scratch Rewards & Games 🤲",subtitle:"Engaging Kids Quests",description:"Touch-to-scratch mystery reward cards, 80%+ accuracy Dua recitation hurdles, Arabic alphabet bubble pop, and sticker garden!",cardColor:"#f3e5f5"},{emoji:"👨‍👩‍👧",title:"Parent Controls & Pattern Locks 🔒",subtitle:"Full Security & Customization",description:"Protected by a 4-digit PIN lock. Parents customize habits, set reward drop rates, and assign secret 3x3 pattern locks for each child!",cardColor:"#e8f5e9"}];function v(t="boy",n="#00897b"){return`
    <svg class="faceless-avatar-svg" viewBox="0 0 100 100">
      <path d="M 25 100 L 35 62 Q 50 58 65 62 L 75 100 Z" fill="${n}" />
      <rect x="44" y="50" width="12" height="12" rx="4" fill="#f5d0a0" />
      <circle cx="50" cy="42" r="20" fill="#f5d0a0" />
      ${t==="boy"?'<path d="M 25 35 A 20 20 0 0 1 75 35 Z" fill="#ffb300" />':'<path d="M 22 45 C 18 65 30 80 50 80 C 70 80 82 65 78 45 Z" fill="#81c784" />'}
    </svg>
  `}function s(){const t=document.getElementById("app-viewport");if(l.length===0){if(o<5){const e=m[o];t.innerHTML=`
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:14px; font-weight:700; color:var(--primary-teal);">🌟 Welcome Guide (${o+1}/5)</span>
          <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:14px; font-weight:700; cursor:pointer;" id="btn-skip-walkthrough">Skip ➡️</button>
        </div>

        <div class="card" style="background:${e.cardColor}; text-align:center; padding:28px 18px; margin:16px 0;">
          <div style="font-size:64px; margin-bottom:12px;">${e.emoji}</div>
          <h2 style="font-size:20px; font-weight:700; color:var(--text-dark); margin-bottom:4px;">${e.title}</h2>
          <div style="font-size:12px; font-weight:700; color:var(--primary-teal); margin-bottom:12px;">${e.subtitle}</div>
          <p style="font-size:13px; color:var(--text-dark); line-height:1.5;">${e.description}</p>
        </div>

        <div style="display:flex; justify-content:center; gap:6px; margin-bottom:16px;">
          ${m.map((a,i)=>`
            <div style="width:${i===o?"24px":"8px"}; height:8px; border-radius:4px; background:${i===o?"var(--primary-teal)":"#ccc"}; transition:all 0.3s;"></div>
          `).join("")}
        </div>

        <button class="btn-primary" id="btn-next-walkthrough">
          ${o===4?"Get Started! 🚀":"Next ➡️"}
        </button>
      `,document.getElementById("btn-skip-walkthrough").addEventListener("click",()=>{o=5,s()}),document.getElementById("btn-next-walkthrough").addEventListener("click",()=>{o++,s()});return}t.innerHTML=`
      <div style="text-align:center; padding:6px 0;">
        <h2 style="font-size:22px; color:var(--text-dark);">🌟 Parent Setup</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Setup Parent PIN & Initial Child</p>
      </div>

      <div class="card" style="margin-top:10px;">
        <strong style="font-size:15px; display:block; margin-bottom:6px;">Step 1: Set Parent Security PIN</strong>
        <p style="font-size:11px; color:var(--text-muted); margin-bottom:8px;">Default PIN code: 1234</p>
        <input type="password" id="pin-input" value="1234" maxlength="4" style="width:100%; text-align:center; font-size:22px; padding:8px; border-radius:12px; border:1px solid #ccc; font-family:var(--font-fredoka);" />
      </div>

      <div class="card">
        <strong style="font-size:15px; display:block; margin-bottom:6px;">Step 2: Add Your Child</strong>
        <input type="text" id="child-name-input" placeholder="Child Name (e.g. Maryam)" style="width:100%; padding:10px; border-radius:12px; border:1px solid #ccc; font-family:var(--font-fredoka); margin-bottom:10px;" />
        
        <div style="display:flex; justify-content:center; gap:12px; margin-bottom:12px;">
          <label><input type="radio" name="gender" value="boy" checked /> Boy 👦</label>
          <label><input type="radio" name="gender" value="girl" /> Girl 👧</label>
        </div>

        <button class="btn-primary" id="btn-save-child">Save Child & Launch App! 🚀</button>
      </div>
    `,document.getElementById("btn-save-child").addEventListener("click",()=>{const e=document.getElementById("child-name-input").value.trim(),a=document.querySelector('input[name="gender"]:checked').value;e?(l.push({name:e,level:1,points:0,streak:1,title:"Good Deeds Explorer 🌟",gender:a}),c=0,s()):alert("Please enter your child's name!")});return}const n=l[c];if(d==="today")t.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <div style="display:flex; gap:6px;">
          ${l.map((e,a)=>`
            <button style="padding:4px 10px; border-radius:12px; border:none; font-family:var(--font-fredoka); font-size:11px; font-weight:700; background:${a===c?"var(--accent-gold)":"white"}; color:${a===c?"white":"var(--text-dark)"}; cursor:pointer;" onclick="switchChild(${a})">
              ${e.name}
            </button>
          `).join("")}
        </div>
        <span style="font-size:11px; font-weight:700; color:var(--text-gold); background:var(--soft-gold-bg); padding:4px 8px; border-radius:12px;">🔥 ${n.streak} Days</span>
      </div>

      <div class="card greeting-card">
        <div class="avatar-circle">
          ${v(n.gender)}
        </div>
        <div>
          <div style="font-size:13px; opacity:0.8;">Assalamu Alaikum!</div>
          <div style="font-size:22px; font-weight:700;">${n.name}</div>
          <div style="font-size:11px; background:rgba(255,255,255,0.25); padding:2px 8px; border-radius:10px; display:inline-block; margin-top:4px;">
            Level ${n.level} • ${n.title}
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
    `,document.getElementById("btn-start-checkin").addEventListener("click",()=>{alert("🌙 Starting Nightly Check-In Flow for "+n.name+"!")});else if(d==="journey")t.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">📅 My Good-Deed Journey</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Track ${n.name}'s growth and habits</p>

      <div class="card" style="background:linear-gradient(135deg, var(--primary-teal), #26a69a); color:white;">
        <div style="text-align:center; font-size:18px; font-weight:700; margin-bottom:12px;">August Summary 🌟</div>
        <div style="display:flex; justify-content:space-around; text-align:center;">
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${n.points}</div><div style="font-size:11px;">Points</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">87</div><div style="font-size:11px;">Good Deeds</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">6</div><div style="font-size:11px;">Rewards</div></div>
        </div>
      </div>
    `;else if(d==="rewards"){t.innerHTML=`
      <h2 style="font-size:22px; text-align:center; margin-bottom:6px;">🎁 Mystery Reward Card</h2>
      <div class="scratch-card">
        <div style="font-size:64px;">🍦</div>
        <div style="font-size:18px; font-weight:700; margin-top:8px;">Delicious Ice Cream Treat!</div>
        <div class="scratch-foil" id="scratch-foil">
          <span style="font-size:32px; margin-bottom:8px;">✨</span>
          <span>SCRATCH ME!</span>
        </div>
      </div>
    `;const e=document.getElementById("scratch-foil");e&&e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.style.display="none",400)})}else if(d==="learn"){const e=g[u];t.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">📖 Learn & Play Quests</h2>
      
      <!-- Quran Surahs Card -->
      <div class="card" style="border:2px solid var(--primary-teal); background:#fff8e1;">
        <strong style="color:var(--primary-teal);">📖 Short Quran Surahs (Male Qari)</strong>
        <p style="font-size:12px; color:var(--text-muted); margin:4px 0 10px 0;">Listen & repeat short Juz Amma Surahs with Male Qari recitation.</p>
        <button class="btn-primary" id="btn-play-quran">🎙️ Play Male Qari Recitation</button>
        <div id="quran-audio-msg" style="text-align:center; font-size:12px; font-weight:700; color:var(--primary-teal); margin-top:6px;"></div>
      </div>

      <!-- Dua Recitation Challenge -->
      <div class="card" style="border:2px solid var(--accent-gold);">
        <strong style="color:var(--primary-teal);">🤲 Dua Hurdle Quest (Level ${u+1})</strong>
        <div style="text-align:center; margin:14px 0;">
          <div style="font-size:18px; font-weight:700;">${e.title}</div>
          <div style="font-size:20px; font-weight:700; color:var(--primary-teal); margin:8px 0;">${e.arabic}</div>
          <div style="font-size:12px; color:var(--text-muted);">"${e.transliteration}"</div>
        </div>
        <button class="btn-secondary" id="btn-recite-dua">🎤 Recite Dua Now</button>
        <div id="recitation-result" style="text-align:center; font-size:13px; font-weight:700; color:var(--text-gold); margin-top:8px;"></div>
      </div>
    `,document.getElementById("btn-play-quran").addEventListener("click",()=>{const a=document.getElementById("quran-audio-msg");a.innerText="🎙️ Reciting Surah Al-Fatiha in Male Qari Voice...",setTimeout(()=>{a.innerText="✨ MashaAllah! Completed Recitation!"},2e3)}),document.getElementById("btn-recite-dua").addEventListener("click",()=>{const a=document.getElementById("recitation-result");a.innerText="🎙️ Listening...",setTimeout(()=>{a.innerText="✨ MashaAllah! 88% Accuracy! Hurdle Overcome! 🎉"},1500)})}else d==="parent"&&(t.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">👨‍gsub Parent Dashboard</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Children Management & Settings</p>

      <div class="card">
        <strong style="display:block; margin-bottom:8px;">👶 Managed Children</strong>
        ${l.map((e,a)=>`
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span>${e.name} (${e.gender})</span>
            <button style="color:red; border:none; background:none; cursor:pointer;" onclick="deleteChild(${a})">Delete</button>
          </div>
        `).join("")}
        <button class="btn-secondary" style="margin-top:10px;" onclick="addAnotherChild()">+ Add Sibling / Child</button>
      </div>

      <div class="card">
        <strong style="display:block; margin-bottom:8px;">⚙️ Habit & Reward Customizer</strong>
        <p style="font-size:12px; color:var(--text-muted);">Customize positive deeds, habits to improve, and rewards.</p>
        <button class="btn-secondary" style="margin-top:10px;" onclick="replayWalkthrough()">❓ Replay App Walkthrough Guide</button>
      </div>
    `)}window.replayWalkthrough=function(){o=0,l=[],s()};window.switchChild=function(t){c=t,s()};window.deleteChild=function(t){l.splice(t,1),c=0,s()};window.addAnotherChild=function(){const t=prompt("Enter Sibling Name:");t&&(l.push({name:t,level:1,points:0,streak:1,title:"Good Deeds Explorer 🌟",gender:"boy"}),s())};document.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),t.classList.add("active"),d=t.dataset.tab,s()})});s();
