import{e as t,E as P,a3 as y,j as x,af as L,ag as T,bK as g,$ as S,Z as M,b as f,a as _,L as U,N as W,K as R,S as p,au as E,bL as h,k as z,bM as I,ad as m,a6 as l,az as N,U as n,V as r,bN as D,aN as j,bO as H,bP as Y,aG as F,W as C,aj as w,bQ as K,bR as X,n as J,bi as Q,ba as Z,bb as q,bc as G,bd as ee,be as te,ay as b,bg as O,bh as k,bS as ne,bT as re,bU as oe}from"./index.44cc2916.js";import{d as ae,e as ie,f as se,g as le,h as ce,i as ue,j as ge,k as me,l as de,b as _e,m as he,n as pe,c as Ee}from"./index.0d8a97e9.js";import{A as fe,f as Ie,g as be,h as $e,i as ve,j as Ae}from"./index.1fd0ea24.js";import{S as Le}from"./index.2f3d6e03.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e))(i||{}),Te=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Te||{});const Se=e=>{const o=x(()=>{if(!L.is_admin(T())){if(e.role===void 0)return!1;if(e.role===g.GENERAL&&!L.is_general(T()))return!1}return!0});return t(M,{get fallback(){return t(De,e)},get children(){return[t(S,{get when(){return!o()},children:null}),t(S,{get when(){return e.children},get children(){return t(we,e)}})]}})},De=e=>{const{pathname:o}=f(),a=_(),c=()=>o()===e.to;return t(fe,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:U,get href(){return e.to},onClick:u=>{var A;if(V(),e.refresh){(A=u.stopPropagation)==null||A.call(u);let d=e.to;d.startsWith("http")||(d=W(d)),window.open(d,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":R(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return a(e.title)}})]}})},we=e=>{const{pathname:o}=f(),[a,c]=z(o().includes(e.to)),u=_();return t(l,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:R()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(m,{get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return u(e.title)}})]}}),t(E,{as:Ie,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(p,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t($,{get items(){return e.children}})}})}})]}})},$=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(P,{get each(){return e.items},children:o=>t(Se,o)})}});function Pe(e){return N({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>r(()=>import("./Common.8c9ecbef.js"),["assets/Common.8c9ecbef.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/index.0d8a97e9.js","assets/SettingItem.48b4f98b.js","assets/item_type.be442da4.js","assets/index.1fd0ea24.js","assets/ResponsiveGrid.a91c1579.js","assets/index.2f3d6e03.js"])),v=[{title:"manage.sidemenu.profile",icon:ae,to:"/@manage",role:g.GUEST,component:n(()=>r(()=>import("./Profile.30fe62cf.js"),["assets/Profile.30fe62cf.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/index.0d8a97e9.js","assets/index.1fd0ea24.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:ie,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:se,to:"/@manage/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:le,to:"/@manage/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:ce,to:"/@manage/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:ue,to:"/@manage/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:D,to:"/@manage/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:D,to:"/@manage/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.other",icon:ge,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.5fdaa259.js"),["assets/Other.5fdaa259.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/index.0d8a97e9.js","assets/SettingItem.48b4f98b.js","assets/item_type.be442da4.js","assets/index.1fd0ea24.js","assets/index.2f3d6e03.js"]))}]},{title:"manage.sidemenu.tasks",icon:Pe,to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:j,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./offline_download.6d1ac71e.js"),["assets/offline_download.6d1ac71e.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/index.0d8a97e9.js","assets/Tasks.b62888cd.js","assets/Paginator.57c5ed74.js","assets/index.1fd0ea24.js"]))},{title:"manage.sidemenu.upload",icon:me,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.d6e4e23d.js"),["assets/Upload.d6e4e23d.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/index.0d8a97e9.js","assets/Tasks.b62888cd.js","assets/Paginator.57c5ed74.js","assets/index.1fd0ea24.js"]))},{title:"manage.sidemenu.copy",icon:H,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.4629a657.js"),["assets/Copy.4629a657.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/index.0d8a97e9.js","assets/Tasks.b62888cd.js","assets/Paginator.57c5ed74.js","assets/index.1fd0ea24.js"]))}]},{title:"manage.sidemenu.users",icon:de,to:"/@manage/users",component:n(()=>r(()=>import("./Users.9f5fcb48.js"),["assets/Users.9f5fcb48.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/index.0d8a97e9.js","assets/DeletePopover.b99147b6.js","assets/Wether.1b6b15ad.js"]))},{title:"manage.sidemenu.storages",icon:be,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.ebecb93e.js"),["assets/Storages.ebecb93e.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/index.0d8a97e9.js","assets/DeletePopover.b99147b6.js"]))},{title:"manage.sidemenu.metas",icon:Le,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.9860e359.js"),["assets/Metas.9860e359.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/index.0d8a97e9.js","assets/DeletePopover.b99147b6.js","assets/Wether.1b6b15ad.js"]))},{title:"manage.sidemenu.indexes",icon:_e,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.f0b73447.js"),["assets/indexes.f0b73447.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/Common.8c9ecbef.js","assets/index.0d8a97e9.js","assets/SettingItem.48b4f98b.js","assets/item_type.be442da4.js","assets/index.1fd0ea24.js","assets/ResponsiveGrid.a91c1579.js","assets/index.2f3d6e03.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:$e,component:n(()=>r(()=>import("./backup-restore.280ae2e9.js"),["assets/backup-restore.280ae2e9.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/index.0d8a97e9.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.about",icon:he,to:"/@manage/about",role:g.GUEST,component:n(()=>r(()=>import("./About.f691c6ee.js"),["assets/About.f691c6ee.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/index.0d8a97e9.js"]))},{title:"manage.sidemenu.docs",icon:ve,to:"https://alist.nn.ci",role:g.GUEST,external:!0},{title:"manage.sidemenu.home",icon:Y,to:"/",role:g.GUEST,refresh:!0}],{isOpen:Re,onOpen:Ce,onClose:V}=F(),Oe=()=>{const e=_(),{to:o}=f();return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return C("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(m,{spacing:"$2",get children(){return[t(w,{"aria-label":"menu",get icon(){return t(Ae,{})},display:{"@sm":"none"},onClick:Ce,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(m,{spacing:"$1",get children(){return t(w,{"aria-label":"logout",get icon(){return t(K,{})},onClick:()=>{X(),J.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(Q,{get opened(){return Re()},placement:"left",onClose:V,get children(){return[t(Z,{}),t(q,{get children(){return[t(G,{}),t(ee,{color:"$info9",get children(){return e("manage.title")}}),t(te,{get children(){return[t($,{items:v}),t(b,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(O,{}),t(k,{})]}})}})]}})]}})]}})]}})},ke=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.a0fc55ad.js"),["assets/AddOrEdit.a0fc55ad.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.a91c1579.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.a0fc55ad.js"),["assets/AddOrEdit.a0fc55ad.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.a91c1579.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.5c43ec3b.js"),["assets/AddOrEdit.5c43ec3b.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/FolderTree.191789d6.js","assets/index.1fd0ea24.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.5c43ec3b.js"),["assets/AddOrEdit.5c43ec3b.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/FolderTree.191789d6.js","assets/index.1fd0ea24.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.9cb736ba.js"),["assets/AddOrEdit.9cb736ba.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/FolderTree.191789d6.js","assets/index.1fd0ea24.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.9cb736ba.js"),["assets/AddOrEdit.9cb736ba.js","assets/index.44cc2916.js","assets/index.15d8d646.css","assets/FolderTree.191789d6.js","assets/index.1fd0ea24.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.a4871f71.js"),["assets/2fa.a4871f71.js","assets/index.44cc2916.js","assets/index.15d8d646.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.d4526f8b.js"),["assets/Messenger.d4526f8b.js","assets/index.44cc2916.js","assets/index.15d8d646.css"]))}],Ve=e=>(pe(e.title),t(b,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),B=(e,o=[])=>(e.forEach(a=>{a.children?B(a.children,o):o.push({to:ne(a.to,"/@manage"),component:a.component||(()=>t(Ve,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),Be=B(v).concat(ke),ye=()=>{const e=_();return Ee(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Oe,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return C("$background","$neutral2")()},overflowY:"auto",get children(){return[t($,{items:v}),t(b,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(O,{}),t(k,{})]}})}})]}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(re,{get children(){return t(P,{each:Be,children:o=>t(oe,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},ze=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"}));export{Te as F,i as G,ze as i};
