(this["webpackJsonpr34-browser"]=this["webpackJsonpr34-browser"]||[]).push([[8],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var c,a,r=n(4),i=n(2),o=Object(i.e)(c||(c=Object(r.a)(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n"]))),s=Object(i.e)(a||(a=Object(r.a)(["\n  0% {\n    transform: rotate(0) scale(1);\n  }\n  60% {\n    transform: rotate(0) scale(1);\n  }\n  75% {\n    transform: rotate(0) scale(1.12);\n  }\n  80% {\n    transform: rotate(0) scale(1.1);\n  }\n  84% {\n    transform: rotate(-10deg) scale(1.1);\n  }\n  88% {\n    transform: rotate(10deg) scale(1.1);\n  }\n  92% {\n    transform: rotate(-10deg) scale(1.1);\n  }\n  96% {\n    transform: rotate(10deg) scale(1.1);\n  }\n  100% {\n    transform: rotate(0) scale(1);\n  }\n"])))},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c,a=n(89),r=n(4),i=n(0),o=n(2),s=n(21),l=n(3),d=o.d.input((function(e){var t=e.theme;return Object(o.c)(c||(c=Object(r.a)(["\n    width: 50px;\n    ","\n    background-color: ",";\n    ","\n    text-align: center;\n  "])),Object(s.e)({theme:t}),t.colors.backgroundColor2,Object(s.d)({theme:t}))}));function b(e){var t=e.value,n=e.onSubmit,c=e.className,r=Object(i.useState)(t.toString()),o=Object(a.a)(r,2),s=o[0],b=o[1];Object(i.useEffect)((function(){"number"===typeof t&&b(t.toString())}),[t]);var j=Object(i.useCallback)((function(e){b(e.target.value)}),[]),u=Object(i.useCallback)((function(){n(Number(s))}),[s,n]),O=Object(i.useCallback)((function(e){"Enter"===e.key&&n(Number(s))}),[s,n]);return Object(l.jsx)(d,{type:"number",value:s,onChange:j,onBlur:u,onKeyDown:O,className:c})}},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return h}));var c,a,r,i,o=n(4),s=(n(0),n(2)),l=n(108),d=n(3),b=s.d.div(c||(c=Object(o.a)(["\n  display: inline-block;\n  white-space: nowrap;\n"]))),j=s.d.a((function(e){var t=e.theme;return Object(s.c)(a||(a=Object(o.a)(["\n    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);\n    line-height: 36px;\n    display: inline-block;\n    background-color: ",";\n    padding: 2px 12px;\n    text-align: center;\n    border-radius: ",";\n    color: #fff;\n    cursor: pointer;\n    overflow-wrap: break-word;\n    vertical-align: middle;\n    border: 0 none #fff;\n    font-family: 'Quicksand', Helvetica, Century Gothic, sans-serif !important;\n    text-decoration: none;\n    text-shadow: none;\n    font-weight: 700;\n    font-size: 14px;\n\n    :visited {\n      color: #fff !important;\n      text-decoration: none !important;\n    }\n\n    :hover {\n      opacity: 0.85;\n      color: #f5f5f5 !important;\n      text-decoration: none !important;\n    }\n\n    :active {\n      color: #f5f5f5 !important;\n      text-decoration: none !important;\n    }\n  "])),t.colors.layerBg,t.dimensions.borderRadius)})),u=s.d.span(r||(r=Object(o.a)(["\n  color: #fff !important;\n  letter-spacing: -0.15px !important;\n  vertical-align: middle;\n  line-height: 33px !important;\n  padding: 0;\n  text-align: center;\n  text-decoration: none !important;\n  text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);\n\n  a {\n    color: #fff !important;\n    text-decoration: none !important;\n  }\n\n  a:hover {\n    color: #fff !important;\n    text-decoration: none;\n  }\n"]))),O=s.d.img(i||(i=Object(o.a)(["\n  display: initial !important;\n  vertical-align: middle;\n  height: 13px !important;\n  width: 20px !important;\n  padding-top: 0;\n  padding-bottom: 0;\n  border: none;\n  margin-top: 0;\n  margin-right: 5px;\n  margin-left: 0;\n  margin-bottom: 3px;\n  content: url('https://ko-fi.com/img/cup-border.png');\n\n  :after {\n    vertical-align: middle;\n    height: 25px;\n    padding-top: 0;\n    padding-bottom: 0;\n    border: none;\n    margin-top: 0;\n    margin-right: 6px;\n    margin-left: 0;\n    margin-bottom: 4px !important;\n    content: url('https://ko-fi.com/img/whitelogo.svg');\n\n    height: 15px !important;\n    width: 22px !important;\n    display: initial;\n    animation: "," 3s infinite;\n  }\n"])),l.b);function h(e){var t=e.id,n=e.label;return Object(d.jsx)(b,{children:Object(d.jsx)(j,{title:n,href:"https://ko-fi.com/"+t,target:"_blank",rel:"noopener noreferrer",children:Object(d.jsxs)(u,{children:[Object(d.jsx)(O,{src:"https://ko-fi.com/img/cup-border.png",className:"kofiimg",alt:"Ko-Fi button"}),n]})})})}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Zt}));var c=n(89),a=n(0),r=n(26),i=n(27),o=n(140),s=n(3);function l(e){var t=e.Header,n=e.items,r=void 0===n?[]:n,l=e.LoadingItem,d=e.hasMoreRows,b=e.ItemComponent,j=e.loadMore,u=e.OutOfItems,O=e.isLoading,h=e.setLoading,p=Object(a.useState)(null),f=Object(c.a)(p,2),g=f[0],m=f[1],x=Object(a.useMemo)((function(){return new o.b({fixedWidth:!0})}),[]),v=t?1:0,w=r.length+v+1,k=Object(a.useCallback)((function(e){return e.index<v+r.length+(d?0:1)}),[d,r.length,v]);Object(a.useEffect)((function(){if(g){var e=function(){g.measureAllRows(),g.recomputeRowHeights(),g.forceUpdateGrid()};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[g]);var y=Object(a.useCallback)((function(e){var n=e.index,c=e.key,a=e.parent,j=e.style;return Object(s.jsx)(o.a,{cache:x,columnIndex:0,rowIndex:n,parent:a,children:function(e){var c=e.measure,a=e.registerChild;return t&&n<v?Object(s.jsx)(t,{style:j,virtualRef:a,onLoad:c}):n<v+r.length?Object(s.jsx)(b,Object(i.a)({style:j,virtualRef:a,onLoad:c},r[n-v])):n<v+r.length+1?d||O?Object(s.jsx)(l,{style:j,virtualRef:a,onLoad:c}):u&&r.length>0?Object(s.jsx)(u,{style:j,virtualRef:a,onLoad:c}):Object(s.jsx)("div",{}):(console.warn("index not found / out of bounds. INDEX:",n),null)}},c)}),[x,t,v,r,b,d,O,l,u]);return Object(s.jsx)(o.c,{isRowLoaded:k,loadMoreRows:function(e){return O||!d?Promise.reject(0):(h(!0),j(),new Promise((function(e){setTimeout((function(){h(!1),e(1)}),1e3)})))},rowCount:w,children:function(e){var t=e.onRowsRendered,n=e.registerChild;return Object(s.jsx)(o.d,{ref:function(e){m(e),n(e)},onRowsRendered:t,rowRenderer:y,deferredMeasurementCache:x,overscanRowCount:10,rowCount:r.length+v+1,rowHeight:x.rowHeight,width:window.innerWidth,height:window.innerHeight})}})}var d,b,j=n(4),u=n(2),O=n(109),h=n(30),p=n(98),f=n(106);function g(e){return Object(s.jsxs)(f.a,{children:[Object(s.jsx)(p.t,{color:"white"}),Object(s.jsx)("span",{children:e.value[0].toUpperCase()})]})}var m=Object(u.d)(f.a)((function(e){var t=e.$liked,n=e.theme;return t?Object(u.c)(d||(d=Object(j.a)(["\n        color: ",";\n\n        svg {\n          color: ",";\n        }\n      "])),n.colors.liked,n.colors.liked):Object(u.c)(b||(b=Object(j.a)([""])))}));function x(e){var t=e.value,n=e.postId,r=Object(a.useState)(!1),i=Object(c.a)(r,2),o=i[0],l=i[1],d=Object(a.useCallback)((function(e){e.stopPropagation(),o||fetch("https://rule34.xxx/index.php?page=post&s=vote&id=".concat(n,"&type=up"),{mode:"no-cors"}).then((function(){l(!0)})).catch((function(e){console.warn("Upvote rejected",e)}))}),[o,n]);return Object(s.jsxs)(m,{onClick:d,$liked:o,children:[Object(s.jsx)(p.o,{color:"white"}),Object(s.jsx)("span",{children:t+(o?1:0)})]})}function v(e){var t=e.value;return Object(s.jsxs)(f.a,{children:[Object(s.jsx)(p.u,{color:"white"}),Object(s.jsx)("span",{children:t})]})}var w,k,y=n(101),C=n(21),L=u.d.a((function(e){var t=e.color,n=e.theme;return Object(u.c)(w||(w=Object(j.a)(["\n    ","\n    ",";\n    white-space: nowrap;\n\n    svg {\n      height: 16px;\n    }\n  "])),Object(C.l)({theme:n}),t?Object(u.c)(k||(k=Object(j.a)(["\n          color: "," !important;\n        "])),t):"")}));function I(e){var t=e.value,n=Object(u.f)().colors.accentColor,c=Object(y.d)(t);return Object(s.jsxs)(L,{color:n,href:t,target:"_blank",rel:"noopener noreferrer",className:"source",children:[Object(s.jsx)(p.q,{color:n}),c]})}function P(e){var t=e.value,n=e.color,c=e.Icon,a=e.title;return Object(s.jsxs)(L,{href:t,target:"_blank",rel:"noopener noreferrer",className:"source",color:n,children:[Object(s.jsx)(c,{}),a]})}function R(e){return e.split(" ")[0].split("?")[0].split("/")[0]}var _={"twitter.com/":["#1da1f2",p.v,function(e){return R(e.split("twitter.com/")[1])}],"pixiv.net/":["#0096FA",function(e){return Object(s.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{fill:"currentColor",d:"M4.935 0A4.924 4.924 0 0 0 0 4.935v14.13A4.924 4.924 0 0 0 4.935 24h14.13A4.924 4.924 0 0 0 24 19.065V4.935A4.924 4.924 0 0 0 19.065 0zm7.81 4.547c2.181 0 4.058.676 5.399 1.847a6.118 6.118 0 0 1 2.116 4.66c.005 1.854-.88 3.476-2.257 4.563-1.375 1.092-3.225 1.697-5.258 1.697-2.314 0-4.46-.842-4.46-.842v2.718c.397.116 1.048.365.635.779H5.79c-.41-.41.19-.65.644-.779V7.666c-1.053.81-1.593 1.51-1.868 2.031.32 1.02-.284.969-.284.969l-1.09-1.73s3.868-4.39 9.553-4.39zm-.19.971c-1.423-.003-3.184.473-4.27 1.244v8.646c.988.487 2.484.832 4.26.832h.01c1.596 0 2.98-.593 3.93-1.533.952-.948 1.486-2.183 1.492-3.683-.005-1.54-.504-2.864-1.42-3.86-.918-.992-2.274-1.645-4.002-1.646Z"})})},function(){return"Pixiv"}],"patreon.com/":["#FF424D",p.s,function(e){var t=e.split("patreon.com/")[1];return t.startsWith("posts/")?function(e){return e.split(" ")[0].split("?")[0].split("/")[1]}(t):R(t)}],"deviantart.com/":["#00e59b",p.i,function(e){return R(e.split("deviantart.com/")[1])}],"discordapp.com/":["#7289DA",p.j,function(){return"Discord"}]};function N(e){var t=e.value;if(Object(h.g)(t)){var n=t.split(" ");return Object(s.jsx)(s.Fragment,{children:n.map((function(e){var t=Object.keys(_).find((function(t){return e.includes(t)}));if(t){var n=Object(c.a)(_[t],3),a=n[0],r=n[1],i=n[2];return Object(s.jsx)(P,{value:e,color:a,Icon:r,title:i(e)},e)}return Object(s.jsx)(I,{value:e},e)}))})}return Object(s.jsx)(v,{value:t})}var S,M,F,E,T,z=n(10),D=n(8),W=n(93),V=u.d.div(S||(S=Object(j.a)(["\n  ","\n  ","\n  \n  flex-wrap: wrap;\n  padding-top: 0;\n  grid-row: 4/5;\n"])),C.i,C.o),H=u.d.div(M||(M=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  ","\n"])),Object(C.h)("4px")),A=u.d.span(F||(F=Object(j.a)(["\n  line-height: 20px;\n"]))),q=Object(u.d)(W.b)(E||(E=Object(j.a)(["\n  line-height: 20px;\n"])));function G(e){var t=e.comments,n=void 0===t?[]:t;return Object(s.jsx)(V,{children:n&&n.map((function(e,t){return Object(s.jsxs)(H,{children:[Object(s.jsx)(A,{children:e.creator}),Object(s.jsx)(q,{children:e.body})]},t)}))})}var B,Y,U,K,J,$=Object(u.d)(W.b)(T||(T=Object(j.a)(["\n  white-space: nowrap;\n"])));function Q(e){var t=e.created_at,n=e.status,c=e.width,a=e.height;return Object(s.jsxs)(V,{children:[Object(s.jsxs)(f.a,{children:[Object(s.jsx)(p.c,{}),Object(s.jsxs)($,{children:[Object(y.b)(new Date(t))," (",Object(y.g)(Date.now()-t)," ago)"]})]}),Object(s.jsxs)(f.a,{children:[Object(s.jsx)(p.e,{}),Object(s.jsx)($,{children:n})]}),Object(s.jsxs)(f.a,{children:[Object(s.jsx)(p.p,{}),Object(s.jsxs)($,{children:[c," x ",a]})]})]})}var X=u.d.div((function(e){var t=e.theme;return Object(u.c)(B||(B=Object(j.a)(["\n    grid-row: 2/3;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    ","\n    padding: ",";\n    ","\n    border-radius: 0 0 "," ",";\n  "])),Object(C.p)({theme:t}),t.dimensions.gutter,Object(C.k)(t.dimensions.hugeSpacing),t.dimensions.borderRadius,t.dimensions.borderRadius)})),Z=u.d.div(Y||(Y=Object(j.a)(["\n  ","\n  ","\n  justify-content: space-around;\n  margin-top: 8px;\n  grid-row: 3/4;\n"])),C.l,C.o),ee=u.d.span(U||(U=Object(j.a)(["\n  ","\n"])),(function(e){var t=e.active,n=e.theme;return t?Object(u.c)(K||(K=Object(j.a)(["\n          color: ",";\n        "])),n.colors.accentColor):""})),te=Object(u.d)(O.a)((function(e){var t=e.theme;return Object(u.c)(J||(J=Object(j.a)(["\n    grid-row: 4/5;\n    padding: ",";\n  "])),t.dimensions.gutter)}));function ne(e){var t=e.postId,n=e.onLoad,i=void 0===n?D.c:n,o=Object(r.c)(Object(z.p)(t)),l=o.rating,d=o.score,b=o.tags,j=o.source,u=o.created_at,O=o.status,p=o.height,f=o.width,m=o.comments,v=Object(a.useMemo)((function(){return Object(h.f)(b,"name")}),[b]),w=Object(r.c)(z.v),k=Object(r.c)(z.u),y=Object(a.useState)("tags"),C=Object(c.a)(y,2),L=C[0],I=C[1],P=Object(a.useCallback)((function(e){e.stopPropagation(),I("tags")}),[]),R=Object(a.useCallback)((function(e){e.stopPropagation(),I("comments")}),[]),_=Object(a.useCallback)((function(e){e.stopPropagation(),I("metadata")}),[]);Object(a.useEffect)((function(){i()}),[i,L]);var S=(null===m||void 0===m?void 0:m.length)||0;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(X,{children:[!!l&&Object(s.jsx)(g,{value:l}),!!d&&Object(s.jsx)(x,{value:d,postId:t}),!!j&&Object(s.jsx)(N,{value:j})]}),(k&&S>0||w)&&Object(s.jsxs)(Z,{children:[Object(s.jsx)(ee,{active:"tags"===L,onClick:P,children:"Tags"}),k&&S>0&&Object(s.jsx)(ee,{active:"comments"===L,onClick:R,children:"Comments"}),w&&Object(s.jsx)(ee,{active:"metadata"===L,onClick:_,children:"Metadata"})]}),{tags:Object(s.jsx)(te,{tags:v,detailed:!1}),comments:Object(s.jsx)(G,{comments:m}),metadata:Object(s.jsx)(Q,{created_at:u,status:O,width:f,height:p})}[L]]})}var ce,ae,re,ie,oe=n(107),se=n(108),le=n(6);var de,be=u.d.input(ie||(ie=Object(j.a)(["\n  ","\n  ","\n"])),(function(){return Object(u.c)(re||(re=Object(j.a)(["\n    -webkit-appearance: none;\n    width: 100%;\n    background: transparent;\n    border-radius: 100px;\n    height: 6px;\n\n    &::-moz-range-progress {\n      background-color: ",";\n    }\n\n    &::-ms-fill-lower {\n      background-color: ",";\n    }\n  "])),(function(e){return e.theme.colors.accentColor}),(function(e){return e.theme.colors.accentColor}))}),(function(){var e=Object(u.c)(ce||(ce=Object(j.a)(["\n    height: 16px;\n    width: 16px;\n    border-radius: 100px;\n    background: #ffffff;\n    cursor: pointer;\n  "])));return Object(u.c)(ae||(ae=Object(j.a)(["\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      ","\n    }\n\n    &::-moz-range-thumb {\n      ","\n    }\n\n    &::-ms-thumb {\n      ","\n    }\n  "])),e,e,e)}));var je,ue,Oe,he,pe,fe,ge,me,xe,ve,we,ke=u.d.svg(de||(de=Object(j.a)(["\n  > rect {\n    transition: all 0.2s ease-in;\n  }\n\n  &.play {\n    .left {\n      clip-path: path('M1.61 0 L10.1 4.9 L10.1 19.1 L1.61 24');\n    }\n\n    .right {\n      clip-path: path('M22.39 12 L9.9 4.79 L9.9 19.21 L22.39 12');\n    }\n  }\n\n  &.pause {\n    .left {\n      clip-path: path('M4.8 0 L10 0 L10 24 L4.8 24');\n    }\n\n    .right {\n      clip-path: path('M19.2 0 L14 0 L14 24 L19.2 24');\n    }\n  }\n"])));var ye=u.d.div(Oe||(Oe=Object(j.a)(["\n  grid-area: 1/1/2/2;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto 1fr auto auto;\n  z-index: 1;\n\n  ",";\n"])),(function(e){return e.isVisible?Object(u.c)(je||(je=Object(j.a)([""]))):Object(u.c)(ue||(ue=Object(j.a)(["\n        opacity: 0;\n        animation: "," 0.4s ease-in;\n      "])),se.a)})),Ce=Object(u.d)((function(e){var t=e.value,n=e.maxValue,r=e.className,i=e.onChange,o=Object(a.useState)(t),l=Object(c.a)(o,2),d=l[0],b=l[1],j=Object(a.useCallback)((function(e){console.log("update");var t=Number(e.target.value);b(t),i(t)}),[i]),O=Object(a.useCallback)((function(e){e.stopPropagation()}),[]);Object(a.useEffect)((function(){t!==d&&b(t)}),[t]);var h=Object(u.f)(),p=Math.round(d/n*100);return Object(s.jsx)(be,{type:"range",step:.034,min:0,max:n,value:d,onChange:j,className:r,onClick:O,style:{backgroundImage:"linear-gradient(90deg, ".concat(h.colors.accentColor," ").concat(p,"%, transparent ").concat(p,"%\n      )")}})}))(he||(he=Object(j.a)(["\n  grid-area: 4/1/4/4;\n"]))),Le=Object(u.d)(p.l)((function(e){var t=e.theme;return Object(u.c)(pe||(pe=Object(j.a)(["\n    grid-area: 1/1/2/2;\n    place-self: start start;\n    ","\n    margin: ",";\n  "])),C.f,t.dimensions.gutter)})),Ie=Object(u.d)(p.f)((function(e){var t=e.theme;return Object(u.c)(fe||(fe=Object(j.a)(["\n    grid-area: 1/1/2/2;\n    place-self: start start;\n    ","\n    margin: ",";\n  "])),C.f,t.dimensions.gutter)})),Pe=u.d.div(ge||(ge=Object(j.a)(["\n  grid-area: 3/1/4/1;\n  place-self: end stretch;\n  display: flex;\n  place-items: start center;\n  ","\n\n  > svg {\n    ","\n  }\n"])),C.o,C.f),Re=Object(u.d)((function(e){var t=e.onClick,n=void 0===t?D.c:t,r=e.className,i=Object(oe.a)(!0),o=Object(c.a)(i,2),l=o[0],d=o[1],b=Object(a.useCallback)((function(e){n(e),d()}),[n,d]);return Object(s.jsxs)(ke,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",onClick:b,className:"".concat(r," ").concat(l?"play":"pause"),children:[Object(s.jsx)("rect",{className:"left",color:"currentColor",x:"0",y:"0",width:"24",height:" 24"}),Object(s.jsx)("rect",{className:"right",color:"currentColor",x:"0",y:"0",width:"24",height:" 24"})]})}))(me||(me=Object(j.a)(["\n  height: 50px;\n  width: 50px;\n  grid-area: 2/2/3/3;\n  place-self: center center;\n  fill: white;\n  ","\n"])),C.f),_e=u.d.div(xe||(xe=Object(j.a)(["\n  grid-area: 2/1/3/2;\n"]))),Ne=u.d.div(ve||(ve=Object(j.a)(["\n  grid-area: 2/3/3/4;\n"]))),Se=u.d.span((function(e){return Object(u.c)(we||(we=Object(j.a)(["\n    grid-area: 3/3/4/4;\n    place-self: end end;\n    background: #00000080;\n    border-radius: 4px;\n    padding: ",";\n    margin: ",";\n  "])),e.theme.dimensions.spacing,e.theme.dimensions.gutter)}));var Me,Fe,Ee,Te=function(e){var t=e.togglePlay,n=void 0===t?D.c:t,i=e.isPaused,o=void 0===i||i,l=e.isPlayable,d=void 0!==l&&l,b=e.currentTime,j=void 0===b?0:b,u=e.duration,O=void 0===u?null:u,f=e.mediaRef,g=e.postId,m=Object(r.c)(z.q),x=Object(oe.a)(),v=Object(c.a)(x,2),w=v[0],k=v[1],C=Object(r.c)(z.h),L=Object(r.c)(Object(z.p)(g)).big_src,I=Object(a.useCallback)((function(e){e.stopPropagation(),Object(h.a)(L)}),[L]),P=Object(r.b)(),R=Object(a.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),P(C?Object(le.t)():Object(le.s)(g))}),[P,C,g]),_=Object(r.c)(z.f),N=Object(a.useCallback)((function(e){var t=m[e];t&&P(Object(le.y)(t.id))}),[P,m]),S=_+1<m.length,M=Object(a.useCallback)((function(){N(_+1)}),[N,_]),F=_>0,E=Object(a.useCallback)((function(){N(_-1)}),[N,_]),T=Object(a.useCallback)((function(e){f&&(f.currentTime=e)}),[f]);return Object(s.jsxs)(ye,{isVisible:o||w,onClick:k,children:[C?Object(s.jsx)(Ie,{color:"white",onClick:R,"aria-label":"Open Fullscreen"}):Object(s.jsx)(Le,{color:"white",onClick:R,"aria-label":"Open Fullscreen"}),Object(s.jsxs)(Pe,{children:[Object(s.jsx)("a",{href:L,target:"_blank",rel:"noopener noreferrer","aria-label":"Open In New Tab",title:L,children:Object(s.jsx)(p.m,{color:"white"})}),Object(s.jsx)(p.k,{color:"white","aria-label":"Download Image",onClick:I,title:L})]}),d&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Re,{color:"white",onClick:n,"aria-label":"Play/Pause"}),!!O&&!!j&&Object(s.jsx)(Ce,{value:j,maxValue:O,onChange:T}),f&&!isNaN(f.duration)&&Object(s.jsx)(Se,{children:Object(y.c)(f.duration)}),L.includes(".gif")&&Object(s.jsx)(Se,{children:"GIF"})]}),C&&F&&Object(s.jsx)(_e,{onClick:E}),C&&S&&Object(s.jsx)(Ne,{onClick:M})]})},ze=n(51),De=u.d.video(Me||(Me=Object(j.a)(["\n  ","\n  ","\n  grid-area: 1/1/2/2;\n"])),C.j,C.r),We=Object(u.d)(De)(Fe||(Fe=Object(j.a)(["\n  ","\n"])),C.q),Ve=Object(u.d)(ze.a)(Ee||(Ee=Object(j.a)(["\n  ","\n"])),C.q);function He(e){var t=e.src,n=e.onLoad,i=void 0===n?D.c:n,o=e.postId,l=e.width,d=e.height,b=Object(a.useState)(null),j=Object(c.a)(b,2),u=j[0],O=j[1],h=Object(a.useState)(Date.now()),p=Object(c.a)(h,2)[1],f=Object(a.useState)(null),g=Object(c.a)(f,2),m=g[0],x=g[1],v=Object(a.useCallback)((function(){u&&u.play();var e=setInterval((function(){p(Date.now())}),34);x(e)}),[u]),w=Object(a.useCallback)((function(){u&&u.pause(),clearInterval(m),x(null)}),[u,m]),k=Object(a.useCallback)((function(e){e.stopPropagation(),u&&(u.paused?v():w())}),[u,v,w]),y=Object(r.c)(z.s)?"auto":"metadata";return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(We,{controls:!1,loop:!0,preload:y,ref:O,onLoadedMetadata:i,width:l,height:d,src:t}),Object(s.jsx)(Te,{mediaRef:u,isPaused:!u||u.paused,currentTime:null===u||void 0===u?void 0:u.currentTime,duration:null===u||void 0===u?void 0:u.duration,postId:o,togglePlay:k,isPlayable:!0})]})}function Ae(e){var t=e.src,n=e.thumbnail_src,r=e.onLoad,i=void 0===r?D.c:r,o=e.postId,l=e.width,d=e.height,b=Object(a.useState)(!0),j=Object(c.a)(b,2),u=j[0],O=j[1],h=u?n:t;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Ve,{src:h,alt:h,loading:"lazy",onLoad:i,width:l,height:d}),Object(s.jsx)(Te,{isPlayable:!0,isPaused:u,togglePlay:function(e){e.stopPropagation(),O(!u)},postId:o})]})}function qe(e){var t=e.src,n=e.onLoad,c=void 0===n?D.c:n,a=e.postId,r=e.width,i=e.height;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Ve,{src:t,alt:t,onLoad:c,loading:"lazy",width:r,height:i}),Object(s.jsx)(Te,{isPlayable:!1,postId:a})]})}var Ge,Be,Ye;function Ue(e){var t=e.type,n=e.src,i=e.thumbnail_src,o=e.onLoad,l=e.postId,d=e.width,b=e.height,j=Object(r.c)(Object(z.p)(l)),u=function(e,t){switch(Object(h.c)(e,t)){case D.a.VIDEO:return He;case D.a.GIF:return Ae;default:return qe}}(t,j),O=Object(a.useMemo)((function(){return Object(h.c)(t,j)===D.a.GIF?[j.small_src.includes(".gif")?i:j.small_src,n.includes(".gif")?n:j.big_src]:[i,n]}),[j,n,i,t]),p=Object(c.a)(O,2),f=p[0],g=p[1];return Object(s.jsx)(u,{src:g,thumbnail_src:f,onLoad:o,postId:l,width:d,height:b})}var Ke=u.d.div((function(e){var t=e.theme;return Object(u.c)(Ge||(Ge=Object(j.a)(["\n    padding-top: ",";\n  "])),t.dimensions.gutter)})),Je=u.d.div((function(e){var t=e.theme;return Object(u.c)(Be||(Be=Object(j.a)(["\n    padding: 0 ",";\n    width: 100%;\n    max-width: ",";\n    margin: auto;\n  "])),t.dimensions.gutter,t.dimensions.bodyWidth)})),$e=u.d.div((function(e){var t=e.theme;return Object(u.c)(Ye||(Ye=Object(j.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto auto auto;\n    border-radius: ",";\n    ","\n  "])),t.dimensions.borderRadius,Object(C.p)({theme:t}))}));function Qe(e){var t=e.media_type,n=e.small_src,i=e.big_src,o=e.thumbnail_src,l=e.style,d=e.onLoad,b=void 0===d?D.c:d,j=e.virtualRef,u=e.id,O=e.width,p=e.height,f=e.comments,g=e.has_comments,m=e.comments_url,x=Object(r.b)(),v=Object(oe.a)(!0),w=Object(c.a)(v,2),k=w[0],y=w[1],C=Object(r.c)(z.m),L=Object(r.c)(z.y),I=Object(r.c)(z.u),P=Object(a.useMemo)((function(){return Object(h.b)(C,L,i,n)}),[i,C,n,L]);return Object(a.useEffect)((function(){b()}),[b,k]),Object(a.useEffect)((function(){!k&&I&&g&&!f&&fetch(m).then((function(e){return e.json()})).then((function(e){var t=e;x(Object(le.x)(u,t))}))}),[k,I,g,f,m,x,u]),Object(s.jsx)(Ke,{style:l,ref:j,className:"list-div",children:Object(s.jsx)(Je,{children:Object(s.jsxs)($e,{onClick:y,role:"row",children:[Object(s.jsx)(Ue,{onLoad:b,type:t,src:P,thumbnail_src:o,postId:u,width:O,height:p}),!k&&Object(s.jsx)(ne,{postId:u,onLoad:b})]})})})}var Xe,Ze=n(124),et=n(125),tt=n(100),nt=n(47),ct=n(36);function at(){var e=Object(nt.a)(le.v);return Object(s.jsx)(ct.b,{onClick:e,"aria-label":"Search",children:"Search"})}function rt(e){var t=e.onChange,n=Object(r.c)(z.a),c=Object(r.c)(z.l);return Object(a.useEffect)((function(){return t()}),[t,n]),c>0?Object(s.jsx)(O.a,{tags:n,detailed:!0}):null}var it=u.d.section(Xe||(Xe=Object(j.a)(["\n  ","\n  ","\n  ","\n"])),C.g,C.o,C.c);function ot(e){var t=e.onLoad;return Object(s.jsxs)(it,{children:[Object(s.jsx)(W.d,{children:Object(s.jsx)("label",{htmlFor:"tag-input",children:"Search"})}),Object(s.jsxs)(tt.a,{children:[Object(s.jsx)(Ze.a,{}),Object(s.jsx)(rt,{onChange:t}),Object(s.jsx)(et.a,{}),Object(s.jsx)(at,{})]})]})}var st,lt,dt=n(102),bt=n(118),jt=["Try tapping the little plus in the tag search.","You can exclude tags with the '-' modifier.","Each result will have at least one of your '~' tags.","Check out the settings. There are lots of uesful options there.","Starting a tag search with a * gives more results.","When filtering rated posts, you can configure the minimum score by taping the red number.","You can get more info about a post be tapping it once.","Tapping on a tag below a post adds it to your active tags.","Large gifs and videos can take a while to load in the app. Try clicking the 'Open in new tab' icon in the bottom left corner for faster loading times.","If anything stops working or gets weird. Reset the app in the settings.","I hope you are having a nice day!","If a tag is ambiguous, it will have a little arrow on the right. Tapping it shows related tags.","Tapping the icon in the top left of posts brings you into fullscreen mode.","Searching for nothing returns ALL posts ever made.","Results are sorted chronologically. Newest first.","You can search for safe posts by entering 'rating:safe' in the search field. The same works for questionable and explicit.","You can search for posts from a specific website by entering 'source:*twitter* for example."],ut=Object(u.d)(W.b)((function(e){var t=e.theme;return Object(u.c)(st||(st=Object(j.a)(["\n    text-align: center;\n    font-size: 16px;\n    padding: ",";\n    max-width: ",";\n  "])),t.dimensions.hugeSpacing,t.dimensions.bodyWidth)}));function Ot(){var e=Object(a.useMemo)((function(){return jt[Math.floor(Math.random()*jt.length)]}),[]);return Object(s.jsx)(ut,{children:e})}var ht=u.d.div((function(e){var t=e.theme;return Object(u.c)(lt||(lt=Object(j.a)(["\n    ","\n    ","\n    align-items: center;\n    max-width: ",";\n    margin: auto;\n\n    height: calc(100vh - 400px);\n    padding: 0 10%;\n  "])),Object(C.g)(),Object(C.h)(t.dimensions.hugeSpacing),t.dimensions.bodyWidth)}));function pt(){return Object(s.jsxs)(ht,{children:[Object(s.jsx)(Ot,{}),Object(s.jsx)(bt.b,{id:"V7V73PWW9",label:"Support Me on Ko-fi"})]})}function ft(){var e=Object(oe.a)(),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(r.c)(z.e),o=n?i.toLocaleString():Object(y.a)(i);return Object(s.jsxs)(W.d,{onClick:a,children:[o," results"]})}function gt(e){var t=e.onLoad,n=void 0===t?D.c:t,c=e.virtualRef,i=e.style,o=Object(r.c)(z.e);return Object(a.useEffect)((function(){o>0&&n()}),[o,n]),Object(s.jsxs)("div",{onLoad:n,ref:c,style:i,role:"row",children:[Object(s.jsx)(dt.a,{}),Object(s.jsx)(ot,{onLoad:n}),o>0?Object(s.jsx)(ft,{}):Object(s.jsx)(pt,{})]})}var mt,xt,vt,wt=n(54),kt=n(99),yt=u.d.div((function(e){var t=e.theme;return Object(u.c)(mt||(mt=Object(j.a)(["\n    padding: ",";\n  "])),t.dimensions.gutter)})),Ct=Object(u.d)(tt.a)((function(e){var t=e.theme;return Object(u.c)(xt||(xt=Object(j.a)(["\n    max-width: ",";\n    margin: auto;\n    text-align: center;\n  "])),t.dimensions.bodyWidth)})),Lt=Object(u.d)(ze.a)(vt||(vt=Object(j.a)(["\n  max-height: 50vh;\n"])));function It(e){var t=e.onLoad,n=void 0===t?D.c:t,c=e.virtualRef,i=e.style,o=Object(r.c)(z.b),l=Object(a.useMemo)((function(){return o.reduce((function(e,t){return e[t.name]=t,e}),{})}),[o]);return Object(s.jsx)(yt,{style:i,ref:c,onLoad:n,role:"row",children:Object(s.jsxs)(Ct,{children:[Object(s.jsx)(Lt,{src:wt.a,alt:"Shironeko does not understand"}),Object(s.jsx)(kt.a,{}),Object(s.jsx)(W.c,{children:"You have reached the end!"}),Object(s.jsx)("p",{children:"Go look for something else!"}),o.length>0&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"How about some of these?"}),Object(s.jsx)(O.a,{tags:l,detailed:!0})]})]})})}var Pt,Rt=n(52),_t=u.d.div(Pt||(Pt=Object(j.a)(["\n  display: grid;\n  place-items: center;\n"])));function Nt(e){var t=e.onLoad,n=void 0===t?D.c:t,c=e.virtualRef,a=e.style;return Object(s.jsx)(_t,{onLoad:n,ref:c,style:a,role:"row",children:Object(s.jsx)(Rt.a,{})})}var St,Mt,Ft,Et,Tt,zt,Dt=n(104),Wt=n(117),Vt=u.d.div((function(e){var t=e.theme;return Object(u.c)(St||(St=Object(j.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto 1fr;\n    justify-content: center;\n    place-items: center;\n    gap: ",";\n    padding: ",";\n    padding-bottom: 0;\n    max-width: ",";\n    margin: auto;\n  "])),t.dimensions.gutter,t.dimensions.gutter,t.dimensions.bodyWidth)})),Ht=u.d.div(Mt||(Mt=Object(j.a)(["\n  display: flex;\n  place-self: flex-end;\n  gap: 8px;\n"]))),At=u.d.div(Ft||(Ft=Object(j.a)(["\n  display: flex;\n  place-self: flex-start;\n  gap: 8px;\n"]))),qt=Object(u.d)(ct.d)(Et||(Et=Object(j.a)(["\n  min-width: 50px;\n"]))),Gt=Object(u.d)(Wt.a)(Tt||(Tt=Object(j.a)(["\n  min-width: 50px;\n"])));function Bt(e){var t=e.currentPage,n=e.loadPage,c=Object(r.c)(z.j),i=Object(a.useCallback)((function(e){return n(Number(e))}),[n]),o=Object(a.useCallback)((function(){return n(0)}),[n]),l=Object(a.useCallback)((function(){return n(c)}),[n,c]),d=Object(a.useCallback)((function(){return n(t-1)}),[t,n]),b=Object(a.useCallback)((function(){return n(t+1)}),[t,n]);return Object(s.jsxs)(Vt,{className:"page-navigation",children:[Object(s.jsxs)(Ht,{children:[t>1&&Object(s.jsx)(qt,{onClick:o,children:"0"}),t>0&&Object(s.jsx)(qt,{onClick:d,children:t-1})]}),Object(s.jsx)(Gt,{value:t,onSubmit:i}),Object(s.jsxs)(At,{children:[t<c&&Object(s.jsx)(qt,{onClick:b,children:t+1}),t<c-1&&Object(s.jsx)(qt,{onClick:l,children:c})]})]})}var Yt=Object(u.d)(Dt.b)((function(e){var t=e.theme;return Object(u.c)(zt||(zt=Object(j.a)(["\n    padding-bottom: ",";\n  "])),t.dimensions.gutter)}));function Ut(e){var t=e.header,n=e.items,c=e.ItemComponent,r=e.currentPage,o=e.loadPage,l=Object(a.useCallback)((function(e){o(e),document.getElementsByClassName("page-navigation")[0].scrollIntoView()}),[o]);return Object(s.jsxs)(Yt,{children:[t,n&&n.length>0&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Bt,{currentPage:r,loadPage:o}),null===n||void 0===n?void 0:n.map((function(e){return Object(s.jsx)(c,Object(i.a)({},e),e.id)})),Object(s.jsx)(Bt,{currentPage:r,loadPage:l})]})]})}var Kt,Jt=n(110),$t=n.n(Jt),Qt=u.d.div((function(e){var t=e.theme;return Object(u.c)(Kt||(Kt=Object(j.a)(["\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    left: 0;\n    top: 0;\n\n    display: grid;\n    grid-template-columns: 100vw;\n    grid-template-rows: 100vh;\n\n    background: ",";\n\n    z-index: 5;\n  "])),t.colors.backgroundColor)}));function Xt(){var e=Object(r.c)(z.q),t=Object(r.c)(z.m),n=Object(r.c)(z.h),c=Object(r.c)(z.g),a=Object(r.c)(z.f),i=Object(r.c)(z.y),o=Object(nt.a)(le.u);if($t()((function(){a+3>e.length&&o()}),2e3,[a,o,e.length]),!n)return null;var l=c.media_type,d=c.small_src,b=c.big_src,j=c.thumbnail_src,u=c.id,O=c.width,p=c.height,f=Object(h.b)(t,i,b,d);return Object(s.jsx)(Qt,{children:Object(s.jsx)(Ue,{onLoad:D.c,type:l,src:f,thumbnail_src:j,postId:u,width:O,height:p})})}function Zt(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(r.c)(z.q),d=Object(r.c)(z.i),b=Object(r.c)(z.t),j=Object(r.c)(z.o),u=Object(r.c)(z.n),O=Object(r.b)(),h=Object(nt.a)(le.u),p=Object(a.useCallback)((function(e){return O(Object(le.v)(e))}),[O]);return document.title="R34 React",Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Xt,{}),b===D.f.INFINITE_COLUMN?Object(s.jsx)(l,{Header:gt,OutOfItems:It,items:o,LoadingItem:Nt,hasMoreRows:d,ItemComponent:Qe,loadMore:h,isLoading:n,setLoading:i}):Object(s.jsx)(Ut,{header:Object(s.jsx)(gt,{}),pageSize:j,currentPage:u,hasMorePages:d,loadPage:p,ItemComponent:Qe,isLoading:n,setLoading:i,items:o})]})}}}]);
//# sourceMappingURL=8.77b323c4.chunk.js.map