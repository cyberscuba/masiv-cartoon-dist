(function(){"use strict";var n={6381:function(n,t,e){var i=e(9242),o=e(7139);const r=()=>new Promise((n=>{const t=Math.floor(100*Math.random()+1);n(t)}));var a=r,c=(0,o.MT)({state:{ratingStats:0,count:1,lastMutation:"none",isLoading:!1,lastRandomInt:0,imageCartoon:"",commics:[],qualifiedComics:[[],[],[],[],[]]},mutations:{increment(n){n.count++,n.lastMutation="Increment"},incrementBy(n,t){n.count+=t,n.lastMutation=`incrementBy${t}`,n.lastRandomInt=t},ratingStats(n){n.ratingStats++,n.mutations="Increment"},imageCartoon(n,t){n.imageCartoon=t,n.lastMutation=t},countStars(n,t){n.ratingStats+=t,n.lastMutation=`Increasing ${t} Stars`,n.lastRandomInt=t},commicList(n,t){n.commics.push(t)},saveRating(n,t){n.commics[t.index].rating=t.rating},listCommicByRating(n,t){let e=null;switch(t.rating){case 1:e=n.qualifiedComics[0]?.findIndex((n=>n===t.num)),-1===e&&n.qualifiedComics[0].push(t.num);break;case 2:e=n.qualifiedComics[1]?.findIndex((n=>n===t.num)),-1===e&&n.qualifiedComics[1].push(t.num);break;case 3:e=n.qualifiedComics[2]?.findIndex((n=>n===t.num)),-1===e&&n.qualifiedComics[2].push(t.num);break;case 4:e=n.qualifiedComics[3]?.findIndex((n=>n===t.num)),-1===e&&n.qualifiedComics[3].push(t.num);break;case 5:e=n.qualifiedComics[4]?.findIndex((n=>n===t.num)),-1===e&&n.qualifiedComics[4].push(t.num);break;default:break}}},actions:{async incrementRandomInt(n){const t=await a();n.commit("incrementBy",t)},countStarts({commit:n},t){n("countStars",t)},async getCommicList({commit:n},t){const e=`https://massivian-fix-core-cams.herokuapp.com?numberoffcommics=${t}`,i=await fetch(e);if(i.ok){const t=await i.json();n("commicList",t)}else this.commics=this.commicsBackup},saveRating({commit:n},t){n("saveRating",t),n("listCommicByRating",t)}}}),u=e(3396);function s(n,t,e,i,o,r){const a=(0,u.up)("CommicHeader"),c=(0,u.up)("CommicCards"),s=(0,u.up)("CommicFooter");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(a),(0,u.Wm)(c),(0,u.Wm)(s)],64)}var m={name:"App",components:{CommicHeader:(0,u.RC)((()=>e.e(131).then(e.bind(e,6131)))),CommicCards:(0,u.RC)((()=>e.e(152).then(e.bind(e,392)))),CommicFooter:(0,u.RC)((()=>e.e(118).then(e.bind(e,8118))))}},f=e(89);const l=(0,f.Z)(m,[["render",s]]);var d=l;e(7024);(0,i.ri)(d).use(c).mount("#app")}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return n[i](r,r.exports,e),r.exports}e.m=n,function(){var n=[];e.O=function(t,i,o,r){if(!i){var a=1/0;for(m=0;m<n.length;m++){i=n[m][0],o=n[m][1],r=n[m][2];for(var c=!0,u=0;u<i.length;u++)(!1&r||a>=r)&&Object.keys(e.O).every((function(n){return e.O[n](i[u])}))?i.splice(u--,1):(c=!1,r<a&&(a=r));if(c){n.splice(m--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var m=n.length;m>0&&n[m-1][2]>r;m--)n[m]=n[m-1];n[m]=[i,o,r]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,i){return e.f[i](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/"+n+"."+{118:"6a3c2ca2",131:"20a36d0c",152:"91074d08"}[n]+".js"}}(),function(){e.miniCssF=function(n){return"css/"+n+".c5a78fa1.css"}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="massiviancommics:";e.l=function(i,o,r,a){if(n[i])n[i].push(o);else{var c,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),m=0;m<s.length;m++){var f=s[m];if(f.getAttribute("src")==i||f.getAttribute("data-webpack")==t+r){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,e.nc&&c.setAttribute("nonce",e.nc),c.setAttribute("data-webpack",t+r),c.src=i),n[i]=[o];var l=function(t,e){c.onerror=c.onload=null,clearTimeout(d);var o=n[i];if(delete n[i],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(n){return n(e)})),t)return t(e)},d=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var n=function(n,t,e,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)e();else{var a=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,o.parentNode.removeChild(o),i(u)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=function(n,t){for(var e=document.getElementsByTagName("link"),i=0;i<e.length;i++){var o=e[i],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===n||r===t))return o}var a=document.getElementsByTagName("style");for(i=0;i<a.length;i++){o=a[i],r=o.getAttribute("data-href");if(r===n||r===t)return o}},i=function(i){return new Promise((function(o,r){var a=e.miniCssF(i),c=e.p+a;if(t(a,c))return o();n(i,c,o,r)}))},o={143:0};e.f.miniCss=function(n,t){var e={152:1};o[n]?t.push(o[n]):0!==o[n]&&e[n]&&t.push(o[n]=i(n).then((function(){o[n]=0}),(function(t){throw delete o[n],t})))}}(),function(){var n={143:0};e.f.j=function(t,i){var o=e.o(n,t)?n[t]:void 0;if(0!==o)if(o)i.push(o[2]);else{var r=new Promise((function(e,i){o=n[t]=[e,i]}));i.push(o[2]=r);var a=e.p+e.u(t),c=new Error,u=function(i){if(e.o(n,t)&&(o=n[t],0!==o&&(n[t]=void 0),o)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,o[1](c)}};e.l(a,u,"chunk-"+t,t)}},e.O.j=function(t){return 0===n[t]};var t=function(t,i){var o,r,a=i[0],c=i[1],u=i[2],s=0;if(a.some((function(t){return 0!==n[t]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(u)var m=u(e)}for(t&&t(i);s<a.length;s++)r=a[s],e.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return e.O(m)},i=self["webpackChunkmassiviancommics"]=self["webpackChunkmassiviancommics"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(6381)}));i=e.O(i)})();
//# sourceMappingURL=app.454b0508.js.map