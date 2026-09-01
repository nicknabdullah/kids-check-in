(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const r of d.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerPolicy&&(d.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?d.credentials="include":i.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(i){if(i.ep)return;i.ep=!0;const d=n(i);fetch(i.href,d)}})();let x="today",o=[{id:"1",name:"Ahmad",level:1,points:120,streak:5,title:"Good deeds explorer 🌟",gender:"boy",skinTone:"#f5d0a0",hairColor:"#0e0e0e",hairStyleIndex:1,eyeGlassesIndex:1,outfitColor:"#00897b",headwearColor:"#ffb300",hasHeadwear:!0,patternLock:"1-2-5-9"},{id:"2",name:"Maryam",level:2,points:210,streak:8,title:"Kindness champion 🌸",gender:"girl",skinTone:"#e0ac69",hairColor:"#4a2e1b",hairStyleIndex:4,eyeGlassesIndex:2,outfitColor:"#e91e63",headwearColor:"#81c784",hasHeadwear:!0,patternLock:"1-4-7-8"}],y=-1,k=!1,P="1234",g="",u=[],w=null,m=!1,C=!1,c="hairStyle",a={gender:"boy",skinTone:"#f5d0a0",hairColor:"#0e0e0e",hairStyleIndex:1,eyeGlassesIndex:1,headwearColor:"#ffb300"};const S=["#f5d0a0","#e0ac69","#c68642","#8d5524","#5c3317"],I=["#0e0e0e","#2c1d11","#4a2e1b","#b86b25","#8d4004"],G=[{index:1,label:"Crop 💇‍♂️",emoji:"👦"},{index:2,label:"Curly 🦱",emoji:"🦱"},{index:3,label:"Spiky 🧑",emoji:"🧑"},{index:4,label:"Long 💇‍♀️",emoji:"👧"},{index:5,label:"Buzz 💈",emoji:"💈"}],j=[{index:1,label:"Clean 🌟",emoji:"✨"},{index:2,label:"Round 👓",emoji:"👓"},{index:3,label:"Square 🤓",emoji:"🤓"},{index:4,label:"Shades 🕶️",emoji:"🕶️"},{index:5,label:"Star ⭐",emoji:"⭐"}];function $(t="boy",e="#f5d0a0",n="#0e0e0e",l=1,i=1,d="#ffb300",r=!0){let s="";if(r)s=t==="boy"?`<path d="M 20 44 A 30 30 0 0 1 80 44 Z" fill="${d}" />
         <line x1="20" y1="44" x2="80" y2="44" stroke="#ffffff" stroke-width="3" opacity="0.6" />`:`<path d="M 19 48 C 15 75 28 98 50 98 C 72 98 85 75 81 48 Z" fill="${d}" />
         <ellipse cx="50" cy="50" rx="21" ry="21" fill="${e}" />`;else switch(l){case 2:s=`<circle cx="28" cy="26" r="9" fill="${n}" />
                   <circle cx="39" cy="24" r="9" fill="${n}" />
                   <circle cx="50" cy="22" r="9" fill="${n}" />
                   <circle cx="61" cy="24" r="9" fill="${n}" />
                   <circle cx="72" cy="26" r="9" fill="${n}" />`;break;case 3:s=`<path d="M 22 44 L 30 18 L 40 30 L 50 16 L 60 30 L 70 18 L 78 44 Z" fill="${n}" />`;break;case 4:s=`<ellipse cx="50" cy="42" rx="30" ry="30" fill="${n}" />
                   <rect x="18" y="45" width="12" height="40" rx="6" fill="${n}" />
                   <rect x="70" y="45" width="12" height="40" rx="6" fill="${n}" />`;break;case 5:s=`<path d="M 21 46 A 29 29 0 0 1 79 46 Z" fill="${n}" />`;break;case 1:default:s=`<path d="M 21 44 A 29 29 0 0 1 79 44 Z" fill="${n}" />`;break}let f="";switch(i){case 2:f=`<circle cx="38" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <circle cx="62" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;break;case 3:f=`<rect x="30" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <rect x="54" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;break;case 4:f=`<rect x="28" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <rect x="53" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <line x1="47" y1="45" x2="53" y2="45" stroke="#212121" stroke-width="3" />`;break;case 5:f=`<circle cx="38" cy="48" r="9" fill="#ffb300" />
                    <circle cx="62" cy="48" r="9" fill="#ffb300" />`;break}return`
    <svg class="faceless-avatar-svg" viewBox="0 0 100 100">
      <path d="M 20 100 C 35 82 65 82 80 100 Z" fill="#00897b" />
      <rect x="42" y="70" width="16" height="16" rx="6" fill="${e}" />
      <circle cx="21" cy="50" r="5" fill="${e}" />
      <circle cx="79" cy="50" r="5" fill="${e}" />
      <circle cx="50" cy="48" r="28" fill="${e}" />
      ${s}
      ${f}
    </svg>
  `}window.tapPinKey=function(t){const e=document.getElementById(`pin-btn-${t}`);e&&(e.style.transform="scale(0.9)",e.style.background="var(--primary-teal)",e.style.color="white",setTimeout(()=>{e.style.transform="scale(1)",e.style.background="#f9f9f9",e.style.color="black"},150)),t==="C"?g="":t==="✓"?M():g.length<4&&(g+=t,g.length===4&&M()),T()};function M(){g===P?(k=!0,g="",p(),z()):setTimeout(()=>{alert("Incorrect Parent PIN! Try again."),g="",T()},150)}function T(){const t=document.getElementById("pin-display-bullets");t&&(t.innerHTML=[0,1,2,3].map(e=>`
      <div style="width:16px; height:16px; border-radius:50%; background:${e<g.length?"var(--primary-teal)":"#e0e0e0"}; border:2px solid ${e<g.length?"var(--primary-teal)":"#bdbdbd"};"></div>
    `).join(""))}function z(){const t=document.querySelector(".nav-bar");if(!t)return;const e=k&&y>=0;t.innerHTML=e?`
    <button class="nav-item ${x==="today"?"active":""}" data-tab="today" onclick="switchTab('today')">
      <span class="nav-icon">🌅</span>
      <span class="nav-label">Today</span>
    </button>
    <button class="nav-item ${x==="journey"?"active":""}" data-tab="journey" onclick="switchTab('journey')">
      <span class="nav-icon">📅</span>
      <span class="nav-label">Journey</span>
    </button>
    <button class="nav-item ${x==="rewards"?"active":""}" data-tab="rewards" onclick="switchTab('rewards')">
      <span class="nav-icon">🎁</span>
      <span class="nav-label">Rewards</span>
    </button>
    <button class="nav-item ${x==="parent"?"active":""}" data-tab="parent" onclick="switchTab('parent')">
      <span class="nav-icon">👨‍👩‍👧</span>
      <span class="nav-label">Parent</span>
    </button>
  `:`
    <button class="nav-item ${x==="today"?"active":""}" data-tab="today" onclick="switchTab('today')">
      <span class="nav-icon">🏠</span>
      <span class="nav-label">Home</span>
    </button>
    <button class="nav-item ${x==="parent"?"active":""}" data-tab="parent" onclick="switchTab('parent')">
      <span class="nav-icon">👨‍👩‍👧</span>
      <span class="nav-label">Parent Menu</span>
    </button>
  `}window.switchTab=function(t){t==="parent"&&!k&&(y=-1,g=""),x=t,p(),z()};function p(){const t=document.getElementById("app-viewport");if(z(),!k||x==="parent"&&!k){t.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="font-size:54px; margin-bottom:8px;">🔒</div>
        <h2 style="font-size:22px; color:var(--text-dark);">Parent PIN Login</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Enter security code to access parent menu</p>
      </div>

      <div class="card" style="text-align:center; padding:24px 16px;">
        <div style="display:flex; justify-content:center; gap:12px; margin-bottom:20px;" id="pin-display-bullets">
          ${[0,1,2,3].map(n=>`
            <div style="width:16px; height:16px; border-radius:50%; background:${n<g.length?"var(--primary-teal)":"#e0e0e0"}; border:2px solid ${n<g.length?"var(--primary-teal)":"#bdbdbd"};"></div>
          `).join("")}
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; width:210px; margin:0 auto;" id="keypad">
          ${[1,2,3,4,5,6,7,8,9,"C",0,"✓"].map(n=>`
            <button id="pin-btn-${n}" class="pattern-dot" style="width:54px; height:54px; border-radius:18px; border:1px solid #ccc; font-size:20px; font-weight:700; background:#f9f9f9; cursor:pointer; transition:transform 0.15s ease;" onclick="window.tapPinKey('${n}')">
              ${n}
            </button>
          `).join("")}
        </div>
        <div style="margin-top:14px; font-size:11px; color:var(--text-muted);">Default PIN: ${P}</div>
      </div>
    `;return}if(y===-1){t.innerHTML=`
      <div style="text-align:center; padding:10px 0;">
        <h2 style="font-size:22px; color:var(--text-dark);">🌟 Assalamu Alaikum!</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Tap your profile avatar to log in</p>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:20px 0;">
        ${o.map((n,l)=>`
          <div class="card" style="text-align:center; cursor:pointer; padding:16px; border:2px solid transparent;" onclick="selectKidFromGrid(${l})">
            <div style="width:76px; height:76px; margin:0 auto 10px auto;">
              ${$(n.gender,n.skinTone,n.hairColor,n.hairStyleIndex,n.eyeGlassesIndex,n.headwearColor,n.hasHeadwear)}
            </div>
            <strong style="font-size:16px; display:block; color:var(--text-dark);">${n.name}</strong>
            <span style="font-size:11px; color:var(--text-muted);">${n.patternLock?"🔒 Pattern Set":"✨ Tap to create pattern"}</span>
          </div>
        `).join("")}
      </div>

      <button class="btn-secondary" style="margin-top:6px;" onclick="openAddChildVisualModal()">
        + Add new sibling / child
      </button>

      <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:12px; margin-top:16px; width:100%; cursor:pointer;" onclick="lockParentGate()">
        🔒 Lock parent PIN gate
      </button>
    `;return}const e=o[y];if(e.requiresPatternLock||!e.patternLock){const n=!e.patternLock;t.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="width:76px; height:76px; margin:0 auto 10px auto;">
          ${$(e.gender,e.skinTone,e.hairColor,e.hairStyleIndex,e.eyeGlassesIndex,e.headwearColor,e.hasHeadwear)}
        </div>
        <h2 style="font-size:20px; color:var(--text-dark);">${m?"Confirm pattern ⭐":n?`Create pattern for ${e.name}`:`Welcome back, ${e.name}!`}</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">${m?"Draw pattern again to confirm!":"Drag your finger across stars to draw pattern"}</p>
      </div>

      <!-- VISUAL TOUCH-DRAG 3x3 PATTERN GRID WITH LINE DRAWING -->
      <div class="card" style="text-align:center; padding:24px 12px; position:relative;">
        <svg id="pattern-canvas" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;">
          <path id="pattern-path" d="" stroke="var(--accent-gold)" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; width:220px; margin:0 auto; position:relative; z-index:2;" id="pattern-grid">
          ${[1,2,3,4,5,6,7,8,9].map(l=>`
            <div id="pattern-dot-${l}" class="pattern-dot" data-num="${l}" style="width:54px; height:54px; border-radius:50%; background:#f0f4f8; border:3px solid var(--primary-teal); display:flex; align-items:center; justify-content:center; font-size:20px; cursor:pointer; user-select:none;">
              ⭐
            </div>
          `).join("")}
        </div>
        <button class="btn-secondary" style="margin-top:14px; width:140px; padding:6px;" onclick="resetPatternDrawn()">Clear pattern</button>
      </div>

      <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:13px; margin-top:16px; cursor:pointer; width:100%; text-align:center;" onclick="cancelKidSelection()">
        ⬅️ Back to child selection
      </button>
    `,setTimeout(A,100);return}x==="today"?(t.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:12px; font-weight:700; padding:6px 12px; border-radius:12px; cursor:pointer;" onclick="cancelKidSelection()">
          🔁 Switch child
        </button>
        <span style="font-size:11px; font-weight:700; color:var(--text-gold); background:var(--soft-gold-bg); padding:4px 10px; border-radius:12px;">🔥 ${e.streak} Days streak</span>
      </div>

      <div class="card greeting-card">
        <div style="width:70px; height:70px; flex-shrink:0;">
          ${$(e.gender,e.skinTone,e.hairColor,e.hairStyleIndex,e.eyeGlassesIndex,e.headwearColor,e.hasHeadwear)}
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
        <button style="flex:1; padding:10px; border-radius:16px; border:2px solid var(--soft-teal-bg); background:white; font-family:var(--font-fredoka); font-weight:700; font-size:12px; color:var(--primary-teal); cursor:pointer;" onclick="openAddChildVisualModal(${y})">
          🎨 Change avatar
        </button>
        <button style="flex:1; padding:10px; border-radius:16px; border:2px solid var(--soft-gold-bg); background:white; font-family:var(--font-fredoka); font-weight:700; font-size:12px; color:var(--text-gold); cursor:pointer;" onclick="changeChildPatternModal(${y})">
          🔒 Change pattern
        </button>
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
    `,document.getElementById("btn-start-checkin").addEventListener("click",()=>{p()})):x==="journey"?t.innerHTML=`
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

      <!-- Achievement Trend LINE CHART Graph -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <strong style="font-size:15px;">📊 Achievement trend graph (Line Chart)</strong>
          <span style="font-size:11px; color:var(--primary-teal); font-weight:700;">August 2026</span>
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

      <div class="card">
        <strong style="font-size:15px; display:block; margin-bottom:12px;">📅 August calendar (Tap date for details)</strong>
        <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:6px; text-align:center;">
          ${Array.from({length:31},(n,l)=>l+1).map(n=>`
            <div style="background:${n<=24?"var(--soft-teal-bg)":"#f5f5f5"}; border-radius:8px; padding:6px 2px; cursor:pointer; font-size:11px; font-weight:700;" onclick="showDateDetails(${n})">
              ${n}<br>${n<=24?n%5===0?"🎁":"⭐":""}
            </div>
          `).join("")}
        </div>
      </div>
    `:x==="parent"&&(t.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">👨‍👩‍👧 Parent dashboard</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Children management & security settings</p>

      <div class="card">
        <strong style="display:block; margin-bottom:10px;">👶 Managed children grid</strong>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          ${o.map((n,l)=>`
            <div style="background:var(--soft-teal-bg); padding:10px; border-radius:16px; text-align:center;">
              <div style="width:54px; height:54px; margin:0 auto;">
                ${$(n.gender,n.skinTone,n.hairColor,n.hairStyleIndex,n.eyeGlassesIndex,n.headwearColor,n.hasHeadwear)}
              </div>
              <strong style="display:block; font-size:14px; margin-top:4px;">${n.name}</strong>
              <div style="margin-top:6px; display:flex; justify-content:center; gap:4px;">
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--primary-teal); color:white; cursor:pointer;" onclick="openAddChildVisualModal(${l})">🎨 Avatar</button>
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--accent-gold); color:black; cursor:pointer;" onclick="resetChildPattern(${l})">🔒 Pattern</button>
              </div>
            </div>
          `).join("")}
        </div>
        <button class="btn-secondary" style="margin-top:14px;" onclick="openAddChildVisualModal()">+ Add new child</button>
      </div>

      <div class="card">
        <strong style="display:block; margin-bottom:8px;">🔒 Security PIN settings</strong>
        <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px;">Current parent PIN code: <strong>${P}</strong></p>
        <button class="btn-primary" onclick="changeParentPinModal()">🔒 Change parent PIN code (With confirmation)</button>
      </div>

      <button style="border:none; background:none; color:red; font-family:var(--font-fredoka); font-size:13px; margin-top:16px; width:100%; cursor:pointer;" onclick="lockParentGate()">
        🔒 Lock Parent Menu & Exit
      </button>
    `)}window.lockParentGate=function(){k=!1,y=-1,g="",p()};window.selectKidFromGrid=function(t){y=t;const e=o[t];u=[],m=!1,w=null,e.patternLock?e.requiresPatternLock=!0:e.requiresPatternLock=!1,p()};window.resetChildPattern=function(t){o[t].patternLock=null,alert(`✨ Pattern lock reset for ${o[t].name}! They can draw a new pattern on login.`),p()};window.changeParentPinModal=function(){const t=prompt("Step 1: Enter new 4-Digit Parent PIN:");if(!t||t.length!==4){alert("PIN must be exactly 4 digits!");return}const e=prompt("Step 2: Re-enter new 4-Digit Parent PIN to confirm:");t===e?(P=t,alert("✨ MashaAllah! Parent PIN code updated successfully!"),p()):alert("❌ PINs do not match! Please try again.")};window.changeChildPatternModal=function(t){o[t].patternLock=null,y=t,u=[],w=null,m=!1,p()};function A(){const t=document.getElementById("pattern-grid"),e=document.getElementById("pattern-path");if(!t||!e)return;const n=document.querySelectorAll(".pattern-dot");function l(r){const s=r.getBoundingClientRect(),f=document.getElementById("pattern-canvas").getBoundingClientRect();return{x:s.left+s.width/2-f.left,y:s.top+s.height/2-f.top}}function i(){if(u.length<2){e.setAttribute("d","");return}let r="";u.forEach((s,f)=>{const h=document.getElementById(`pattern-dot-${s}`);if(h){const v=l(h);r+=f===0?`M ${v.x} ${v.y}`:` L ${v.x} ${v.y}`}}),e.setAttribute("d",r)}function d(r){const s=r.clientX||r.touches&&r.touches[0].clientX,f=r.clientY||r.touches&&r.touches[0].clientY;!s||!f||n.forEach(h=>{const v=h.getBoundingClientRect();if(s>=v.left&&s<=v.right&&f>=v.top&&f<=v.bottom){const L=parseInt(h.dataset.num);u.includes(L)||(u.push(L),h.style.background="var(--accent-gold)",h.style.borderColor="var(--accent-gold)",h.style.color="white",i())}})}t.addEventListener("pointerdown",r=>{C=!0,d(r)}),t.addEventListener("pointermove",r=>{C&&d(r)}),t.addEventListener("pointerup",()=>{C&&(C=!1,E())})}function E(){const t=o[y];if(t)if(t.patternLock)u.join("-")===t.patternLock?(t.requiresPatternLock=!1,p()):(alert("🔒 Pattern incorrect! Try again."),resetPatternDrawn());else{if(u.length<3){alert("Connect at least 3 stars!"),resetPatternDrawn();return}if(!m)w=u.join("-"),m=!0,alert("✨ Pattern recorded! Draw it again to confirm."),resetPatternDrawn(),p();else{const e=u.join("-");e===w?(t.patternLock=e,t.requiresPatternLock=!1,m=!1,w=null,alert(`✨ MashaAllah! Secret pattern saved for ${t.name}!`),p()):(alert("❌ Patterns do not match! Please try again."),m=!1,w=null,resetPatternDrawn(),p())}}}window.resetPatternDrawn=function(){u=[];const t=document.getElementById("pattern-path");t&&t.setAttribute("d",""),[1,2,3,4,5,6,7,8,9].forEach(e=>{const n=document.getElementById(`pattern-dot-${e}`);n&&(n.style.background="#f0f4f8",n.style.borderColor="var(--primary-teal)",n.style.color="black")})};window.cancelKidSelection=function(){y=-1,p()};window.openAddChildVisualModal=function(t=-1){const e=t>=0?o[t]:null;a={name:e?e.name:"",gender:e?e.gender:"boy",skinTone:e?e.skinTone:"#f5d0a0",hairColor:e?e.hairColor:"#0e0e0e",hairStyleIndex:e?e.hairStyleIndex:1,eyeGlassesIndex:e?e.eyeGlassesIndex:1,headwearColor:e?e.headwearColor:"#ffb300",hasHeadwear:!0},c="hairStyle";const n=document.createElement("div");n.id="visual-avatar-modal",n.style.cssText="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px;",n.innerHTML=`
    <div style="background:white; border-radius:24px; max-width:380px; width:100%; padding:20px; box-shadow:0 10px 25px rgba(0,0,0,0.2); font-family:var(--font-fredoka);" id="modal-content">
      <!-- Rendered dynamically -->
    </div>
  `,document.body.appendChild(n),b(t)};function b(t){const e=document.getElementById("modal-content");e&&(e.innerHTML=`
    <h3 style="font-size:18px; margin-bottom:12px; text-align:center; color:var(--text-dark);">🎨 Create your avatar</h3>

    <div style="width:100px; height:100px; margin:0 auto 14px auto;" id="modal-head-preview">
      ${$(a.gender,a.skinTone,a.hairColor,a.hairStyleIndex,a.eyeGlassesIndex,a.headwearColor,!0)}
    </div>

    <input type="text" id="input-modal-name" value="${a.name}" placeholder="Child's Name (e.g. Maryam / Bilal)" style="width:100%; padding:10px 14px; border-radius:14px; border:1px solid #ccc; font-family:var(--font-fredoka); margin-bottom:14px; text-align:center; font-size:15px; font-weight:700;" />

    <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px; margin-bottom:14px;">
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${c==="gender"?"var(--primary-teal)":"#f5f5f5"}; color:${c==="gender"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('gender', ${t})">
        <span style="font-size:18px;">👦👧</span><br><span style="font-size:9px; font-weight:700;">Gender</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${c==="hairStyle"?"var(--primary-teal)":"#f5f5f5"}; color:${c==="hairStyle"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('hairStyle', ${t})">
        <span style="font-size:18px;">💇‍♂️</span><br><span style="font-size:9px; font-weight:700;">Hair</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${c==="hairColor"?"var(--primary-teal)":"#f5f5f5"}; color:${c==="hairColor"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('hairColor', ${t})">
        <span style="font-size:18px;">🎨</span><br><span style="font-size:9px; font-weight:700;">Color</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${c==="skinTone"?"var(--primary-teal)":"#f5f5f5"}; color:${c==="skinTone"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('skinTone', ${t})">
        <span style="font-size:18px;">🖐️</span><br><span style="font-size:9px; font-weight:700;">Skin</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${c==="eyeGlasses"?"var(--primary-teal)":"#f5f5f5"}; color:${c==="eyeGlasses"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('eyeGlasses', ${t})">
        <span style="font-size:18px;">👓</span><br><span style="font-size:9px; font-weight:700;">Glasses</span>
      </div>
    </div>

    <div style="background:#f9f9f9; padding:12px; border-radius:16px; margin-bottom:16px;">
      ${D(t)}
    </div>

    <div style="display:flex; gap:10px;">
      <button class="btn-secondary" style="flex:1;" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" style="flex:1;" id="btn-save-modal-child">Save avatar 🎨</button>
    </div>
  `,document.getElementById("btn-save-modal-child").addEventListener("click",()=>{const n=document.getElementById("input-modal-name").value.trim();if(!n){alert("Please enter your child's name!");return}t>=0?(o[t].name=n,o[t].gender=a.gender,o[t].skinTone=a.skinTone,o[t].hairColor=a.hairColor,o[t].hairStyleIndex=a.hairStyleIndex,o[t].eyeGlassesIndex=a.eyeGlassesIndex):(o.push({id:Date.now().toString(),name:n,level:1,points:0,streak:1,title:"Good deeds starter 🌟",gender:a.gender,skinTone:a.skinTone,hairColor:a.hairColor,hairStyleIndex:a.hairStyleIndex,eyeGlassesIndex:a.eyeGlassesIndex,outfitColor:"#00897b",headwearColor:a.gender==="boy"?"#ffb300":"#81c784",hasHeadwear:!0,patternLock:null}),y=o.length-1),document.getElementById("visual-avatar-modal").remove(),p()}))}function D(t){if(c==="gender")return`
      <div style="display:flex; gap:12px;">
        <div style="flex:1; padding:12px; border-radius:14px; border:2px solid ${a.gender==="boy"?"var(--primary-teal)":"#ccc"}; background:${a.gender==="boy"?"var(--soft-teal-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGender('boy', ${t})">
          <div style="font-size:36px;">👦</div>
          <strong style="font-size:13px; display:block; margin-top:4px;">Boy</strong>
        </div>
        <div style="flex:1; padding:12px; border-radius:14px; border:2px solid ${a.gender==="girl"?"var(--primary-teal)":"#ccc"}; background:${a.gender==="girl"?"var(--soft-teal-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGender('girl', ${t})">
          <div style="font-size:36px;">👧</div>
          <strong style="font-size:13px; display:block; margin-top:4px;">Girl</strong>
        </div>
      </div>
    `;if(c==="hairStyle")return`
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${G.map(e=>`
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${a.hairStyleIndex===e.index?"var(--accent-gold)":"#ccc"}; background:${a.hairStyleIndex===e.index?"var(--soft-gold-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalHairStyle(${e.index}, ${t})">
            <div style="font-size:24px;">${e.emoji}</div>
            <span style="font-size:10px; font-weight:700; display:block; margin-top:2px;">${e.label}</span>
          </div>
        `).join("")}
      </div>
    `;if(c==="hairColor")return`
      <div style="display:flex; justify-content:space-around;">
        ${I.map(e=>`
          <div style="width:42px; height:42px; border-radius:50%; background:${e}; border:3px solid ${a.hairColor===e?"var(--accent-gold)":"#ccc"}; cursor:pointer;" onclick="selectModalHairColor('${e}', ${t})"></div>
        `).join("")}
      </div>
    `;if(c==="skinTone")return`
      <div style="display:flex; justify-content:space-around;">
        ${S.map(e=>`
          <div style="width:42px; height:42px; border-radius:50%; background:${e}; border:3px solid ${a.skinTone===e?"var(--accent-gold)":"#ccc"}; cursor:pointer;" onclick="selectModalSkinTone('${e}', ${t})"></div>
        `).join("")}
      </div>
    `;if(c==="eyeGlasses")return`
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${j.map(e=>`
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${a.eyeGlassesIndex===e.index?"var(--accent-gold)":"#ccc"}; background:${a.eyeGlassesIndex===e.index?"var(--soft-gold-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGlasses(${e.index}, ${t})">
            <div style="font-size:24px;">${e.emoji}</div>
            <span style="font-size:10px; font-weight:700; display:block; margin-top:2px;">${e.label}</span>
          </div>
        `).join("")}
      </div>
    `}window.setModalCategory=function(t,e){c=t,b(e)};window.selectModalGender=function(t,e){a.gender=t,b(e)};window.selectModalHairStyle=function(t,e){a.hairStyleIndex=t,b(e)};window.selectModalHairColor=function(t,e){a.hairColor=t,b(e)};window.selectModalSkinTone=function(t,e){a.skinTone=t,b(e)};window.selectModalGlasses=function(t,e){a.eyeGlassesIndex=t,b(e)};window.closeModal=function(){const t=document.getElementById("visual-avatar-modal");t&&t.remove()};window.showDateDetails=function(t){const e=o[y]?o[y].name:"Child",n=30+t*3%40,l=t%5===0?"🍦 Ice cream treat":"📖 Bedtime story";alert(`📅 Date: August ${t}, 2026
👶 Child: ${e}
🌟 Score Earned: +${n} pts
🎁 Unlocked Gift: ${l}

Completed Deeds:
• Morning Dua recited 👍
• Prayed Salah on time 🕌
• Helped clean up toys 🧸`)};p();
