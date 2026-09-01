(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();let c="today",s=[],l=0,d=0,u=!1,p=0,g=0;const y=[{question:"Did you recite your morning Dua?",category:"Good deed",points:10,icon:"🤲"},{question:"Did you pray your Salah on time?",category:"Good deed",points:15,icon:"🕌"},{question:"Did you listen to your parents?",category:"Good deed",points:10,icon:"❤️"},{question:"Did you speak kindly to others?",category:"Good deed",points:10,icon:"💬"},{question:"Did you put your toys away?",category:"Good deed",points:10,icon:"🧸"},{question:"Did you fight or shout today?",category:"Thing to improve",points:-5,icon:"🌱",isImprovement:!0}];let v=0;const h=[{title:"Dua before eating 🍽️",arabic:"بِسْمِ اللهِ وَعَلَى بَرَكَةِ اللهِ",transliteration:"Bismillahi wa 'ala barakatillah"},{title:"Dua after meals 🍉",arabic:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا",transliteration:"Alhamdulillahilladhi at'amana wa saqana"},{title:"Dua before sleeping 🌙",arabic:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",transliteration:"Bismika Allahumma amutu wa ahya"},{title:"Dua for parents ❤️",arabic:"رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",transliteration:"Rabbir hamhuma kama rabbayani sagheera"}],f=[{emoji:"🕌",title:"Welcome to Kids good-deeds!",subtitle:"Positive Islamic habit building",description:"Build daily Islamic manners, prayers, and kindness in a fun, encouraging environment with zero shaming or negative punishment.",cardColor:"#e0f2f1"},{emoji:"👦",title:"Faceless avatars 🎨",subtitle:"Islamic visual guidelines",description:"Strictly adheres to faceless character rules (no eyes, nose, or mouth). Kids can customize outfits, skin tones, Kufi caps, Hijabs, and backpacks!",cardColor:"#fff8e1"},{emoji:"🌙",title:"Nightly check-in ritual 🗺️",subtitle:"Gentle encouragement",description:'A guided 1-question card deck check-in. Positive deeds earn stars. Missed habits show gentle prompts: "Tomorrow is another chance, InshaAllah!"',cardColor:"#e1f5fe"},{emoji:"🎁",title:"Scratch rewards and games 🤲",subtitle:"Engaging kids quests",description:"Touch-to-scratch mystery reward cards, 80%+ accuracy Dua recitation hurdles, Arabic alphabet bubble pop, and sticker garden!",cardColor:"#f3e5f5"},{emoji:"👨‍👩‍👧",title:"Parent controls and pattern locks 🔒",subtitle:"Full security and customization",description:"Protected by a 4-digit PIN lock. Parents customize habits, set reward drop rates, and assign secret 3x3 pattern locks for each child!",cardColor:"#e8f5e9"}];function x(i="boy",e="#f5d0a0",t="#00897b",n="#ffb300",a=!0){const r=a?i==="boy"?`<path d="M 25 35 A 20 20 0 0 1 75 35 Z" fill="${n}" />`:`<path d="M 22 45 C 18 65 30 80 50 80 C 70 80 82 65 78 45 Z" fill="${n}" />`:'<path d="M 25 35 A 20 20 0 0 1 75 35 Z" fill="#2c1d11" />';return`
    <svg class="faceless-avatar-svg" viewBox="0 0 100 100">
      <path d="M 25 100 L 35 62 Q 50 58 65 62 L 75 100 Z" fill="${t}" />
      <rect x="44" y="50" width="12" height="12" rx="4" fill="${e}" />
      <circle cx="50" cy="42" r="20" fill="${e}" />
      ${r}
    </svg>
  `}function o(){const i=document.getElementById("app-viewport");if(s.length===0){if(d<5){const t=f[d];i.innerHTML=`
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:14px; font-weight:700; color:var(--primary-teal);">🌟 Welcome guide (${d+1}/5)</span>
          <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:14px; font-weight:700; cursor:pointer;" id="btn-skip-walkthrough">Skip ➡️</button>
        </div>

        <div class="card" style="background:${t.cardColor}; text-align:center; padding:28px 18px; margin:16px 0;">
          <div style="font-size:64px; margin-bottom:12px;">${t.emoji}</div>
          <h2 style="font-size:20px; font-weight:700; color:var(--text-dark); margin-bottom:4px;">${t.title}</h2>
          <div style="font-size:12px; font-weight:700; color:var(--primary-teal); margin-bottom:12px;">${t.subtitle}</div>
          <p style="font-size:13px; color:var(--text-dark); line-height:1.5;">${t.description}</p>
        </div>

        <div style="display:flex; justify-content:center; gap:6px; margin-bottom:16px;">
          ${f.map((n,a)=>`
            <div style="width:${a===d?"24px":"8px"}; height:8px; border-radius:4px; background:${a===d?"var(--primary-teal)":"#ccc"}; transition:all 0.3s;"></div>
          `).join("")}
        </div>

        <button class="btn-primary" id="btn-next-walkthrough">
          ${d===4?"Get started! 🚀":"Next ➡️"}
        </button>
      `,document.getElementById("btn-skip-walkthrough").addEventListener("click",()=>{d=5,o()}),document.getElementById("btn-next-walkthrough").addEventListener("click",()=>{d++,o()});return}i.innerHTML=`
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
    `,document.getElementById("btn-save-child").addEventListener("click",()=>{const t=document.getElementById("child-name-input").value.trim(),n=document.querySelector('input[name="gender"]:checked').value;t?(s.push({name:t,level:1,points:120,streak:5,title:"Good deeds explorer 🌟",gender:n,skinTone:"#f5d0a0",outfitColor:"#00897b",headwearColor:n==="boy"?"#ffb300":"#81c784"}),l=0,o()):alert("Please enter your child's name!")});return}const e=s[l];if(u){if(p<y.length){const t=y[p];i.innerHTML=`
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:13px; font-weight:700; color:var(--primary-teal);">🌙 Nightly check-in (${p+1}/${y.length})</span>
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
      `,document.getElementById("btn-cancel-checkin").addEventListener("click",()=>{u=!1,o()}),document.getElementById("btn-answer-yes").addEventListener("click",()=>{g+=t.isImprovement?10:t.points,p++,o()}),document.getElementById("btn-answer-no").addEventListener("click",()=>{t.isImprovement?alert("🌱 We try our best every day, InshaAllah!"):alert("🌱 Tomorrow is another chance, InshaAllah!"),p++,o()});return}e.points+=g,i.innerHTML=`
      <div style="text-align:center; padding:20px 0;">
        <div style="font-size:72px; margin-bottom:12px;">🎉</div>
        <h2 style="font-size:24px; font-weight:700; color:var(--text-dark);">MashaAllah! Check-in complete!</h2>
        <p style="font-size:14px; color:var(--primary-teal); font-weight:700; margin:6px 0 16px 0;">${e.name} earned +${g} good deed points today!</p>
        
        <div class="card" style="background:var(--soft-gold-bg); border:1px solid var(--accent-gold); text-align:center; margin-bottom:20px;">
          <div style="font-size:13px; color:var(--text-muted);">Total points</div>
          <div style="font-size:32px; font-weight:700; color:var(--text-gold);">${e.points} pts</div>
        </div>

        <button class="btn-primary" id="btn-finish-checkin">🎁 Open mystery scratch card</button>
      </div>
    `,document.getElementById("btn-finish-checkin").addEventListener("click",()=>{u=!1,c="rewards",o()});return}if(c==="today")i.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <div style="display:flex; gap:6px;">
          ${s.map((t,n)=>`
            <button style="padding:4px 10px; border-radius:12px; border:none; font-family:var(--font-fredoka); font-size:11px; font-weight:700; background:${n===l?"var(--accent-gold)":"white"}; color:${n===l?"white":"var(--text-dark)"}; cursor:pointer;" onclick="switchChild(${n})">
              ${t.name}
            </button>
          `).join("")}
        </div>
        <span style="font-size:11px; font-weight:700; color:var(--text-gold); background:var(--soft-gold-bg); padding:4px 8px; border-radius:12px;">🔥 ${e.streak} Days</span>
      </div>

      <div class="card greeting-card">
        <div class="avatar-circle">
          ${x(e.gender,e.skinTone,e.outfitColor,e.headwearColor)}
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
    `,document.getElementById("btn-start-checkin").addEventListener("click",()=>{u=!0,p=0,g=0,o()});else if(c==="journey")i.innerHTML=`
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
          ${Array.from({length:31},(t,n)=>n+1).map(t=>`
            <div style="background:${t<=24?"var(--soft-teal-bg)":"#f5f5f5"}; border-radius:8px; padding:6px 2px; cursor:pointer; font-size:11px; font-weight:700;" onclick="showDateDetails(${t})">
              ${t}<br>${t<=24?t%5===0?"🎁":"⭐":""}
            </div>
          `).join("")}
        </div>
      </div>
    `;else if(c==="rewards"){i.innerHTML=`
      <h2 style="font-size:22px; text-align:center; margin-bottom:6px;">🎁 Mystery reward card</h2>
      <div class="scratch-card">
        <div style="font-size:64px;">🍦</div>
        <div style="font-size:18px; font-weight:700; margin-top:8px;">Delicious ice cream treat!</div>
        <div class="scratch-foil" id="scratch-foil">
          <span style="font-size:32px; margin-bottom:8px;">✨</span>
          <span>SCRATCH ME!</span>
        </div>
      </div>
    `;const t=document.getElementById("scratch-foil");t&&t.addEventListener("click",()=>{t.style.opacity="0",setTimeout(()=>t.style.display="none",400)})}else if(c==="learn"){const t=h[v];i.innerHTML=`
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
          <div style="font-size:18px; font-weight:700;">${t.title}</div>
          <div style="font-size:20px; font-weight:700; color:var(--primary-teal); margin:8px 0;">${t.arabic}</div>
          <div style="font-size:12px; color:var(--text-muted);">"${t.transliteration}"</div>
        </div>
        <button class="btn-secondary" id="btn-recite-dua">🎤 Recite Dua now</button>
        <div id="recitation-result" style="text-align:center; font-size:13px; font-weight:700; color:var(--text-gold); margin-top:8px;"></div>
      </div>
    `,document.getElementById("btn-play-quran").addEventListener("click",()=>{const n=document.getElementById("quran-audio-msg");n.innerText="🎙️ Reciting Surah Al-Fatiha in Male Qari voice...",setTimeout(()=>{n.innerText="✨ MashaAllah! Completed recitation!"},2e3)}),document.getElementById("btn-recite-dua").addEventListener("click",()=>{const n=document.getElementById("recitation-result");n.innerText="🎙️ Listening...",setTimeout(()=>{n.innerText="✨ MashaAllah! 88% accuracy! Hurdle overcome! 🎉"},1500)})}else c==="parent"&&(i.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">👨‍👩‍👧 Parent dashboard</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Children management and settings</p>

      <div class="card">
        <strong style="display:block; margin-bottom:10px;">👶 Managed children grid</strong>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          ${s.map((t,n)=>`
            <div style="background:var(--soft-teal-bg); padding:10px; border-radius:16px; text-align:center;">
              <div style="width:48px; height:48px; margin:0 auto;">
                ${x(t.gender,t.skinTone,t.outfitColor,t.headwearColor)}
              </div>
              <strong style="display:block; font-size:14px; margin-top:4px;">${t.name}</strong>
              <span style="font-size:10px; color:var(--text-muted);">${t.gender} • ${t.points} pts</span>
              <div style="margin-top:6px; display:flex; justify-content:center; gap:4px;">
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--primary-teal); color:white; cursor:pointer;" onclick="customizeAvatar(${n})">🎨 Avatar</button>
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--accent-gold); color:white; cursor:pointer;" onclick="setPattern(${n})">🔒 Lock</button>
              </div>
            </div>
          `).join("")}
        </div>
        <button class="btn-secondary" style="margin-top:14px;" onclick="addAnotherChild()">+ Add sibling or child</button>
      </div>

      <div class="card">
        <strong style="display:block; margin-bottom:8px;">⚙️ Habit and reward customizer</strong>
        <p style="font-size:12px; color:var(--text-muted);">Customize positive deeds, habits to improve, and rewards.</p>
        <button class="btn-secondary" style="margin-top:10px;" onclick="replayWalkthrough()">❓ Replay app walkthrough guide</button>
      </div>
    `)}window.showDateDetails=function(i){const e=s[l]?s[l].name:"Child",t=30+i*3%40,n=i%5===0?"🍦 Ice cream treat":"📖 Bedtime story";alert(`📅 Date: August ${i}, 2026
👶 Child: ${e}
🌟 Score Earned: +${t} pts
🎁 Unlocked Gift: ${n}

Completed Deeds:
• Morning Dua recited 👍
• Prayed Salah on time 🕌
• Helped clean up toys 🧸`)};window.customizeAvatar=function(i){const e=s[i],t=prompt(`Choose Outfit Color for ${e.name}:
1. Emerald Teal (#00897b)
2. Royal Gold (#ffb300)
3. Sapphire Blue (#1e88e5)
4. Coral Pink (#e91e63)`,"#00897b");t&&(e.outfitColor=t,o(),alert(`✨ MashaAllah! ${e.name}'s avatar outfit saved!`))};window.setPattern=function(i){const e=s[i],t=prompt(`Set 3x3 Pattern Lock for ${e.name} (e.g. 1-2-5-9):`,"1-2-5-9");t&&(e.patternLock=t,alert(`🔒 Pattern lock saved for ${e.name}!`))};window.replayWalkthrough=function(){d=0,s=[],u=!1,o()};window.switchChild=function(i){l=i,o()};window.deleteChild=function(i){s.splice(i,1),l=0,o()};window.addAnotherChild=function(){const i=prompt("Enter Sibling Name:");i&&(s.push({name:i,level:1,points:0,streak:1,title:"Good deeds explorer 🌟",gender:"boy",skinTone:"#f5d0a0",outfitColor:"#00897b",headwearColor:"#ffb300"}),o())};document.querySelectorAll(".nav-item").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(e=>e.classList.remove("active")),i.classList.add("active"),c=i.dataset.tab,u=!1,o()})});o();
