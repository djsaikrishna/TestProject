import{a as _,b as y,aS as v,b5 as u,k as B,cE as p,e,ad as h,B as o,a6 as T,cF as F,cG as x,cH as f,E as m,cI as b,cJ as D,cK as s,b6 as g,n as $,a3 as H,c4 as I,aC as P,aD as R,af as E}from"./index.44cc2916.js";import{n as L}from"./index.0d8a97e9.js";import{D as M}from"./DeletePopover.b99147b6.js";import{W}from"./Wether.1b6b15ad.js";const z=n=>{const t=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(I,{get colorScheme(){return t[n.role].color},get children(){return t[n.role].name}})},G=n=>{const t=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:P,children:(a,d)=>e(R,{get label(){return t(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(E.can(n.user,d()))}})}})})}})},X=()=>{const n=_();L("manage.sidemenu.users");const{to:t}=y(),[i,a]=v(()=>u.get("/admin/user/list")),[d,k]=B([]),l=async()=>{const r=await a();g(r,c=>k(c.content))};l();const[S,C]=p(r=>u.post(`/admin/user/delete?id=${r}`)),[U,w]=p(r=>u.post(`/admin/user/cancel_2fa?id=${r}`));return e(H,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return n("global.refresh")}}),e(o,{onClick:()=>{t("/@manage/users/add")},get children(){return n("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(F,{highlightOnHover:!0,dense:!0,get children(){return[e(x,{get children(){return e(f,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(b,{get children(){return n(`users.${r}`)}})}),e(b,{get children(){return n("global.operations")}})]}})}}),e(D,{get children(){return e(m,{get each(){return d()},children:r=>e(f,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(z,{get role(){return r.role}})}}),e(s,{get children(){return e(G,{user:r})}}),e(s,{get children(){return e(W,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{t(`/@manage/users/edit/${r.id}`)},get children(){return n("global.edit")}}),e(M,{get name(){return r.username},get loading(){return S()===r.id},onClick:async()=>{const c=await C(r.id);g(c,()=>{$.success(n("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return U()===r.id},onClick:async()=>{const c=await w(r.id);g(c,()=>{$.success(n("users.cancel_2fa_success")),l()})},get children(){return n("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{X as default};
