(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const y of r.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&a(y)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();let l="today",d=[],p=0,s=0,u=!1,c=0,m=0;const g=[{question:"Did you recite your morning Dua?",category:"Good deed",points:10,icon:"🤲"},{question:"Did you pray your Salah on time?",category:"Good deed",points:15,icon:"🕌"},{question:"Did you listen to your parents?",category:"Good deed",points:10,icon:"❤️"},{question:"Did you speak kindly to others?",category:"Good deed",points:10,icon:"💬"},{question:"Did you put your toys away?",category:"Good deed",points:10,icon:"🧸"},{question:"Did you fight or shout today?",category:"Thing to improve",points:-5,icon:"🌱",isImprovement:!0}];let v=0;const h=[{title:"Dua before eating 🍽️",arabic:"بِسْمِ اللهِ وَعَلَى بَرَكَةِ اللهِ",transliteration:"Bismillahi wa 'ala barakatillah"},{title:"Dua after meals 🍉",arabic:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا",transliteration:"Alhamdulillahilladhi at'amana wa saqana"},{title:"Dua before sleeping 🌙",arabic:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",transliteration:"Bismika Allahumma amutu wa ahya"},{title:"Dua for parents ❤️",arabic:"رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",transliteration:"Rabbir hamhuma kama rabbayani sagheera"}],f=[{emoji:"🕌",title:"Welcome to Kids good-deeds!",subtitle:"Positive Islamic habit building",description:"Build daily Islamic manners, prayers, and kindness in a fun, encouraging environment with zero shaming or negative punishment.",cardColor:"#e0f2f1"},{emoji:"👦",title:"Faceless avatars 🎨",subtitle:"Islamic visual guidelines",description:"Strictly adheres to faceless character rules (no eyes, nose, or mouth). Kids can customize outfits, skin tones, Kufi caps, Hijabs, and backpacks!",cardColor:"#fff8e1"},{emoji:"🌙",title:"Nightly check-in ritual 🗺️",subtitle:"Gentle encouragement",description:'A guided 1-question card deck check-in. Positive deeds earn stars. Missed habits show gentle prompts: "Tomorrow is another chance, InshaAllah!"',cardColor:"#e1f5fe"},{emoji:"🎁",title:"Scratch rewards and games 🤲",subtitle:"Engaging kids quests",description:"Touch-to-scratch mystery reward cards, 80%+ accuracy Dua recitation hurdles, Arabic alphabet bubble pop, and sticker garden!",cardColor:"#f3e5f5"},{emoji:"👨‍👩‍👧",title:"Parent controls and pattern locks 🔒",subtitle:"Full security and customization",description:"Protected by a 4-digit PIN lock. Parents customize habits, set reward drop rates, and assign secret 3x3 pattern locks for each child!",cardColor:"#e8f5e9"}];function x(t="boy",n="#00897b"){return`
    <svg class="faceless-avatar-svg" viewBox="0 0 100 100">
      <path d="M 25 100 L 35 62 Q 50 58 65 62 L 75 100 Z" fill="${n}" />
      <rect x="44" y="50" width="12" height="12" rx="4" fill="#f5d0a0" />
      <circle cx="50" cy="42" r="20" fill="#f5d0a0" />
      ${t==="boy"?'<path d="M 25 35 A 20 20 0 0 1 75 35 Z" fill="#ffb300" />':'<path d="M 22 45 C 18 65 30 80 50 80 C 70 80 82 65 78 45 Z" fill="#81c784" />'}
    </svg>
  `}function o(){const t=document.getElementById("app-viewport");if(d.length===0){if(s<5){const e=f[s];t.innerHTML=`
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:14px; font-weight:700; color:var(--primary-teal);">🌟 Welcome guide (${s+1}/5)</span>
          <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:14px; font-weight:700; cursor:pointer;" id="btn-skip-walkthrough">Skip ➡️</button>
        </div>

        <div class="card" style="background:${e.cardColor}; text-align:center; padding:28px 18px; margin:16px 0;">
          <div style="font-size:64px; margin-bottom:12px;">${e.emoji}</div>
          <h2 style="font-size:20px; font-weight:700; color:var(--text-dark); margin-bottom:4px;">${e.title}</h2>
          <div style="font-size:12px; font-weight:700; color:var(--primary-teal); margin-bottom:12px;">${e.subtitle}</div>
          <p style="font-size:13px; color:var(--text-dark); line-height:1.5;">${e.description}</p>
        </div>

        <div style="display:flex; justify-content:center; gap:6px; margin-bottom:16px;">
          ${f.map((a,i)=>`
            <div style="width:${i===s?"24px":"8px"}; height:8px; border-radius:4px; background:${i===s?"var(--primary-teal)":"#ccc"}; transition:all 0.3s;"></div>
          `).join("")}
        </div>

        <button class="btn-primary" id="btn-next-walkthrough">
          ${s===4?"Get started! 🚀":"Next ➡️"}
        </button>
      `,document.getElementById("btn-skip-walkthrough").addEventListener("click",()=>{s=5,o()}),document.getElementById("btn-next-walkthrough").addEventListener("click",()=>{s++,o()});return}t.innerHTML=`
      <div style="text-align:center; padding:6px 0;">
        <h2 style="font-size:22px; color:var(--text-dark);">🌟 First-time parent setup</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Setup parent PIN and add your child</p>
      </div>

      <div class="card" style="margin-top:10px;">
        <strong style="font-size:15px; display:block; margin-bottom:6px;">Step 1: Set parent security PIN</strong>
        <p style="font-size:11px; color:var(--text-muted); margin-bottom:8px;">Default PIN code: 1234</p>
        <input type="password" id="pin-input" value="1234" maxlength="4" style="width:100%; text-align:center; font-size:22px; padding:8px; border-radius:12px; border:1px solid #ccc; font-family:var(--font-fredoka);" />
      </div>

      <div class="card">
        <strong style="font-size:15px; display:block; margin-bottom:6px;">Step 2: Add your child</strong>
        <input type="text" id="child-name-input" placeholder="Child name (e.g. Maryam)" style="width:100%; padding:10px; border-radius:12px; border:1px solid #ccc; font-family:var(--font-fredoka); margin-bottom:10px;" />
        
        <div style="display:flex; justify-content:center; gap:12px; margin-bottom:12px;">
          <label><input type="radio" name="gender" value="boy" checked /> Boy 👦</label>
          <label><input type="radio" name="gender" value="girl" /> Girl 👧</label>
        </div>

        <button class="btn-primary" id="btn-save-child">Save child & launch app! 🚀</button>
      </div>
    `,document.getElementById("btn-save-child").addEventListener("click",()=>{const e=document.getElementById("child-name-input").value.trim(),a=document.querySelector('input[name="gender"]:checked').value;e?(d.push({name:e,level:1,points:0,streak:1,title:"Good deeds explorer 🌟",gender:a}),p=0,o()):alert("Please enter your child's name!")});return}const n=d[p];if(u){if(c<g.length){const e=g[c];t.innerHTML=`
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:13px; font-weight:700; color:var(--primary-teal);">🌙 Nightly check-in (${c+1}/${g.length})</span>
          <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:13px; cursor:pointer;" id="btn-cancel-checkin">Cancel</button>
        </div>

        <div class="card" style="text-align:center; padding:32px 18px; margin:20px 0; border:2px solid var(--primary-teal);">
          <div style="font-size:64px; margin-bottom:12px;">${e.icon}</div>
          <div style="font-size:12px; font-weight:700; color:var(--text-gold); text-transform:uppercase; letter-spacing:1px; margin-bottom:6px;">${e.category}</div>
          <h2 style="font-size:20px; font-weight:700; color:var(--text-dark); margin-bottom:16px;">${e.question}</h2>
        </div>

        <div style="display:flex; gap:12px;">
          <button class="btn-primary" style="flex:1; background:var(--primary-teal);" id="btn-answer-yes">
            ${e.isImprovement?"No, kept calm! 👍":"Yes, did it! 👍"}
          </button>
          <button class="btn-secondary" style="flex:1;" id="btn-answer-no">
            ${e.isImprovement?"A little 🌱":"Not today 🌱"}
          </button>
        </div>
      `,document.getElementById("btn-cancel-checkin").addEventListener("click",()=>{u=!1,o()}),document.getElementById("btn-answer-yes").addEventListener("click",()=>{m+=e.isImprovement?10:e.points,c++,o()}),document.getElementById("btn-answer-no").addEventListener("click",()=>{e.isImprovement?alert("🌱 We try our best every day, InshaAllah!"):alert("🌱 Tomorrow is another chance, InshaAllah!"),c++,o()});return}n.points+=m,t.innerHTML=`
      <div style="text-align:center; padding:20px 0;">
        <div style="font-size:72px; margin-bottom:12px;">🎉</div>
        <h2 style="font-size:24px; font-weight:700; color:var(--text-dark);">MashaAllah! Check-in complete!</h2>
        <p style="font-size:14px; color:var(--primary-teal); font-weight:700; margin:6px 0 16px 0;">${n.name} earned +${m} good deed points today!</p>
        
        <div class="card" style="background:var(--soft-gold-bg); border:1px solid var(--accent-gold); text-align:center; margin-bottom:20px;">
          <div style="font-size:13px; color:var(--text-muted);">Total points</div>
          <div style="font-size:32px; font-weight:700; color:var(--text-gold);">${n.points} pts</div>
        </div>

        <button class="btn-primary" id="btn-finish-checkin">🎁 Open mystery scratch card</button>
      </div>
    `,document.getElementById("btn-finish-checkin").addEventListener("click",()=>{u=!1,l="rewards",o()});return}if(l==="today")t.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <div style="display:flex; gap:6px;">
          ${d.map((e,a)=>`
            <button style="padding:4px 10px; border-radius:12px; border:none; font-family:var(--font-fredoka); font-size:11px; font-weight:700; background:${a===p?"var(--accent-gold)":"white"}; color:${a===p?"white":"var(--text-dark)"}; cursor:pointer;" onclick="switchChild(${a})">
              ${e.name}
            </button>
          `).join("")}
        </div>
        <span style="font-size:11px; font-weight:700; color:var(--text-gold); background:var(--soft-gold-bg); padding:4px 8px; border-radius:12px;">🔥 ${n.streak} Days</span>
      </div>

      <div class="card greeting-card">
        <div class="avatar-circle">
          ${x(n.gender)}
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
          <strong style="font-size:16px;">🗺️ Today's adventure trail</strong>
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
        <span>🌙</span> Start nightly check-in
      </button>
    `,document.getElementById("btn-start-checkin").addEventListener("click",()=>{u=!0,c=0,m=0,o()});else if(l==="journey")t.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">📅 My good-deed journey</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Track ${n.name}'s growth and habits</p>

      <div class="card" style="background:linear-gradient(135deg, var(--primary-teal), #26a69a); color:white;">
        <div style="text-align:center; font-size:18px; font-weight:700; margin-bottom:12px;">Monthly summary 🌟</div>
        <div style="display:flex; justify-content:space-around; text-align:center;">
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${n.points}</div><div style="font-size:11px;">Points</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">87</div><div style="font-size:11px;">Good deeds</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">6</div><div style="font-size:11px;">Rewards</div></div>
        </div>
      </div>
    `;else if(l==="rewards"){t.innerHTML=`
      <h2 style="font-size:22px; text-align:center; margin-bottom:6px;">🎁 Mystery reward card</h2>
      <div class="scratch-card">
        <div style="font-size:64px;">🍦</div>
        <div style="font-size:18px; font-weight:700; margin-top:8px;">Delicious ice cream treat!</div>
        <div class="scratch-foil" id="scratch-foil">
          <span style="font-size:32px; margin-bottom:8px;">✨</span>
          <span>SCRATCH ME!</span>
        </div>
      </div>
    `;const e=document.getElementById("scratch-foil");e&&e.addEventListener("click",()=>{e.style.opacity="0",setTimeout(()=>e.style.display="none",400)})}else if(l==="learn"){const e=h[v];t.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">📖 Learn and play quests</h2>
      
      <!-- Quran Surahs Card -->
      <div class="card" style="border:2px solid var(--primary-teal); background:#fff8e1;">
        <strong style="color:var(--primary-teal);">📖 Short Quran surahs (Male Qari)</strong>
        <p style="font-size:12px; color:var(--text-muted); margin:4px 0 10px 0;">Listen and repeat short Juz Amma surahs with Male Qari recitation.</p>
        <button class="btn-primary" id="btn-play-quran">🎙️ Play Male Qari recitation</button>
        <div id="quran-audio-msg" style="text-align:center; font-size:12px; font-weight:700; color:var(--primary-teal); margin-top:6px;"></div>
      </div>

      <!-- Dua Recitation Challenge -->
      <div class="card" style="border:2px solid var(--accent-gold);">
        <strong style="color:var(--primary-teal);">🤲 Dua hurdle quest (Level ${v+1})</strong>
        <div style="text-align:center; margin:14px 0;">
          <div style="font-size:18px; font-weight:700;">${e.title}</div>
          <div style="font-size:20px; font-weight:700; color:var(--primary-teal); margin:8px 0;">${e.arabic}</div>
          <div style="font-size:12px; color:var(--text-muted);">"${e.transliteration}"</div>
        </div>
        <button class="btn-secondary" id="btn-recite-dua">🎤 Recite Dua now</button>
        <div id="recitation-result" style="text-align:center; font-size:13px; font-weight:700; color:var(--text-gold); margin-top:8px;"></div>
      </div>
    `,document.getElementById("btn-play-quran").addEventListener("click",()=>{const a=document.getElementById("quran-audio-msg");a.innerText="🎙️ Reciting Surah Al-Fatiha in Male Qari voice...",setTimeout(()=>{a.innerText="✨ MashaAllah! Completed recitation!"},2e3)}),document.getElementById("btn-recite-dua").addEventListener("click",()=>{const a=document.getElementById("recitation-result");a.innerText="🎙️ Listening...",setTimeout(()=>{a.innerText="✨ MashaAllah! 88% accuracy! Hurdle overcome! 🎉"},1500)})}else l==="parent"&&(t.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">👨‍👩‍👧 Parent dashboard</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Children management and settings</p>

      <div class="card">
        <strong style="display:block; margin-bottom:8px;">👶 Managed children</strong>
        ${d.map((e,a)=>`
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span>${e.name} (${e.gender})</span>
            <button style="color:red; border:none; background:none; cursor:pointer;" onclick="deleteChild(${a})">Delete</button>
          </div>
        `).join("")}
        <button class="btn-secondary" style="margin-top:10px;" onclick="addAnotherChild()">+ Add sibling or child</button>
      </div>

      <div class="card">
        <strong style="display:block; margin-bottom:8px;">⚙️ Habit and reward customizer</strong>
        <p style="font-size:12px; color:var(--text-muted);">Customize positive deeds, habits to improve, and rewards.</p>
        <button class="btn-secondary" style="margin-top:10px;" onclick="replayWalkthrough()">❓ Replay app walkthrough guide</button>
      </div>
    `)}window.replayWalkthrough=function(){s=0,d=[],u=!1,o()};window.switchChild=function(t){p=t,o()};window.deleteChild=function(t){d.splice(t,1),p=0,o()};window.addAnotherChild=function(){const t=prompt("Enter Sibling Name:");t&&(d.push({name:t,level:1,points:0,streak:1,title:"Good deeds explorer 🌟",gender:"boy"}),o())};document.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),t.classList.add("active"),l=t.dataset.tab,u=!1,o()})});o();
