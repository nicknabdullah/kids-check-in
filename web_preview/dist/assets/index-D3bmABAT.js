(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(l){if(l.ep)return;l.ep=!0;const o=i(l);fetch(l.href,o)}})();let y="today",v=2026,m=8,I=null;const A=["January","February","March","April","May","June","July","August","September","October","November","December"];let p=[{id:"1",name:"Ahmad",level:1,points:120,streak:5,title:"Good deeds explorer 🌟",gender:"boy",skinTone:"#f5d0a0",hairColor:"#0e0e0e",hairStyleIndex:1,eyeGlassesIndex:1,outfitColor:"#00897b",headwearColor:"#ffb300",hasHeadwear:!0,patternLock:null,claimedRewards:[{emoji:"🍦",title:"Delicious Ice Cream"},{emoji:"📖",title:"Choose Bedtime Story"}],checkInHistory:{"2026-08-05":{completed:!0,score:16,reward:{emoji:"🍦",title:"Delicious Ice Cream"},details:["Morning Dua recited 🤲","Prayed Salah on time 🕌","Helped clean up toys 🧸"]},"2026-08-10":{completed:!0,score:18,reward:{emoji:"📖",title:"Choose Bedtime Story"},details:["Said Bismillah before eating 🍽️","Gave Salam to family 💬","Listened to Mom ❤️"]},"2026-08-15":{completed:!0,score:20,reward:{emoji:"🤗",title:"Big Warm Bear Hug"},details:["Prayed Salah on time 🕌","Shared toys with sibling 🤝","Recited morning dua 🤲"]},"2026-08-20":{completed:!0,score:15,reward:{emoji:"🎮",title:"Extra Play Time"},details:["Put toys away 🧸","Gave Salam 💬","Listened to parents ❤️"]},"2026-08-25":{completed:!0,score:22,reward:{emoji:"🌳",title:"Family Outing"},details:["Prayed on time 🕌","Morning dua 🤲","Helped clean room 🤝"]},"2026-08-30":{completed:!0,score:19,reward:{emoji:"🍦",title:"Delicious Ice Cream"},details:["Bismillah before eating 🍽️","Gave Salam 💬","Listened to Mom ❤️"]}}},{id:"2",name:"Maryam",level:2,points:210,streak:8,title:"Kindness champion 🌸",gender:"girl",skinTone:"#e0ac69",hairColor:"#4a2e1b",hairStyleIndex:2,eyeGlassesIndex:1,outfitColor:"#e91e63",headwearColor:"#81c784",hasHeadwear:!0,patternLock:null,claimedRewards:[{emoji:"🤗",title:"Big Warm Bear Hug"},{emoji:"🌳",title:"Family Outing"}],checkInHistory:{"2026-08-04":{completed:!0,score:18,reward:{emoji:"🤗",title:"Big Warm Bear Hug"},details:["Gave Salam to family 💬","Prayed Salah on time 🕌","Helped clean up 🧸"]},"2026-08-12":{completed:!0,score:21,reward:{emoji:"🌳",title:"Family Outing"},details:["Morning Dua 🤲","Helped someone 🤝","Shared toys 🧸"]},"2026-08-18":{completed:!0,score:19,reward:{emoji:"📖",title:"Choose Bedtime Story"},details:["Bismillah before eating 🍽️","Prayed on time 🕌","Spoke kindly ❤️"]},"2026-08-28":{completed:!0,score:24,reward:{emoji:"🍦",title:"Delicious Ice Cream"},details:["Recited morning dua 🤲","Listened respectfully ❤️","Helped clean 🧸"]}}}],g=-1,D=!1,B="1234",h="",b=[],P=null,z=!1,T=!1,H=!1,L=!1,$=0,S=[];const C=[{emoji:"🤲",text:"Did you recite your morning dua?",points:3,positive:!0,isEnabled:!0},{emoji:"🍽️",text:"Did you say Bismillah before eating?",points:2,positive:!0,isEnabled:!0},{emoji:"💬",text:"Did you give Salam to family?",points:2,positive:!0,isEnabled:!0},{emoji:"🤝",text:"Did you help someone today?",points:3,positive:!0,isEnabled:!0},{emoji:"🕌",text:"Did you pray Salah on time?",points:4,positive:!0,isEnabled:!0},{emoji:"❤️",text:"Did you listen respectfully to parents?",points:3,positive:!0,isEnabled:!0},{emoji:"🧸",text:"Did you put your toys away?",points:2,positive:!0,isEnabled:!0},{emoji:"🕊️",text:"Did you fight or argue with anyone?",points:2,positive:!1,isEnabled:!0}];let k=[{emoji:"🍦",title:"Delicious Ice Cream",requiredPoints:50,probability:.25},{emoji:"📖",title:"Choose Bedtime Story",requiredPoints:40,probability:.3},{emoji:"🤗",title:"Big Warm Bear Hug",requiredPoints:30,probability:.35},{emoji:"🎮",title:"Extra Play Time",requiredPoints:60,probability:.15},{emoji:"🌳",title:"Family Outing",requiredPoints:100,probability:.05}],u="hairStyle",d={gender:"boy",skinTone:"#f5d0a0",hairColor:"#0e0e0e",hairStyleIndex:1,eyeGlassesIndex:1,headwearColor:"#ffb300"};const W=[{color:"#f5d0a0",name:"Fair"},{color:"#e0ac69",name:"Tan"},{color:"#c68642",name:"Olive"},{color:"#8d5524",name:"Bronze"},{color:"#5c3317",name:"Mahogany"}],Y=[{color:"#0e0e0e",name:"Black"},{color:"#4a2e1b",name:"Brown"},{color:"#d4a359",name:"Blonde"}],U=[{index:1,label:"Short Crop 💇‍♂️",emoji:"👦"},{index:2,label:"Curly Top 🦱",emoji:"🦱"},{index:3,label:"Spiky Cut 🧑",emoji:"🧑"},{index:4,label:"Buzz Cut 💈",emoji:"💈"},{index:5,label:"Side Part 👦",emoji:"👨"}],V=[{index:1,label:"Emerald Hijab 🧕",emoji:"🧕"},{index:2,label:"Rose Hijab 🌸",emoji:"🌸"},{index:3,label:"Crown Hijab 👑",emoji:"👑"},{index:4,label:"Twin Tails 👧",emoji:"👧"},{index:5,label:"Bob Cut 💇‍♀️",emoji:"💇‍♀️"}],Z=[{index:1,label:"Clean 🌟",emoji:"✨"},{index:2,label:"Round 👓",emoji:"👓"},{index:3,label:"Square 🤓",emoji:"🤓"},{index:4,label:"Shades 🕶️",emoji:"🕶️"},{index:5,label:"Star ⭐",emoji:"⭐"}];function R(t){if("speechSynthesis"in window){window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance(t);e.pitch=1.2,e.rate=.95,window.speechSynthesis.speak(e)}}function j(t="boy",e="#f5d0a0",i="#0e0e0e",n=1,l=1,o="#ffb300",a=!0){const s=t==="girl"?"#e91e63":"#00897b";let r="";if(t==="girl")if(a||n<=3){const c=n===2?"#ec407a":n===3?"#ffb300":"#4db6ac";r=`
        <circle cx="50" cy="48" r="34" fill="${c}" />
        <ellipse cx="50" cy="50" rx="22" ry="26" fill="${e}" />
        <path d="M 28 42 C 35 22 65 22 72 42 C 60 28 40 28 28 42 Z" fill="${c}" />
      `}else n===4?r=`
        <circle cx="22" cy="48" r="14" fill="${i}" />
        <circle cx="78" cy="48" r="14" fill="${i}" />
        <circle cx="50" cy="48" r="26" fill="${e}" />
        <circle cx="21" cy="50" r="5" fill="${e}" />
        <circle cx="79" cy="50" r="5" fill="${e}" />
        <path d="M 24 44 C 35 24 65 24 76 44 C 60 32 40 32 24 44 Z" fill="${i}" />
      `:r=`
        <circle cx="50" cy="46" r="30" fill="${i}" />
        <circle cx="50" cy="48" r="26" fill="${e}" />
      `;else{let c="";switch(n){case 2:c=`<circle cx="28" cy="25" r="9" fill="${i}" />
                    <circle cx="39" cy="23" r="9" fill="${i}" />
                    <circle cx="50" cy="21" r="9" fill="${i}" />
                    <circle cx="61" cy="23" r="9" fill="${i}" />
                    <circle cx="72" cy="25" r="9" fill="${i}" />`;break;case 3:c=`<path d="M 22 44 L 30 18 L 40 30 L 50 16 L 60 30 L 70 18 L 78 44 Z" fill="${i}" />`;break;case 4:c=`<path d="M 22 46 A 28 28 0 0 1 78 46 Z" fill="${i}" />`;break;case 5:c=`<path d="M 22 44 C 30 18 70 22 78 44 Z" fill="${i}" />`;break;case 1:default:c=`<path d="M 22 45 A 28 28 0 0 1 78 45 Z" fill="${i}" />`;break}r=`
      <circle cx="21" cy="50" r="5" fill="${e}" />
      <circle cx="79" cy="50" r="5" fill="${e}" />
      <circle cx="50" cy="48" r="27" fill="${e}" />
      ${c}
    `}let x="";switch(l){case 2:x=`<circle cx="38" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <circle cx="62" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;break;case 3:x=`<rect x="30" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <rect x="54" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;break;case 4:x=`<rect x="28" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <rect x="53" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <line x1="47" y1="45" x2="53" y2="45" stroke="#212121" stroke-width="3" />`;break;case 5:x=`<circle cx="38" cy="48" r="9" fill="#ffb300" />
                    <circle cx="62" cy="48" r="9" fill="#ffb300" />`;break}return`
    <svg class="faceless-avatar-svg" viewBox="0 0 100 100">
      <path d="M 15 100 C 30 75 70 75 85 100 Z" fill="${s}" />
      <rect x="40" y="65" width="20" height="15" fill="${e}" />
      ${r}
      ${x}
    </svg>
  `}window.tapPinKey=function(t){const e=document.getElementById(`pin-btn-${t}`);e&&(e.style.transform="scale(0.9)",e.style.background="var(--primary-teal)",e.style.color="white",setTimeout(()=>{e.style.transform="scale(1)",e.style.background="#f9f9f9",e.style.color="black"},150)),t==="C"?h="":t==="✓"?K():h.length<4&&(h+=t,h.length===4&&K()),q()};function K(){h===B?(D=!0,h="",y="parent",f(),N()):setTimeout(()=>{alert("Incorrect Parent PIN! Try PIN code: 1234"),h="",q()},150)}function q(){const t=document.getElementById("pin-display-bullets");t&&(t.innerHTML=[0,1,2,3].map(e=>`
      <div style="width:16px; height:16px; border-radius:50%; background:${e<h.length?"var(--primary-teal)":"#e0e0e0"}; border:2px solid ${e<h.length?"var(--primary-teal)":"#bdbdbd"};"></div>
    `).join(""))}function N(){const t=document.querySelector(".bottom-nav");if(!t)return;const e=g>=0;t.innerHTML=e?`
    <button class="nav-item ${y==="today"?"active":""}" data-tab="today" onclick="switchTab('today')">
      <span class="nav-icon">🌅</span>
      <span class="nav-label">Today</span>
    </button>
    <button class="nav-item ${y==="journey"?"active":""}" data-tab="journey" onclick="switchTab('journey')">
      <span class="nav-icon">📅</span>
      <span class="nav-label">Journey</span>
    </button>
    <button class="nav-item ${y==="rewards"?"active":""}" data-tab="rewards" onclick="switchTab('rewards')">
      <span class="nav-icon">🎁</span>
      <span class="nav-label">Rewards</span>
    </button>
    <button class="nav-item ${y==="learn"?"active":""}" data-tab="learn" onclick="switchTab('learn')">
      <span class="nav-icon">📖</span>
      <span class="nav-label">Learn</span>
    </button>
    <button class="nav-item ${y==="parent"?"active":""}" data-tab="parent" onclick="switchTab('parent')">
      <span class="nav-icon">👨‍👩‍👧</span>
      <span class="nav-label">Parent</span>
    </button>
  `:`
    <button class="nav-item ${y==="today"?"active":""}" data-tab="today" onclick="switchTab('today')">
      <span class="nav-icon">🏠</span>
      <span class="nav-label">Home</span>
    </button>
    <button class="nav-item ${y==="parent"?"active":""}" data-tab="parent" onclick="switchTab('parent')">
      <span class="nav-icon">👨‍👩‍👧</span>
      <span class="nav-label">Parent Menu</span>
    </button>
  `}window.switchTab=function(t){t==="parent"&&!D&&(h=""),y=t,f(),N()};function f(){const t=document.getElementById("app-viewport");if(N(),y==="parent"&&!D){t.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="font-size:54px; margin-bottom:8px;">🔒</div>
        <h2 style="font-size:22px; color:var(--text-dark);">Parent PIN Login</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Enter security code to access parent menu</p>
      </div>

      <div class="card" style="text-align:center; padding:24px 16px;">
        <div style="display:flex; justify-content:center; gap:12px; margin-bottom:20px;" id="pin-display-bullets">
          ${[0,1,2,3].map(i=>`
            <div style="width:16px; height:16px; border-radius:50%; background:${i<h.length?"var(--primary-teal)":"#e0e0e0"}; border:2px solid ${i<h.length?"var(--primary-teal)":"#bdbdbd"};"></div>
          `).join("")}
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; width:210px; margin:0 auto;" id="keypad">
          ${[1,2,3,4,5,6,7,8,9,"C",0,"✓"].map(i=>`
            <button id="pin-btn-${i}" class="pattern-dot" style="width:54px; height:54px; border-radius:18px; border:1px solid #ccc; font-size:20px; font-weight:700; background:#f9f9f9; cursor:pointer; transition:transform 0.15s ease;" onclick="window.tapPinKey('${i}')">
              ${i}
            </button>
          `).join("")}
        </div>
        <div style="margin-top:14px; font-size:12px; font-weight:bold; color:var(--primary-teal);">Default PIN: 1234</div>
      </div>
    `;return}if(y==="parent"&&D){t.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">👨‍👩‍👧 Parent dashboard</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Children management & security settings</p>

      <div class="card">
        <strong style="display:block; margin-bottom:10px;">👶 Managed children grid</strong>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          ${p.length>0?p.map((i,n)=>`
            <div style="background:var(--soft-teal-bg); padding:10px; border-radius:16px; text-align:center;">
              <div style="width:54px; height:54px; margin:0 auto;">
                ${j(i.gender,i.skinTone,i.hairColor,i.hairStyleIndex,i.eyeGlassesIndex,i.headwearColor,i.hasHeadwear)}
              </div>
              <strong style="display:block; font-size:14px; margin-top:4px;">${i.name}</strong>
              <div style="margin-top:6px; display:flex; justify-content:center; gap:4px;">
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--primary-teal); color:white; cursor:pointer;" onclick="openAddChildVisualModal(${n})">🎨 Avatar</button>
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--accent-gold); color:black; cursor:pointer;" onclick="resetChildPattern(${n})">🔒 Pattern</button>
              </div>
            </div>
          `).join(""):`
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
        ${C.map((i,n)=>`
          <div style="display:flex; align-items:center; gap:8px; padding:7px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:20px;">${i.emoji}</span>
            <div style="flex:1;">
              <div style="font-size:13px; font-weight:700; color:${i.isEnabled!==!1?"var(--text-dark)":"#aaa"};">${i.text}</div>
              <div style="font-size:10px; color:${i.positive?"var(--primary-teal)":"#e53935"};">${i.positive?"+":"-"}${i.points} pts</div>
            </div>
            <input type="checkbox" ${i.isEnabled!==!1?"checked":""} onchange="toggleDeed(${n})" style="width:18px; height:18px; cursor:pointer;">
            <button style="border:none; background:#ffebee; color:#e53935; border-radius:8px; padding:3px 7px; font-size:12px; cursor:pointer;" onclick="deleteDeed(${n})">🗑️</button>
          </div>
        `).join("")}
      </div>

      <!-- REWARDS -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <strong style="font-size:15px;">🎁 Rewards</strong>
          <button style="border:none; background:var(--primary-teal); color:white; border-radius:12px; padding:4px 12px; font-family:var(--font-fredoka); font-size:12px; cursor:pointer;" onclick="addRewardModal()">+ Add</button>
        </div>
        ${k.map((i,n)=>`
          <div style="display:flex; align-items:center; gap:8px; padding:7px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:22px;">${i.emoji}</span>
            <div style="flex:1;">
              <div style="font-size:13px; font-weight:700;">${i.title}</div>
              <div style="font-size:10px; color:var(--text-muted);">Requires ${i.requiredPoints} pts • ${Math.round(i.probability*100)}% chance</div>
            </div>
            <button style="border:none; background:#ffebee; color:#e53935; border-radius:8px; padding:3px 7px; font-size:12px; cursor:pointer;" onclick="deleteReward(${n})">🗑️</button>
          </div>
        `).join("")}
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
    `;return}if(g===-1){t.innerHTML=`
      <div style="text-align:center; padding:10px 0;">
        <h2 style="font-size:22px; color:var(--text-dark);">🌟 Assalamu Alaikum!</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Tap your profile avatar to log in</p>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:20px 0;">
        ${p.length>0?p.map((i,n)=>`
          <div class="card" style="text-align:center; cursor:pointer; padding:16px; border:2px solid transparent;" onclick="selectKidFromGrid(${n})">
            <div style="width:76px; height:76px; margin:0 auto 10px auto;">
              ${j(i.gender,i.skinTone,i.hairColor,i.hairStyleIndex,i.eyeGlassesIndex,i.headwearColor,i.hasHeadwear)}
            </div>
            <strong style="font-size:16px; display:block; color:var(--text-dark);">${i.name}</strong>
            <span style="font-size:11px; color:var(--text-muted);">${i.patternLock?"🔒 Pattern Set":"✨ Tap to create pattern"}</span>
          </div>
        `).join(""):`
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
    `;return}const e=p[g];if(e.requiresPatternLock||!e.patternLock){const i=!e.patternLock;t.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="width:76px; height:76px; margin:0 auto 10px auto;">
          ${j(e.gender,e.skinTone,e.hairColor,e.hairStyleIndex,e.eyeGlassesIndex,e.headwearColor,e.hasHeadwear)}
        </div>
        <h2 style="font-size:20px; color:var(--text-dark);">${z?"Confirm pattern ⭐":i?`Create pattern for ${e.name}`:`Welcome back, ${e.name}!`}</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">${z?"Draw pattern again to confirm!":"Drag your finger across stars to draw pattern"}</p>
      </div>

      <!-- VISUAL TOUCH-DRAG 3x3 PATTERN GRID WITH LINE DRAWING -->
      <div class="card" style="text-align:center; padding:24px 12px; position:relative;">
        <svg id="pattern-canvas" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;">
          <path id="pattern-path" d="" stroke="var(--accent-gold)" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; width:220px; margin:0 auto; position:relative; z-index:2;" id="pattern-grid">
          ${[1,2,3,4,5,6,7,8,9].map(n=>`
            <div id="pattern-dot-${n}" class="pattern-dot" data-num="${n}" style="width:54px; height:54px; border-radius:50%; background:#f0f4f8; border:3px solid var(--primary-teal); display:flex; align-items:center; justify-content:center; font-size:20px; cursor:pointer; user-select:none;">
              ⭐
            </div>
          `).join("")}
        </div>
        <button class="btn-secondary" style="margin-top:14px; width:140px; padding:6px;" onclick="resetPatternDrawn()">Clear pattern</button>
      </div>

      <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:13px; margin-top:16px; cursor:pointer; width:100%; text-align:center;" onclick="cancelKidSelection()">
        ⬅️ Back to child selection
      </button>
    `,setTimeout(X,100);return}if(H){const i=C.filter(a=>a.isEnabled!==!1),n=i[$],l=Math.round($/i.length*100);let o=0;S.forEach(a=>{a.deed.positive?a.answer==="full"?o+=a.deed.points:a.answer==="partial"&&(o+=Math.floor(a.deed.points/2)):a.answer==="full"&&(o-=a.deed.points)}),t.innerHTML=`
      <div style="text-align:center; padding:8px 0 14px 0;">
        <div style="font-size:13px; color:var(--primary-teal); font-weight:700;">🌙 How was your day, ${e.name}?</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Question ${$+1} of ${i.length}</div>
        <div style="height:6px; background:#e0e0e0; border-radius:6px; margin:10px 0;"><div style="height:6px; width:${l}%; background:var(--primary-teal); border-radius:6px;"></div></div>
      </div>
      <div class="card" style="text-align:center; padding:24px 20px; background:${n.positive?"linear-gradient(135deg,#e0f2f1,#fff)":"linear-gradient(135deg,#fff8e1,#fff)"}; border:2px solid ${n.positive?"#b2dfdb":"#ffe082"};">
        <div style="font-size:64px; margin-bottom:12px;">${n.emoji}</div>
        <p style="font-size:18px; font-weight:700; color:var(--text-dark); line-height:1.4;">${n.text}</p>
        <div style="font-size:12px; color:${n.positive?"var(--primary-teal)":"#e65100"}; margin-top:6px;">${n.positive?"+"+n.points:"-"+n.points} pts</div>
      </div>
      ${n.positive?`
        <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px;">
          <button class="btn-primary" style="background:linear-gradient(135deg,#43a047,#2e7d32);" onclick="window.checkInAnswer('full')">✅ Yes, Alhamdulillah! &nbsp;<span style="font-size:12px; opacity:0.8;">(+${n.points} pts)</span></button>
          <button class="btn-primary" style="background:linear-gradient(135deg,#fdd835,#f9a825); color:#333;" onclick="window.checkInAnswer('partial')">🙂 Tried today &nbsp;<span style="font-size:12px;">(+${Math.floor(n.points/2)} pts)</span></button>
          <button style="width:100%; padding:12px; border-radius:18px; border:2px solid #ccc; background:white; font-family:var(--font-fredoka); font-size:15px; font-weight:700; color:var(--text-muted); cursor:pointer;" onclick="window.checkInAnswer('no')">➖ Not today</button>
        </div>
      `:`
        <div style="display:flex; gap:10px; margin-top:14px;">
          <button class="btn-primary" style="flex:1; background:linear-gradient(135deg,#43a047,#2e7d32);" onclick="window.checkInAnswer('no')">🙂 No, Alhamdulillah!</button>
          <button class="btn-primary" style="flex:1; background:linear-gradient(135deg,#ef5350,#c62828);" onclick="window.checkInAnswer('full')">😕 Yes, happened</button>
        </div>
      `}

      <!-- Funky Live Running Score Badge Below Buttons -->
      <div style="margin-top:14px; text-align:center;">
        <div style="display:inline-block; padding:8px 18px; background:linear-gradient(135deg,#ffb300,#ff8f00); color:white; border-radius:20px; font-weight:700; font-size:14px; box-shadow:0 4px 12px rgba(255,179,0,0.35); text-shadow:0 1px 2px rgba(0,0,0,0.2); animation:pulse 1.5s infinite;">
          ✨ Running Score: ${o>=0?"+"+o:o} pts ⭐
        </div>
      </div>
    `;return}if(window.checkInAnswer=function(i){const n=C.filter(l=>l.isEnabled!==!1);S.push({index:$,deed:n[$],answer:i}),$++,$>=n.length&&(H=!1,L=!0),f()},L){let i=0;S.forEach(o=>{o.deed.positive?o.answer==="full"?i+=o.deed.points:o.answer==="partial"&&(i+=Math.floor(o.deed.points/2)):o.answer==="full"&&(i-=o.deed.points)}),window.currentCheckInReward||(window.currentCheckInReward=k[Math.floor(Math.random()*k.length)]);const n=window.currentCheckInReward,l=i>=15?{text:"MashaAllah! What an amazing day! 🌟",bg:"#e0f2f1",color:"#00897b"}:i>=8?{text:"Alhamdulillah! Keep it up tomorrow! 😊",bg:"#fff8e1",color:"#f9a825"}:{text:"It's okay. Tomorrow is another chance, InshaAllah. 🌱",bg:"#f5f5f5",color:"#78909c"};t.innerHTML=`
      <div style="text-align:center; padding:12px 0 8px 0;">
        <div style="font-size:48px;">🌟</div>
        <h2 style="font-size:22px; color:var(--text-dark); margin-top:4px;">What a Day, ${e.name}!</h2>
        <div style="font-size:36px; font-weight:700; color:var(--primary-teal); margin:4px 0;">+${i} pts</div>
        <div style="font-size:12px; font-weight:700; color:${l.color}; background:${l.bg}; padding:6px 14px; border-radius:12px; display:inline-block;">${l.text}</div>
      </div>

      <!-- INTERACTIVE REWARD UNLOCKED SCRATCH CARD -->
      <div class="card" style="background:linear-gradient(135deg,#fff8e1,#ffe082); border:2px dashed var(--accent-gold); text-align:center; padding:12px; margin-bottom:12px; position:relative; overflow:hidden;">
        <span style="font-size:10px; font-weight:700; color:#e65100; text-transform:uppercase; letter-spacing:1px;">🎁 You Earned a Mystery Reward!</span>
        <p style="font-size:11px; color:var(--text-dark); margin:2px 0 8px 0;">Scratch with your finger to discover your surprise!</p>
        
        <div style="position:relative; width:250px; height:110px; margin:0 auto; border-radius:14px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.15);">
          <!-- Hidden Prize beneath gold foil -->
          <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:white; display:flex; flex-direction:column; align-items:center; justify-content:center;">
            <div style="font-size:36px; margin:0;">${n.emoji}</div>
            <strong style="font-size:14px; color:var(--text-dark);">${n.title}</strong>
          </div>
          <!-- Scratchable foil canvas overlay -->
          <canvas id="checkin-scratch-canvas" style="position:absolute; top:0; left:0; width:100%; height:100%; cursor:pointer; touch-action:none;"></canvas>
        </div>
      </div>

      <div class="card" style="max-height:160px; overflow-y:auto;">
        ${S.map(o=>{const a=o.deed.positive?o.answer==="full"?o.deed.points:o.answer==="partial"?Math.floor(o.deed.points/2):0:o.answer==="full"?-o.deed.points:0,s=a>0?"#00897b":a<0?"#e53935":"#9e9e9e";return`<div style="display:flex; align-items:center; gap:10px; padding:6px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:20px;">${o.deed.emoji}</span>
            <span style="flex:1; font-size:12px;">${o.deed.text}</span>
            <span style="font-size:12px; font-weight:700; color:${s};">${a>0?"+"+a:a<0?a:"–"}</span>
          </div>`}).join("")}
      </div>

      <button class="btn-primary" style="margin-top:12px;" onclick="window.finishCheckIn(${i}, '${n.title}', '${n.emoji}')">🎁 Done — Save & See My Points!</button>
    `,setTimeout(()=>G("checkin-scratch-canvas"),100),window.finishCheckIn=function(o,a,s){const r=p[g];if(r){r.points+=Math.max(0,o),r.claimedRewards||(r.claimedRewards=[]),r.claimedRewards.push({emoji:s,title:a}),r.checkInHistory||(r.checkInHistory={});const x=S.filter(c=>c.deed.positive&&c.answer!=="no"||!c.deed.positive&&c.answer==="no").map(c=>`${c.deed.emoji} ${c.deed.text}`);r.checkInHistory["2026-09-01"]={completed:!0,score:o,reward:{emoji:s,title:a},details:x}}L=!1,window.currentCheckInReward=null,S=[],$=0,f()};return}if(y==="today"){const n=e.checkInHistory&&e.checkInHistory["2026-09-01"];t.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:12px; font-weight:700; padding:6px 12px; border-radius:12px; cursor:pointer;" onclick="cancelKidSelection()">
          🔁 Switch child
        </button>
        <div style="display:flex; gap:6px; align-items:center;">
          <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:11px; font-weight:700; padding:4px 8px; border-radius:10px; cursor:pointer;" onclick="openAppGuideModal()">❓ Guide</button>
          <span style="font-size:11px; font-weight:700; color:var(--text-gold); background:var(--soft-gold-bg); padding:4px 10px; border-radius:12px;">🔥 ${e.streak} Days streak</span>
        </div>
      </div>

      <div class="card greeting-card">
        <div style="width:70px; height:70px; flex-shrink:0;">
          ${j(e.gender,e.skinTone,e.hairColor,e.hairStyleIndex,e.eyeGlassesIndex,e.headwearColor,e.hasHeadwear)}
        </div>
        <div>
          <div style="font-size:13px; opacity:0.8;">Assalamu Alaikum!</div>
          <div style="font-size:22px; font-weight:700;">${e.name}</div>
          <div style="font-size:11px; background:rgba(255,255,255,0.25); padding:2px 8px; border-radius:10px; display:inline-block; margin-top:4px;">
            Level ${e.level} • ${e.title}
          </div>
        </div>
      </div>

      <!-- Quick Action Buttons: Change Avatar & Change Pattern Anytime -->
      <div style="display:flex; gap:10px; margin-bottom:16px;">
        <button style="flex:1; padding:10px; border-radius:16px; border:2px solid var(--soft-teal-bg); background:white; font-family:var(--font-fredoka); font-weight:700; font-size:12px; color:var(--primary-teal); cursor:pointer;" onclick="openAddChildVisualModal(${g})">
          🎨 Change avatar
        </button>
        <button style="flex:1; padding:10px; border-radius:16px; border:2px solid var(--soft-gold-bg); background:white; font-family:var(--font-fredoka); font-weight:700; font-size:12px; color:var(--text-gold); cursor:pointer;" onclick="changeChildPatternModal(${g})">
          🔒 Change pattern
        </button>
      </div>

      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size:16px;">🗺️ Today's adventure trail</strong>
          <span style="color:var(--primary-teal); font-weight:700; font-size:13px;">${n?"10 / 10":"7 / 10"} Completed</span>
        </div>
        <div class="trail-container">
          <div class="trail-node active">🌙</div>
          <div class="trail-node active">⭐</div>
          <div class="trail-node active">🕌</div>
          <div class="trail-node ${n?"active":""}">🌳</div>
          <div class="trail-node ${n?"active":""}">🏆</div>
        </div>
      </div>

      ${n?`
        <!-- TODAY CHECK-IN COMPLETED STATE CARD -->
        <div class="card" style="background:linear-gradient(135deg,#e0f2f1,#ffffff); border:2px solid var(--primary-teal); text-align:center; padding:18px;">
          <div style="font-size:42px; margin-bottom:4px;">🎉</div>
          <strong style="font-size:18px; color:var(--primary-teal); display:block;">Done, Alhamdulillah!</strong>
          <p style="font-size:12px; color:var(--text-dark); margin:4px 0 12px 0;">Today's check-in is complete!</p>

          <div style="display:flex; gap:8px; justify-content:center; margin-bottom:12px;">
            <div style="flex:1; background:white; padding:8px; border-radius:12px; border:1px solid #b2dfdb;">
              <span style="font-size:10px; color:var(--text-muted); display:block;">Points Achieved</span>
              <strong style="font-size:15px; color:var(--primary-teal);">+${n.score} pts ⭐</strong>
            </div>
            <div style="flex:1; background:white; padding:8px; border-radius:12px; border:1px solid #ffe082;">
              <span style="font-size:10px; color:var(--text-muted); display:block;">Reward Unlocked</span>
              <strong style="font-size:13px; color:#e65100;">${n.reward?n.reward.emoji+" "+n.reward.title:"🍦 Ice Cream"}</strong>
            </div>
          </div>

          <button class="btn-secondary" style="font-size:12px; padding:6px 14px;" id="btn-start-checkin">
            🔁 Redo / Update Nightly Check-In
          </button>
        </div>
      `:`
        <button class="btn-primary" id="btn-start-checkin">
          <span>🌙</span> Start nightly check-in
        </button>
      `}
    `;const l=document.getElementById("btn-start-checkin");l&&l.addEventListener("click",()=>{H=!0,L=!1,$=0,S=[],f()})}else if(y==="journey"){const i=new Date(v,m+1,0).getDate(),n=v===2026&&m===8;let l="";if(I&&I.month===m&&I.year===v){const o=I.day,a=`${v}-${String(m+1).padStart(2,"0")}-${String(o).padStart(2,"0")}`,s=e.checkInHistory&&e.checkInHistory[a];l=`
        <div class="card" style="background:linear-gradient(135deg,#e0f2f1,#fff); border:2px solid var(--primary-teal); position:relative; margin-top:12px;">
          <button style="position:absolute; top:10px; right:12px; border:none; background:none; font-size:16px; cursor:pointer; color:var(--text-muted);" onclick="window.closeDateDetails()">✖️</button>
          
          <div style="font-size:14px; font-weight:700; color:var(--primary-teal); margin-bottom:4px;">
            📅 Date: ${A[m]} ${o}, ${v}
          </div>

          ${s?`
            <div style="font-size:12px; font-weight:700; color:var(--primary-teal); margin-bottom:6px;">
              Done, Alhamdulillah! 🎉
            </div>
            <div style="display:flex; gap:10px; margin:8px 0;">
              <div style="background:white; padding:6px 12px; border-radius:10px; border:1px solid #b2dfdb;">
                <span style="font-size:10px; color:var(--text-muted); display:block;">Score Achieved</span>
                <strong style="font-size:14px; color:var(--primary-teal);">+${s.score} pts ⭐</strong>
              </div>
              <div style="background:white; padding:6px 12px; border-radius:10px; border:1px solid #ffe082;">
                <span style="font-size:10px; color:var(--text-muted); display:block;">Reward Unlocked</span>
                <strong style="font-size:12px; color:#e65100;">${s.reward?s.reward.emoji+" "+s.reward.title:"🍦 Treat"}</strong>
              </div>
            </div>
            ${s.details&&s.details.length>0?`
              <div style="font-size:11px; font-weight:700; color:var(--text-dark); margin-top:6px; margin-bottom:2px;">Completed Deeds:</div>
              <ul style="font-size:11px; color:var(--text-muted); padding-left:18px; margin:0;">
                ${s.details.map(r=>`<li>${r}</li>`).join("")}
              </ul>
            `:""}
          `:`
            <div style="font-size:12px; color:var(--text-muted); padding:6px 0;">
              🌱 No check-in recorded for this date.
            </div>
          `}
        </div>
      `}t.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">📅 My good-deed journey</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Track ${e.name}'s growth and habits</p>

      <div class="card" style="background:linear-gradient(135deg, var(--primary-teal), #26a69a); color:white;">
        <div style="text-align:center; font-size:18px; font-weight:700; margin-bottom:12px;">${A[m]} summary 🌟</div>
        <div style="display:flex; justify-content:space-around; text-align:center;">
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${e.points}</div><div style="font-size:11px;">Points</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">87</div><div style="font-size:11px;">Good deeds</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${(e.claimedRewards||[]).length}</div><div style="font-size:11px;">Rewards</div></div>
        </div>
      </div>

      <!-- Family Stars Leaderboard -->
      <div class="card">
        <strong style="font-size:15px; display:block; margin-bottom:10px;">🌟 Family Stars Leaderboard</strong>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${p.slice().sort((o,a)=>a.points-o.points).map((o,a)=>{const s=a===0?"🥇":a===1?"🥈":"🥉",r=["Kindness Champion 🌸","Dua Star 🤲","Helping Hero 🤝","Manners Explorer 🌟"],x=r[a%r.length];return`
              <div style="display:flex; align-items:center; gap:10px; background:${a===0?"var(--soft-gold-bg)":"#f9f9f9"}; padding:8px 12px; border-radius:14px; border:1px solid ${a===0?"var(--accent-gold)":"#eee"};">
                <span style="font-size:22px;">${s}</span>
                <div style="width:36px; height:36px; flex-shrink:0;">
                  ${j(o.gender,o.skinTone,o.hairColor,o.hairStyleIndex,o.eyeGlassesIndex,o.headwearColor,o.hasHeadwear)}
                </div>
                <div style="flex:1;">
                  <strong style="font-size:13px; display:block; color:var(--text-dark);">${o.name}</strong>
                  <span style="font-size:10px; color:var(--primary-teal); font-weight:700;">${x}</span>
                </div>
                <div style="font-size:14px; font-weight:700; color:var(--primary-teal);">${o.points} pts</div>
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- Achievement Trend LINE CHART Graph -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <strong style="font-size:15px;">📊 Achievement trend graph (Line Chart)</strong>
          <span style="font-size:11px; color:var(--primary-teal); font-weight:700;">${A[m]} ${v}</span>
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
          <strong style="font-size:15px; color:var(--text-dark);">${A[m]} ${v}</strong>
          <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:12px; font-weight:700; padding:4px 10px; border-radius:10px; cursor:pointer;" onclick="window.changeCalendarMonth(1)">Next ▶</button>
        </div>

        <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:6px; text-align:center;">
          ${Array.from({length:i},(o,a)=>a+1).map(o=>{const a=`${v}-${String(m+1).padStart(2,"0")}-${String(o).padStart(2,"0")}`,s=e.checkInHistory&&e.checkInHistory[a],r=n&&o===1;return`
              <div style="background:${r?"var(--accent-gold)":s?"var(--soft-teal-bg)":"#f5f5f5"}; color:${r?"white":"black"}; border-radius:8px; padding:6px 2px; cursor:pointer; font-size:11px; font-weight:700; border:${r?"2px solid #ff8f00":"none"};" onclick="window.showDateDetails(${o})">
                ${o}${r?" (Today)":""}<br>${s?"⭐":""}
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- INLINE POPUP / CARD FOR SELECTED DATE DETAILS -->
      ${l}
    `}else if(y==="rewards"){const i=e;i.claimedRewards||(i.claimedRewards=[]),t.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:4px;">🎁 Surprise Rewards</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">Earn points to unlock mystery scratch cards!</p>

      <div class="card" style="background:linear-gradient(135deg,#ff9800,#f57c00); color:white; text-align:center; padding:14px;">
        <div style="font-size:13px; opacity:0.9;">Your Available Points</div>
        <div style="font-size:32px; font-weight:700; color:#fff; text-shadow:0 2px 4px rgba(0,0,0,0.2);">⭐ ${i.points} Pts</div>
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
        <strong style="font-size:15px; display:block; margin-bottom:10px;">🏆 My Unlocked & Claimed Gifts (${i.claimedRewards.length})</strong>
        ${i.claimedRewards.length>0?i.claimedRewards.map(n=>`
          <div style="display:flex; align-items:center; gap:10px; padding:8px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:26px;">${n.emoji}</span>
            <div style="flex:1;">
              <strong style="font-size:13px; display:block;">${n.title}</strong>
              <span style="font-size:10px; color:var(--primary-teal); font-weight:700;">✅ Approved by Parents</span>
            </div>
            <span style="font-size:11px; background:var(--soft-teal-bg); color:var(--primary-teal); padding:3px 8px; border-radius:10px; font-weight:700;">Earned</span>
          </div>
        `).join(""):`
          <div style="text-align:center; padding:14px; color:var(--text-muted); font-size:13px;">
            No rewards claimed yet! Earn 40 points in nightly check-in to scratch your first card! 🌟
          </div>
        `}
      </div>
    `,setTimeout(G,100)}else y==="learn"&&(t.innerHTML=`
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
    `)}window.lockParentGate=function(){D=!1,g=-1,h="",f()};window.selectKidFromGrid=function(t){g=t;const e=p[t];b=[],z=!1,P=null,e.patternLock?e.requiresPatternLock=!0:(e.requiresPatternLock=!1,y="today",R(`Assalamu Alaikum ${e.name}! Let's see what you did today!`)),f()};window.resetChildPattern=function(t){p[t].patternLock=null,alert(`✨ Pattern lock reset for ${p[t].name}! They can draw a new pattern on login.`),f()};window.toggleDeed=function(t){C[t].isEnabled=!C[t].isEnabled,f()};window.deleteDeed=function(t){confirm(`Delete habit "${C[t].text}"?`)&&(C.splice(t,1),f())};window.addDeedModal=function(){const t=prompt('Habit name (e.g. "Did you share something today?"):');if(!t)return;const e=parseInt(prompt("Points (positive number):")||"2",10),i=confirm("Is this a POSITIVE habit? OK = Yes, Cancel = Negative (loses points)"),n=["⭐","🌟","✨","🤝","💬","❤️","🕌","🌙","🎯","🌱"];C.push({emoji:n[Math.floor(Math.random()*n.length)],text:t,points:Math.abs(e)||2,positive:i,isEnabled:!0}),f()};window.deleteReward=function(t){confirm(`Delete reward "${k[t].title}"?`)&&(k.splice(t,1),f())};window.addRewardModal=function(){const t=prompt('Reward name (e.g. "Pizza night 🍕"):');if(!t)return;const e=parseInt(prompt("Required points to unlock:")||"50",10),i=parseInt(prompt("Probability % (1-100):")||"25",10),n=["🎁","🏆","🍦","🍕","🎮","🌳","🎨","🤗","📖","⭐"];k.push({emoji:n[Math.floor(Math.random()*n.length)],title:t,requiredPoints:Math.abs(e)||50,probability:(Math.min(100,Math.abs(i))||25)/100}),f()};window.deleteChild=function(t){confirm(`Delete ${p[t].name}'s profile? This cannot be undone.`)&&(p.splice(t,1),g>=p.length&&(g=-1),f())};window.resetAllAppDataModal=function(){confirm(`⚠️ Are you sure you want to reset all app data?

This will permanently delete all children profiles, points, streaks, and restore the app to factory fresh settings.`)&&(p=[],g=-1,D=!1,B="1234",h="",alert("✨ MashaAllah! App has been reset to factory fresh state!"),f())};window.changeParentPinModal=function(){const t=prompt("Step 1: Enter new 4-Digit Parent PIN:");if(!t||t.length!==4){alert("PIN must be exactly 4 digits!");return}const e=prompt("Step 2: Re-enter new 4-Digit Parent PIN to confirm:");t===e?(B=t,alert("✨ MashaAllah! Parent PIN code updated successfully!"),f()):alert("❌ PINs do not match! Please try again.")};window.changeChildPatternModal=function(t){p[t].patternLock=null,g=t,b=[],P=null,z=!1,f()};function X(){const t=document.getElementById("pattern-grid"),e=document.getElementById("pattern-path");if(!t||!e)return;const i=document.querySelectorAll(".pattern-dot");function n(a){const s=a.getBoundingClientRect(),r=document.getElementById("pattern-canvas").getBoundingClientRect();return{x:s.left+s.width/2-r.left,y:s.top+s.height/2-r.top}}function l(){if(b.length<2){e.setAttribute("d","");return}let a="";b.forEach((s,r)=>{const x=document.getElementById(`pattern-dot-${s}`);if(x){const c=n(x);a+=r===0?`M ${c.x} ${c.y}`:` L ${c.x} ${c.y}`}}),e.setAttribute("d",a)}function o(a){const s=a.clientX||a.touches&&a.touches[0].clientX,r=a.clientY||a.touches&&a.touches[0].clientY;!s||!r||i.forEach(x=>{const c=x.getBoundingClientRect();if(s>=c.left&&s<=c.right&&r>=c.top&&r<=c.bottom){const O=parseInt(x.dataset.num);b.includes(O)||(b.push(O),x.style.background="var(--accent-gold)",x.style.borderColor="var(--accent-gold)",x.style.color="white",l())}})}t.addEventListener("pointerdown",a=>{T=!0,o(a)}),t.addEventListener("pointermove",a=>{T&&o(a)}),t.addEventListener("pointerup",()=>{T&&(T=!1,J())})}function J(){const t=p[g];if(t)if(t.patternLock)b.join("-")===t.patternLock?(t.requiresPatternLock=!1,y="today",f(),R(`Assalamu Alaikum ${t.name}! Let's see what you did today!`)):(alert("🔒 Pattern incorrect! Try again."),resetPatternDrawn());else{if(b.length<3){alert("Connect at least 3 stars!"),resetPatternDrawn();return}if(!z)P=b.join("-"),z=!0,alert("✨ Pattern recorded! Draw it again to confirm."),resetPatternDrawn(),f();else{const e=b.join("-");e===P?(t.patternLock=e,t.requiresPatternLock=!1,z=!1,P=null,y="today",f(),R(`Assalamu Alaikum ${t.name}! Let's see what you did today!`)):(alert("❌ Patterns do not match! Please try again."),z=!1,P=null,resetPatternDrawn(),f())}}}window.resetPatternDrawn=function(){b=[];const t=document.getElementById("pattern-path");t&&t.setAttribute("d",""),[1,2,3,4,5,6,7,8,9].forEach(e=>{const i=document.getElementById(`pattern-dot-${e}`);i&&(i.style.background="#f0f4f8",i.style.borderColor="var(--primary-teal)",i.style.color="black")})};window.cancelKidSelection=function(){g=-1,f()};window.openAddChildVisualModal=function(t=-1){const e=t>=0?p[t]:null;d={name:e?e.name:"",gender:e?e.gender:"boy",skinTone:e?e.skinTone:"#f5d0a0",hairColor:e?e.hairColor:"#0e0e0e",hairStyleIndex:e?e.hairStyleIndex:1,eyeGlassesIndex:e?e.eyeGlassesIndex:1,headwearColor:e?e.headwearColor:"#ffb300",hasHeadwear:!0},u="hairStyle";const i=document.createElement("div");i.id="visual-avatar-modal",i.style.cssText="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px;",i.innerHTML=`
    <div style="background:white; border-radius:24px; max-width:380px; width:100%; padding:20px; box-shadow:0 10px 25px rgba(0,0,0,0.2); font-family:var(--font-fredoka);" id="modal-content">
      <!-- Rendered dynamically -->
    </div>
  `,document.body.appendChild(i),M(t)};function M(t){const e=document.getElementById("modal-content");e&&(e.innerHTML=`
    <h3 style="font-size:18px; margin-bottom:12px; text-align:center; color:var(--text-dark);">🎨 Create your avatar</h3>

    <div style="width:110px; height:110px; margin:0 auto 14px auto;" id="modal-head-preview">
      ${j(d.gender,d.skinTone,d.hairColor,d.hairStyleIndex,d.eyeGlassesIndex,d.headwearColor,!0)}
    </div>

    <input type="text" id="input-modal-name" value="${d.name}" placeholder="Child's Name (e.g. Maryam / Bilal)" style="width:100%; padding:10px 14px; border-radius:14px; border:1px solid #ccc; font-family:var(--font-fredoka); margin-bottom:14px; text-align:center; font-size:15px; font-weight:700;" />

    <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px; margin-bottom:14px;">
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${u==="gender"?"var(--primary-teal)":"#f5f5f5"}; color:${u==="gender"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('gender', ${t})">
        <span style="font-size:18px;">👦👧</span><br><span style="font-size:9px; font-weight:700;">Gender</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${u==="hairStyle"?"var(--primary-teal)":"#f5f5f5"}; color:${u==="hairStyle"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('hairStyle', ${t})">
        <span style="font-size:18px;">💇‍♂️</span><br><span style="font-size:9px; font-weight:700;">Style</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${u==="hairColor"?"var(--primary-teal)":"#f5f5f5"}; color:${u==="hairColor"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('hairColor', ${t})">
        <span style="font-size:18px;">🎨</span><br><span style="font-size:9px; font-weight:700;">Color</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${u==="skinTone"?"var(--primary-teal)":"#f5f5f5"}; color:${u==="skinTone"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('skinTone', ${t})">
        <span style="font-size:18px;">🖐️</span><br><span style="font-size:9px; font-weight:700;">Skin</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${u==="eyeGlasses"?"var(--primary-teal)":"#f5f5f5"}; color:${u==="eyeGlasses"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('eyeGlasses', ${t})">
        <span style="font-size:18px;">👓</span><br><span style="font-size:9px; font-weight:700;">Glasses</span>
      </div>
    </div>

    <div style="background:#f9f9f9; padding:12px; border-radius:16px; margin-bottom:16px;">
      ${_(t)}
    </div>

    <div style="display:flex; gap:10px;">
      <button class="btn-secondary" style="flex:1;" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" style="flex:1;" id="btn-save-modal-child">Save avatar 🎨</button>
    </div>
  `,document.getElementById("btn-save-modal-child").addEventListener("click",()=>{const i=document.getElementById("input-modal-name").value.trim();if(!i){alert("Please enter your child's name!");return}t>=0?(p[t].name=i,p[t].gender=d.gender,p[t].skinTone=d.skinTone,p[t].hairColor=d.hairColor,p[t].hairStyleIndex=d.hairStyleIndex,p[t].eyeGlassesIndex=d.eyeGlassesIndex):(p.push({id:Date.now().toString(),name:i,level:1,points:0,streak:1,title:"Good deeds starter 🌟",gender:d.gender,skinTone:d.skinTone,hairColor:d.hairColor,hairStyleIndex:d.hairStyleIndex,eyeGlassesIndex:d.eyeGlassesIndex,outfitColor:d.gender==="girl"?"#e91e63":"#00897b",headwearColor:d.gender==="boy"?"#ffb300":"#81c784",hasHeadwear:!0,patternLock:null}),g=p.length-1),document.getElementById("visual-avatar-modal").remove(),f()}))}function _(t){if(u==="gender")return`
      <div style="display:flex; gap:12px;">
        <div style="flex:1; padding:12px; border-radius:14px; border:2px solid ${d.gender==="boy"?"var(--primary-teal)":"#ccc"}; background:${d.gender==="boy"?"var(--soft-teal-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGender('boy', ${t})">
          <div style="font-size:36px;">👦</div>
          <strong style="font-size:13px; display:block; margin-top:4px;">Boy</strong>
        </div>
        <div style="flex:1; padding:12px; border-radius:14px; border:2px solid ${d.gender==="girl"?"var(--primary-teal)":"#ccc"}; background:${d.gender==="girl"?"var(--soft-teal-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGender('girl', ${t})">
          <div style="font-size:36px;">👧</div>
          <strong style="font-size:13px; display:block; margin-top:4px;">Girl</strong>
        </div>
      </div>
    `;if(u==="hairStyle")return`
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${(d.gender==="girl"?V:U).map(i=>`
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${d.hairStyleIndex===i.index?"var(--accent-gold)":"#ccc"}; background:${d.hairStyleIndex===i.index?"var(--soft-gold-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalHairStyle(${i.index}, ${t})">
            <div style="font-size:24px;">${i.emoji}</div>
            <span style="font-size:9px; font-weight:700; display:block; margin-top:2px;">${i.label}</span>
          </div>
        `).join("")}
      </div>
    `;if(u==="hairColor")return`
      <div style="display:flex; justify-content:space-around; align-items:center;">
        ${Y.map(e=>`
          <div style="text-align:center; cursor:pointer;" onclick="selectModalHairColor('${e.color}', ${t})">
            <div style="width:44px; height:44px; border-radius:50%; background:${e.color}; border:3px solid ${d.hairColor===e.color?"var(--accent-gold)":"#ccc"}; margin:0 auto;"></div>
            <span style="font-size:10px; font-weight:700; display:block; margin-top:4px;">${e.name}</span>
          </div>
        `).join("")}
      </div>
    `;if(u==="skinTone")return`
      <div style="display:flex; justify-content:space-around;">
        ${W.map(e=>`
          <div style="width:40px; height:40px; border-radius:50%; background:${e.color}; border:3px solid ${d.skinTone===e.color?"var(--accent-gold)":"#ccc"}; cursor:pointer;" onclick="selectModalSkinTone('${e.color}', ${t})"></div>
        `).join("")}
      </div>
    `;if(u==="eyeGlasses")return`
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${Z.map(e=>`
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${d.eyeGlassesIndex===e.index?"var(--accent-gold)":"#ccc"}; background:${d.eyeGlassesIndex===e.index?"var(--soft-gold-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGlasses(${e.index}, ${t})">
            <div style="font-size:24px;">${e.emoji}</div>
            <span style="font-size:9px; font-weight:700; display:block; margin-top:2px;">${e.label}</span>
          </div>
        `).join("")}
      </div>
    `}window.setModalCategory=function(t,e){u=t,M(e)};window.selectModalGender=function(t,e){d.gender=t,M(e)};window.selectModalHairStyle=function(t,e){d.hairStyleIndex=t,M(e)};window.selectModalHairColor=function(t,e){d.hairColor=t,M(e)};window.selectModalSkinTone=function(t,e){d.skinTone=t,M(e)};window.selectModalGlasses=function(t,e){d.eyeGlassesIndex=t,M(e)};window.closeModal=function(){const t=document.getElementById("visual-avatar-modal");t&&t.remove()};window.showDateDetails=function(t){const e=p[g]?p[g].name:"Child",i=30+t*3%40,n=t%5===0?"🍦 Ice cream treat":"📖 Bedtime story";alert(`📅 Date: August ${t}, 2026
👶 Child: ${e}
🌟 Score Earned: +${i} pts
🎁 Unlocked Gift: ${n}

Completed Deeds:
• Morning Dua recited 👍
• Prayed Salah on time 🕌
• Helped clean up toys 🧸`)};function G(t="scratch-canvas"){const e=document.getElementById(t);if(!e)return;const i=e.getContext("2d");e.width=e.offsetWidth||260,e.height=e.offsetHeight||130,i.globalCompositeOperation="source-over";const n=i.createLinearGradient(0,0,e.width,e.height);n.addColorStop(0,"#ffd700"),n.addColorStop(.5,"#fff8e1"),n.addColorStop(1,"#ffb300"),i.fillStyle=n,i.fillRect(0,0,e.width,e.height),i.fillStyle="#5d4037",i.font="bold 13px Fredoka, sans-serif",i.textAlign="center",i.fillText("✨ Scratch to Discover Your Surprise! ✨",e.width/2,e.height/2+5);let l=!1;function o(s,r){i.globalCompositeOperation="destination-out",i.beginPath(),i.arc(s,r,20,0,Math.PI*2),i.fill()}function a(s){const r=e.getBoundingClientRect(),x=s.touches?s.touches[0].clientX:s.clientX,c=s.touches?s.touches[0].clientY:s.clientY;return{x:x-r.left,y:c-r.top}}e.onmousedown=s=>{l=!0;const r=a(s);o(r.x,r.y)},e.onmousemove=s=>{if(l){const r=a(s);o(r.x,r.y)}},window.onmouseup=()=>{l=!1},e.ontouchstart=s=>{l=!0;const r=a(s);o(r.x,r.y)},e.ontouchmove=s=>{if(l){const r=a(s);o(r.x,r.y)}},window.ontouchend=()=>{l=!1}}window.resetScratchFoil=function(){const t=k[Math.floor(Math.random()*k.length)],e=document.getElementById("scratch-prize-emoji"),i=document.getElementById("scratch-prize-title");e&&(e.innerText=t.emoji),i&&(i.innerText=t.title),G()};window.unlockScratchCardModal=function(){if(g<0)return;const t=p[g];if(t.points<40){alert(`⭐ You need 40 points to unlock a scratch card! Current points: ${t.points}`);return}t.points-=40;const e=k[Math.floor(Math.random()*k.length)];t.claimedRewards||(t.claimedRewards=[]),t.claimedRewards.push(e),alert(`🎉 MashaAllah! You unlocked "${e.emoji} ${e.title}"! (40 points used)`),f()};window.playDuaAudio=function(t,e){R(t)};let w=0;const E=[{icon:"🌟",title:"Welcome to Kids Good-Deeds",text:"A fun nightly adventure encouraging daily good deeds, Islamic manners, and family rituals without shaming or punishment."},{icon:"🎨",title:"Faceless Vector Avatars",text:"Adheres strictly to faceless visual rules! Customize gender, hijab/kufi colors, skin tone, hair style, and glasses."},{icon:"🌙",title:"Nightly Family Check-In",text:"Swipeable card deck flow with gentle encouragement. Earn points for positive habits, try again tomorrow for mistakes!"},{icon:"🎁",title:"Scratch-to-Reveal Rewards",text:"Children spend earned points to scratch surprise rewards customizable by parents (e.g. bedtime stories, ice cream)."},{icon:"👨‍👩‍👧",title:"Parent PIN & Pattern Locks",text:"Protect parent settings with a 4-digit PIN (default: 1234). Children use 3x3 star pattern locks to access their profiles."}];window.openAppGuideModal=function(){w=0;const t=document.createElement("div");t.id="guide-walkthrough-modal",t.style.cssText="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px;",t.innerHTML=`
    <div style="background:white; border-radius:24px; max-width:380px; width:100%; padding:24px; box-shadow:0 10px 25px rgba(0,0,0,0.2); font-family:var(--font-fredoka); text-align:center;" id="guide-modal-content">
      <!-- Content populated dynamically -->
    </div>
  `,document.body.appendChild(t),F()};function F(){const t=document.getElementById("guide-modal-content");if(!t)return;const e=E[w];t.innerHTML=`
    <div style="font-size:54px; margin-bottom:10px;">${e.icon}</div>
    <h3 style="font-size:18px; color:var(--text-dark); margin-bottom:8px;">${e.title}</h3>
    <p style="font-size:13px; color:var(--text-muted); line-height:1.5; margin-bottom:18px; min-height:60px;">${e.text}</p>

    <!-- Slide Indicators -->
    <div style="display:flex; justify-content:center; gap:6px; margin-bottom:20px;">
      ${E.map((i,n)=>`
        <div style="width:${n===w?"20px":"8px"}; height:8px; border-radius:4px; background:${n===w?"var(--primary-teal)":"#e0e0e0"}; transition:all 0.3s ease;"></div>
      `).join("")}
    </div>

    <div style="display:flex; gap:10px;">
      ${w>0?`
        <button class="btn-secondary" style="flex:1;" onclick="prevGuideSlide()">⬅️ Back</button>
      `:""}
      ${w<E.length-1?`
        <button class="btn-primary" style="flex:1;" onclick="nextGuideSlide()">Next ➡️</button>
      `:`
        <button class="btn-primary" style="flex:1; background:linear-gradient(135deg,#43a047,#2e7d32);" onclick="closeGuideModal()">Got it! 🚀</button>
      `}
    </div>
  `}window.nextGuideSlide=function(){w<E.length-1&&(w++,F())};window.prevGuideSlide=function(){w>0&&(w--,F())};window.changeCalendarMonth=function(t){m+=t,m<0?(m=11,v--):m>11&&(m=0,v++),I=null,f()};window.showDateDetails=function(t){I={day:t,month:m,year:v},f()};window.closeDateDetails=function(){I=null,f()};f();
