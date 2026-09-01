(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const i of d.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerPolicy&&(d.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?d.credentials="include":a.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(a){if(a.ep)return;a.ep=!0;const d=r(a);fetch(a.href,d)}})();let m="today",s=[{id:"1",name:"Ahmad",level:1,points:120,streak:5,title:"Good deeds explorer 🌟",gender:"boy",skinTone:"#f5d0a0",hairColor:"#0e0e0e",hairStyleIndex:1,eyeGlassesIndex:1,outfitColor:"#00897b",headwearColor:"#ffb300",hasHeadwear:!0,patternLock:"1-2-5-9"},{id:"2",name:"Maryam",level:2,points:210,streak:8,title:"Kindness champion 🌸",gender:"girl",skinTone:"#e0ac69",hairColor:"#4a2e1b",hairStyleIndex:4,eyeGlassesIndex:2,outfitColor:"#e91e63",headwearColor:"#81c784",hasHeadwear:!0,patternLock:"1-4-7-8"}],f=-1,$=!1,w="1234",x=[],k=!1,c="hairStyle",n={gender:"boy",skinTone:"#f5d0a0",hairColor:"#0e0e0e",hairStyleIndex:1,eyeGlassesIndex:1,headwearColor:"#ffb300"};const z=["#f5d0a0","#e0ac69","#c68642","#8d5524","#5c3317"],L=["#0e0e0e","#2c1d11","#4a2e1b","#b86b25","#8d4004"],P=[{index:1,label:"Crop 💇‍♂️",emoji:"👦"},{index:2,label:"Curly 🦱",emoji:"🦱"},{index:3,label:"Spiky 🧑",emoji:"🧑"},{index:4,label:"Long 💇‍♀️",emoji:"👧"},{index:5,label:"Buzz 💈",emoji:"💈"}],S=[{index:1,label:"Clean 🌟",emoji:"✨"},{index:2,label:"Round 👓",emoji:"👓"},{index:3,label:"Square 🤓",emoji:"🤓"},{index:4,label:"Shades 🕶️",emoji:"🕶️"},{index:5,label:"Star ⭐",emoji:"⭐"}];function b(t="boy",e="#f5d0a0",r="#0e0e0e",o=1,a=1,d="#ffb300",i=!0){let l="";if(i)l=t==="boy"?`<path d="M 20 44 A 30 30 0 0 1 80 44 Z" fill="${d}" />
         <line x1="20" y1="44" x2="80" y2="44" stroke="#ffffff" stroke-width="3" opacity="0.6" />`:`<path d="M 19 48 C 15 75 28 98 50 98 C 72 98 85 75 81 48 Z" fill="${d}" />
         <ellipse cx="50" cy="50" rx="21" ry="21" fill="${e}" />`;else switch(o){case 2:l=`<circle cx="28" cy="26" r="9" fill="${r}" />
                   <circle cx="39" cy="24" r="9" fill="${r}" />
                   <circle cx="50" cy="22" r="9" fill="${r}" />
                   <circle cx="61" cy="24" r="9" fill="${r}" />
                   <circle cx="72" cy="26" r="9" fill="${r}" />`;break;case 3:l=`<path d="M 22 44 L 30 18 L 40 30 L 50 16 L 60 30 L 70 18 L 78 44 Z" fill="${r}" />`;break;case 4:l=`<ellipse cx="50" cy="42" rx="30" ry="30" fill="${r}" />
                   <rect x="18" y="45" width="12" height="40" rx="6" fill="${r}" />
                   <rect x="70" y="45" width="12" height="40" rx="6" fill="${r}" />`;break;case 5:l=`<path d="M 21 46 A 29 29 0 0 1 79 46 Z" fill="${r}" />`;break;case 1:default:l=`<path d="M 21 44 A 29 29 0 0 1 79 44 Z" fill="${r}" />`;break}let p="";switch(a){case 2:p=`<circle cx="38" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <circle cx="62" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;break;case 3:p=`<rect x="30" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <rect x="54" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;break;case 4:p=`<rect x="28" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <rect x="53" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <line x1="47" y1="45" x2="53" y2="45" stroke="#212121" stroke-width="3" />`;break;case 5:p=`<circle cx="38" cy="48" r="9" fill="#ffb300" />
                    <circle cx="62" cy="48" r="9" fill="#ffb300" />`;break}return`
    <svg class="faceless-avatar-svg" viewBox="0 0 100 100">
      <path d="M 20 100 C 35 82 65 82 80 100 Z" fill="#00897b" />
      <rect x="42" y="70" width="16" height="16" rx="6" fill="${e}" />
      <circle cx="21" cy="50" r="5" fill="${e}" />
      <circle cx="79" cy="50" r="5" fill="${e}" />
      <circle cx="50" cy="48" r="28" fill="${e}" />
      ${l}
      ${p}
    </svg>
  `}function g(){const t=document.getElementById("app-viewport");if(!$&&f===-1){t.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="font-size:54px; margin-bottom:8px;">🔒</div>
        <h2 style="font-size:22px; color:var(--text-dark);">Parent PIN Login</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Enter security code to access app</p>
      </div>

      <div class="card" style="text-align:center; padding:24px 16px;">
        <div style="font-size:28px; letter-spacing:12px; font-weight:700; color:var(--primary-teal); margin-bottom:16px;" id="pin-display">
          ••••
        </div>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; width:200px; margin:0 auto;" id="keypad">
          ${[1,2,3,4,5,6,7,8,9,"C",0,"✓"].map(r=>`
            <button class="pattern-dot" style="width:54px; height:54px; border-radius:16px; border:1px solid #ccc; font-size:18px; font-weight:700; background:#f9f9f9; cursor:pointer;" onclick="tapPinKey('${r}')">
              ${r}
            </button>
          `).join("")}
        </div>
        <div style="margin-top:12px; font-size:11px; color:var(--text-muted);">Default PIN: ${w}</div>
      </div>
    `;return}if(f===-1){t.innerHTML=`
      <div style="text-align:center; padding:10px 0;">
        <h2 style="font-size:22px; color:var(--text-dark);">🌟 Assalamu Alaikum!</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Tap your profile avatar to log in</p>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:20px 0;">
        ${s.map((r,o)=>`
          <div class="card" style="text-align:center; cursor:pointer; padding:16px; border:2px solid transparent;" onclick="selectKidFromGrid(${o})">
            <div style="width:76px; height:76px; margin:0 auto 10px auto;">
              ${b(r.gender,r.skinTone,r.hairColor,r.hairStyleIndex,r.eyeGlassesIndex,r.headwearColor,r.hasHeadwear)}
            </div>
            <strong style="font-size:16px; display:block; color:var(--text-dark);">${r.name}</strong>
            <span style="font-size:11px; color:var(--text-muted);">${r.patternLock?"🔒 Pattern Set":"✨ Tap to create pattern"}</span>
          </div>
        `).join("")}
      </div>

      <button class="btn-secondary" style="margin-top:6px;" onclick="openAddChildVisualModal()">
        + Add new sibling / child
      </button>

      <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:12px; margin-top:16px; width:100%; cursor:pointer;" onclick="lockParentGate()">
        🔒 Lock parent PIN gate
      </button>
    `;return}const e=s[f];if(e.requiresPatternLock||!e.patternLock){const r=!e.patternLock;t.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="width:76px; height:76px; margin:0 auto 10px auto;">
          ${b(e.gender,e.skinTone,e.hairColor,e.hairStyleIndex,e.eyeGlassesIndex,e.headwearColor,e.hasHeadwear)}
        </div>
        <h2 style="font-size:20px; color:var(--text-dark);">${r?`Create pattern for ${e.name}`:`Welcome back, ${e.name}!`}</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Drag your finger across stars to draw pattern</p>
      </div>

      <!-- VISUAL TOUCH-DRAG 3x3 PATTERN GRID WITH LINE DRAWING -->
      <div class="card" style="text-align:center; padding:24px 12px; position:relative;">
        <svg id="pattern-canvas" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;">
          <path id="pattern-path" d="" stroke="var(--accent-gold)" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; width:220px; margin:0 auto; position:relative; z-index:2;" id="pattern-grid">
          ${[1,2,3,4,5,6,7,8,9].map(o=>`
            <div id="pattern-dot-${o}" class="pattern-dot" data-num="${o}" style="width:54px; height:54px; border-radius:50%; background:#f0f4f8; border:3px solid var(--primary-teal); display:flex; align-items:center; justify-content:center; font-size:20px; cursor:pointer; user-select:none;">
              ⭐
            </div>
          `).join("")}
        </div>
        <div style="margin-top:16px; font-size:12px; color:var(--text-muted);" id="pattern-status">Drag across stars to draw</div>
        <button class="btn-secondary" style="margin-top:14px; width:140px; padding:6px;" onclick="resetPatternDrawn()">Clear pattern</button>
      </div>

      <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:13px; margin-top:16px; cursor:pointer; width:100%; text-align:center;" onclick="cancelKidSelection()">
        ⬅️ Back to child selection
      </button>
    `,setTimeout(I,100);return}if(m==="today")t.innerHTML=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:12px; font-weight:700; padding:6px 12px; border-radius:12px; cursor:pointer;" onclick="cancelKidSelection()">
          🔁 Switch child
        </button>
        <span style="font-size:11px; font-weight:700; color:var(--text-gold); background:var(--soft-gold-bg); padding:4px 10px; border-radius:12px;">🔥 ${e.streak} Days streak</span>
      </div>

      <div class="card greeting-card">
        <div style="width:70px; height:70px; flex-shrink:0;">
          ${b(e.gender,e.skinTone,e.hairColor,e.hairStyleIndex,e.eyeGlassesIndex,e.headwearColor,e.hasHeadwear)}
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
    `,document.getElementById("btn-start-checkin").addEventListener("click",()=>{g()});else if(m==="journey")t.innerHTML=`
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

      <div class="card">
        <strong style="font-size:15px; display:block; margin-bottom:12px;">📅 August calendar (Tap date for details)</strong>
        <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:6px; text-align:center;">
          ${Array.from({length:31},(r,o)=>o+1).map(r=>`
            <div style="background:${r<=24?"var(--soft-teal-bg)":"#f5f5f5"}; border-radius:8px; padding:6px 2px; cursor:pointer; font-size:11px; font-weight:700;" onclick="showDateDetails(${r})">
              ${r}<br>${r<=24?r%5===0?"🎁":"⭐":""}
            </div>
          `).join("")}
        </div>
      </div>
    `;else if(m==="rewards"){t.innerHTML=`
        <div style="text-align:center; padding:30px 10px;">
          <div style="font-size:64px; margin-bottom:12px;">🔒</div>
          <h2 style="font-size:22px; font-weight:700; color:var(--text-dark);">Mystery gift locked!</h2>
          <p style="font-size:13px; color:var(--text-muted); margin:8px 0 20px 0; line-height:1.5;">Complete tonight's check-in first to calculate points and unlock your scratch card!</p>
          <button class="btn-primary" onclick="startCheckInFromRewards()">🌙 Start nightly check-in now</button>
        </div>
      `;return}else m==="parent"&&(t.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">👨‍👩‍👧 Parent dashboard</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Children management & security settings</p>

      <div class="card">
        <strong style="display:block; margin-bottom:10px;">👶 Managed children grid</strong>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          ${s.map((r,o)=>`
            <div style="background:var(--soft-teal-bg); padding:10px; border-radius:16px; text-align:center;">
              <div style="width:54px; height:54px; margin:0 auto;">
                ${b(r.gender,r.skinTone,r.hairColor,r.hairStyleIndex,r.eyeGlassesIndex,r.headwearColor,r.hasHeadwear)}
              </div>
              <strong style="display:block; font-size:14px; margin-top:4px;">${r.name}</strong>
              <div style="margin-top:6px; display:flex; justify-content:center; gap:4px;">
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--primary-teal); color:white; cursor:pointer;" onclick="openAddChildVisualModal(${o})">🎨 Avatar</button>
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--accent-gold); color:black; cursor:pointer;" onclick="resetChildPattern(${o})">🔒 Pattern</button>
              </div>
            </div>
          `).join("")}
        </div>
        <button class="btn-secondary" style="margin-top:14px;" onclick="openAddChildVisualModal()">+ Add new child</button>
      </div>

      <div class="card">
        <strong style="display:block; margin-bottom:8px;">🔒 Security PIN settings</strong>
        <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px;">Current parent PIN code: <strong>${w}</strong></p>
        <button class="btn-primary" onclick="changeParentPinModal()">🔒 Change parent PIN code</button>
      </div>
    `)}let v="";window.tapPinKey=function(t){t==="C"?v="":t==="✓"?v===w?($=!0,f=-1,g()):(alert("Incorrect Parent PIN!"),v=""):v.length<4&&(v+=t);const e=document.getElementById("pin-display");e&&(e.innerText="•".repeat(v.length).padEnd(4,"•"))};window.lockParentGate=function(){$=!1,f=-1,v="",g()};window.selectKidFromGrid=function(t){f=t;const e=s[t];x=[],e.patternLock?e.requiresPatternLock=!0:e.requiresPatternLock=!1,g()};window.resetChildPattern=function(t){s[t].patternLock=null,alert(`✨ Pattern lock reset for ${s[t].name}! They can draw a new pattern on login.`),g()};window.changeParentPinModal=function(){const t=prompt("Enter new 4-Digit Parent PIN:");t&&t.length===4?(w=t,alert("✨ Parent PIN code updated successfully!"),g()):t&&alert("PIN code must be 4 digits!")};function I(){const t=document.getElementById("pattern-grid"),e=document.getElementById("pattern-path");if(!t||!e)return;const r=document.querySelectorAll(".pattern-dot");function o(i){const l=i.getBoundingClientRect(),p=t.getBoundingClientRect();return{x:l.left+l.width/2-p.left+12,y:l.top+l.height/2-p.top+12}}function a(){if(x.length<2){e.setAttribute("d","");return}let i="";x.forEach((l,p)=>{const u=document.getElementById(`pattern-dot-${l}`);if(u){const y=o(u);i+=p===0?`M ${y.x} ${y.y}`:` L ${y.x} ${y.y}`}}),e.setAttribute("d",i)}function d(i){const l=i.clientX||i.touches&&i.touches[0].clientX,p=i.clientY||i.touches&&i.touches[0].clientY;!l||!p||r.forEach(u=>{const y=u.getBoundingClientRect();if(l>=y.left&&l<=y.right&&p>=y.top&&p<=y.bottom){const C=parseInt(u.dataset.num);x.includes(C)||(x.push(C),u.style.background="var(--accent-gold)",u.style.borderColor="var(--accent-gold)",u.style.color="white",a())}})}t.addEventListener("pointerdown",i=>{k=!0,d(i)}),t.addEventListener("pointermove",i=>{k&&d(i)}),t.addEventListener("pointerup",()=>{k&&(k=!1,M())})}function M(){const t=s[f];t&&(t.patternLock?x.join("-")===t.patternLock?(t.requiresPatternLock=!1,g()):(alert("🔒 Pattern incorrect! Try again."),resetPatternDrawn()):x.length>=3?(t.patternLock=x.join("-"),t.requiresPatternLock=!1,alert(`✨ MashaAllah! New pattern saved for ${t.name}!`),g()):(alert("Connect at least 3 stars!"),resetPatternDrawn()))}window.resetPatternDrawn=function(){x=[];const t=document.getElementById("pattern-path");t&&t.setAttribute("d",""),[1,2,3,4,5,6,7,8,9].forEach(e=>{const r=document.getElementById(`pattern-dot-${e}`);r&&(r.style.background="#f0f4f8",r.style.borderColor="var(--primary-teal)",r.style.color="black")})};window.cancelKidSelection=function(){f=-1,g()};window.startCheckInFromRewards=function(){m="today",g()};window.openAddChildVisualModal=function(t=-1){const e=t>=0?s[t]:null;n={name:e?e.name:"",gender:e?e.gender:"boy",skinTone:e?e.skinTone:"#f5d0a0",hairColor:e?e.hairColor:"#0e0e0e",hairStyleIndex:e?e.hairStyleIndex:1,eyeGlassesIndex:e?e.eyeGlassesIndex:1,headwearColor:e?e.headwearColor:"#ffb300",hasHeadwear:!0},c="hairStyle";const r=document.createElement("div");r.id="visual-avatar-modal",r.style.cssText="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px;",r.innerHTML=`
    <div style="background:white; border-radius:24px; max-width:380px; width:100%; padding:20px; box-shadow:0 10px 25px rgba(0,0,0,0.2); font-family:var(--font-fredoka);" id="modal-content">
      <!-- Rendered dynamically -->
    </div>
  `,document.body.appendChild(r),h(t)};function h(t){const e=document.getElementById("modal-content");e&&(e.innerHTML=`
    <h3 style="font-size:18px; margin-bottom:12px; text-align:center; color:var(--text-dark);">🎨 Create your avatar</h3>

    <!-- Live Head Avatar Preview -->
    <div style="width:100px; height:100px; margin:0 auto 14px auto;" id="modal-head-preview">
      ${b(n.gender,n.skinTone,n.hairColor,n.hairStyleIndex,n.eyeGlassesIndex,n.headwearColor,!0)}
    </div>

    <!-- Child Name Field -->
    <input type="text" id="input-modal-name" value="${n.name}" placeholder="Child's Name (e.g. Maryam / Bilal)" style="width:100%; padding:10px 14px; border-radius:14px; border:1px solid #ccc; font-family:var(--font-fredoka); margin-bottom:14px; text-align:center; font-size:15px; font-weight:700;" />

    <!-- 5 Main Visual Category Cards Grid -->
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

    <!-- Sub-Grid of Clickable Sample Image Cards -->
    <div style="background:#f9f9f9; padding:12px; border-radius:16px; margin-bottom:16px;">
      ${G(t)}
    </div>

    <div style="display:flex; gap:10px;">
      <button class="btn-secondary" style="flex:1;" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" style="flex:1;" id="btn-save-modal-child">Save avatar 🎨</button>
    </div>
  `,document.getElementById("btn-save-modal-child").addEventListener("click",()=>{const r=document.getElementById("input-modal-name").value.trim();if(!r){alert("Please enter your child's name!");return}t>=0?(s[t].name=r,s[t].gender=n.gender,s[t].skinTone=n.skinTone,s[t].hairColor=n.hairColor,s[t].hairStyleIndex=n.hairStyleIndex,s[t].eyeGlassesIndex=n.eyeGlassesIndex):(s.push({id:Date.now().toString(),name:r,level:1,points:0,streak:1,title:"Good deeds starter 🌟",gender:n.gender,skinTone:n.skinTone,hairColor:n.hairColor,hairStyleIndex:n.hairStyleIndex,eyeGlassesIndex:n.eyeGlassesIndex,outfitColor:"#00897b",headwearColor:n.gender==="boy"?"#ffb300":"#81c784",hasHeadwear:!0,patternLock:null}),f=s.length-1),document.getElementById("visual-avatar-modal").remove(),g()}))}function G(t){if(c==="gender")return`
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
    `;if(c==="hairStyle")return`
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${P.map(e=>`
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${n.hairStyleIndex===e.index?"var(--accent-gold)":"#ccc"}; background:${n.hairStyleIndex===e.index?"var(--soft-gold-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalHairStyle(${e.index}, ${t})">
            <div style="font-size:24px;">${e.emoji}</div>
            <span style="font-size:10px; font-weight:700; display:block; margin-top:2px;">${e.label}</span>
          </div>
        `).join("")}
      </div>
    `;if(c==="hairColor")return`
      <div style="display:flex; justify-content:space-around;">
        ${L.map(e=>`
          <div style="width:42px; height:42px; border-radius:50%; background:${e}; border:3px solid ${n.hairColor===e?"var(--accent-gold)":"#ccc"}; cursor:pointer;" onclick="selectModalHairColor('${e}', ${t})"></div>
        `).join("")}
      </div>
    `;if(c==="skinTone")return`
      <div style="display:flex; justify-content:space-around;">
        ${z.map(e=>`
          <div style="width:42px; height:42px; border-radius:50%; background:${e}; border:3px solid ${n.skinTone===e?"var(--accent-gold)":"#ccc"}; cursor:pointer;" onclick="selectModalSkinTone('${e}', ${t})"></div>
        `).join("")}
      </div>
    `;if(c==="eyeGlasses")return`
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${S.map(e=>`
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${n.eyeGlassesIndex===e.index?"var(--accent-gold)":"#ccc"}; background:${n.eyeGlassesIndex===e.index?"var(--soft-gold-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGlasses(${e.index}, ${t})">
            <div style="font-size:24px;">${e.emoji}</div>
            <span style="font-size:10px; font-weight:700; display:block; margin-top:2px;">${e.label}</span>
          </div>
        `).join("")}
      </div>
    `}window.setModalCategory=function(t,e){c=t,h(e)};window.selectModalGender=function(t,e){n.gender=t,h(e)};window.selectModalHairStyle=function(t,e){n.hairStyleIndex=t,h(e)};window.selectModalHairColor=function(t,e){n.hairColor=t,h(e)};window.selectModalSkinTone=function(t,e){n.skinTone=t,h(e)};window.selectModalGlasses=function(t,e){n.eyeGlassesIndex=t,h(e)};window.closeModal=function(){const t=document.getElementById("visual-avatar-modal");t&&t.remove()};window.showDateDetails=function(t){const e=s[f]?s[f].name:"Child",r=30+t*3%40,o=t%5===0?"🍦 Ice cream treat":"📖 Bedtime story";alert(`📅 Date: August ${t}, 2026
👶 Child: ${e}
🌟 Score Earned: +${r} pts
🎁 Unlocked Gift: ${o}

Completed Deeds:
• Morning Dua recited 👍
• Prayed Salah on time 🕌
• Helped clean up toys 🧸`)};document.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(e=>e.classList.remove("active")),t.classList.add("active"),m=t.dataset.tab,g()})});g();
