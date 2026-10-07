(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();let h="today";const re=new Date;let $=re.getFullYear(),w=re.getMonth(),L=null;const se="kids-good-deeds-sound-enabled";let H=(()=>{try{return localStorage.getItem(se)!=="false"}catch(i){return console.warn("Could not read sound preference:",i),!0}})();const K=["January","February","March","April","May","June","July","August","September","October","November","December"];function oe(i=new Date){const e=i.getFullYear(),t=String(i.getMonth()+1).padStart(2,"0"),n=String(i.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}let y=[{id:"1",name:"Ahmad",level:1,points:120,streak:5,title:"Good deeds explorer 🌟",gender:"boy",skinTone:"#f5d0a0",hairColor:"#0e0e0e",hairStyleIndex:1,eyeGlassesIndex:1,outfitColor:"#00897b",headwearColor:"#ffb300",hasHeadwear:!0,patternLock:null,claimedRewards:[{emoji:"🍦",title:"Delicious Ice Cream"},{emoji:"📖",title:"Choose Bedtime Story"}],checkInHistory:{"2026-08-05":{completed:!0,score:16,reward:{emoji:"🍦",title:"Delicious Ice Cream"},details:["Morning Dua recited 🤲","Prayed Salah on time 🕌","Helped clean up toys 🧸"]},"2026-08-10":{completed:!0,score:18,reward:{emoji:"📖",title:"Choose Bedtime Story"},details:["Said Bismillah before eating 🍽️","Gave Salam to family 💬","Listened to Mom ❤️"]},"2026-08-15":{completed:!0,score:20,reward:{emoji:"🤗",title:"Big Warm Bear Hug"},details:["Prayed Salah on time 🕌","Shared toys with sibling 🤝","Recited morning dua 🤲"]},"2026-08-20":{completed:!0,score:15,reward:{emoji:"🎮",title:"Extra Play Time"},details:["Put toys away 🧸","Gave Salam 💬","Listened to parents ❤️"]},"2026-08-25":{completed:!0,score:22,reward:{emoji:"🌳",title:"Family Outing"},details:["Prayed on time 🕌","Morning dua 🤲","Helped clean room 🤝"]},"2026-08-30":{completed:!0,score:19,reward:{emoji:"🍦",title:"Delicious Ice Cream"},details:["Bismillah before eating 🍽️","Gave Salam 💬","Listened to Mom ❤️"]}}},{id:"2",name:"Maryam",level:2,points:210,streak:8,title:"Kindness champion 🌸",gender:"girl",skinTone:"#e0ac69",hairColor:"#4a2e1b",hairStyleIndex:2,eyeGlassesIndex:1,outfitColor:"#e91e63",headwearColor:"#81c784",hasHeadwear:!0,patternLock:null,claimedRewards:[{emoji:"🤗",title:"Big Warm Bear Hug"},{emoji:"🌳",title:"Family Outing"}],checkInHistory:{"2026-08-04":{completed:!0,score:18,reward:{emoji:"🤗",title:"Big Warm Bear Hug"},details:["Gave Salam to family 💬","Prayed Salah on time 🕌","Helped clean up 🧸"]},"2026-08-12":{completed:!0,score:21,reward:{emoji:"🌳",title:"Family Outing"},details:["Morning Dua 🤲","Helped someone 🤝","Shared toys 🧸"]},"2026-08-18":{completed:!0,score:19,reward:{emoji:"📖",title:"Choose Bedtime Story"},details:["Bismillah before eating 🍽️","Prayed on time 🕌","Spoke kindly ❤️"]},"2026-08-28":{completed:!0,score:24,reward:{emoji:"🍦",title:"Delicious Ice Cream"},details:["Recited morning dua 🤲","Listened respectfully ❤️","Helped clean 🧸"]}}}],v=0,q=!1,ee="1234",z="",S=[],F=null,D=!1,W=!1,B=!1,R=!1,C=0,T=[];const P=[{emoji:"🤲",text:"Did you recite your morning dua?",points:3,positive:!0,isEnabled:!0},{emoji:"🍽️",text:"Did you say Bismillah before eating?",points:2,positive:!0,isEnabled:!0},{emoji:"💬",text:"Did you give Salam to family?",points:2,positive:!0,isEnabled:!0},{emoji:"🤝",text:"Did you help someone today?",points:3,positive:!0,isEnabled:!0},{emoji:"🕌",text:"Did you pray Salah on time?",points:4,positive:!0,isEnabled:!0},{emoji:"❤️",text:"Did you listen respectfully to parents?",points:3,positive:!0,isEnabled:!0},{emoji:"🧸",text:"Did you put your toys away?",points:2,positive:!0,isEnabled:!0},{emoji:"🕊️",text:"Did you fight or argue with anyone?",points:2,positive:!1,isEnabled:!0}];let E=[{emoji:"🍦",title:"Delicious Ice Cream",requiredPoints:50,probability:.25},{emoji:"📖",title:"Choose Bedtime Story",requiredPoints:40,probability:.3},{emoji:"🤗",title:"Big Warm Bear Hug",requiredPoints:30,probability:.35},{emoji:"🎮",title:"Extra Play Time",requiredPoints:60,probability:.15},{emoji:"🌳",title:"Family Outing",requiredPoints:100,probability:.05}],k="hairStyle",f={gender:"boy",skinTone:"#f5d0a0",hairColor:"#0e0e0e",hairStyleIndex:1,eyeGlassesIndex:1,headwearColor:"#ffb300"};const ce=[{color:"#f5d0a0",name:"Fair"},{color:"#e0ac69",name:"Tan"},{color:"#c68642",name:"Olive"},{color:"#8d5524",name:"Bronze"},{color:"#5c3317",name:"Mahogany"}],pe=[{color:"#0e0e0e",name:"Black"},{color:"#4a2e1b",name:"Brown"},{color:"#d4a359",name:"Blonde"}],fe=[{index:1,label:"Short Crop 💇‍♂️",emoji:"👦"},{index:2,label:"Curly Top 🦱",emoji:"🦱"},{index:3,label:"Spiky Cut 🧑",emoji:"🧑"},{index:4,label:"Buzz Cut 💈",emoji:"💈"},{index:5,label:"Side Part 👦",emoji:"👨"},{index:6,label:"Wavy Waves 🌊",emoji:"🌊"},{index:7,label:"Neat Combed 👦",emoji:"👦"},{index:8,label:"Sunnah Kufi 🕌",emoji:"🕌"}],ue=[{index:1,label:"Emerald Hijab 🧕",emoji:"🧕"},{index:2,label:"Rose Hijab 🌸",emoji:"🌸"},{index:3,label:"Crown Hijab 👑",emoji:"👑"},{index:4,label:"Twin Tails 👧",emoji:"👧"},{index:5,label:"Bob Cut 💇‍♀️",emoji:"💇‍♀️"},{index:6,label:"Lavender Hijab 💜",emoji:"💜"},{index:7,label:"Ocean Hijab 🌊",emoji:"🌊"},{index:8,label:"Cute High Bun 👱‍♀️",emoji:"👱‍♀️"},{index:9,label:"Long Flowing Hair 💁‍♀️",emoji:"💁‍♀️"}],ge=[{index:1,label:"Clean 🌟",emoji:"✨"},{index:2,label:"Round 👓",emoji:"👓"},{index:3,label:"Square 🤓",emoji:"🤓"},{index:4,label:"Shades 🕶️",emoji:"🕶️"},{index:5,label:"Star ⭐",emoji:"⭐"}];function ye(){const i=window.speechSynthesis.getVoices();return i.length>0?Promise.resolve(i):new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,clearTimeout(o),window.speechSynthesis.removeEventListener("voiceschanged",n),e(window.speechSynthesis.getVoices()))},o=setTimeout(n,1500);window.speechSynthesis.addEventListener("voiceschanged",n)})}async function I(i,{showUnavailable:e=!1}={}){if(!H)return;if(!("speechSynthesis"in window)||!("SpeechSynthesisUtterance"in window)){e&&b({title:"No browser voice available",message:"This browser does not support speech synthesis.",icon:"🔇"});return}window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(i);t.pitch=.85,t.rate=.9;const n=await ye(),o=n.filter(r=>r.lang.toLowerCase().startsWith("en"));if(n.length===0||o.length===0){console.warn("No English speech synthesis voices are available."),e&&b({title:"No browser voice available",message:"This browser has no English speech voices available. Enable or install an English text-to-speech voice in your device settings, then restart the browser.",icon:"🔇"});return}const a=o.find(r=>/(^|[^a-z])(male|man|david|daniel|alex|guy)([^a-z]|$)/i.test(r.name));a?(t.voice=a,t.lang=a.lang):t.lang="en-US",t.onerror=r=>{console.error("Browser speech synthesis failed:",r.error),e&&b({title:"Browser voice could not play",message:`The browser could not start speech playback (${r.error}). Check the device speech settings and try again.`,icon:"🔇"})},window.speechSynthesis.speak(t)}function V(i){if(H)try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;if(i==="yes")[523.25,659.25,783.99,1046.5].forEach((o,a)=>{const r=t.createOscillator(),s=t.createGain();r.type="triangle",r.frequency.setValueAtTime(o,t.currentTime+a*.07),s.gain.setValueAtTime(.28,t.currentTime+a*.07),s.gain.exponentialRampToValueAtTime(.001,t.currentTime+a*.07+.32),r.connect(s),s.connect(t.destination),r.start(t.currentTime+a*.07),r.stop(t.currentTime+a*.07+.33)});else if(i==="tried")[659.25,987.77].forEach((o,a)=>{const r=t.createOscillator(),s=t.createGain();r.type="sine",r.frequency.setValueAtTime(o,t.currentTime+a*.09),s.gain.setValueAtTime(.24,t.currentTime+a*.09),s.gain.exponentialRampToValueAtTime(.001,t.currentTime+a*.09+.38),r.connect(s),s.connect(t.destination),r.start(t.currentTime+a*.09),r.stop(t.currentTime+a*.09+.39)});else if(i==="notToday"){const n=t.createOscillator(),o=t.createGain();n.type="sine",n.frequency.setValueAtTime(280,t.currentTime),n.frequency.exponentialRampToValueAtTime(160,t.currentTime+.35),o.gain.setValueAtTime(.18,t.currentTime),o.gain.exponentialRampToValueAtTime(.001,t.currentTime+.38),n.connect(o),o.connect(t.destination),n.start(t.currentTime),n.stop(t.currentTime+.4)}}catch(e){console.warn("AudioContext playback error:",e)}}function O(i,e,t){const n=document.querySelector(".phone-frame")||document.getElementById("app-viewport");if(!n)return;const o=document.createElement("div");if(o.className="cheerful-overlay-active",o.style.cssText=`
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: ${i==="droopyRose"?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.68)"};
    backdrop-filter: blur(3px);
    transition: opacity 0.35s ease;
  `,i==="droopyRose")o.innerHTML=`
      <div style="text-align:center; animation:droopAnim 1.6s ease forwards; background:white; padding:18px 24px; border-radius:24px; box-shadow:0 12px 30px rgba(0,0,0,0.14); border:2px solid #e2e8f0; max-width:85%;">
        <div style="font-size:56px; margin-bottom:6px;">🥀</div>
        <div style="font-size:16px; font-weight:700; color:var(--text-dark);">${e}</div>
        <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Every day is a fresh blessing! 🌱</div>
      </div>
    `;else{const a=i==="balloons"?["🎈","🎉","🎊","✨","🎈","🌟"]:["🌟","⭐","✨","💫","🌟","⭐"];let r="";for(let d=0;d<14;d++){const m=a[d%a.length],Y=6+Math.random()*88,j=65+Math.random()*25,_=18+Math.random()*20,J=Math.random()*.35,X=1.2+Math.random()*.5;r+=`
        <div style="position:absolute; left:${Y}%; top:${j}%; font-size:${_}px; animation:floatParticle ${X}s ease-out ${J}s forwards;">
          ${m}
        </div>
      `}const s=i==="balloons"?"linear-gradient(135deg, #e8f5e9, #c8e6c9)":"linear-gradient(135deg, #fff9c4, #fff59d)",l=i==="balloons"?"#81c784":"#ffd54f",c=i==="balloons"?"#2e7d32":"#f57f17";o.innerHTML=`
      ${r}
      <div style="text-align:center; animation:cheerfulBannerPop 1.5s ease forwards; background:${s}; border:2.5px solid ${l}; padding:18px 24px; border-radius:24px; box-shadow:0 12px 30px rgba(0,0,0,0.16); max-width:85%; z-index:2;">
        <div style="font-size:52px; margin-bottom:4px;">${t}</div>
        <div style="font-size:18px; font-weight:700; color:${c};">${e}</div>
      </div>
    `}n.appendChild(o),setTimeout(()=>{o.style.opacity="0",setTimeout(()=>o.remove(),350)},1300)}function b({title:i,message:e,icon:t="✨",buttonText:n="Got it!"}){return new Promise(o=>{const a=document.createElement("div");a.className="in-app-modal-overlay",a.innerHTML=`
      <div class="in-app-modal-card">
        <div class="in-app-modal-icon">${t}</div>
        <h3 class="in-app-modal-title">${i}</h3>
        <p class="in-app-modal-body">${e}</p>
        <button class="btn-primary in-app-btn-confirm" style="width:100%; padding:12px; font-size:15px; border-radius:16px;">${n}</button>
      </div>
    `,document.body.appendChild(a),a.querySelector(".in-app-btn-confirm").addEventListener("click",()=>{a.remove(),o()})})}function Z({title:i,message:e,icon:t="❓",confirmText:n="Yes",cancelText:o="Cancel",danger:a=!1,onConfirm:r,onCancel:s}){return new Promise(l=>{const c=document.createElement("div");c.className="in-app-modal-overlay",c.innerHTML=`
      <div class="in-app-modal-card">
        <div class="in-app-modal-icon ${a?"danger":""}">${t}</div>
        <h3 class="in-app-modal-title">${i}</h3>
        <p class="in-app-modal-body">${e}</p>
        <div style="display:flex; gap:10px;">
          <button class="btn-secondary in-app-btn-cancel" style="flex:1; padding:12px; font-size:14px; border-radius:16px;">${o}</button>
          <button class="btn-primary in-app-btn-confirm" style="flex:1; padding:12px; font-size:14px; border-radius:16px; ${a?"background:#e53935;":""}">${n}</button>
        </div>
      </div>
    `,document.body.appendChild(c),c.querySelector(".in-app-btn-cancel").addEventListener("click",()=>{c.remove(),s&&s(),l(!1)}),c.querySelector(".in-app-btn-confirm").addEventListener("click",()=>{c.remove(),r&&r(),l(!0)})})}function N(i="boy",e="#f5d0a0",t="#0e0e0e",n=1,o=1,a="#ffb300",r=!0){const s=i==="girl"?"#e91e63":"#00897b";let l="";if(i==="girl")if(r||n<=3||n===6||n===7){let d="#4db6ac";n===2?d="#ec407a":n===3?d="#ffb300":n===6?d="#9575cd":n===7&&(d="#42a5f5"),l=`
        <circle cx="50" cy="48" r="34" fill="${d}" />
        <ellipse cx="50" cy="50" rx="22" ry="26" fill="${e}" />
        <path d="M 28 42 C 35 22 65 22 72 42 C 60 28 40 28 28 42 Z" fill="${d}" />
      `}else n===4?l=`
        <circle cx="22" cy="48" r="14" fill="${t}" />
        <circle cx="78" cy="48" r="14" fill="${t}" />
        <circle cx="50" cy="48" r="26" fill="${e}" />
        <circle cx="21" cy="50" r="5" fill="${e}" />
        <circle cx="79" cy="50" r="5" fill="${e}" />
        <path d="M 24 44 C 35 24 65 24 76 44 C 60 32 40 32 24 44 Z" fill="${t}" />
      `:n===8?l=`
        <circle cx="50" cy="18" r="13" fill="${t}" />
        <circle cx="50" cy="26" r="5" fill="#ffb300" />
        <circle cx="21" cy="50" r="5" fill="${e}" />
        <circle cx="79" cy="50" r="5" fill="${e}" />
        <circle cx="50" cy="48" r="26" fill="${e}" />
        <path d="M 24 44 C 35 24 65 24 76 44 C 60 32 40 32 24 44 Z" fill="${t}" />
      `:n===9?l=`
        <path d="M 20 40 L 16 76 L 32 76 L 32 55 L 68 55 L 68 76 L 84 76 L 80 40 Z" fill="${t}" />
        <circle cx="50" cy="46" r="30" fill="${t}" />
        <circle cx="50" cy="48" r="26" fill="${e}" />
      `:l=`
        <circle cx="50" cy="46" r="30" fill="${t}" />
        <circle cx="50" cy="48" r="26" fill="${e}" />
      `;else if(r||n===8)l=`
        <circle cx="21" cy="50" r="5" fill="${e}" />
        <circle cx="79" cy="50" r="5" fill="${e}" />
        <circle cx="50" cy="48" r="27" fill="${e}" />
        <path d="M 21 44 A 29 29 0 0 1 79 44 Z" fill="${n===8?"#eceff1":a}" />
        <line x1="21" y1="44" x2="79" y2="44" stroke="#00897b" stroke-width="3" stroke-opacity="0.7" />
      `;else{let d="";switch(n){case 2:d=`<circle cx="28" cy="25" r="9" fill="${t}" />
                      <circle cx="39" cy="23" r="9" fill="${t}" />
                      <circle cx="50" cy="21" r="9" fill="${t}" />
                      <circle cx="61" cy="23" r="9" fill="${t}" />
                      <circle cx="72" cy="25" r="9" fill="${t}" />`;break;case 3:d=`<path d="M 22 44 L 30 18 L 40 30 L 50 16 L 60 30 L 70 18 L 78 44 Z" fill="${t}" />`;break;case 4:d=`<path d="M 22 46 A 28 28 0 0 1 78 46 Z" fill="${t}" />`;break;case 5:d=`<path d="M 22 44 C 30 18 70 22 78 44 Z" fill="${t}" />`;break;case 6:d=`<path d="M 22 44 C 28 20 40 24 50 18 C 60 14 72 22 78 44 Z" fill="${t}" />`;break;case 7:d=`<path d="M 22 44 C 26 18 74 20 78 44 Z" fill="${t}" />`;break;case 1:default:d=`<path d="M 22 45 A 28 28 0 0 1 78 45 Z" fill="${t}" />`;break}l=`
        <circle cx="21" cy="50" r="5" fill="${e}" />
        <circle cx="79" cy="50" r="5" fill="${e}" />
        <circle cx="50" cy="48" r="27" fill="${e}" />
        ${d}
      `}let c="";switch(o){case 2:c=`<circle cx="38" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <circle cx="62" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;break;case 3:c=`<rect x="30" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <rect x="54" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;break;case 4:c=`<rect x="28" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <rect x="53" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <line x1="47" y1="45" x2="53" y2="45" stroke="#212121" stroke-width="3" />`;break;case 5:c=`<circle cx="38" cy="48" r="9" fill="#ffb300" />
                    <circle cx="62" cy="48" r="9" fill="#ffb300" />`;break}return`
    <svg class="faceless-avatar-svg" viewBox="0 0 100 100">
      <path d="M 15 100 C 30 75 70 75 85 100 Z" fill="${s}" />
      <rect x="40" y="65" width="20" height="15" fill="${e}" />
      ${l}
      ${c}
    </svg>
  `}window.tapPinKey=function(i){const e=document.getElementById(`pin-btn-${i}`);e&&(e.style.transform="scale(0.9)",e.style.background="var(--primary-teal)",e.style.color="white",setTimeout(()=>{e.style.transform="scale(1)",e.style.background="#f9f9f9",e.style.color="black"},150)),i==="C"?z="":i==="✓"?ae():z.length<4&&(z+=i,z.length===4&&ae()),le()};function ae(){z===ee?(q=!0,z="",h="parent",u(),te()):setTimeout(()=>{b({title:"Incorrect PIN",message:"Incorrect parent PIN! Default PIN code is: 1234",icon:"🔒"}),z="",le()},150)}function le(){const i=document.getElementById("pin-display-bullets");i&&(i.innerHTML=[0,1,2,3].map(e=>`
      <div style="width:16px; height:16px; border-radius:50%; background:${e<z.length?"var(--primary-teal)":"#e0e0e0"}; border:2px solid ${e<z.length?"var(--primary-teal)":"#bdbdbd"};"></div>
    `).join(""))}function te(){const i=document.querySelector(".bottom-nav");if(!i)return;const e=v>=0;i.innerHTML=e?`
    <button class="nav-item ${h==="today"?"active":""}" data-tab="today" onclick="switchTab('today')">
      <span class="nav-icon">🌅</span>
      <span class="nav-label">Today</span>
    </button>
    <button class="nav-item ${h==="journey"?"active":""}" data-tab="journey" onclick="switchTab('journey')">
      <span class="nav-icon">📅</span>
      <span class="nav-label">Journey</span>
    </button>
    <button class="nav-item ${h==="learn"?"active":""}" data-tab="learn" onclick="switchTab('learn')">
      <span class="nav-icon">📖</span>
      <span class="nav-label">Learn</span>
    </button>
  `:`
    <button class="nav-item ${h==="today"?"active":""}" data-tab="today" onclick="switchTab('today')">
      <span class="nav-icon">🏠</span>
      <span class="nav-label">Home</span>
    </button>
    <button class="nav-item ${h==="parent"?"active":""}" data-tab="parent" onclick="switchTab('parent')">
      <span class="nav-icon">👨‍👩‍👧</span>
      <span class="nav-label">Parent Menu</span>
    </button>
  `}window.switchTab=function(i){i==="parent"&&!q&&(z=""),i!=="today"&&(B||R)&&(B=!1,R=!1,T=[],C=0,window.currentCheckInReward=null),h=i,u(),te()};function u(){const i=document.getElementById("app-viewport");if(te(),i.classList.toggle("checkin-active",B&&h==="today"),h==="parent"&&!q){i.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="font-size:54px; margin-bottom:8px;">🔒</div>
        <h2 style="font-size:22px; color:var(--text-dark);">Parent PIN login</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Enter security code to access parent menu</p>
      </div>

      <div class="card" style="text-align:center; padding:24px 16px;">
        <div style="display:flex; justify-content:center; gap:12px; margin-bottom:20px;" id="pin-display-bullets">
          ${[0,1,2,3].map(t=>`
            <div style="width:16px; height:16px; border-radius:50%; background:${t<z.length?"var(--primary-teal)":"#e0e0e0"}; border:2px solid ${t<z.length?"var(--primary-teal)":"#bdbdbd"};"></div>
          `).join("")}
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; width:210px; margin:0 auto;" id="keypad">
          ${[1,2,3,4,5,6,7,8,9,"C",0,"✓"].map(t=>`
            <button id="pin-btn-${t}" class="pattern-dot" style="width:54px; height:54px; border-radius:18px; border:1px solid #ccc; font-size:20px; font-weight:700; background:#f9f9f9; cursor:pointer; transition:transform 0.15s ease;" onclick="window.tapPinKey('${t}')">
              ${t}
            </button>
          `).join("")}
        </div>
        <div style="margin-top:14px; font-size:12px; font-weight:bold; color:var(--primary-teal);">Default PIN: 1234</div>
      </div>
    `;return}if(h==="parent"&&q){i.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">👨‍👩‍👧 Parent dashboard</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Children management & security settings</p>

      <div class="card">
        <strong style="display:block; margin-bottom:10px;">👶 Managed children grid</strong>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          ${y.length>0?y.map((t,n)=>`
            <div style="background:var(--soft-teal-bg); padding:10px; border-radius:16px; text-align:center;">
              <div style="width:54px; height:54px; margin:0 auto;">
                ${N(t.gender,t.skinTone,t.hairColor,t.hairStyleIndex,t.eyeGlassesIndex,t.headwearColor,t.hasHeadwear)}
              </div>
              <strong style="display:block; font-size:14px; margin-top:4px;">${t.name}</strong>
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
          <strong style="font-size:15px;">✅ Daily habits</strong>
          <button style="border:none; background:var(--primary-teal); color:white; border-radius:12px; padding:4px 12px; font-family:var(--font-fredoka); font-size:12px; cursor:pointer;" onclick="addDeedModal()">+ Add</button>
        </div>
        ${P.map((t,n)=>`
          <div style="display:flex; align-items:center; gap:8px; padding:7px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:20px;">${t.emoji}</span>
            <div style="flex:1;">
              <div style="font-size:13px; font-weight:700; color:${t.isEnabled!==!1?"var(--text-dark)":"#aaa"};">${t.text}</div>
              <div style="font-size:10px; color:${t.positive?"var(--primary-teal)":"#e53935"};">${t.positive?"+":"-"}${t.points} pts</div>
            </div>
            <input type="checkbox" ${t.isEnabled!==!1?"checked":""} onchange="toggleDeed(${n})" style="width:18px; height:18px; cursor:pointer;">
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
        ${E.map((t,n)=>`
          <div style="display:flex; align-items:center; gap:8px; padding:7px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:22px;">${t.emoji}</span>
            <div style="flex:1;">
              <div style="font-size:13px; font-weight:700;">${t.title}</div>
              <div style="font-size:10px; color:var(--text-muted);">Requires ${t.requiredPoints} pts • ${Math.round(t.probability*100)}% chance</div>
            </div>
            <button style="border:none; background:#ffebee; color:#e53935; border-radius:8px; padding:3px 7px; font-size:12px; cursor:pointer;" onclick="deleteReward(${n})">🗑️</button>
          </div>
        `).join("")}
      </div>

      <!-- SETTINGS -->
      <div class="card">
        <strong style="display:block; margin-bottom:10px; font-size:15px;">⚙️ Settings</strong>
        <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid #f0f0f0; font-size:13px;"><span>🔊 Sound effects and voice prompts</span><input id="sound-enabled-toggle" type="checkbox" ${H?"checked":""} aria-label="Enable sound effects and voice prompts" onchange="setSoundEnabled(this.checked)" style="width:18px; height:18px;"></div>
        <p style="font-size:11px; color:var(--text-muted); margin:6px 0;">Uses browser voices; prefers a male-sounding English voice when identifiable.</p>
        <button class="btn-primary" style="margin:4px 0 10px;" onclick="testPreviewVoice()">🔊 Test voice</button>
        <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid #f0f0f0; font-size:13px;"><span>🏆 Family leaderboard</span><input type="checkbox" checked style="width:18px; height:18px;"></div>
        <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; font-size:13px;"><span>🔥 Streak counter</span><input type="checkbox" checked style="width:18px; height:18px;"></div>
        <button class="btn-primary" style="margin-top:10px;" onclick="changeParentPinModal()">🔒 Change parent PIN</button>
      </div>

      <!-- DANGER ZONE -->
      <div class="card" style="border:2px solid #ffcdd2;">
        <strong style="display:block; margin-bottom:6px; color:#d32f2f; font-size:15px;">⚠️ Reset all data</strong>
        <p style="font-size:12px; color:var(--text-muted); margin-bottom:10px;">Delete all profiles, points &amp; history. Cannot be undone.</p>
        <button class="btn-primary" style="background:linear-gradient(135deg,#e53935,#c62828); box-shadow:0 4px 14px rgba(229,57,53,.3);" onclick="resetAllAppDataModal()">⚠️ Reset app to factory fresh</button>
      </div>

      <button style="border:none; background:none; color:red; font-family:var(--font-fredoka); font-size:13px; margin-top:14px; width:100%; cursor:pointer;" onclick="lockParentGate()">
        🔒 Lock parent menu &amp; exit
      </button>
    `;return}if(v===-1){i.innerHTML=`
      <div style="text-align:center; padding:10px 0;">
        <h2 style="font-size:22px; color:var(--text-dark);">🌟 Assalamu Alaikum!</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Tap your profile avatar to log in</p>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:20px 0;">
        ${y.length>0?y.map((t,n)=>`
          <div class="card" style="text-align:center; cursor:pointer; padding:16px; border:2px solid transparent;" onclick="selectKidFromGrid(${n})">
            <div style="width:76px; height:76px; margin:0 auto 10px auto;">
              ${N(t.gender,t.skinTone,t.hairColor,t.hairStyleIndex,t.eyeGlassesIndex,t.headwearColor,t.hasHeadwear)}
            </div>
            <strong style="font-size:16px; display:block; color:var(--text-dark);">${t.name}</strong>
            <span style="font-size:11px; color:var(--text-muted);">${t.patternLock?"🔒 Pattern Set":"✨ Tap to create pattern"}</span>
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
    `;return}const e=y[v];if(e.requiresPatternLock||!e.patternLock){const t=!e.patternLock;i.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="width:76px; height:76px; margin:0 auto 10px auto;">
          ${N(e.gender,e.skinTone,e.hairColor,e.hairStyleIndex,e.eyeGlassesIndex,e.headwearColor,e.hasHeadwear)}
        </div>
        <h2 style="font-size:20px; color:var(--text-dark);">${D?"Confirm pattern ⭐":t?`Create pattern for ${e.name}`:`Welcome back, ${e.name}!`}</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">${D?"Draw pattern again to confirm!":"Drag your finger across stars to draw pattern"}</p>
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
    `,setTimeout(xe,100);return}if(B&&h==="today"){const t=P.filter(s=>s.isEnabled!==!1),n=t.length,o=t[C],a=n>0?Math.round((C+1)/n*100):0;let r=0;T.forEach(s=>{s.deed.positive?s.answer==="full"?r+=s.deed.points:s.answer==="partial"&&(r+=Math.floor(s.deed.points/2)):s.answer==="full"&&(r-=s.deed.points)}),i.innerHTML=`
      <!-- Top header bar with cancel and progress -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
        <button style="border:none; background:none; font-family:var(--font-fredoka); font-size:13px; font-weight:700; color:var(--text-muted); cursor:pointer; padding:4px 0; display:flex; align-items:center; gap:4px;" onclick="window.cancelCheckIn()">
          ⬅️ Cancel
        </button>
        <span style="font-size:12px; font-weight:700; color:var(--primary-teal); background:var(--soft-teal-bg); padding:4px 10px; border-radius:12px;">
          Question ${C+1} of ${n}
        </span>
      </div>

      <div style="height:6px; background:#e0e0e0; border-radius:6px; margin:8px 0 16px 0; overflow:hidden;">
        <div style="height:6px; width:${a}%; background:var(--accent-gold); border-radius:6px; transition:width 0.4s ease;"></div>
      </div>

      <!-- Single Mission Card -->
      <div class="card" style="text-align:center; padding:24px 18px; background:${o.positive?"linear-gradient(135deg,#e0f2f1,#ffffff)":"linear-gradient(135deg,#fff8e1,#ffffff)"}; border:2.5px solid ${o.positive?"#80cbc4":"#ffe082"}; border-radius:24px; box-shadow:0 6px 18px rgba(0,0,0,0.06);">
        <div style="width:72px; height:72px; margin:0 auto 12px auto; border-radius:50%; background:${o.positive?"var(--soft-gold-bg)":"#ffebee"}; display:flex; align-items:center; justify-content:center; font-size:36px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          ${o.emoji}
        </div>
        <h3 style="font-size:18px; font-weight:700; color:var(--text-dark); line-height:1.35; margin-bottom:8px;">${o.text}</h3>
        <span style="display:inline-block; font-size:12px; font-weight:700; color:${o.positive?"var(--primary-teal)":"#e65100"}; background:white; padding:4px 12px; border-radius:12px; border:1px solid ${o.positive?"#b2dfdb":"#ffcc80"};">
          ${o.positive?`+${o.points} pts if yes`:`-${o.points} pts if occurred`}
        </span>
      </div>

      <!-- Response Buttons (Disabled temporarily during celebration) -->
      <div id="checkin-btn-group" style="display:flex; flex-direction:column; gap:10px; margin-top:14px;">
        ${o.positive?`
          <button class="btn-primary" style="background:linear-gradient(135deg,#43a047,#2e7d32); padding:13px; font-size:15px; border-radius:18px;" onclick="window.handleSingleDeedChoice('full', ${o.points})">
            ✅ Yes, Alhamdulillah! &nbsp;<span style="font-size:12px; opacity:0.85;">(+${o.points} pts)</span>
          </button>
          <button class="btn-primary" style="background:linear-gradient(135deg,#0288d1,#0277bd); padding:12px; font-size:15px; border-radius:18px;" onclick="window.handleSingleDeedChoice('partial', ${Math.floor(o.points/2)||1})">
            🙂 Tried today &nbsp;<span style="font-size:12px; opacity:0.85;">(+${Math.floor(o.points/2)||1} pt)</span>
          </button>
          <button style="width:100%; padding:12px; border-radius:18px; border:2px solid #cbd5e1; background:white; font-family:var(--font-fredoka); font-size:14px; font-weight:700; color:var(--text-muted); cursor:pointer;" onclick="window.handleSingleDeedChoice('no', 0)">
            ➖ Not today &nbsp;<span style="font-size:11px; opacity:0.75;">(0 pts)</span>
          </button>
        `:`
          <button class="btn-primary" style="background:linear-gradient(135deg,#43a047,#2e7d32); padding:13px; font-size:15px; border-radius:18px;" onclick="window.handleSingleDeedChoice('no', 0)">
            💪 No, avoided it! &nbsp;<span style="font-size:12px; opacity:0.85;">(0 pts)</span>
          </button>
          <button class="btn-primary" style="background:linear-gradient(135deg,#e53935,#c62828); padding:13px; font-size:15px; border-radius:18px;" onclick="window.handleSingleDeedChoice('full', -${o.points})">
            😕 Yes, happened &nbsp;<span style="font-size:12px; opacity:0.85;">(-${o.points} pts)</span>
          </button>
        `}
      </div>

      <div class="checkin-score-widget">
        <div id="chalk-delta-anchor" style="position:relative;"></div>
        <div class="checkin-score-value chalk-score-pop" id="checkin-score-value">
          ${r} pts
        </div>
      </div>
    `,requestAnimationFrame(()=>{const s=i.querySelector(".checkin-score-widget"),l=i.querySelector("#checkin-btn-group"),c=document.querySelector(".bottom-nav");if(!s||!l||!c)return;const d=i.getBoundingClientRect().top,m=(l.getBoundingClientRect().bottom+c.getBoundingClientRect().top)/2;s.style.bottom="auto",s.style.top=`${m-d+i.scrollTop-s.offsetHeight/2}px`});return}if(window.handleSingleDeedChoice=function(t,n){const o=P.filter(c=>c.isEnabled!==!1),a=o[C],r=document.getElementById("checkin-btn-group");r&&r.querySelectorAll("button").forEach(d=>{d.style.pointerEvents="none",d.style.opacity="0.65"});const s=document.getElementById("chalk-delta-anchor");if(s){const c=document.createElement("div"),d=n>0?"positive":n<0?"negative":"neutral",m=n>0?"+":"";c.className=`chalk-delta-popup ${d}`,c.textContent=`${m}${n} pts`,s.appendChild(c)}const l=document.getElementById("checkin-score-value");if(l){let c=0;T.forEach(d=>{d.deed.positive?d.answer==="full"?c+=d.deed.points:d.answer==="partial"&&(c+=Math.floor(d.deed.points/2)):d.answer==="full"&&(c-=d.deed.points)}),c+=n,l.classList.add("chalk-bump"),setTimeout(()=>{l&&(l.textContent=`${c} pts`)},250)}a.positive?t==="full"?(V("yes"),I("Alhamdulillah!"),O("balloons","Alhamdulillah! Great Job! ✨","🎉")):t==="partial"?(V("tried"),I("MashaAllah!"),O("stars","MashaAllah! Good Effort! 🌱","🌟")):(V("notToday"),I("Tomorrow is another chance, InshaAllah!"),O("droopyRose","Tomorrow is another chance, InshaAllah! 🌱","🥀")):t==="no"?(V("yes"),I("MashaAllah! Excellent self-control!"),O("balloons","MashaAllah! Excellent Self-Control! 💪","🌟")):(V("notToday"),I("Tomorrow is another chance, InshaAllah!"),O("droopyRose","It's okay! Tomorrow is another chance, InshaAllah! 🌱","🥀")),T.push({index:C,deed:a,answer:t}),setTimeout(()=>{C++,C>=o.length&&(B=!1,R=!0),u()},1400)},R&&h==="today"){let t=0;T.forEach(a=>{a.deed.positive?a.answer==="full"?t+=a.deed.points:a.answer==="partial"&&(t+=Math.floor(a.deed.points/2)):a.answer==="full"&&(t-=a.deed.points)}),window.currentCheckInReward||(window.currentCheckInReward=E[Math.floor(Math.random()*E.length)]);const n=window.currentCheckInReward,o=t>=15?{text:"MashaAllah! What an amazing day! 🌟",bg:"#e0f2f1",color:"#00897b"}:t>=8?{text:"Alhamdulillah! Keep it up tomorrow! 😊",bg:"#fff8e1",color:"#f9a825"}:{text:"It's okay. Tomorrow is another chance, InshaAllah. 🌱",bg:"#f5f5f5",color:"#78909c"};i.innerHTML=`
      <div style="text-align:center; padding:12px 0 8px 0;">
        <div style="font-size:48px;">🌟</div>
        <h2 style="font-size:22px; color:var(--text-dark); margin-top:4px;">What a day, ${e.name}!</h2>
        <div style="font-size:36px; font-weight:700; color:var(--primary-teal); margin:4px 0;">+${t} pts</div>
        <div style="font-size:12px; font-weight:700; color:${o.color}; background:${o.bg}; padding:6px 14px; border-radius:12px; display:inline-block;">${o.text}</div>
      </div>

      <!-- INTERACTIVE REWARD UNLOCKED SCRATCH CARD -->
      <div class="card" style="background:linear-gradient(135deg,#fff8e1,#ffe082); border:2px dashed var(--accent-gold); text-align:center; padding:12px; margin-bottom:12px; position:relative; overflow:hidden;">
        <span style="font-size:10px; font-weight:700; color:#e65100; text-transform:uppercase; letter-spacing:1px;">🎁 You earned a mystery reward!</span>
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
        ${T.map(a=>{const r=a.deed.positive?a.answer==="full"?a.deed.points:a.answer==="partial"?Math.floor(a.deed.points/2):0:a.answer==="full"?-a.deed.points:0,s=r>0?"#00897b":r<0?"#e53935":"#9e9e9e";return`<div style="display:flex; align-items:center; gap:10px; padding:6px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:20px;">${a.deed.emoji}</span>
            <span style="flex:1; font-size:12px;">${a.deed.text}</span>
            <span style="font-size:12px; font-weight:700; color:${s};">${r>0?"+"+r:r<0?r:"–"}</span>
          </div>`}).join("")}
      </div>

      <button class="btn-primary" style="margin-top:12px;" onclick="window.finishCheckIn(${t}, '${n.title}', '${n.emoji}')">🎁 Done — Save & See My Points!</button>
    `,setTimeout(()=>Q("checkin-scratch-canvas"),100),window.finishCheckIn=function(a,r,s){const l=y[v];if(l){l.points+=Math.max(0,a),l.claimedRewards||(l.claimedRewards=[]),l.claimedRewards.push({emoji:s,title:r}),l.checkInHistory||(l.checkInHistory={});const c=T.filter(m=>m.deed.positive&&m.answer!=="no"||!m.deed.positive&&m.answer==="no").map(m=>`${m.deed.emoji} ${m.deed.text}`);l.checkInHistory[oe()]={completed:!0,score:a,reward:{emoji:s,title:r},details:c};const d=new Date;$=d.getFullYear(),w=d.getMonth()}R=!1,window.currentCheckInReward=null,T=[],C=0,u()};return}if(h==="today"){const t=oe(),n=e.checkInHistory&&e.checkInHistory[t];i.innerHTML=`
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
          ${N(e.gender,e.skinTone,e.hairColor,e.hairStyleIndex,e.eyeGlassesIndex,e.headwearColor,e.hasHeadwear)}
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
        <button style="flex:1; padding:10px; border-radius:16px; border:2px solid var(--soft-teal-bg); background:white; font-family:var(--font-fredoka); font-weight:700; font-size:12px; color:var(--primary-teal); cursor:pointer;" onclick="openAddChildVisualModal(${v})">
          🎨 Change avatar
        </button>
        <button style="flex:1; padding:10px; border-radius:16px; border:2px solid var(--soft-gold-bg); background:white; font-family:var(--font-fredoka); font-weight:700; font-size:12px; color:var(--text-gold); cursor:pointer;" onclick="changeChildPatternModal(${v})">
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
    `;const o=document.getElementById("btn-start-checkin");o&&o.addEventListener("click",()=>{B=!0,R=!1,C=0,T=[],u()})}else if(h==="journey"){const t=new Date($,w+1,0).getDate(),n=new Date,o=$===n.getFullYear()&&w===n.getMonth(),a=Object.entries(e.checkInHistory||{}).filter(([p,g])=>{const x=new Date(`${p}T00:00:00`);return!Number.isNaN(x.getTime())&&g.completed!==!1&&x.getFullYear()===$&&x.getMonth()===w}),r=a.reduce((p,[,g])=>p+(Number(g.score)||0),0),s=a.reduce((p,[,g])=>p+(Array.isArray(g.details)?g.details.length:0),0),l=a.filter(([,p])=>p.completed!==!1).length,c=Array(Math.ceil(t/7)).fill(0);a.forEach(([p,g])=>{const x=Number(p.slice(8,10));Number.isInteger(x)&&x>=1&&x<=t&&(c[Math.floor((x-1)/7)]+=Number(g.score)||0)});const d=Math.min(0,...c),m=Math.max(0,...c),Y=m-d,j=c.map((p,g)=>({x:20+g*240/Math.max(c.length-1,1),y:Y===0?52:14+(m-p)/Y*76,points:p})),_=j.map((p,g)=>`${g===0?"M":"L"} ${p.x} ${p.y}`).join(" "),J=`M ${j[0].x} 94 ${j.map(p=>`L ${p.x} ${p.y}`).join(" ")} L ${j[j.length-1].x} 94 Z`,X=l===0?'<div style="padding:28px 0; text-align:center; color:var(--text-muted); font-size:12px;">No check-ins recorded for this month yet.</div>':`
          <svg style="width:100%; height:100%; overflow:visible;" viewBox="0 0 280 120" role="img" aria-label="Weekly points trend">
            <defs>
              <linearGradient id="line-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--primary-teal)" stop-opacity="0.4"/>
                <stop offset="100%" stop-color="var(--primary-teal)" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <path d="${J}" fill="url(#line-grad)"/>
            <path d="${_}" stroke="var(--primary-teal)" stroke-width="4" fill="none" stroke-linecap="round"/>
            ${j.map((p,g)=>`
                  <circle cx="${p.x}" cy="${p.y}" r="5" fill="var(--accent-gold)"/>
                  <text x="${p.x}" y="${p.y-9}" font-size="9" font-weight="bold" fill="var(--primary-teal)" text-anchor="middle">${p.points}</text>
                  <text x="${p.x}" y="115" font-size="9" fill="var(--text-muted)" text-anchor="middle">W${g+1}</text>
                `).join("")}
          </svg>
        `;let ne="";if(L&&L.month===w&&L.year===$){const p=L.day,g=`${$}-${String(w+1).padStart(2,"0")}-${String(p).padStart(2,"0")}`,x=e.checkInHistory&&e.checkInHistory[g];ne=`
        <div class="card" style="background:linear-gradient(135deg,#e0f2f1,#fff); border:2px solid var(--primary-teal); position:relative; margin-top:12px;">
          <button style="position:absolute; top:10px; right:12px; border:none; background:none; font-size:16px; cursor:pointer; color:var(--text-muted);" onclick="window.closeDateDetails()">✖️</button>
          
          <div style="font-size:14px; font-weight:700; color:var(--primary-teal); margin-bottom:4px;">
            📅 Date: ${K[w]} ${p}, ${$}
          </div>

          ${x?`
            <div style="font-size:12px; font-weight:700; color:var(--primary-teal); margin-bottom:6px;">
              Done, Alhamdulillah! 🎉
            </div>
            <div style="display:flex; gap:10px; margin:8px 0;">
              <div style="background:white; padding:6px 12px; border-radius:10px; border:1px solid #b2dfdb;">
                <span style="font-size:10px; color:var(--text-muted); display:block;">Score Achieved</span>
                <strong style="font-size:14px; color:var(--primary-teal);">+${x.score} pts ⭐</strong>
              </div>
              <div style="background:white; padding:6px 12px; border-radius:10px; border:1px solid #ffe082;">
                <span style="font-size:10px; color:var(--text-muted); display:block;">Reward Unlocked</span>
                <strong style="font-size:12px; color:#e65100;">${x.reward?x.reward.emoji+" "+x.reward.title:"🍦 Treat"}</strong>
              </div>
            </div>
            ${x.details&&x.details.length>0?`
              <div style="font-size:11px; font-weight:700; color:var(--text-dark); margin-top:6px; margin-bottom:2px;">Completed Deeds:</div>
              <ul style="font-size:11px; color:var(--text-muted); padding-left:18px; margin:0;">
                ${x.details.map(A=>`<li>${A}</li>`).join("")}
              </ul>
            `:""}
          `:`
            <div style="font-size:12px; color:var(--text-muted); padding:6px 0;">
              🌱 No check-in recorded for this date.
            </div>
          `}
        </div>
      `}i.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">📅 My good-deed journey</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Track ${e.name}'s growth and habits</p>

      <div class="card" style="background:linear-gradient(135deg, var(--primary-teal), #26a69a); color:white;">
        <div style="text-align:center; font-size:18px; font-weight:700; margin-bottom:12px;">${K[w]} ${$} summary 🌟</div>
        <div style="display:flex; justify-content:space-around; text-align:center;">
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${r}</div><div style="font-size:11px;">Points</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${s}</div><div style="font-size:11px;">Good deeds</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${l}</div><div style="font-size:11px;">Check-in days</div></div>
        </div>
      </div>

      <!-- Family Stars Leaderboard -->
      <div class="card">
        <strong style="font-size:15px; display:block; margin-bottom:10px;">🌟 Family Stars Leaderboard</strong>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${y.slice().sort((p,g)=>g.points-p.points).map((p,g)=>{const x=g===0?"🥇":g===1?"🥈":"🥉",A=["Kindness Champion 🌸","Dua Star 🤲","Helping Hero 🤝","Manners Explorer 🌟"],de=A[g%A.length];return`
              <div style="display:flex; align-items:center; gap:10px; background:${g===0?"var(--soft-gold-bg)":"#f9f9f9"}; padding:8px 12px; border-radius:14px; border:1px solid ${g===0?"var(--accent-gold)":"#eee"};">
                <span style="font-size:22px;">${x}</span>
                <div style="width:36px; height:36px; flex-shrink:0;">
                  ${N(p.gender,p.skinTone,p.hairColor,p.hairStyleIndex,p.eyeGlassesIndex,p.headwearColor,p.hasHeadwear)}
                </div>
                <div style="flex:1;">
                  <strong style="font-size:13px; display:block; color:var(--text-dark);">${p.name}</strong>
                  <span style="font-size:10px; color:var(--primary-teal); font-weight:700;">${de}</span>
                </div>
                <div style="font-size:14px; font-weight:700; color:var(--primary-teal);">${p.points} pts</div>
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- Achievement Trend LINE CHART Graph -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <strong style="font-size:15px;">📊 Achievement trend graph</strong>
          <span style="font-size:11px; color:var(--primary-teal); font-weight:700;">${K[w]} ${$}</span>
        </div>
        <div style="position:relative; height:120px; width:100%;">${X}</div>
      </div>

      <!-- Interactive Calendar with Month Traversal -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:12px; font-weight:700; padding:4px 10px; border-radius:10px; cursor:pointer;" onclick="window.changeCalendarMonth(-1)">◀ Prev</button>
          <strong style="font-size:15px; color:var(--text-dark);">${K[w]} ${$}</strong>
          <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:12px; font-weight:700; padding:4px 10px; border-radius:10px; cursor:pointer;" onclick="window.changeCalendarMonth(1)">Next ▶</button>
        </div>

        <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:6px; text-align:center;">
          ${Array.from({length:t},(p,g)=>g+1).map(p=>{const g=`${$}-${String(w+1).padStart(2,"0")}-${String(p).padStart(2,"0")}`,x=e.checkInHistory&&e.checkInHistory[g],A=o&&p===n.getDate();return`
              <div style="background:${A?"var(--accent-gold)":x?"var(--soft-teal-bg)":"#f5f5f5"}; color:${A?"white":"black"}; border-radius:8px; padding:6px 2px; cursor:pointer; font-size:11px; font-weight:700; border:${A?"2px solid #ff8f00":"none"};" onclick="window.showDateDetails(${p})">
                ${p}${A?" (Today)":""}<br>${x?"⭐":""}
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- INLINE POPUP / CARD FOR SELECTED DATE DETAILS -->
      ${ne}
    `}else if(h==="rewards"){const t=e;t.claimedRewards||(t.claimedRewards=[]),i.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:4px;">🎁 Surprise Rewards</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">Earn points to unlock mystery scratch cards!</p>

      <div class="card" style="background:linear-gradient(135deg,#ff9800,#f57c00); color:white; text-align:center; padding:14px;">
        <div style="font-size:13px; opacity:0.9;">Your Available Points</div>
        <div style="font-size:32px; font-weight:700; color:#fff; text-shadow:0 2px 4px rgba(0,0,0,0.2);">⭐ ${t.points} Pts</div>
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
        <strong style="font-size:15px; display:block; margin-bottom:10px;">🏆 My Unlocked & Claimed Gifts (${t.claimedRewards.length})</strong>
        ${t.claimedRewards.length>0?t.claimedRewards.map(n=>`
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
    `,setTimeout(Q,100)}else h==="learn"&&(i.innerHTML=`
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
    `)}window.lockParentGate=function(){q=!1,v=-1,z="",u()};window.setSoundEnabled=function(i){H=!!i;try{localStorage.setItem(se,String(H))}catch(e){console.error("Could not save sound preference:",e),b({title:"Sound setting not saved",message:"This browser could not save the setting for your next visit.",icon:"⚠️"})}!H&&"speechSynthesis"in window&&window.speechSynthesis.cancel()};window.testPreviewVoice=function(){if(!H){b({title:"Voice is muted",message:"Turn on sound effects and voice prompts to test the voice.",icon:"🔇"});return}I("Assalamu alaikum! MashaAllah, you are doing great!",{showUnavailable:!0})};window.selectKidFromGrid=function(i){v=i;const e=y[i];S=[],D=!1,F=null,e.requiresPatternLock=!1,h="today",I(`Assalamu Alaikum ${e.name}! Let's see what you did today!`),u()};window.resetChildPattern=function(i){y[i].patternLock=null,b({title:"Pattern reset",message:`Pattern lock reset for ${y[i].name}! They can draw a new pattern on login.`,icon:"✨"}),u()};window.toggleDeed=function(i){P[i].isEnabled=!P[i].isEnabled,u()};window.deleteDeed=function(i){Z({title:"Delete habit",message:`Delete habit "${P[i].text}"?

This cannot be undone.`,icon:"🗑️",confirmText:"Delete",cancelText:"Keep",danger:!0,onConfirm:()=>{P.splice(i,1),u()}})};window.addDeedModal=function(){const i=document.createElement("div");i.className="in-app-modal-overlay",i.innerHTML=`
    <div class="in-app-modal-card">
      <div class="in-app-modal-icon">✅</div>
      <h3 class="in-app-modal-title">Add new habit</h3>
      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:18px; text-align:left;">
        <div>
          <label style="font-size:12px; font-weight:700; color:var(--text-muted); display:block; margin-bottom:4px;">Habit question</label>
          <input class="in-app-input" id="add-deed-text" type="text" placeholder='e.g. "Did you share something today?"' />
        </div>
        <div>
          <label style="font-size:12px; font-weight:700; color:var(--text-muted); display:block; margin-bottom:4px;">Points (number)</label>
          <input class="in-app-input" id="add-deed-pts" type="number" placeholder="e.g. 2" value="2" min="1" max="20" />
        </div>
        <div>
          <label style="font-size:12px; font-weight:700; color:var(--text-muted); display:block; margin-bottom:6px;">Habit type</label>
          <div style="display:flex; gap:8px;">
            <button id="deed-type-positive" onclick="window._setDeedType(true)" style="flex:1; padding:8px; border-radius:12px; border:2px solid var(--primary-teal); background:var(--soft-teal-bg); font-family:var(--font-fredoka); font-size:13px; font-weight:700; color:var(--primary-teal); cursor:pointer;">✅ Positive</button>
            <button id="deed-type-negative" onclick="window._setDeedType(false)" style="flex:1; padding:8px; border-radius:12px; border:2px solid #ccc; background:#f9f9f9; font-family:var(--font-fredoka); font-size:13px; font-weight:700; color:#888; cursor:pointer;">❌ Negative</button>
          </div>
        </div>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn-secondary" onclick="this.closest('.in-app-modal-overlay').remove()" style="flex:1; padding:12px; border-radius:16px;">Cancel</button>
        <button class="btn-primary" id="add-deed-save" style="flex:1; padding:12px; border-radius:16px;">Add habit</button>
      </div>
    </div>
  `,document.body.appendChild(i);let e=!0;window._setDeedType=function(t){e=t,document.getElementById("deed-type-positive").style.borderColor=t?"var(--primary-teal)":"#ccc",document.getElementById("deed-type-positive").style.background=t?"var(--soft-teal-bg)":"#f9f9f9",document.getElementById("deed-type-positive").style.color=t?"var(--primary-teal)":"#888",document.getElementById("deed-type-negative").style.borderColor=t?"#ccc":"#e53935",document.getElementById("deed-type-negative").style.background=t?"#f9f9f9":"#ffebee",document.getElementById("deed-type-negative").style.color=t?"#888":"#e53935"},document.getElementById("add-deed-save").addEventListener("click",()=>{const t=document.getElementById("add-deed-text").value.trim();if(!t){document.getElementById("add-deed-text").focus();return}const n=Math.abs(parseInt(document.getElementById("add-deed-pts").value,10))||2,o=["⭐","🌟","✨","🤝","💬","❤️","🕌","🌙","🎯","🌱"];P.push({emoji:o[Math.floor(Math.random()*o.length)],text:t,points:n,positive:e,isEnabled:!0}),i.remove(),u()})};window.deleteReward=function(i){Z({title:"Delete reward",message:`Delete reward "${E[i].title}"?

This cannot be undone.`,icon:"🗑️",confirmText:"Delete",cancelText:"Keep",danger:!0,onConfirm:()=>{E.splice(i,1),u()}})};window.addRewardModal=function(){const i=document.createElement("div");i.className="in-app-modal-overlay",i.innerHTML=`
    <div class="in-app-modal-card">
      <div class="in-app-modal-icon gold">🎁</div>
      <h3 class="in-app-modal-title">Add new reward</h3>
      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:18px; text-align:left;">
        <div>
          <label style="font-size:12px; font-weight:700; color:var(--text-muted); display:block; margin-bottom:4px;">Reward name</label>
          <input class="in-app-input" id="add-reward-title" type="text" placeholder='e.g. "Pizza night 🍕"' />
        </div>
        <div>
          <label style="font-size:12px; font-weight:700; color:var(--text-muted); display:block; margin-bottom:4px;">Required points to unlock</label>
          <input class="in-app-input" id="add-reward-pts" type="number" placeholder="e.g. 50" value="50" min="1" />
        </div>
        <div>
          <label style="font-size:12px; font-weight:700; color:var(--text-muted); display:block; margin-bottom:4px;">Probability chance (%)</label>
          <input class="in-app-input" id="add-reward-prob" type="number" placeholder="e.g. 25" value="25" min="1" max="100" />
        </div>
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn-secondary" onclick="this.closest('.in-app-modal-overlay').remove()" style="flex:1; padding:12px; border-radius:16px;">Cancel</button>
        <button class="btn-primary" id="add-reward-save" style="flex:1; padding:12px; border-radius:16px;">Add reward</button>
      </div>
    </div>
  `,document.body.appendChild(i),document.getElementById("add-reward-save").addEventListener("click",()=>{const e=document.getElementById("add-reward-title").value.trim();if(!e){document.getElementById("add-reward-title").focus();return}const t=Math.abs(parseInt(document.getElementById("add-reward-pts").value,10))||50,n=Math.min(100,Math.abs(parseInt(document.getElementById("add-reward-prob").value,10))||25),o=["🎁","🏆","🍦","🍕","🎮","🌳","🎨","🤗","📖","⭐"];E.push({emoji:o[Math.floor(Math.random()*o.length)],title:e,requiredPoints:t,probability:n/100}),i.remove(),u()})};window.deleteChild=function(i){Z({title:"Delete profile",message:`Delete ${y[i].name}'s profile?

This cannot be undone.`,icon:"👤",confirmText:"Delete",cancelText:"Cancel",danger:!0,onConfirm:()=>{y.splice(i,1),v>=y.length&&(v=-1),u()}})};window.resetAllAppDataModal=function(){Z({title:"Reset all app data?",message:"This will permanently delete all children profiles, points, streaks and restore the app to factory fresh settings.",icon:"⚠️",confirmText:"Reset everything",cancelText:"Cancel",danger:!0,onConfirm:()=>{y=[],v=-1,q=!1,ee="1234",z="",u(),b({title:"App reset!",message:"MashaAllah! App has been reset to factory fresh state!",icon:"✨"})}})};window.changeParentPinModal=function(){const i=document.createElement("div");i.className="in-app-modal-overlay",i.innerHTML=`
    <div class="in-app-modal-card">
      <div class="in-app-modal-icon">🔒</div>
      <h3 class="in-app-modal-title">Change parent PIN</h3>
      <p class="in-app-modal-body" style="margin-bottom:14px;">Enter a new 4-digit PIN and confirm it below.</p>
      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:18px;">
        <input class="in-app-input" id="new-pin-1" type="password" inputmode="numeric" maxlength="4" placeholder="New 4-digit PIN" style="text-align:center; font-size:20px; letter-spacing:6px;" />
        <input class="in-app-input" id="new-pin-2" type="password" inputmode="numeric" maxlength="4" placeholder="Confirm PIN" style="text-align:center; font-size:20px; letter-spacing:6px;" />
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn-secondary" onclick="this.closest('.in-app-modal-overlay').remove()" style="flex:1; padding:12px; border-radius:16px;">Cancel</button>
        <button class="btn-primary" id="change-pin-save" style="flex:1; padding:12px; border-radius:16px;">Save PIN</button>
      </div>
    </div>
  `,document.body.appendChild(i),document.getElementById("change-pin-save").addEventListener("click",()=>{const e=document.getElementById("new-pin-1").value.trim(),t=document.getElementById("new-pin-2").value.trim();if(!e||e.length!==4||!/^\d{4}$/.test(e)){document.getElementById("new-pin-1").style.borderColor="#e53935",document.getElementById("new-pin-1").focus(),b({title:"Invalid PIN",message:"PIN must be exactly 4 digits!",icon:"⚠️"});return}if(e!==t){document.getElementById("new-pin-2").style.borderColor="#e53935",document.getElementById("new-pin-2").focus(),b({title:"PINs do not match",message:"The two PINs you entered do not match. Please try again.",icon:"❌"});return}ee=e,i.remove(),b({title:"PIN updated!",message:"MashaAllah! Your parent PIN has been updated successfully!",icon:"✨"}),u()})};window.changeChildPatternModal=function(i){y[i].patternLock=null,v=i,S=[],F=null,D=!1,u()};function xe(){const i=document.getElementById("pattern-grid"),e=document.getElementById("pattern-path");if(!i||!e)return;const t=document.querySelectorAll(".pattern-dot");function n(r){const s=r.getBoundingClientRect(),l=document.getElementById("pattern-canvas").getBoundingClientRect();return{x:s.left+s.width/2-l.left,y:s.top+s.height/2-l.top}}function o(){if(S.length<2){e.setAttribute("d","");return}let r="";S.forEach((s,l)=>{const c=document.getElementById(`pattern-dot-${s}`);if(c){const d=n(c);r+=l===0?`M ${d.x} ${d.y}`:` L ${d.x} ${d.y}`}}),e.setAttribute("d",r)}function a(r){const s=r.clientX||r.touches&&r.touches[0].clientX,l=r.clientY||r.touches&&r.touches[0].clientY;!s||!l||t.forEach(c=>{const d=c.getBoundingClientRect();if(s>=d.left&&s<=d.right&&l>=d.top&&l<=d.bottom){const m=parseInt(c.dataset.num);S.includes(m)||(S.push(m),c.style.background="var(--accent-gold)",c.style.borderColor="var(--accent-gold)",c.style.color="white",o())}})}i.addEventListener("pointerdown",r=>{W=!0,a(r)}),i.addEventListener("pointermove",r=>{W&&a(r)}),i.addEventListener("pointerup",()=>{W&&(W=!1,me())})}function me(){const i=y[v];if(i)if(i.patternLock)S.join("-")===i.patternLock?(i.requiresPatternLock=!1,h="today",u(),I(`Assalamu Alaikum ${i.name}! Let's see what you did today!`)):(b({title:"Pattern incorrect",message:"That pattern is incorrect. Please try again.",icon:"🔒"}),resetPatternDrawn());else{if(S.length<3){b({title:"Too short",message:"Connect at least 3 stars to set a pattern!",icon:"⭐"}),resetPatternDrawn();return}if(!D)F=S.join("-"),D=!0,b({title:"Pattern recorded!",message:"Great! Now draw the same pattern again to confirm.",icon:"✨"}),resetPatternDrawn(),u();else{const e=S.join("-");e===F?(i.patternLock=e,i.requiresPatternLock=!1,D=!1,F=null,h="today",u(),I(`Assalamu Alaikum ${i.name}! Let's see what you did today!`)):(b({title:"Patterns do not match",message:"The patterns did not match. Please try again from the beginning.",icon:"❌"}),D=!1,F=null,resetPatternDrawn(),u())}}}window.resetPatternDrawn=function(){S=[];const i=document.getElementById("pattern-path");i&&i.setAttribute("d",""),[1,2,3,4,5,6,7,8,9].forEach(e=>{const t=document.getElementById(`pattern-dot-${e}`);t&&(t.style.background="#f0f4f8",t.style.borderColor="var(--primary-teal)",t.style.color="black")})};window.cancelKidSelection=function(){v=-1,u()};window.cancelCheckIn=function(){B=!1,R=!1,T=[],C=0,window.currentCheckInReward=null,u()};window.openAddChildVisualModal=function(i=-1){const e=i>=0?y[i]:null;f={name:e?e.name:"",gender:e?e.gender:"boy",skinTone:e?e.skinTone:"#f5d0a0",hairColor:e?e.hairColor:"#0e0e0e",hairStyleIndex:e?e.hairStyleIndex:1,eyeGlassesIndex:e?e.eyeGlassesIndex:1,headwearColor:e?e.headwearColor:"#ffb300",hasHeadwear:!0},k="hairStyle";const t=document.createElement("div");t.id="visual-avatar-modal",t.style.cssText="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px;",t.innerHTML=`
    <div style="background:white; border-radius:24px; max-width:380px; width:100%; padding:20px; box-shadow:0 10px 25px rgba(0,0,0,0.2); font-family:var(--font-fredoka);" id="modal-content">
      <!-- Rendered dynamically -->
    </div>
  `,document.body.appendChild(t),G(i)};function G(i){const e=document.getElementById("modal-content");e&&(e.innerHTML=`
    <h3 style="font-size:18px; margin-bottom:12px; text-align:center; color:var(--text-dark);">🎨 Create your avatar</h3>

    <div style="width:110px; height:110px; margin:0 auto 14px auto;" id="modal-head-preview">
      ${N(f.gender,f.skinTone,f.hairColor,f.hairStyleIndex,f.eyeGlassesIndex,f.headwearColor,!0)}
    </div>

    <input type="text" id="input-modal-name" value="${f.name}" placeholder="Child's Name (e.g. Maryam / Bilal)" style="width:100%; padding:10px 14px; border-radius:14px; border:1px solid #ccc; font-family:var(--font-fredoka); margin-bottom:14px; text-align:center; font-size:15px; font-weight:700;" />

    <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px; margin-bottom:14px;">
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${k==="gender"?"var(--primary-teal)":"#f5f5f5"}; color:${k==="gender"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('gender', ${i})">
        <span style="font-size:18px;">👦👧</span><br><span style="font-size:9px; font-weight:700;">Gender</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${k==="hairStyle"?"var(--primary-teal)":"#f5f5f5"}; color:${k==="hairStyle"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('hairStyle', ${i})">
        <span style="font-size:18px;">💇‍♂️</span><br><span style="font-size:9px; font-weight:700;">Hair style</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${k==="hairColor"?"var(--primary-teal)":"#f5f5f5"}; color:${k==="hairColor"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('hairColor', ${i})">
        <span style="font-size:18px;">🎨</span><br><span style="font-size:9px; font-weight:700;">Hair color</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${k==="skinTone"?"var(--primary-teal)":"#f5f5f5"}; color:${k==="skinTone"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('skinTone', ${i})">
        <span style="font-size:18px;">🖐️</span><br><span style="font-size:9px; font-weight:700;">Skin</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${k==="eyeGlasses"?"var(--primary-teal)":"#f5f5f5"}; color:${k==="eyeGlasses"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('eyeGlasses', ${i})">
        <span style="font-size:18px;">👓</span><br><span style="font-size:9px; font-weight:700;">Glasses</span>
      </div>
    </div>

    <div style="background:#f9f9f9; padding:12px; border-radius:16px; margin-bottom:16px;">
      ${he(i)}
    </div>

    <div style="display:flex; gap:10px;">
      <button class="btn-secondary" style="flex:1;" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" style="flex:1;" id="btn-save-modal-child">Save avatar 🎨</button>
    </div>
  `,document.getElementById("btn-save-modal-child").addEventListener("click",()=>{const t=document.getElementById("input-modal-name").value.trim();if(!t){b({title:"Name required",message:"Please enter your child's name!",icon:"👶"});return}i>=0?(y[i].name=t,y[i].gender=f.gender,y[i].skinTone=f.skinTone,y[i].hairColor=f.hairColor,y[i].hairStyleIndex=f.hairStyleIndex,y[i].eyeGlassesIndex=f.eyeGlassesIndex):(y.push({id:Date.now().toString(),name:t,level:1,points:0,streak:1,title:"Good deeds starter 🌟",gender:f.gender,skinTone:f.skinTone,hairColor:f.hairColor,hairStyleIndex:f.hairStyleIndex,eyeGlassesIndex:f.eyeGlassesIndex,outfitColor:f.gender==="girl"?"#e91e63":"#00897b",headwearColor:f.gender==="boy"?"#ffb300":"#81c784",hasHeadwear:!0,patternLock:null}),v=y.length-1),document.getElementById("visual-avatar-modal").remove(),u()}))}function he(i){if(k==="gender")return`
      <div style="display:flex; gap:12px;">
        <div style="flex:1; padding:12px; border-radius:14px; border:2px solid ${f.gender==="boy"?"var(--primary-teal)":"#ccc"}; background:${f.gender==="boy"?"var(--soft-teal-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGender('boy', ${i})">
          <div style="font-size:36px;">👦</div>
          <strong style="font-size:13px; display:block; margin-top:4px;">Boy</strong>
        </div>
        <div style="flex:1; padding:12px; border-radius:14px; border:2px solid ${f.gender==="girl"?"var(--primary-teal)":"#ccc"}; background:${f.gender==="girl"?"var(--soft-teal-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGender('girl', ${i})">
          <div style="font-size:36px;">👧</div>
          <strong style="font-size:13px; display:block; margin-top:4px;">Girl</strong>
        </div>
      </div>
    `;if(k==="hairStyle")return`
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${(f.gender==="girl"?ue:fe).map(t=>`
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${f.hairStyleIndex===t.index?"var(--accent-gold)":"#ccc"}; background:${f.hairStyleIndex===t.index?"var(--soft-gold-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalHairStyle(${t.index}, ${i})">
            <div style="font-size:24px;">${t.emoji}</div>
            <span style="font-size:9px; font-weight:700; display:block; margin-top:2px;">${t.label}</span>
          </div>
        `).join("")}
      </div>
    `;if(k==="hairColor")return`
      <div style="display:flex; justify-content:space-around; align-items:center;">
        ${pe.map(e=>`
          <div style="text-align:center; cursor:pointer;" onclick="selectModalHairColor('${e.color}', ${i})">
            <div style="width:44px; height:44px; border-radius:50%; background:${e.color}; border:3px solid ${f.hairColor===e.color?"var(--accent-gold)":"#ccc"}; margin:0 auto;"></div>
            <span style="font-size:10px; font-weight:700; display:block; margin-top:4px;">${e.name}</span>
          </div>
        `).join("")}
      </div>
    `;if(k==="skinTone")return`
      <div style="display:flex; justify-content:space-around;">
        ${ce.map(e=>`
          <div style="width:40px; height:40px; border-radius:50%; background:${e.color}; border:3px solid ${f.skinTone===e.color?"var(--accent-gold)":"#ccc"}; cursor:pointer;" onclick="selectModalSkinTone('${e.color}', ${i})"></div>
        `).join("")}
      </div>
    `;if(k==="eyeGlasses")return`
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${ge.map(e=>`
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${f.eyeGlassesIndex===e.index?"var(--accent-gold)":"#ccc"}; background:${f.eyeGlassesIndex===e.index?"var(--soft-gold-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGlasses(${e.index}, ${i})">
            <div style="font-size:24px;">${e.emoji}</div>
            <span style="font-size:9px; font-weight:700; display:block; margin-top:2px;">${e.label}</span>
          </div>
        `).join("")}
      </div>
    `}window.setModalCategory=function(i,e){k=i,G(e)};window.selectModalGender=function(i,e){f.gender=i,G(e)};window.selectModalHairStyle=function(i,e){f.hairStyleIndex=i,G(e)};window.selectModalHairColor=function(i,e){f.hairColor=i,G(e)};window.selectModalSkinTone=function(i,e){f.skinTone=i,G(e)};window.selectModalGlasses=function(i,e){f.eyeGlassesIndex=i,G(e)};window.closeModal=function(){const i=document.getElementById("visual-avatar-modal");i&&i.remove()};window.showDateDetails=function(i){const e=y[v]?y[v].name:"Child",t=30+i*3%40,n=i%5===0?"🍦 Ice cream treat":"📖 Bedtime story";b({title:`August ${i}, 2026`,message:`👶 Child: ${e}
🌟 Score earned: +${t} pts
🎁 Unlocked gift: ${n}

Completed deeds:
• Morning dua recited 👍
• Prayed Salah on time 🕌
• Helped clean up toys 🧸`,icon:"📅",buttonText:"Close"})};function Q(i="scratch-canvas"){const e=document.getElementById(i);if(!e)return;const t=e.getContext("2d");e.width=e.offsetWidth||260,e.height=e.offsetHeight||130,t.globalCompositeOperation="source-over";const n=t.createLinearGradient(0,0,e.width,e.height);n.addColorStop(0,"#ffd700"),n.addColorStop(.5,"#fff8e1"),n.addColorStop(1,"#ffb300"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),t.fillStyle="#5d4037",t.font="bold 13px Fredoka, sans-serif",t.textAlign="center",t.fillText("✨ Scratch to Discover Your Surprise! ✨",e.width/2,e.height/2+5);let o=!1;function a(s,l){t.globalCompositeOperation="destination-out",t.beginPath(),t.arc(s,l,20,0,Math.PI*2),t.fill()}function r(s){const l=e.getBoundingClientRect(),c=s.touches?s.touches[0].clientX:s.clientX,d=s.touches?s.touches[0].clientY:s.clientY;return{x:c-l.left,y:d-l.top}}e.onmousedown=s=>{o=!0;const l=r(s);a(l.x,l.y)},e.onmousemove=s=>{if(o){const l=r(s);a(l.x,l.y)}},window.onmouseup=()=>{o=!1},e.ontouchstart=s=>{o=!0;const l=r(s);a(l.x,l.y)},e.ontouchmove=s=>{if(o){const l=r(s);a(l.x,l.y)}},window.ontouchend=()=>{o=!1}}window.resetScratchFoil=function(){const i=E[Math.floor(Math.random()*E.length)],e=document.getElementById("scratch-prize-emoji"),t=document.getElementById("scratch-prize-title");e&&(e.innerText=i.emoji),t&&(t.innerText=i.title),Q()};window.unlockScratchCardModal=function(){if(v<0)return;const i=y[v];if(i.points<40){b({title:"Not enough points",message:`You need 40 points to unlock a scratch card!

Your current points: ${i.points} ⭐`,icon:"⭐"});return}i.points-=40;const e=E[Math.floor(Math.random()*E.length)];i.claimedRewards||(i.claimedRewards=[]),i.claimedRewards.push(e),u(),b({title:"Scratch card unlocked! 🎉",message:`MashaAllah! You unlocked "${e.emoji} ${e.title}"!

40 points have been used.`,icon:"🎁",buttonText:"Awesome!"})};window.playDuaAudio=function(i,e){I(i)};let M=0;const U=[{icon:"🌟",title:"Welcome to Kids Good-Deeds",text:"A fun nightly adventure encouraging daily good deeds, Islamic manners, and family rituals without shaming or punishment."},{icon:"🎨",title:"Faceless Vector Avatars",text:"Adheres strictly to faceless visual rules! Customize gender, hijab/kufi colors, skin tone, hair style, and glasses."},{icon:"🌙",title:"Nightly Family Check-In",text:"Swipeable card deck flow with gentle encouragement. Earn points for positive habits, try again tomorrow for mistakes!"},{icon:"🎁",title:"Scratch-to-Reveal Rewards",text:"Children spend earned points to scratch surprise rewards customizable by parents (e.g. bedtime stories, ice cream)."},{icon:"👨‍👩‍👧",title:"Parent PIN & Pattern Locks",text:"Protect parent settings with a 4-digit PIN (default: 1234). Children use 3x3 star pattern locks to access their profiles."}];window.openAppGuideModal=function(){M=0;const i=document.createElement("div");i.id="guide-walkthrough-modal",i.style.cssText="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px;",i.innerHTML=`
    <div style="background:white; border-radius:24px; max-width:380px; width:100%; padding:24px; box-shadow:0 10px 25px rgba(0,0,0,0.2); font-family:var(--font-fredoka); text-align:center;" id="guide-modal-content">
      <!-- Content populated dynamically -->
    </div>
  `,document.body.appendChild(i),ie()};function ie(){const i=document.getElementById("guide-modal-content");if(!i)return;const e=U[M];i.innerHTML=`
    <div style="font-size:54px; margin-bottom:10px;">${e.icon}</div>
    <h3 style="font-size:18px; color:var(--text-dark); margin-bottom:8px;">${e.title}</h3>
    <p style="font-size:13px; color:var(--text-muted); line-height:1.5; margin-bottom:18px; min-height:60px;">${e.text}</p>

    <!-- Slide Indicators -->
    <div style="display:flex; justify-content:center; gap:6px; margin-bottom:20px;">
      ${U.map((t,n)=>`
        <div style="width:${n===M?"20px":"8px"}; height:8px; border-radius:4px; background:${n===M?"var(--primary-teal)":"#e0e0e0"}; transition:all 0.3s ease;"></div>
      `).join("")}
    </div>

    <div style="display:flex; gap:10px;">
      ${M>0?`
        <button class="btn-secondary" style="flex:1;" onclick="prevGuideSlide()">⬅️ Back</button>
      `:""}
      ${M<U.length-1?`
        <button class="btn-primary" style="flex:1;" onclick="nextGuideSlide()">Next ➡️</button>
      `:`
        <button class="btn-primary" style="flex:1; background:linear-gradient(135deg,#43a047,#2e7d32);" onclick="closeGuideModal()">Got it! 🚀</button>
      `}
    </div>
  `}window.nextGuideSlide=function(){M<U.length-1&&(M++,ie())};window.prevGuideSlide=function(){M>0&&(M--,ie())};window.changeCalendarMonth=function(i){w+=i,w<0?(w=11,$--):w>11&&(w=0,$++),L=null,u()};window.showDateDetails=function(i){L={day:i,month:w,year:$},u()};window.closeDateDetails=function(){L=null,u()};u();
