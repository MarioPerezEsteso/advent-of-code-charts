(this["webpackJsonpAdvent-of-Code-Charts"]=this["webpackJsonpAdvent-of-Code-Charts"]||[]).push([[0],{146:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),c=a.n(n),o=a(39),s=a.n(o),i=(a(46),a(2)),l=a(40),d=function(e){var t=e.data;return Object(r.jsx)("div",{children:Object(r.jsx)(l.Line,{data:t,options:{responsive:!0,title:{display:!0,text:"\ud83d\udcc8 Leaderboard Chart"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"\ud83d\udcc5 Day of problem"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"\u2b50 Stars"}}]}}})})},b=function(e){var t=e.dataHandler,a=Object(n.useState)("{}"),c=Object(i.a)(a,2),o=c[0],s=c[1];return Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsxs)("label",{htmlFor:"exampleFormControlTextarea1",children:["Enter your leaderboard data as JSON",Object(r.jsx)("br",{}),"Get it by appending a ",Object(r.jsx)("code",{children:".json"})," at the end of your leaderboard page:",Object(r.jsx)("br",{}),Object(r.jsxs)("small",{children:["https://adventofcode.com/2020/leaderboard/private/view/",Object(r.jsx)("code",{children:"your-leaderboard-id"}),".json"]})]}),Object(r.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"10",onChange:function(e){s(e.target.value),t(JSON.parse(o))},onPaste:function(e){s(e.clipboardData.getData("text/plain")),t(JSON.parse(o))},defaultValue:o})]})},j=function(e){var t=(16777215&function(e){for(var t=0,a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);return t}(e+"")).toString(16).toUpperCase();return"#"+"00000".substring(0,6-t.length)+t},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ASC",a="ASC"==t?1:-1;return function(t,r){return-1==a?r[e].localeCompare(t[e]):t[e].localeCompare(r[e])}},f=function(e){var t={labels:[],datasets:[]};if(!("members"in e))return t;var a=Object.entries(e.members);if(0===a.length)return t;var r={};a.forEach((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];Object.entries(n.completion_day_level).forEach((function(e){var t=Object(i.a)(e,2),n=t[0],c=t[1];"1"!==n&&(n in r||(r[n]={},r[n][1]={},r[n][2]={}),["1","2"].forEach((function(e){e in c&&(r[n][e][c[e].get_star_ts]=a)})))}))}));var n={};return a.forEach((function(e){var t=Object(i.a)(e,2),a=t[0];t[1];n[a]={},Object.keys(r).sort().forEach((function(e){n[a][e]=0}))})),Object.entries(r).forEach((function(e){var t=Object(i.a)(e,2),r=t[0],c=t[1];["1","2"].forEach((function(e){var t=a.length;Object.keys(c[e]).sort().forEach((function(a){var o=c[e][a];n[o][r]+=t--}))}))})),t.labels=Object.keys(r),Object.entries(n).forEach((function(a){var r=Object(i.a)(a,2),n=r[0],c=r[1],o=j(e.members[n].name+n),s={label:e.members[n].name,data:[],fill:!1,backgroundColor:o,borderColor:o};Object.keys(c).sort().forEach((function(e){e>2?s.data.push(c[e]+s.data[s.data.length-1]):s.data.push(c[e])})),t.datasets.push(s)})),t.datasets=t.datasets.sort(u("label","ASC")),t},h=(a(146),function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-3",children:Object(r.jsx)(b,{dataHandler:function(e){c(f(e))}})}),Object(r.jsx)("div",{className:"col-9",children:Object(r.jsx)("div",{className:"chart",children:Object(r.jsx)(d,{data:a})})})]})})})}),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,149)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};a(147);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),O()},46:function(e,t,a){}},[[148,1,2]]]);
//# sourceMappingURL=main.6f27fb57.chunk.js.map