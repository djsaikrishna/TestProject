import{cD as f,e as a,ak as j,l,au as x,k,j as $,aI as r,b as w,a3 as v,K as I,cV as n,r as y,aK as C,ay as M,at as S,S as s,c1 as z,as as _,b1 as O,ac as P}from"./index.44cc2916.js";import{b as A}from"./Folder.869f3811.js";import{u as E}from"./index.db28835d.js";import{q as H}from"./index.1fd0ea24.js";import{I as D}from"./ImageWithError.c6a59453.js";import{g as G,O as K}from"./icon.a6605f97.js";const R=e=>{const{isHide:c}=f();if(c(e.obj))return null;const{setPathAs:u}=E(),o=a(x,{get color(){return j()},get boxSize(){return`${parseInt(l.grid_item_size)-30}px`},get as(){return G(e.obj)}}),[g,i]=k(!1),b=$(()=>r()&&(g()||e.obj.selected)),{show:h}=A({id:1}),{pushHref:m,to:d}=w();return a(P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return a(v,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:I()}},as:H,get href(){return e.obj.name},"on:click":t=>{if(!!r()){if(t.preventDefault(),t.altKey){d(m(e.obj.name));return}n(e.index,!e.obj.selected)}},onMouseEnter:()=>{i(!0),u(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{i(!1)},onContextMenu:t=>{y(()=>{C(!1),n(e.index,!0,!0)}),h(t,{props:e.obj})},get children(){return[a(M,{class:"item-thumbnail",get h(){return`${parseInt(l.grid_item_size)}px`},w:"$full","on:click":t=>{r()||e.obj.type===K.IMAGE&&(t.stopPropagation(),t.preventDefault(),S.emit("gallery",e.obj.name))},pos:"relative",get children(){return[a(s,{get when(){return b()},get children(){return a(z,{pos:"absolute",left:"$1",top:"$1","on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{n(e.index,t.target.checked)}})}}),a(s,{get when(){return e.obj.thumb},fallback:o,get children(){return a(D,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return a(_,{size:"lg"})},fallbackErr:o,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),a(O,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})};export{R as G};
