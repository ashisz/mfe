(()=>{var e,r,t,n,a,o,i,u,l,f,s,c={352:(e,r,t)=>{Promise.all([t.e(407),t.e(128)]).then(t.bind(t,128))}},d={};function p(e){var r=d[e];if(void 0!==r)return r.exports;var t=d[e]={exports:{}};return c[e](t,t.exports,p),t.exports}p.m=c,p.c=d,p.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return p.d(r,{a:r}),r},p.d=(e,r)=>{for(var t in r)p.o(r,t)&&!p.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((r,t)=>(p.f[t](e,r),r)),[])),p.u=e=>e+"."+{128:"682361181e1933a775a3",294:"51a6bbb2554f35b096dc",407:"1a6a2a356d2006500047",935:"5742ce34ec46c132bb6a"}[e]+".js",p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="mfe:",p.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+a){i=s;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,p.nc&&i.setAttribute("nonce",p.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var c=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},d=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),u&&document.head.appendChild(i)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{p.S={};var e={},r={};p.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];p.o(p.S,t)||(p.S[t]={});var o=p.S[t],i=(e,r,t,n)=>{var a=o[e]=o[e]||{},i=a[r];(!i||!i.loaded&&(!n!=!i.eager?n:"mfe">i.from))&&(a[r]={get:t,from:"mfe",eager:!!n})},u=[];switch(t){case"default":i("react-dom","17.0.2",(()=>Promise.all([p.e(935),p.e(407)]).then((()=>()=>p(935))))),i("react","17.0.2",(()=>p.e(294).then((()=>()=>p(294)))))}return e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;p.g.importScripts&&(e=p.g.location+"");var r=p.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),p.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,u=1,l=!0;;u++,i++){var f,s,c=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(s=(typeof(f=r[i]))[0]))return!l||("u"==c?u>n&&!o:""==c!=o);if("u"==s){if(!l||"u"!=c)return!1}else if(l)if(c==s)if(u<=n){if(f!=e[u])return!1}else{if(o?f>e[u]:f<e[u])return!1;f!=e[u]&&(l=!1)}else if("s"!=c&&"n"!=c){if(o||u<=n)return!1;l=!1,u--}else{if(u<=n||s<c!=o)return!1;l=!1}else"s"!=c&&"n"!=c&&(l=!1,u--)}}var d=[],p=d.pop.bind(d);for(i=1;i<e.length;i++){var h=e[i];d.push(1==h?p()|p():2==h?p()&p():h?a(h,r):!p())}return!!p()},o=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},i=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,n,a){var o=p.I(r);return o&&o.then?o.then(e.bind(e,r,p.S[r],t,n,a)):e(0,p.S[r],t,n,a)})(((e,r,t,n,a)=>{var u=r&&p.o(r,t)&&o(r,t,n);return u?i(u):a()})),l={},f={407:()=>u("default","react",[1,17,0,2],(()=>p.e(294).then((()=>()=>p(294))))),579:()=>u("default","react-dom",[1,17,0,2],(()=>p.e(935).then((()=>()=>p(935)))))},s={128:[579],407:[407]},p.f.consumes=(e,r)=>{p.o(s,e)&&s[e].forEach((e=>{if(p.o(l,e))return r.push(l[e]);var t=r=>{l[e]=0,p.m[e]=t=>{delete p.c[e],t.exports=r()}},n=r=>{delete l[e],p.m[e]=t=>{throw delete p.c[e],r}};try{var a=f[e]();a.then?r.push(l[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={179:0};p.f.j=(r,t)=>{var n=p.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(407!=r){var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=p.p+p.u(r),i=new Error;p.l(o,(t=>{if(p.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,a,[o,i,u]=t,l=0;for(n in i)p.o(i,n)&&(p.m[n]=i[n]);for(u&&u(p),r&&r(t);l<o.length;l++)a=o[l],p.o(e,a)&&e[a]&&e[a][0](),e[o[l]]=0},t=self.webpackChunkmfe=self.webpackChunkmfe||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),p(352)})();