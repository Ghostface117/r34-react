(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(85)},35:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},73:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(24),c=a.n(r),i=(a(35),a(2)),o=a(3),l=a(5),u=a(4),m=a(6),h=a(29),d=a(1),g=a(9),p=a(25),f=a.n(p),b=function(e){return s.a.createElement("label",{className:"toggle-wrapper"},s.a.createElement(f.a,{defaultChecked:e.initial,icons:{checked:null,unchecked:null},onChange:e.onChange}),s.a.createElement("span",{className:"toggle-text"},e.text))},v=(a(43),a(45),[]),E=function(e){v.push(e)},k=function(e){v.splice(v.indexOf(e),1)},j=function(e){return v.includes(e)},y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={name:e.name,count:e.count,modifier:e.modifier},a.onClick=e.onClick,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("span",{className:"badge badge-tag"+(j(this.state.name)?" active":" ")+("-"===this.state.modifier?" exclude":" "),onClick:this.onClick,onTouchEnd:this.releaseFocus},this.state.count?this.state.name+" ("+this.state.count+")":this.state.name)}}]),t}(n.Component);function O(e){return s.a.createElement("div",{className:"tag-list"},e.tags.map(function(t){return s.a.createElement(y,{key:"t_"+t.name,name:t.name,count:t.posts,modifier:t.modifier,onClick:function(){return e.onClick(t)}})}))}a(47);var S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={id:e.id,media_type:e.media_type,media_src:e.media_src,rating:e.rating,score:e.score,source:e.source,tags:e.tags,collapsed:!0},a.onTagClick=e.onTagClick,a.toggleDetails=a.toggleDetails.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"toggleDetails",value:function(e){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return s.a.createElement("li",{id:this.state.id,className:"list-group-item post gray"},s.a.createElement(N,{type:this.state.media_type,src:this.state.media_src,onClick:this.toggleDetails}),s.a.createElement("div",{className:"details collapse"+(this.state.collapsed?"":".show")},s.a.createElement("div",{className:"d-flex justify-content-between info-bar"},s.a.createElement(w,{value:this.state.rating}),s.a.createElement(T,{value:this.state.score}),s.a.createElement(x,{value:this.state.source})),s.a.createElement("div",{className:"pl-1"},s.a.createElement(O,{tags:this.state.tags,onClick:this.onTagClick}))))}}]),t}(s.a.Component);function C(e){return s.a.createElement("ul",{className:"list-group list-group-flush post-list"},e.posts.map(function(t){return s.a.createElement(S,{key:"p_"+t.id,id:t.id,media_type:t.type,media_src:t.sample_url,rating:t.rating,score:t.score,source:t.source,tags:t.tags,onTagClick:e.onTagClick})}))}function N(e){var t=!1;return"image"===e.type?s.a.createElement("img",{src:e.src,alt:e.src,className:"img-fluid",onClick:e.onClick}):"video"===e.type?s.a.createElement("video",{controls:!0,loop:!0,src:e.src,alt:e.src,className:"img-fluid",onClick:e.onClick,onTouchMove:function(e){t=!0},onTouchEnd:function(a){t||e.onClick(a),t=!1}}):null}function w(e){return s.a.createElement("span",{className:"rating"},e.value[0].toUpperCase())}function T(e){return s.a.createElement("span",{className:"score"},e.value)}function x(e){return e.value?e.value.startsWith("http")?s.a.createElement("a",{href:e.value,target:"_blank",rel:"noopener noreferrer",className:"source"},"Source"):s.a.createElement("span",{className:"source"},e.value):null}var P=a(16),_=a.n(P),R=a(17),D=a(18),M=a.n(D),q=function(e){return M.a.parse(e).tags.split("+").map(function(e){var t="",a=e;return"-"===e[0]&&(t=e[0],a=a.substr(1)),{name:a,modifier:t}})},z=function(e){return M.a.stringify({tags:e.map(function(e){return(e.modifier?e.modifier:"")+e.name}).join("+")})},F="https://custom-r34-api.herokuapp.com",H=F;fetch(F).then(function(){return H=F}).catch(function(){return H="https://r34-api-clone.herokuapp.com"});var I={getTags:function(){var e=Object(R.a)(_.a.mark(function e(t){var a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(H+"/tags?limit=20&name="+t+"*&order_by=posts");case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getPosts:function(){var e=Object(R.a)(_.a.mark(function e(t){var a,n,s=arguments;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,fetch(H+"/posts?pid="+a+"&limit=20&"+z(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},A=a(26),B=a.n(A);a(73);function L(e){return e.name}function V(e){return s.a.createElement("span",null,e.name)}var G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this))).onValueChange=function(e,t){var n=t.newValue;t.method;a.setState({value:n})},a.onModifierChange=function(e){a.setState({modifier:e.target.value})},a.onSuggestionsFetchRequested=function(e){var t=e.value;I.getTags(t.replace(a.state.modifier,"")).then(function(e){a.setState({suggestions:e})})},a.onSuggestionsClearRequested=function(){a.setState({cachedSuggestions:a.state.suggestions,suggestions:[]})},a.state={value:"",modifier:"",suggestions:[],cachedSuggestions:[],onSubmit:function(t){e.onSubmit({name:a.state.value,modifier:a.state.modifier}),a.setState({value:""}),t.preventDefault()}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.suggestions,n={placeholder:"Search for tags",value:t,onChange:this.onValueChange};return s.a.createElement("form",{onSubmit:this.state.onSubmit,className:"d-flex input-group tag-selector"},s.a.createElement("div",{className:"input-group-prepend left-append"},s.a.createElement("select",{className:"form-control select-modifier",value:this.state.modifier,onChange:this.onModifierChange},s.a.createElement("option",null,"+"),s.a.createElement("option",null,"-"))),s.a.createElement(B.a,{suggestions:a,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:L,renderSuggestion:V,inputProps:n}),s.a.createElement("div",{className:"input-group-append right-append"},s.a.createElement("input",{type:"submit",value:"Add",className:"btn btn-red btn-add-tag"})))}}]),t}(n.Component),U=!0,W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={tags:[],suggestions:[],posts:[],searchTerm:"",pageNumber:1,infiniteScroll:!1},window.onscroll=function(){a.state.infiniteScroll&&U&&window.innerHeight+document.documentElement.scrollTop>=document.documentElement.scrollHeight-window.innerHeight&&(U=!1,console.log("locked"),a.addPosts())},a.handleAddTag=a.handleAddTag.bind(Object(d.a)(Object(d.a)(a))),a.handleSearch=a.handleSearch.bind(Object(d.a)(Object(d.a)(a))),a.handleToggleTag=a.handleToggleTag.bind(Object(d.a)(Object(d.a)(a))),a.handleLoadMore=a.handleLoadMore.bind(Object(d.a)(Object(d.a)(a))),a.onInfiniteScrollChange=a.onInfiniteScrollChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.onpopstate=this.handleBack.bind(this),this.refreshPage()}},{key:"refreshPage",value:function(){this.getTagsFromUrl(),this.state.tags.length>0&&this.updatePosts()}},{key:"getTagsFromUrl",value:function(){if(this.props.location.search){var e=q(this.props.location.search)||[];e.forEach(function(e){return E(e.name)}),this.setState({tags:e})}}},{key:"handleBack",value:function(e){console.log("back"),this.refreshPage()}},{key:"handleAddTag",value:function(e){var t=this.state;t.tags.some(function(t){return t.name===e.name})?t.tags.find(function(t){return t.name===e.name}).modifier=e.modifier:(t.tags.push(e),E(e.name),this.setState(t))}},{key:"handleToggleTag",value:function(e){var t=this.state;t.tags.some(function(t){return t.name===e.name})?(t.tags.splice(t.tags.indexOf(e),1),k(e.name)):(t.tags.push(e),E(e.name)),this.setState(t)}},{key:"handleSearch",value:function(e){this.updatePosts(),e.preventDefault()}},{key:"handleLoadMore",value:function(e){this.addPosts(),e.preventDefault()}},{key:"onInfiniteScrollChange",value:function(e){this.setState({infiniteScroll:!this.state.infiniteScroll})}},{key:"updatePosts",value:function(){var e=this;I.getPosts(this.state.tags).then(function(t){e.setState({posts:t.map(function(e){var t=e;return t.tags=e.tags.map(function(e){return{name:e}}),t}),pageNumber:1}),e.props.history.replace(e.props.location.pathname+"?"+z(e.state.tags))})}},{key:"addPosts",value:function(){var e=this,t=this.state.pageNumber+1;I.getPosts(this.state.tags,t).then(function(a){var n,s=e.state,r=a.map(function(e){var t=e;return t.tags=e.tags.map(function(e){return{name:e}}),t});(n=s.posts).push.apply(n,Object(h.a)(r)),s.pageNumber=t,e.setState(s),U=!0,console.log("unlocked")})}},{key:"render",value:function(){return s.a.createElement("main",null,s.a.createElement("section",{className:"search"},s.a.createElement("h3",{className:"centered"},"Search"),s.a.createElement(G,{onSubmit:this.handleAddTag,className:"centered"}),this.state.tags.length>0?s.a.createElement("label",null,"Tags:",s.a.createElement(O,{tags:this.state.tags,onClick:this.handleToggleTag})):s.a.createElement("div",{className:"mb-1"}),s.a.createElement(b,{text:"Infinite Scroll",initial:this.state.infiniteScroll,onChange:this.onInfiniteScrollChange}),s.a.createElement("form",{onSubmit:this.handleSearch},s.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-block btn-red"}))),this.state.posts.length>0?s.a.createElement("section",{className:"results"},s.a.createElement("h3",{className:"centered"},"Results"),s.a.createElement(C,{posts:this.state.posts,onTagClick:this.handleToggleTag}),s.a.createElement("form",{className:"mt-3",onSubmit:this.handleLoadMore},s.a.createElement("input",{type:"submit",value:"Load more",className:"btn btn-block btn-red"}))):null)}}]),t}(n.Component),J=Object(g.e)(W),$=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("main",null,s.a.createElement("p",null,"Helpful things")))}}]),t}(n.Component),K=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("header",null,s.a.createElement("h1",null,"404 - not found")),s.a.createElement("main",null,s.a.createElement("p",null,"Go away")))}}]),t}(n.Component),Q=a(15),X=(a(81),a(83),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(Q.a,{basename:"/r34-react"},s.a.createElement("header",{className:"centered"},s.a.createElement("h1",{className:"centered"},"Browse ",s.a.createElement("a",{href:"https://rule34.xxx"},"Rule34")),s.a.createElement("div",{className:"container d-flex justify-content-center menu-bar"},s.a.createElement(Q.b,{to:"/",className:"menu-item"},"Search"),s.a.createElement(Q.b,{to:"/help",className:"menu-item"},"Help"))),s.a.createElement(g.c,null,s.a.createElement(g.a,{exact:!0,path:"/",component:J}),s.a.createElement(g.a,{exact:!0,path:"/help",component:$}),s.a.createElement(g.a,{component:K})),s.a.createElement("div",{className:"spacer"}),s.a.createElement("footer",null,s.a.createElement("small",null,s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("p",null,s.a.createElement("a",{href:"https://github.com/kurozenzen/r34"},"Github Repository"))),s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("p",null,"Please, if you notice ",s.a.createElement("a",{href:"https://github.com/kurozenzen/r34/issues/new?template=bug_report.md"}," something isn't right"),", or you ",s.a.createElement("a",{href:"https://github.com/kurozenzen/r34/issues/new?template=feature_request.md"},"want a feature")," to be implemented take the time to let me know.")),s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("p",null,"Hosted with Github Pages.")))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(X,null),document.getElementById("app-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.88c24d35.chunk.js.map