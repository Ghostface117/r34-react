(this["webpackJsonpr34-browser"]=this["webpackJsonpr34-browser"]||[]).push([[7],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return It}));var c=n(79),a=n(0),o=n(23),r=n(28),i=n(117),s=n(3);function d(e){const t=e.Header,n=e.items,o=void 0===n?[]:n,d=e.LoadingItem,l=e.hasMoreRows,j=e.ItemComponent,b=e.loadMore,u=e.OutOfItems,O=e.isLoading,h=e.setLoading,g=Object(a.useState)(null),p=Object(c.a)(g,2),m=p[0],x=p[1],f=Object(a.useMemo)((()=>new i.b({fixedWidth:!0})),[]),v=t?1:0,w=o.length+v+1,y=Object(a.useCallback)((({index:e})=>e<v+o.length+(l?0:1)),[l,o.length,v]);Object(a.useEffect)((()=>{if(m){const e=()=>{m.measureAllRows(),m.recomputeRowHeights(),m.forceUpdateGrid()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[m]);const k=Object(a.useCallback)((({index:e,key:n,parent:c,style:a})=>Object(s.jsx)(i.a,{cache:f,columnIndex:0,rowIndex:e,parent:c,children:({measure:n,registerChild:c})=>t&&e<v?Object(s.jsx)(t,{style:a,virtualRef:c,onLoad:n}):e<v+o.length?Object(s.jsx)(j,Object(r.a)({style:a,virtualRef:c,onLoad:n},o[e-v])):e<v+o.length+1?l||O?Object(s.jsx)(d,{style:a,virtualRef:c,onLoad:n}):u&&o.length>0?Object(s.jsx)(u,{style:a,virtualRef:c,onLoad:n}):Object(s.jsx)("div",{}):(console.warn("index not found / out of bounds. INDEX:",e),null)},n)),[f,t,v,o,j,l,O,d,u]);return Object(s.jsx)(i.c,{isRowLoaded:y,loadMoreRows:e=>O||!l?Promise.reject(0):(h(!0),b(),new Promise((e=>{setTimeout((()=>{h(!1),e(1)}),1e3)}))),rowCount:w,children:({onRowsRendered:e,registerChild:t})=>Object(s.jsx)(i.d,{ref:e=>{x(e),t(e)},onRowsRendered:e,rowRenderer:k,deferredMeasurementCache:f,overscanRowCount:10,rowCount:o.length+v+1,rowHeight:f.rowHeight,width:window.innerWidth,height:window.innerHeight})})}var l=n(6),j=n(2),b=n(93);var u=n(85),O=n(90);function h(e){return Object(s.jsxs)(O.a,{children:[Object(s.jsx)(u.n,{color:"white"}),Object(s.jsx)("span",{children:e.value[0].toUpperCase()})]})}function g(e){return Object(s.jsxs)(O.a,{children:[Object(s.jsx)(u.j,{color:"white"}),Object(s.jsx)("span",{children:e.value})]})}function p({value:e}){return Object(s.jsxs)(O.a,{children:[Object(s.jsx)(u.o,{color:"white"}),Object(s.jsx)("span",{children:e})]})}var m,x,f=n(87);var v=j.d.a((({color:e,theme:t})=>Object(j.c)(m||(m=Object(l.a)(["\n    ",";\n    display: flex;\n    align-items: center;\n    gap: ",";\n  "])),e?Object(j.c)(x||(x=Object(l.a)(["\n          color: "," !important;\n        "])),e):"",t.dimensions.gutter)));function w({value:e}){const t=Object(j.f)().colors.accentColor,n=Object(f.c)(e);return Object(s.jsxs)(v,{color:t,href:e,target:"_blank",rel:"noopener noreferrer",className:"source",children:[Object(s.jsx)(u.k,{color:t}),n]})}function y(e){const t=e.value,n=e.color,c=e.icon,a=e.title;return Object(s.jsxs)(v,{href:t,target:"_blank",rel:"noopener noreferrer",className:"source",color:n,children:[Object(s.jsx)(u.c,{color:n,icon:c}),a]})}function k(e){return e.split(" ")[0].split("?")[0].split("/")[0]}const C={"twitter.com/":["#1da1f2","fa-twitter",e=>k(e.split("twitter.com/")[1])],"pixiv.net/":["#0096FA","pixiv",()=>"Pixiv"],"patreon.com/":["#FF424D","fa-patreon",e=>{const t=e.split("patreon.com/")[1];return t.startsWith("posts/")?function(e){return e.split(" ")[0].split("?")[0].split("/")[1]}(t):k(t)}],"deviantart.com/":["#00e59b","fa-deviantart",e=>k(e.split("deviantart.com/")[1])],"discordapp.com/":["#7289DA","fa-discord",()=>"Discord"]};function I({value:e}){if(function(e){return e.startsWith("http")}(e)){const t=e.split(" ");return Object(s.jsx)(s.Fragment,{children:t.map((e=>{const t=Object.keys(C).find((t=>e.includes(t)));if(t){const n=Object(c.a)(C[t],3),a=n[0],o=n[1],r=n[2];return Object(s.jsx)(y,{value:e,color:a,icon:o,title:r(e)},e)}return Object(s.jsx)(w,{value:e},e)}))})}return Object(s.jsx)(p,{value:e})}var L,P,S=n(25);const R=j.d.div((({theme:e})=>Object(j.c)(L||(L=Object(l.a)(["\n    grid-row: 2/3;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    ","\n    padding: ",";\n    gap: ",";\n    border-radius: 0 0 "," ",";\n  "])),Object(S.g)({theme:e}),e.dimensions.gutter,e.dimensions.hugeSpacing,e.dimensions.borderRadius,e.dimensions.borderRadius))),F=Object(j.d)(b.a)((({theme:e})=>Object(j.c)(P||(P=Object(l.a)(["\n    grid-row: 3/4;\n    padding: ",";\n  "])),e.dimensions.gutter)));function M(e){const t=e.rating,n=e.score,c=e.source,o=e.tags,r=Object(a.useMemo)((()=>{return e="name",o.reduce(((t,n)=>(t[n[e]]=n,t)),{});var e}),[o]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(R,{children:[!!t&&Object(s.jsx)(h,{value:t}),!!n&&Object(s.jsx)(g,{value:n}),!!c&&Object(s.jsx)(I,{value:c})]}),Object(s.jsx)(F,{tags:r,loadAliases:!1})]})}var _,E=n(10),N=n(9);var T,W,z=j.d.video(_||(_=Object(l.a)(["\n  ","\n  ","\n  grid-area: 1/1/2/2;\n"])),S.e,S.h),D=n(91);const H=Object(j.e)(T||(T=Object(l.a)(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n"])));Object(j.e)(W||(W=Object(l.a)(["\n  0% {\n    transform: rotate(0) scale(1);\n  }\n  60% {\n    transform: rotate(0) scale(1);\n  }\n  75% {\n    transform: rotate(0) scale(1.12);\n  }\n  80% {\n    transform: rotate(0) scale(1.1);\n  }\n  84% {\n    transform: rotate(-10deg) scale(1.1);\n  }\n  88% {\n    transform: rotate(10deg) scale(1.1);\n  }\n  92% {\n    transform: rotate(-10deg) scale(1.1);\n  }\n  96% {\n    transform: rotate(10deg) scale(1.1);\n  }\n  100% {\n    transform: rotate(0) scale(1);\n  }\n"])));var V,A,G,U,B,K,Y,J,q,Q,X=n(41),Z=n(7);const $=j.d.div((e=>Object(j.c)(V||(V=Object(l.a)(["\n    grid-area: 1/1/2/2;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: auto 1fr auto auto;\n    z-index: 1;\n\n    ",";\n  "])),e.isVisible?"":Object(j.c)(A||(A=Object(l.a)(["\n          opacity: 0;\n          animation: "," 0.4s ease-in-out;\n        "])),H)))),ee=j.d.div((e=>Object(j.c)(G||(G=Object(l.a)(["\n    grid-area: 4/1/4/4;\n    height: 5px;\n    background-color: ",";\n  "])),e.theme.colors.accentColor))),te=Object(j.d)(X.c)((e=>Object(j.c)(U||(U=Object(l.a)(["\n    width: max-content;\n    height: max-content;\n    padding: ",";\n  "])),e.theme.dimensions.bigSpacing))),ne=Object(j.d)(te)(B||(B=Object(l.a)(["\n  grid-area: 1/1/2/2;\n  place-self: start start;\n"]))),ce=Object(j.d)(te)(K||(K=Object(l.a)(["\n  grid-area: 3/1/4/1;\n  place-self: end start;\n"]))),ae=Object(j.d)(te)(Y||(Y=Object(l.a)(["\n  grid-area: 2/2/3/3;\n  place-self: center center;\n"]))),oe=j.d.div(J||(J=Object(l.a)(["\n  grid-area: 2/1/3/2;\n"]))),re=j.d.div(q||(q=Object(l.a)(["\n  grid-area: 2/3/3/4;\n"]))),ie=j.d.span((e=>Object(j.c)(Q||(Q=Object(l.a)(["\n    grid-area: 3/3/4/4;\n    place-self: end end;\n    background: #00000080;\n    border-radius: 4px;\n    padding: ",";\n    margin: ",";\n  "])),e.theme.dimensions.gutter,e.theme.dimensions.gutter)));var se,de=function(e){const t=e.togglePlay,n=void 0===t?E.d:t,r=e.isPaused,i=void 0===r||r,d=e.isPlayable,l=void 0!==d&&d,j=e.currentTime,b=void 0===j?0:j,O=e.duration,h=void 0===O?null:O,g=e.externalSrc,p=e.mediaRef,m=e.postId,x=Object(o.c)(N.p),v=Object(D.a)(),w=Object(c.a)(v,2),y=w[0],k=w[1],C=Object(o.c)(N.h),I=Object(o.b)(),L=Object(a.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),I(C?Object(Z.r)():Object(Z.q)(m))}),[I,C,m]),P=Object(a.useMemo)((()=>x.findIndex((e=>e.id===m))),[m,x]),S=Object(a.useCallback)((e=>{const t=x[e];t&&I(Object(Z.v)(t.id))}),[I,x]),R=P+1<x.length,F=Object(a.useCallback)((()=>{S(P+1)}),[S,P]),M=P>0,_=Object(a.useCallback)((()=>{S(P-1)}),[S,P]);return Object(s.jsxs)($,{isVisible:i||y,onClick:k,children:[Object(s.jsx)(ne,{onClick:L,"aria-label":"Open Fullscreen",children:C?Object(s.jsx)(u.e,{color:"white"}):Object(s.jsx)(u.h,{color:"white"})}),Object(s.jsx)(ce,{children:Object(s.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer","aria-label":"Open In New Tab",children:Object(s.jsx)(u.i,{color:"white"})})}),l&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(ae,{onClick:n,"aria-label":"Play/Pause",children:i?Object(s.jsx)(u.m,{color:"white",size:50}):Object(s.jsx)(u.l,{color:"white",size:50})}),!!h&&!!b&&Object(s.jsx)(ee,{style:{width:"".concat(b/h*100,"%")}}),p&&!isNaN(p.duration)&&Object(s.jsx)(ie,{children:Object(f.b)(p.duration)}),g.includes(".gif")&&Object(s.jsx)(ie,{children:"gif"})]}),C&&M&&Object(s.jsx)(oe,{onClick:_}),C&&R&&Object(s.jsx)(re,{onClick:F})]})};function le(e){const t=e.src,n=e.onLoad,r=void 0===n?E.d:n,i=e.externalSrc,d=e.postId,l=e.width,j=e.height,b=Object(a.useState)(null),u=Object(c.a)(b,2),O=u[0],h=u[1],g=Object(a.useState)(Date.now()),p=Object(c.a)(g,2)[1],m=Object(a.useState)(null),x=Object(c.a)(m,2),f=x[0],v=x[1],w=Object(a.useCallback)((()=>{O&&O.play();const e=setInterval((()=>{p(Date.now())}),34);v(e)}),[O]),y=Object(a.useCallback)((()=>{O&&O.pause(),clearInterval(f),v(null)}),[O,f]),k=Object(a.useCallback)((e=>{e.stopPropagation(),O&&(O.paused?w():y())}),[O,w,y]),C=Object(o.c)(N.r)?"auto":"metadata";return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(z,{controls:!1,loop:!0,preload:C,ref:h,onLoad:r,width:l,height:j,children:Object(s.jsx)("source",{src:t})}),Object(s.jsx)(de,{mediaRef:O,isPaused:!O||O.paused,currentTime:null===O||void 0===O?void 0:O.currentTime,duration:null===O||void 0===O?void 0:O.duration,postId:d,togglePlay:k,externalSrc:i,isPlayable:!0})]})}var je=j.d.img(se||(se=Object(l.a)(["\n  ","\n  ","\n  grid-area: 1/1/2/2;\n"])),S.e,S.h);function be(e){const t=e.src,n=e.thumbnail_src,o=e.onLoad,r=void 0===o?E.d:o,i=e.externalSrc,d=e.postId,l=e.width,j=e.height,b=Object(a.useState)(!0),u=Object(c.a)(b,2),O=u[0],h=u[1],g=O?n:t;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(je,{src:g,alt:g,loading:"lazy",onLoad:r,width:l,height:j}),Object(s.jsx)(de,{isPlayable:!0,isPaused:O,togglePlay:e=>{e.stopPropagation(),h(!O)},externalSrc:i,postId:d})]})}function ue(e){const t=e.src,n=e.onLoad,c=void 0===n?E.d:n,a=e.externalSrc,o=e.postId,r=e.width,i=e.height;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(je,{src:t,alt:t,onLoad:c,loading:"lazy",width:r,height:i}),Object(s.jsx)(de,{isPlayable:!1,externalSrc:a,postId:o})]})}const Oe=(e,t)=>{switch(((e,t)=>e===E.e.VIDEO?E.b.VIDEO:t.includes(".gif")?E.b.GIF:E.b.PICTURE)(e,t)){case E.b.VIDEO:return le;case E.b.GIF:return be;default:return ue}};function he(e){const t=e.type,n=e.src,c=e.thumbnail_src,o=e.onLoad,r=e.postId,i=e.width,d=e.height,l=Object(a.useMemo)((()=>function(e){return new URL(e).searchParams.get("url")||""}(n)),[n]),j=Oe(t,n);return Object(s.jsx)(j,{src:n,thumbnail_src:c,onLoad:o,externalSrc:l,postId:r,width:i,height:d})}var ge,pe,me;const xe=j.d.div((({theme:e})=>Object(j.c)(ge||(ge=Object(l.a)(["\n    padding-top: ",";\n  "])),e.dimensions.gutter))),fe=j.d.div((({theme:e})=>Object(j.c)(pe||(pe=Object(l.a)(["\n    padding: 0 ",";\n    width: 100%;\n    max-width: ",";\n    margin: auto;\n  "])),e.dimensions.gutter,e.dimensions.bodyWidth))),ve=j.d.div((({theme:e})=>Object(j.c)(me||(me=Object(l.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto auto;\n    border-radius: ",";\n    overflow: hidden;\n    background: ",";\n  "])),e.dimensions.borderRadius,e.misc.layer)));function we(e,t,n){return e?t:n}function ye(e){const t=e.media_type,n=e.small_src,r=e.big_src,i=e.thumbnail_src,d=e.rating,l=e.score,j=e.source,b=e.tags,u=e.style,O=e.onLoad,h=void 0===O?E.d:O,g=e.virtualRef,p=e.id,m=e.width,x=e.height,f=Object(D.a)(!0),v=Object(c.a)(f,2),w=v[0],y=v[1],k=Object(o.c)(N.l),C=Object(a.useMemo)((()=>we(k,r,n)),[r,k,n]);return Object(a.useEffect)((()=>{h()}),[h,w]),Object(s.jsx)(xe,{style:u,ref:g,className:"list-div",children:Object(s.jsx)(fe,{children:Object(s.jsxs)(ve,{onClick:y,role:"row",children:[Object(s.jsx)(he,{onLoad:h,type:t,src:C,thumbnail_src:i,postId:p,width:m,height:x}),!w&&Object(s.jsx)(M,{rating:d,score:l,source:j,tags:b})]})})})}var ke,Ce=n(84),Ie=n(104),Le=n(105),Pe=n(89),Se=n(42);function Re(){const e=Object(Se.a)(Z.t);return Object(s.jsx)(X.b,{onClick:e,"aria-label":"Search",children:"Search"})}function Fe(e){const t=e.onChange,n=Object(o.c)(N.a),c=Object(o.c)(N.k);return Object(a.useEffect)((()=>t()),[t,n]),c>0?Object(s.jsx)(b.a,{tags:n,loadAliases:!0}):null}const Me=j.d.section(ke||(ke=Object(l.a)(["\n  ","\n  ","\n  ","\n"])),S.d,S.f,S.a);function _e(e){const t=e.onLoad;return Object(s.jsxs)(Me,{children:[Object(s.jsx)(Ce.d,{children:Object(s.jsx)("label",{htmlFor:"tag-input",children:"Search"})}),Object(s.jsxs)(Pe.a,{children:[Object(s.jsx)(Ie.a,{}),Object(s.jsx)(Fe,{onChange:t}),Object(s.jsx)(Le.a,{}),Object(s.jsx)(Re,{})]})]})}var Ee,Ne,Te,We,ze=n(94);const De=j.d.div(Ee||(Ee=Object(l.a)(["\n  display: inline-block;\n  white-space: nowrap;\n  min-width: 160px;\n"]))),He=j.d.a((({theme:e})=>Object(j.c)(Ne||(Ne=Object(l.a)(["\n    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);\n    line-height: 36px !important;\n    min-width: 150px;\n    display: inline-block !important;\n    background-color: ",";\n    padding: 2px 12px !important;\n    text-align: center !important;\n    border-radius: 3px;\n    color: #fff;\n    cursor: pointer;\n    overflow-wrap: break-word;\n    vertical-align: middle;\n    border: 0 none #fff !important;\n    font-family: 'Quicksand', Helvetica, Century Gothic, sans-serif !important;\n    text-decoration: none;\n    text-shadow: none;\n    font-weight: 700 !important;\n    font-size: 14px !important;\n\n    :visited {\n      color: #fff !important;\n      text-decoration: none !important;\n    }\n\n    :hover {\n      opacity: 0.85;\n      color: #f5f5f5 !important;\n      text-decoration: none !important;\n    }\n\n    :active {\n      color: #f5f5f5 !important;\n      text-decoration: none !important;\n    }\n  "])),e.colors.layerBg))),Ve=j.d.span(Te||(Te=Object(l.a)(["\n  color: #fff !important;\n  letter-spacing: -0.15px !important;\n  vertical-align: middle;\n  line-height: 33px !important;\n  padding: 0;\n  text-align: center;\n  text-decoration: none !important;\n  text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);\n\n  a {\n    color: #fff !important;\n    text-decoration: none !important;\n  }\n\n  a:hover {\n    color: #fff !important;\n    text-decoration: none;\n  }\n"]))),Ae=j.d.img(We||(We=Object(l.a)(["\n  display: initial !important;\n  vertical-align: middle;\n  height: 13px !important;\n  width: 20px !important;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: none;\n  margin-top: 0;\n  margin-right: 5px;\n  margin-left: 0;\n  margin-bottom: 3px;\n  content: url('https://ko-fi.com/img/cup-border.png');\n\n  :after {\n    vertical-align: middle;\n    height: 25px;\n    padding-top: 0;\n    padding-bottom: 0;\n    border: none;\n    margin-top: 0;\n    margin-right: 6px;\n    margin-left: 0;\n    margin-bottom: 4px !important;\n    content: url('https://ko-fi.com/img/whitelogo.svg');\n\n    height: 15px !important;\n    width: 22px !important;\n    display: initial;\n    animation: kofi-wiggle 3s infinite;\n  }\n"])));function Ge(e){const t=e.id,n=e.label;return Object(s.jsx)(De,{children:Object(s.jsx)(He,{title:n,href:"https://ko-fi.com/"+t,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsxs)(Ve,{children:[Object(s.jsx)(Ae,{src:"https://ko-fi.com/img/cup-border.png",className:"kofiimg",alt:"Ko-Fi button"}),n]})})})}var Ue;const Be=["Try tapping the little plus in the tag search.","You can exclude tags with the '-' modifier.","Each result will have at least one of your '~' tags.","Check out the settings. There are lots of uesful options there.","Starting a tag search with a * gives more results.","When filtering rated posts, you can configure the minimum score by taping the red number.","You can get more info about a post be tapping it once.","Tapping on a tag below a post adds it to your active tags.","Large gifs and videos can take a while to load in the app. Try clicking the 'Open in new tab' icon in the bottom left corner for faster loading times.","If anything stops working or gets weird. Reset the app in the settings.","I hope you are having a nice day!","If a tag is ambiguous, it will have a little arrow on the right. Tapping it shows related tags.","Tapping the icon in the top left of posts brings you into fullscreen mode."],Ke=Object(j.d)(Ce.b)((({theme:e})=>Object(j.c)(Ue||(Ue=Object(l.a)(["\n    text-align: center;\n    font-size: 16px;\n    padding: ",";\n    max-width: ",";\n  "])),e.dimensions.hugeSpacing,e.dimensions.bodyWidth)));function Ye(){const e=Object(a.useMemo)((()=>Be[Math.floor(Math.random()*Be.length)]),[]);return Object(s.jsx)(Ke,{children:e})}var Je;const qe=j.d.div((({theme:e})=>Object(j.c)(Je||(Je=Object(l.a)(["\n    ","\n    gap: ",";\n    align-items: center;\n    max-width: ",";\n    margin: auto;\n\n    height: calc(100vh - 400px);\n    padding: 0 10%;\n  "])),Object(S.d)(),e.dimensions.hugeSpacing,e.dimensions.bodyWidth)));function Qe({onLoad:e=E.d,virtualRef:t,style:n}){const r=Object(D.a)(),i=Object(c.a)(r,2),d=i[0],l=i[1],j=Object(o.c)(N.e);return Object(a.useEffect)((()=>{j>0&&e()}),[j,e]),Object(s.jsxs)("div",{onLoad:e,ref:t,style:n,role:"row",children:[Object(s.jsx)(ze.a,{}),Object(s.jsx)(_e,{onLoad:e}),j>0?Object(s.jsx)(Ce.d,{onClick:l,children:(d?j.toLocaleString():Object(f.a)(j))+" results"}):Object(s.jsxs)(qe,{children:[Object(s.jsx)(Ye,{}),Object(s.jsx)(Ge,{id:"V7V73PWW9",label:"Support Me on Ko-fi"})]})]})}var Xe,Ze,$e,et=n.p+"static/media/OutOfResults.9c71691c.png",tt=n(86);const nt=j.d.div((({theme:e})=>Object(j.c)(Xe||(Xe=Object(l.a)(["\n    padding: ",";\n  "])),e.dimensions.gutter))),ct=Object(j.d)(Pe.a)((({theme:e})=>Object(j.c)(Ze||(Ze=Object(l.a)(["\n    max-width: ",";\n    margin: auto;\n    text-align: center;\n  "])),e.dimensions.bodyWidth))),at=Object(j.d)(je)($e||($e=Object(l.a)(["\n  max-height: 50vh;\n"])));function ot({onLoad:e=E.d,virtualRef:t,style:n}){const c=Object(o.c)(N.b),r=Object(a.useMemo)((()=>c.reduce(((e,t)=>(e[t.name]=t,e)),{})),[c]);return Object(s.jsx)(nt,{style:n,ref:t,onLoad:e,role:"row",children:Object(s.jsxs)(ct,{children:[Object(s.jsx)(at,{src:et,alt:"Shironeko does not understand"}),Object(s.jsx)(tt.a,{}),Object(s.jsx)(Ce.d,{children:"You have reached the end!"}),Object(s.jsx)("p",{children:"Go look for something else!"}),c.length>0&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"How about some of these?"}),Object(s.jsx)(b.a,{tags:r,padding:!0})]})]})})}var rt,it=n(44);const st=j.d.div(rt||(rt=Object(l.a)(["\n  display: grid;\n  place-items: center;\n"])));function dt({onLoad:e=E.d,virtualRef:t,style:n}){return Object(s.jsx)(st,{onLoad:e,ref:t,style:n,role:"row",children:Object(s.jsx)(it.a,{})})}var lt,jt,bt,ut=n(92),Ot=n(97);const ht=j.d.div((({theme:e})=>Object(j.c)(lt||(lt=Object(l.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    justify-content: center;\n    place-items: center;\n    gap: ",";\n    padding: ",";\n    padding-bottom: 0;\n    max-width: ",";\n    margin: auto;\n  "])),e.dimensions.gutter,e.dimensions.gutter,e.dimensions.bodyWidth))),gt=Object(j.d)(X.e)(jt||(jt=Object(l.a)([""]))),pt=Object(j.d)(Ot.a)(bt||(bt=Object(l.a)([""])));function mt(e){const t=e.currentPage,n=e.loadPage,c=Object(o.c)(N.j),r=Object(a.useCallback)((e=>n(Number(e))),[n]),i=Object(a.useCallback)((()=>n(0)),[n]),d=Object(a.useCallback)((()=>n(c)),[n,c]),l=Object(a.useCallback)((()=>n(t-1)),[t,n]),j=Object(a.useCallback)((()=>n(t+1)),[t,n]);return Object(s.jsxs)(ht,{className:"page-navigation",children:[t>1?Object(s.jsx)(gt,{onClick:i,children:"0"}):Object(s.jsx)("div",{}),t>0?Object(s.jsx)(gt,{onClick:l,children:t-1}):Object(s.jsx)("div",{}),Object(s.jsx)(pt,{value:t,onSubmit:r}),t<c?Object(s.jsx)(gt,{onClick:j,children:t+1}):Object(s.jsx)("div",{}),t<c-1?Object(s.jsx)(gt,{onClick:d,children:c}):Object(s.jsx)("div",{})]})}var xt;const ft=Object(j.d)(ut.b)((({theme:e})=>Object(j.c)(xt||(xt=Object(l.a)(["\n    padding-bottom: ",";\n  "])),e.dimensions.gutter)));function vt(e){const t=e.header,n=e.items,c=e.ItemComponent,o=e.currentPage,i=e.loadPage,d=Object(a.useCallback)((e=>{i(e),document.getElementsByClassName("page-navigation")[0].scrollIntoView()}),[i]);return Object(s.jsxs)(ft,{children:[t,n&&n.length>0&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(mt,{currentPage:o,loadPage:i}),null===n||void 0===n?void 0:n.map((e=>Object(s.jsx)(c,Object(r.a)({},e),e.id))),Object(s.jsx)(mt,{currentPage:o,loadPage:d})]})]})}var wt,yt=n(99);const kt=j.d.div((({theme:e})=>Object(j.c)(wt||(wt=Object(l.a)(["\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    left: 0;\n    top: 0;\n\n    display: grid;\n    grid-template-columns: 100vw;\n    grid-template-rows: 100vh;\n\n    background: ",";\n\n    z-index: 5;\n  "])),e.colors.backgroundColor)));function Ct(){const e=Object(o.c)(N.p),t=Object(o.c)(N.l),n=Object(o.c)(N.h),c=Object(o.c)(N.g),a=Object(o.c)(N.f),r=Object(Se.a)(Z.s);if(Object(yt.a)((()=>{a+3>e.length&&r()}),2e3,[a,r,e.length]),!n)return null;const i=c.media_type,d=c.small_src,l=c.big_src,j=c.thumbnail_src,b=c.id,u=c.width,O=c.height,h=we(t,l,d);return Object(s.jsx)(kt,{children:Object(s.jsx)(he,{onLoad:E.d,type:i,src:h,thumbnail_src:j,postId:b,width:u,height:O})})}function It(){const e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(o.c)(N.p),l=Object(o.c)(N.i),j=Object(o.c)(N.s),b=Object(o.c)(N.o),u=Object(o.c)(N.n),O=Object(o.b)(),h=Object(Se.a)(Z.s),g=Object(a.useCallback)((e=>O(Object(Z.t)(e))),[O]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Ct,{}),j===E.g.INFINITE_COLUMN?Object(s.jsx)(d,{Header:Qe,OutOfItems:ot,items:i,LoadingItem:dt,hasMoreRows:l,ItemComponent:ye,loadMore:h,isLoading:n,setLoading:r}):Object(s.jsx)(vt,{header:Object(s.jsx)(Qe,{}),pageSize:b,currentPage:u,hasMorePages:l,loadPage:g,ItemComponent:ye,isLoading:n,setLoading:r,items:i})]})}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c,a=n(79),o=n(6),r=n(0),i=n(2),s=n(25),d=n(3);const l=i.d.input((({theme:e})=>Object(i.c)(c||(c=Object(o.a)(["\n    width: 50px;\n    ","\n    background-color: ",";\n    ","\n    text-align: center;\n  "])),Object(s.c)({theme:e}),e.colors.backgroundColor2,Object(s.b)({theme:e}))));function j(e){const t=e.value,n=e.onSubmit,c=Object(r.useState)(t.toString()),o=Object(a.a)(c,2),i=o[0],s=o[1];Object(r.useEffect)((()=>{s(t.toString())}),[t]);const j=Object(r.useCallback)((e=>{s(e.target.value)}),[]),b=Object(r.useCallback)((()=>{n(Number(i))}),[i,n]),u=Object(r.useCallback)((e=>{"Enter"===e.key&&n(Number(i))}),[i,n]);return Object(d.jsx)(l,{type:"number",value:i,onChange:j,onBlur:b,onKeyDown:u})}}}]);
//# sourceMappingURL=7.a88ee042.chunk.js.map