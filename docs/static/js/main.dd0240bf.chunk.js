(this["webpackJsonpsourdough-converter"]=this["webpackJsonpsourdough-converter"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),o=n.n(l),c=n(4),u=n(1),i=(n(10),n(11),function(e){var t=e.water,n=e.flour,r=e.setWater,l=e.setFlour,o=function(e){return function(t){var n=parseFloat(t.currentTarget.value||"0");console.log(n),e(n)}},c=function(e){var t=e.currentTarget;setTimeout((function(){t.select()}),100)};return a.createElement("div",{className:"half",id:"calculator"},a.createElement("form",{autoComplete:"false"},a.createElement("label",null,a.createElement("span",{className:"label-text"},"Original recipe flour (g)"),a.createElement("input",{value:n||" ",name:"water",onChange:o(l),id:"flour",type:"number",inputMode:"decimal",pattern:"[0-9]*",min:0,onFocus:c,onClick:c})),a.createElement("label",null,a.createElement("span",{className:"label-text"},"Original recipe water (g)"),a.createElement("input",{value:t||" ",name:"water",onChange:o(r),type:"number",inputMode:"decimal",pattern:"[0-9]*",min:0,onFocus:c,onClick:c}))))}),s=(n(12),function(e){return(e||0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),m=["https://cnz.to/tips-tricks/converting-yeast-based-recipes-to-use-a-sourdough-starter/","http://www.wildyeastblog.com/going-wild/","http://www.thefreshloaf.com/node/34811/how-use-sourdough-starter-place-yeast"].map((function(e){return a.createElement("li",{key:e},(t=e,a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank"},t)));var t})),d=function(e){var t=e.flour,n=void 0===t?0:t,r=e.water,l=void 0===r?0:r,o=l/n*100,c=(n+l)/6,u=s(Math.round(n-c/2)),i=s(Math.round(l-c/2)),d=[{data:s(Math.round(c)),label:"Starter"},{data:i,label:"Water"},{data:u,label:"Flour"}];return a.createElement(a.Fragment,null,n>0&&l>0&&a.createElement("dl",{className:"half",title:"Modified recipe"},a.createElement("dt",null,"Baker's percentage"),a.createElement("dd",null,a.createElement("strong",null,o,"%")),d.map((function(e){return a.createElement(a.Fragment,{key:e.label},a.createElement("dt",null,e.label),a.createElement("dd",null,a.createElement("strong",null,e.data,"g")))})),a.createElement("dt",null,"Yeast"),a.createElement("dd",null,a.createElement("strong",null,"0g")),a.createElement("dt",null,"Other ingredients"),a.createElement("dd",null,a.createElement("i",null,"no change"))),a.createElement("p",null,"Note: sourdough starters take longer than dried yeast! You'll probably need to increase the fermentation time in your desired recipe."),a.createElement("p",null,"See also:"),a.createElement("ul",null,m))},g=function(){var e=r.a.useState(),t=Object(u.a)(e,2),n=t[0],a=t[1],l=r.a.useState(),o=Object(u.a)(l,2),s=o[0],m=o[1],g={flour:n,water:s},p=Object(c.a)({},g,{setFlour:a,setWater:m});return r.a.createElement("div",{id:"App"},r.a.createElement("h1",null,"Sourdough converter"),r.a.createElement(i,p),r.a.createElement(d,g))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.dd0240bf.chunk.js.map