(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],[,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),c=a.n(o),l=(a(9),a(10),a(11),a(1)),m=a.n(l);a(13);function i(e){var t=e.currentDate;return console.log(e),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"ui-datepicker-material-header"},n.a.createElement("div",{className:"ui-datepicker-material-day"},t.format("dddd")[0].toUpperCase()+t.format("dddd").slice(1)),n.a.createElement("div",{className:"ui-datepicker-material-date"},n.a.createElement("div",{className:"ui-datepicker-material-day-num"},t.format("DD")),n.a.createElement("div",{className:"ui-datepicker-material-month"},String(t.format("DD MMMM")).replace(/\d/g,"")),n.a.createElement("div",{className:"ui-datepicker-material-year"},t.format("YYYY")))),n.a.createElement("div",{className:"ui-datepicker-header"},n.a.createElement("div",{className:"ui-datepicker-title"},n.a.createElement("span",{className:"ui-datepicker-month"},t.format("MMMM")[0].toUpperCase()+t.format("MMMM").slice(1)),"\xa0",n.a.createElement("span",{className:"ui-datepicker-year"},t.format("YYYY")))))}function d(e){var t=e.currentDate;t.locale("en");var a=m()(t),r=[];if("Monday"!==String(a.startOf("month").format("dddd")))for(console.log("\u043c\u0435\u0441\u044f\u0446 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u043d\u0435 \u0441 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a\u0430"),a.locale("en"),a.startOf("month");"Monday"!==a.format("dddd");)a.subtract(1,"day"),r.push(new Date(a.format("YYYY-MM-DD"))),r.reverse();a=m()(t).startOf("month"),console.log(a.format("DD MM YYYY"));for(var o=a.daysInMonth(),c=1;c<=o;c++)r.push(new Date(a.format("YYYY-MM-DD"))),a.add(1,"day");for(a.endOf("month");"Tuesday"!==a.format("dddd");)a.add(1,"day"),r.push(new Date(a.format("YYYY-MM-DD")));for(var l=function(e){for(var t=[];e.length;)t.push(e.splice(0,7));return t}(r),i=[],d=1;d<=7;d++)i.push(m()().isoWeekday(d).format("dd"));return n.a.createElement("table",{className:"ui-datepicker-calendar"},n.a.createElement("colgroup",null,i.map((function(e,t){return 5===t||6===t?n.a.createElement("col",{className:"ui-datepicker-week-end"}):n.a.createElement("col",null)}))),n.a.createElement("thead",null,n.a.createElement("tr",null,i.map((function(e){return n.a.createElement("td",{key:e},e)})))),n.a.createElement("tbody",null,l.map((function(e,a){return n.a.createElement("tr",{key:a,className:"week"},e.map((function(e){return console.log(e.getMonth()===Number(t.format("MMD"))),console.log(Number(t.format("MM"))),console.log(e.getMonth()),e.getMonth()!==new Date(t.format("YYYY-MM-DD")).getMonth()?n.a.createElement("td",{key:e.toString(),className:"ui-datepicker-other-month"},e.getDate()):0===e.getDay()||6===e.getDay()?n.a.createElement("td",{key:e.toString(),className:"ui-datepicker-week-end"},e.getDate()):e.getDate()===Number(t.format("DD"))&&e.getMonth()+1===Number(t.format("MM"))?n.a.createElement("td",{key:e.toString(),className:"ui-datepicker-today"},e.getDate()):n.a.createElement("td",{key:e.toString()},e.getDate())})))}))))}function s(e){return n.a.createElement("div",{className:"ui-datepicker"},n.a.createElement(i,{currentDate:e.currentDate}),n.a.createElement(d,{currentDate:e.currentDate}))}var u=function(){var e=m()("2017-03-08","YYYY-MM-DD");return e.locale("ru"),n.a.createElement(s,{currentDate:e})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.c0b19d0c.chunk.js.map