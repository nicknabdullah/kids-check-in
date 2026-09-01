(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const p of l)if(p.type==="childList")for(const i of p.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(l){const p={};return l.integrity&&(p.integrity=l.integrity),l.referrerPolicy&&(p.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?p.credentials="include":l.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(l){if(l.ep)return;l.ep=!0;const p=a(l);fetch(l.href,p)}})();let x="today",o=[{id:"1",name:"Ahmad",level:1,points:120,streak:5,title:"Good deeds explorer 🌟",gender:"boy",skinTone:"#f5d0a0",hairColor:"#0e0e0e",hairStyleIndex:1,eyeGlassesIndex:1,outfitColor:"#00897b",headwearColor:"#ffb300",hasHeadwear:!0,patternLock:"1-2-5-9"},{id:"2",name:"Maryam",level:2,points:210,streak:8,title:"Kindness champion 🌸",gender:"girl",skinTone:"#e0ac69",hairColor:"#4a2e1b",hairStyleIndex:2,eyeGlassesIndex:1,outfitColor:"#e91e63",headwearColor:"#81c784",hasHeadwear:!0,patternLock:"1-4-7-8"}],f=-1,b=!1,C="1234",u="",h=[],k=null,m=!1,z=!1,d="hairStyle",n={gender:"boy",skinTone:"#f5d0a0",hairColor:"#0e0e0e",hairStyleIndex:1,eyeGlassesIndex:1,headwearColor:"#ffb300"};const A=[{color:"#f5d0a0",name:"Fair"},{color:"#e0ac69",name:"Tan"},{color:"#c68642",name:"Olive"},{color:"#8d5524",name:"Bronze"},{color:"#5c3317",name:"Mahogany"}],j=[{color:"#0e0e0e",name:"Black"},{color:"#4a2e1b",name:"Brown"},{color:"#d4a359",name:"Blonde"}],I=[{index:1,label:"Short Crop 💇‍♂️",emoji:"👦"},{index:2,label:"Curly Top 🦱",emoji:"🦱"},{index:3,label:"Spiky Cut 🧑",emoji:"🧑"},{index:4,label:"Buzz Cut 💈",emoji:"💈"},{index:5,label:"Side Part 👦",emoji:"👨"}],G=[{index:1,label:"Emerald Hijab 🧕",emoji:"🧕"},{index:2,label:"Rose Hijab 🌸",emoji:"🌸"},{index:3,label:"Crown Hijab 👑",emoji:"👑"},{index:4,label:"Twin Tails 👧",emoji:"👧"},{index:5,label:"Bob Cut 💇‍♀️",emoji:"💇‍♀️"}],E=[{index:1,label:"Clean 🌟",emoji:"✨"},{index:2,label:"Round 👓",emoji:"👓"},{index:3,label:"Square 🤓",emoji:"🤓"},{index:4,label:"Shades 🕶️",emoji:"🕶️"},{index:5,label:"Star ⭐",emoji:"⭐"}];function P(t){if("speechSynthesis"in window){window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance(t);e.pitch=1.2,e.rate=.95,window.speechSynthesis.speak(e)}}function $(t="boy",e="#f5d0a0",a="#0e0e0e",r=1,l=1,p="#ffb300",i=!0){const v=t==="girl"?"#e91e63":"#00897b";let y="";if(t==="girl")if(i||r<=3){const s=r===2?"#ec407a":r===3?"#ffb300":"#4db6ac";y=`
        <circle cx="50" cy="48" r="34" fill="${s}" />
        <ellipse cx="50" cy="50" rx="22" ry="26" fill="${e}" />
        <path d="M 28 42 C 35 22 65 22 72 42 C 60 28 40 28 28 42 Z" fill="${s}" />
      `}else r===4?y=`
        <circle cx="22" cy="48" r="14" fill="${a}" />
        <circle cx="78" cy="48" r="14" fill="${a}" />
        <circle cx="50" cy="48" r="26" fill="${e}" />
        <circle cx="21" cy="50" r="5" fill="${e}" />
        <circle cx="79" cy="50" r="5" fill="${e}" />
        <path d="M 24 44 C 35 24 65 24 76 44 C 60 32 40 32 24 44 Z" fill="${a}" />
      `:y=`
        <circle cx="50" cy="46" r="30" fill="${a}" />
        <circle cx="50" cy="48" r="26" fill="${e}" />
      `;else{let s="";switch(r){case 2:s=`<circle cx="28" cy="25" r="9" fill="${a}" />
                    <circle cx="39" cy="23" r="9" fill="${a}" />
                    <circle cx="50" cy="21" r="9" fill="${a}" />
                    <circle cx="61" cy="23" r="9" fill="${a}" />
                    <circle cx="72" cy="25" r="9" fill="${a}" />`;break;case 3:s=`<path d="M 22 44 L 30 18 L 40 30 L 50 16 L 60 30 L 70 18 L 78 44 Z" fill="${a}" />`;break;case 4:s=`<path d="M 22 46 A 28 28 0 0 1 78 46 Z" fill="${a}" />`;break;case 5:s=`<path d="M 22 44 C 30 18 70 22 78 44 Z" fill="${a}" />`;break;case 1:default:s=`<path d="M 22 45 A 28 28 0 0 1 78 45 Z" fill="${a}" />`;break}y=`
      <circle cx="21" cy="50" r="5" fill="${e}" />
      <circle cx="79" cy="50" r="5" fill="${e}" />
      <circle cx="50" cy="48" r="27" fill="${e}" />
      ${s}
    `}let g="";switch(l){case 2:g=`<circle cx="38" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <circle cx="62" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;break;case 3:g=`<rect x="30" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <rect x="54" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;break;case 4:g=`<rect x="28" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <rect x="53" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <line x1="47" y1="45" x2="53" y2="45" stroke="#212121" stroke-width="3" />`;break;case 5:g=`<circle cx="38" cy="48" r="9" fill="#ffb300" />
                    <circle cx="62" cy="48" r="9" fill="#ffb300" />`;break}return`
    <svg class="faceless-avatar-svg" viewBox="0 0 100 100">
      <path d="M 15 100 C 30 75 70 75 85 100 Z" fill="${v}" />
      <rect x="40" y="65" width="20" height="15" fill="${e}" />
      ${y}
      ${g}
    </svg>
  `}window.tapPinKey=function(t){const e=document.getElementById(`pin-btn-${t}`);e&&(e.style.transform="scale(0.9)",e.style.background="var(--primary-teal)",e.style.color="white",setTimeout(()=>{e.style.transform="scale(1)",e.style.background="#f9f9f9",e.style.color="black"},150)),t==="C"?u="":t==="✓"?S():u.length<4&&(u+=t,u.length===4&&S()),T()};function S(){u===C?(b=!0,u="",c(),L()):setTimeout(()=>{alert("Incorrect Parent PIN! Try again."),u="",T()},150)}function T(){const t=document.getElementById("pin-display-bullets");t&&(t.innerHTML=[0,1,2,3].map(e=>`
      <div style="width:16px; height:16px; border-radius:50%; background:${e<u.length?"var(--primary-teal)":"#e0e0e0"}; border:2px solid ${e<u.length?"var(--primary-teal)":"#bdbdbd"};"></div>
    `).join(""))}function L(){const t=document.querySelector(".bottom-nav");if(!t)return;const e=b&&f>=0;t.innerHTML=e?`
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
  `}window.switchTab=function(t){t==="parent"&&!b&&(f=-1,u=""),x=t,c(),L()};function c(){const t=document.getElementById("app-viewport");if(L(),!b||x==="parent"&&!b){t.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="font-size:54px; margin-bottom:8px;">🔒</div>
        <h2 style="font-size:22px; color:var(--text-dark);">Parent PIN Login</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Enter security code to access parent menu</p>
      </div>

      <div class="card" style="text-align:center; padding:24px 16px;">
        <div style="display:flex; justify-content:center; gap:12px; margin-bottom:20px;" id="pin-display-bullets">
          ${[0,1,2,3].map(a=>`
            <div style="width:16px; height:16px; border-radius:50%; background:${a<u.length?"var(--primary-teal)":"#e0e0e0"}; border:2px solid ${a<u.length?"var(--primary-teal)":"#bdbdbd"};"></div>
          `).join("")}
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; width:210px; margin:0 auto;" id="keypad">
          ${[1,2,3,4,5,6,7,8,9,"C",0,"✓"].map(a=>`
            <button id="pin-btn-${a}" class="pattern-dot" style="width:54px; height:54px; border-radius:18px; border:1px solid #ccc; font-size:20px; font-weight:700; background:#f9f9f9; cursor:pointer; transition:transform 0.15s ease;" onclick="window.tapPinKey('${a}')">
              ${a}
            </button>
          `).join("")}
        </div>
        <div style="margin-top:14px; font-size:11px; color:var(--text-muted);">Default PIN: ${C}</div>
      </div>
    `;return}if(f===-1){t.innerHTML=`
      <div style="text-align:center; padding:10px 0;">
        <h2 style="font-size:22px; color:var(--text-dark);">🌟 Assalamu Alaikum!</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Tap your profile avatar to log in</p>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:20px 0;">
        ${o.length>0?o.map((a,r)=>`
          <div class="card" style="text-align:center; cursor:pointer; padding:16px; border:2px solid transparent;" onclick="selectKidFromGrid(${r})">
            <div style="width:76px; height:76px; margin:0 auto 10px auto;">
              ${$(a.gender,a.skinTone,a.hairColor,a.hairStyleIndex,a.eyeGlassesIndex,a.headwearColor,a.hasHeadwear)}
            </div>
            <strong style="font-size:16px; display:block; color:var(--text-dark);">${a.name}</strong>
            <span style="font-size:11px; color:var(--text-muted);">${a.patternLock?"🔒 Pattern Set":"✨ Tap to create pattern"}</span>
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
    `;return}const e=o[f];if(e.requiresPatternLock||!e.patternLock){const a=!e.patternLock;t.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="width:76px; height:76px; margin:0 auto 10px auto;">
          ${$(e.gender,e.skinTone,e.hairColor,e.hairStyleIndex,e.eyeGlassesIndex,e.headwearColor,e.hasHeadwear)}
        </div>
        <h2 style="font-size:20px; color:var(--text-dark);">${m?"Confirm pattern ⭐":a?`Create pattern for ${e.name}`:`Welcome back, ${e.name}!`}</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">${m?"Draw pattern again to confirm!":"Drag your finger across stars to draw pattern"}</p>
      </div>

      <!-- VISUAL TOUCH-DRAG 3x3 PATTERN GRID WITH LINE DRAWING -->
      <div class="card" style="text-align:center; padding:24px 12px; position:relative;">
        <svg id="pattern-canvas" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;">
          <path id="pattern-path" d="" stroke="var(--accent-gold)" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; width:220px; margin:0 auto; position:relative; z-index:2;" id="pattern-grid">
          ${[1,2,3,4,5,6,7,8,9].map(r=>`
            <div id="pattern-dot-${r}" class="pattern-dot" data-num="${r}" style="width:54px; height:54px; border-radius:50%; background:#f0f4f8; border:3px solid var(--primary-teal); display:flex; align-items:center; justify-content:center; font-size:20px; cursor:pointer; user-select:none;">
              ⭐
            </div>
          `).join("")}
        </div>
        <button class="btn-secondary" style="margin-top:14px; width:140px; padding:6px;" onclick="resetPatternDrawn()">Clear pattern</button>
      </div>

      <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:13px; margin-top:16px; cursor:pointer; width:100%; text-align:center;" onclick="cancelKidSelection()">
        ⬅️ Back to child selection
      </button>
    `,setTimeout(D,100);return}x==="today"?(t.innerHTML=`
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
        <button style="flex:1; padding:10px; border-radius:16px; border:2px solid var(--soft-teal-bg); background:white; font-family:var(--font-fredoka); font-weight:700; font-size:12px; color:var(--primary-teal); cursor:pointer;" onclick="openAddChildVisualModal(${f})">
          🎨 Change avatar
        </button>
        <button style="flex:1; padding:10px; border-radius:16px; border:2px solid var(--soft-gold-bg); background:white; font-family:var(--font-fredoka); font-weight:700; font-size:12px; color:var(--text-gold); cursor:pointer;" onclick="changeChildPatternModal(${f})">
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
    `,document.getElementById("btn-start-checkin").addEventListener("click",()=>{c()})):x==="journey"?t.innerHTML=`
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
          ${Array.from({length:31},(a,r)=>r+1).map(a=>`
            <div style="background:${a<=24?"var(--soft-teal-bg)":"#f5f5f5"}; border-radius:8px; padding:6px 2px; cursor:pointer; font-size:11px; font-weight:700;" onclick="showDateDetails(${a})">
              ${a}<br>${a<=24?a%5===0?"🎁":"⭐":""}
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
          ${o.map((a,r)=>`
            <div style="background:var(--soft-teal-bg); padding:10px; border-radius:16px; text-align:center;">
              <div style="width:54px; height:54px; margin:0 auto;">
                ${$(a.gender,a.skinTone,a.hairColor,a.hairStyleIndex,a.eyeGlassesIndex,a.headwearColor,a.hasHeadwear)}
              </div>
              <strong style="display:block; font-size:14px; margin-top:4px;">${a.name}</strong>
              <div style="margin-top:6px; display:flex; justify-content:center; gap:4px;">
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--primary-teal); color:white; cursor:pointer;" onclick="openAddChildVisualModal(${r})">🎨 Avatar</button>
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--accent-gold); color:black; cursor:pointer;" onclick="resetChildPattern(${r})">🔒 Pattern</button>
              </div>
            </div>
          `).join("")}
        </div>
        <button class="btn-secondary" style="margin-top:14px;" onclick="openAddChildVisualModal()">+ Add new child</button>
      </div>

      <div class="card">
        <strong style="display:block; margin-bottom:8px;">🔒 Security PIN settings</strong>
        <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px;">Current parent PIN code: <strong>${C}</strong></p>
        <button class="btn-primary" onclick="changeParentPinModal()">🔒 Change parent PIN code (With confirmation)</button>
      </div>

      <!-- Factory Reset All Data Card -->
      <div class="card" style="border:2px solid #ffcdd2;">
        <strong style="display:block; margin-bottom:6px; color:#d32f2f;">⚠️ Reset all application data</strong>
        <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px;">Delete all children profiles, points & history to restore fresh app state.</p>
        <button class="btn-primary" style="background:linear-gradient(135deg, #e53935 0%, #c62828 100%); box-shadow:0 6px 16px rgba(229,57,53,0.3);" onclick="resetAllAppDataModal()">
          ⚠️ Reset all app data to fresh
        </button>
      </div>

      <button style="border:none; background:none; color:red; font-family:var(--font-fredoka); font-size:13px; margin-top:16px; width:100%; cursor:pointer;" onclick="lockParentGate()">
        🔒 Lock Parent Menu & Exit
      </button>
    `)}window.lockParentGate=function(){b=!1,f=-1,u="",c()};window.selectKidFromGrid=function(t){f=t;const e=o[t];h=[],m=!1,k=null,e.patternLock?e.requiresPatternLock=!0:(e.requiresPatternLock=!1,x="today",P(`Assalamu Alaikum ${e.name}! Let's see what you did today!`)),c()};window.resetChildPattern=function(t){o[t].patternLock=null,alert(`✨ Pattern lock reset for ${o[t].name}! They can draw a new pattern on login.`),c()};window.resetAllAppDataModal=function(){confirm(`⚠️ Are you sure you want to reset all app data?

This will permanently delete all children profiles, points, streaks, and restore the app to factory fresh settings.`)&&(o=[],f=-1,b=!1,C="1234",u="",alert("✨ MashaAllah! App has been reset to factory fresh state!"),c())};window.changeParentPinModal=function(){const t=prompt("Step 1: Enter new 4-Digit Parent PIN:");if(!t||t.length!==4){alert("PIN must be exactly 4 digits!");return}const e=prompt("Step 2: Re-enter new 4-Digit Parent PIN to confirm:");t===e?(C=t,alert("✨ MashaAllah! Parent PIN code updated successfully!"),c()):alert("❌ PINs do not match! Please try again.")};window.changeChildPatternModal=function(t){o[t].patternLock=null,f=t,h=[],k=null,m=!1,c()};function D(){const t=document.getElementById("pattern-grid"),e=document.getElementById("pattern-path");if(!t||!e)return;const a=document.querySelectorAll(".pattern-dot");function r(i){const v=i.getBoundingClientRect(),y=document.getElementById("pattern-canvas").getBoundingClientRect();return{x:v.left+v.width/2-y.left,y:v.top+v.height/2-y.top}}function l(){if(h.length<2){e.setAttribute("d","");return}let i="";h.forEach((v,y)=>{const g=document.getElementById(`pattern-dot-${v}`);if(g){const s=r(g);i+=y===0?`M ${s.x} ${s.y}`:` L ${s.x} ${s.y}`}}),e.setAttribute("d",i)}function p(i){const v=i.clientX||i.touches&&i.touches[0].clientX,y=i.clientY||i.touches&&i.touches[0].clientY;!v||!y||a.forEach(g=>{const s=g.getBoundingClientRect();if(v>=s.left&&v<=s.right&&y>=s.top&&y<=s.bottom){const M=parseInt(g.dataset.num);h.includes(M)||(h.push(M),g.style.background="var(--accent-gold)",g.style.borderColor="var(--accent-gold)",g.style.color="white",l())}})}t.addEventListener("pointerdown",i=>{z=!0,p(i)}),t.addEventListener("pointermove",i=>{z&&p(i)}),t.addEventListener("pointerup",()=>{z&&(z=!1,H())})}function H(){const t=o[f];if(t)if(t.patternLock)h.join("-")===t.patternLock?(t.requiresPatternLock=!1,x="today",c(),P(`Assalamu Alaikum ${t.name}! Let's see what you did today!`)):(alert("🔒 Pattern incorrect! Try again."),resetPatternDrawn());else{if(h.length<3){alert("Connect at least 3 stars!"),resetPatternDrawn();return}if(!m)k=h.join("-"),m=!0,alert("✨ Pattern recorded! Draw it again to confirm."),resetPatternDrawn(),c();else{const e=h.join("-");e===k?(t.patternLock=e,t.requiresPatternLock=!1,m=!1,k=null,x="today",c(),P(`Assalamu Alaikum ${t.name}! Let's see what you did today!`)):(alert("❌ Patterns do not match! Please try again."),m=!1,k=null,resetPatternDrawn(),c())}}}window.resetPatternDrawn=function(){h=[];const t=document.getElementById("pattern-path");t&&t.setAttribute("d",""),[1,2,3,4,5,6,7,8,9].forEach(e=>{const a=document.getElementById(`pattern-dot-${e}`);a&&(a.style.background="#f0f4f8",a.style.borderColor="var(--primary-teal)",a.style.color="black")})};window.cancelKidSelection=function(){f=-1,c()};window.openAddChildVisualModal=function(t=-1){const e=t>=0?o[t]:null;n={name:e?e.name:"",gender:e?e.gender:"boy",skinTone:e?e.skinTone:"#f5d0a0",hairColor:e?e.hairColor:"#0e0e0e",hairStyleIndex:e?e.hairStyleIndex:1,eyeGlassesIndex:e?e.eyeGlassesIndex:1,headwearColor:e?e.headwearColor:"#ffb300",hasHeadwear:!0},d="hairStyle";const a=document.createElement("div");a.id="visual-avatar-modal",a.style.cssText="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px;",a.innerHTML=`
    <div style="background:white; border-radius:24px; max-width:380px; width:100%; padding:20px; box-shadow:0 10px 25px rgba(0,0,0,0.2); font-family:var(--font-fredoka);" id="modal-content">
      <!-- Rendered dynamically -->
    </div>
  `,document.body.appendChild(a),w(t)};function w(t){const e=document.getElementById("modal-content");e&&(e.innerHTML=`
    <h3 style="font-size:18px; margin-bottom:12px; text-align:center; color:var(--text-dark);">🎨 Create your avatar</h3>

    <div style="width:110px; height:110px; margin:0 auto 14px auto;" id="modal-head-preview">
      ${$(n.gender,n.skinTone,n.hairColor,n.hairStyleIndex,n.eyeGlassesIndex,n.headwearColor,!0)}
    </div>

    <input type="text" id="input-modal-name" value="${n.name}" placeholder="Child's Name (e.g. Maryam / Bilal)" style="width:100%; padding:10px 14px; border-radius:14px; border:1px solid #ccc; font-family:var(--font-fredoka); margin-bottom:14px; text-align:center; font-size:15px; font-weight:700;" />

    <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px; margin-bottom:14px;">
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${d==="gender"?"var(--primary-teal)":"#f5f5f5"}; color:${d==="gender"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('gender', ${t})">
        <span style="font-size:18px;">👦👧</span><br><span style="font-size:9px; font-weight:700;">Gender</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${d==="hairStyle"?"var(--primary-teal)":"#f5f5f5"}; color:${d==="hairStyle"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('hairStyle', ${t})">
        <span style="font-size:18px;">💇‍♂️</span><br><span style="font-size:9px; font-weight:700;">Style</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${d==="hairColor"?"var(--primary-teal)":"#f5f5f5"}; color:${d==="hairColor"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('hairColor', ${t})">
        <span style="font-size:18px;">🎨</span><br><span style="font-size:9px; font-weight:700;">Color</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${d==="skinTone"?"var(--primary-teal)":"#f5f5f5"}; color:${d==="skinTone"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('skinTone', ${t})">
        <span style="font-size:18px;">🖐️</span><br><span style="font-size:9px; font-weight:700;">Skin</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${d==="eyeGlasses"?"var(--primary-teal)":"#f5f5f5"}; color:${d==="eyeGlasses"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('eyeGlasses', ${t})">
        <span style="font-size:18px;">👓</span><br><span style="font-size:9px; font-weight:700;">Glasses</span>
      </div>
    </div>

    <div style="background:#f9f9f9; padding:12px; border-radius:16px; margin-bottom:16px;">
      ${B(t)}
    </div>

    <div style="display:flex; gap:10px;">
      <button class="btn-secondary" style="flex:1;" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" style="flex:1;" id="btn-save-modal-child">Save avatar 🎨</button>
    </div>
  `,document.getElementById("btn-save-modal-child").addEventListener("click",()=>{const a=document.getElementById("input-modal-name").value.trim();if(!a){alert("Please enter your child's name!");return}t>=0?(o[t].name=a,o[t].gender=n.gender,o[t].skinTone=n.skinTone,o[t].hairColor=n.hairColor,o[t].hairStyleIndex=n.hairStyleIndex,o[t].eyeGlassesIndex=n.eyeGlassesIndex):(o.push({id:Date.now().toString(),name:a,level:1,points:0,streak:1,title:"Good deeds starter 🌟",gender:n.gender,skinTone:n.skinTone,hairColor:n.hairColor,hairStyleIndex:n.hairStyleIndex,eyeGlassesIndex:n.eyeGlassesIndex,outfitColor:n.gender==="girl"?"#e91e63":"#00897b",headwearColor:n.gender==="boy"?"#ffb300":"#81c784",hasHeadwear:!0,patternLock:null}),f=o.length-1),document.getElementById("visual-avatar-modal").remove(),c()}))}function B(t){if(d==="gender")return`
      <div style="display:flex; gap:12px;">
        <div style="flex:1; padding:12px; border-radius:14px; border:2px solid ${n.gender==="boy"?"var(--primary-teal)":"#ccc"}; background:${n.gender==="boy"?"var(--soft-teal-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGender('boy', ${t})">
          <div style="font-size:36px;">👦</div>
          <strong style="font-size:13px; display:block; margin-top:4px;">Boy</strong>
        </div>
        <div style="flex:1; padding:12px; border-radius:14px; border:2px solid ${n.gender==="girl"?"var(--primary-teal)":"#ccc"}; background:${n.gender==="girl"?"var(--soft-teal-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGender('girl', ${t})">
          <div style="font-size:36px;">👧</div>
          <strong style="font-size:13px; display:block; margin-top:4px;">Girl</strong>
        </div>
      </div>
    `;if(d==="hairStyle")return`
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${(n.gender==="girl"?G:I).map(a=>`
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${n.hairStyleIndex===a.index?"var(--accent-gold)":"#ccc"}; background:${n.hairStyleIndex===a.index?"var(--soft-gold-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalHairStyle(${a.index}, ${t})">
            <div style="font-size:24px;">${a.emoji}</div>
            <span style="font-size:9px; font-weight:700; display:block; margin-top:2px;">${a.label}</span>
          </div>
        `).join("")}
      </div>
    `;if(d==="hairColor")return`
      <div style="display:flex; justify-content:space-around; align-items:center;">
        ${j.map(e=>`
          <div style="text-align:center; cursor:pointer;" onclick="selectModalHairColor('${e.color}', ${t})">
            <div style="width:44px; height:44px; border-radius:50%; background:${e.color}; border:3px solid ${n.hairColor===e.color?"var(--accent-gold)":"#ccc"}; margin:0 auto;"></div>
            <span style="font-size:10px; font-weight:700; display:block; margin-top:4px;">${e.name}</span>
          </div>
        `).join("")}
      </div>
    `;if(d==="skinTone")return`
      <div style="display:flex; justify-content:space-around;">
        ${A.map(e=>`
          <div style="width:40px; height:40px; border-radius:50%; background:${e.color}; border:3px solid ${n.skinTone===e.color?"var(--accent-gold)":"#ccc"}; cursor:pointer;" onclick="selectModalSkinTone('${e.color}', ${t})"></div>
        `).join("")}
      </div>
    `;if(d==="eyeGlasses")return`
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${E.map(e=>`
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${n.eyeGlassesIndex===e.index?"var(--accent-gold)":"#ccc"}; background:${n.eyeGlassesIndex===e.index?"var(--soft-gold-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGlasses(${e.index}, ${t})">
            <div style="font-size:24px;">${e.emoji}</div>
            <span style="font-size:9px; font-weight:700; display:block; margin-top:2px;">${e.label}</span>
          </div>
        `).join("")}
      </div>
    `}window.setModalCategory=function(t,e){d=t,w(e)};window.selectModalGender=function(t,e){n.gender=t,w(e)};window.selectModalHairStyle=function(t,e){n.hairStyleIndex=t,w(e)};window.selectModalHairColor=function(t,e){n.hairColor=t,w(e)};window.selectModalSkinTone=function(t,e){n.skinTone=t,w(e)};window.selectModalGlasses=function(t,e){n.eyeGlassesIndex=t,w(e)};window.closeModal=function(){const t=document.getElementById("visual-avatar-modal");t&&t.remove()};window.showDateDetails=function(t){const e=o[f]?o[f].name:"Child",a=30+t*3%40,r=t%5===0?"🍦 Ice cream treat":"📖 Bedtime story";alert(`📅 Date: August ${t}, 2026
👶 Child: ${e}
🌟 Score Earned: +${a} pts
🎁 Unlocked Gift: ${r}

Completed Deeds:
• Morning Dua recited 👍
• Prayed Salah on time 🕌
• Helped clean up toys 🧸`)};c();
