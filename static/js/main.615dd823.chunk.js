(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/logo.3795f66d.png"},16:function(e,a,t){e.exports=t.p+"static/media/spinner.235b9b3e.gif"},18:function(e,a,t){e.exports=t(42)},24:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),l=t.n(c),u=t(3),i=t.n(u),s=t(14),m=t(2),o=(t(24),t(15)),p=t.n(o),E=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:p.a,alt:""})))},d=function(e){var a=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:a.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,a.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:")," ",a.portrayed),a.appearance&&a.appearance.length?r.a.createElement("li",null,r.a.createElement("strong",null," Breaking Bad Season Appearances:")," ",a.appearance.join(",")):null,a.better_call_saul_appearance&&a.better_call_saul_appearance.length?r.a.createElement("li",null,r.a.createElement("strong",null,"Better Call Saul Season Appearances:")," ",a.better_call_saul_appearance.join(",")):null,r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",a.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Occupation:")," ",a.occupation),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",a.status)))))},g=t(16),f=t.n(g),b=function(){return r.a.createElement("img",{src:f.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},h=function(e){var a=e.items;return e.isLoading?r.a.createElement(b,null):r.a.createElement("section",{className:"cards"},a.map((function(e){return r.a.createElement(d,{key:e.char_id,item:e})})))},v=function(e){var a=e.getQuery,t=Object(n.useState)(""),c=Object(m.a)(t,2),l=c[0],u=c[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Characters",value:l,onChange:function(e){return t=e.target.value,u(t),void a(t);var t},autoFocus:!0})))},j=t(17),k=t.n(j),N=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!0),u=Object(m.a)(l,2),o=u[0],p=u[1],d=Object(n.useState)(""),g=Object(m.a)(d,2),f=g[0],b=g[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()("https://www.breakingbadapi.com/api/characters?name=".concat(f));case 2:a=e.sent,c(a.data),p(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]),r.a.createElement("div",{className:"container"},r.a.createElement(E,null),r.a.createElement(v,{getQuery:function(e){return b(e)}}),r.a.createElement(h,{isLoading:o,items:t}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.615dd823.chunk.js.map