(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/logo.3795f66d.png"},16:function(e,a,t){e.exports=t.p+"static/media/spinner.235b9b3e.gif"},18:function(e,a,t){e.exports=t(42)},24:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),l=t.n(c),i=t(3),s=t.n(i),u=t(14),m=t(2),o=(t(24),t(15)),E=t.n(o),d=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:E.a,alt:""})))},p=function(e){var a=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:a.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,a.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:")," ",a.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null," Breaking Bad Season Appearances:")," ",a.appearance.join(",")),r.a.createElement("li",null,r.a.createElement("strong",null,"Better Call Saul Season Appearances:")," ",a.better_call_saul_appearance.join(",")),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",a.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday:")," ",a.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",a.status)))))},f=t(16),g=t.n(f),b=function(){return r.a.createElement("img",{src:g.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},h=function(e){var a=e.items;return e.isLoading?r.a.createElement(b,null):r.a.createElement("section",{className:"cards"},a.map((function(e){return r.a.createElement(p,{key:e.char_id,item:e})})))},v=function(e){var a=e.getQuery,t=Object(n.useState)(""),c=Object(m.a)(t,2),l=c[0],i=c[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Characters",value:l,onChange:function(e){return t=e.target.value,i(t),void a(t);var t},autoFocus:!0})))},j=t(17),k=t.n(j),y=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!0),i=Object(m.a)(l,2),o=i[0],E=i[1],p=Object(n.useState)(""),f=Object(m.a)(p,2),g=f[0],b=f[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()("https://www.breakingbadapi.com/api/characters?name=".concat(g));case 2:a=e.sent,c(a.data),E(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g]),r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement(v,{getQuery:function(e){return b(e)}}),r.a.createElement(h,{isLoading:o,items:t}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e636bbe3.chunk.js.map