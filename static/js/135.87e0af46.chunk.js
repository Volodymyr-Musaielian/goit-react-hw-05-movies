"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var t=r(861),a=r(439),c=r(757),s=r.n(c),i=r(791),u=r(128),o=r(689),l=r(87),d="MovieDetails_backBtn__rLQ3F",p="MovieDetails_link__U+v+7",f="MovieDetails_detailsContainer__Y0Fjr",v=r(629),h=r(184),x=function(){var e,n,r=(0,o.TH)(),c=(0,i.useRef)(null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies"),x=(0,i.useState)({}),j=(0,a.Z)(x,2),m=j[0],w=j[1],g=(0,o.UO)().movieId;if((0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.Y5(g);case 3:n=e.sent,w(n),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),m){var k=m.title,_=m.popularity,b=m.overview,y=m.genres,Z=m.poster_path;return(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("div",{className:d,children:(0,h.jsxs)(l.rU,{to:c.current,className:p,children:[(0,h.jsx)(u.jTe,{size:"16"}),"Go back"]})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(Z),alt:k,width:"300"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:k}),(0,h.jsxs)("p",{children:["User Score: ",_?_.toFixed(0):"N/A"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:b}),(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("ul",{children:y&&y.map((function(e){return(0,h.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:"Additional informaition"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]}),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(o.j3,{})})]})]})}}},629:function(e,n,r){r.d(n,{Y5:function(){return l},bI:function(){return o},r7:function(){return p},uV:function(){return d},wr:function(){return u}});var t=r(861),a=r(757),c=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="c86b406e522b33bfd5050d3d09fcff0b",u=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/all/day?api_key=".concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n,r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(i,"&include_adult=false&query=").concat(n,"&language=en-US&page=").concat(r));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.87e0af46.chunk.js.map