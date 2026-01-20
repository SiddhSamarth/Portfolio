"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7950],{17950:(e,t,i)=>{let a,r,n,s,o;i.d(t,{A:()=>uf});var l,d,u,h,c,m,p,v,E,b,g,f,A,y,k,w,I,T,_,S,C,L,M,D,R,x,N,O,U,P,W,H,B,$,V,F,G,K,q,j,Y,Z,Q,z,X,J,ee,et,ei,ea,er,en,es,eo,el,ed,eu,eh,ec,em,ep,ev,eE,eb,eg,ef,eA,ey,ek,ew,eI,eT,e_,eS,eC,eL,eM,eD,eR,ex,eN,eO,eU,eP,eW,eH,eB,e$,eV,eF,eG,eK,eq,ej,eY,eZ,eQ,ez,eX,eJ,e0,e1,e2,e5,e4,e3,e7,e8,e9,e6,te,tt,ti,ta,tr,tn,ts,to,tl,td,tu,th,tc,tm,tp,tv,tE,tb,tg,tf,tA,ty,tk,tw,tI,tT,t_,tS,tC,tL,tM,tD,tR,tx,tN,tO,tU,tP,tW,tH,tB,t$,tV,tF,tG,tK,tq,tj,tY,tZ,tQ,tz,tX,tJ,t0,t1,t2,t5,t4,t3,t7,t8,t9,t6,ie,it,ii,ia,ir,is,io,il,id,iu,ih,ic,im,ip,iv,iE,ib,ig,iA,iy,ik,iw,iI,iT,i_,iS,iC,iL,iM,iD,iR,ix,iN,iO,iU,iP,iW,iH,iB,i$,iV,iF,iG,iK,iq,ij,iY,iZ,iQ,iz,iX,iJ,i0,i1,i2,i5,i4,i3,i7,i8,i9,i6={};i.r(i6),i.d(i6,{getPlaybackId:()=>un,getPosterURLFromPlaybackId:()=>us,transform:()=>ur});var ae={};i.r(ae),i.d(ae,{transform:()=>up});var at={};i.r(at),i.d(at,{transform:()=>uv});var ai={};i.r(ai),i.d(ai,{transform:()=>uE});var aa={};i.r(aa),i.d(aa,{transform:()=>ub});var ar={};i.r(ar),i.d(ar,{amazonS3:()=>ai,backblaze:()=>at,cloudflareR2:()=>aa,mux:()=>i6,vercelBlob:()=>ae});var an=i(95155),as=i(12115);let ao={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},al={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},ad={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},au=Object.entries(ad),ah=au.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),ac=au.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(ac).reduce((e,[t,i])=>{let a=ah[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let am=Object.entries(ah).reduce((e,[t,i])=>{let a=ac[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),ap={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},av={DISABLED:"disabled",SHOWING:"showing"},aE={MOUSE:"mouse",TOUCH:"touch"},ab={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ag={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},af={FULLSCREEN:"fullscreen"};function aA(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function ay(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function ak(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function aw(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function aI(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function aT(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let a_=e=>new Promise(t=>setTimeout(t,e)),aS=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],aC=(e,t)=>{let i=1===e?aS[t].singular:aS[t].plural;return`${e} ${i}`},aL=e=>{if(!aI(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&aC(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function aM(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let aD={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."},aR={en:aD},ax=(null==(l=globalThis.navigator)?void 0:l.language.split("-")[0])||"en",aN=e=>{ax=e},aO=(e,t={})=>{var i;return((null==(i=aR[ax])?void 0:i[e])||aD[e]).replace(/\{(\w+)\}/g,(e,i)=>void 0!==t[i]?String(t[i]):`{${i}}`)};class aU{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class aP extends aU{}class aW extends aP{constructor(){super(...arguments),this.role=null}}class aH{observe(){}unobserve(){}disconnect(){}}let aB={createElement:function(){return new a$.HTMLElement},createElementNS:function(){return new a$.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},a$={ResizeObserver:aH,document:aB,Node:aP,Element:aW,HTMLElement:class extends aW{constructor(){super(...arguments),this.innerHTML=""}get content(){return new a$.DocumentFragment}},DocumentFragment:class extends aU{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e})},aV="undefined"==typeof window||void 0===window.customElements,aF=Object.keys(a$).every(e=>e in globalThis),aG=aV&&!aF?a$:globalThis,aK=aV&&!aF?aB:globalThis.document,aq=new WeakMap,aj=e=>{let t=aq.get(e);return t||aq.set(e,t=new Set),t},aY=new aG.ResizeObserver(e=>{for(let t of e)for(let e of aj(t.target))e(t)});function aZ(e,t){aj(e).add(t),aY.observe(e)}function aQ(e,t){let i=aj(e);i.delete(t),i.size||aY.unobserve(e)}function az(e){var t;return null!=(t=aX(e))?t:a5(e,"media-controller")}function aX(e){var t;let{MEDIA_CONTROLLER:i}=al,a=e.getAttribute(i);if(a)return null==(t=a3(e))?void 0:t.getElementById(a)}let aJ=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},a0=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},a1=(e,t)=>a0(e,t)[0],a2=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||a2(e,t.getRootNode().host)),a5=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||a5(e.getRootNode().host,t)};function a4(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=a4(i.shadowRoot))?t:i:null}function a3(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function a7(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function a8(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||a9(e,t)}function a9(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function a6(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function re(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}a6(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function rt(e,t){return e.hasAttribute(t)}function ri(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}rt(e,t)!=i&&e.toggleAttribute(t,i)}function ra(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function rr(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;ra(e,t,void 0)!==a&&e.setAttribute(t,a)}var rn=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rs=(e,t,i)=>(rn(e,t,"read from private field"),i?i.call(e):t.get(e)),ro=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rl=(e,t,i,a)=>(rn(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let rd=aK.createElement("template");rd.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class ru extends aG.HTMLElement{constructor(e={}){if(super(),ro(this,d,void 0),!this.shadowRoot){let t=this.attachShadow({mode:"open"}),i=rd.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=aK.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),t.appendChild(i)}}static get observedAttributes(){return[al.MEDIA_CONTROLLER,ah.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===al.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=rs(this,d))?void 0:a.unassociateElement)||r.call(a,this),rl(this,d,null)),i&&this.isConnected&&(rl(this,d,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=rs(this,d))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),rl(this,d,function(e){var t;let i=e.getAttribute(al.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):a5(e,"media-controller")}(this)),this.getAttribute(al.MEDIA_CONTROLLER)&&(null==(t=null==(e=rs(this,d))?void 0:e.associateElement)||t.call(e,this)),null==(i=rs(this,d))||i.addEventListener("pointerdown",this),null==(a=rs(this,d))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(al.MEDIA_CONTROLLER)&&(null==(t=null==(e=rs(this,d))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=rs(this,d))||i.removeEventListener("pointerdown",this),null==(a=rs(this,d))||a.removeEventListener("click",this),rl(this,d,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===aE.TOUCH)return void this.handleTap(e);if(d===aE.MOUSE)return void this.handleMouseClick(e)}}}get mediaPaused(){return rt(this,ah.MEDIA_PAUSED)}set mediaPaused(e){ri(this,ah.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?ao.MEDIA_PLAY_REQUEST:ao.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aG.CustomEvent(t,{composed:!0,bubbles:!0}))}}d=new WeakMap,aG.customElements.get("media-gesture-receiver")||aG.customElements.define("media-gesture-receiver",ru);var rh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rc=(e,t,i)=>(rh(e,t,"read from private field"),i?i.call(e):t.get(e)),rm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rp=(e,t,i,a)=>(rh(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rv=(e,t,i)=>(rh(e,t,"access private method"),i);let rE={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},rb=aK.createElement("template");rb.innerHTML=`
  <style>
    
    :host([${ah.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${rE.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${rE.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${rE.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${rE.AUDIO}])[${rE.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${rE.AUDIO}])[${rE.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${rE.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${rE.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${rE.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${rE.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${rE.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
      opacity: 1;
      transition: var(--media-control-transition-in, opacity 0.25s);
    }

    
    :host([${rE.USER_INACTIVE}]:not([${ah.MEDIA_PAUSED}]):not([${ah.MEDIA_IS_AIRPLAYING}]):not([${ah.MEDIA_IS_CASTING}]):not([${rE.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${rE.NO_AUTOHIDE}]):not([role=dialog])) {
      opacity: 0;
      transition: var(--media-control-transition-out, opacity 1s);
    }

    :host([${rE.USER_INACTIVE}]:not([${rE.NO_AUTOHIDE}]):not([${ah.MEDIA_PAUSED}]):not([${ah.MEDIA_IS_CASTING}]):not([${rE.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    :host([${rE.USER_INACTIVE}][${rE.AUTOHIDE_OVER_CONTROLS}]:not([${rE.NO_AUTOHIDE}]):not([${ah.MEDIA_PAUSED}]):not([${ah.MEDIA_IS_CASTING}]):not([${rE.AUDIO}])) * {
     --media-cursor: none;
     cursor: none;
    }


    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${rE.AUDIO}])[${ah.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role=dialog]) {
      width: 100%;
      height: 100%;
      align-self: center;
    }

    ::slotted([role=menu]) {
      align-self: end;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
  <slot name="dialog" part="layer dialog-layer"></slot>
`;let rg=Object.values(ah);function rf(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(rE.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(ac.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(ac.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class rA extends aG.HTMLElement{constructor(){super(),rm(this,v),rm(this,f),rm(this,y),rm(this,w),rm(this,T),rm(this,S),rm(this,u,0),rm(this,h,null),rm(this,c,null),rm(this,m,void 0),this.breakpointsComputed=!1,rm(this,p,new MutationObserver(rv(this,v,E).bind(this))),rm(this,b,!1),rm(this,g,e=>{rc(this,b)||(setTimeout(()=>{!function(e){rf(e.target,e.contentRect.width)}(e),rp(this,b,!1)},0),rp(this,b,!0))}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(rb.content.cloneNode(!0)));let e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){rc(this,h)&&this.mediaUnsetCallback(rc(this,h));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[rE.AUTOHIDE,rE.GESTURES_DISABLED].concat(rg).filter(e=>![ah.MEDIA_RENDITION_LIST,ah.MEDIA_AUDIO_TRACK_LIST,ah.MEDIA_CHAPTERS_CUES,ah.MEDIA_WIDTH,ah.MEDIA_HEIGHT,ah.MEDIA_ERROR,ah.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==rE.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(rp(this,h,e),e.localName.includes("-")&&await aG.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;rc(this,p).observe(this,{childList:!0,subtree:!0}),aZ(this,rc(this,g));let t=null!=this.getAttribute(rE.AUDIO)?aO("audio player"):aO("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(rE.USER_INACTIVE,""),rf(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=aG.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;rc(this,p).disconnect(),aQ(this,rc(this,g)),this.media&&this.mediaUnsetCallback(this.media),null==(e=aG.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){rp(this,h,null)}handleEvent(e){switch(e.type){case"pointerdown":rp(this,u,e.timeStamp);break;case"pointermove":rv(this,f,A).call(this,e);break;case"pointerup":rv(this,y,k).call(this,e);break;case"mouseleave":rv(this,w,I).call(this);break;case"mouseup":this.removeAttribute(rE.KEYBOARD_CONTROL);break;case"keyup":rv(this,S,C).call(this),this.setAttribute(rE.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);rp(this,m,isNaN(t)?0:t)}get autohide(){return(void 0===rc(this,m)?2:rc(this,m)).toString()}get breakpoints(){return ra(this,rE.BREAKPOINTS)}set breakpoints(e){rr(this,rE.BREAKPOINTS,e)}get audio(){return rt(this,rE.AUDIO)}set audio(e){ri(this,rE.AUDIO,e)}get gesturesDisabled(){return rt(this,rE.GESTURES_DISABLED)}set gesturesDisabled(e){ri(this,rE.GESTURES_DISABLED,e)}get keyboardControl(){return rt(this,rE.KEYBOARD_CONTROL)}set keyboardControl(e){ri(this,rE.KEYBOARD_CONTROL,e)}get noAutohide(){return rt(this,rE.NO_AUTOHIDE)}set noAutohide(e){ri(this,rE.NO_AUTOHIDE,e)}get autohideOverControls(){return rt(this,rE.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){ri(this,rE.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return rt(this,rE.USER_INACTIVE)}set userInteractive(e){ri(this,rE.USER_INACTIVE,e)}}u=new WeakMap,h=new WeakMap,c=new WeakMap,m=new WeakMap,p=new WeakMap,v=new WeakSet,E=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},b=new WeakMap,g=new WeakMap,f=new WeakSet,A=function(e){if("mouse"!==e.pointerType&&e.timeStamp-rc(this,u)<250)return;rv(this,T,_).call(this),clearTimeout(rc(this,c));let t=this.hasAttribute(rE.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&rv(this,S,C).call(this)},y=new WeakSet,k=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(rE.USER_INACTIVE);[this,this.media].includes(e.target)&&t?rv(this,w,I).call(this):rv(this,S,C).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&rv(this,S,C).call(this)},w=new WeakSet,I=function(){if(0>rc(this,m)||this.hasAttribute(rE.USER_INACTIVE))return;this.setAttribute(rE.USER_INACTIVE,"");let e=new aG.CustomEvent(ac.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},T=new WeakSet,_=function(){if(!this.hasAttribute(rE.USER_INACTIVE))return;this.removeAttribute(rE.USER_INACTIVE);let e=new aG.CustomEvent(ac.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},S=new WeakSet,C=function(){rv(this,T,_).call(this),clearTimeout(rc(this,c));let e=parseInt(this.autohide);e<0||rp(this,c,setTimeout(()=>{rv(this,w,I).call(this)},1e3*e))},aG.customElements.get("media-container")||aG.customElements.define("media-container",rA);var ry=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rk=(e,t,i)=>(ry(e,t,"read from private field"),i?i.call(e):t.get(e)),rw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rI=(e,t,i,a)=>(ry(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rT{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){rw(this,x),rw(this,L,void 0),rw(this,M,void 0),rw(this,D,void 0),rw(this,R,new Set),rI(this,L,e),rI(this,M,t),rI(this,D,new Set(i))}[Symbol.iterator](){return rk(this,x,N).values()}get length(){return rk(this,x,N).size}get value(){var e;return null!=(e=[...rk(this,x,N)].join(" "))?e:""}set value(e){var t;e!==this.value&&(rI(this,R,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...rk(this,x,N)][e]}values(){return rk(this,x,N).values()}forEach(e,t){rk(this,x,N).forEach(e,t)}add(...e){var t,i;e.forEach(e=>rk(this,R).add(e)),(""!==this.value||(null==(t=rk(this,L))?void 0:t.hasAttribute(`${rk(this,M)}`)))&&(null==(i=rk(this,L))||i.setAttribute(`${rk(this,M)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>rk(this,R).delete(e)),null==(t=rk(this,L))||t.setAttribute(`${rk(this,M)}`,`${this.value}`)}contains(e){return rk(this,x,N).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}L=new WeakMap,M=new WeakMap,D=new WeakMap,R=new WeakMap,x=new WeakSet,N=function(){return rk(this,R).size?rk(this,R):rk(this,D)};let r_=(e="")=>e.split(/\s+/),rS=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?ap.CAPTIONS:ap.SUBTITLES,language:i,label:r}},rC=(e="",t={})=>r_(e).map(e=>{let i=rS(e);return{...t,...i}}),rL=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?rS(e):e):"string"==typeof e?rC(e):[e]:[],rM=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,rD=(e=[])=>Array.prototype.map.call(e,rM).join(" "),rR=(e,t)=>i=>i[e]===t,rx=e=>{let t=Object.entries(e).map(([e,t])=>rR(e,t));return e=>t.every(t=>t(e))},rN=(e,t=[],i=[])=>{let a=rL(i).map(rx);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},rO=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:rx(t);return Array.from(e.textTracks).filter(i)},rU=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(ah.MEDIA_SUBTITLES_SHOWING)},rP=e=>{var t;let{media:i,fullscreenElement:a}=e,r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){let e=null==(t=a[r])?void 0:t.call(a);if(e instanceof Promise)return e.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()},rW="exitFullscreen"in aK?"exitFullscreen":"webkitExitFullscreen"in aK?"webkitExitFullscreen":"webkitCancelFullScreen"in aK?"webkitCancelFullScreen":void 0,rH=e=>{var t;let{documentElement:i}=e;if(rW){let e=null==(t=null==i?void 0:i[rW])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}},rB="fullscreenElement"in aK?"fullscreenElement":"webkitFullscreenElement"in aK?"webkitFullscreenElement":void 0,r$=e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[rB];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===af.FULLSCREEN?i:a},rV=e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=r$(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(rB in e))return a2(n,r);for(;null==e?void 0:e[rB];){if(e[rB]===r)return!0;e=null==(t=e[rB])?void 0:t.shadowRoot}}return!1},rF="fullscreenEnabled"in aK?"fullscreenEnabled":"webkitFullscreenEnabled"in aK?"webkitFullscreenEnabled":void 0,rG=e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[rF])||i&&"webkitSupportsFullscreen"in i},rK=()=>{var e;return a||(a=null==(e=null==aK?void 0:aK.createElement)?void 0:e.call(aK,"video"))},rq=async(e=rK())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([rj(e,i.signal),rY(e,t)]);return i.abort(),a},rj=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),rY=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await a_(10)}return e.volume!==t},rZ=/.*Version\/.*Safari\/.*/.test(aG.navigator.userAgent),rQ=(e=rK())=>(!aG.matchMedia("(display-mode: standalone)").matches||!rZ)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),rz=(e=rK())=>rG({documentElement:aK,media:e}),rX=rz(),rJ=rQ(),r0=!!aG.WebKitPlaybackTargetAvailabilityEvent,r1=!!aG.chrome,r2=e=>rO(e.media,e=>[ap.SUBTITLES,ap.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),r5=e=>rO(e.media,e=>e.mode===av.SHOWING&&[ap.SUBTITLES,ap.CAPTIONS].includes(e.kind)),r4=(e,t)=>{let i=r2(e),a=r5(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)rN(av.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;rN(av.DISABLED,i,a),rN(av.SHOWING,i,[{language:n,label:s,kind:o}])}}},r3=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?r7(e,t):Object.entries(e).every(([e,i])=>e in t&&r3(i,t[e])))),r7=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>r3(e,t[i])))},r8=Object.values(ag),r9=rq().then(e=>r=e),r6=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof aG.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=aG.customElements.get(t);i&&e instanceof i||(await aG.customElements.whenDefined(t),aG.customElements.upgrade(e))}))},ne={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;if(i){try{aG.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===aG.localStorage.getItem("media-chrome-pref-muted");ne.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?aG.localStorage.removeItem("media-chrome-pref-volume"):aG.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=aG.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;ne.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&aI(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[ag.LIVE,ag.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(r8.includes(r))return r===ag.UNKNOWN?a:r;let n=t.duration;return n===1/0?ag.LIVE:Number.isFinite(n)?ag.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=ne.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===ag.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(ne.mediaStreamType.get(e)!==ag.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>r2(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>r5(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![ap.CAPTIONS,ap.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||r4(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=rO(i,{kind:ap.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&a2(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!aK.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else aK.pictureInPictureElement&&aK.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>rV(e),set(e,t){e?rP(t):rH(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&aG.WebKitPlaybackTargetAvailabilityEvent))return void console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!rX||!rz(t))return ab.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!rJ||!rQ(t))return ab.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return ab.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==r&&r9.then(t=>e(t?void 0:ab.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return r1&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?ab.UNAVAILABLE:void 0:ab.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>r0?(null==t?void 0:t.availability)==="not-available"?ab.UNAVAILABLE:void 0:ab.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:ab.UNAVAILABLE:ab.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?ab.UNAVAILABLE:void 0:ab.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},nt={[ao.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=rO(l,{kind:ap.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),h=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==h&&(h=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:h}},[ao.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[ao.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===ag.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[ao.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[ao.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[ao.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[ao.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[ao.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[ao.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[ao.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=r2(t),s=rL(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&aG.localStorage.setItem("media-chrome-pref-subtitles-lang",o),rN(av.SHOWING,n,s)},[ao.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=r2(t);rN(av.DISABLED,a,null!=i?i:[])},[ao.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){r4(t,i)},[ao.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[ao.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[ao.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[ao.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[ao.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[ao.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[ao.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[ao.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[ao.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}},ni=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=ne,requestMap:r=nt,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),h=e=>{void 0!=e&&(r3(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u))))},c=()=>{h(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,E,b,g,f,A,y,k,w,I,T;let _=!!o;if(o={...d,...null!=o?o:{},...e},_)return;await r6(...Object.values(e));let S=l.length>0&&0===t&&s,C=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),M=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),D=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),R=(null==(E=d.media)?void 0:E.remote)!==(null==(b=o.media)?void 0:b.remote),x=d.documentElement!==o.documentElement,N=!!d.media&&(C||S),O=!!(null==(g=d.media)?void 0:g.textTracks)&&(L||S),U=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(M||S),P=!!(null==(A=d.media)?void 0:A.audioTracks)&&(D||S),W=!!(null==(y=d.media)?void 0:y.remote)&&(R||S),H=!!d.documentElement&&(x||S),B=N||O||U||P||W||H,$=0===l.length&&1===t&&s,V=!!o.media&&(C||$),F=!!(null==(k=o.media)?void 0:k.textTracks)&&(L||$),G=!!(null==(w=o.media)?void 0:w.videoRenditions)&&(M||$),K=!!(null==(I=o.media)?void 0:I.audioTracks)&&(D||$),q=!!(null==(T=o.media)?void 0:T.remote)&&(R||$),j=!!o.documentElement&&(x||$),Y=V||F||G||K||q||j;if(!(B||Y)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let c;m[e]||(m[e]={});let p=i=>{h({[e]:t(d,i)})};c=m[e].mediaEvents,i.forEach(t=>{c&&N&&(d.media.removeEventListener(t,c),m[e].mediaEvents=void 0),V&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),c=m[e].textTracksEvents,a.forEach(t=>{var i,a;c&&O&&(null==(i=d.media.textTracks)||i.removeEventListener(t,c),m[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),c=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;c&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,c),m[e].videoRenditionsEvents=void 0),G&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),c=m[e].audioTracksEvents,n.forEach(t=>{var i,a;c&&P&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,c),m[e].audioTracksEvents=void 0),K&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),c=m[e].remoteEvents,s.forEach(t=>{var i,a;c&&W&&(null==(i=d.media.remote)||i.removeEventListener(t,c),m[e].remoteEvents=void 0),q&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),c=m[e].rootEvents,l.forEach(t=>{c&&H&&(d.documentElement.removeEventListener(t,c),m[e].rootEvents=void 0),j&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&B&&v(),Y&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]&&null==u.mediaErrorCode)return void h(r[t](a,d,e));"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}};var na=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nr=(e,t,i)=>(na(e,t,"read from private field"),i?i.call(e):t.get(e)),nn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ns=(e,t,i,a)=>(na(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),no=(e,t,i)=>(na(e,t,"access private method"),i);let nl=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],nd={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};class nu extends rA{constructor(){super(),nn(this,$),nn(this,F),nn(this,K),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,nn(this,O,new rT(this,nd.HOTKEYS)),nn(this,U,void 0),nn(this,P,void 0),nn(this,W,void 0),nn(this,H,void 0),nn(this,B,e=>{var t;null==(t=nr(this,P))||t.dispatch(e)}),this.associateElement(this);let e={};ns(this,W,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new aG.CustomEvent(am[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(nd.NO_HOTKEYS,nd.HOTKEYS,nd.DEFAULT_STREAM_TYPE,nd.DEFAULT_SUBTITLES,nd.DEFAULT_DURATION,nd.LANG)}get mediaStore(){return nr(this,P)}set mediaStore(e){var t,i;if(nr(this,P)&&(null==(t=nr(this,H))||t.call(this),ns(this,H,void 0)),ns(this,P,e),!nr(this,P)&&!this.hasAttribute(nd.NO_DEFAULT_STORE))return void no(this,$,V).call(this);ns(this,H,null==(i=nr(this,P))?void 0:i.subscribe(nr(this,W)))}get fullscreenElement(){var e;return null!=(e=nr(this,U))?e:this}set fullscreenElement(e){var t;this.hasAttribute(nd.FULLSCREEN_ELEMENT)&&this.removeAttribute(nd.FULLSCREEN_ELEMENT),ns(this,U,e),null==(t=nr(this,P))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return rt(this,nd.DEFAULT_SUBTITLES)}set defaultSubtitles(e){ri(this,nd.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return ra(this,nd.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){rr(this,nd.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return a6(this,nd.DEFAULT_DURATION)}set defaultDuration(e){re(this,nd.DEFAULT_DURATION,e)}get noHotkeys(){return rt(this,nd.NO_HOTKEYS)}set noHotkeys(e){ri(this,nd.NO_HOTKEYS,e)}get keysUsed(){return ra(this,nd.KEYS_USED)}set keysUsed(e){rr(this,nd.KEYS_USED,e)}get liveEdgeOffset(){return a6(this,nd.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){re(this,nd.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return rt(this,nd.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){ri(this,nd.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return rt(this,nd.NO_VOLUME_PREF)}set noVolumePref(e){ri(this,nd.NO_VOLUME_PREF,e)}get noSubtitlesLangPref(){return rt(this,nd.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){ri(this,nd.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return rt(this,nd.NO_DEFAULT_STORE)}set noDefaultStore(e){ri(this,nd.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u;if(super.attributeChangedCallback(e,t,i),e===nd.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(nd.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===nd.HOTKEYS)nr(this,O).value=i;else if(e===nd.DEFAULT_SUBTITLES&&i!==t)null==(a=nr(this,P))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(nd.DEFAULT_SUBTITLES)}});else if(e===nd.DEFAULT_STREAM_TYPE)null==(n=nr(this,P))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(nd.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===nd.LIVE_EDGE_OFFSET)null==(s=nr(this,P))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(nd.LIVE_EDGE_OFFSET)?+this.getAttribute(nd.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(nd.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(nd.LIVE_EDGE_OFFSET)}});else if(e===nd.SEEK_TO_LIVE_OFFSET)null==(o=nr(this,P))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(nd.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(nd.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===nd.NO_AUTO_SEEK_TO_LIVE)null==(l=nr(this,P))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(nd.NO_AUTO_SEEK_TO_LIVE)}});else if(e===nd.FULLSCREEN_ELEMENT){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;ns(this,U,e),null==(u=nr(this,P))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===nd.LANG&&i!==t&&aN(i)}connectedCallback(){var e,t;nr(this,P)||this.hasAttribute(nd.NO_DEFAULT_STORE)||no(this,$,V).call(this),null==(e=nr(this,P))||e.dispatch({type:"documentelementchangerequest",detail:aK}),super.connectedCallback(),nr(this,P)&&!nr(this,H)&&ns(this,H,null==(t=nr(this,P))?void 0:t.subscribe(nr(this,W))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),nr(this,P)&&(null==(t=nr(this,P))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=nr(this,P))||i.dispatch({type:ao.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),nr(this,H)&&(null==(a=nr(this,H))||a.call(this),ns(this,H,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=nr(this,P))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=nr(this,P))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){ny(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=nk(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(ao).forEach(t=>{e.addEventListener(t,nr(this,B))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(ao).forEach(t=>{e.removeEventListener(t,nr(this,B))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),nr(this,P)&&Object.entries(nr(this,P).getState()).forEach(([t,i])=>{ny([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",no(this,K,q))}disableHotkeys(){this.removeEventListener("keydown",no(this,K,q)),this.removeEventListener("keyup",no(this,F,G))}get hotkeys(){return ra(this,nd.HOTKEYS)}set hotkeys(e){rr(this,nd.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n;let s,o,l,d=e.target;if(!((null!=(a=null!=(i=null==(t=d.getAttribute(nd.KEYS_USED))?void 0:t.split(" "))?i:null==d?void 0:d.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||nr(this,O).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&nr(this,O).contains("nospace")))switch(e.key){case" ":case"k":s=nr(this,P).getState().mediaPaused?ao.MEDIA_PLAY_REQUEST:ao.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new aG.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"m":s="off"===this.mediaStore.getState().mediaVolumeLevel?ao.MEDIA_UNMUTE_REQUEST:ao.MEDIA_MUTE_REQUEST,this.dispatchEvent(new aG.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"f":s=this.mediaStore.getState().mediaIsFullscreen?ao.MEDIA_EXIT_FULLSCREEN_REQUEST:ao.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new aG.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new aG.CustomEvent(ao.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(nd.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(nd.KEYBOARD_BACKWARD_SEEK_OFFSET):10;o=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),l=new aG.CustomEvent(ao.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l);break}case"ArrowRight":{let e=this.hasAttribute(nd.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(nd.KEYBOARD_FORWARD_SEEK_OFFSET):10;o=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),l=new aG.CustomEvent(ao.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l)}}}}O=new WeakMap,U=new WeakMap,P=new WeakMap,W=new WeakMap,H=new WeakMap,B=new WeakMap,$=new WeakSet,V=function(){var e;this.mediaStore=ni({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(nd.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(nd.DEFAULT_DURATION)?+this.getAttribute(nd.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(nd.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(nd.LIVE_EDGE_OFFSET)?+this.getAttribute(nd.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(nd.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(nd.SEEK_TO_LIVE_OFFSET):this.hasAttribute(nd.LIVE_EDGE_OFFSET)?+this.getAttribute(nd.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(nd.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(nd.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(nd.NO_SUBTITLES_LANG_PREF)}})},F=new WeakSet,G=function(e){let{key:t}=e;if(!nl.includes(t))return void this.removeEventListener("keyup",no(this,F,G));this.keyboardShortcutHandler(e)},K=new WeakSet,q=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!nl.includes(a))return void this.removeEventListener("keyup",no(this,F,G));[" ","ArrowLeft","ArrowRight"].includes(a)&&!(nr(this,O).contains(`no${a.toLowerCase()}`)||" "===a&&nr(this,O).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",no(this,F,G),{once:!0})};let nh=Object.values(ah),nc=Object.values(ad),nm=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(aG.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,al.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>nh.includes(e)):[]},np=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&aG.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof aG.customElements.get(e.nodeName.toLowerCase()))&&aG.customElements.upgrade(e),nc.some(t=>t in e)},nv=e=>np(e)||!!nm(e).length,nE=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},nb={[ah.MEDIA_SUBTITLES_LIST]:rD,[ah.MEDIA_SUBTITLES_SHOWING]:rD,[ah.MEDIA_SEEKABLE]:nE,[ah.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(nE).join(" "),[ah.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[ah.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(aA).join(" ")},[ah.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(ak).join(" ")}},ng=async(e,t,i)=>{var a,r;if(e.isConnected||await a_(0),"boolean"==typeof i||null==i)return ri(e,t,i);if("number"==typeof i)return re(e,t,i);if("string"==typeof i)return rr(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=nb[t])?void 0:a.call(nb,i))?r:i;return e.setAttribute(t,n)},nf=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},nA=(e,t)=>{if(nf(e))return;let i=(e,t)=>{var i,a;nv(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>nA(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!nv(e))return void aG.customElements.whenDefined(a).then(()=>{i(e,t)});i(e,t)},ny=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=nm(e),r=t.toLowerCase();a.includes(r)&&ng(e,r,i)})},nk=(e,t,i)=>{nA(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(ao.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(ao.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>nA(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>nA(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>nA(e,t)),Array.prototype.forEach.call(r,e=>nA(e,i))):"attributes"===n&&o===al.MEDIA_CHROME_ATTRIBUTES&&(nv(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{nA(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(ao.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(ao.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};aG.customElements.get("media-controller")||aG.customElements.define("media-controller",nu);var nw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nI=(e,t,i)=>(nw(e,t,"read from private field"),i?i.call(e):t.get(e)),nT=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n_=(e,t,i,a)=>(nw(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nS=(e,t,i)=>(nw(e,t,"access private method"),i);let nC={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"},nL=aK.createElement("template");nL.innerHTML=`
<style>
  :host {
    position: relative;
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: var(--media-cursor, pointer);
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  media-tooltip {
    
    max-width: 0;
    overflow-x: clip;
    opacity: 0;
    transition: opacity .3s, max-width 0s 9s;
  }

  :host(:hover) media-tooltip,
  :host(:focus-visible) media-tooltip {
    max-width: 100vw;
    opacity: 1;
    transition: opacity .3s;
  }

  :host([notooltip]) slot[name="tooltip"] {
    display: none;
  }
</style>

<slot name="tooltip">
  <media-tooltip part="tooltip" aria-hidden="true">
    <slot name="tooltip-content"></slot>
  </media-tooltip>
</slot>
`;class nM extends aG.HTMLElement{constructor(e={}){var t;if(super(),nT(this,X),nT(this,j,void 0),this.preventClick=!1,this.tooltipEl=null,this.tooltipContent="",nT(this,Y,e=>{this.preventClick||this.handleClick(e),setTimeout(nI(this,Z),0)}),nT(this,Z,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),nT(this,Q,e=>{let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",nI(this,Q));this.preventClick||this.handleClick(e)}),nT(this,z,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",nI(this,Q));this.addEventListener("keyup",nI(this,Q),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let i=nL.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=aK.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),e.tooltipContent&&(i.querySelector('slot[name="tooltip-content"]').innerHTML=null!=(t=e.tooltipContent)?t:"",this.tooltipContent=e.tooltipContent),this.nativeEl.appendChild(a.content.cloneNode(!0)),this.shadowRoot.appendChild(i)}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",nC.TOOLTIP_PLACEMENT,al.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",nI(this,Y)),this.addEventListener("keydown",nI(this,z)),this.tabIndex=0}disable(){this.removeEventListener("click",nI(this,Y)),this.removeEventListener("keydown",nI(this,z)),this.removeEventListener("keyup",nI(this,Q)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===al.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=nI(this,j))?void 0:a.unassociateElement)||r.call(a,this),n_(this,j,null)),i&&this.isConnected&&(n_(this,j,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=nI(this,j))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===nC.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),nI(this,Z).call(this)}connectedCallback(){var e,t,i;let{style:a}=a8(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(al.MEDIA_CONTROLLER);r&&(n_(this,j,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=nI(this,j))?void 0:t.associateElement)||i.call(t,this)),aG.customElements.whenDefined("media-tooltip").then(()=>nS(this,X,J).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=nI(this,j))?void 0:e.unassociateElement)||t.call(e,this),n_(this,j,null),this.removeEventListener("mouseenter",nI(this,Z)),this.removeEventListener("focus",nI(this,Z)),this.removeEventListener("click",nI(this,Y))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return ra(this,nC.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){rr(this,nC.TOOLTIP_PLACEMENT,e)}get mediaController(){return ra(this,al.MEDIA_CONTROLLER)}set mediaController(e){rr(this,al.MEDIA_CONTROLLER,e)}get disabled(){return rt(this,nC.DISABLED)}set disabled(e){ri(this,nC.DISABLED,e)}get noTooltip(){return rt(this,nC.NO_TOOLTIP)}set noTooltip(e){ri(this,nC.NO_TOOLTIP,e)}handleClick(e){}}j=new WeakMap,Y=new WeakMap,Z=new WeakMap,Q=new WeakMap,z=new WeakMap,X=new WeakSet,J=function(){this.addEventListener("mouseenter",nI(this,Z)),this.addEventListener("focus",nI(this,Z)),this.addEventListener("click",nI(this,Y));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},aG.customElements.get("media-chrome-button")||aG.customElements.define("media-chrome-button",nM);let nD=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,nR=aK.createElement("template");nR.innerHTML=`
  <style>
    :host([${ah.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${ah.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${ah.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
    :host(:not([${ah.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${nD}</slot>
    <slot name="exit">${nD}</slot>
  </slot>
`;let nx=`
  <slot name="tooltip-enter">${aO("start airplay")}</slot>
  <slot name="tooltip-exit">${aO("stop airplay")}</slot>
`,nN=e=>{let t=e.mediaIsAirplaying?aO("stop airplay"):aO("start airplay");e.setAttribute("aria-label",t)};class nO extends nM{static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_IS_AIRPLAYING,ah.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:nR,tooltipContent:nx,...e})}connectedCallback(){super.connectedCallback(),nN(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ah.MEDIA_IS_AIRPLAYING&&nN(this)}get mediaIsAirplaying(){return rt(this,ah.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){ri(this,ah.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return ra(this,ah.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){rr(this,ah.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new aG.CustomEvent(ao.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}aG.customElements.get("media-airplay-button")||aG.customElements.define("media-airplay-button",nO);let nU=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,nP=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,nW=aK.createElement("template");nW.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-checked="true"]) slot[name=tooltip-enable],
    :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${nU}</slot>
    <slot name="off">${nP}</slot>
  </slot>
`;let nH=`
  <slot name="tooltip-enable">${aO("Enable captions")}</slot>
  <slot name="tooltip-disable">${aO("Disable captions")}</slot>
`,nB=e=>{e.setAttribute("aria-checked",rU(e).toString())};class n$ extends nM{static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_SUBTITLES_LIST,ah.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:nW,tooltipContent:nH,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",aO("closed captions")),nB(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ah.MEDIA_SUBTITLES_SHOWING&&nB(this)}get mediaSubtitlesList(){return nV(this,ah.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){nF(this,ah.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nV(this,ah.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){nF(this,ah.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new aG.CustomEvent(ao.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}let nV=(e,t)=>{let i=e.getAttribute(t);return i?rC(i):[]},nF=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=rD(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aG.customElements.get("media-captions-button")||aG.customElements.define("media-captions-button",n$);let nG=aK.createElement("template");nG.innerHTML=`
  <style>
  :host([${ah.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${ah.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${ah.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
    :host(:not([${ah.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let nK=`
  <slot name="tooltip-enter">${aO("Start casting")}</slot>
  <slot name="tooltip-exit">${aO("Stop casting")}</slot>
`,nq=e=>{let t=e.mediaIsCasting?aO("stop casting"):aO("start casting");e.setAttribute("aria-label",t)};class nj extends nM{static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_IS_CASTING,ah.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:nG,tooltipContent:nK,...e})}connectedCallback(){super.connectedCallback(),nq(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ah.MEDIA_IS_CASTING&&nq(this)}get mediaIsCasting(){return rt(this,ah.MEDIA_IS_CASTING)}set mediaIsCasting(e){ri(this,ah.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return ra(this,ah.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){rr(this,ah.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?ao.MEDIA_EXIT_CAST_REQUEST:ao.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new aG.CustomEvent(e,{composed:!0,bubbles:!0}))}}aG.customElements.get("media-cast-button")||aG.customElements.define("media-cast-button",nj);var nY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nZ=(e,t,i)=>(nY(e,t,"read from private field"),i?i.call(e):t.get(e)),nQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nz=(e,t,i,a)=>(nY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nX=(e,t,i)=>(nY(e,t,"access private method"),i);let nJ={OPEN:"open",ANCHOR:"anchor"};class n0 extends aG.HTMLElement{constructor(){super(),nQ(this,ea),nQ(this,en),nQ(this,eo),nQ(this,ed),nQ(this,eh),nQ(this,em),nQ(this,ee,!1),nQ(this,et,null),nQ(this,ei,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[nJ.OPEN,nJ.ANCHOR]}get open(){return rt(this,nJ.OPEN)}set open(e){ri(this,nJ.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":nX(this,ed,eu).call(this,e);break;case"focusout":nX(this,eh,ec).call(this,e);break;case"keydown":nX(this,em,ep).call(this,e)}}connectedCallback(){nX(this,ea,er).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){nX(this,ea,er).call(this),e===nJ.OPEN&&i!==t&&(this.open?nX(this,en,es).call(this):nX(this,eo,el).call(this))}focus(){nz(this,et,a4());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}ee=new WeakMap,et=new WeakMap,ei=new WeakMap,ea=new WeakSet,er=function(){if(!nZ(this,ee)&&(nz(this,ee,!0),!this.shadowRoot)){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);this.shadowRoot.innerHTML=`
        ${this.constructor.getTemplateHTML(e)}
      `,queueMicrotask(()=>{let{style:e}=a8(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},en=new WeakSet,es=function(){var e;null==(e=nZ(this,ei))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},eo=new WeakSet,el=function(){var e;null==(e=nZ(this,ei))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},ed=new WeakSet,eu=function(e){nz(this,ei,e.relatedTarget),a2(this,e.relatedTarget)||(this.open=!this.open)},eh=new WeakSet,ec=function(e){var t;!a2(this,e.relatedTarget)&&(null==(t=nZ(this,et))||t.focus(),nZ(this,ei)&&nZ(this,ei)!==e.relatedTarget&&this.open&&(this.open=!1))},em=new WeakSet,ep=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=nZ(this,et))||n.focus(),this.open=!1))},n0.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},n0.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},aG.customElements.get("media-chrome-dialog")||aG.customElements.define("media-chrome-dialog",n0);var n1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n2=(e,t,i)=>(n1(e,t,"read from private field"),i?i.call(e):t.get(e)),n5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n4=(e,t,i,a)=>(n1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),n3=(e,t,i)=>(n1(e,t,"access private method"),i);let n7=aK.createElement("template");n7.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: var(--media-cursor, pointer);
      pointer-events: auto;
      touch-action: none; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: var(--media-cursor, pointer);

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #track {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      border-radius: var(--media-range-track-border-radius, 1px);
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #progress,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb,
    ::slotted([slot=thumb]) {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      translate: -50%;
      position: absolute;
      left: 0;
      cursor: var(--media-cursor, pointer);
    }

    #thumb {
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      border: var(--media-range-thumb-border, none);
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance">
      <div id="track" part="track">
        <div id="pointer"></div>
        <div id="progress" part="progress"></div>
      </div>
      <slot name="thumb">
        <div id="thumb" part="thumb"></div>
      </slot>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class n8 extends aG.HTMLElement{constructor(){super(),n5(this,eI),n5(this,e_),n5(this,eC),n5(this,eM),n5(this,eR),n5(this,eN),n5(this,eU),n5(this,eW),n5(this,ev,void 0),n5(this,eE,void 0),n5(this,eb,void 0),n5(this,eg,void 0),n5(this,ef,{}),n5(this,eA,[]),n5(this,ey,()=>{if(this.range.matches(":focus-visible")){let{style:e}=a8(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),n5(this,ek,()=>{let{style:e}=a8(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),n5(this,ew,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(n7.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),n4(this,eb,this.shadowRoot.querySelector("#startpoint")),n4(this,eg,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",al.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===al.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=n2(this,ev))?void 0:a.unassociateElement)||r.call(a,this),n4(this,ev,null)),i&&this.isConnected&&(n4(this,ev,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=n2(this,ev))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),n3(this,e_,eS).call(this)):(this.range.setAttribute(e,i),n3(this,eC,eL).call(this)))}connectedCallback(){var e,t,i;let{style:a}=a8(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),n2(this,ef).pointer=a8(this.shadowRoot,"#pointer"),n2(this,ef).progress=a8(this.shadowRoot,"#progress"),n2(this,ef).thumb=a8(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),n2(this,ef).activeSegment=a8(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(al.MEDIA_CONTROLLER);r&&(n4(this,ev,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=n2(this,ev))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",n2(this,ey)),this.shadowRoot.addEventListener("focusout",n2(this,ek)),n3(this,e_,eS).call(this),aZ(this.container,n2(this,ew))}disconnectedCallback(){var e,t;n3(this,eC,eL).call(this),null==(t=null==(e=n2(this,ev))?void 0:e.unassociateElement)||t.call(e,this),n4(this,ev,null),this.shadowRoot.removeEventListener("focusin",n2(this,ey)),this.shadowRoot.removeEventListener("focusout",n2(this,ek)),aQ(this.container,n2(this,ew))}updatePointerBar(e){var t;null==(t=n2(this,ef).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=n2(this,ef).progress)||e.style.setProperty("width",`${i}%`),null==(t=n2(this,ef).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];n4(this,eA,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=aK.createElementNS("http://www.w3.org/2000/svg","rect"),h=a8(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);h.style.setProperty("x",o),h.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return function(e,t,i,a){let r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;return 0===s?0:Math.max(0,Math.min(1,((e-i.x)*r+(t-i.y)*n)/s))}(e.clientX,e.clientY,n2(this,eb).getBoundingClientRect(),n2(this,eg).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":n3(this,eW,eH).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":n3(this,eR,ex).call(this,e);break;case"pointerdown":n3(this,eM,eD).call(this,e);break;case"pointerup":n3(this,eN,eO).call(this);break;case"pointerleave":n3(this,eU,eP).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ev=new WeakMap,eE=new WeakMap,eb=new WeakMap,eg=new WeakMap,ef=new WeakMap,eA=new WeakMap,ey=new WeakMap,ek=new WeakMap,ew=new WeakMap,eI=new WeakSet,eT=function(e){let t=n2(this,ef).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=n2(this,eA).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},e_=new WeakSet,eS=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},eC=new WeakSet,eL=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=aG.window)||e.removeEventListener("pointerup",this),null==(t=aG.window)||t.removeEventListener("pointermove",this)},eM=new WeakSet,eD=function(e){var t;n4(this,eE,e.composedPath().includes(this.range)),null==(t=aG.window)||t.addEventListener("pointerup",this)},eR=new WeakSet,ex=function(e){var t;"mouse"!==e.pointerType&&n3(this,eM,eD).call(this,e),this.addEventListener("pointerleave",this),null==(t=aG.window)||t.addEventListener("pointermove",this)},eN=new WeakSet,eO=function(){var e;null==(e=aG.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},eU=new WeakSet,eP=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=aG.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=n2(this,ef).activeSegment)||t.style.removeProperty("transform")},eW=new WeakSet,eH=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),n3(this,eI,eT).call(this,e),this.dragging&&("mouse"!==e.pointerType||!n2(this,eE))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},aG.customElements.get("media-chrome-range")||aG.customElements.define("media-chrome-range",n8);var n9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n6=(e,t,i)=>(n9(e,t,"read from private field"),i?i.call(e):t.get(e)),se=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},st=(e,t,i,a)=>(n9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let si=aK.createElement("template");si.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    ::slotted([role="menu"]) {
      position: absolute;
    }
  </style>

  <slot></slot>
`;class sa extends aG.HTMLElement{constructor(){super(),se(this,eB,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(si.content.cloneNode(!0)))}static get observedAttributes(){return[al.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===al.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=n6(this,eB))?void 0:a.unassociateElement)||r.call(a,this),st(this,eB,null)),i&&this.isConnected&&(st(this,eB,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=n6(this,eB))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(al.MEDIA_CONTROLLER);a&&(st(this,eB,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=n6(this,eB))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=n6(this,eB))?void 0:e.unassociateElement)||t.call(e,this),st(this,eB,null)}}eB=new WeakMap,aG.customElements.get("media-control-bar")||aG.customElements.define("media-control-bar",sa);var sr=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sn=(e,t,i)=>(sr(e,t,"read from private field"),i?i.call(e):t.get(e)),ss=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},so=(e,t,i,a)=>(sr(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sl=aK.createElement("template");sl.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class sd extends aG.HTMLElement{constructor(){super(),ss(this,e$,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(sl.content.cloneNode(!0)))}static get observedAttributes(){return[al.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===al.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sn(this,e$))?void 0:a.unassociateElement)||r.call(a,this),so(this,e$,null)),i&&this.isConnected&&(so(this,e$,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sn(this,e$))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=a8(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(al.MEDIA_CONTROLLER);r&&(so(this,e$,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sn(this,e$))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sn(this,e$))?void 0:e.unassociateElement)||t.call(e,this),so(this,e$,null)}}e$=new WeakMap,aG.customElements.get("media-text-display")||aG.customElements.define("media-text-display",sd);var su=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sh=(e,t,i)=>(su(e,t,"read from private field"),i?i.call(e):t.get(e)),sc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sm=(e,t,i,a)=>(su(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sp extends sd{constructor(){super(),sc(this,eV,void 0),sm(this,eV,this.shadowRoot.querySelector("slot")),sh(this,eV).textContent=aM(0)}static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===ah.MEDIA_DURATION&&(sh(this,eV).textContent=aM(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return a6(this,ah.MEDIA_DURATION)}set mediaDuration(e){re(this,ah.MEDIA_DURATION,e)}}eV=new WeakMap,aG.customElements.get("media-duration-display")||aG.customElements.define("media-duration-display",sp);let sv={2:aO("Network Error"),3:aO("Decode Error"),4:aO("Source Not Supported"),5:aO("Encryption Error")},sE={2:aO("A network error caused the media download to fail."),3:aO("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:aO("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:aO("The media is encrypted and there are no keys to decrypt it.")},sb=e=>{var t,i;return 1===e.code?null:{title:null!=(t=sv[e.code])?t:`Error ${e.code}`,message:null!=(i=sE[e.code])?i:e.message}};var sg=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sf=(e,t,i)=>(sg(e,t,"read from private field"),i?i.call(e):t.get(e)),sA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sy=(e,t,i,a)=>(sg(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);function sk(e){var t;let{title:i,message:a}=null!=(t=sb(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let sw=[ah.MEDIA_ERROR_CODE,ah.MEDIA_ERROR_MESSAGE];class sI extends n0{constructor(){super(...arguments),sA(this,eF,null)}static get observedAttributes(){return[...super.observedAttributes,...sw]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!sw.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==sb(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){return sf(this,eF)}set mediaError(e){sy(this,eF,e)}get mediaErrorCode(){return a6(this,"mediaerrorcode")}set mediaErrorCode(e){re(this,"mediaerrorcode",e)}get mediaErrorMessage(){return ra(this,"mediaerrormessage")}set mediaErrorMessage(e){rr(this,"mediaerrormessage",e)}}eF=new WeakMap,sI.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${sk({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},sI.formatErrorMessage=sk,aG.customElements.get("media-error-dialog")||aG.customElements.define("media-error-dialog",sI);let sT=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,s_=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,sS=aK.createElement("template");sS.innerHTML=`
  <style>
    :host([${ah.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${ah.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${ah.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
    :host(:not([${ah.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${sT}</slot>
    <slot name="exit">${s_}</slot>
  </slot>
`;let sC=`
  <slot name="tooltip-enter">${aO("Enter fullscreen mode")}</slot>
  <slot name="tooltip-exit">${aO("Exit fullscreen mode")}</slot>
`,sL=e=>{let t=e.mediaIsFullscreen?aO("exit fullscreen mode"):aO("enter fullscreen mode");e.setAttribute("aria-label",t)};class sM extends nM{static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_IS_FULLSCREEN,ah.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:sS,tooltipContent:sC,...e})}connectedCallback(){super.connectedCallback(),sL(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ah.MEDIA_IS_FULLSCREEN&&sL(this)}get mediaFullscreenUnavailable(){return ra(this,ah.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){rr(this,ah.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return rt(this,ah.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){ri(this,ah.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?ao.MEDIA_EXIT_FULLSCREEN_REQUEST:ao.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new aG.CustomEvent(e,{composed:!0,bubbles:!0}))}}aG.customElements.get("media-fullscreen-button")||aG.customElements.define("media-fullscreen-button",sM);let{MEDIA_TIME_IS_LIVE:sD,MEDIA_PAUSED:sR}=ah,{MEDIA_SEEK_TO_LIVE_REQUEST:sx,MEDIA_PLAY_REQUEST:sN}=ao,sO=aK.createElement("template");sO.innerHTML=`
  <style>
  :host { --media-tooltip-display: none; }
  
  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${sD}]:not([${sR}])) slot[name=indicator] > *,
  :host([${sD}]:not([${sR}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${sD}]:not([${sR}])) {
    cursor: var(--media-cursor, not-allowed);
  }

  slot[name=text]{
    text-transform: uppercase;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">${aO("live")}</slot>
`;let sU=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?aO("seek to live"):aO("playing live");e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class sP extends nM{static get observedAttributes(){return[...super.observedAttributes,sR,sD]}constructor(e={}){super({slotTemplate:sO,...e})}connectedCallback(){sU(this),super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),sU(this)}get mediaPaused(){return rt(this,ah.MEDIA_PAUSED)}set mediaPaused(e){ri(this,ah.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return rt(this,ah.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){ri(this,ah.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new aG.CustomEvent(sx,{composed:!0,bubbles:!0})),this.hasAttribute(sR)&&this.dispatchEvent(new aG.CustomEvent(sN,{composed:!0,bubbles:!0})))}}aG.customElements.get("media-live-button")||aG.customElements.define("media-live-button",sP);var sW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sH=(e,t,i)=>(sW(e,t,"read from private field"),i?i.call(e):t.get(e)),sB=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s$=(e,t,i,a)=>(sW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sV={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},sF=aK.createElement("template"),sG=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;sF.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${ah.MEDIA_LOADING}]:not([${ah.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${ah.MEDIA_LOADING}]:not([${ah.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${ah.MEDIA_LOADING}]:not([${ah.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${sG}</slot>
<div id="status" role="status" aria-live="polite">${aO("media loading")}</div>
`;class sK extends aG.HTMLElement{constructor(){if(super(),sB(this,eG,void 0),sB(this,eK,500),!this.shadowRoot){let e=this.attachShadow({mode:"open"}),t=sF.content.cloneNode(!0);e.appendChild(t)}}static get observedAttributes(){return[al.MEDIA_CONTROLLER,ah.MEDIA_PAUSED,ah.MEDIA_LOADING,sV.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===sV.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===al.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sH(this,eG))?void 0:a.unassociateElement)||r.call(a,this),s$(this,eG,null)),i&&this.isConnected&&(s$(this,eG,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sH(this,eG))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(al.MEDIA_CONTROLLER);a&&(s$(this,eG,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=sH(this,eG))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sH(this,eG))?void 0:e.unassociateElement)||t.call(e,this),s$(this,eG,null)}get loadingDelay(){return sH(this,eK)}set loadingDelay(e){s$(this,eK,e);let{style:t}=a8(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return rt(this,ah.MEDIA_PAUSED)}set mediaPaused(e){ri(this,ah.MEDIA_PAUSED,e)}get mediaLoading(){return rt(this,ah.MEDIA_LOADING)}set mediaLoading(e){ri(this,ah.MEDIA_LOADING,e)}get mediaController(){return ra(this,al.MEDIA_CONTROLLER)}set mediaController(e){rr(this,al.MEDIA_CONTROLLER,e)}get noAutohide(){return rt(this,sV.NO_AUTOHIDE)}set noAutohide(e){ri(this,sV.NO_AUTOHIDE,e)}}eG=new WeakMap,eK=new WeakMap,aG.customElements.get("media-loading-indicator")||aG.customElements.define("media-loading-indicator",sK);let{MEDIA_VOLUME_LEVEL:sq}=ah,sj=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,sY=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,sZ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,sQ=aK.createElement("template");sQ.innerHTML=`
  <style>
  
  :host(:not([${sq}])) slot[name=icon] slot:not([name=high]), 
  :host([${sq}=high]) slot[name=icon] slot:not([name=high]) {
    display: none !important;
  }

  :host([${sq}=off]) slot[name=icon] slot:not([name=off]) {
    display: none !important;
  }

  :host([${sq}=low]) slot[name=icon] slot:not([name=low]) {
    display: none !important;
  }

  :host([${sq}=medium]) slot[name=icon] slot:not([name=medium]) {
    display: none !important;
  }

  :host(:not([${sq}=off])) slot[name=tooltip-unmute],
  :host([${sq}=off]) slot[name=tooltip-mute] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="off">${sj}</slot>
    <slot name="low">${sY}</slot>
    <slot name="medium">${sY}</slot>
    <slot name="high">${sZ}</slot>
  </slot>
`;let sz=`
  <slot name="tooltip-mute">${aO("Mute")}</slot>
  <slot name="tooltip-unmute">${aO("Unmute")}</slot>
`,sX=e=>{let t="off"===e.mediaVolumeLevel?aO("unmute"):aO("mute");e.setAttribute("aria-label",t)};class sJ extends nM{static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:sQ,tooltipContent:sz,...e})}connectedCallback(){sX(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===ah.MEDIA_VOLUME_LEVEL&&sX(this),super.attributeChangedCallback(e,t,i)}get mediaVolumeLevel(){return ra(this,ah.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){rr(this,ah.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?ao.MEDIA_UNMUTE_REQUEST:ao.MEDIA_MUTE_REQUEST;this.dispatchEvent(new aG.CustomEvent(e,{composed:!0,bubbles:!0}))}}aG.customElements.get("media-mute-button")||aG.customElements.define("media-mute-button",sJ);let s0=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,s1=aK.createElement("template");s1.innerHTML=`
  <style>
  :host([${ah.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${ah.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${ah.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
  :host(:not([${ah.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${s0}</slot>
    <slot name="exit">${s0}</slot>
  </slot>
`;let s2=`
  <slot name="tooltip-enter">${aO("Enter picture in picture mode")}</slot>
  <slot name="tooltip-exit">${aO("Exit picture in picture mode")}</slot>
`,s5=e=>{let t=e.mediaIsPip?aO("exit picture in picture mode"):aO("enter picture in picture mode");e.setAttribute("aria-label",t)};class s4 extends nM{static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_IS_PIP,ah.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:s1,tooltipContent:s2,...e})}connectedCallback(){s5(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===ah.MEDIA_IS_PIP&&s5(this),super.attributeChangedCallback(e,t,i)}get mediaPipUnavailable(){return ra(this,ah.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){rr(this,ah.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return rt(this,ah.MEDIA_IS_PIP)}set mediaIsPip(e){ri(this,ah.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?ao.MEDIA_EXIT_PIP_REQUEST:ao.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new aG.CustomEvent(e,{composed:!0,bubbles:!0}))}}aG.customElements.get("media-pip-button")||aG.customElements.define("media-pip-button",s4);var s3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s7=(e,t,i)=>(s3(e,t,"read from private field"),i?i.call(e):t.get(e)),s8=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let s9={RATES:"rates"},s6=[1,1.2,1.5,1.7,2],oe=aK.createElement("template");oe.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class ot extends nM{constructor(e={}){super({slotTemplate:oe,tooltipContent:aO("Playback rate"),...e}),s8(this,eq,new rT(this,s9.RATES,{defaultValue:s6})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_PLAYBACK_RATE,s9.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===s9.RATES&&(s7(this,eq).value=i),e===ah.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",aO("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return s7(this,eq)}set rates(e){e?Array.isArray(e)&&(s7(this,eq).value=e.join(" ")):s7(this,eq).value=""}get mediaPlaybackRate(){return a6(this,ah.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){re(this,ah.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new aG.CustomEvent(ao.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}eq=new WeakMap,aG.customElements.get("media-playback-rate-button")||aG.customElements.define("media-playback-rate-button",ot);let oi=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,oa=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,or=aK.createElement("template");or.innerHTML=`
  <style>
    :host([${ah.MEDIA_PAUSED}]) slot[name=pause],
    :host(:not([${ah.MEDIA_PAUSED}])) slot[name=play] {
      display: none !important;
    }

    :host([${ah.MEDIA_PAUSED}]) slot[name=tooltip-pause],
    :host(:not([${ah.MEDIA_PAUSED}])) slot[name=tooltip-play] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="play">${oi}</slot>
    <slot name="pause">${oa}</slot>
  </slot>
`;let on=`
  <slot name="tooltip-play">${aO("Play")}</slot>
  <slot name="tooltip-pause">${aO("Pause")}</slot>
`,os=e=>{let t=e.mediaPaused?aO("play"):aO("pause");e.setAttribute("aria-label",t)};class oo extends nM{static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_PAUSED,ah.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:or,tooltipContent:on,...e})}connectedCallback(){os(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===ah.MEDIA_PAUSED&&os(this),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return rt(this,ah.MEDIA_PAUSED)}set mediaPaused(e){ri(this,ah.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?ao.MEDIA_PLAY_REQUEST:ao.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aG.CustomEvent(e,{composed:!0,bubbles:!0}))}}aG.customElements.get("media-play-button")||aG.customElements.define("media-play-button",oo);let ol={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},od=aK.createElement("template");od.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;let ou=e=>{e.style.removeProperty("background-image")},oh=(e,t)=>{e.style["background-image"]=`url('${t}')`};class oc extends aG.HTMLElement{static get observedAttributes(){return[ol.PLACEHOLDER_SRC,ol.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(od.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===ol.SRC&&(null==i?this.image.removeAttribute(ol.SRC):this.image.setAttribute(ol.SRC,i)),e===ol.PLACEHOLDER_SRC&&(null==i?ou(this.image):oh(this.image,i))}get placeholderSrc(){return ra(this,ol.PLACEHOLDER_SRC)}set placeholderSrc(e){rr(this,ol.SRC,e)}get src(){return ra(this,ol.SRC)}set src(e){rr(this,ol.SRC,e)}}aG.customElements.get("media-poster-image")||aG.customElements.define("media-poster-image",oc);var om=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},op=(e,t,i)=>(om(e,t,"read from private field"),i?i.call(e):t.get(e)),ov=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oE=(e,t,i,a)=>(om(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ob extends sd{constructor(){super(),ov(this,ej,void 0),oE(this,ej,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ah.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i&&(op(this,ej).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return ra(this,ah.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){rr(this,ah.MEDIA_PREVIEW_CHAPTER,e)}}ej=new WeakMap,aG.customElements.get("media-preview-chapter-display")||aG.customElements.define("media-preview-chapter-display",ob);var og=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},of=(e,t,i)=>(og(e,t,"read from private field"),i?i.call(e):t.get(e)),oA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oy=(e,t,i,a)=>(og(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ok=aK.createElement("template");ok.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class ow extends aG.HTMLElement{constructor(){super(),oA(this,eY,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ok.content.cloneNode(!0)))}static get observedAttributes(){return[al.MEDIA_CONTROLLER,ah.MEDIA_PREVIEW_IMAGE,ah.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(al.MEDIA_CONTROLLER);a&&(oy(this,eY,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=of(this,eY))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=of(this,eY))?void 0:e.unassociateElement)||t.call(e,this),oy(this,eY,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[ah.MEDIA_PREVIEW_IMAGE,ah.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===al.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=of(this,eY))?void 0:a.unassociateElement)||r.call(a,this),oy(this,eY,null)),i&&this.isConnected&&(oy(this,eY,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=of(this,eY))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return ra(this,ah.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){rr(this,ah.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(ah.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e)return void this.removeAttribute(ah.MEDIA_PREVIEW_COORDS);this.setAttribute(ah.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),h=Math.min(parseInt(o)/r,parseInt(l)/n),c=Math.max(parseInt(d)/r,parseInt(u)/n),m=h<1,p=m?h:c>1?c:1,{style:v}=a8(this.shadowRoot,":host"),E=a8(this.shadowRoot,"img").style,b=this.shadowRoot.querySelector("img"),g=m?"min":"max";v.setProperty(`${g}-width`,"initial","important"),v.setProperty(`${g}-height`,"initial","important"),v.width=`${r*p}px`,v.height=`${n*p}px`;let f=()=>{E.width=`${this.imgWidth*p}px`,E.height=`${this.imgHeight*p}px`,E.display="block"};b.src!==s&&(b.onload=()=>{this.imgWidth=b.naturalWidth,this.imgHeight=b.naturalHeight,f()},b.src=s,f()),f(),E.transform=`translate(-${i*p}px, -${a*p}px)`}}eY=new WeakMap,aG.customElements.get("media-preview-thumbnail")||aG.customElements.define("media-preview-thumbnail",ow);var oI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oT=(e,t,i)=>(oI(e,t,"read from private field"),i?i.call(e):t.get(e)),o_=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oS=(e,t,i,a)=>(oI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oC extends sd{constructor(){super(),o_(this,eZ,void 0),oS(this,eZ,this.shadowRoot.querySelector("slot")),oT(this,eZ).textContent=aM(0)}static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ah.MEDIA_PREVIEW_TIME&&null!=i&&(oT(this,eZ).textContent=aM(parseFloat(i)))}get mediaPreviewTime(){return a6(this,ah.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){re(this,ah.MEDIA_PREVIEW_TIME,e)}}eZ=new WeakMap,aG.customElements.get("media-preview-time-display")||aG.customElements.define("media-preview-time-display",oC);let oL={SEEK_OFFSET:"seekoffset"},oM=aK.createElement("template");oM.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`;class oD extends nM{static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_CURRENT_TIME,oL.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:oM,tooltipContent:aO("Seek backward"),...e})}connectedCallback(){this.seekOffset=a6(this,oL.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===oL.SEEK_OFFSET&&(this.seekOffset=a6(this,oL.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return a6(this,oL.SEEK_OFFSET,30)}set seekOffset(e){re(this,oL.SEEK_OFFSET,e),this.setAttribute("aria-label",aO("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),aJ(a1(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return a6(this,ah.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){re(this,ah.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new aG.CustomEvent(ao.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aG.customElements.get("media-seek-backward-button")||aG.customElements.define("media-seek-backward-button",oD);let oR={SEEK_OFFSET:"seekoffset"},ox=aK.createElement("template");ox.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`;class oN extends nM{static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_CURRENT_TIME,oR.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:ox,tooltipContent:aO("Seek forward"),...e})}connectedCallback(){this.seekOffset=a6(this,oR.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===oR.SEEK_OFFSET&&(this.seekOffset=a6(this,oR.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return a6(this,oR.SEEK_OFFSET,30)}set seekOffset(e){re(this,oR.SEEK_OFFSET,e),this.setAttribute("aria-label",aO("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),aJ(a1(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return a6(this,ah.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){re(this,ah.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new aG.CustomEvent(ao.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aG.customElements.get("media-seek-forward-button")||aG.customElements.define("media-seek-forward-button",oN);var oO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oU=(e,t,i)=>(oO(e,t,"read from private field"),i?i.call(e):t.get(e)),oP=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oW=(e,t,i,a)=>(oO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let oH={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},oB=[...Object.values(oH),ah.MEDIA_CURRENT_TIME,ah.MEDIA_DURATION,ah.MEDIA_SEEKABLE],o$=["Enter"," "],oV="&nbsp;/&nbsp;",oF=(e,{timesSep:t=oV}={})=>{var i,a;let r=e.hasAttribute(oH.REMAINING),n=e.hasAttribute(oH.SHOW_DURATION),s=null!=(i=e.mediaCurrentTime)?i:0,[,o]=null!=(a=e.mediaSeekable)?a:[],l=0;Number.isFinite(e.mediaDuration)?l=e.mediaDuration:Number.isFinite(o)&&(l=o);let d=r?aM(0-(l-s)):aM(s);return n?`${d}${t}${aM(l)}`:d},oG=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return void e.setAttribute("aria-valuetext","video not loaded, unknown time.");let n=e.hasAttribute(oH.REMAINING),s=e.hasAttribute(oH.SHOW_DURATION),o=n?aL(0-(r-i)):aL(i);if(!s)return void e.setAttribute("aria-valuetext",o);let l=aL(r),d=`${o} of ${l}`;e.setAttribute("aria-valuetext",d)};class oK extends sd{constructor(){super(),oP(this,eQ,void 0),oW(this,eQ,this.shadowRoot.querySelector("slot")),oU(this,eQ).innerHTML=`${oF(this)}`}static get observedAttributes(){return[...super.observedAttributes,...oB,"disabled"]}connectedCallback(){let{style:e}=a8(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",aO("playback time"));let t=e=>{let{key:i}=e;if(!o$.includes(i))return void this.removeEventListener("keyup",t);this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!o$.includes(r))return void this.removeEventListener("keyup",t);this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){oB.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return rt(this,oH.REMAINING)}set remaining(e){ri(this,oH.REMAINING,e)}get showDuration(){return rt(this,oH.SHOW_DURATION)}set showDuration(e){ri(this,oH.SHOW_DURATION,e)}get noToggle(){return rt(this,oH.NO_TOGGLE)}set noToggle(e){ri(this,oH.NO_TOGGLE,e)}get mediaDuration(){return a6(this,ah.MEDIA_DURATION)}set mediaDuration(e){re(this,ah.MEDIA_DURATION,e)}get mediaCurrentTime(){return a6(this,ah.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){re(this,ah.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(ah.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(ah.MEDIA_SEEKABLE);this.setAttribute(ah.MEDIA_SEEKABLE,e.join(":"))}update(){let e=oF(this);oG(this),e!==oU(this,eQ).innerHTML&&(oU(this,eQ).innerHTML=e)}}eQ=new WeakMap,aG.customElements.get("media-time-display")||aG.customElements.define("media-time-display",oK);var oq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oj=(e,t,i)=>(oq(e,t,"read from private field"),i?i.call(e):t.get(e)),oY=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oZ=(e,t,i,a)=>(oq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oQ=(e,t,i,a)=>({set _(value){oZ(e,t,value,i)},get _(){return oj(e,t,a)}});class oz{constructor(e,t,i){oY(this,ez,void 0),oY(this,eX,void 0),oY(this,eJ,void 0),oY(this,e0,void 0),oY(this,e1,void 0),oY(this,e2,void 0),oY(this,e5,void 0),oY(this,e4,void 0),oY(this,e3,0),oY(this,e7,(e=performance.now())=>{oZ(this,e3,requestAnimationFrame(oj(this,e7))),oZ(this,e0,performance.now()-oj(this,eJ));let t=1e3/this.fps;if(oj(this,e0)>t){oZ(this,eJ,e-oj(this,e0)%t);let i=1e3/((e-oj(this,eX))/++oQ(this,e1)._),a=(e-oj(this,e2))/1e3/this.duration,r=oj(this,e5)+a*this.playbackRate;r-oj(this,ez).valueAsNumber>0?oZ(this,e4,this.playbackRate/this.duration/i):(oZ(this,e4,.995*oj(this,e4)),r=oj(this,ez).valueAsNumber+oj(this,e4)),this.callback(r)}}),oZ(this,ez,e),this.callback=t,this.fps=i}start(){0===oj(this,e3)&&(oZ(this,eJ,performance.now()),oZ(this,eX,oj(this,eJ)),oZ(this,e1,0),oj(this,e7).call(this))}stop(){0!==oj(this,e3)&&(cancelAnimationFrame(oj(this,e3)),oZ(this,e3,0))}update({start:e,duration:t,playbackRate:i}){let a=e-oj(this,ez).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),oZ(this,e5,e),oZ(this,e2,performance.now()),this.duration=t,this.playbackRate=i}}ez=new WeakMap,eX=new WeakMap,eJ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e5=new WeakMap,e4=new WeakMap,e3=new WeakMap,e7=new WeakMap;var oX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oJ=(e,t,i)=>(oX(e,t,"read from private field"),i?i.call(e):t.get(e)),o0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o1=(e,t,i,a)=>(oX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),o2=(e,t,i)=>(oX(e,t,"access private method"),i);let o5=e=>{let t=e.range,i=aL(+o7(e)),a=aL(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},o4=aK.createElement("template");o4.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #buffered {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${ah.MEDIA_PREVIEW_IMAGE}], [${ah.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${ah.MEDIA_PREVIEW_IMAGE}], [${ah.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${ah.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${ah.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${ah.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${ah.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${ah.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${ah.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${ah.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${ah.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${ah.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${ah.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${ah.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${ah.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let o3=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},o7=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class o8 extends n8{constructor(){super(),o0(this,ts),o0(this,tl),o0(this,th),o0(this,tm),o0(this,tv),o0(this,tb),o0(this,tf),o0(this,ty),o0(this,e8,void 0),o0(this,e9,void 0),o0(this,e6,void 0),o0(this,te,void 0),o0(this,tt,void 0),o0(this,ti,void 0),o0(this,ta,void 0),o0(this,tr,void 0),o0(this,tn,void 0),o0(this,tu,e=>{this.dragging||(aI(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.container.appendChild(o4.content.cloneNode(!0)),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),o1(this,e6,this.shadowRoot.querySelectorAll('[part~="box"]')),o1(this,tt,this.shadowRoot.querySelector('[part~="preview-box"]')),o1(this,ti,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);o1(this,ta,parseInt(e.getPropertyValue("--media-box-padding-left"))),o1(this,tr,parseInt(e.getPropertyValue("--media-box-padding-right"))),o1(this,e9,new oz(this.range,oJ(this,tu),60))}static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_PAUSED,ah.MEDIA_DURATION,ah.MEDIA_SEEKABLE,ah.MEDIA_CURRENT_TIME,ah.MEDIA_PREVIEW_IMAGE,ah.MEDIA_PREVIEW_TIME,ah.MEDIA_PREVIEW_CHAPTER,ah.MEDIA_BUFFERED,ah.MEDIA_PLAYBACK_RATE,ah.MEDIA_LOADING,ah.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",aO("seek")),o2(this,ts,to).call(this),o1(this,e8,this.getRootNode()),null==(e=oJ(this,e8))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),o2(this,ts,to).call(this),null==(e=oJ(this,e8))||e.removeEventListener("transitionstart",this),o1(this,e8,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===ah.MEDIA_CURRENT_TIME||e===ah.MEDIA_PAUSED||e===ah.MEDIA_ENDED||e===ah.MEDIA_LOADING||e===ah.MEDIA_DURATION||e===ah.MEDIA_SEEKABLE?(oJ(this,e9).update({start:o3(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),o2(this,ts,to).call(this),o5(this)):e===ah.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===ah.MEDIA_DURATION||e===ah.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=oJ(this,tn),this.updateBar()))}get mediaChaptersCues(){return oJ(this,tn)}set mediaChaptersCues(e){var t;o1(this,tn,e),this.updateSegments(null==(t=oJ(this,tn))?void 0:t.map(e=>({start:o3(this,e.startTime),end:o3(this,e.endTime)})))}get mediaPaused(){return rt(this,ah.MEDIA_PAUSED)}set mediaPaused(e){ri(this,ah.MEDIA_PAUSED,e)}get mediaLoading(){return rt(this,ah.MEDIA_LOADING)}set mediaLoading(e){ri(this,ah.MEDIA_LOADING,e)}get mediaDuration(){return a6(this,ah.MEDIA_DURATION)}set mediaDuration(e){re(this,ah.MEDIA_DURATION,e)}get mediaCurrentTime(){return a6(this,ah.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){re(this,ah.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return a6(this,ah.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){re(this,ah.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(ah.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(ah.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(ah.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(ah.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(ah.MEDIA_SEEKABLE);this.setAttribute(ah.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return ra(this,ah.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){rr(this,ah.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return a6(this,ah.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){re(this,ah.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return rt(this,ah.MEDIA_ENDED)}set mediaEnded(e){ri(this,ah.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=o3(this,r)}let{style:a}=a8(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=a8(this.shadowRoot,"#current-rail"),t=a8(this.shadowRoot,'[part~="current-box"]'),i=o2(this,th,tc).call(this,oJ(this,ti)),a=o2(this,tm,tp).call(this,i,this.range.valueAsNumber),r=o2(this,tv,tE).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":o2(this,ty,tk).call(this);break;case"pointermove":o2(this,tb,tg).call(this,e);break;case"pointerup":case"pointerleave":o2(this,tf,tA).call(this,null);break;case"transitionstart":a2(e.target,this)&&setTimeout(()=>o2(this,ts,to).call(this),0)}}}e8=new WeakMap,e9=new WeakMap,e6=new WeakMap,te=new WeakMap,tt=new WeakMap,ti=new WeakMap,ta=new WeakMap,tr=new WeakMap,tn=new WeakMap,ts=new WeakSet,to=function(){o2(this,tl,td).call(this)?oJ(this,e9).start():oJ(this,e9).stop()},tl=new WeakSet,td=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&a7(this)},tu=new WeakMap,th=new WeakSet,tc=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?a5(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},tm=new WeakSet,tp=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},tv=new WeakSet,tE=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+oJ(this,ta)){let t=e.range.left-e.bounds.left-oJ(this,ta);return`${n-i/2+t}px`}if(n>r-oJ(this,tr)){let t=e.bounds.right-e.range.right-oJ(this,tr);return`${n+i/2-t-e.range.width}px`}return 0},tb=new WeakSet,tg=function(e){let t=[...oJ(this,e6)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void o2(this,tf,tA).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=a8(this.shadowRoot,"#preview-rail"),r=a8(this.shadowRoot,'[part~="preview-box"]'),n=o2(this,th,tc).call(this,oJ(this,tt)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=o2(this,tm,tp).call(this,n,s),l=o2(this,tv,tE).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(oJ(this,te))-Math.round(s*i))&&s>.01&&s<.99||(o1(this,te,s*i),o2(this,tf,tA).call(this,oJ(this,te)))},tf=new WeakSet,tA=function(e){this.dispatchEvent(new aG.CustomEvent(ao.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},ty=new WeakSet,tk=function(){oJ(this,e9).stop();let e=o7(this);this.dispatchEvent(new aG.CustomEvent(ao.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},aG.customElements.get("media-time-range")||aG.customElements.define("media-time-range",o8);let o9={PLACEMENT:"placement",BOUNDS:"bounds"},o6=aK.createElement("template");o6.innerHTML=`
  <style>
    :host {
      --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
      --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
      --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
      --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
      --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
      position: relative;
      pointer-events: none;
      display: var(--media-tooltip-display, inline-flex);
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      z-index: var(--media-tooltip-z-index, 1);
      background: var(--_tooltip-background);
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      font: var(--media-font,
        var(--media-font-weight, 400)
        var(--media-font-size, 13px) /
        var(--media-text-content-height, var(--media-control-height, 18px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      padding: var(--media-tooltip-padding, .35em .7em);
      border: var(--media-tooltip-border, none);
      border-radius: var(--media-tooltip-border-radius, 5px);
      filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
      white-space: var(--media-tooltip-white-space, nowrap);
    }

    :host([hidden]) {
      display: none;
    }

    img, svg {
      display: inline-block;
    }

    #arrow {
      position: absolute;
      width: 0px;
      height: 0px;
      border-style: solid;
      display: var(--media-tooltip-arrow-display, block);
    }

    :host(:not([placement])),
    :host([placement="top"]) {
      position: absolute;
      bottom: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host(:not([placement])) #arrow,
    :host([placement="top"]) #arrow {
      top: 100%;
      left: 50%;
      border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
      border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="right"]) {
      position: absolute;
      left: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="right"]) #arrow {
      top: 50%;
      right: 100%;
      border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
      border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
      transform: translate(0, -50%);
    }

    :host([placement="bottom"]) {
      position: absolute;
      top: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host([placement="bottom"]) #arrow {
      bottom: 100%;
      left: 50%;
      border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
      border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="left"]) {
      position: absolute;
      right: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="left"]) #arrow {
      top: 50%;
      left: 100%;
      border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
      border-color: transparent transparent transparent var(--_tooltip-arrow-background);
      transform: translate(0, -50%);
    }
    
    :host([placement="none"]) #arrow {
      display: none;
    }

  </style>
  <slot></slot>
  <div id="arrow"></div>
`;class le extends aG.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!a7(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=a5(this,"#"+this.bounds))?e:az(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),h=u?parseFloat(u.replace("px","")):0,c=s-r+d-h,m=s+o-(r+n)+d+h;return c<0?void this.style.setProperty("--media-tooltip-offset-x",`${c}px`):m>0?void this.style.setProperty("--media-tooltip-offset-x",`${m}px`):void this.style.removeProperty("--media-tooltip-offset-x")},this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(o6.content.cloneNode(!0))),this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[o9.PLACEMENT,o9.BOUNDS]}get placement(){return ra(this,o9.PLACEMENT)}set placement(e){rr(this,o9.PLACEMENT,e)}get bounds(){return ra(this,o9.BOUNDS)}set bounds(e){rr(this,o9.BOUNDS,e)}}aG.customElements.get("media-tooltip")||aG.customElements.define("media-tooltip",le);let lt=e=>e.mediaMuted?0:e.mediaVolume,li=e=>`${Math.round(100*e)}%`;class la extends n8{static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_VOLUME,ah.MEDIA_MUTED,ah.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new aG.CustomEvent(ao.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",aO("volume"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===ah.MEDIA_VOLUME||e===ah.MEDIA_MUTED)&&(this.range.valueAsNumber=lt(this),this.range.setAttribute("aria-valuetext",li(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return a6(this,ah.MEDIA_VOLUME,1)}set mediaVolume(e){re(this,ah.MEDIA_VOLUME,e)}get mediaMuted(){return rt(this,ah.MEDIA_MUTED)}set mediaMuted(e){ri(this,ah.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return ra(this,ah.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){rr(this,ah.MEDIA_VOLUME_UNAVAILABLE,e)}}aG.customElements.get("media-volume-range")||aG.customElements.define("media-volume-range",la);var lr=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ln=(e,t,i)=>(lr(e,t,"read from private field"),i?i.call(e):t.get(e)),ls=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lo=(e,t,i,a)=>(lr(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ll={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof lE&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof lE?a.element[a.attributeName]=t:a.value=t}}}};class ld extends aG.DocumentFragment{constructor(e,t,i=ll){var a;super(),ls(this,tw,void 0),ls(this,tI,void 0),this.append(e.content.cloneNode(!0)),lo(this,tw,lu(this)),lo(this,tI,i),null==(a=i.createCallback)||a.call(i,this,ln(this,tw),t),i.processCallback(this,ln(this,tw),t)}update(e){ln(this,tI).processCallback(this,ln(this,tw),e)}}tw=new WeakMap,tI=new WeakMap;let lu=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new lv;for([i,a]of lc(r.value))if(i){let i=new lE(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of lc(n))if(i){let i=new lb(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new lg(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else lu(r,t);return t},lh={},lc=e=>{let t="",i=0,a=lh[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),lh[e]=a};class lm{get value(){return""}set value(e){}toString(){return this.value}}let lp=new WeakMap;class lv{constructor(){ls(this,tT,[])}[Symbol.iterator](){return ln(this,tT).values()}get length(){return ln(this,tT).length}item(e){return ln(this,tT)[e]}append(...e){for(let t of e)t instanceof lE&&lp.set(t,this),ln(this,tT).push(t)}toString(){return ln(this,tT).join("")}}tT=new WeakMap;class lE extends lm{constructor(e,t,i){super(),ls(this,tM),ls(this,t_,""),ls(this,tS,void 0),ls(this,tC,void 0),ls(this,tL,void 0),lo(this,tS,e),lo(this,tC,t),lo(this,tL,i)}get attributeName(){return ln(this,tC)}get attributeNamespace(){return ln(this,tL)}get element(){return ln(this,tS)}get value(){return ln(this,t_)}set value(e){ln(this,t_)!==e&&(lo(this,t_,e),ln(this,tM,tD)&&1!==ln(this,tM,tD).length?ln(this,tS).setAttributeNS(ln(this,tL),ln(this,tC),ln(this,tM,tD).toString()):null==e?ln(this,tS).removeAttributeNS(ln(this,tL),ln(this,tC)):ln(this,tS).setAttributeNS(ln(this,tL),ln(this,tC),e))}get booleanValue(){return ln(this,tS).hasAttributeNS(ln(this,tL),ln(this,tC))}set booleanValue(e){if(ln(this,tM,tD)&&1!==ln(this,tM,tD).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}t_=new WeakMap,tS=new WeakMap,tC=new WeakMap,tL=new WeakMap,tM=new WeakSet,tD=function(){return lp.get(this)};class lb extends lm{constructor(e,t){super(),ls(this,tR,void 0),ls(this,tx,void 0),lo(this,tR,e),lo(this,tx,t?[...t]:[new Text])}get replacementNodes(){return ln(this,tx)}get parentNode(){return ln(this,tR)}get nextSibling(){return ln(this,tx)[ln(this,tx).length-1].nextSibling}get previousSibling(){return ln(this,tx)[0].previousSibling}get value(){return ln(this,tx).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),lo(this,tx,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(ln(this,tx)[0].parentNode,ln(this,tx),t,this.nextSibling))}}tR=new WeakMap,tx=new WeakMap;class lg extends lb{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let lf={string:e=>String(e)};class lA{constructor(e){this.template=e,this.state=void 0}}let ly=new WeakMap,lk=new WeakMap,lw={partial:(e,t)=>{t[e.expression]=new lA(e.template)},if:(e,t)=>{var i;if(lS(e.expression,t))if(ly.get(e)!==e.template){ly.set(e,e.template);let i=new ld(e.template,t,lT);e.replace(i),lk.set(e,i)}else null==(i=lk.get(e))||i.update(t);else e.replace(""),ly.delete(e),lk.delete(e)}},lI=Object.keys(lw),lT={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof lg){if(!n.directive){let e=lI.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=lw[n.directive])||a.call(lw,n,i);continue}let t=lS(e,i);if(t instanceof lA){ly.get(n)!==t.template?(ly.set(n,t.template),n.value=t=new ld(t.template,t.state,lT),lk.set(n,t)):null==(r=lk.get(n))||r.update(t.state);continue}t?(n instanceof lE&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof lE?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,ly.delete(n),lk.delete(n))):n instanceof lE?n.value=void 0:(n.value=void 0,ly.delete(n),lk.delete(n))}}},l_={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=lf[t])?void 0:i.call(lf,e)}};function lS(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return lC(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return lC(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=lM(d,t))}return i}if(1===d.length)return lL(d[0])?lM(d[0].token,t):lC(e);if(2===d.length){let i=l_[null==(o=d[0])?void 0:o.token];return i&&lL(d[1])?i(lM(d[1].token,t)):lC(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=l_[i];if(!a||!lL(d[0])||!lL(d[2]))return lC(e);let r=lM(d[0].token,t);return a(r,"|"===i?d[2].token:lM(d[2].token,t))}}function lC(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function lL({type:e}){return["number","boolean","string","param"].includes(e)}function lM(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):aT(e)?parseFloat(e):t[e]}var lD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lR=(e,t,i)=>(lD(e,t,"read from private field"),i?i.call(e):t.get(e)),lx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lN=(e,t,i,a)=>(lD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lO=(e,t,i)=>(lD(e,t,"access private method"),i);let lU={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},lP=aK.createElement("template");lP.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class lW extends aG.HTMLElement{constructor(){super(),lx(this,tP),lx(this,tH),lx(this,tN,void 0),lx(this,tO,void 0),lx(this,tU,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(lU[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(ac.BREAKPOINTS_COMPUTED,this.render),lO(this,tP,tW).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=lR(this,tN))?e:this.constructor.template}set template(e){lN(this,tU,null),lN(this,tN,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>lU[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=lU[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(aT(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&lO(this,tH,tB).call(this)}connectedCallback(){lO(this,tH,tB).call(this)}createRenderer(){this.template&&this.template!==lR(this,tO)&&(lN(this,tO,this.template),this.renderer=new ld(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(lP.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function lH(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function lB(e){return e.split("-")[0]}tN=new WeakMap,tO=new WeakMap,tU=new WeakMap,tP=new WeakSet,tW=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},tH=new WeakSet,tB=function(){var e;let t=this.getAttribute("template");if(!t||t===lR(this,tU))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){lN(this,tU,t),lN(this,tN,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(lN(this,tU,t),lH(t).then(e=>{let t=aK.createElement("template");t.innerHTML=e,lN(this,tN,t),this.createRenderer()}).catch(console.error))},lW.observedAttributes=["template"],lW.processor=lT,aG.customElements.get("media-theme")||aG.customElements.define("media-theme",lW);class l$ extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class lV extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var lF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lG=(e,t,i)=>(lF(e,t,"read from private field"),i?i.call(e):t.get(e)),lK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lq=(e,t,i,a)=>(lF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lj=(e,t,i)=>(lF(e,t,"access private method"),i);function lY({type:e,text:t,value:i,checked:a}){let r=aK.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=aK.createElement("span");return n.textContent=t,r.append(n),r}function lZ(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let lQ=aK.createElement("template");lQ.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --_menu-bg: rgb(20 20 30 / .8);
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      bottom: var(--_menu-bottom);
      box-sizing: border-box;
    } 

    @-moz-document url-prefix() {
      :host{
        --_menu-bg: rgb(20 20 30);
      }
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      outline: inherit;
      display: inline-flex;
      align-items: center;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: var(--media-cursor, default);
    }

    slot[name="header"] > button[part~="back"],
    slot[name="header"]::slotted(button[part~="back"]) {
      cursor: var(--media-cursor, pointer);
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;let lz={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class lX extends aG.HTMLElement{constructor(){super(),lK(this,tY),lK(this,tz),lK(this,tJ),lK(this,t1),lK(this,t5),lK(this,t8),lK(this,t6),lK(this,it),lK(this,ia),lK(this,is),lK(this,il),lK(this,iu),lK(this,ic),lK(this,ip),lK(this,iE),lK(this,ig),lK(this,iy),lK(this,t$,null),lK(this,tV,null),lK(this,tF,null),lK(this,tG,new Set),lK(this,tK,void 0),lK(this,tq,!1),lK(this,tj,null),lK(this,tQ,()=>{let e=lG(this,tG),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));lq(this,tG,t)}),lK(this,t3,()=>{lj(this,t8,t9).call(this),lj(this,t6,ie).call(this,!1)}),lK(this,t7,()=>{lj(this,t8,t9).call(this)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),lq(this,tK,new MutationObserver(lG(this,tQ))),lG(this,tK).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[lz.DISABLED,lz.HIDDEN,lz.STYLE,lz.ANCHOR,al.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":lj(this,tY,tZ).call(this,e);break;case"invoke":lj(this,tJ,t0).call(this,e);break;case"click":lj(this,it,ii).call(this,e);break;case"toggle":lj(this,is,io).call(this,e);break;case"focusout":lj(this,iu,ih).call(this,e);break;case"keydown":lj(this,ic,im).call(this,e)}}connectedCallback(){var e,t;lq(this,tj,a9(this.shadowRoot,":host")),lj(this,tz,tX).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),lq(this,t$,aX(this)),null==(t=null==(e=lG(this,t$))?void 0:e.associateElement)||t.call(e,this),this.hidden||(aZ(l0(this),lG(this,t3)),aZ(this,lG(this,t7)))}disconnectedCallback(){var e,t;aQ(l0(this),lG(this,t3)),aQ(this,lG(this,t7)),this.disable(),null==(t=null==(e=lG(this,t$))?void 0:e.unassociateElement)||t.call(e,this),lq(this,t$,null)}attributeChangedCallback(e,t,i){var a,r,n,s;e===lz.HIDDEN&&i!==t?(lG(this,tq)||lq(this,tq,!0),this.hidden?lj(this,t5,t4).call(this):lj(this,t1,t2).call(this),this.dispatchEvent(new lV({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===al.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=lG(this,t$))?void 0:a.unassociateElement)||r.call(a,this),lq(this,t$,null)),i&&this.isConnected&&(lq(this,t$,aX(this)),null==(s=null==(n=lG(this,t$))?void 0:n.associateElement)||s.call(n,this))):e===lz.DISABLED&&i!==t?null==i?this.enable():this.disable():e===lz.STYLE&&i!==t&&lj(this,tz,tX).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=a3(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(lJ)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&lj(this,iy,ik).call(this,t)}focus(){if(lq(this,tV,a4()),this.items.length){lj(this,ig,iA).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=lj(this,ip,iv).call(this,e);i&&(lj(this,iy,ik).call(this,i,"checkbox"===i.type),lG(this,tF)&&!this.hidden&&(null==(t=lG(this,tV))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=lj(this,ip,iv).call(this,e))?t:lj(this,iE,ib).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),lj(this,ig,iA).call(this,r[s]),r[s].focus()}}function lJ(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function l0(e){var t;return null!=(t=e.getAttribute("bounds")?a5(e,`#${e.getAttribute("bounds")}`):az(e)||e.parentElement)?t:e}t$=new WeakMap,tV=new WeakMap,tF=new WeakMap,tG=new WeakMap,tK=new WeakMap,tq=new WeakMap,tj=new WeakMap,tY=new WeakSet,tZ=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||lG(this,tQ).call(this)},tQ=new WeakMap,tz=new WeakSet,tX=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},tJ=new WeakSet,t0=function(e){lq(this,tF,e.relatedTarget),a2(this,e.relatedTarget)||(this.hidden=!this.hidden)},t1=new WeakSet,t2=function(){var e;null==(e=lG(this,tF))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),aZ(l0(this),lG(this,t3)),aZ(this,lG(this,t7))},t5=new WeakSet,t4=function(){var e;null==(e=lG(this,tF))||e.setAttribute("aria-expanded","false"),aQ(l0(this),lG(this,t3)),aQ(this,lG(this,t7))},t3=new WeakMap,t7=new WeakMap,t8=new WeakSet,t9=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(lB(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=lB(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),r=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=l0(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=lG(this,tj);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},t6=new WeakSet,ie=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=lG(this,tj);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),lj(this,t8,t9).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),lj(this,t8,t9).call(this);a.removeProperty("--media-menu-transition-in")},it=new WeakSet,ii=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(lG(this,ia,ir))){null==(t=lG(this,tV))||t.focus(),this.hidden=!0;return}let i=lj(this,ip,iv).call(this,e);!i||i.hasAttribute("disabled")||(lj(this,ig,iA).call(this,i),this.handleSelect(e))},ia=new WeakSet,ir=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},is=new WeakSet,io=function(e){if(e.target===this)return;lj(this,il,id).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new l$({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);lj(this,t6,ie).call(this,!0)},il=new WeakSet,id=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},iu=new WeakSet,ih=function(e){var t;a2(this,e.relatedTarget)||(lG(this,tq)&&(null==(t=lG(this,tV))||t.focus()),lG(this,tF)&&lG(this,tF)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},ic=new WeakSet,im=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(lG(this,tq)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=lG(this,tV))||n.focus(),lG(this,tq)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},ip=new WeakSet,iv=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},iE=new WeakSet,ib=function(){return this.items.find(e=>0===e.tabIndex)},ig=new WeakSet,iA=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},iy=new WeakSet,ik=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},lX.template=lQ,aG.customElements.get("media-chrome-menu")||aG.customElements.define("media-chrome-menu",lX);var l1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l2=(e,t,i)=>(l1(e,t,"read from private field"),i?i.call(e):t.get(e)),l5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l4=(e,t,i,a)=>(l1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),l3=(e,t,i)=>(l1(e,t,"access private method"),i);let l7=aK.createElement("template");l7.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: var(--media-cursor, pointer);
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: var(--media-cursor, pointer);
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;let l8={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class l9 extends aG.HTMLElement{constructor(){super(),l5(this,iT),l5(this,iS),l5(this,iL),l5(this,iR),l5(this,iN),l5(this,iU),l5(this,iw,!1),l5(this,iI,void 0),l5(this,iD,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=aK.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[l8.TYPE,l8.DISABLED,l8.CHECKED,l8.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),l6(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":l3(this,iT,i_).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":l3(this,iN,iO).call(this,e);break;case"keyup":l3(this,iR,ix).call(this,e)}}attributeChangedCallback(e,t,i){e===l8.CHECKED&&l6(this)&&!l2(this,iw)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===l8.TYPE&&i!==t?this.role="menuitem"+i:e===l8.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(l8.DISABLED)||this.enable(),this.role="menuitem"+this.type,l4(this,iI,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),l3(this,iU,iP).call(this)}disconnectedCallback(){this.disable(),l3(this,iU,iP).call(this),l4(this,iI,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=a3(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(l8.TYPE))?e:""}set type(e){this.setAttribute(l8.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(l8.VALUE))?e:this.text}set value(e){this.setAttribute(l8.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(l6(this))return"true"===this.getAttribute("aria-checked")}set checked(e){l6(this)&&(l4(this,iw,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!l6(this)&&this.invokeTargetElement&&a2(this,e.target)&&this.invokeTargetElement.dispatchEvent(new l$({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function l6(e){return"radio"===e.type||"checkbox"===e.type}iw=new WeakMap,iI=new WeakMap,iT=new WeakSet,i_=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?l3(this,iS,iC).call(this):l3(this,iL,iM).call(this))},iS=new WeakSet,iC=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",l2(this,iD)),this.submenuElement.addEventListener("addmenuitem",l2(this,iD)),this.submenuElement.addEventListener("removemenuitem",l2(this,iD)),l2(this,iD).call(this)},iL=new WeakSet,iM=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",l2(this,iD)),this.submenuElement.removeEventListener("addmenuitem",l2(this,iD)),this.submenuElement.removeEventListener("removemenuitem",l2(this,iD)),l2(this,iD).call(this)},iD=new WeakMap,iR=new WeakSet,ix=function(e){let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",l3(this,iR,ix));this.handleClick(e)},iN=new WeakSet,iO=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",l3(this,iR,ix));this.addEventListener("keyup",l3(this,iR,ix),{once:!0})},iU=new WeakSet,iP=function(){var e;let t=null==(e=l2(this,iI))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},l9.template=l7,aG.customElements.get("media-chrome-menu-item")||aG.customElements.define("media-chrome-menu-item",l9);let de=aK.createElement("template");de.innerHTML=lX.template.innerHTML+`
  <style>
    :host {
      --_menu-bg: rgb(20 20 30 / .8);
      background: var(--media-settings-menu-background,
          var(--media-menu-background,
            var(--media-control-background,
              var(--media-secondary-color, var(--_menu-bg)))));
      min-width: var(--media-settings-menu-min-width, 170px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    @-moz-document url-prefix() {
      :host{
        --_menu-bg: rgb(20 20 30);
      }
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;class dt extends lX{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:az(this).querySelector("media-settings-menu-button")}}dt.template=de,aG.customElements.get("media-settings-menu")||aG.customElements.define("media-settings-menu",dt);let di=aK.createElement("template");di.innerHTML=l9.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`,(null==(iW=di.content)?void 0:iW.querySelector)&&(di.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);class da extends l9{}da.template=di,aG.customElements.get("media-settings-menu-item")||aG.customElements.define("media-settings-menu-item",da);class dr extends nM{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=a3(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new l$({relatedTarget:this}))}}aG.customElements.get("media-chrome-menu-button")||aG.customElements.define("media-chrome-menu-button",dr);let dn=aK.createElement("template");dn.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;class ds extends dr{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:dn,tooltipContent:aO("Settings")})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aO("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:az(this).querySelector("media-settings-menu")}}aG.customElements.get("media-settings-menu-button")||aG.customElements.define("media-settings-menu-button",ds);var dl=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dd=(e,t,i)=>(dl(e,t,"read from private field"),i?i.call(e):t.get(e)),du=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dh=(e,t,i,a)=>(dl(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dc=(e,t,i)=>(dl(e,t,"access private method"),i);class dm extends lX{constructor(){super(...arguments),du(this,i$),du(this,iF),du(this,iH,[]),du(this,iB,void 0)}static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_AUDIO_TRACK_LIST,ah.MEDIA_AUDIO_TRACK_ENABLED,ah.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===ah.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===ah.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;dh(this,iH,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(aw)),dc(this,i$,iV).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dc(this,iF,iG))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dc(this,iF,iG))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=az(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return dd(this,iH)}set mediaAudioTrackList(e){dh(this,iH,e),dc(this,i$,iV).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=ra(this,ah.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){rr(this,ah.MEDIA_AUDIO_TRACK_ENABLED,e)}}iH=new WeakMap,iB=new WeakMap,i$=new WeakSet,iV=function(){if(dd(this,iB)===JSON.stringify(this.mediaAudioTrackList))return;dh(this,iB,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=lY({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(lZ(this,"checked-indicator")),this.defaultSlot.append(e)}},iF=new WeakSet,iG=function(){if(null==this.value)return;let e=new aG.CustomEvent(ao.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aG.customElements.get("media-audio-track-menu")||aG.customElements.define("media-audio-track-menu",dm);let dp=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,dv=aK.createElement("template");dv.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${dp}</slot>
`;class dE extends dr{static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_AUDIO_TRACK_ENABLED,ah.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:dv,tooltipContent:aO("Audio")})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aO("Audio"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=az(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=ra(this,ah.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){rr(this,ah.MEDIA_AUDIO_TRACK_ENABLED,e)}}aG.customElements.get("media-audio-track-menu-button")||aG.customElements.define("media-audio-track-menu-button",dE);var db=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dg=(e,t,i)=>(db(e,t,"read from private field"),i?i.call(e):t.get(e)),df=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dA=(e,t,i,a)=>(db(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dy=(e,t,i)=>(db(e,t,"access private method"),i);let dk=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,dw=aK.createElement("template");dw.innerHTML=lX.template.innerHTML+`
  <slot name="captions-indicator" hidden>${dk}</slot>`;class dI extends lX{constructor(){super(...arguments),df(this,iq),df(this,iY),df(this,iK,void 0)}static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_SUBTITLES_LIST,ah.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ah.MEDIA_SUBTITLES_LIST&&t!==i?dy(this,iq,ij).call(this):e===ah.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dy(this,iY,iZ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dy(this,iY,iZ))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:az(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return dT(this,ah.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){d_(this,ah.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dT(this,ah.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){d_(this,ah.MEDIA_SUBTITLES_SHOWING,e)}}iK=new WeakMap,iq=new WeakSet,ij=function(){var e;if(dg(this,iK)===JSON.stringify(this.mediaSubtitlesList))return;dA(this,iK,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let t=!this.value,i=lY({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:t});for(let t of(i.prepend(lZ(this,"checked-indicator")),this.defaultSlot.append(i),this.mediaSubtitlesList)){let i=lY({type:"radio",text:this.formatMenuItemText(t.label,t),value:rM(t),checked:this.value==rM(t)});i.prepend(lZ(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(lZ(this,"captions-indicator")),this.defaultSlot.append(i)}},iY=new WeakSet,iZ=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(ah.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new aG.CustomEvent(ao.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new aG.CustomEvent(ao.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},dI.template=dw;let dT=(e,t)=>{let i=e.getAttribute(t);return i?rC(i):[]},d_=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=rD(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aG.customElements.get("media-captions-menu")||aG.customElements.define("media-captions-menu",dI);var dS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dL=(e,t,i,a)=>(dS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let dM=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,dD=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,dR=aK.createElement("template");dR.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${dM}</slot>
    <slot name="off">${dD}</slot>
  </slot>
`;let dx=e=>{e.setAttribute("aria-checked",rU(e).toString())};class dN extends dr{constructor(e={}){super({slotTemplate:dR,tooltipContent:aO("Captions"),...e}),dC(this,iQ,void 0),dL(this,iQ,!1)}static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_SUBTITLES_LIST,ah.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aO("closed captions")),dx(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ah.MEDIA_SUBTITLES_SHOWING&&dx(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=az(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return dO(this,ah.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dU(this,ah.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dO(this,ah.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dU(this,ah.MEDIA_SUBTITLES_SHOWING,e)}}iQ=new WeakMap;let dO=(e,t)=>{let i=e.getAttribute(t);return i?rC(i):[]},dU=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=rD(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aG.customElements.get("media-captions-menu-button")||aG.customElements.define("media-captions-menu-button",dN);var dP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dW=(e,t,i)=>(dP(e,t,"read from private field"),i?i.call(e):t.get(e)),dH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dB=(e,t,i)=>(dP(e,t,"access private method"),i);let d$={RATES:"rates"};class dV extends lX{constructor(){super(),dH(this,iX),dH(this,i0),dH(this,iz,new rT(this,d$.RATES,{defaultValue:s6})),dB(this,iX,iJ).call(this)}static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_PLAYBACK_RATE,d$.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ah.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===d$.RATES&&t!=i&&(dW(this,iz).value=i,dB(this,iX,iJ).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dB(this,i0,i1))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dB(this,i0,i1))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:az(this).querySelector("media-playback-rate-menu-button")}get rates(){return dW(this,iz)}set rates(e){e?Array.isArray(e)&&(dW(this,iz).value=e.join(" ")):dW(this,iz).value="",dB(this,iX,iJ).call(this)}get mediaPlaybackRate(){return a6(this,ah.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){re(this,ah.MEDIA_PLAYBACK_RATE,e)}}iz=new WeakMap,iX=new WeakSet,iJ=function(){for(let e of(this.defaultSlot.textContent="",this.rates)){let t=lY({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate==e});t.prepend(lZ(this,"checked-indicator")),this.defaultSlot.append(t)}},i0=new WeakSet,i1=function(){if(!this.value)return;let e=new aG.CustomEvent(ao.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aG.customElements.get("media-playback-rate-menu")||aG.customElements.define("media-playback-rate-menu",dV);var dF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dG=(e,t,i)=>(dF(e,t,"read from private field"),i?i.call(e):t.get(e)),dK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let dq={RATES:"rates"},dj=[1,1.2,1.5,1.7,2],dY=aK.createElement("template");dY.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
    
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon"></slot>
`;class dZ extends dr{constructor(e={}){super({slotTemplate:dY,tooltipContent:aO("Playback rate"),...e}),dK(this,i2,new rT(this,dq.RATES,{defaultValue:dj})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_PLAYBACK_RATE,dq.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===dq.RATES&&(dG(this,i2).value=i),e===ah.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",aO("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:az(this).querySelector("media-playback-rate-menu")}get rates(){return dG(this,i2)}set rates(e){e?Array.isArray(e)&&(dG(this,i2).value=e.join(" ")):dG(this,i2).value=""}get mediaPlaybackRate(){return a6(this,ah.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){re(this,ah.MEDIA_PLAYBACK_RATE,e)}}i2=new WeakMap,aG.customElements.get("media-playback-rate-menu-button")||aG.customElements.define("media-playback-rate-menu-button",dZ);var dQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dz=(e,t,i)=>(dQ(e,t,"read from private field"),i?i.call(e):t.get(e)),dX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dJ=(e,t,i,a)=>(dQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),d0=(e,t,i)=>(dQ(e,t,"access private method"),i);class d1 extends lX{constructor(){super(...arguments),dX(this,i3),dX(this,i8),dX(this,i5,[]),dX(this,i4,{})}static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_RENDITION_LIST,ah.MEDIA_RENDITION_SELECTED,ah.MEDIA_RENDITION_UNAVAILABLE,ah.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===ah.MEDIA_RENDITION_SELECTED&&t!==i)this.value=null!=i?i:"auto",d0(this,i3,i7).call(this);else if(e===ah.MEDIA_RENDITION_LIST&&t!==i)dJ(this,i5,null==i?void 0:i.split(/\s+/).map(ay)),d0(this,i3,i7).call(this);else e===ah.MEDIA_HEIGHT&&t!==i&&d0(this,i3,i7).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",d0(this,i8,i9))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",d0(this,i8,i9))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:az(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return dz(this,i5)}set mediaRenditionList(e){dJ(this,i5,e),d0(this,i3,i7).call(this)}get mediaRenditionSelected(){return ra(this,ah.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){rr(this,ah.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return a6(this,ah.MEDIA_HEIGHT)}set mediaHeight(e){re(this,ah.MEDIA_HEIGHT,e)}}i5=new WeakMap,i4=new WeakMap,i3=new WeakSet,i7=function(){if(dz(this,i4).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&dz(this,i4).mediaHeight===this.mediaHeight)return;dz(this,i4).mediaRenditionList=JSON.stringify(this.mediaRenditionList),dz(this,i4).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);for(let t of e)t.selected=t.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=lY({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(lZ(this,"checked-indicator")),this.defaultSlot.append(e)}let i=lY({type:"radio",text:t?this.formatMenuItemText(`Auto (${this.mediaHeight}p)`):this.formatMenuItemText("Auto"),value:"auto",checked:t}),a=this.mediaHeight>0?`Auto (${this.mediaHeight}p)`:"Auto";i.dataset.description=a,i.prepend(lZ(this,"checked-indicator")),this.defaultSlot.append(i)},i8=new WeakSet,i9=function(){if(null==this.value)return;let e=new aG.CustomEvent(ao.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aG.customElements.get("media-rendition-menu")||aG.customElements.define("media-rendition-menu",d1);let d2=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,d5=aK.createElement("template");d5.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${d2}</slot>
`;class d4 extends dr{static get observedAttributes(){return[...super.observedAttributes,ah.MEDIA_RENDITION_SELECTED,ah.MEDIA_RENDITION_UNAVAILABLE,ah.MEDIA_HEIGHT]}constructor(){super({slotTemplate:d5,tooltipContent:aO("Quality")})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",aO("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:az(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ra(this,ah.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){rr(this,ah.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return a6(this,ah.MEDIA_HEIGHT)}set mediaHeight(e){re(this,ah.MEDIA_HEIGHT,e)}}aG.customElements.get("media-rendition-menu-button")||aG.customElements.define("media-rendition-menu-button",d4);let d3=aG.document?.createElement?.("template");d3&&(d3.innerHTML=`
    <!-- Sutro -->
    <style>
      :host {
        --_primary-color: var(--media-primary-color, #fff);
        --_secondary-color: var(--media-secondary-color, transparent);
        --_accent-color: var(--media-accent-color, #fff);
      }

      media-controller {
        --base: 18px;

        font-size: calc(0.75 * var(--base));
        font-family: Roboto, Arial, sans-serif;
        --media-font-family: Roboto, helvetica neue, segoe ui, arial, sans-serif;
        -webkit-font-smoothing: antialiased;

        --media-primary-color: #fff;
        --media-secondary-color: transparent;
        --media-menu-background: rgba(28, 28, 28, 0.6);
        --media-text-color: var(--_primary-color);
        --media-control-hover-background: var(--media-secondary-color);

        --media-range-track-height: calc(0.125 * var(--base));
        --media-range-thumb-height: var(--base);
        --media-range-thumb-width: var(--base);
        --media-range-thumb-border-radius: var(--base);

        --media-control-height: calc(2 * var(--base));
      }

      media-controller[breakpointmd] {
        --base: 20px;
      }

      /* The biggest size controller is tied to going fullscreen
          instead of a player width */
      media-controller[mediaisfullscreen] {
        --base: 24px;
      }

      .media-button {
        --media-control-hover-background: var(--_secondary-color);
        --media-tooltip-background: rgb(28 28 28 / .24);
        --media-text-content-height: 1.2;
        --media-tooltip-padding: .7em 1em;
        --media-tooltip-distance: 8px;
        --media-tooltip-container-margin: 18px;
        position: relative;
        padding: 0;
        opacity: 0.9;
        transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
      }

      .media-button svg {
        fill: none;
        stroke: var(--_primary-color);
        stroke-width: 1;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
      }

      svg .svg-shadow {
        stroke: #000;
        stroke-opacity: 0.15;
        stroke-width: 2px;
        fill: none;
      }
    </style>

    <media-controller
      breakpoints="md:480"
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <!-- Controls Gradient -->
      <style>
        .media-gradient-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: calc(8 * var(--base));
          pointer-events: none;
        }

        .media-gradient-bottom::before {
          content: '';
          --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
            hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
            hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
            hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
            hsl(0 0% 0%) 100%;

          position: absolute;
          inset: 0;
          opacity: 0.7;
          background: linear-gradient(to bottom, var(--gradient-steps));
        }
      </style>
      <div class="media-gradient-bottom"></div>

      <!-- Settings Menu -->
      <style>
        media-settings-menu {
          --media-menu-icon-height: 20px;
          --media-menu-item-icon-height: 20px;
          --media-settings-menu-min-width: calc(10 * var(--base));
          --media-menu-transform-in: translateY(0) scale(1);
          --media-menu-transform-out: translateY(20px) rotate(3deg) scale(1);
          padding-block: calc(0.15 * var(--base));
          margin-right: 10px;
          margin-bottom: 17px;
          border-radius: 8px;
          z-index: 2;
          user-select: none;
        }

        media-settings-menu-item,
        [role='menu']::part(menu-item) {
          --media-icon-color: var(--_primary-color);
          margin-inline: calc(0.45 * var(--base));
          height: calc(1.6 * var(--base));
          font-size: calc(0.7 * var(--base));
          font-weight: 400;
          padding: 0;
          padding-left: calc(0.4 * var(--base));
          padding-right: calc(0.1 * var(--base));
          border-radius: 6px;
          text-shadow: none;
        }

        [slot='submenu']::part(back button) {
          font-size: calc(0.7 * var(--base));
        }

        media-settings-menu-item:hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item),
        [slot='submenu']::part(back indicator) {
          --media-icon-color: var(--_primary-color);
        }

        media-settings-menu-item:hover [slot='submenu']::part(menu-item):hover {
          --media-icon-color: #000;
          color: #000;
          background-color: #fff;
        }

        media-settings-menu-item[submenusize='0'] {
          display: none;
        }

        /* Also hide if only \`Auto\` is added. */
        .quality-settings[submenusize='1'] {
          display: none;
        }
      </style>
      <media-settings-menu hidden anchor="auto">
        <media-settings-menu-item>
          Playback Speed
          <media-playback-rate-menu slot="submenu" hidden>
            <div slot="title">Playback Speed</div>
          </media-playback-rate-menu>
        </media-settings-menu-item>
        <media-settings-menu-item class="quality-settings">
          Quality
          <media-rendition-menu slot="submenu" hidden>
            <div slot="title">Quality</div>
          </media-rendition-menu>
        </media-settings-menu-item>
        <media-settings-menu-item>
          Subtitles/CC
          <media-captions-menu slot="submenu" hidden>
            <div slot="title">Subtitles/CC</div>
          </media-captions-menu>
        </media-settings-menu-item>
      </media-settings-menu>

      <!-- Control Bar -->
      <style>
        media-control-bar {
          position: absolute;
          height: calc(2 * var(--base));
          line-height: calc(2 * var(--base));
          bottom: var(--base);
          left: var(--base);
          right: var(--base);
        }
      </style>
      <media-control-bar>
        <!-- Play/Pause -->
        <style>
          @keyframes bounce-scale-play {
            0% {
              transform: scale(0.75, 0.75);
            }
            50% {
              transform: scale(115%, 115%);
            }
            100% {
              transform: scale(1, 1);
            }
          }

          .media-button {
            border-radius: 25%;
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(0);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s, box-shadow 0.3s;
          }

          .media-button:hover {
            /* background-color: rgba(0, 0, 0, 0.05); */
            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
            /* hue-rotate(120deg) */
            backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            -webkit-backdrop-filter: blur(10px) invert(15%) brightness(80%) opacity(1);
            transition: backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s;
          }

          media-play-button #icon-play {
            opacity: 0;
            transform-box: view-box;
            transform-origin: center center;
            transform: scale(0.5, 0.5);
            transition: all 0.5s;
          }

          media-play-button[mediapaused] #icon-play {
            opacity: 1;
            transform: scale(1, 1);
            animation: 0.35s bounce-scale-play ease-in-out;
          }

          @keyframes bounce-pause-left {
            0% {
              font-size: 10px;
            }
            50% {
              font-size: 3px;
            }
            100% {
              font-size: 4px;
            }
          }

          @keyframes bounce-pause-right {
            0% {
              font-size: 10px;
              transform: translateX(-8px);
            }
            50% {
              font-size: 3px;
              transform: translateX(1px);
            }
            100% {
              font-size: 4px;
              transform: translateX(0);
            }
          }

          media-play-button #pause-left,
          media-play-button #pause-right {
            /* Using font-size to animate height because using scale was resulting in unexpected positioning */
            font-size: 4px;
            opacity: 1;
            transform: translateX(0);
            transform-box: view-box;
          }

          media-play-button:not([mediapaused]) #pause-left {
            animation: 0.3s bounce-pause-left ease-out;
          }

          media-play-button:not([mediapaused]) #pause-right {
            animation: 0.3s bounce-pause-right ease-out;
          }

          media-play-button[mediapaused] #pause-left,
          media-play-button[mediapaused] #pause-right {
            opacity: 0;
            font-size: 10px;
          }

          media-play-button[mediapaused] #pause-right {
            transform-origin: right center;
            transform: translateX(-8px);
          }
        </style>
        <media-play-button mediapaused class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <!-- <use class="svg-shadow" xlink:href="#icon-play"></use> -->
            <g>
              <path
                id="icon-play"
                d="M20.7131 14.6976C21.7208 15.2735 21.7208 16.7265 20.7131 17.3024L12.7442 21.856C11.7442 22.4274 10.5 21.7054 10.5 20.5536L10.5 11.4464C10.5 10.2946 11.7442 9.57257 12.7442 10.144L20.7131 14.6976Z"
              />
            </g>
            <!-- <use class="svg-shadow" xlink:href="#icon-pause"></use> -->
            <g id="icon-pause">
              <rect id="pause-left" x="10.5" width="1em" y="10.5" height="11" rx="0.5" />
              <rect id="pause-right" x="17.5" width="1em" y="10.5" height="11" rx="0.5" />
            </g>
          </svg>
        </media-play-button>

        <!-- Volume/Mute -->
        <style>
          media-mute-button {
            position: relative;
          }

          media-mute-button .muted-path {
            transition: clip-path 0.2s ease-out;
          }

          media-mute-button #muted-path-2 {
            transition-delay: 0.2s;
          }

          media-mute-button .muted-path {
            clip-path: inset(0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-1 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button:not([mediavolumelevel='off']) #muted-path-2 {
            clip-path: inset(0 0 100% 0);
          }

          media-mute-button .muted-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='off'] .muted-path {
            opacity: 1;
          }

          media-mute-button .vol-path {
            opacity: 1;
            transition: opacity 0.4s;
          }

          media-mute-button[mediavolumelevel='off'] .vol-path {
            opacity: 0;
          }

          media-mute-button[mediavolumelevel='low'] #vol-high-path,
          media-mute-button[mediavolumelevel='medium'] #vol-high-path {
            opacity: 0;
          }

          media-volume-range {
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-thumb-opacity: 0;
          }

          @keyframes volume-in {
            0% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
            50% {
              visibility: visible;
              opacity: 1;
              transform: rotate(-2deg);
            }
            100% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }

          @keyframes volume-out {
            0% {
              visibility: visible;
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
            50% {
              opacity: 1;
              transform: rotate(0deg);
            }
            100% {
              visibility: hidden;
              opacity: 0;
              transform: translateY(50%) rotate(1deg);
            }
          }

          .media-volume-range-wrapper {
            opacity: 0;
            visibility: hidden;

            position: absolute;
            top: -100%;
            left: calc(2 * var(--base));

            width: calc(10 * var(--base));
            height: calc(2.5 * var(--base));
            transform-origin: center left;
          }

          media-volume-range {
            /*
              Hide range and animation until mediavolume attribute is set.
              \`visibility\` didn't work, hovering over media-volume-range-wrapper
              caused it to show. Should require mute-button:hover.
            */
            opacity: 0;
            transition: opacity 0s 1s;

            width: calc(10 * var(--base));
            height: var(--base);
            padding: 0;
            border-radius: calc(0.25 * var(--base));
            overflow: hidden;
            background: rgba(0, 0, 0, 0.2);

            --media-range-bar-color: var(--media-accent-color);

            --media-range-padding-left: 0;
            --media-range-padding-right: 0;

            --media-range-track-width: calc(10 * var(--base));
            --media-range-track-height: var(--base);
            --media-range-track-border-radius: calc(0.25 * var(--base));
            --media-range-track-backdrop-filter: blur(10px) brightness(80%);

            /* This makes zero volume still show some of the bar.
               I can't make the bar have curved corners otherwise though. */
            --media-range-thumb-width: var(--base);
            --media-range-thumb-border-radius: calc(0.25 * var(--base));

            /* The Sutro design has a gradient like this, but not sure I like it */
            /* --media-range-thumb-box-shadow: 10px 0px 20px rgba(255, 255, 255, 0.5); */
          }

          media-volume-range[mediavolume] {
            opacity: 1;
          }

          [keyboardcontrol] media-volume-range:focus {
            /* TODO: This appears to be creating a think outline */
            outline: 1px solid rgba(27, 127, 204, 0.9);
          }

          media-mute-button:hover + .media-volume-range-wrapper,
          media-mute-button:focus + .media-volume-range-wrapper,
          media-mute-button:focus-within + .media-volume-range-wrapper,
          .media-volume-range-wrapper:hover,
          .media-volume-range-wrapper:focus,
          .media-volume-range-wrapper:focus-within {
            animation: 0.3s volume-in forwards ease-out;
          }

          .media-volume-range-wrapper:not(:hover, :focus-within) {
            animation: 0.3s volume-out ease-out;
          }

          /* When keyboard navigating the volume range and wrapper need to always be visible
            otherwise focus state can't land on it. This is ok when keyboard navigating because
            the hovering issues aren't a concern, unless you happen to be keyboard AND mouse navigating.
          */
          [keyboardcontrol] .media-volume-range-wrapper,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within,
          [keyboardcontrol] .media-volume-range-wrapper:focus-within media-volume-range {
            visibility: visible;
          }
        </style>
        <media-mute-button class="media-button" notooltip>
          <use class="svg-shadow" xlink:href="#vol-paths"></use>
          <svg slot="icon" viewBox="0 0 32 32">
            <g id="vol-paths">
              <path
                id="speaker-path"
                d="M16.5 20.486v-8.972c0-1.537-2.037-2.08-2.802-.745l-1.026 1.79a2.5 2.5 0 0 1-.8.85l-1.194.78A1.5 1.5 0 0 0 10 15.446v1.11c0 .506.255.978.678 1.255l1.194.782a2.5 2.5 0 0 1 .8.849l1.026 1.79c.765 1.334 2.802.792 2.802-.745Z"
              />
              <path
                id="vol-low-path"
                class="vol-path"
                d="M18.5 18C19.6046 18 20.5 17.1046 20.5 16C20.5 14.8954 19.6046 14 18.5 14"
              />
              <path
                id="vol-high-path"
                class="vol-path"
                d="M18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11"
              />
              <path id="muted-path-1" class="muted-path" d="M23 18L19 14" />
              <path id="muted-path-2" class="muted-path" d="M23 14L19 18" />
            </g>
          </svg>
        </media-mute-button>
        <div class="media-volume-range-wrapper">
          <media-volume-range></media-volume-range>
        </div>

        <!-- Time Display -->
        <style>
          media-time-display {
            position: relative;
            padding: calc(0.5 * var(--base));
            font-size: calc(0.7 * var(--base));
            border-radius: calc(0.5 * var(--base));
          }

          media-controller[breakpointmd] media-time-display:not([showduration]) {
            display: none;
          }

          media-controller:not([breakpointmd]) media-time-display[showduration] {
            display: none;
          }
        </style>
        <media-time-display></media-time-display>
        <media-time-display showduration></media-time-display>

        <!-- Time Range / Progress Bar -->
        <style>
          media-time-range {
            height: calc(2 * var(--base));
            border-radius: calc(0.25 * var(--base));

            --media-range-track-backdrop-filter: invert(10%) blur(5px) brightness(110%);
            --media-range-track-background: rgba(255, 255, 255, 0.2);
            --media-range-track-pointer-background: rgba(255, 255, 255, 0.5);
            --media-range-track-border-radius: calc(0.25 * var(--base));

            --media-time-range-buffered-color: rgba(255, 255, 255, 0.4);
            --media-range-bar-color: var(--media-accent-color);

            --media-range-thumb-background: var(--media-accent-color);
            --media-range-thumb-transition: opacity 0.1s linear;
            --media-range-thumb-opacity: 0;

            --media-preview-thumbnail-border: calc(0.125 * var(--base)) solid #fff;
            --media-preview-thumbnail-border-radius: calc(0.5 * var(--base));
            --media-preview-thumbnail-min-width: calc(8 * var(--base));
            --media-preview-thumbnail-max-width: calc(10 * var(--base));
            --media-preview-thumbnail-min-height: calc(5 * var(--base));
            --media-preview-thumbnail-max-height: calc(7 * var(--base));
            --media-preview-box-margin: 0 0 -10px;
          }
          media-time-range:hover {
            --media-range-thumb-opacity: 1;
            --media-range-track-height: calc(0.25 * var(--base));
          }

          media-preview-thumbnail {
            margin-bottom: 5px;
          }

          media-preview-chapter-display {
            font-size: calc(0.6 * var(--base));
            padding-block: 0;
          }

          media-preview-time-display {
            font-size: calc(0.65 * var(--base));
            padding-top: 0;
          }
        </style>
        <media-time-range>
          <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
          <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
          <media-preview-time-display slot="preview"></media-preview-time-display>
        </media-time-range>

        <!-- Subtitles/CC Button -->
        <style>
          media-captions-button {
            position: relative;
          }

          media-controller:not([breakpointmd]) media-captions-button {
            display: none;
          }

          media-captions-button svg :is(path, rect) {
            stroke: none;
            fill: var(--_primary-color);
          }

          /* Disble the captions button when no subtitles are available */
          media-captions-button:not([mediasubtitleslist]) svg {
            opacity: 0.3;
          }

          media-captions-button #cc-underline {
            opacity: 1;
          }

          media-captions-button[mediasubtitleslist][aria-checked='true'] #cc-underline {
            opacity: 1;
          }

          media-captions-button #cc-underline {
            transition: clip-path 0.15s ease-out;
          }

          media-captions-button #cc-underline {
            clip-path: inset(0 100% 0 0);
          }

          media-captions-button[aria-checked='true'] #cc-underline {
            clip-path: inset(0 0 0 0);
          }
        </style>
        <media-captions-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cc-icon"></use>
            <g id="cc-icon">
              <path
                class="cc-c"
                d="M15.6634 14.3574H14.5636C14.4985 14.0523 14.3847 13.7842 14.2221 13.5532C14.0624 13.3222 13.8673 13.1283 13.6367 12.9715C13.409 12.8118 13.1562 12.692 12.8783 12.6122C12.6004 12.5323 12.3107 12.4924 12.0091 12.4924C11.4592 12.4924 10.961 12.6264 10.5146 12.8945C10.0711 13.1625 9.71776 13.5575 9.45463 14.0794C9.19445 14.6012 9.06436 15.2414 9.06436 16C9.06436 16.7586 9.19445 17.3988 9.45463 17.9206C9.71776 18.4425 10.0711 18.8375 10.5146 19.1055C10.961 19.3736 11.4592 19.5076 12.0091 19.5076C12.3107 19.5076 12.6004 19.4677 12.8783 19.3878C13.1562 19.308 13.409 19.1896 13.6367 19.0328C13.8673 18.8731 14.0624 18.6778 14.2221 18.4468C14.3847 18.2129 14.4985 17.9449 14.5636 17.6426H15.6634C15.5806 18.0903 15.4298 18.491 15.2111 18.8446C14.9923 19.1982 14.7203 19.499 14.3951 19.7471C14.0698 19.9924 13.7047 20.1792 13.2996 20.3075C12.8976 20.4358 12.4674 20.5 12.0091 20.5C11.2345 20.5 10.5456 20.3175 9.94246 19.9525C9.33932 19.5875 8.8648 19.0684 8.51888 18.3954C8.17296 17.7224 8 16.924 8 16C8 15.076 8.17296 14.2776 8.51888 13.6046C8.8648 12.9316 9.33932 12.4125 9.94246 12.0475C10.5456 11.6825 11.2345 11.5 12.0091 11.5C12.4674 11.5 12.8976 11.5642 13.2996 11.6925C13.7047 11.8208 14.0698 12.009 14.3951 12.2571C14.7203 12.5024 14.9923 12.8018 15.2111 13.1554C15.4298 13.5062 15.5806 13.9068 15.6634 14.3574Z"
              />
              <path
                class="cc-c"
                d="M24 14.3574H22.9002C22.8351 14.0523 22.7213 13.7842 22.5587 13.5532C22.399 13.3222 22.2039 13.1283 21.9733 12.9715C21.7456 12.8118 21.4928 12.692 21.2149 12.6122C20.937 12.5323 20.6473 12.4924 20.3457 12.4924C19.7958 12.4924 19.2976 12.6264 18.8511 12.8945C18.4077 13.1625 18.0543 13.5575 17.7912 14.0794C17.531 14.6012 17.4009 15.2414 17.4009 16C17.4009 16.7586 17.531 17.3988 17.7912 17.9206C18.0543 18.4425 18.4077 18.8375 18.8511 19.1055C19.2976 19.3736 19.7958 19.5076 20.3457 19.5076C20.6473 19.5076 20.937 19.4677 21.2149 19.3878C21.4928 19.308 21.7456 19.1896 21.9733 19.0328C22.2039 18.8731 22.399 18.6778 22.5587 18.4468C22.7213 18.2129 22.8351 17.9449 22.9002 17.6426H24C23.9172 18.0903 23.7664 18.491 23.5476 18.8446C23.3289 19.1982 23.0569 19.499 22.7316 19.7471C22.4064 19.9924 22.0413 20.1792 21.6362 20.3075C21.2341 20.4358 20.804 20.5 20.3457 20.5C19.5711 20.5 18.8822 20.3175 18.279 19.9525C17.6759 19.5875 17.2014 19.0684 16.8555 18.3954C16.5095 17.7224 16.3366 16.924 16.3366 16C16.3366 15.076 16.5095 14.2776 16.8555 13.6046C17.2014 12.9316 17.6759 12.4125 18.279 12.0475C18.8822 11.6825 19.5711 11.5 20.3457 11.5C20.804 11.5 21.2341 11.5642 21.6362 11.6925C22.0413 11.8208 22.4064 12.009 22.7316 12.2571C23.0569 12.5024 23.3289 12.8018 23.5476 13.1554C23.7664 13.5062 23.9172 13.9068 24 14.3574Z"
              />
              <rect id="cc-underline" x="8" y="23" width="16" height="1" rx="0.5" />
            </g>
          </svg>
        </media-captions-button>

        <!-- Settings Menu Button -->
        <style>
          media-settings-menu-button svg {
            transition: transform 0.1s cubic-bezier(0.4, 0, 1, 1);
            transform: rotateZ(0deg);
          }
          media-settings-menu-button[aria-expanded='true'] svg {
            transform: rotateZ(30deg);
          }
        </style>
        <media-settings-menu-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#settings-icon"></use>
            <g id="settings-icon">
              <path
                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
              />
              <path
                d="M21.0176 13.0362L20.9715 12.9531C20.8445 12.7239 20.7797 12.4629 20.784 12.1982L20.8049 10.8997C20.8092 10.6343 20.675 10.3874 20.4545 10.2549L18.5385 9.10362C18.3186 8.97143 18.0472 8.9738 17.8293 9.10981L16.7658 9.77382C16.5485 9.90953 16.2999 9.98121 16.0465 9.98121H15.9543C15.7004 9.98121 15.4513 9.90922 15.2336 9.77295L14.1652 9.10413C13.9467 8.96728 13.674 8.96518 13.4535 9.09864L11.5436 10.2545C11.3242 10.3873 11.1908 10.6336 11.1951 10.8981L11.216 12.1982C11.2203 12.4629 11.1555 12.7239 11.0285 12.9531L10.9831 13.0351C10.856 13.2645 10.6715 13.4535 10.4493 13.5819L9.36075 14.2109C9.13763 14.3398 8.99942 14.5851 9 14.8511L9.00501 17.152C9.00559 17.4163 9.1432 17.6597 9.36476 17.7883L10.4481 18.4167C10.671 18.546 10.8559 18.7364 10.9826 18.9673L11.0313 19.0559C11.1565 19.284 11.2203 19.5431 11.2161 19.8059L11.1951 21.1003C11.1908 21.3657 11.325 21.6126 11.5456 21.7452L13.4615 22.8964C13.6814 23.0286 13.9528 23.0262 14.1707 22.8902L15.2342 22.2262C15.4515 22.0905 15.7001 22.0188 15.9535 22.0188H16.0457C16.2996 22.0188 16.5487 22.0908 16.7664 22.227L17.8348 22.8959C18.0534 23.0327 18.326 23.0348 18.5465 22.9014L20.4564 21.7455C20.6758 21.6127 20.8092 21.3664 20.8049 21.1019L20.784 19.8018C20.7797 19.5371 20.8445 19.2761 20.9715 19.0469L21.0169 18.9649C21.144 18.7355 21.3285 18.5465 21.5507 18.4181L22.6393 17.7891C22.8624 17.6602 23.0006 17.4149 23 17.1489L22.995 14.848C22.9944 14.5837 22.8568 14.3403 22.6352 14.2117L21.5493 13.5818C21.328 13.4534 21.1442 13.2649 21.0176 13.0362Z"
              />
            </g>
          </svg>
        </media-settings-menu-button>

        <!-- PIP/Mini Player Button -->
        <style>
          media-controller:not([breakpointmd]) media-pip-button {
            display: none;
          }
        </style>
        <media-pip-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#pip-icon"></use>
            <g id="pip-icon">
              <path
                d="M12 22H9.77778C9.34822 22 9 21.6162 9 21.1429V10.8571C9 10.3838 9.34822 10 9.77778 10L22.2222 10C22.6518 10 23 10.3838 23 10.8571V12.5714"
              />
              <path
                d="M15 21.5714V16.4286C15 16.1919 15.199 16 15.4444 16H22.5556C22.801 16 23 16.1919 23 16.4286V17V21.5714C23 21.8081 22.801 22 22.5556 22H20.3333H17.6667H15.4444C15.199 22 15 21.8081 15 21.5714Z"
              />
            </g>
          </svg>
        </media-pip-button>

        <!-- Airplay Button -->
        <media-airplay-button class="media-button">
          <svg viewBox="0 0 32 32" aria-hidden="true" slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.5 20h1.722c.43 0 .778-.32.778-.714v-8.572c0-.394-.348-.714-.778-.714H9.778c-.43 0-.778.32-.778.714v1.429"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.5 20H9.778c-.43 0-.778-.32-.778-.714v-8.572c0-.394.348-.714.778-.714h12.444c.43 0 .778.32.778.714v1.429"/>
            <path stroke-linejoin="round" d="m16 19 3.464 3.75h-6.928L16 19Z"/>
          </svg>
        </media-airplay-button>

        <!-- Cast Button -->
        <media-cast-button class="media-button">
          <svg slot="icon" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#cast-icon"></use>
            <g id="cast-icon">
              <path
                d="M18.5 21.833h4.167c.46 0 .833-.373.833-.833V11a.833.833 0 0 0-.833-.833H9.333A.833.833 0 0 0 8.5 11v1.111m0 8.056c.92 0 1.667.746 1.667 1.666M8.5 17.667a4.167 4.167 0 0 1 4.167 4.166"
              />
              <path d="M8.5 15.167a6.667 6.667 0 0 1 6.667 6.666" />
            </g>
          </svg>
        </media-cast-button>

        <!-- Fullscreen Button -->
        <style>
          /* Having trouble getting @property to work in the shadow dom
             to clean this up. Like https://codepen.io/luwes/pen/oNRyZyx */

          media-fullscreen-button .fs-arrow {
            translate: 0% 0%;
          }
          media-fullscreen-button:hover .fs-arrow {
            animation: 0.35s up-left-bounce cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          media-fullscreen-button:hover #fs-enter-top,
          media-fullscreen-button:hover #fs-exit-bottom {
            animation-name: up-right-bounce;
          }

          media-fullscreen-button:hover #fs-enter-bottom,
          media-fullscreen-button:hover #fs-exit-top {
            animation-name: down-left-bounce;
          }

          @keyframes up-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% -4%;
            }
          }
          @keyframes up-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% -4%;
            }
          }
          @keyframes down-left-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: -4% 4%;
            }
          }
          @keyframes down-right-bounce {
            0% {
              translate: 0 0;
            }
            50% {
              translate: 4% 4%;
            }
          }
        </style>
        <media-fullscreen-button class="media-button">
          <svg slot="enter" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-enter-paths"></use>
            <g id="fs-enter-paths">
              <g id="fs-enter-top" class="fs-arrow">
                <path d="M18 10H22V14" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-enter-bottom" class="fs-arrow">
                <path d="M14 22L10 22V18" />
                <path d="M10 22L14 18" />
              </g>
            </g>
          </svg>
          <svg slot="exit" viewBox="0 0 32 32">
            <use class="svg-shadow" xlink:href="#fs-exit-paths"></use>
            <g id="fs-exit-paths">
              <g id="fs-exit-top" class="fs-arrow">
                <path d="M22 14H18V10" />
                <path d="M22 10L18 14" />
              </g>
              <g id="fs-exit-bottom" class="fs-arrow">
                <path d="M10 18L14 18V22" />
                <path d="M14 18L10 22" />
              </g>
            </g>
          </svg>
        </media-fullscreen-button>
      </media-control-bar>
    </media-controller>

  `);class d7 extends lW{static template=d3}aG.customElements&&!aG.customElements.get("media-theme-sutro")&&aG.customElements.define("media-theme-sutro",d7);var d8=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),d9={className:"class",htmlFor:"for"};function d6(e){return e.toLowerCase()}function ue(e){return"boolean"==typeof e?e?"":void 0:"function"==typeof e?void 0:"object"!=typeof e||null===e?e:void 0}function ut(e,t,i){var a,r;e[t]=i,null==i&&t in(null!=(r=null==(a=globalThis.HTMLElement)?void 0:a.prototype)?r:{})&&e.removeAttribute(t)}var ui=function(e){let{react:t,tagName:i,elementClass:a,events:r,displayName:n,toAttributeName:s=d6,toAttributeValue:o=ue}=e,l=Number.parseInt(t.version)>=19,d=t.forwardRef((e,n)=>{var d,u,h,c,m;let p=t.useRef(null),v=t.useRef(new Map),E={},b={},g={},f={};for(let[t,i]of Object.entries(e)){if(d8.has(t)){g[t]=i;continue}let e=s(null!=(h=d9[t])?h:t);if(t in a.prototype&&!(t in(null!=(c=null==(d=globalThis.HTMLElement)?void 0:d.prototype)?c:{}))&&!(null==(u=a.observedAttributes)?void 0:u.some(t=>t===e))){f[t]=i;continue}if(t.startsWith("on")){E[t]=i;continue}let r=o(i);e&&null!=r&&(b[e]=String(r),l||(g[e]=r)),e&&l&&(g[e]=i)}if("undefined"!=typeof window){for(let e in E){let i=E[e],a=e.endsWith("Capture"),n=(null!=(m=null==r?void 0:r[e])?m:e.slice(2).toLowerCase()).slice(0,a?-7:void 0);t.useLayoutEffect(()=>{let e=null==p?void 0:p.current;if(e&&"function"==typeof i)return e.addEventListener(n,i,a),()=>{e.removeEventListener(n,i,a)}},[null==p?void 0:p.current,i])}t.useLayoutEffect(()=>{if(null===p.current)return;let e=new Map;for(let t in f)ut(p.current,t,f[t]),v.current.delete(t),e.set(t,f[t]);for(let[e,t]of v.current)ut(p.current,e,void 0);v.current=e})}if("undefined"==typeof window&&(null==a?void 0:a.getTemplateHTML)&&(null==a?void 0:a.shadowRootOptions)){let{mode:e,delegatesFocus:i}=a.shadowRootOptions;g.children=[t.createElement("template",{shadowrootmode:e,shadowrootdelegatesfocus:i,dangerouslySetInnerHTML:{__html:a.getTemplateHTML(b)}}),g.children]}return t.createElement(i,{...g,ref:t.useCallback(e=>{p.current=e,"function"==typeof n?n(e):null!==n&&(n.current=e)},[n])})});return d.displayName=null!=n?n:a.name,d}({react:as,tagName:"media-theme-sutro",elementClass:d7});let ua="mux.com";function ur(e,t){let i=un(e);if(!i)return e;let a=e.providerMetadata?.mux?.thumbnailTime??t?.thumbnailTime??t?.startTime,r={...e,sources:[{src:`https://stream.${t?.customDomain??ua}/${i}.m3u8`,type:"application/x-mpegURL"}],poster:us(i,{thumbnailTime:a,customDomain:t?.customDomain,token:t?.tokens?.thumbnail})};return a>=0&&(r.thumbnailTime=a),r}function un(e){let t=e.providerMetadata?.mux??e.externalIds;return t?.playbackId}let us=(e,{token:t,thumbnailTime:i,width:a,customDomain:r=ua}={})=>{let n=null==t?i:void 0,{aud:s}=function(e){let t=(e??"").split(".")[1];return t?JSON.parse(decodeURIComponent(atob(t.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}(t);if(!t||"t"===s)return`https://image.${r}/${e}/thumbnail.webp${function(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}({token:t,time:n,width:a})}`},uo=JSON.parse(i(49509).env.NEXT_PUBLIC_DEV_VIDEO_OPTS??'{"path":"/api/video","folder":"public/videos","provider":"mux"}'??"{}"),ul=`${uo.folder??"videos"}/`;function ud(e){if("string"==typeof e)return e.split(/[#?]/)[0].split(".").pop()?.trim()}let uu=(0,as.forwardRef)((e,t)=>{if("string"==typeof e.playbackId)return n??(n=(0,as.lazy)(()=>Promise.all([i.e(9910),i.e(3538)]).then(i.bind(i,63538)))),(0,an.jsx)(n,{ref:t,...e,controls:!1});let a=ud(e.src);return"m3u8"===a?(s??(s=(0,as.lazy)(()=>Promise.all([i.e(9910),i.e(3683)]).then(i.bind(i,83683)))),(0,an.jsx)(s,{ref:t,...e,controls:!1})):"mpd"===a?(o??(o=(0,as.lazy)(()=>i.e(9393).then(i.bind(i,89393)))),(0,an.jsx)(o,{ref:t,...e,controls:!1})):(0,an.jsx)("video",{ref:t,...e,controls:!1})}),uh=(0,as.forwardRef)((e,t)=>{let i,a,{style:r,children:n,asset:s,controls:o=!0,poster:l,blurDataURL:d,theme:u=ui,...h}=e,c=as.Children.toArray(n).find(e=>"object"==typeof e&&"type"in e&&"poster"===e.props.slot);(0,as.isValidElement)(c)&&(l="",d=void 0,i=c,n=as.Children.toArray(n).filter(e=>e!==c));let m={},p=s?un(s):void 0,v=!0;if(p&&(null==s?void 0:s.status)==="ready"&&(h.src=void 0,h.playbackId=p,l&&((v=l!==us(p,h))||(a="".concat(us(p,{...h,width:480})," 480w,").concat(us(p,{...h,width:640})," 640w,").concat(us(p,{...h,width:960})," 960w,").concat(us(p,{...h,width:1280})," 1280w,").concat(us(p,{...h,width:1600})," 1600w,").concat(us(p,{...h})," 1920w")))),d){let e=!v&&d===(null==s?void 0:s.blurDataURL),t=v&&d!==(null==s?void 0:s.blurDataURL);if(e||t){var E;m.gridArea="1/1",m.width="100%",m.height="100%",m.color="transparent",m.backgroundSize="cover",m.backgroundPosition="center",m.backgroundRepeat="no-repeat",m.backgroundImage="url('data:image/svg+xml;charset=utf-8,".concat((E=d,`<svg xmlns="http://www.w3.org/2000/svg"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(#b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="${E}"/></g></svg>`.replace(/#/g,"%23")),"')")}}if(delete h.thumbnailTime,o&&u){let e=h["data-next-video"];return l&&(i=(0,an.jsx)("img",{slot:"poster",src:v?l:void 0,srcSet:a,style:m,decoding:"async","aria-hidden":"true"}),l=""),(0,an.jsxs)(u,{"data-next-video":e,style:{display:"grid",...r},children:[i,(0,an.jsx)(as.Suspense,{fallback:null,children:(0,an.jsxs)(uu,{suppressHydrationWarning:!0,ref:t,style:{gridArea:"1/1"},slot:"media",poster:l,crossOrigin:"",...h,children:[p&&(0,an.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:"https://image.mux.com/".concat(p,"/storyboard.vtt")}),n]})})]})}return(0,an.jsx)(as.Suspense,{fallback:null,children:(0,an.jsxs)(uu,{suppressHydrationWarning:!0,ref:t,style:{gridArea:"1/1",...r},controls:!1!==o||void 0,poster:l,crossOrigin:"",...h,children:[p&&(0,an.jsx)("track",{default:!0,kind:"metadata",label:"thumbnails",src:"https://image.mux.com/".concat(p,"/storyboard.vtt")}),n]})})});function uc({status:e,hidden:t}){let i="",a="";switch(e){case"error":i="Error",a="An error occurred while uploading your video. Please check the CLI logs for more info.";break;case"sourced":i="Video is not processing",a="Make sure to run next-video sync. The currently loaded video is the source file.";break;default:i="Upload in progress...",a="Your video file is being uploaded. The currently loaded video is the source file."}return(0,an.jsxs)(an.Fragment,{children:[(0,an.jsx)("style",{children:`
        .next-video-alert {
          position: absolute;
          inset: 1em;
          bottom: auto;
          padding: .75rem 1rem;
          border-radius: 1rem;
          color: hsl(0, 0%, 100%);
          background-color: hsl(240 10% 3.9% / .7);
          border: 1px solid hsl(240 3.7% 15.9%);
          transition: visibility 0s, opacity .25s;
          visibility: visible;
          opacity: 1;
        }

        .next-video-alert[hidden] {
          display: block;
          transition: visibility 1s, opacity 1s;
          visibility: hidden;
          opacity: 0;
        }

        .next-video-alert svg {
          position: absolute;
        }

        .next-video-alert h5 {
          line-height: 1;
          font-weight: 500;
          margin-bottom: 0.25rem;
          padding-left: 1.75rem;
          font-size: inherit;
        }

        .next-video-alert div {
          padding-left: 1.75rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
        `}),(0,an.jsxs)("div",{role:"alert",className:`next-video-alert next-video-alert-${e}`,hidden:t,children:["error"===e?(0,an.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,an.jsx)("path",{d:"M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}):(0,an.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,an.jsx)("path",{d:"M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}),(0,an.jsx)("h5",{children:i}),(0,an.jsx)("div",{children:a})]})]})}async function um({config:e,src:t,width:i,height:a}){let r=`${e.path}?url=${encodeURIComponent(`${t}`)}`;return i&&(r+=`&w=${i}`),a&&(r+=`&h=${a}`),`${r}`}function up(e){let t=e.providerMetadata?.["vercel-blob"]??e.externalIds;if(!t)return e;let i={src:t.url};return t.contentType&&(i.type=t.contentType),{...e,sources:[i]}}function uv(e){let t=e.providerMetadata?.backblaze;if(!t)return e;let i=new URL(t.endpoint);i.hostname=`${t.bucket}.${i.hostname}`,i.pathname=t.key;let a={src:`${i}`};return{...e,sources:[a]}}function uE(e){let t=e.providerMetadata?.["amazon-s3"];if(!t)return e;let i=new URL(t.endpoint);i.hostname=`${t.bucket}.${i.hostname}`,i.pathname=t.key;let a={src:`${i}`};return{...e,sources:[a]}}function ub(e){let t=e.providerMetadata?.["cloudflare-r2"];if(!t)return e;let i=new URL(t.bucketUrlPublic);i.pathname=t.key;let a={src:`${i}`};return{...e,sources:[a]}}function ug(e,t){var i;let a=null!=(i=e.provider)?i:uo.provider;for(let[i,r]of Object.entries(ar))if(i===a.toLowerCase().replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()))return r.transform(e,t)}var uf=(0,as.forwardRef)((e,t)=>{let{as:i=uh,loader:a=um,transform:r=ug,className:n,style:s,src:o,width:l,height:d}=e,[u,h]=(0,as.useState)("object"==typeof o?o:void 0),[c,m]=(0,as.useState)(!1);"object"==typeof o&&(u=o,o=void 0);let p=function(e,t,i){return async a=>{if("string"==typeof t.src)try{let r=await e({...t,config:uo}),n=await fetch(r,{signal:a}),s=await n.json();if(n.ok)i(s);else{let e=`[next-video] The request to ${n.url} failed. `;throw e+=`Did you configure the \`${uo.path}\` route to handle video API requests?
`,Error(e)}}catch(e){a.aborted||console.error(e)}}}(a,{src:o,width:l,height:d},e=>h(e)),v=null==u?void 0:u.status,E=ud(o);!function(e,t=5e3){let i=(0,as.useRef)(new AbortController);(0,as.useEffect)(()=>(i.current=new AbortController,e(i.current.signal),()=>{i.current.abort()}),[]),function(e,t){let i=(0,as.useRef)(null);(0,as.useEffect)(()=>{i.current=e}),(0,as.useEffect)(()=>{let e=async()=>{await i.current?.()};if(null!=t){let i=setInterval(e,t);return()=>clearInterval(i)}},[t])}((0,as.useCallback)(()=>e(i.current.signal),[]),t)}(p,"string"!=typeof o||"ready"==v||["m3u8","mpd"].includes(null!=E?E:"")?null:1e3);let b=function(e,t){var i,a,r,n,s,o,l;let{asset:d}=t,{controls:u=!0,as:h,className:c,style:m,src:p,poster:v,blurDataURL:E,loader:b,transform:g,...f}=e,A={src:p,poster:v,controls:u,blurDataURL:E,...f};if("object"==typeof v&&(A.poster=v.src,null!=A.blurDataURL||(A.blurDataURL=v.blurDataURL)),d)if("ready"===d.status){null!=A.blurDataURL||(A.blurDataURL=d.blurDataURL);let e=g(d,A);e&&(A.src=null==(n=e.sources)||null==(r=n[0])?void 0:r.src,null!=A.poster||(A.poster=e.poster),null!=A.thumbnailTime||(A.thumbnailTime=e.thumbnailTime))}else l=d.originalFilePath,A.src=l?.startsWith(ul)?l?.replace(ul,"_next-video/"):l;return A}({...e,transform:r,src:o},{asset:u});return!function(e){var t,i;return"function"==typeof(t=e)&&(()=>{let e=Object.getPrototypeOf(t);return e.prototype&&e.prototype.isReactComponent})()||"function"==typeof e||"object"==typeof(i=e)&&"symbol"==typeof i.$$typeof&&["react.memo","react.forward_ref"].includes(i.$$typeof.description)}(i)&&console.warn("The `as` property is not a valid component:",i),(0,an.jsxs)("div",{className:"".concat(n?"".concat(n," "):"","next-video-container"),style:s,children:[(0,an.jsx)("style",{children:"\n        .next-video-container {\n          display: grid;  /* Fixes a Safari aspect-ratio + height bug. */\n          position: relative;\n          width: 100%;\n          aspect-ratio: 16 / 9;\n        }\n\n        [data-next-video] {\n          display: block;\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        [data-next-video] img {\n          object-fit: var(--media-object-fit, contain);\n          object-position: var(--media-object-position, center);\n        }\n        "}),(0,an.jsx)(i,{ref:t,"data-next-video":null!=v?v:"",style:{width:l,height:d},asset:u,onPlaying:()=>m(!0),onPause:()=>m(!1),...b}),(0,an.jsx)(uc,{hidden:!!(c||!v||"ready"===v),status:v})]})})}}]);