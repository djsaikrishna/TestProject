import{b as T,a4 as q,d0 as R,a0 as c,aF as D,d1 as C,cl as m,aH as E,bW as $,bX as U,aS as J,b5 as X,_ as G,o as K,b6 as z,n as A,d as Q,k as M,e as p,a6 as Y,S as Z,ay as ee,ah as te,p as j,d2 as F}from"./index.44cc2916.js";import{O as re,A as se}from"./icon.a6605f97.js";import{A as oe,a as le,V as ne}from"./video_box.b7d1447d.js";import{H as ae,a as ie,b as ue}from"./hls.90287030.js";import{r as ce}from"./index.1fd0ea24.js";import"./index.0d8a97e9.js";import"./Layout.3d86709f.js";import"./index.db28835d.js";import"./FolderTree.191789d6.js";import"./index.2f3d6e03.js";import"./_commonjs-dynamic-modules.30ae7933.js";const pe=te("<span></span>"),Pe=()=>{var _,P,S;const{pathname:w,searchParams:L}=T(),{proxyLink:d}=q(),y=R();let u=c.objs.filter(e=>e.type===re.VIDEO);u.length===0&&(u=[c.obj]);const g=()=>{const e=u.findIndex(o=>o.name===c.obj.name);e<u.length-1&&y(j(F(location.pathname),u[e+1].name)+"?auto_fullscreen="+s.fullscreen)},W=()=>{const e=u.findIndex(o=>o.name===c.obj.name);e>0&&y(j(F(location.pathname),u[e-1].name)+"?auto_fullscreen="+s.fullscreen)};let s,i={id:w(),container:"#video-player",title:c.obj.name,volume:.5,autoplay:D("video_autoplay"),autoSize:!1,autoMini:!0,controls:[{name:"previous-button",index:10,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-prev-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path><path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Previous",click:function(){W()}},{name:"next-button",index:11,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-next-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Next",click:function(){g()}}],loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[oe],whitelist:[],settings:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,o){const n=new ae;n.loadSource(o),n.attachMedia(e),e.src||(e.src=o)}},lang:["en","zh-cn","zh-tw"].includes(C().toLowerCase())?C().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const f=c.related.filter(e=>{for(const o of[".srt",".ass",".vtt"])if(e.name.endsWith(o))return!0;return!1}),b=c.related.find(e=>{for(const o of[".xml"])if(e.name.endsWith(o))return!0;return!1});if(f.length!=0){let a=function(t){switch(e?"ass":"webvtt"){case"ass":s.subtitle.show=!1,s.emit("artplayer-plugin-ass:visible",t);break;case"webvtt":default:s.subtitle.show=t,s.emit("artplayer-plugin-ass:visible",!1);break}},e=!1;const o=f[0];m(o.name).toLowerCase()==="ass"?(e=!0,(_=i.plugins)==null||_.push(ie({subUrl:d(o,!0)}))):i.subtitle={url:d(o,!0),type:m(o.name)};const n=[{id:"setting_subtitle_display",html:"Display",tooltip:"Show",switch:!0,onSwitch:function(t){var r;t.tooltip=t.switch?"Hide":"Show",a(!t.switch);const l=(r=i.settings)==null?void 0:r.find(h=>h.id==="setting_subtitle");return l&&(l.tooltip=t.tooltip),!t.switch}}];f.forEach((t,l)=>{n.push({default:l===0,html:(()=>{const r=pe.cloneNode(!0);return r.style.setProperty("max-width","200px"),r.style.setProperty("overflow","hidden"),r.style.setProperty("text-overflow","ellipsis"),r.style.setProperty("word-break","break-all"),r.style.setProperty("white-space","normal"),r.style.setProperty("display","-webkit-box"),r.style.setProperty("-webkit-line-clamp","2"),r.style.setProperty("-webkit-box-orient","vertical"),r.style.setProperty("font-size","12px"),E(r,()=>t.name),$(()=>U(r,"title",t.name)),r})(),name:t.name,url:d(t,!0)})}),(P=i.settings)==null||P.push({id:"setting_subtitle",html:"Subtitle",tooltip:"Show",icon:se({size:24}),selector:n,onSelect:function(t){var r,h;m(t.name).toLowerCase()==="ass"?(e=!0,this.emit("artplayer-plugin-ass:switch",t.url),a(!0)):(e=!1,this.subtitle.switch(t.url,{name:t.name}),this.once("subtitleLoad",a.bind(this,!0)));const l=n.find(O=>O.id==="setting_subtitle_display");return l&&!l.switch&&((h=(r=l.$html)==null?void 0:r.click)==null||h.call(r)),l==null?void 0:l.tooltip}})}b&&((S=i.plugins)==null||S.push(ue({danmuku:d(b,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})));const[de,v]=J(()=>X.post("/fs/other",{path:w(),password:G(),method:"video_preview"}));K(async()=>{const e=await v();B(e.code!==200),z(e,o=>{const n=o.video_preview_play_info.live_transcoding_task_list.filter(t=>t.url);if(n.length===0){A.error("No transcoding video found");return}i.url=n[n.length-1].url,i.quality=n.map((t,l)=>({html:t.template_id,url:t.url,default:l===n.length-1})),s=new le(i);let a;switch(L.auto_fullscreen){case"true":a=!0;case"false":a=!1;default:a=!1}s.on("ready",()=>{s.fullscreen=a}),s.on("video:ended",()=>{!N()||g()}),k=window.setInterval(I,1e3*60*14)})});let k,x;async function I(){const e=await v();z(e,async o=>{const n=o.video_preview_play_info.live_transcoding_task_list.filter(l=>l.url);if(n.length===0){A.error("No transcoding video found");return}const a=n.map((l,r)=>({html:l.template_id,url:l.url,default:r===n.length-1}));i.quality=a,s.quality=a,x=s.currentTime;let t=s.playing;await s.switchUrl(a[a.length-1].url),t||s.pause(),setTimeout(()=>{s.seek=x},1e3)})}Q(()=>{s==null||s.destroy(),window.clearInterval(k)});const[N,H]=M(),[V,B]=M(!1);return p(ne,{onAutoNextChange:H,get children(){return[p(Y,{w:"$full",id:"video-player"}),p(Z,{get when(){return V()},get children(){return p(ee,{w:"100%",h:"60vh",bgColor:"black",get children(){return p(ce,{size:"4rem"})}})}})]}})};export{Pe as default};
