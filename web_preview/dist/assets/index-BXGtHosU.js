(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();const re="/assets/_cheerfully_%20Alhamdulillah!%20You%20did%20a%20good%20deed!-Bpd7wry4.mp3",ue="/assets/_cheerfully_%20Alhamdulillah!%20You%20earned%20points%20for-DWcmE4x4.mp3",ye="/assets/_cheerfully_%20Mashaa%20Allah!%20Keep%20doing%20your%20best!-CPuF0McU.mp3",ee="/assets/_excited_%20Mashaa%20Allah!%20Wonderful%20job!-yFX63igp.mp3",ge="/assets/_excited_%20SubhanAllah!%20That%20was%20so%20kind%20of%20you!-lJ9oV_LA.mp3",me="/assets/_warmly_%20Alhamdulillah!%20You%20made%20your%20family%20proud-lCD-VTax.mp3",xe="/assets/_warmly_%20Alhamdulillah!%20You%20remembered%20your%20Salah!-Iyd3N8XY.mp3",he="/assets/_warmly_%20Mashaa%20Allah!%20You%20helped%20someone%20today!-BGIhTCWq.mp3";let h="today";const de=new Date;let $=de.getFullYear(),w=de.getMonth(),D=null,q=null;const ce="kids-good-deeds-sound-enabled";let N=(()=>{try{return localStorage.getItem(ce)!=="false"}catch(t){return console.warn("Could not read sound preference:",t),!0}})();const _=["January","February","March","April","May","June","July","August","September","October","November","December"];function le(t=new Date){const e=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${e}-${i}-${o}`}let g=[{id:"1",name:"Ahmad",level:1,points:120,streak:5,title:"Good deeds explorer 🌟",gender:"boy",skinTone:"#f5d0a0",hairColor:"#0e0e0e",hairStyleIndex:1,eyeGlassesIndex:1,outfitColor:"#00897b",headwearColor:"#ffb300",hasHeadwear:!0,patternLock:null,claimedRewards:[{emoji:"🍦",title:"Delicious Ice Cream"},{emoji:"📖",title:"Choose Bedtime Story"}],checkInHistory:{"2026-08-05":{completed:!0,score:16,reward:{emoji:"🍦",title:"Delicious Ice Cream"},details:["Morning Dua recited 🤲","Prayed Salah on time 🕌","Helped clean up toys 🧸"]},"2026-08-10":{completed:!0,score:18,reward:{emoji:"📖",title:"Choose Bedtime Story"},details:["Said Bismillah before eating 🍽️","Gave Salam to family 💬","Listened to Mom ❤️"]},"2026-08-15":{completed:!0,score:20,reward:{emoji:"🤗",title:"Big Warm Bear Hug"},details:["Prayed Salah on time 🕌","Shared toys with sibling 🤝","Recited morning dua 🤲"]},"2026-08-20":{completed:!0,score:15,reward:{emoji:"🎮",title:"Extra Play Time"},details:["Put toys away 🧸","Gave Salam 💬","Listened to parents ❤️"]},"2026-08-25":{completed:!0,score:22,reward:{emoji:"🌳",title:"Family Outing"},details:["Prayed on time 🕌","Morning dua 🤲","Helped clean room 🤝"]},"2026-08-30":{completed:!0,score:19,reward:{emoji:"🍦",title:"Delicious Ice Cream"},details:["Bismillah before eating 🍽️","Gave Salam 💬","Listened to Mom ❤️"]}}},{id:"2",name:"Maryam",level:2,points:210,streak:8,title:"Kindness champion 🌸",gender:"girl",skinTone:"#e0ac69",hairColor:"#4a2e1b",hairStyleIndex:2,eyeGlassesIndex:1,outfitColor:"#e91e63",headwearColor:"#81c784",hasHeadwear:!0,patternLock:null,claimedRewards:[{emoji:"🤗",title:"Big Warm Bear Hug"},{emoji:"🌳",title:"Family Outing"}],checkInHistory:{"2026-08-04":{completed:!0,score:18,reward:{emoji:"🤗",title:"Big Warm Bear Hug"},details:["Gave Salam to family 💬","Prayed Salah on time 🕌","Helped clean up 🧸"]},"2026-08-12":{completed:!0,score:21,reward:{emoji:"🌳",title:"Family Outing"},details:["Morning Dua 🤲","Helped someone 🤝","Shared toys 🧸"]},"2026-08-18":{completed:!0,score:19,reward:{emoji:"📖",title:"Choose Bedtime Story"},details:["Bismillah before eating 🍽️","Prayed on time 🕌","Spoke kindly ❤️"]},"2026-08-28":{completed:!0,score:24,reward:{emoji:"🍦",title:"Delicious Ice Cream"},details:["Recited morning dua 🤲","Listened respectfully ❤️","Helped clean 🧸"]}}}],b=0,F=!1,ie="1234",z="",S=[],K=null,B=!1,W=!1,P=!1,L=!1,C=0,T=[];const j=[{emoji:"🤲",text:"Did you recite your morning dua?",points:3,positive:!0,isEnabled:!0},{emoji:"🍽️",text:"Did you say Bismillah before eating?",points:2,positive:!0,isEnabled:!0},{emoji:"💬",text:"Did you give Salam to family?",points:2,positive:!0,isEnabled:!0},{emoji:"🤝",text:"Did you help someone today?",points:3,positive:!0,isEnabled:!0},{emoji:"🕌",text:"Did you pray Salah on time?",points:4,positive:!0,isEnabled:!0},{emoji:"❤️",text:"Did you listen respectfully to parents?",points:3,positive:!0,isEnabled:!0},{emoji:"🧸",text:"Did you put your toys away?",points:2,positive:!0,isEnabled:!0},{emoji:"🕊️",text:"Did you fight or argue with anyone?",points:2,positive:!1,isEnabled:!0}];let I=[{emoji:"🍦",title:"Delicious Ice Cream",requiredPoints:50,probability:.25},{emoji:"📖",title:"Choose Bedtime Story",requiredPoints:40,probability:.3},{emoji:"🤗",title:"Big Warm Bear Hug",requiredPoints:30,probability:.35},{emoji:"🎮",title:"Extra Play Time",requiredPoints:60,probability:.15},{emoji:"🌳",title:"Family Outing",requiredPoints:100,probability:.05}],k="hairStyle",f={gender:"boy",skinTone:"#f5d0a0",hairColor:"#0e0e0e",hairStyleIndex:1,eyeGlassesIndex:1,headwearColor:"#ffb300"};const be=[{color:"#f5d0a0",name:"Fair"},{color:"#e0ac69",name:"Tan"},{color:"#c68642",name:"Olive"},{color:"#8d5524",name:"Bronze"},{color:"#5c3317",name:"Mahogany"}],ve=[{color:"#0e0e0e",name:"Black"},{color:"#4a2e1b",name:"Brown"},{color:"#d4a359",name:"Blonde"}],we=[{index:1,label:"Short Crop 💇‍♂️",emoji:"👦"},{index:2,label:"Curly Top 🦱",emoji:"🦱"},{index:3,label:"Spiky Cut 🧑",emoji:"🧑"},{index:4,label:"Buzz Cut 💈",emoji:"💈"},{index:5,label:"Side Part 👦",emoji:"👨"},{index:6,label:"Wavy Waves 🌊",emoji:"🌊"},{index:7,label:"Neat Combed 👦",emoji:"👦"},{index:8,label:"Sunnah Kufi 🕌",emoji:"🕌"}],ke=[{index:1,label:"Emerald Hijab 🧕",emoji:"🧕"},{index:2,label:"Rose Hijab 🌸",emoji:"🌸"},{index:3,label:"Crown Hijab 👑",emoji:"👑"},{index:4,label:"Twin Tails 👧",emoji:"👧"},{index:5,label:"Bob Cut 💇‍♀️",emoji:"💇‍♀️"},{index:6,label:"Lavender Hijab 💜",emoji:"💜"},{index:7,label:"Ocean Hijab 🌊",emoji:"🌊"},{index:8,label:"Cute High Bun 👱‍♀️",emoji:"👱‍♀️"},{index:9,label:"Long Flowing Hair 💁‍♀️",emoji:"💁‍♀️"}],$e=[{index:1,label:"Clean 🌟",emoji:"✨"},{index:2,label:"Round 👓",emoji:"👓"},{index:3,label:"Square 🤓",emoji:"🤓"},{index:4,label:"Shades 🕶️",emoji:"🕶️"},{index:5,label:"Star ⭐",emoji:"⭐"}],ze={"alhamdulillah you did a good deed":re,alhamdulillah:re,"mashaa allah wonderful job":ee,"mashaa allah":ee,mashaallah:ee,"alhamdulillah you remembered your salah":xe,"mashaa allah you helped someone today":he,"alhamdulillah you earned points for your kindness":ue,"mashaa allah keep doing your best":ye,"alhamdulillah you made your family proud":me,"subhanallah that was so kind of you":ge};function Ce(t){const e=`${t.text??""} ${t.description??""}`.toLowerCase();return/\b(salah|prayer|prayers|pray)\b/.test(e)?"Alhamdulillah! You remembered your Salah!":/\b(help|helped|helping)\b/.test(e)?"Mashaa Allah! You helped someone today!":/\b(salam|greet|manners)\b/.test(e)?"SubhanAllah! That was so kind of you!":/\b(parent|parents|family)\b/.test(e)?"Alhamdulillah! You made your family proud":/\b(kindness|share|sharing)\b/.test(e)?"Alhamdulillah! You earned points for your kindness!":"Alhamdulillah! You did a good deed!"}async function R(t,{showUnavailable:e=!1}={}){if(!N)return!1;const i=t.toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),o=ze[i];if(!o)return console.warn(`No recorded voice clip is available for: "${t}".`),e&&v({title:"Recording coming soon",message:"There is no recorded clip for this sample yet.",icon:"🔇"}),!1;q==null||q.pause(),q=new Audio(o);try{return await q.play(),!0}catch(n){return console.error("Recorded voice clip could not play:",n),e&&v({title:"Recorded audio could not play",message:"Check your device volume and try the clip again.",icon:"🔇"}),!1}}function Y(t){if(N)try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const i=new e;if(t==="yes")[523.25,659.25,783.99,1046.5].forEach((n,a)=>{const l=i.createOscillator(),r=i.createGain();l.type="triangle",l.frequency.setValueAtTime(n,i.currentTime+a*.07),r.gain.setValueAtTime(.28,i.currentTime+a*.07),r.gain.exponentialRampToValueAtTime(.001,i.currentTime+a*.07+.32),l.connect(r),r.connect(i.destination),l.start(i.currentTime+a*.07),l.stop(i.currentTime+a*.07+.33)});else if(t==="tried")[659.25,987.77].forEach((n,a)=>{const l=i.createOscillator(),r=i.createGain();l.type="sine",l.frequency.setValueAtTime(n,i.currentTime+a*.09),r.gain.setValueAtTime(.24,i.currentTime+a*.09),r.gain.exponentialRampToValueAtTime(.001,i.currentTime+a*.09+.38),l.connect(r),r.connect(i.destination),l.start(i.currentTime+a*.09),l.stop(i.currentTime+a*.09+.39)});else if(t==="notToday"){const o=i.createOscillator(),n=i.createGain();o.type="sine",o.frequency.setValueAtTime(280,i.currentTime),o.frequency.exponentialRampToValueAtTime(160,i.currentTime+.35),n.gain.setValueAtTime(.18,i.currentTime),n.gain.exponentialRampToValueAtTime(.001,i.currentTime+.38),o.connect(n),n.connect(i.destination),o.start(i.currentTime),o.stop(i.currentTime+.4)}}catch(e){console.warn("AudioContext playback error:",e)}}function O(t,e,i){const o=document.querySelector(".phone-frame")||document.getElementById("app-viewport");if(!o)return;const n=document.createElement("div");if(n.className="cheerful-overlay-active",n.style.cssText=`
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: ${t==="droopyRose"?"rgba(255,255,255,0.72)":"rgba(255,255,255,0.68)"};
    backdrop-filter: blur(3px);
    transition: opacity 0.35s ease;
  `,t==="droopyRose")n.innerHTML=`
      <div style="text-align:center; animation:droopAnim 1.6s ease forwards; background:white; padding:18px 24px; border-radius:24px; box-shadow:0 12px 30px rgba(0,0,0,0.14); border:2px solid #e2e8f0; max-width:85%;">
        <div style="font-size:56px; margin-bottom:6px;">🥀</div>
        <div style="font-size:16px; font-weight:700; color:var(--text-dark);">${e}</div>
        <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">Every day is a fresh blessing! 🌱</div>
      </div>
    `;else{const a=t==="balloons"?["🎈","🎉","🎊","✨","🎈","🌟"]:["🌟","⭐","✨","💫","🌟","⭐"];let l="";for(let d=0;d<14;d++){const x=a[d%a.length],V=6+Math.random()*88,E=65+Math.random()*25,J=18+Math.random()*20,X=Math.random()*.35,Q=1.2+Math.random()*.5;l+=`
        <div style="position:absolute; left:${V}%; top:${E}%; font-size:${J}px; animation:floatParticle ${Q}s ease-out ${X}s forwards;">
          ${x}
        </div>
      `}const r=t==="balloons"?"linear-gradient(135deg, #e8f5e9, #c8e6c9)":"linear-gradient(135deg, #fff9c4, #fff59d)",s=t==="balloons"?"#81c784":"#ffd54f",c=t==="balloons"?"#2e7d32":"#f57f17";n.innerHTML=`
      ${l}
      <div style="text-align:center; animation:cheerfulBannerPop 1.5s ease forwards; background:${r}; border:2.5px solid ${s}; padding:18px 24px; border-radius:24px; box-shadow:0 12px 30px rgba(0,0,0,0.16); max-width:85%; z-index:2;">
        <div style="font-size:52px; margin-bottom:4px;">${i}</div>
        <div style="font-size:18px; font-weight:700; color:${c};">${e}</div>
      </div>
    `}o.appendChild(n),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),350)},1300)}function v({title:t,message:e,icon:i="✨",buttonText:o="Got it!"}){return new Promise(n=>{const a=document.createElement("div");a.className="in-app-modal-overlay",a.innerHTML=`
      <div class="in-app-modal-card">
        <div class="in-app-modal-icon">${i}</div>
        <h3 class="in-app-modal-title">${t}</h3>
        <p class="in-app-modal-body">${e}</p>
        <button class="btn-primary in-app-btn-confirm" style="width:100%; padding:12px; font-size:15px; border-radius:16px;">${o}</button>
      </div>
    `,document.body.appendChild(a),a.querySelector(".in-app-btn-confirm").addEventListener("click",()=>{a.remove(),n()})})}function Z({title:t,message:e,icon:i="❓",confirmText:o="Yes",cancelText:n="Cancel",danger:a=!1,onConfirm:l,onCancel:r}){return new Promise(s=>{const c=document.createElement("div");c.className="in-app-modal-overlay",c.innerHTML=`
      <div class="in-app-modal-card">
        <div class="in-app-modal-icon ${a?"danger":""}">${i}</div>
        <h3 class="in-app-modal-title">${t}</h3>
        <p class="in-app-modal-body">${e}</p>
        <div style="display:flex; gap:10px;">
          <button class="btn-secondary in-app-btn-cancel" style="flex:1; padding:12px; font-size:14px; border-radius:16px;">${n}</button>
          <button class="btn-primary in-app-btn-confirm" style="flex:1; padding:12px; font-size:14px; border-radius:16px; ${a?"background:#e53935;":""}">${o}</button>
        </div>
      </div>
    `,document.body.appendChild(c),c.querySelector(".in-app-btn-cancel").addEventListener("click",()=>{c.remove(),r&&r(),s(!1)}),c.querySelector(".in-app-btn-confirm").addEventListener("click",()=>{c.remove(),l&&l(),s(!0)})})}function G(t="boy",e="#f5d0a0",i="#0e0e0e",o=1,n=1,a="#ffb300",l=!0){const r=t==="girl"?"#e91e63":"#00897b";let s="";if(t==="girl")if(l||o<=3||o===6||o===7){let d="#4db6ac";o===2?d="#ec407a":o===3?d="#ffb300":o===6?d="#9575cd":o===7&&(d="#42a5f5"),s=`
        <circle cx="50" cy="48" r="34" fill="${d}" />
        <ellipse cx="50" cy="50" rx="22" ry="26" fill="${e}" />
        <path d="M 28 42 C 35 22 65 22 72 42 C 60 28 40 28 28 42 Z" fill="${d}" />
      `}else o===4?s=`
        <circle cx="22" cy="48" r="14" fill="${i}" />
        <circle cx="78" cy="48" r="14" fill="${i}" />
        <circle cx="50" cy="48" r="26" fill="${e}" />
        <circle cx="21" cy="50" r="5" fill="${e}" />
        <circle cx="79" cy="50" r="5" fill="${e}" />
        <path d="M 24 44 C 35 24 65 24 76 44 C 60 32 40 32 24 44 Z" fill="${i}" />
      `:o===8?s=`
        <circle cx="50" cy="18" r="13" fill="${i}" />
        <circle cx="50" cy="26" r="5" fill="#ffb300" />
        <circle cx="21" cy="50" r="5" fill="${e}" />
        <circle cx="79" cy="50" r="5" fill="${e}" />
        <circle cx="50" cy="48" r="26" fill="${e}" />
        <path d="M 24 44 C 35 24 65 24 76 44 C 60 32 40 32 24 44 Z" fill="${i}" />
      `:o===9?s=`
        <path d="M 20 40 L 16 76 L 32 76 L 32 55 L 68 55 L 68 76 L 84 76 L 80 40 Z" fill="${i}" />
        <circle cx="50" cy="46" r="30" fill="${i}" />
        <circle cx="50" cy="48" r="26" fill="${e}" />
      `:s=`
        <circle cx="50" cy="46" r="30" fill="${i}" />
        <circle cx="50" cy="48" r="26" fill="${e}" />
      `;else if(l||o===8)s=`
        <circle cx="21" cy="50" r="5" fill="${e}" />
        <circle cx="79" cy="50" r="5" fill="${e}" />
        <circle cx="50" cy="48" r="27" fill="${e}" />
        <path d="M 21 44 A 29 29 0 0 1 79 44 Z" fill="${o===8?"#eceff1":a}" />
        <line x1="21" y1="44" x2="79" y2="44" stroke="#00897b" stroke-width="3" stroke-opacity="0.7" />
      `;else{let d="";switch(o){case 2:d=`<circle cx="28" cy="25" r="9" fill="${i}" />
                      <circle cx="39" cy="23" r="9" fill="${i}" />
                      <circle cx="50" cy="21" r="9" fill="${i}" />
                      <circle cx="61" cy="23" r="9" fill="${i}" />
                      <circle cx="72" cy="25" r="9" fill="${i}" />`;break;case 3:d=`<path d="M 22 44 L 30 18 L 40 30 L 50 16 L 60 30 L 70 18 L 78 44 Z" fill="${i}" />`;break;case 4:d=`<path d="M 22 46 A 28 28 0 0 1 78 46 Z" fill="${i}" />`;break;case 5:d=`<path d="M 22 44 C 30 18 70 22 78 44 Z" fill="${i}" />`;break;case 6:d=`<path d="M 22 44 C 28 20 40 24 50 18 C 60 14 72 22 78 44 Z" fill="${i}" />`;break;case 7:d=`<path d="M 22 44 C 26 18 74 20 78 44 Z" fill="${i}" />`;break;case 1:default:d=`<path d="M 22 45 A 28 28 0 0 1 78 45 Z" fill="${i}" />`;break}s=`
        <circle cx="21" cy="50" r="5" fill="${e}" />
        <circle cx="79" cy="50" r="5" fill="${e}" />
        <circle cx="50" cy="48" r="27" fill="${e}" />
        ${d}
      `}let c="";switch(n){case 2:c=`<circle cx="38" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <circle cx="62" cy="48" r="8" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;break;case 3:c=`<rect x="30" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <rect x="54" y="40" width="16" height="16" rx="3" stroke="#37474f" stroke-width="3" fill="none" />
                    <line x1="46" y1="48" x2="54" y2="48" stroke="#37474f" stroke-width="3" />`;break;case 4:c=`<rect x="28" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <rect x="53" y="41" width="19" height="14" rx="4" fill="#212121" />
                    <line x1="47" y1="45" x2="53" y2="45" stroke="#212121" stroke-width="3" />`;break;case 5:c=`<circle cx="38" cy="48" r="9" fill="#ffb300" />
                    <circle cx="62" cy="48" r="9" fill="#ffb300" />`;break}return`
    <svg class="faceless-avatar-svg" viewBox="0 0 100 100">
      <path d="M 15 100 C 30 75 70 75 85 100 Z" fill="${r}" />
      <rect x="40" y="65" width="20" height="15" fill="${e}" />
      ${s}
      ${c}
    </svg>
  `}window.tapPinKey=function(t){const e=document.getElementById(`pin-btn-${t}`);e&&(e.style.transform="scale(0.9)",e.style.background="var(--primary-teal)",e.style.color="white",setTimeout(()=>{e.style.transform="scale(1)",e.style.background="#f9f9f9",e.style.color="black"},150)),t==="C"?z="":t==="✓"?se():z.length<4&&(z+=t,z.length===4&&se()),pe()};function se(){z===ie?(F=!0,z="",h="parent",u(),oe()):setTimeout(()=>{v({title:"Incorrect PIN",message:"Incorrect parent PIN! Default PIN code is: 1234",icon:"🔒"}),z="",pe()},150)}function pe(){const t=document.getElementById("pin-display-bullets");t&&(t.innerHTML=[0,1,2,3].map(e=>`
      <div style="width:16px; height:16px; border-radius:50%; background:${e<z.length?"var(--primary-teal)":"#e0e0e0"}; border:2px solid ${e<z.length?"var(--primary-teal)":"#bdbdbd"};"></div>
    `).join(""))}function oe(){const t=document.querySelector(".bottom-nav");if(!t)return;const e=b>=0;t.innerHTML=e?`
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
  `}window.switchTab=function(t){t==="parent"&&!F&&(z=""),t!=="today"&&(P||L)&&(P=!1,L=!1,T=[],C=0,window.currentCheckInReward=null),h=t,u(),oe()};function u(){const t=document.getElementById("app-viewport");if(oe(),t.classList.toggle("checkin-active",P&&h==="today"),h==="parent"&&!F){t.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="font-size:54px; margin-bottom:8px;">🔒</div>
        <h2 style="font-size:22px; color:var(--text-dark);">Parent PIN login</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Enter security code to access parent menu</p>
      </div>

      <div class="card" style="text-align:center; padding:24px 16px;">
        <div style="display:flex; justify-content:center; gap:12px; margin-bottom:20px;" id="pin-display-bullets">
          ${[0,1,2,3].map(i=>`
            <div style="width:16px; height:16px; border-radius:50%; background:${i<z.length?"var(--primary-teal)":"#e0e0e0"}; border:2px solid ${i<z.length?"var(--primary-teal)":"#bdbdbd"};"></div>
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
    `;return}if(h==="parent"&&F){t.innerHTML=`
      <h2 style="font-size:22px; margin-bottom:6px;">👨‍👩‍👧 Parent dashboard</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Children management & security settings</p>

      <div class="card">
        <strong style="display:block; margin-bottom:10px;">👶 Managed children grid</strong>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          ${g.length>0?g.map((i,o)=>`
            <div style="background:var(--soft-teal-bg); padding:10px; border-radius:16px; text-align:center;">
              <div style="width:54px; height:54px; margin:0 auto;">
                ${G(i.gender,i.skinTone,i.hairColor,i.hairStyleIndex,i.eyeGlassesIndex,i.headwearColor,i.hasHeadwear)}
              </div>
              <strong style="display:block; font-size:14px; margin-top:4px;">${i.name}</strong>
              <div style="margin-top:6px; display:flex; justify-content:center; gap:4px;">
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--primary-teal); color:white; cursor:pointer;" onclick="openAddChildVisualModal(${o})">🎨 Avatar</button>
                <button style="font-size:10px; padding:3px 6px; border-radius:8px; border:none; background:var(--accent-gold); color:black; cursor:pointer;" onclick="resetChildPattern(${o})">🔒 Pattern</button>
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
        ${j.map((i,o)=>`
          <div style="display:flex; align-items:center; gap:8px; padding:7px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:20px;">${i.emoji}</span>
            <div style="flex:1;">
              <div style="font-size:13px; font-weight:700; color:${i.isEnabled!==!1?"var(--text-dark)":"#aaa"};">${i.text}</div>
              <div style="font-size:10px; color:${i.positive?"var(--primary-teal)":"#e53935"};">${i.positive?"+":"-"}${i.points} pts</div>
            </div>
            <input type="checkbox" ${i.isEnabled!==!1?"checked":""} onchange="toggleDeed(${o})" style="width:18px; height:18px; cursor:pointer;">
            <button style="border:none; background:#ffebee; color:#e53935; border-radius:8px; padding:3px 7px; font-size:12px; cursor:pointer;" onclick="deleteDeed(${o})">🗑️</button>
          </div>
        `).join("")}
      </div>

      <!-- REWARDS -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <strong style="font-size:15px;">🎁 Rewards</strong>
          <button style="border:none; background:var(--primary-teal); color:white; border-radius:12px; padding:4px 12px; font-family:var(--font-fredoka); font-size:12px; cursor:pointer;" onclick="addRewardModal()">+ Add</button>
        </div>
        ${I.map((i,o)=>`
          <div style="display:flex; align-items:center; gap:8px; padding:7px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:22px;">${i.emoji}</span>
            <div style="flex:1;">
              <div style="font-size:13px; font-weight:700;">${i.title}</div>
              <div style="font-size:10px; color:var(--text-muted);">Requires ${i.requiredPoints} pts • ${Math.round(i.probability*100)}% chance</div>
            </div>
            <button style="border:none; background:#ffebee; color:#e53935; border-radius:8px; padding:3px 7px; font-size:12px; cursor:pointer;" onclick="deleteReward(${o})">🗑️</button>
          </div>
        `).join("")}
      </div>

      <!-- SETTINGS -->
      <div class="card">
        <strong style="display:block; margin-bottom:10px; font-size:15px;">⚙️ Settings</strong>
        <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid #f0f0f0; font-size:13px;"><span>🔊 Sound effects and voice prompts</span><input id="sound-enabled-toggle" type="checkbox" ${N?"checked":""} aria-label="Enable sound effects and voice prompts" onchange="setSoundEnabled(this.checked)" style="width:18px; height:18px;"></div>
        <p style="font-size:11px; color:var(--text-muted); margin:6px 0;">Plays recorded voice clips for selected prompts.</p>
        <button class="btn-primary" style="margin:4px 0 10px;" onclick="testPreviewAudio()">🔊 Test recorded audio</button>
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
    `;return}if(b===-1){t.innerHTML=`
      <div style="text-align:center; padding:10px 0;">
        <h2 style="font-size:22px; color:var(--text-dark);">🌟 Assalamu Alaikum!</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">Tap your profile avatar to log in</p>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin:20px 0;">
        ${g.length>0?g.map((i,o)=>`
          <div class="card" style="text-align:center; cursor:pointer; padding:16px; border:2px solid transparent;" onclick="selectKidFromGrid(${o})">
            <div style="width:76px; height:76px; margin:0 auto 10px auto;">
              ${G(i.gender,i.skinTone,i.hairColor,i.hairStyleIndex,i.eyeGlassesIndex,i.headwearColor,i.hasHeadwear)}
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
    `;return}const e=g[b];if(e.requiresPatternLock||!e.patternLock){const i=!e.patternLock;t.innerHTML=`
      <div style="text-align:center; padding:16px 0;">
        <div style="width:76px; height:76px; margin:0 auto 10px auto;">
          ${G(e.gender,e.skinTone,e.hairColor,e.hairStyleIndex,e.eyeGlassesIndex,e.headwearColor,e.hasHeadwear)}
        </div>
        <h2 style="font-size:20px; color:var(--text-dark);">${B?"Confirm pattern ⭐":i?`Create pattern for ${e.name}`:`Welcome back, ${e.name}!`}</h2>
        <p style="font-size:13px; color:var(--primary-teal); font-weight:700; margin-top:4px;">${B?"Draw pattern again to confirm!":"Drag your finger across stars to draw pattern"}</p>
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
        <button class="btn-secondary" style="margin-top:14px; width:140px; padding:6px;" onclick="resetPatternDrawn()">Clear pattern</button>
      </div>

      <button style="border:none; background:none; color:var(--text-muted); font-family:var(--font-fredoka); font-size:13px; margin-top:16px; cursor:pointer; width:100%; text-align:center;" onclick="cancelKidSelection()">
        ⬅️ Back to child selection
      </button>
    `,setTimeout(Se,100);return}if(P&&h==="today"){const i=j.filter(r=>r.isEnabled!==!1),o=i.length,n=i[C],a=o>0?Math.round((C+1)/o*100):0;let l=0;T.forEach(r=>{r.deed.positive?r.answer==="full"?l+=r.deed.points:r.answer==="partial"&&(l+=Math.floor(r.deed.points/2)):r.answer==="full"&&(l-=r.deed.points)}),t.innerHTML=`
      <!-- Top header bar with cancel and progress -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
        <button style="border:none; background:none; font-family:var(--font-fredoka); font-size:13px; font-weight:700; color:var(--text-muted); cursor:pointer; padding:4px 0; display:flex; align-items:center; gap:4px;" onclick="window.cancelCheckIn()">
          ⬅️ Cancel
        </button>
        <span style="font-size:12px; font-weight:700; color:var(--primary-teal); background:var(--soft-teal-bg); padding:4px 10px; border-radius:12px;">
          Question ${C+1} of ${o}
        </span>
      </div>

      <div style="height:6px; background:#e0e0e0; border-radius:6px; margin:8px 0 16px 0; overflow:hidden;">
        <div style="height:6px; width:${a}%; background:var(--accent-gold); border-radius:6px; transition:width 0.4s ease;"></div>
      </div>

      <!-- Single Mission Card -->
      <div class="card" style="text-align:center; padding:24px 18px; background:${n.positive?"linear-gradient(135deg,#e0f2f1,#ffffff)":"linear-gradient(135deg,#fff8e1,#ffffff)"}; border:2.5px solid ${n.positive?"#80cbc4":"#ffe082"}; border-radius:24px; box-shadow:0 6px 18px rgba(0,0,0,0.06);">
        <div style="width:72px; height:72px; margin:0 auto 12px auto; border-radius:50%; background:${n.positive?"var(--soft-gold-bg)":"#ffebee"}; display:flex; align-items:center; justify-content:center; font-size:36px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          ${n.emoji}
        </div>
        <h3 style="font-size:18px; font-weight:700; color:var(--text-dark); line-height:1.35; margin-bottom:8px;">${n.text}</h3>
        <span style="display:inline-block; font-size:12px; font-weight:700; color:${n.positive?"var(--primary-teal)":"#e65100"}; background:white; padding:4px 12px; border-radius:12px; border:1px solid ${n.positive?"#b2dfdb":"#ffcc80"};">
          ${n.positive?`+${n.points} pts if yes`:`-${n.points} pts if occurred`}
        </span>
      </div>

      <!-- Response Buttons (Disabled temporarily during celebration) -->
      <div id="checkin-btn-group" style="display:flex; flex-direction:column; gap:10px; margin-top:14px;">
        ${n.positive?`
          <button class="btn-primary" style="background:linear-gradient(135deg,#43a047,#2e7d32); padding:13px; font-size:15px; border-radius:18px;" onclick="window.handleSingleDeedChoice('full', ${n.points})">
            ✅ Yes, Alhamdulillah! &nbsp;<span style="font-size:12px; opacity:0.85;">(+${n.points} pts)</span>
          </button>
          <button class="btn-primary" style="background:linear-gradient(135deg,#0288d1,#0277bd); padding:12px; font-size:15px; border-radius:18px;" onclick="window.handleSingleDeedChoice('partial', ${Math.floor(n.points/2)||1})">
            🙂 Tried today &nbsp;<span style="font-size:12px; opacity:0.85;">(+${Math.floor(n.points/2)||1} pt)</span>
          </button>
          <button style="width:100%; padding:12px; border-radius:18px; border:2px solid #cbd5e1; background:white; font-family:var(--font-fredoka); font-size:14px; font-weight:700; color:var(--text-muted); cursor:pointer;" onclick="window.handleSingleDeedChoice('no', 0)">
            ➖ Not today &nbsp;<span style="font-size:11px; opacity:0.75;">(0 pts)</span>
          </button>
        `:`
          <button class="btn-primary" style="background:linear-gradient(135deg,#43a047,#2e7d32); padding:13px; font-size:15px; border-radius:18px;" onclick="window.handleSingleDeedChoice('no', 0)">
            💪 No, avoided it! &nbsp;<span style="font-size:12px; opacity:0.85;">(0 pts)</span>
          </button>
          <button class="btn-primary" style="background:linear-gradient(135deg,#e53935,#c62828); padding:13px; font-size:15px; border-radius:18px;" onclick="window.handleSingleDeedChoice('full', -${n.points})">
            😕 Yes, happened &nbsp;<span style="font-size:12px; opacity:0.85;">(-${n.points} pts)</span>
          </button>
        `}
      </div>

      <div class="checkin-score-widget">
        <div id="chalk-delta-anchor" style="position:relative;"></div>
        <div class="checkin-score-value chalk-score-pop" id="checkin-score-value">
          ${l} pts
        </div>
      </div>
    `,requestAnimationFrame(()=>{const r=t.querySelector(".checkin-score-widget"),s=t.querySelector("#checkin-btn-group"),c=document.querySelector(".bottom-nav");if(!r||!s||!c)return;const d=t.getBoundingClientRect().top,x=(s.getBoundingClientRect().bottom+c.getBoundingClientRect().top)/2;r.style.bottom="auto",r.style.top=`${x-d+t.scrollTop-r.offsetHeight/2}px`});return}if(window.handleSingleDeedChoice=function(i,o){const n=j.filter(c=>c.isEnabled!==!1),a=n[C],l=document.getElementById("checkin-btn-group");l&&l.querySelectorAll("button").forEach(d=>{d.style.pointerEvents="none",d.style.opacity="0.65"});const r=document.getElementById("chalk-delta-anchor");if(r){const c=document.createElement("div"),d=o>0?"positive":o<0?"negative":"neutral",x=o>0?"+":"";c.className=`chalk-delta-popup ${d}`,c.textContent=`${x}${o} pts`,r.appendChild(c)}const s=document.getElementById("checkin-score-value");if(s){let c=0;T.forEach(d=>{d.deed.positive?d.answer==="full"?c+=d.deed.points:d.answer==="partial"&&(c+=Math.floor(d.deed.points/2)):d.answer==="full"&&(c-=d.deed.points)}),c+=o,s.classList.add("chalk-bump"),setTimeout(()=>{s&&(s.textContent=`${c} pts`)},250)}a.positive?i==="full"?(Y("yes"),R(Ce(a)),O("balloons","Alhamdulillah! Great Job! ✨","🎉")):i==="partial"?(Y("tried"),R("Mashaa Allah! Wonderful job!"),O("stars","MashaAllah! Good Effort! 🌱","🌟")):(Y("notToday"),O("droopyRose","Tomorrow is another chance, InshaAllah! 🌱","🥀")):i==="no"?(Y("yes"),R("Mashaa Allah! Keep doing your best!"),O("balloons","MashaAllah! Excellent Self-Control! 💪","🌟")):(Y("notToday"),O("droopyRose","It's okay! Tomorrow is another chance, InshaAllah! 🌱","🥀")),T.push({index:C,deed:a,answer:i}),setTimeout(()=>{C++,C>=n.length&&(P=!1,L=!0),u()},1400)},L&&h==="today"){let i=0;T.forEach(a=>{a.deed.positive?a.answer==="full"?i+=a.deed.points:a.answer==="partial"&&(i+=Math.floor(a.deed.points/2)):a.answer==="full"&&(i-=a.deed.points)}),window.currentCheckInReward||(window.currentCheckInReward=I[Math.floor(Math.random()*I.length)]);const o=window.currentCheckInReward,n=i>=15?{text:"MashaAllah! What an amazing day! 🌟",bg:"#e0f2f1",color:"#00897b"}:i>=8?{text:"Alhamdulillah! Keep it up tomorrow! 😊",bg:"#fff8e1",color:"#f9a825"}:{text:"It's okay. Tomorrow is another chance, InshaAllah. 🌱",bg:"#f5f5f5",color:"#78909c"};t.innerHTML=`
      <div style="text-align:center; padding:12px 0 8px 0;">
        <div style="font-size:48px;">🌟</div>
        <h2 style="font-size:22px; color:var(--text-dark); margin-top:4px;">What a day, ${e.name}!</h2>
        <div style="font-size:36px; font-weight:700; color:var(--primary-teal); margin:4px 0;">+${i} pts</div>
        <div style="font-size:12px; font-weight:700; color:${n.color}; background:${n.bg}; padding:6px 14px; border-radius:12px; display:inline-block;">${n.text}</div>
      </div>

      <!-- INTERACTIVE REWARD UNLOCKED SCRATCH CARD -->
      <div class="card" style="background:linear-gradient(135deg,#fff8e1,#ffe082); border:2px dashed var(--accent-gold); text-align:center; padding:12px; margin-bottom:12px; position:relative; overflow:hidden;">
        <span style="font-size:10px; font-weight:700; color:#e65100; text-transform:uppercase; letter-spacing:1px;">🎁 You earned a mystery reward!</span>
        <p style="font-size:11px; color:var(--text-dark); margin:2px 0 8px 0;">Scratch with your finger to discover your surprise!</p>
        
        <div style="position:relative; width:250px; height:110px; margin:0 auto; border-radius:14px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.15);">
          <!-- Hidden Prize beneath gold foil -->
          <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:white; display:flex; flex-direction:column; align-items:center; justify-content:center;">
            <div style="font-size:36px; margin:0;">${o.emoji}</div>
            <strong style="font-size:14px; color:var(--text-dark);">${o.title}</strong>
          </div>
          <!-- Scratchable foil canvas overlay -->
          <canvas id="checkin-scratch-canvas" style="position:absolute; top:0; left:0; width:100%; height:100%; cursor:pointer; touch-action:none;"></canvas>
        </div>
      </div>

      <div class="card" style="max-height:160px; overflow-y:auto;">
        ${T.map(a=>{const l=a.deed.positive?a.answer==="full"?a.deed.points:a.answer==="partial"?Math.floor(a.deed.points/2):0:a.answer==="full"?-a.deed.points:0,r=l>0?"#00897b":l<0?"#e53935":"#9e9e9e";return`<div style="display:flex; align-items:center; gap:10px; padding:6px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:20px;">${a.deed.emoji}</span>
            <span style="flex:1; font-size:12px;">${a.deed.text}</span>
            <span style="font-size:12px; font-weight:700; color:${r};">${l>0?"+"+l:l<0?l:"–"}</span>
          </div>`}).join("")}
      </div>

      <button class="btn-primary" style="margin-top:12px;" onclick="window.finishCheckIn(${i}, '${o.title}', '${o.emoji}')">🎁 Done — Save & See My Points!</button>
    `,setTimeout(()=>te("checkin-scratch-canvas"),100),window.finishCheckIn=function(a,l,r){const s=g[b];if(s){s.points+=Math.max(0,a),s.claimedRewards||(s.claimedRewards=[]),s.claimedRewards.push({emoji:r,title:l}),s.checkInHistory||(s.checkInHistory={});const c=T.filter(x=>x.deed.positive&&x.answer!=="no"||!x.deed.positive&&x.answer==="no").map(x=>`${x.deed.emoji} ${x.deed.text}`);s.checkInHistory[le()]={completed:!0,score:a,reward:{emoji:r,title:l},details:c};const d=new Date;$=d.getFullYear(),w=d.getMonth()}L=!1,window.currentCheckInReward=null,T=[],C=0,u()};return}if(h==="today"){const i=le(),o=e.checkInHistory&&e.checkInHistory[i];t.innerHTML=`
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
          ${G(e.gender,e.skinTone,e.hairColor,e.hairStyleIndex,e.eyeGlassesIndex,e.headwearColor,e.hasHeadwear)}
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
        <button style="flex:1; padding:10px; border-radius:16px; border:2px solid var(--soft-teal-bg); background:white; font-family:var(--font-fredoka); font-weight:700; font-size:12px; color:var(--primary-teal); cursor:pointer;" onclick="openAddChildVisualModal(${b})">
          🎨 Change avatar
        </button>
        <button style="flex:1; padding:10px; border-radius:16px; border:2px solid var(--soft-gold-bg); background:white; font-family:var(--font-fredoka); font-weight:700; font-size:12px; color:var(--text-gold); cursor:pointer;" onclick="changeChildPatternModal(${b})">
          🔒 Change pattern
        </button>
      </div>

      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size:16px;">🗺️ Today's adventure trail</strong>
          <span style="color:var(--primary-teal); font-weight:700; font-size:13px;">${o?"10 / 10":"7 / 10"} Completed</span>
        </div>
        <div class="trail-container">
          <div class="trail-node active">🌙</div>
          <div class="trail-node active">⭐</div>
          <div class="trail-node active">🕌</div>
          <div class="trail-node ${o?"active":""}">🌳</div>
          <div class="trail-node ${o?"active":""}">🏆</div>
        </div>
      </div>

      ${o?`
        <!-- TODAY CHECK-IN COMPLETED STATE CARD -->
        <div class="card" style="background:linear-gradient(135deg,#e0f2f1,#ffffff); border:2px solid var(--primary-teal); text-align:center; padding:18px;">
          <div style="font-size:42px; margin-bottom:4px;">🎉</div>
          <strong style="font-size:18px; color:var(--primary-teal); display:block;">Done, Alhamdulillah!</strong>
          <p style="font-size:12px; color:var(--text-dark); margin:4px 0 12px 0;">Today's check-in is complete!</p>

          <div style="display:flex; gap:8px; justify-content:center; margin-bottom:12px;">
            <div style="flex:1; background:white; padding:8px; border-radius:12px; border:1px solid #b2dfdb;">
              <span style="font-size:10px; color:var(--text-muted); display:block;">Points Achieved</span>
              <strong style="font-size:15px; color:var(--primary-teal);">+${o.score} pts ⭐</strong>
            </div>
            <div style="flex:1; background:white; padding:8px; border-radius:12px; border:1px solid #ffe082;">
              <span style="font-size:10px; color:var(--text-muted); display:block;">Reward Unlocked</span>
              <strong style="font-size:13px; color:#e65100;">${o.reward?o.reward.emoji+" "+o.reward.title:"🍦 Ice Cream"}</strong>
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
    `;const n=document.getElementById("btn-start-checkin");n&&n.addEventListener("click",()=>{P=!0,L=!1,C=0,T=[],u()})}else if(h==="journey"){const i=new Date($,w+1,0).getDate(),o=new Date,n=$===o.getFullYear()&&w===o.getMonth(),a=Object.entries(e.checkInHistory||{}).filter(([p,y])=>{const m=new Date(`${p}T00:00:00`);return!Number.isNaN(m.getTime())&&y.completed!==!1&&m.getFullYear()===$&&m.getMonth()===w}),l=a.reduce((p,[,y])=>p+(Number(y.score)||0),0),r=a.reduce((p,[,y])=>p+(Array.isArray(y.details)?y.details.length:0),0),s=a.filter(([,p])=>p.completed!==!1).length,c=Array(Math.ceil(i/7)).fill(0);a.forEach(([p,y])=>{const m=Number(p.slice(8,10));Number.isInteger(m)&&m>=1&&m<=i&&(c[Math.floor((m-1)/7)]+=Number(y.score)||0)});const d=Math.min(0,...c),x=Math.max(0,...c),V=x-d,E=c.map((p,y)=>({x:20+y*240/Math.max(c.length-1,1),y:V===0?52:14+(x-p)/V*76,points:p})),J=E.map((p,y)=>`${y===0?"M":"L"} ${p.x} ${p.y}`).join(" "),X=`M ${E[0].x} 94 ${E.map(p=>`L ${p.x} ${p.y}`).join(" ")} L ${E[E.length-1].x} 94 Z`,Q=s===0?'<div style="padding:28px 0; text-align:center; color:var(--text-muted); font-size:12px;">No check-ins recorded for this month yet.</div>':`
          <svg style="width:100%; height:100%; overflow:visible;" viewBox="0 0 280 120" role="img" aria-label="Weekly points trend">
            <defs>
              <linearGradient id="line-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--primary-teal)" stop-opacity="0.4"/>
                <stop offset="100%" stop-color="var(--primary-teal)" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <path d="${X}" fill="url(#line-grad)"/>
            <path d="${J}" stroke="var(--primary-teal)" stroke-width="4" fill="none" stroke-linecap="round"/>
            ${E.map((p,y)=>`
                  <circle cx="${p.x}" cy="${p.y}" r="5" fill="var(--accent-gold)"/>
                  <text x="${p.x}" y="${p.y-9}" font-size="9" font-weight="bold" fill="var(--primary-teal)" text-anchor="middle">${p.points}</text>
                  <text x="${p.x}" y="115" font-size="9" fill="var(--text-muted)" text-anchor="middle">W${y+1}</text>
                `).join("")}
          </svg>
        `;let ae="";if(D&&D.month===w&&D.year===$){const p=D.day,y=`${$}-${String(w+1).padStart(2,"0")}-${String(p).padStart(2,"0")}`,m=e.checkInHistory&&e.checkInHistory[y];ae=`
        <div class="card" style="background:linear-gradient(135deg,#e0f2f1,#fff); border:2px solid var(--primary-teal); position:relative; margin-top:12px;">
          <button style="position:absolute; top:10px; right:12px; border:none; background:none; font-size:16px; cursor:pointer; color:var(--text-muted);" onclick="window.closeDateDetails()">✖️</button>
          
          <div style="font-size:14px; font-weight:700; color:var(--primary-teal); margin-bottom:4px;">
            📅 Date: ${_[w]} ${p}, ${$}
          </div>

          ${m?`
            <div style="font-size:12px; font-weight:700; color:var(--primary-teal); margin-bottom:6px;">
              Done, Alhamdulillah! 🎉
            </div>
            <div style="display:flex; gap:10px; margin:8px 0;">
              <div style="background:white; padding:6px 12px; border-radius:10px; border:1px solid #b2dfdb;">
                <span style="font-size:10px; color:var(--text-muted); display:block;">Score Achieved</span>
                <strong style="font-size:14px; color:var(--primary-teal);">+${m.score} pts ⭐</strong>
              </div>
              <div style="background:white; padding:6px 12px; border-radius:10px; border:1px solid #ffe082;">
                <span style="font-size:10px; color:var(--text-muted); display:block;">Reward Unlocked</span>
                <strong style="font-size:12px; color:#e65100;">${m.reward?m.reward.emoji+" "+m.reward.title:"🍦 Treat"}</strong>
              </div>
            </div>
            ${m.details&&m.details.length>0?`
              <div style="font-size:11px; font-weight:700; color:var(--text-dark); margin-top:6px; margin-bottom:2px;">Completed Deeds:</div>
              <ul style="font-size:11px; color:var(--text-muted); padding-left:18px; margin:0;">
                ${m.details.map(A=>`<li>${A}</li>`).join("")}
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
        <div style="text-align:center; font-size:18px; font-weight:700; margin-bottom:12px;">${_[w]} ${$} summary 🌟</div>
        <div style="display:flex; justify-content:space-around; text-align:center;">
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${l}</div><div style="font-size:11px;">Points</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${r}</div><div style="font-size:11px;">Good deeds</div></div>
          <div><div style="font-size:22px; font-weight:700; color:var(--accent-gold);">${s}</div><div style="font-size:11px;">Check-in days</div></div>
        </div>
      </div>

      <!-- Family Stars Leaderboard -->
      <div class="card">
        <strong style="font-size:15px; display:block; margin-bottom:10px;">🌟 Family Stars Leaderboard</strong>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${g.slice().sort((p,y)=>y.points-p.points).map((p,y)=>{const m=y===0?"🥇":y===1?"🥈":"🥉",A=["Kindness Champion 🌸","Dua Star 🤲","Helping Hero 🤝","Manners Explorer 🌟"],fe=A[y%A.length];return`
              <div style="display:flex; align-items:center; gap:10px; background:${y===0?"var(--soft-gold-bg)":"#f9f9f9"}; padding:8px 12px; border-radius:14px; border:1px solid ${y===0?"var(--accent-gold)":"#eee"};">
                <span style="font-size:22px;">${m}</span>
                <div style="width:36px; height:36px; flex-shrink:0;">
                  ${G(p.gender,p.skinTone,p.hairColor,p.hairStyleIndex,p.eyeGlassesIndex,p.headwearColor,p.hasHeadwear)}
                </div>
                <div style="flex:1;">
                  <strong style="font-size:13px; display:block; color:var(--text-dark);">${p.name}</strong>
                  <span style="font-size:10px; color:var(--primary-teal); font-weight:700;">${fe}</span>
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
          <span style="font-size:11px; color:var(--primary-teal); font-weight:700;">${_[w]} ${$}</span>
        </div>
        <div style="position:relative; height:120px; width:100%;">${Q}</div>
      </div>

      <!-- Interactive Calendar with Month Traversal -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:12px; font-weight:700; padding:4px 10px; border-radius:10px; cursor:pointer;" onclick="window.changeCalendarMonth(-1)">◀ Prev</button>
          <strong style="font-size:15px; color:var(--text-dark);">${_[w]} ${$}</strong>
          <button style="border:none; background:var(--soft-teal-bg); color:var(--primary-teal); font-family:var(--font-fredoka); font-size:12px; font-weight:700; padding:4px 10px; border-radius:10px; cursor:pointer;" onclick="window.changeCalendarMonth(1)">Next ▶</button>
        </div>

        <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:6px; text-align:center;">
          ${Array.from({length:i},(p,y)=>y+1).map(p=>{const y=`${$}-${String(w+1).padStart(2,"0")}-${String(p).padStart(2,"0")}`,m=e.checkInHistory&&e.checkInHistory[y],A=n&&p===o.getDate();return`
              <div style="background:${A?"var(--accent-gold)":m?"var(--soft-teal-bg)":"#f5f5f5"}; color:${A?"white":"black"}; border-radius:8px; padding:6px 2px; cursor:pointer; font-size:11px; font-weight:700; border:${A?"2px solid #ff8f00":"none"};" onclick="window.showDateDetails(${p})">
                ${p}${A?" (Today)":""}<br>${m?"⭐":""}
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- INLINE POPUP / CARD FOR SELECTED DATE DETAILS -->
      ${ae}
    `}else if(h==="rewards"){const i=e;i.claimedRewards||(i.claimedRewards=[]),t.innerHTML=`
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
        ${i.claimedRewards.length>0?i.claimedRewards.map(o=>`
          <div style="display:flex; align-items:center; gap:10px; padding:8px 0; border-bottom:1px solid #f0f0f0;">
            <span style="font-size:26px;">${o.emoji}</span>
            <div style="flex:1;">
              <strong style="font-size:13px; display:block;">${o.title}</strong>
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
    `,setTimeout(te,100)}else h==="learn"&&(t.innerHTML=`
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
    `)}window.lockParentGate=function(){F=!1,b=-1,z="",u()};window.setSoundEnabled=function(t){N=!!t;try{localStorage.setItem(ce,String(N))}catch(e){console.error("Could not save sound preference:",e),v({title:"Sound setting not saved",message:"This browser could not save the setting for your next visit.",icon:"⚠️"})}};window.testPreviewAudio=function(){if(!N){v({title:"Voice is muted",message:"Turn on sound effects and voice prompts to test the audio.",icon:"🔇"});return}R("Mashaa Allah! Keep doing your best!",{showUnavailable:!0})};window.selectKidFromGrid=function(t){b=t;const e=g[t];S=[],B=!1,K=null,e.requiresPatternLock=!1,h="today",R(`Assalamu Alaikum ${e.name}! Let's see what you did today!`),u()};window.resetChildPattern=function(t){g[t].patternLock=null,v({title:"Pattern reset",message:`Pattern lock reset for ${g[t].name}! They can draw a new pattern on login.`,icon:"✨"}),u()};window.toggleDeed=function(t){j[t].isEnabled=!j[t].isEnabled,u()};window.deleteDeed=function(t){Z({title:"Delete habit",message:`Delete habit "${j[t].text}"?

This cannot be undone.`,icon:"🗑️",confirmText:"Delete",cancelText:"Keep",danger:!0,onConfirm:()=>{j.splice(t,1),u()}})};window.addDeedModal=function(){const t=document.createElement("div");t.className="in-app-modal-overlay",t.innerHTML=`
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
  `,document.body.appendChild(t);let e=!0;window._setDeedType=function(i){e=i,document.getElementById("deed-type-positive").style.borderColor=i?"var(--primary-teal)":"#ccc",document.getElementById("deed-type-positive").style.background=i?"var(--soft-teal-bg)":"#f9f9f9",document.getElementById("deed-type-positive").style.color=i?"var(--primary-teal)":"#888",document.getElementById("deed-type-negative").style.borderColor=i?"#ccc":"#e53935",document.getElementById("deed-type-negative").style.background=i?"#f9f9f9":"#ffebee",document.getElementById("deed-type-negative").style.color=i?"#888":"#e53935"},document.getElementById("add-deed-save").addEventListener("click",()=>{const i=document.getElementById("add-deed-text").value.trim();if(!i){document.getElementById("add-deed-text").focus();return}const o=Math.abs(parseInt(document.getElementById("add-deed-pts").value,10))||2,n=["⭐","🌟","✨","🤝","💬","❤️","🕌","🌙","🎯","🌱"];j.push({emoji:n[Math.floor(Math.random()*n.length)],text:i,points:o,positive:e,isEnabled:!0}),t.remove(),u()})};window.deleteReward=function(t){Z({title:"Delete reward",message:`Delete reward "${I[t].title}"?

This cannot be undone.`,icon:"🗑️",confirmText:"Delete",cancelText:"Keep",danger:!0,onConfirm:()=>{I.splice(t,1),u()}})};window.addRewardModal=function(){const t=document.createElement("div");t.className="in-app-modal-overlay",t.innerHTML=`
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
  `,document.body.appendChild(t),document.getElementById("add-reward-save").addEventListener("click",()=>{const e=document.getElementById("add-reward-title").value.trim();if(!e){document.getElementById("add-reward-title").focus();return}const i=Math.abs(parseInt(document.getElementById("add-reward-pts").value,10))||50,o=Math.min(100,Math.abs(parseInt(document.getElementById("add-reward-prob").value,10))||25),n=["🎁","🏆","🍦","🍕","🎮","🌳","🎨","🤗","📖","⭐"];I.push({emoji:n[Math.floor(Math.random()*n.length)],title:e,requiredPoints:i,probability:o/100}),t.remove(),u()})};window.deleteChild=function(t){Z({title:"Delete profile",message:`Delete ${g[t].name}'s profile?

This cannot be undone.`,icon:"👤",confirmText:"Delete",cancelText:"Cancel",danger:!0,onConfirm:()=>{g.splice(t,1),b>=g.length&&(b=-1),u()}})};window.resetAllAppDataModal=function(){Z({title:"Reset all app data?",message:"This will permanently delete all children profiles, points, streaks and restore the app to factory fresh settings.",icon:"⚠️",confirmText:"Reset everything",cancelText:"Cancel",danger:!0,onConfirm:()=>{g=[],b=-1,F=!1,ie="1234",z="",u(),v({title:"App reset!",message:"MashaAllah! App has been reset to factory fresh state!",icon:"✨"})}})};window.changeParentPinModal=function(){const t=document.createElement("div");t.className="in-app-modal-overlay",t.innerHTML=`
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
  `,document.body.appendChild(t),document.getElementById("change-pin-save").addEventListener("click",()=>{const e=document.getElementById("new-pin-1").value.trim(),i=document.getElementById("new-pin-2").value.trim();if(!e||e.length!==4||!/^\d{4}$/.test(e)){document.getElementById("new-pin-1").style.borderColor="#e53935",document.getElementById("new-pin-1").focus(),v({title:"Invalid PIN",message:"PIN must be exactly 4 digits!",icon:"⚠️"});return}if(e!==i){document.getElementById("new-pin-2").style.borderColor="#e53935",document.getElementById("new-pin-2").focus(),v({title:"PINs do not match",message:"The two PINs you entered do not match. Please try again.",icon:"❌"});return}ie=e,t.remove(),v({title:"PIN updated!",message:"MashaAllah! Your parent PIN has been updated successfully!",icon:"✨"}),u()})};window.changeChildPatternModal=function(t){g[t].patternLock=null,b=t,S=[],K=null,B=!1,u()};function Se(){const t=document.getElementById("pattern-grid"),e=document.getElementById("pattern-path");if(!t||!e)return;const i=document.querySelectorAll(".pattern-dot");function o(l){const r=l.getBoundingClientRect(),s=document.getElementById("pattern-canvas").getBoundingClientRect();return{x:r.left+r.width/2-s.left,y:r.top+r.height/2-s.top}}function n(){if(S.length<2){e.setAttribute("d","");return}let l="";S.forEach((r,s)=>{const c=document.getElementById(`pattern-dot-${r}`);if(c){const d=o(c);l+=s===0?`M ${d.x} ${d.y}`:` L ${d.x} ${d.y}`}}),e.setAttribute("d",l)}function a(l){const r=l.clientX||l.touches&&l.touches[0].clientX,s=l.clientY||l.touches&&l.touches[0].clientY;!r||!s||i.forEach(c=>{const d=c.getBoundingClientRect();if(r>=d.left&&r<=d.right&&s>=d.top&&s<=d.bottom){const x=parseInt(c.dataset.num);S.includes(x)||(S.push(x),c.style.background="var(--accent-gold)",c.style.borderColor="var(--accent-gold)",c.style.color="white",n())}})}t.addEventListener("pointerdown",l=>{W=!0,a(l)}),t.addEventListener("pointermove",l=>{W&&a(l)}),t.addEventListener("pointerup",()=>{W&&(W=!1,Te())})}function Te(){const t=g[b];if(t)if(t.patternLock)S.join("-")===t.patternLock?(t.requiresPatternLock=!1,h="today",u(),R(`Assalamu Alaikum ${t.name}! Let's see what you did today!`)):(v({title:"Pattern incorrect",message:"That pattern is incorrect. Please try again.",icon:"🔒"}),resetPatternDrawn());else{if(S.length<3){v({title:"Too short",message:"Connect at least 3 stars to set a pattern!",icon:"⭐"}),resetPatternDrawn();return}if(!B)K=S.join("-"),B=!0,v({title:"Pattern recorded!",message:"Great! Now draw the same pattern again to confirm.",icon:"✨"}),resetPatternDrawn(),u();else{const e=S.join("-");e===K?(t.patternLock=e,t.requiresPatternLock=!1,h="today",u(),R(`Assalamu Alaikum ${t.name}! Let's see what you did today!`)):(v({title:"Patterns do not match",message:"The patterns did not match. Please try again from the beginning.",icon:"❌"}),B=!1,K=null,resetPatternDrawn(),u())}}}window.resetPatternDrawn=function(){S=[];const t=document.getElementById("pattern-path");t&&t.setAttribute("d",""),[1,2,3,4,5,6,7,8,9].forEach(e=>{const i=document.getElementById(`pattern-dot-${e}`);i&&(i.style.background="#f0f4f8",i.style.borderColor="var(--primary-teal)",i.style.color="black")})};window.cancelKidSelection=function(){b=-1,u()};window.cancelCheckIn=function(){P=!1,L=!1,T=[],C=0,window.currentCheckInReward=null,u()};window.openAddChildVisualModal=function(t=-1){const e=t>=0?g[t]:null;f={name:e?e.name:"",gender:e?e.gender:"boy",skinTone:e?e.skinTone:"#f5d0a0",hairColor:e?e.hairColor:"#0e0e0e",hairStyleIndex:e?e.hairStyleIndex:1,eyeGlassesIndex:e?e.eyeGlassesIndex:1,headwearColor:e?e.headwearColor:"#ffb300",hasHeadwear:!0},k="hairStyle";const i=document.createElement("div");i.id="visual-avatar-modal",i.style.cssText="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px;",i.innerHTML=`
    <div style="background:white; border-radius:24px; max-width:380px; width:100%; padding:20px; box-shadow:0 10px 25px rgba(0,0,0,0.2); font-family:var(--font-fredoka);" id="modal-content">
      <!-- Rendered dynamically -->
    </div>
  `,document.body.appendChild(i),H(t)};function H(t){const e=document.getElementById("modal-content");e&&(e.innerHTML=`
    <h3 style="font-size:18px; margin-bottom:12px; text-align:center; color:var(--text-dark);">🎨 Create your avatar</h3>

    <div style="width:110px; height:110px; margin:0 auto 14px auto;" id="modal-head-preview">
      ${G(f.gender,f.skinTone,f.hairColor,f.hairStyleIndex,f.eyeGlassesIndex,f.headwearColor,!0)}
    </div>

    <input type="text" id="input-modal-name" value="${f.name}" placeholder="Child's Name (e.g. Maryam / Bilal)" style="width:100%; padding:10px 14px; border-radius:14px; border:1px solid #ccc; font-family:var(--font-fredoka); margin-bottom:14px; text-align:center; font-size:15px; font-weight:700;" />

    <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:6px; margin-bottom:14px;">
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${k==="gender"?"var(--primary-teal)":"#f5f5f5"}; color:${k==="gender"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('gender', ${t})">
        <span style="font-size:18px;">👦👧</span><br><span style="font-size:9px; font-weight:700;">Gender</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${k==="hairStyle"?"var(--primary-teal)":"#f5f5f5"}; color:${k==="hairStyle"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('hairStyle', ${t})">
        <span style="font-size:18px;">💇‍♂️</span><br><span style="font-size:9px; font-weight:700;">Hair style</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${k==="hairColor"?"var(--primary-teal)":"#f5f5f5"}; color:${k==="hairColor"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('hairColor', ${t})">
        <span style="font-size:18px;">🎨</span><br><span style="font-size:9px; font-weight:700;">Hair color</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${k==="skinTone"?"var(--primary-teal)":"#f5f5f5"}; color:${k==="skinTone"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('skinTone', ${t})">
        <span style="font-size:18px;">🖐️</span><br><span style="font-size:9px; font-weight:700;">Skin</span>
      </div>
      <div class="card" style="padding:6px 2px; text-align:center; cursor:pointer; background:${k==="eyeGlasses"?"var(--primary-teal)":"#f5f5f5"}; color:${k==="eyeGlasses"?"white":"black"}; border-radius:12px;" onclick="setModalCategory('eyeGlasses', ${t})">
        <span style="font-size:18px;">👓</span><br><span style="font-size:9px; font-weight:700;">Glasses</span>
      </div>
    </div>

    <div style="background:#f9f9f9; padding:12px; border-radius:16px; margin-bottom:16px;">
      ${Me(t)}
    </div>

    <div style="display:flex; gap:10px;">
      <button class="btn-secondary" style="flex:1;" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" style="flex:1;" id="btn-save-modal-child">Save avatar 🎨</button>
    </div>
  `,document.getElementById("btn-save-modal-child").addEventListener("click",()=>{const i=document.getElementById("input-modal-name").value.trim();if(!i){v({title:"Name required",message:"Please enter your child's name!",icon:"👶"});return}t>=0?(g[t].name=i,g[t].gender=f.gender,g[t].skinTone=f.skinTone,g[t].hairColor=f.hairColor,g[t].hairStyleIndex=f.hairStyleIndex,g[t].eyeGlassesIndex=f.eyeGlassesIndex):(g.push({id:Date.now().toString(),name:i,level:1,points:0,streak:1,title:"Good deeds starter 🌟",gender:f.gender,skinTone:f.skinTone,hairColor:f.hairColor,hairStyleIndex:f.hairStyleIndex,eyeGlassesIndex:f.eyeGlassesIndex,outfitColor:f.gender==="girl"?"#e91e63":"#00897b",headwearColor:f.gender==="boy"?"#ffb300":"#81c784",hasHeadwear:!0,patternLock:null}),b=g.length-1),document.getElementById("visual-avatar-modal").remove(),u()}))}function Me(t){if(k==="gender")return`
      <div style="display:flex; gap:12px;">
        <div style="flex:1; padding:12px; border-radius:14px; border:2px solid ${f.gender==="boy"?"var(--primary-teal)":"#ccc"}; background:${f.gender==="boy"?"var(--soft-teal-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGender('boy', ${t})">
          <div style="font-size:36px;">👦</div>
          <strong style="font-size:13px; display:block; margin-top:4px;">Boy</strong>
        </div>
        <div style="flex:1; padding:12px; border-radius:14px; border:2px solid ${f.gender==="girl"?"var(--primary-teal)":"#ccc"}; background:${f.gender==="girl"?"var(--soft-teal-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGender('girl', ${t})">
          <div style="font-size:36px;">👧</div>
          <strong style="font-size:13px; display:block; margin-top:4px;">Girl</strong>
        </div>
      </div>
    `;if(k==="hairStyle")return`
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${(f.gender==="girl"?ke:we).map(i=>`
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${f.hairStyleIndex===i.index?"var(--accent-gold)":"#ccc"}; background:${f.hairStyleIndex===i.index?"var(--soft-gold-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalHairStyle(${i.index}, ${t})">
            <div style="font-size:24px;">${i.emoji}</div>
            <span style="font-size:9px; font-weight:700; display:block; margin-top:2px;">${i.label}</span>
          </div>
        `).join("")}
      </div>
    `;if(k==="hairColor")return`
      <div style="display:flex; justify-content:space-around; align-items:center;">
        ${ve.map(e=>`
          <div style="text-align:center; cursor:pointer;" onclick="selectModalHairColor('${e.color}', ${t})">
            <div style="width:44px; height:44px; border-radius:50%; background:${e.color}; border:3px solid ${f.hairColor===e.color?"var(--accent-gold)":"#ccc"}; margin:0 auto;"></div>
            <span style="font-size:10px; font-weight:700; display:block; margin-top:4px;">${e.name}</span>
          </div>
        `).join("")}
      </div>
    `;if(k==="skinTone")return`
      <div style="display:flex; justify-content:space-around;">
        ${be.map(e=>`
          <div style="width:40px; height:40px; border-radius:50%; background:${e.color}; border:3px solid ${f.skinTone===e.color?"var(--accent-gold)":"#ccc"}; cursor:pointer;" onclick="selectModalSkinTone('${e.color}', ${t})"></div>
        `).join("")}
      </div>
    `;if(k==="eyeGlasses")return`
      <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
        ${$e.map(e=>`
          <div style="padding:8px 4px; border-radius:12px; border:2px solid ${f.eyeGlassesIndex===e.index?"var(--accent-gold)":"#ccc"}; background:${f.eyeGlassesIndex===e.index?"var(--soft-gold-bg)":"white"}; text-align:center; cursor:pointer;" onclick="selectModalGlasses(${e.index}, ${t})">
            <div style="font-size:24px;">${e.emoji}</div>
            <span style="font-size:9px; font-weight:700; display:block; margin-top:2px;">${e.label}</span>
          </div>
        `).join("")}
      </div>
    `}window.setModalCategory=function(t,e){k=t,H(e)};window.selectModalGender=function(t,e){f.gender=t,H(e)};window.selectModalHairStyle=function(t,e){f.hairStyleIndex=t,H(e)};window.selectModalHairColor=function(t,e){f.hairColor=t,H(e)};window.selectModalSkinTone=function(t,e){f.skinTone=t,H(e)};window.selectModalGlasses=function(t,e){f.eyeGlassesIndex=t,H(e)};window.closeModal=function(){const t=document.getElementById("visual-avatar-modal");t&&t.remove()};window.showDateDetails=function(t){const e=g[b]?g[b].name:"Child",i=30+t*3%40,o=t%5===0?"🍦 Ice cream treat":"📖 Bedtime story";v({title:`August ${t}, 2026`,message:`👶 Child: ${e}
🌟 Score earned: +${i} pts
🎁 Unlocked gift: ${o}

Completed deeds:
• Morning dua recited 👍
• Prayed Salah on time 🕌
• Helped clean up toys 🧸`,icon:"📅",buttonText:"Close"})};function te(t="scratch-canvas"){const e=document.getElementById(t);if(!e)return;const i=e.getContext("2d");e.width=e.offsetWidth||260,e.height=e.offsetHeight||130,i.globalCompositeOperation="source-over";const o=i.createLinearGradient(0,0,e.width,e.height);o.addColorStop(0,"#ffd700"),o.addColorStop(.5,"#fff8e1"),o.addColorStop(1,"#ffb300"),i.fillStyle=o,i.fillRect(0,0,e.width,e.height),i.fillStyle="#5d4037",i.font="bold 13px Fredoka, sans-serif",i.textAlign="center",i.fillText("✨ Scratch to Discover Your Surprise! ✨",e.width/2,e.height/2+5);let n=!1;function a(r,s){i.globalCompositeOperation="destination-out",i.beginPath(),i.arc(r,s,20,0,Math.PI*2),i.fill()}function l(r){const s=e.getBoundingClientRect(),c=r.touches?r.touches[0].clientX:r.clientX,d=r.touches?r.touches[0].clientY:r.clientY;return{x:c-s.left,y:d-s.top}}e.onmousedown=r=>{n=!0;const s=l(r);a(s.x,s.y)},e.onmousemove=r=>{if(n){const s=l(r);a(s.x,s.y)}},window.onmouseup=()=>{n=!1},e.ontouchstart=r=>{n=!0;const s=l(r);a(s.x,s.y)},e.ontouchmove=r=>{if(n){const s=l(r);a(s.x,s.y)}},window.ontouchend=()=>{n=!1}}window.resetScratchFoil=function(){const t=I[Math.floor(Math.random()*I.length)],e=document.getElementById("scratch-prize-emoji"),i=document.getElementById("scratch-prize-title");e&&(e.innerText=t.emoji),i&&(i.innerText=t.title),te()};window.unlockScratchCardModal=function(){if(b<0)return;const t=g[b];if(t.points<40){v({title:"Not enough points",message:`You need 40 points to unlock a scratch card!

Your current points: ${t.points} ⭐`,icon:"⭐"});return}t.points-=40;const e=I[Math.floor(Math.random()*I.length)];t.claimedRewards||(t.claimedRewards=[]),t.claimedRewards.push(e),u(),v({title:"Scratch card unlocked! 🎉",message:`MashaAllah! You unlocked "${e.emoji} ${e.title}"!

40 points have been used.`,icon:"🎁",buttonText:"Awesome!"})};window.playDuaAudio=function(t,e){console.log(`Would play recitation for: ${e} - ${t}`)};let M=0;const U=[{icon:"🌟",title:"Welcome to Kids Good-Deeds",text:"A fun nightly adventure encouraging daily good deeds, Islamic manners, and family rituals without shaming or punishment."},{icon:"🎨",title:"Faceless Vector Avatars",text:"Adheres strictly to faceless visual rules! Customize gender, hijab/kufi colors, skin tone, hair style, and glasses."},{icon:"🌙",title:"Nightly Family Check-In",text:"Swipeable card deck flow with gentle encouragement. Earn points for positive habits, try again tomorrow for mistakes!"},{icon:"🎁",title:"Scratch-to-Reveal Rewards",text:"Children spend earned points to scratch surprise rewards customizable by parents (e.g. bedtime stories, ice cream)."},{icon:"👨‍👩‍👧",title:"Parent PIN & Pattern Locks",text:"Protect parent settings with a 4-digit PIN (default: 1234). Children use 3x3 star pattern locks to access their profiles."}];window.openAppGuideModal=function(){M=0;const t=document.createElement("div");t.id="guide-walkthrough-modal",t.style.cssText="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); z-index:999; display:flex; align-items:center; justify-content:center; padding:16px;",t.innerHTML=`
    <div style="background:white; border-radius:24px; max-width:380px; width:100%; padding:24px; box-shadow:0 10px 25px rgba(0,0,0,0.2); font-family:var(--font-fredoka); text-align:center;" id="guide-modal-content">
      <!-- Content populated dynamically -->
    </div>
  `,document.body.appendChild(t),ne()};function ne(){const t=document.getElementById("guide-modal-content");if(!t)return;const e=U[M];t.innerHTML=`
    <div style="font-size:54px; margin-bottom:10px;">${e.icon}</div>
    <h3 style="font-size:18px; color:var(--text-dark); margin-bottom:8px;">${e.title}</h3>
    <p style="font-size:13px; color:var(--text-muted); line-height:1.5; margin-bottom:18px; min-height:60px;">${e.text}</p>

    <!-- Slide Indicators -->
    <div style="display:flex; justify-content:center; gap:6px; margin-bottom:20px;">
      ${U.map((i,o)=>`
        <div style="width:${o===M?"20px":"8px"}; height:8px; border-radius:4px; background:${o===M?"var(--primary-teal)":"#e0e0e0"}; transition:all 0.3s ease;"></div>
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
  `}window.nextGuideSlide=function(){M<U.length-1&&(M++,ne())};window.prevGuideSlide=function(){M>0&&(M--,ne())};window.changeCalendarMonth=function(t){w+=t,w<0?(w=11,$--):w>11&&(w=0,$++),D=null,u()};window.showDateDetails=function(t){D={day:t,month:w,year:$},u()};window.closeDateDetails=function(){D=null,u()};u();
