function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("fQFWi",(function(t,n){e(t.exports,"matchGenresById",(function(){return o})),e(t.exports,"matchGenresByIdForModal",(function(){return a}));const r="genres";function o(e){if(!e)return"";const t=localStorage.getItem(r),n=JSON.parse(t).filter((({id:t})=>e.includes(t))).map((({name:e})=>e));return(o=n).length>3?`${o[0]}, ${o[1]} and ${o.length-2} Others`:o.join(", ");var o}function a(e){if(!e)return"";const t=localStorage.getItem(r),n=JSON.parse(t).filter((({id:t})=>e.includes(t))).map((({name:e})=>e));return 0==n.length?"No info":n.join(", ")}})),o.register("cOgen",(function(e,t){var n=o("bLLVb");const r=document.querySelector(".open-pop-up"),a=document.querySelector(".pop-up-close"),i=document.querySelector(".pop-up"),l=document.querySelector("body"),c=document.querySelector(".pop-up-container");function s(e){"Escape"===e.code&&d()}function d(){i.classList.remove("open"),l.classList.remove("disable-scroll"),l.removeEventListener("keyup",s),window.removeEventListener("click",s)}function u(e){e.target==c&&d()}r.addEventListener("click",(function(e){"open-pop-up"===e.srcElement.className&&(e.preventDefault(),i.classList.add("open"),(0,n.default)(),l.addEventListener("keyup",s),window.addEventListener("click",u),a.addEventListener("click",d),l.classList.add("disable-scroll"))}))})),o.register("bLLVb",(function(t,n){e(t.exports,"default",(function(){return a}));var r=o("92mEW");function a(){r.default.create(document.getElementById("canvas"),{resize:!0,useWorker:!0})({particleCount:200,spread:200,zIndex:2021})}})),o.register("92mEW",(function(t,n){e(t.exports,"default",(function(){return o}));var r={};!function e(t,n,r,o){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function i(){}function l(e){var r=n.exports.Promise,o=void 0!==r?r:t.Promise;return"function"==typeof o?new o(e):(e(i,i),null)}var c,s,d,u,f,h,m,g,p,v=(d=Math.floor(1e3/60),u={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(e){var t=Math.random();return u[t]=requestAnimationFrame((function n(r){f===r||f+d-1<r?(f=r,delete u[t],e()):u[t]=requestAnimationFrame(n)})),t},s=function(e){u[e]&&cancelAnimationFrame(u[e])}):(c=function(e){return setTimeout(e,d)},s=function(e){return clearTimeout(e)}),{frame:c,cancel:s}),b=(g={},function(){if(h)return h;if(!r&&a){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{h=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,r,o){if(m)return t(n,null),m;var a=Math.random().toString(36).slice(2);return m=l((function(r){function i(t){t.data.callback===a&&(delete g[a],e.removeEventListener("message",i),m=null,o(),r())}e.addEventListener("message",i),t(n,a),g[a]=i.bind(null,{data:{callback:a}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),g)g[t](),delete g[t]}}(h)}return h}),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(e,t,n){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:y[t],n)}function M(e){return e<0?0:Math.floor(e)}function S(e){return parseInt(e,16)}function x(e){return e.map(k)}function k(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:S(t.substring(0,2)),g:S(t.substring(2,4)),b:S(t.substring(4,6))}}function L(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function E(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function I(e,t,n,a,i){var c,s,d=t.slice(),u=e.getContext("2d"),f=l((function(t){function l(){c=s=null,u.clearRect(0,0,a.width,a.height),i(),t()}c=v.frame((function t(){!r||a.width===o.width&&a.height===o.height||(a.width=e.width=o.width,a.height=e.height=o.height),a.width||a.height||(n(e),a.width=e.width,a.height=e.height),u.clearRect(0,0,a.width,a.height),d=d.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,o=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,i=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(i-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,o,a,i,l,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,o),e.arc(0,0,1,i,l,c),e.restore()}(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(i-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(o)),e.lineTo(Math.floor(a),Math.floor(i)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(u,e)})),d.length?c=v.frame(t):l()})),s=l}));return{addFettis:function(e){return d=d.concat(e),f},canvas:e,promise:f,reset:function(){c&&v.cancel(c),s&&s()}}}function C(e,n){var r,o=!e,i=!!w(n||{},"resize"),c=w(n,"disableForReducedMotion",Boolean),s=a&&!!w(n||{},"useWorker")?b():null,d=o?L:E,u=!(!e||!s)&&!!e.__confetti_initialized,f="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function h(t,n,o){for(var a,i,l,c,s,u=w(t,"particleCount",M),f=w(t,"angle",Number),h=w(t,"spread",Number),m=w(t,"startVelocity",Number),g=w(t,"decay",Number),p=w(t,"gravity",Number),v=w(t,"drift",Number),b=w(t,"colors",x),y=w(t,"ticks",Number),S=w(t,"shapes"),k=w(t,"scalar"),L=function(e){var t=w(e,"origin",Object);return t.x=w(t,"x",Number),t.y=w(t,"y",Number),t}(t),E=u,C=[],q=e.width*L.x,T=e.height*L.y;E--;)C.push((a={x:q,y:T,angle:f,spread:h,startVelocity:m,color:b[E%b.length],shape:S[(c=0,s=S.length,Math.floor(Math.random()*(s-c))+c)],ticks:y,decay:g,gravity:p,drift:v,scalar:k},i=void 0,l=void 0,i=a.angle*(Math.PI/180),l=a.spread*(Math.PI/180),{x:a.x,y:a.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*a.startVelocity+Math.random()*a.startVelocity,angle2D:-i+(.5*l-Math.random()*l),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*a.gravity,ovalScalar:.6,scalar:a.scalar}));return r?r.addFettis(C):(r=I(e,C,d,n,o)).promise}function m(n){var a=c||w(n,"disableForReducedMotion",Boolean),m=w(n,"zIndex",Number);if(a&&f)return l((function(e){e()}));o&&r?e=r.canvas:o&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(m),document.body.appendChild(e)),i&&!u&&d(e);var g={width:e.width,height:e.height};function p(){if(s){var t={getBoundingClientRect:function(){if(!o)return e.getBoundingClientRect()}};return d(t),void s.postMessage({resize:{width:t.width,height:t.height}})}g.width=g.height=null}function v(){r=null,i&&t.removeEventListener("resize",p),o&&e&&(document.body.removeChild(e),e=null,u=!1)}return s&&!u&&s.init(e),u=!0,s&&(e.__confetti_initialized=!0),i&&t.addEventListener("resize",p,!1),s?s.fire(n,g,v):h(n,g,v)}return m.reset=function(){s&&s.reset(),r&&r.reset()},m}function q(){return p||(p=C(null,{useWorker:!0,resize:!0})),p}n.exports=function(){return q().apply(this,arguments)},n.exports.reset=function(){q().reset()},n.exports.create=C}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),r,!1);var o=r.exports;r.exports.create})),o.register("lqUOw",(function(e,t){const n="theme",r=document.querySelector(".themetoggle"),o=document.querySelector(".material-symbol");function a(){"dark"===localStorage.getItem("theme")?(document.querySelector("body").classList.remove("light"),document.querySelector("footer").classList.remove("footer-light"),document.querySelector("body").classList.add("dark"),document.querySelector("footer").classList.add("footer-dark"),document.querySelector("header").classList.add("heared-shaddow"),document.querySelector(".main-modal").classList.add("modal-dark"),o.textContent="dark_mode"):(document.querySelector("body").classList.remove("dark"),document.querySelector("footer").classList.remove("footer-dark"),document.querySelector("header").classList.remove("heared-shaddow"),document.querySelector(".main-modal").classList.remove("modal-dark"),document.querySelector("body").classList.add("light"),document.querySelector("footer").classList.add("footer-light"),o.textContent="wb_sunny")}r.addEventListener("click",(e=>{e.preventDefault(),"dark"===localStorage.getItem(n)?localStorage.removeItem(n):localStorage.setItem(n,"dark"),a()})),a()}));
//# sourceMappingURL=library.15c7591b.js.map
