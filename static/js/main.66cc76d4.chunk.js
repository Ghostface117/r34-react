(this["webpackJsonpr34-browser"]=this["webpackJsonpr34-browser"]||[]).push([[0],{137:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(68),i=t.n(c),o=(t(86),t(13)),u=t(1),s=t(20),l=t(69),f=t(77),p=t(70),m=t(80),d=function(e){function n(){return Object(s.a)(this,n),Object(f.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement("main",null,a.a.createElement("p",null,"Helpful things")))}}]),n}(r.Component),g=t(2),h=t(71),b=t(18),v=t.n(b),E=t(25),O=20,j="https://r34-json.herokuapp.com";fetch(j).catch((function(){return j="https://r34-api-clone.herokuapp.com"}));var x={getTags:function(){var e=Object(E.a)(v.a.mark((function e(n){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"/tags?limit="+O+"&name="+n+"*&order_by=posts");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getPosts:function(){var e=Object(E.a)(v.a.mark((function e(n){var t,r,a,c=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:0,r=c.length>2&&void 0!==c[2]?c[2]:0,e.next=4,fetch(y(t,n,r));case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getAliases:function(){var e=Object(E.a)(v.a.mark((function e(n){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"/alias/"+n);case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()};function y(e,n,t){var r=j+"/posts";return r+="?pid="+e,r+="&limit="+O,r+="&tags="+n.map((function(e){return(e.modifier?e.modifier:"")+encodeURIComponent(e.name)})).join("+"),r+=encodeURIComponent("+score:>="+t)}var k=function e(n,t,r,a,c,i,o,u,l,f,p,m,d,g,h,b,v,E,O,j,x){Object(s.a)(this,e),this.id=n,this.score=t,this.rating=r,this.source=a,this.tags=c,this.media_type=i,this.small_src=o,this.big_src=u,this.thumbnail_src=l,this.width=f,this.height=p,this.creator_id=m,this.creator_url=d,this.status=g,this.parent_id=h,this.has_children=b,this.has_comments=v,this.comments_url=E,this.has_notes=O,this.created_at=j,this.change=x},w=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"+";Object(s.a)(this,e),this.name=n,this.types=t,this.count=r,this.modifier=a},_=function(e){return e.name?function(e){var n=e.name,t=e.types,r=e.count,a=e.modifier;return new w(n,t,Number(r),a)}(e):function(e){var n=e.id,t=e.type,r=e.score,a=e.rating,c=e.source,i=e.tags,o=e.file_url,u=e.width,s=e.height,l=e.creator_id,f=e.creator_url,p=e.sample_url,m=e.preview_url,d=e.status,g=e.parent_id,h=e.has_children,b=e.has_comments,v=e.comments_url,E=e.has_notes,O=e.created_at,j=e.change;return new k(Number(n),Number(r),a,c,i?i.map((function(e){return new w(e)})):[],t,p,o,m,Number(u),Number(s),Number(l),f,d,g,h,b,v,E,O,j)}(e)};var C="#ef3322",S="#ffffff11; :hover { background: #ffffff16;} transition: background-color 0.4s ease-in-out",T="box-shadow: 0 0 8px rgba(0, 0, 0, 1)",N="8px";function P(){var e=Object(u.a)(["\n  min-width: 48px;\n  border: "," "," solid;\n  border-right-width: 0;\n  border-radius: "," 0 0 ",";\n"]);return P=function(){return e},e}function z(){var e=Object(u.a)(["\n  border-left-width: 0;\n  border-radius: 0 "," "," 0;\n"]);return z=function(){return e},e}function A(){var e=Object(u.a)(["\n  width: 100%;\n  border-radius: ",";\n"]);return A=function(){return e},e}function I(){var e=Object(u.a)(["\n  height: 32px;\n  font-size: 14px;\n  color: ",";\n  background: ",";\n  border: "," "," solid;\n\n  transition: border-color 0.4s ease-in-out;\n  transition: color 0.4s ease-in-out;\n  transition: background-color 0.4s ease-in-out;\n\n  :hover {\n    background-color: ",";\n    color: ",";\n  }\n\n  :active,\n  :focus {\n    color: ",";\n\n    border-color: ",";\n    cursor: pointer;\n  }\n"]);return I=function(){return e},e}function F(){var e=Object(u.a)(["\n  position: absolute;\n"]);return F=function(){return e},e}function U(){var e=Object(u.a)(["\n  color: ",";\n"]);return U=function(){return e},e}function M(){var e=Object(u.a)(["\n  background: none;\n  border: none;\n  padding: ",";\n\n  :focus {\n    text-decoration: underline;\n  }\n"]);return M=function(){return e},e}function D(){var e=Object(u.a)(["\n  font-size: 14px;\n\n  :focus {\n    outline: none;\n  }\n"]);return D=function(){return e},e}var R=g.a.button(D()),G=Object(g.a)(R)(M(),"4px"),L=Object(g.a)(G)(U(),(function(e){return e.active?C:"white"})),V=Object(g.a)(G)(F()),H=Object(g.a)(R)(I(),C,"#121212",C,"2px",C,"#121212","white","white"),W=Object(g.a)(H)(A(),"3px"),B=Object(g.a)(H)(z(),"3px","3px"),J=Object(g.a)(G)(P(),C,"2px","3px","3px");function q(e){var n,t=e.type,r=e.children,c=e.onClick,i=e.active,o=e.disabled;switch(t){case"invisible":n=G;break;case"block":n=W;break;case"topLeft":n=V;break;case"modifier":n=J;break;case"add":n=B;break;case"menu":n=L;break;default:n=H}return a.a.createElement(n,{onClick:c,active:i,disabled:o},r)}function $(){var e=Object(u.a)(["\n  width: 100%;\n  border: none;\n  outline: none;\n  background: none;\n  font-size: 14px;\n  border-top: "," "," solid;\n  border-bottom: "," "," solid;\n"]);return $=function(){return e},e}var K=g.a.input($(),C,"2px",C,"2px");function Q(e){var n=e.value,t=e.setValue;return a.a.createElement(K,{id:"tag-input",value:n,onChange:function(e){return t(e.target.value)},placeholder:"Search for tags"})}t(91);function X(e){return e.replace(/_/g," ")}function Y(){var e=Object(u.a)(["\n  ","\n  ","\n"]);return Y=function(){return e},e}function Z(){var e=Object(u.a)(["\n  display: inline-block;\n  padding: 0.25rem 0.4rem;\n  border-radius: ","\n  font-size: 0.8rem;\n  line-height: 1.2;\n  vertical-align: baseline;\n  margin: ",";\n  ","\n"]);return Z=function(){return e},e}var ee=g.a.div(Z(),(function(e){return e.collapsed?"3px":"".concat("3px"," ").concat("3px"," 0 0")}),(function(){return"4px"}),(function(e){var n=e.active,t=n?"#121212":C,r=n?C:"#121212";return"\n    color: ".concat(t,";\n    background-color: ").concat(r,";\n    border: ").concat(C," ").concat("2px"," solid;\n    transition: background-color 0.4s ease-in-out;\n\n    cursor: pointer;\n\n    :hover {\n      background-color: ").concat(t,";\n      color: ").concat(r,";\n      \n      i {\n        color: ").concat(r,";\n      }\n    }\n\n    :focus, :active {\n      color: ").concat("white",";\n      border-color: ").concat("white","\n    }\n  ")})),ne=g.a.span(Y(),(function(e){return e.left?"margin-right: 5px;":""}),(function(e){return e.right?"margin-left: 5px;":""}));function te(e){var n=e.name,t=e.count,c=e.modifier,i=e.types,u=e.activeTags,s=e.loadAliases,l=e.dispatch,f=Object(r.useState)(),p=Object(o.a)(f,2),m=p[0],d=p[1],g=Object(r.useState)(!0),h=Object(o.a)(g,2),b=h[0],v=h[1];Object(r.useEffect)((function(){u.some((function(e){return e.name===n}))&&x.getAliases(n).then((function(e){e.sort((function(e,n){return Number(n.posts)-Number(e.posts)})),d(e.filter((function(e){return!u.some((function(n){return n.name===e.name}))})))}))}),[n,u]);var E=u.some((function(e){return e.name===n})),O=s&&m&&m.length>0;return a.a.createElement(ee,{active:E,collapsed:b,onMouseLeave:function(){return v(!0)},tabIndex:"0"},a.a.createElement(ke,{types:i,left:!0}),a.a.createElement(re,{name:n,count:t,modifier:c,types:i,activeTags:u,dispatch:l}),O&&a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,{right:!0,onClick:function(){return v(!b)}},a.a.createElement(ve,null)),a.a.createElement("div",{className:"dropdown-list"+(b?"":" visible")},m.map((function(e){var n=e.name,t=e.posts;return a.a.createElement(ae,{key:"t_"+n,name:n,count:t,dispatch:l})})))))}function re(e){var n=e.name,t=e.count,r=e.types,c=e.modifier,i=e.dispatch,o=X(n),u=t?"".concat(o," (").concat(t,")"):o;return a.a.createElement("span",{onClick:function(){return i({type:"TOGGLE_TAG",tag:{name:n,count:t,types:r,modifier:c}})}},"-"===c?a.a.createElement("s",null,u):u)}function ae(e){var n=e.name,t=e.count,r=e.dispatch;return a.a.createElement("div",{className:"alias"},a.a.createElement(re,{name:n,count:t,dispatch:r}))}te.defaultProps={types:[],onClick:function(){}},re.defaultProps={modifier:"+",types:[],activeTags:[],onClick:function(){}};var ce=te;function ie(){var e=Object(u.a)(["\n  ","\n  ","\n"]);return ie=function(){return e},e}function oe(){var e=Object(u.a)(["\n  ","\n"]);return oe=function(){return e},e}var ue=g.a.i(oe(),(function(e){var n=e.color,t=e.size;return"\n    color: ".concat(n,";\n    width: ").concat(t,"px;\n    height: ").concat(t,"px;\n\n    ").concat(ee,":hover & {\n      color: ").concat(C,";\n    }\n\n    ").concat(ee,":active & ,  ").concat(ee,":focus & {\n      color: ").concat("white",";\n    }\n  ")})),se=g.a.span(ie(),(function(e){return e.left?"margin-right: 5px;":""}),(function(e){return e.right?"margin-left: 5px;":""})),le=function(e){var n=e.className,t=e.icon,r=e.color,c=e.size,i=e.onClick,o=e.left,u=e.right;return a.a.createElement(se,{onClick:i,left:o,right:u},a.a.createElement(ue,{className:"fas ".concat(t," ").concat(n),color:r,size:c}))};function fe(e){return a.a.createElement(le,Object.assign({icon:"fa-user"},e))}function pe(e){return a.a.createElement(le,Object.assign({icon:"fa-pen"},e))}function me(e){return a.a.createElement(le,Object.assign({icon:"fa-copyright"},e))}function de(e){return a.a.createElement(le,Object.assign({icon:"fa-plus-circle"},e))}function ge(e){return a.a.createElement(le,Object.assign({icon:"fa-minus-circle"},e))}function he(e){return a.a.createElement(le,Object.assign({icon:"fa-times"},e))}function be(e){return a.a.createElement(le,Object.assign({icon:"fa-expand"},e))}function ve(e){return a.a.createElement(le,Object.assign({icon:"fa-caret-down"},e))}function Ee(e){return a.a.createElement(le,Object.assign({icon:"fa-external-link-alt"},e))}function Oe(e){return a.a.createElement(le,Object.assign({icon:"fa-hashtag"},e))}function je(e){return a.a.createElement(le,Object.assign({icon:"fa-registered"},e))}function xe(e){return a.a.createElement(le,Object.assign({icon:"fa-heart"},e))}function ye(e){var n=e.types,t=e.className,r=e.onClick;switch(n.find((function(e){return!e.match(/^[general|ambiguous]$/)}))){case"character":return a.a.createElement(fe,{className:t,onClick:r,left:!0});case"copyright":return a.a.createElement(me,{className:t,onClick:r,left:!0});case"artist":return a.a.createElement(pe,{className:t,onClick:r,left:!0});default:return a.a.createElement("div",{className:t})}}le.defaultProps={color:"black",size:14},ye.defaultProps={types:[]};var ke=ye;function we(e){var n=Number(e);return n>=1e6?"".concat((n/1e6).toFixed(0),"M"):n>=1e3?"".concat((n/1e3).toFixed(0),"K"):n}function _e(){var e=Object(u.a)(["\n  flex: 0 0 48px;\n  text-align: center;\n"]);return _e=function(){return e},e}function Ce(){var e=Object(u.a)(["\n  display: flex;\n  border-top: 1px grey solid;\n  padding: 2px 0;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(u.a)(["\n  ",";\n  background: white;\n  border-radius: 0 0 3px 3px;\n  color: black;\n  z-index: 1;\n"]);return Se=function(){return e},e}var Te=g.a.div(Se(),(function(e){var n=e.inputRef;return n?"\n      position: absolute;\n      top: ".concat(n.offsetTop+n.clientHeight,"px;\n      left: ").concat(n.offsetLeft.left,"px;\n      width: ").concat(n.clientWidth,"px;"):""}));var Ne=g.a.div(Ce()),Pe=g.a.span(_e());function ze(e){var n=e.name,t=e.posts,r=e.types,c=e.onClick;return a.a.createElement(Ne,{onClick:c},a.a.createElement(Pe,null,a.a.createElement(ke,{types:r})),a.a.createElement("span",{style:{flexGrow:1}},X(n)),a.a.createElement("span",{style:{paddingRight:5}},we(t)," posts"))}var Ae=function(e){var n=e.inputRef,t=e.entries,r=e.onClick;return a.a.createElement(Te,{inputRef:n},t.map((function(e){return a.a.createElement(ze,Object.assign({key:e.name},e,{onClick:function(){return r(e)}}))})))};function Ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Fe(){var e=Object(u.a)(["\n  display: flex;\n  background: ",";\n  ","\n"]);return Fe=function(){return e},e}var Ue=g.a.div(Fe(),"white",(function(e){return e.closed?"border-radius: ".concat("3px",";"):"\n        border-radius: ".concat("3px"," ").concat("3px"," 0 0;\n\n        > ").concat(B," {\n          border-radius: 0 ").concat("3px"," 0 0;\n        }\n\n        > ").concat(J," {\n          border-radius: ").concat("3px"," 0 0 0;\n        }\n      ")}));var Me=function(e){var n=e.dispatch,t=Object(r.useState)(),c=Object(o.a)(t,2),i=c[0],u=c[1],s=Object(r.useState)(""),l=Object(o.a)(s,2),f=l[0],p=l[1],m=Object(r.useState)("+"),d=Object(o.a)(m,2),g=d[0],b=d[1],v=Object(r.useState)([]),E=Object(o.a)(v,2),O=E[0],j=E[1],y=Object(r.useCallback)((function(e){n({type:"ADD_TAG",tag:_({name:e.name,modifier:g,count:e.posts,types:e.types})}),p(""),j([])}),[n,g]);return Object(r.useEffect)((function(){var e=setTimeout((function(){var e;f&&""!==f&&x.getTags((e=f,e.toLowerCase().replace(/ /g,"_"))).then((function(e){j(e)}))}),400);return function(){return clearTimeout(e)}}),[f]),a.a.createElement(Ue,{ref:u,closed:0===O.length},a.a.createElement(q,{type:"modifier",onClick:function(){return b("+"===g?"-":"+")}},g),a.a.createElement(Q,{value:f,setValue:p}),a.a.createElement(q,{type:"add",onClick:function(){if(f&&""!==f.trim()){var e=O.find((function(e){return e.name===f}))||{};y(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ie(t,!0).forEach((function(n){Object(h.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ie(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{name:f}))}}},"Add"),a.a.createElement(Ae,{inputRef:i,entries:O,onClick:function(e){y(e)}}))};function De(){var e=Object(u.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n  margin: ",";\n"]);return De=function(){return e},e}var Re=g.a.div(De(),(function(e){var n=e.padding;return"calc(".concat(n," - ").concat("4px",")")}));function Ge(e){var n=e.tags,t=e.activeTags,r=e.loadAliases,c=e.dispatch,i=e.padding;return a.a.createElement("div",null,a.a.createElement(Re,{padding:i},n.map((function(e){return a.a.createElement(ce,Object.assign({key:"t_"+e.name},e,{activeTags:t,loadAliases:r,dispatch:c}))}))))}Ge.defaultProps={activeTags:[],onItemClick:function(){},onItemItemClick:function(){},padding:"0px"};var Le=Ge,Ve=t(74),He=t.n(Ve);t(95);function We(){var e=Object(u.a)(["\n  margin-left: ",";\n"]);return We=function(){return e},e}function Be(){var e=Object(u.a)(["\n  display: flex;\n"]);return Be=function(){return e},e}var Je=g.a.label(Be()),qe=g.a.span(We(),N);function $e(e){var n=e.children,t=e.initial,r=e.onChange;return a.a.createElement(Je,null,a.a.createElement(He.a,{defaultChecked:t,icons:{checked:null,unchecked:null},onChange:r}),a.a.createElement(qe,null,n))}function Ke(){var e=Object(u.a)(["\n  background: none;\n  border: none;\n  outline: none;\n  color: ",";\n  max-height: 24px;\n  width: ","em;\n  text-align: right;\n  font-size: 14px;\n  margin: 0 0.3em;\n\n  ::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(u.a)(["\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return Qe=function(){return e},e}$e.defaultProps={initial:!1};var Xe=g.a.div(Qe(),N),Ye=g.a.input(Ke(),C,(function(e){var n=e.value;return.57*String(n).length}));function Ze(e){var n=e.options,t=e.dispatch,c=Object(r.useState)(1),i=Object(o.a)(c,2),u=i[0],s=i[1];return a.a.createElement(Xe,null,a.a.createElement($e,{initial:n.infinite,onChange:function(){return t({type:"SET_OPTION",key:"infinite",value:!n.infinite})}},"Infinite Scrolling"),a.a.createElement($e,{initial:Boolean(n.rated),onChange:function(){t({type:"SET_OPTION",key:"rated",value:n.rated?void 0:u})}},n.rated?a.a.createElement("div",{style:{display:"flex"}},"Above",a.a.createElement(Ye,{type:"number",value:u,onChange:function(e){return s(Number(e.target.value))},onBlur:function(e){return t({type:"SET_OPTION",key:"rated",value:Number(e.target.value)})}}),"likes"):"Only show Rated Posts"),a.a.createElement($e,{initial:n.originals,onChange:function(){return t({type:"SET_OPTION",key:"originals",value:!n.originals})}},"Load Original Sizes"))}function en(){var e=Object(u.a)(["\n  font-size: 24px;\n  font-weight: lighter;\n  margin: 0;\n  text-align: center;\n"]);return en=function(){return e},e}function nn(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: lighter;\n  text-align: center;\n  margin: 0;\n"]);return nn=function(){return e},e}var tn=g.a.h1(nn()),rn=g.a.h2(en());var an=function(e){var n=e.size,t=e.children;switch(n){case"large":return a.a.createElement(tn,null,t);case"medium":default:return a.a.createElement(rn,null,t)}};function cn(){var e=Object(u.a)(["\n  padding: ",";\n  background: ",";\n  ",";\n  border-radius: ",";\n\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return cn=function(){return e},e}function on(){var e=Object(u.a)(["\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return on=function(){return e},e}var un=g.a.section(on(),N),sn=g.a.div(cn(),N,S,T,"3px",N);var ln=function(e){var n=e.options,t=e.tags,c=e.dispatch,i=Object(r.useCallback)((function(){x.getPosts(t,0,n.rated).then((function(e){c({type:"SET_POSTS",posts:e.posts.map(_),count:Number(e.count)})}))}),[c,n.rated,t]);return a.a.createElement(un,null,a.a.createElement(an,null,a.a.createElement("label",{htmlFor:"tag-input"},"Search")),a.a.createElement(sn,null,a.a.createElement(Me,{dispatch:c}),t.length>0&&a.a.createElement(Le,{tags:t,activeTags:t,dispatch:c,loadAliases:!0}),a.a.createElement(Ze,{options:n,dispatch:c}),a.a.createElement(q,{type:"block",onClick:i},"Search")))},fn=t(75);t(118);function pn(){var e=Object(u.a)(["\n  ","\n"]);return pn=function(){return e},e}var mn=g.a.img(pn(),"\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n");function dn(e){var n=e.type,t=e.src,r=e.thumbnail_src,c=e.isFullscreen,i=e.onFullscreen,o=e.onClick;return"video"===n?a.a.createElement(fn.Player,{playsInline:!0,fluid:!0,preload:"metadata",poster:r,src:t}):a.a.createElement(a.a.Fragment,null,a.a.createElement(q,{type:"topLeft",onClick:i},c?a.a.createElement(he,{color:"white"}):a.a.createElement(be,{color:"white"})),a.a.createElement(mn,{src:t,alt:t,onClick:o}))}function gn(){var e=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background: ",";\n  padding: ",";\n  ",";\n\n  > span,\n  > a {\n    margin: ",";\n    line-height: 1rem;\n    height: 1rem;\n  }\n"]);return gn=function(){return e},e}function hn(){var e=Object(u.a)(["\n  > "," {\n    padding: ",";\n  }\n\n  overflow: hidden;\n"]);return hn=function(){return e},e}var bn=g.a.div(hn(),Re,"4px"),vn=g.a.div(gn(),S,"4px",T,"4px");var En=function(e){var n=e.rating,t=e.score,r=e.source,c=e.tags,i=e.activeTags,o=e.dispatch;return a.a.createElement(bn,null,a.a.createElement(vn,null,n&&a.a.createElement(On,{value:n}),t&&a.a.createElement(jn,{value:t}),r&&a.a.createElement(xn,{value:r})),a.a.createElement(Le,{tags:c,activeTags:i,dispatch:o,padding:N}))},On=function(e){var n=e.value;return a.a.createElement("span",null,a.a.createElement(je,{color:"white",left:!0}),n[0].toUpperCase())},jn=function(e){var n=e.value;return a.a.createElement("span",null,n,a.a.createElement(xe,{color:"white",right:!0}))};function xn(e){var n=e.value;return n.startsWith("http")?a.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"source"},a.a.createElement(Ee,{color:"red",left:!0}),"Source"):a.a.createElement("span",null,a.a.createElement(Oe,{color:"white",left:!0}),n)}function yn(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  background: ",";\n  ",";\n  border-radius: ",";\n  overflow: hidden;\n  margin-bottom: ",";\n  border-box: border-box;\n"]);return yn=function(){return e},e}var kn=g.a.div(yn(),S,T,"3px","8px");function wn(e){var n=e.id,t=e.media_type,c=e.small_src,i=e.big_src,u=e.thumbnail_src,s=e.rating,l=e.score,f=e.source,p=e.tags,m=e.loadOriginal,d=e.activeTags,g=e.dispatch,h=function(e,n,t,r){var a;return e?a=n:(a="".concat(t,"?").concat(r)).includes("//images")&&(a=a.replace("//images","/images")),a}(m,i,c,n),b=Object(r.useState)(!0),v=Object(o.a)(b,2),E=v[0],O=v[1];return a.a.createElement(kn,null,a.a.createElement(dn,{type:t,src:h,thumbnail_src:u,isFullscreen:!1,onFullscreen:function(){return g({type:"FOCUS_POST",id:n})},onClick:function(){return O(!E)}}),!E&&a.a.createElement(En,{rating:s,score:l,source:f,tags:p,activeTags:d,dispatch:g}))}function _n(){var e=Object(u.a)([""]);return _n=function(){return e},e}var Cn=g.a.div(_n());var Sn=function(e){var n=e.posts,t=e.activeTags,r=e.loadOriginal,c=e.dispatch;return a.a.createElement(Cn,null,n.map((function(e){return a.a.createElement(wn,Object.assign({key:"p_".concat(e.id)},e,{loadOriginal:r,activeTags:t,dispatch:c}))})))};function Tn(){var e=Object(u.a)(["\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return Tn=function(){return e},e}var Nn=g.a.section(Tn(),N),Pn=!0;var zn=function(e){var n=e.options,t=e.dispatch,c=e.tags,i=e.results,o=Object(r.useCallback)((function(){x.getPosts(c,i.page+1,n.rated).then((function(e){t({type:"ADD_POSTS",posts:e.posts.map(_)}),Pn=!0}))}),[t,n.rated,i.page,c]);return window.onscroll=Object(r.useCallback)((function(){n.infinite&&Pn&&window.innerHeight+document.documentElement.scrollTop>=document.documentElement.scrollHeight-window.innerHeight&&(Pn=!1,o())}),[o,n.infinite]),a.a.createElement(Nn,{className:"results"},a.a.createElement(an,null,we(i.count)," results"),a.a.createElement(Sn,{posts:i.posts,activeTags:c,loadOriginal:n.originals,dispatch:t}),!n.infinite&&a.a.createElement(q,{type:"block",onClick:o},"Load More"))};function An(e){var n=e.tags,t=e.options,r=e.results,c=e.dispatch;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ln,{options:t,tags:n,dispatch:c}),r.posts.length>0&&a.a.createElement(zn,{options:t,dispatch:c,tags:n,results:r}))}function In(){var e=Object(u.a)(["\n  position: fixed;\n  left: 100%;\n  right: 100%;\n"]);return In=function(){return e},e}function Fn(){var e=Object(u.a)(["\n  position: fixed;\n  left: 0;\n  bottom: 0;\n"]);return Fn=function(){return e},e}function Un(){var e=Object(u.a)(["\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  overflow: scroll;\n  background-color: ",";\n"]);return Un=function(){return e},e}var Mn=g.a.div(Un(),"#121212"),Dn=g.a.div(Fn()),Rn=g.a.img(In());function Gn(e){var n=e.focusedPost,t=e.posts,c=e.dispatch,i=t.findIndex((function(e){return e.id===n})),o=t[i],u=o.big_src,s=o.media_type,l=o.thumbnail_src,f=t[i>0?i-1:i].big_src,p=t[i<t.length-1?i+1:i].big_src,m=Object(r.useCallback)((function(){return i>0&&c({type:"FOCUS_POST",id:t[i-1].id})}),[i,c,t]),d=Object(r.useCallback)((function(){return i<t.length-1&&c({type:"FOCUS_POST",id:t[i+1].id})}),[i,c,t]);return a.a.createElement(Mn,null,a.a.createElement(dn,{type:s,src:u,thumbnail_src:l,isFullscreen:!0,onFullscreen:function(){return c({type:"UNFOCUS_POST"})},onClick:function(){}}),a.a.createElement(Dn,null,a.a.createElement(ge,{onClick:m,color:"white"}),a.a.createElement(de,{onClick:d,color:"white"})),a.a.createElement(Rn,{src:f}),a.a.createElement(Rn,{src:p}))}var Ln=function(e){var n=e.size;return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 12.7 12.7"},a.a.createElement("g",{transform:"translate(0,-284.3)"},a.a.createElement("circle",{id:"path18",cx:"6.3499999",cy:"290.65002",fill:"none",stroke:C,strokeWidth:"0.50848764",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1",r:"6.0957561"}),a.a.createElement("text",{fontStyle:"normal",fontWeight:"normal",fontSize:"8.3113203px",fontFamily:"sansSerif",letterSpacing:"0px",wordSpacing:"0px",fill:C,fillOpacity:"1",x:"2.1363549",y:"289.02704",id:"text4533",transform:"scale(0.98538224,1.0148346)"},a.a.createElement("tspan",{id:"tspan4531",x:"2.1363549",y:"289.02704",fontStyle:"normal",fontVariant:"normal",fontWeight:"300",fontStretch:"normal",fontFamily:"Calibri",fill:C,fillOpacity:"1"},"34"))))};function Vn(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Vn=function(){return e},e}function Hn(){var e=Object(u.a)(["\n  background: ",";\n  ",";\n  padding: "," 0;\n  margin-bottom: ",";\n"]);return Hn=function(){return e},e}function Wn(){var e=Object(u.a)(["\n  width: 1px;\n  height: 32px;\n  margin: 0 ",";\n  background: ",";\n"]);return Wn=function(){return e},e}function Bn(){var e=Object(u.a)(["\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return Bn=function(){return e},e}var Jn=g.a.header(Bn(),N),qn=g.a.div(Wn(),N,"white"),$n=g.a.div(Hn(),S,T,N,"8px"),Kn=g.a.nav(Vn());var Qn=function(e){var n=e.activeMenu,t=e.dispatch;return a.a.createElement(Jn,null,a.a.createElement($n,null,a.a.createElement(an,{size:"large"},a.a.createElement(Ln,{size:32}),a.a.createElement(qn,null),a.a.createElement("span",{style:{marginTop:2}},"Browse ",a.a.createElement("a",{href:"https://rule34.xxx"},"Rule34")))),a.a.createElement(Kn,null,a.a.createElement(q,{type:"menu",active:"search"===n,onClick:function(){return t({type:"SET_ACTIVE_MENU",menu:"search"})}},"Search"),a.a.createElement(q,{type:"menu",active:"help"===n,onClick:function(){return t({type:"SET_ACTIVE_MENU",menu:"help"})}},"Help"),a.a.createElement(q,{type:"menu",active:"settings"===n,onClick:function(){return t({type:"SET_ACTIVE_MENU",menu:"settings"})}},"Settings")))},Xn=t(19),Yn=t(16);function Zn(e,n){switch(n.type){case"ADD_TAG":return nt(e,n.tag);case"REMOVE_TAG":return tt(e,n.tag);case"TOGGLE_TAG":return rt(e,n.tag);case"ADD_POSTS":return at(e,n.posts);case"SET_POSTS":return ct(e,n.posts,n.count);case"SET_OPTION":return it(e,n.key,n.value);case"FOCUS_POST":return ot(e,n.id);case"UNFOCUS_POST":return ot(e,void 0);case"SET_ACTIVE_MENU":return ut(e,n.menu);default:throw new Error("Unrecognized Action: ".concat(n.type))}}function et(e,n){return e.findIndex((function(e){return e.name===n.name}))}var nt=function(e,n){return Object(Yn.a)(e,(function(t){var r=et(e.tags,n);t.tags=Object(Xn.a)(e.tags),-1!==r?t.tags[r]=n:t.tags=[].concat(Object(Xn.a)(t.tags),[n])}))},tt=function(e,n){return Object(Yn.a)(e,(function(t){var r=et(e.tags,n);-1!==r&&(t.tags=Object(Xn.a)(e.tags),t.tags.splice(r,1))}))},rt=function(e,n){return-1!==et(e.tags,n)?tt(e,n):nt(e,n)},at=function(e,n){return Object(Yn.a)(e,(function(t){t.results.posts=[].concat(Object(Xn.a)(e.results.posts),Object(Xn.a)(n)),t.results.page=e.results.page+1}))},ct=function(e,n,t){return Object(Yn.a)(e,(function(e){e.results.posts=Object(Xn.a)(n),e.results.count=t,e.results.page=0}))},it=function(e,n,t){return Object(Yn.a)(e,(function(e){e.options[n]=t}))},ot=function(e,n){return Object(Yn.a)(e,(function(e){e.context.focusedPost=n}))},ut=function(e,n){return Object(Yn.a)(e,(function(e){e.context.activeMenu=n}))},st={results:{posts:[],page:0,count:void 0},context:{focusedPost:void 0,activeMenu:"search"},tags:[],options:{infinite:!0,rated:void 0,originals:!1}};function lt(){var e=function(e){var n=localStorage.getItem("state");return[null!==n&&"undefined"!==n?JSON.parse(n):e,function(e){return localStorage.setItem("state",JSON.stringify(e))}]}(st),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(r.useReducer)(Zn,t),i=Object(o.a)(c,2),u=i[0],s=i[1];return Object(r.useEffect)((function(){a(u)}),[a,u]),[u,s]}t(119);function ft(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  justify-content: space-around;\n  padding: ",";\n"]);return ft=function(){return e},e}var pt=g.a.footer(ft(),N);var mt=function(){return a.a.createElement(pt,null,a.a.createElement(q,{type:"invisible"},a.a.createElement("a",{href:"https://github.com/kurozenzen/r34-react"},"Github")),a.a.createElement(q,{type:"invisible"},a.a.createElement("a",{href:"https://github.com/kurozenzen/r34-react/issues/new?template=bug_report.md"},"Report a bug")),a.a.createElement(q,{type:"invisible"},a.a.createElement("a",{href:"https://github.com/kurozenzen/r34-react/issues/new?template=feature_request.md"},"Feature request")))};function dt(e){e.state,e.dispatch;return a.a.createElement("main",null,"Hi")}function gt(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: strech;\n  min-height: 100%;\n  background: ",";\n  color: ",";\n\n  font-size: 14px;\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return gt=function(){return e},e}function ht(){var e=Object(u.a)(["\n  flex-grow: 1;\n  align-self: strech;\n  display: flex;\n  flex-direction: column;\n  padding: 0 16px;\n\n  > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return ht=function(){return e},e}var bt=g.a.main(ht(),N),vt=g.a.div(gt(),"#121212","white",C,N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement((function(){var e=lt(),n=Object(o.a)(e,2),t=n[0],r=n[1],c=function(e,n,t){switch(e){case"reader":return a.a.createElement(Gn,{state:n,dispatch:t});case"help":return a.a.createElement(d,{state:n,dispatch:t});case"settings":return a.a.createElement(dt,{state:n,dispatch:t});case"search":default:return a.a.createElement(An,{tags:n.tags,options:n.options,results:n.results,dispatch:t})}}(t.context.activeMenu,t,r);return a.a.createElement(vt,null,a.a.createElement(Qn,{activeMenu:t.context.activeMenu,dispatch:r}),a.a.createElement(bt,null,c),a.a.createElement(mt,null))}),null),document.getElementById("app-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},81:function(e,n,t){e.exports=t(137)},86:function(e,n,t){},91:function(e,n,t){},95:function(e,n,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.66cc76d4.chunk.js.map