(this["webpackJsonpsourdough-converter"]=this["webpackJsonpsourdough-converter"]||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),o=n.n(l),c=n(12),u=n(5),i=n(2),m=function(e){var t=e.water,n=e.flour,r=e.setWater,l=e.setFlour,o=function(e){return function(t){var n=parseFloat(t.currentTarget.value||"0");console.log(n),e(n)}};return a.createElement("div",{id:"calculator"},a.createElement(i.c,null,a.createElement(i.d,null,a.createElement(i.g,{htmlFor:"flour"},"Original recipe flour (g)"),a.createElement(i.f,{value:n,name:"flour",onChange:o(l),id:"flour",type:"number",inputMode:"decimal",pattern:"[0-9]*",min:0})),a.createElement(i.d,null,a.createElement(i.g,{htmlFor:"water"},"Original recipe water (g)"),a.createElement(i.f,{value:t,name:"water",onChange:o(r),type:"number",inputMode:"decimal",pattern:"[0-9]*",min:0}))))},d=(n(20),function(e){return(e||0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),s=function(e){var t=e.flour,n=void 0===t?0:t,r=e.water,l=void 0===r?0:r,o=(l/n*100).toFixed(2),c=(n+l)/6,u=d(Math.round(n-c/2)),i=d(Math.round(l-c/2)),m=[{data:d(Math.round(c)),label:"Starter"},{data:i,label:"Water"},{data:u,label:"Flour"}];return a.createElement(a.Fragment,null,a.createElement("dl",{title:"Modified recipe"},a.createElement("dt",null,"Baker's percentage"),a.createElement("dd",null,a.createElement("strong",null,o,"%")),m.map((function(e){return a.createElement(a.Fragment,{key:e.label},a.createElement("dt",null,e.label),a.createElement("dd",null,a.createElement("strong",null,e.data,"g")))})),a.createElement("dt",null,"Yeast"),a.createElement("dd",null,a.createElement("strong",null,"0g")),a.createElement("dt",null,"Other ingredients"),a.createElement("dd",null,a.createElement("i",null,"no change"))))},E=["https://cnz.to/tips-tricks/converting-yeast-based-recipes-to-use-a-sourdough-starter/","http://www.wildyeastblog.com/going-wild/","http://www.thefreshloaf.com/node/34811/how-use-sourdough-starter-place-yeast"].map((function(e){return r.a.createElement("li",{key:e},(t=e,r.a.createElement(i.h,{href:t},t)));var t})),g=function(){var e=r.a.useState(),t=Object(u.a)(e,2),n=t[0],a=t[1],l=r.a.useState(),o=Object(u.a)(l,2),d=o[0],g=o[1],h={flour:n,water:d},f=Object(c.a)({},h,{setFlour:a,setWater:g}),p=Boolean(n&&n>0&&d&&d>0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement(i.b,null),r.a.createElement(i.i,null,r.a.createElement(i.c,{spacing:16},r.a.createElement(i.d,null,r.a.createElement(i.e,null,"Sourdough converter")),r.a.createElement(i.d,{size:p?8:12},r.a.createElement(m,f)),p&&r.a.createElement(i.d,{size:4},r.a.createElement(s,h)),r.a.createElement(i.d,null,r.a.createElement(i.j,null,"Note: sourdough starters take longer than dried yeast! You'll probably need to increase the fermentation time in your desired recipe."),r.a.createElement(i.j,null,"See also:"),r.a.createElement("ul",null,E)),r.a.createElement(i.d,null,r.a.createElement(i.j,{margins:!1,style:{textAlign:"right",fontSize:"var(--clear-font-size-label)"}},"Built with ",r.a.createElement(i.h,{href:"https://chadlavi.github.io/clear/"},"Clear"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.84311c50.chunk.js.map