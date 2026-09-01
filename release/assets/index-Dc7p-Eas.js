(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();let d="today",o=[{id:"1",name:"Ahmad",level:1,points:120,streak:5,title:"Good deeds explorer 🌟",gender:"boy",skinTone:"#f5d0a0",hairColor:"#2c1d11",hairStyle:"short",wearsGlasses:!1,outfitColor:"#00897b",headwearColor:"#ffb300",hasHeadwear:!0,patternLock:"1-2-5-9"},{id:"2",name:"Maryam",level:2,points:210,streak:8,title:"Kindness champion 🌸",gender:"girl",skinTone:"#e0ac69",hairColor:"#0e0e0e",hairStyle:"long",wearsGlasses:!0,outfitColor:"#e91e63",headwearColor:"#81c784",hasHeadwear:!0,patternLock:"1-4-7-8"}],c=-1,u=[],x=!1,g=0,v=0,b=!1;const h=[{question:"Did you recite your morning Dua?",category:"Good deed",points:10,icon:"🤲"},{question:"Did you pray your Salah on time?",category:"Good deed",points:15,icon:"🕌"},{question:"Did you listen to your parents?",category:"Good deed",points:10,icon:"❤️"},{question:"Did you speak kindly to others?",category:"Good deed",points:10,icon:"💬"},{question:"Did you put your toys away?",category:"Good deed",points:10,icon:"🧸"},{question:"Did you fight or shout today?",category:"Thing to improve",points:-5,icon:"🌱",isImprovement:!0}],k=[{title:"Dua before eating 🍽️",arabic:"بِسْمِ اللهِ وَعَلَى بَرَكَةِ اللهِ",transliteration:"Bismillahi wa 'ala barakatillah"},{title:"Dua after meals 🍉",arabic:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا",transliteration:"Alhamdulillahilladhi at'amana wa saqana"},{title:"Dua before sleeping 🌙",arabic:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",transliteration:"Bismika Allahumma amutu wa ahya"},{title:"Dua for parents ❤️",arabic:"رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",transliteration:"Rabbir hamhuma kama rabbayani sagheera"}];function f(i="boy",e="#f5d0a0",t="#2c1d11",a="short",r=!1,n="#ffb300",l=!0){const p=l?i==="boy"?`<path d="M 20 44 A 30 30 0 0 1 80 44 Z" fill="${n}" />
           <line x1="20" y1="44" x2="80" y2="44" stroke="#ffffff" stroke-width="3" opacity="0.6" />`:`<path d="M 19 48 C 15 75 28 98 50 98 C 72 98 85 75 81 48 Z" fill="${n}" />
           <ellipse cx="50" cy="50" rx="21" ry="21" fill="${e}" />`:a==="long"||i==="girl"?`<ellipse cx="50" cy="42" rx="30" ry="30" fill="${t}" />
           <rect x="18" y="45" width="12" height="40" rx="6" fill="${t}" />
           <rect x="70" y="45" width="12" height="40" rx="6" fill="${t}" />`:`<path d="M 21 44 A 29 29 0 0 1 79 44 Z" fill="${t}" />`;return`
    <svg class="faceless-avatar-svg" viewBox="0 0 100 100">
      <!-- Collar shoulders base -->
      <path d="M 20 100 C 35 82 65 82 80 100 Z" fill="#00897b" />
      <!-- Neck -->
      <rect x="42" y="70" width="16" height="16" rx="6" fill="${e}" />
      <!-- Ears -->
      <circle cx="21" cy="50" r="5" fill="${e}" />
      <circle cx="79" cy="50" r="5" fill="${e}" />
      <!-- Head Circle -->
      <circle cx="50" cy="48" r="28" fill="${e}" />
      <!-- Hair or Headwear -->
      ${p}
      <!-- Faceless Glasses (No eyes or mouth) -->
      ${r?`<circle cx="38" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
       <circle cx="62" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
       <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />
       <line x1="30" y1="48" x2="22" y2="46" stroke="#37474f" stroke-width="3" />
       <line x1="70" y1="48" x2="78" y2="46" stroke="#37474f" stroke-width="3" />`:""}
    </svg>
  `}function s(){const i=document.getElementById("app-viewport");if(c===-1){i.innerHTML=`
      <div style="text-align:center; padding:10px 0;">
        <h2 style="font-size:22px; color:var(--text-dark);">🌟 Assalamu Alaikum!</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Who is logging in today?</p>
      </div>

      <!-- Grid of Kids -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:20px 0;">
        ${o.map((t,a)=>`
          <div class="card" style="text-align:center; cursor:pointer; padding:16px; border:2px solid transparent; transition:transform 0.2s;" onclick="selectKidFromGrid(${a})">
            <div style="width:72px; height:72px; margin:0 auto 10px auto;">
              ${f(t.gender,t.skinTone,t.hairColor,t.hairStyle,t.wearsGlasses,t.headwearColor,t.hasHeadwear)}
            </div>
            <strong style="font-size:16px; display:block; color:var(--text-dark);">${t.name}</strong>
            <span style="font-size:11px; color:var(--text-muted);">${t.streak} Days streak 🔥</span>
          </div>
        `).join("")}
      </div>

      <button class="btn-secondary" id="btn-open-add-child" style="margin-top:10px;">
        + Add new sibling / child
      </button>

      <!-- Parent Security Lock Area -->
      <div style="margin-top:24px; text-align:center; border-top:1px solid #eee; padding-top:16px;">
        <button style="border:none; background:none; color:var(--primary-teal); font-family:var(--font-fredoka); font-size:13px; font-weight:700; cursor:pointer;" id="btn-parent-login">
          👨‍👩‍👧 Parent dashboard PIN login
        </button>
      </div>
    `,document.getElementById("btn-open-add-child").addEventListener("click",()=>{openAddChildVisualModal()}),document.getElementById("btn-parent-login").addEventListener("click",()=>{const t=prompt("Enter 4-Digit Parent PIN (Default: 1234):");t==="1234"?(d="parent",c=0,s()):t&&alert("Incorrect PIN code!")});return}const e=o[c];if(e.requiresPatternLock){i.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="width:80px; height:80px; margin:0 auto 12px auto;">
          ${f(e.gender,e.skinTone,e.hairColor,e.hairStyle,e.wearsGlasses,e.headwearColor,e.hasHeadwear)}
        </div>
        <h2 style="font-size:20px; color:var(--text-dark);">Welcome back, ${e.name}! ⭐</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Connect 3+ stars to unlock your profile</p>
      </div>

      <!-- VISUAL 3x3 STAR PATTERN GRID -->
      <div class="card" style="text-align:center; padding:24px 12px;">
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; width:220px; margin:0 auto;" id="pattern-grid">
          ${[1,2,3,4,5,6,7,8,9].map(t=>`
            <div id="pattern-dot-${t}" class="pattern-dot" style="width:54px; height:54px; border-radius:50%; background:#f0f4f8; border:3px solid var(--primary-teal); display:flex; align-items:center; justify-content:center; font-size:20px; cursor:pointer; user-select:none; transition:all 0.2s;" onclick="tapPatternDot(${t})">
              ⭐
            </div>
          `).join("")}
        </div>
        <div style="margin-top:16px; font-size:12px; color:var(--text-muted);" id="pattern-status">Tap stars to connect pattern</div>
        <button class="btn-secondary" style="margin-top:14px; width:140px; padding:6px;" onclick="resetPatternDrawn()">Clear pattern</button>
      </div>

      <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:13px; margin-top:16px; cursor:pointer; width:100%; text-align:center;" onclick="cancelKidSelection()">
        ⬅️ Back to child selection
      </button>
    `;return}if(x){if(g<h.length){const t=h[g];i.innerHTML=`
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:13px; font-weight:700; color:var(--primary-teal);">🌙 Nightly check-in (${g+1}/${h.length})</span>
          <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:13px; cursor:pointer;" id="btn-cancel-checkin">Cancel</button>
        </div>

        <div class="card" style="text-align:center; padding:32px 18px; margin:20px 0; border:2px solid var(--primary-teal);">
          <div style="font-size:64px; margin-bottom:12px;">${t.icon}</div>
          <div style="font-size:12px; font-weight:700; color:var(--text-gold); text-transform:uppercase; letter-spacing:1px; margin-bottom:6px;">${t.category}</div>
          <h2 style="font-size:20px; font-weight:700; color:var(--text-dark); margin-bottom:16px;">${t.question}</h2>
        </div>

        <div style="display:flex; gap:12px;">
          <button class="btn-primary" style="flex:1; background:var(--primary-teal);" id="btn-answer-yes">
            ${t.isImprovement?"No, kept calm! 👍":"Yes, did it! 👍"}
          </button>
          <button class="btn-secondary" style="flex:1;" id="btn-answer-no">
            ${t.isImprovement?"A little 🌱":"Not today 🌱"}
          </button>
        </div>
      `,document.getElementById("btn-cancel-checkin").addEventListener("click",()=>{x=!1,s()}),document.getElementById("btn-answer-yes").addEventListener("click",()=>{v+=t.isImprovement?10:t.points,g++,s()}),document.getElementById("btn-answer-no").addEventListener("click",()=>{t.isImprovement?alert("🌱 We try our best every day, InshaAllah!"):alert("🌱 Tomorrow is another chance, InshaAllah!"),g++,s()});return}e.points+=v,b=!0,i.innerHTML=`
      <div style="text-align:center; padding:20px 0;">
        <div style="font-size:72px; margin-bottom:12px;">🎉</div>
        <h2 style="font-size:24px; font-weight:700; color:var(--text-dark);">MashaAllah! Check-in complete!</h2>
        <p style="font-size:14px; color:var(--primary-teal); font-weight:700; margin:6px 0 16px 0;">${e.name} earned +${v} good deed points today!</p>
        
        <div class="card" style="background:var(--soft-gold-bg); border:1px solid var(--accent-gold); text-align:center; margin-bottom:20px;">
          <div style="font-size:13px; color:var(--text-muted);">Total points</div>
          <div style="font-size:32px; font-weight:700; color:var(--text-gold);">${e.points} pts</div>
        </div>

        <button class="btn-primary" id="btn-finish-checkin">🎁 Open mystery scratch card</button>
      </div>
    `,document.getElementById("btn-finish-checkin").addEventListener("click",()=>{x=!1,d="rewards",s()});return}if(d==="today")i.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:12px; font-weight:700; padding:6px 12px; border-radius:12px; cursor:pointer;" onclick="cancelKidSelection()">
          🔁 Switch child
        </button>
        <span style="font-size:11px; font-weight:700; color:var(--text-gold); background:var(--soft-gold-bg); padding:4px 10px; border-radius:12px;">🔥 ${e.streak} Days streak</span>
      </div>

      <div class="card greeting-card">
        <div style="width:70px; height:70px; flex-shrink:0;">
          ${f(e.gender,e.skinTone,e.hairColor,e.hairStyle,e.wearsGlasses,e.headwearColor,e.hasHeadwear)}
        </div>
        <div>
          <div style="font-size:13px; opacity:0.8;">Assalamu Alaikum!</div>
          <div style="font-size:22px; font-weight:700;">${e.name}</div>
          <div style="font-size:11px; background:rgba(255,255,255,0.25); padding:2px 8px; border-radius:10px; display:inline-block; margin-top:4px;">
            Level ${e.level} • ${e.title}
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
    `,document.getElementById("btn-start-checkin").addEventListener("click",()=>{x=!0,g=0,v=0,s()});else if(d==="journey")i.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">📅 My good-deed journey</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Track ${e.name}'s growth and habits</p>

      <div class="card" style="background:linear-gradient(135deg, var(--primary-teal), #26a69a); color:white;">
        <div style="text-align:center; font-size:18px; font-weight:700; margin-bottom:12px;">August summary 🌟</div>
        <div style="display:flex; justify-content:space-around; text-align:center;">
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${e.points}</div><div style="font-size:11px;">Points</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">87</div><div style="font-size:11px;">Good deeds</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">6</div><div style="font-size:11px;">Rewards</div></div>
        </div>
      </div>

      <!-- Achievement Trend Bar Graph -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <strong style="font-size:15px;">📊 Achievement trend graph</strong>
          <span style="font-size:11px; color:var(--primary-teal); font-weight:700;">August 2026</span>
        </div>
        <div style="display:flex; justify-content:space-around; align-items:flex-end; height:100px; padding-top:10px;">
          <div style="text-align:center;"><div style="height:50px; width:28px; background:var(--primary-teal); border-radius:6px; margin:0 auto;"></div><span style="font-size:10px; display:block; margin-top:4px;">Wk 1</span></div>
          <div style="text-align:center;"><div style="height:65px; width:28px; background:var(--primary-teal); border-radius:6px; margin:0 auto;"></div><span style="font-size:10px; display:block; margin-top:4px;">Wk 2</span></div>
          <div style="text-align:center;"><div style="height:80px; width:28px; background:var(--primary-teal); border-radius:6px; margin:0 auto;"></div><span style="font-size:10px; display:block; margin-top:4px;">Wk 3</span></div>
          <div style="text-align:center;"><div style="height:95px; width:28px; background:var(--accent-gold); border-radius:6px; margin:0 auto;"></div><span style="font-size:10px; display:block; margin-top:4px;">Wk 4</span></div>
        </div>
      </div>

      <!-- Calendar Days Grid (Clickable) -->
      <div class="card">
        <strong style="font-size:15px; display:block; margin-bottom:12px;">📅 August calendar (Tap date for details)</strong>
        <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:6px; text-align:center;">
          ${Array.from({length:31},(t,a)=>a+1).map(t=>`
            <div style="background:${t<=24?"var(--soft-teal-bg)":"#f5f5f5"}; border-radius:8px; padding:6px 2px; cursor:pointer; font-size:11px; font-weight:700;" onclick="showDateDetails(${t})">
              ${t}<br>${t<=24?t%5===0?"🎁":"⭐":""}
            </div>
          `).join("")}
        </div>
      </div>
    `;else if(d==="rewards"){if(!b){i.innerHTML=`
        <div style="text-align:center; padding:30px 10px;">
          <div style="font-size:64px; margin-bottom:12px;">🔒</div>
          <h2 style="font-size:22px; font-weight:700; color:var(--text-dark);">Mystery gift locked!</h2>
          <p style="font-size:13px; color:var(--text-muted); margin:8px 0 20px 0; line-height:1.5;">Complete tonight's good-deed check-in first to calculate points and unlock your mystery scratch card!</p>
          <button class="btn-primary" onclick="startCheckInFromRewards()">🌙 Start nightly check-in now</button>
        </div>
      `;return}i.innerHTML=`
      <h2 style="font-size:22px; text-align:center; margin-bottom:6px;">🎁 Mystery reward card unlocked!</h2>
      <div class="scratch-card">
        <div style="font-size:64px;">🍦</div>
        <div style="font-size:18px; font-weight:700; margin-top:8px;">Delicious ice cream treat!</div>
        <div class="scratch-foil" id="scratch-foil">
          <span style="font-size:32px; margin-bottom:8px;">✨</span>
          <span>SCRATCH ME!</span>
        </div>
      </div>
    `;const t=document.getElementById("scratch-foil");t&&t.addEventListener("click",()=>{t.style.opacity="0",setTimeout(()=>t.style.display="none",400)})}else if(d==="learn"){const t=k[0];i.innerHTML=`
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
        <strong style="color:var(--primary-teal);">🤲 Dua hurdle quest</strong>
        <div style="text-align:center; margin:14px 0;">
          <div style="font-size:18px; font-weight:700;">${t.title}</div>
          <div style="font-size:20px; font-weight:700; color:var(--primary-teal); margin:8px 0;">${t.arabic}</div>
          <div style="font-size:12px; color:var(--text-muted);">"${t.transliteration}"</div>
        </div>
        <button class="btn-secondary" id="btn-recite-dua">🎤 Recite Dua now</button>
        <div id="recitation-result" style="text-align:center; font-size:13px; font-weight:700; color:var(--text-gold); margin-top:8px;"></div>
      </div>
    `,document.getElementById("btn-play-quran").addEventListener("click",()=>{const a=document.getElementById("quran-audio-msg");a.innerText="🎙️ Reciting Surah Al-Fatiha in Male Qari voice...",setTimeout(()=>{a.innerText="✨ MashaAllah! Completed recitation!"},2e3)}),document.getElementById("btn-recite-dua").addEventListener("click",()=>{const a=document.getElementById("recitation-result");a.innerText="🎙️ Listening...",setTimeout(()=>{a.innerText="✨ MashaAllah! 88% accuracy! Hurdle overcome! 🎉"},1500)})}else d==="parent"&&(i.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">👨‍👩‍👧 Parent dashboard</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Children management and settings</p>

      <div class="card">
        <strong style="display:block; margin-bottom:10px;">👶 Managed children grid</strong>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          ${o.map((t,a)=>`
            <div style="background:var(--soft-teal-bg); padding:10px; border-radius:16px; text-align:center;">
              <div style="width:54px; height:54px; margin:0 auto;">
                ${f(t.gender,t.skinTone,t.hairColor,t.hairStyle,t.wearsGlasses,t.headwearColor,t.hasHeadwear)}
              </div>
              <strong style="display:block; font-size:14px; margin-top:4px;">${t.name}</strong>
              <span style="font-size:10px; color:var(--text-muted);">${t.gender} • ${t.points} pts</span>
              <div style="margin-top:6px; display:flex; justify-content:center; gap:4px;">
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--primary-teal); color:white; cursor:pointer;" onclick="openAddChildVisualModal(${a})">🎨 Avatar</button>
              </div>
            </div>
          `).join("")}
        </div>
        <button class="btn-secondary" style="margin-top:14px;" onclick="openAddChildVisualModal()">+ Add new sibling or child</button>
      </div>
    `)}window.selectKidFromGrid=function(i){c=i;const e=o[i];e.patternLock?(e.requiresPatternLock=!0,u=[]):e.requiresPatternLock=!1,s()};window.tapPatternDot=function(i){if(!u.includes(i)){u.push(i);const a=document.getElementById(`pattern-dot-${i}`);a&&(a.style.background="var(--accent-gold)",a.style.borderColor="var(--accent-gold)",a.style.color="white")}const e=o[c],t=e.patternLock.split("-").map(Number);u.length>=t.length&&(u.join("-")===e.patternLock?(e.requiresPatternLock=!1,s(),alert(`✨ MashaAllah! Pattern unlocked for ${e.name}!`)):(alert("🔒 Pattern incorrect! Try again."),resetPatternDrawn()))};window.resetPatternDrawn=function(){u=[],[1,2,3,4,5,6,7,8,9].forEach(i=>{const e=document.getElementById(`pattern-dot-${i}`);e&&(e.style.background="#f0f4f8",e.style.borderColor="var(--primary-teal)",e.style.color="black")})};window.cancelKidSelection=function(){c=-1,s()};window.startCheckInFromRewards=function(){d="today",x=!0,g=0,v=0,s()};window.openAddChildVisualModal=function(i=-1){const e=i>=0?o[i]:null;let t=e?e.name:"",a=e?e.gender:"boy",r=e?e.skinTone:"#f5d0a0",n=e?e.hairStyle:"short",l=e?e.wearsGlasses:!1;const p=document.createElement("div");p.id="visual-avatar-modal",p.style.cssText="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px;",p.innerHTML=`
    <div style="background:white; border-radius:24px; max-width:380px; width:100%; padding:20px; box-shadow:0 10px 25px rgba(0,0,0,0.2); font-family:var(--font-fredoka);">
      <h3 style="font-size:18px; margin-bottom:12px; text-align:center; color:var(--text-dark);">🎨 Customize head avatar & child</h3>

      <div style="width:90px; height:90px; margin:0 auto 12px auto;" id="modal-avatar-preview">
        ${f(a,r,"#2c1d11",n,l,"#ffb300",!0)}
      </div>

      <!-- Child Name -->
      <label style="font-size:12px; font-weight:700; color:var(--text-dark);">Child name:</label>
      <input type="text" id="input-modal-name" value="${t}" placeholder="e.g. Maryam / Bilal" style="width:100%; padding:8px 12px; border-radius:12px; border:1px solid #ccc; font-family:var(--font-fredoka); margin:4px 0 12px 0;" />

      <!-- Gender Visual Swatch -->
      <label style="font-size:12px; font-weight:700; color:var(--text-dark);">1. Gender:</label>
      <div style="display:flex; gap:10px; margin:4px 0 12px 0;">
        <button style="flex:1; padding:8px; border-radius:12px; border:2px solid var(--primary-teal); background:${a==="boy"?"var(--primary-teal)":"white"}; color:${a==="boy"?"white":"black"}; font-family:var(--font-fredoka); cursor:pointer;" id="btn-modal-boy">Boy 👦</button>
        <button style="flex:1; padding:8px; border-radius:12px; border:2px solid var(--primary-teal); background:${a==="girl"?"var(--primary-teal)":"white"}; color:${a==="girl"?"white":"black"}; font-family:var(--font-fredoka); cursor:pointer;" id="btn-modal-girl">Girl 👧</button>
      </div>

      <!-- Skin Tone Palette Tiles -->
      <label style="font-size:12px; font-weight:700; color:var(--text-dark);">2. Skin tone palette:</label>
      <div style="display:flex; gap:10px; margin:4px 0 12px 0;">
        <div class="skin-tile" style="width:36px; height:36px; border-radius:50%; background:#f5d0a0; border:2px solid #ccc; cursor:pointer;" onclick="setModalSkin('#f5d0a0')"></div>
        <div class="skin-tile" style="width:36px; height:36px; border-radius:50%; background:#e0ac69; border:2px solid #ccc; cursor:pointer;" onclick="setModalSkin('#e0ac69')"></div>
        <div class="skin-tile" style="width:36px; height:36px; border-radius:50%; background:#c68642; border:2px solid #ccc; cursor:pointer;" onclick="setModalSkin('#c68642')"></div>
        <div class="skin-tile" style="width:36px; height:36px; border-radius:50%; background:#8d5524; border:2px solid #ccc; cursor:pointer;" onclick="setModalSkin('#8d5524')"></div>
      </div>

      <!-- Hair Style Visual Chips -->
      <label style="font-size:12px; font-weight:700; color:var(--text-dark);">3. Hair style:</label>
      <div style="display:flex; gap:10px; margin:4px 0 12px 0;">
        <button style="flex:1; padding:6px; border-radius:12px; border:1px solid #ccc; background:white; font-family:var(--font-fredoka); cursor:pointer;" id="btn-modal-short">Short 💇‍♂️</button>
        <button style="flex:1; padding:6px; border-radius:12px; border:1px solid #ccc; background:white; font-family:var(--font-fredoka); cursor:pointer;" id="btn-modal-long">Long 💇‍♀️</button>
      </div>

      <!-- Glasses Visual Tile -->
      <label style="font-size:12px; font-weight:700; color:var(--text-dark);">4. Glasses frame 👓:</label>
      <div style="display:flex; gap:10px; margin:4px 0 16px 0;">
        <button style="flex:1; padding:6px; border-radius:12px; border:1px solid #ccc; background:white; font-family:var(--font-fredoka); cursor:pointer;" id="btn-modal-noglasses">No glasses ❌</button>
        <button style="flex:1; padding:6px; border-radius:12px; border:1px solid #ccc; background:white; font-family:var(--font-fredoka); cursor:pointer;" id="btn-modal-glasses">Glasses 👓</button>
      </div>

      <div style="display:flex; gap:10px;">
        <button class="btn-secondary" style="flex:1;" onclick="closeModal()">Cancel</button>
        <button class="btn-primary" style="flex:1;" id="btn-modal-save">Save child 🚀</button>
      </div>
    </div>
  `,document.body.appendChild(p);const y=()=>{document.getElementById("modal-avatar-preview").innerHTML=f(a,r,"#2c1d11",n,l,"#ffb300",!0)};window.setModalSkin=m=>{r=m,y()},document.getElementById("btn-modal-boy").addEventListener("click",()=>{a="boy",y()}),document.getElementById("btn-modal-girl").addEventListener("click",()=>{a="girl",y()}),document.getElementById("btn-modal-short").addEventListener("click",()=>{n="short",y()}),document.getElementById("btn-modal-long").addEventListener("click",()=>{n="long",y()}),document.getElementById("btn-modal-noglasses").addEventListener("click",()=>{l=!1,y()}),document.getElementById("btn-modal-glasses").addEventListener("click",()=>{l=!0,y()}),window.closeModal=()=>{p.remove()},document.getElementById("btn-modal-save").addEventListener("click",()=>{const m=document.getElementById("input-modal-name").value.trim();if(!m){alert("Please enter your child's name!");return}i>=0?(o[i].name=m,o[i].gender=a,o[i].skinTone=r,o[i].hairStyle=n,o[i].wearsGlasses=l):(o.push({id:Date.now().toString(),name:m,level:1,points:0,streak:1,title:"Good deeds starter 🌟",gender:a,skinTone:r,hairColor:"#2c1d11",hairStyle:n,wearsGlasses:l,outfitColor:"#00897b",headwearColor:a==="boy"?"#ffb300":"#81c784",hasHeadwear:!0,patternLock:"1-2-5-9"}),c=o.length-1),p.remove(),s()})};window.showDateDetails=function(i){const e=o[c]?o[c].name:"Child",t=30+i*3%40,a=i%5===0?"🍦 Ice cream treat":"📖 Bedtime story";alert(`📅 Date: August ${i}, 2026
👶 Child: ${e}
🌟 Score Earned: +${t} pts
🎁 Unlocked Gift: ${a}

Completed Deeds:
• Morning Dua recited 👍
• Prayed Salah on time 🕌
• Helped clean up toys 🧸`)};document.querySelectorAll(".nav-item").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(e=>e.classList.remove("active")),i.classList.add("active"),d=i.dataset.tab,x=!1,s()})});s();
