var At=Object.defineProperty;var kt=(l,n,t)=>n in l?At(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t;var A=(l,n,t)=>(kt(l,typeof n!="symbol"?n+"":n,t),t),Q=(l,n,t)=>{if(!n.has(l))throw TypeError("Cannot "+t)};var m=(l,n,t)=>(Q(l,n,"read from private field"),t?t.call(l):n.get(l)),b=(l,n,t)=>{if(n.has(l))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(l):n.set(l,t)},I=(l,n,t,e)=>(Q(l,n,"write to private field"),e?e.call(l,t):n.set(l,t),t);var w=(l,n,t)=>(Q(l,n,"access private method"),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const y of u.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&e(y)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function e(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function _(l){const n=new Date(l),t=n.getUTCHours().toString(),e=n.getUTCMinutes().toString().padStart(2,"0"),o=n.getUTCSeconds().toString().padStart(2,"0");return t==="0"?e.concat(":",o):t.concat(":",e).concat(":",o)}function ut(l,n){for(const t of Object.entries(n))l.setAttribute(t[0],t[1]);return l}var Z=typeof Z=="object"?Z:{};Z.Widget=function(l){var n={};function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return l[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=l,t.c=n,t.d=function(e,o,u){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:u})},t.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o||4&o&&typeof e=="object"&&e&&e.__esModule)return e;var u=Object.create(null);if(t.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),2&o&&typeof e!="string")for(var y in e)t.d(u,y,function(x){return e[x]}.bind(null,y));return u},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(l,n,t){var e,o,u,y=t(1),x=t(2),T=t(3),f=y.api,K=y.bridge,et=[],$=[],St=/^http(?:s?)/;function H(i){var s,a;for(s=0,a=$.length;s<a&&i($[s])!==!1;s++);}function C(i){return i.contentWindow?i.contentWindow:i.contentDocument&&"parentWindow"in i.contentDocument?i.contentDocument.parentWindow:null}function nt(i){var s,a=[];for(s in i)i.hasOwnProperty(s)&&a.push(i[s]);return a}function J(i,s,a){a.callbacks[i]=a.callbacks[i]||[],a.callbacks[i].push(s)}function it(i,s){var a=!0;return s.callbacks[i]=[],H(function(r){if((r.callbacks[i]||[]).length)return a=!1,!1}),a}function R(i,s,a){var r,c,d=C(a);if(!d.postMessage)return!1;r=a.getAttribute("src").split("?")[0],c=JSON.stringify({method:i,value:s}),r.substr(0,2)==="//"&&(r=window.location.protocol+r),r=r.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),d.postMessage(c,r)}function D(i){var s;return H(function(a){if(a.instance===i)return s=a,!1}),s}function st(i){var s;return H(function(a){if(C(a.element)===i)return s=a,!1}),s}function xt(i,s){return function(a){var r,c=!!((r=a)&&r.constructor&&r.call&&r.apply),d=D(this),h=!c&&s?a:null,p=c&&!s?a:null;return p&&J(i,p,d),R(i,h,d.element),this}}function rt(i,s,a){var r,c,d;for(r=0,c=s.length;r<c;r++)i[d=s[r]]=xt(d,a)}function ot(i,s,a){return i+"?url="+s+"&"+function(r){var c,d,h=[];for(c in r)r.hasOwnProperty(c)&&(d=r[c],h.push(c+"="+(c==="start_track"?parseInt(d,10):d?"true":"false")));return h.join("&")}(a)}function X(i,s,a){var r,c,d=i.callbacks[s]||[];for(r=0,c=d.length;r<c;r++)d[r].apply(i.instance,a);(function(h){var p,k=!1;for(p in x)if(x.hasOwnProperty(p)&&x[p]===h){k=!0;break}return k}(s)||s===f.READY)&&(i.callbacks[s]=[])}function at(i){var s,a,r,c,d;try{a=JSON.parse(i.data)}catch{return!1}return s=st(i.source),r=a.method,c=a.value,(!s||lt(i.origin)===lt(s.domain))&&(s?(r===f.READY&&(s.isReady=!0,X(s,"__LATE_BINDING__"),it("__LATE_BINDING__",s)),r!==f.PLAY||s.playEventFired||(s.playEventFired=!0),r!==f.PLAY_PROGRESS||s.playEventFired||(s.playEventFired=!0,X(s,f.PLAY,[c])),d=[],c!==void 0&&d.push(c),void X(s,r,d)):(r===f.READY&&et.push(i.source),!1))}function lt(i){return i.replace(St,"")}window.addEventListener?window.addEventListener("message",at,!1):window.attachEvent("onmessage",at),l.exports=u=function(i,s,a){var r;if(((r=i)===""||r&&r.charCodeAt&&r.substr)&&(i=document.getElementById(i)),!function(p){return!(!p||p.nodeType!==1||p.nodeName.toUpperCase()!=="IFRAME")}(i))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");s&&(a=a||{},i.src=ot("http://wt.soundcloud.test:9200/",s,a));var c,d,h=st(C(i));return h&&h.instance?h.instance:(c=et.indexOf(C(i))>-1,d=new e(i),$.push(new o(d,i,c)),d)},u.Events=f,window.SC=window.SC||{},window.SC.Widget=u,o=function(i,s,a){this.instance=i,this.element=s,this.domain=function(r){var c,d,h,p="";for(r.substr(0,2)==="//"&&(r=window.location.protocol+r),h=r.split("/"),c=0,d=h.length;c<d&&c<3;c++)p+=h[c],c<2&&(p+="/");return p}(s.getAttribute("src")),this.isReady=!!a,this.callbacks={}},(e=function(){}).prototype={constructor:e,load:function(i,s){if(i){s=s||{};var a=this,r=D(this),c=r.element,d=c.src,h=d.substr(0,d.indexOf("?"));r.isReady=!1,r.playEventFired=!1,c.onload=function(){a.bind(f.READY,function(){var p,k=r.callbacks;for(p in k)k.hasOwnProperty(p)&&p!==f.READY&&R(K.ADD_LISTENER,p,r.element);s.callback&&s.callback()})},c.src=ot(h,i,s)}},bind:function(i,s){var a=this,r=D(this);return r&&r.element&&(i===f.READY&&r.isReady?setTimeout(s,1):r.isReady?(J(i,s,r),R(K.ADD_LISTENER,i,r.element)):J("__LATE_BINDING__",function(){a.bind(i,s)},r)),this},unbind:function(i){var s,a=D(this);a&&a.element&&(s=it(i,a),i!==f.READY&&s&&R(K.REMOVE_LISTENER,i,a.element))}},rt(e.prototype,nt(x)),rt(e.prototype,nt(T),!0)},function(l,n){n.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},n.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}},function(l,n){l.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}},function(l,n){l.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}]);var P,g,q,dt,W,pt;const tt=class{constructor(n,{trackId:t}){b(this,q);b(this,P,"");b(this,g,void 0);A(this,"paused",!0);var e;I(this,P,n),I(this,g,w(e=tt,W,pt).call(e,m(this,P),t))}get widget(){return m(this,g)}onMounted(n){m(this,g).bind(SC.Widget.Events.READY,()=>{m(this,g).isPaused(w(this,q,dt)),m(this,g).getDuration(t=>{n({duration:t})})})}onPlaying(n){m(this,g).bind(SC.Widget.Events.PLAY_PROGRESS,n)}onLoading(n){m(this,g).bind(SC.Widget.Events.LOAD_PROGRESS,t=>{console.log("onloading => ",t),n(t)})}onPlay(n){m(this,g).bind(SC.Widget.Events.PLAY,n)}onPause(n){m(this,g).bind(SC.Widget.Events.PAUSE,n)}goTo(n){m(this,g).seekTo(n)}getTimelinePosition(n){m(this,g).bind(SC.Widget.Events.SEEK,n)}play(){m(this,g).play()}pause(){m(this,g).pause()}};let N=tt;P=new WeakMap,g=new WeakMap,q=new WeakSet,dt=function(n){this.paused=n},W=new WeakSet,pt=function(n,t){const e={id:`snd-widget-${Date.now()}`,width:"100%",height:"50%",scrolling:"no",allow:"autoplay",frameBorder:"no",src:`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${t}&amp;`},o=ut(document.createElement("iframe"),e);return document.querySelector(n).appendChild(o),SC.Widget(o.id)},b(N,W);var O;const L=class{constructor(n){b(this,O,void 0);I(this,O,n)}get status(){return m(this,O)}};let v=L;O=new WeakMap,A(v,"LOADING",new L("loading")),A(v,"PLAYING",new L("playing")),A(v,"PAUSED",new L("paused"));const ct={button:`<span class="play">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
        </span>
        <span class="pause">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>
        </svg>
        </span>
        <span class="loading">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
        </svg>
        </span>`,eq:`
    <ol class="equaliser-column">
      <li class="colour-bar"></li>
    </ol>
    <ol class="equaliser-column">
      <li class="colour-bar"></li>
    </ol>
    <ol class="equaliser-column">
      <li class="colour-bar"></li>
    </ol>
    <ol class="equaliser-column">
      <li class="colour-bar"></li>
    </ol>
    <ol class="equaliser-column">
      <li class="colour-bar"></li>
    </ol>
`};var M,ht,G,gt,U,mt,Y,bt,z,ft,B,Et,j,yt,F,wt,V,vt;const S=class extends HTMLElement{constructor({trackId:t}){super();b(this,M);b(this,G);A(this,"style");this.color="#6a6a6a",this.trackId=t,this.SndWidget=new N("#snd",{trackId:this.trackId}),this.shadow=this.attachShadow({mode:"open"}),this.main()}main(){this.SndWidget.onMounted(({duration:t})=>{var e,o,u,y,x,T,f;this.duration=t,this.containerElement=w(e=S,U,mt).call(e),this.buttonElement=w(o=S,Y,bt).call(o,ct.button),this.timeElement=w(u=S,z,ft).call(u),this.timeElapsedElement=w(y=S,j,yt).call(y,this.duration),this.progressElement=w(x=S,B,Et).call(x,this.duration),this.equalizerElement=w(T=S,F,wt).call(T,ct.eq),this.style=w(f=S,V,vt).call(f,this.color),w(this,M,ht).call(this),w(this,G,gt).call(this)})}onPlayButton(){this.SndWidget.widget.isPaused(t=>t?this.SndWidget.play():this.SndWidget.pause())}onProgressChange({target:t}){this.SndWidget.goTo(t.value),this.updateProgress(t.value)}updateButtonState(t){switch(t){case v.LOADING.status:this.buttonElement.classList.add("loading"),this.buttonElement.classList.remove("playing"),this.equalizerElement.classList.remove("playing");break;case v.PLAYING.status:this.buttonElement.classList.add("playing"),this.buttonElement.classList.remove("loading"),this.equalizerElement.classList.add("playing");break;case v.PAUSED.status:this.buttonElement.classList.remove("playing"),this.buttonElement.classList.remove("loading"),this.equalizerElement.classList.remove("playing");break}}updateTimers(t){this.timeElement.innerText=_(t),this.timeElapsedElement.innerText="-"+_(this.duration-t)}updateProgress(t){this.progressElement.value=t;const e=this.progressElement.min,o=this.progressElement.max,u=this.progressElement.value;this.progressElement.style.backgroundSize=(u-e)*100/(o-e)+"% 100%"}static define(t){try{customElements.define(t,this)}catch{console.log(`Couldn't (re)define ${t} element`)}}};let E=S;M=new WeakSet,ht=function(){this.buttonElement.setAttribute("data-track",this.trackId),this.shadow.appendChild(this.style),this.shadow.appendChild(this.containerElement),this.containerElement.appendChild(this.buttonElement),this.containerElement.appendChild(this.equalizerElement),this.containerElement.appendChild(this.timeElement),this.containerElement.appendChild(this.progressElement),this.containerElement.appendChild(this.timeElapsedElement)},G=new WeakSet,gt=function(){this.buttonElement.addEventListener("click",t=>this.onPlayButton(t)),this.progressElement.addEventListener("input",t=>this.onProgressChange(t)),this.SndWidget.onPlay(()=>{console.log("on play"),this.SndWidget.widget.isPaused(t=>t?this.updateButtonState(v.PAUSED.status):this.updateButtonState(v.PLAYING.status))}),this.SndWidget.onPause(()=>{console.log("on paused"),this.updateButtonState(v.PAUSED.status)}),this.SndWidget.onPlaying(({currentPosition:t})=>{this.updateTimers(t),this.updateProgress(t)}),this.SndWidget.onLoading(()=>{console.log("on loading"),this.updateButtonState(v.LOADING.status)}),this.SndWidget.getTimelinePosition(({currentPosition:t})=>{this.updateTimers(t)})},U=new WeakSet,mt=function(){const t=document.createElement("div");return t.setAttribute("class","snd-player"),t},Y=new WeakSet,bt=function(t){const e=document.createElement("button");return e.setAttribute("class","snd-player-button"),e.innerHTML=t,e},z=new WeakSet,ft=function(){const t=document.createElement("div");return t.setAttribute("class","snd-player-time"),t.innerText=_(0),t},B=new WeakSet,Et=function(t){const e={type:"range",value:0,min:0,max:t,class:"timeline-progress-bar"},o=document.createElement("div");o.setAttribute("class","snd-player-timeline"),o.style.width="100%";const u=ut(document.createElement("input"),e);return o.appendChild(u),u},j=new WeakSet,yt=function(t){const e=document.createElement("div");return e.setAttribute("class","snd-player-time"),e.innerText=_(t),e},F=new WeakSet,wt=function(t){const e=document.createElement("div");return e.setAttribute("class","equaliser-container"),e.innerHTML=t,e},V=new WeakSet,vt=function(t){const e=document.createElement("style");return e.textContent=`
        .snd-player {
            display: flex;
            align-items: center;
            margin: 40px 0;
            padding: 10px;
            border: 1px solid ${t};
            border-radius: 10px;
            background-color: ${S.dark};
        }
        .snd-player-button {
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 33px;
            height: 33px;
            border: none;
            outline: none;
            padding: 0;
            margin: 0;
            cursor: pointer;
            flex-shrink: 0;
        }
        .snd-player-button span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            position: absolute;
        }
        .snd-player-button svg {
            width: 100%;
            height: 100%;
        }
        .snd-player-button:hover svg {
            fill: #535bf2;
        }
        .snd-player-button .loading {
            opacity: 0;
        }
        .snd-player-button.loading .loading {
            opacity: 1;
            animation: 1s loading infinite;
        }
        @keyframes loading {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .snd-player-button.loading .play {
            opacity: 0;
        }
        .snd-player-button .pause {
            opacity: 0;
        }
        .snd-player-button.playing .pause {
            opacity: 1;
        }
        .snd-player-button.playing .play {
            opacity: 0;
        }
        .snd-player-time {
            margin: 0 10px;
            font-size: 12px;
            width: 50px;
        }
        input[type="range"].timeline-progress-bar {
            cursor: pointer;
            display: flex;
            -webkit-appearance: none;
            width: 100%;
            height: 10px;
            margin: 0;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 5px;
            background-image: linear-gradient(#535bf2, #4e54c2);
            background-size: 0% 100%;
            background-repeat: no-repeat;
        }

        input[type="range"].timeline-progress-bar:hover {
            filter: brightness(1.1);
        }
        
        input[type="range"].timeline-progress-bar::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background: #535bf2;
            border: 1px solid #c2c4e7;
            cursor: ew-resize;
            box-shadow: 0 0 2px 0 #555;
            transition: background .3s ease-in-out;
        }
        
        input[type=range].timeline-progress-bar::-webkit-slider-runnable-track {
            -webkit-appearance: none;
            box-shadow: none;
            border: none;
            background: transparent;
        }
        .equaliser-container {
            height: 10px;
            display: flex;
            margin-left: 10px;
            padding: 0 0 0 0;
            position: relative;
        }
        
        .colour-bar {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0px;
            background: white;
        }
        .equaliser-container.playing .colour-bar{
            heigth: 10px;
        }
        .equaliser-column {
            width: 2px;
            float: left;
            margin: 0 1px 0 0;
            padding: 0;
            height: 10px;
            position: relative;
            list-style-type: none;
        }
        
        .equaliser-container.playing .equaliser-column:nth-child(1) .colour-bar {
            animation: color-bar 2s 1s ease-out alternate infinite;
        }
        
        .equaliser-container.playing .equaliser-column:nth-child(2) .colour-bar {
            animation: color-bar 2s 0.5s ease-out alternate infinite;
        }
        
        .equaliser-container.playing .equaliser-column:nth-child(3) .colour-bar {
            animation: color-bar 2s 1.5s ease-out alternate infinite;
        }
        
        .equaliser-container.playing .equaliser-column:nth-child(4) .colour-bar {
            animation: color-bar 2s 0.25s ease-out alternate infinite;
        }
        
        .equaliser-container.playing .equaliser-column:nth-child(5) .colour-bar {
            animation: color-bar 2s 2s ease-out alternate infinite;
        }
        
        .equaliser-column:last-child {
            margin-right: 0;
        }
        
        @keyframes color-bar {
            0% {
                height: 1px;
                background: white;
            }
            10% {
                height: 3px;
                background: white;
            }
            20% {
                height: 5px;
                background: white;
            }
            30% {
                height: 2px;
                background: white;
            }
            40% {
                height: 7px;
                background: white;
            }
            50% {
                height: 9px;
                background: white;
            }
            60% {
                height: 3px;
                background: white;
            }
            70% {
                height: 8px;
                background: white;
            }
            80% {
                height: 5px;
                background: white;
            }
            90% {
                height: 3px;
                background: white;
            }
            100% {
                height: 1px;
                background: white;
            }
        }  
           `,e},b(E,U),b(E,Y),b(E,z),b(E,B),b(E,j),b(E,F),b(E,V),A(E,"purple","#747bff"),A(E,"violet","#922cf9"),A(E,"dark","#1e1c20");window.onload=()=>{E.define("tony-montana");const l=new E({trackId:1408738531});document.querySelector("#app").appendChild(l)};
