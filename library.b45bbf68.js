var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);const o=document.querySelector(".header-buttonlist"),s=document.querySelector(".js-watched"),r=document.querySelector(".js-queue");o.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;e.target.classList.add("current--btn"),e.target.classList.contains("js-watched")&&r.classList.remove("current--btn");e.target.classList.contains("js-queue")&&s.classList.remove("current--btn")}));var i=n("fQFWi");const l=document.querySelector(".film-myLibrary__list"),d=document.querySelector(".header-buttonlist");document.querySelector(".js-watched"),document.querySelector(".js-queue");const c=document.querySelector(".img-not-found");let u="Watched";const m=localStorage.getItem(u),g=JSON.parse(m);function f(e){if(!e)return void c.classList.add("open");const t=e.map((({title:e,name:t,id:a,poster_path:n,vote_average:o,release_date:s,genre_ids:r})=>{let l="";return l=n?"https://image.tmdb.org/t/p/w500"+n:"https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=1000",`<li class="film-gallery__item" id="${a}">\n        <div class="film-gallery__image-wrapper">\n        <img class="film-gallery__image" src="${l}"\n        alt="${e||t}" width ="394" height ="336"/>\n        </div>\n        <div class="film-gallery__info-wrapper">\n        <h3 class="film-gallery__name">${t||e}</h3>\n        <p class="film-gallery__info">\n        <span class="film-gallery__info-genres">\n        ${(0,i.matchGenresById)(r)||"No info"}</span>\n        |\n        <span class="film-gallery__info-year">${s?s.slice(0,4):"No info"}</span>\n                      <span class="film-gallery__info-rang">${o||"No info"}</span>\n                      </p>\n                      </div>\n                      </li>`})).join("");l.insertAdjacentHTML("beforeend",t)}l.innerHTML="",f(g),d.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;if(e.target.classList.contains("js-watched")){u="Watched";const e=localStorage.getItem(u),t=JSON.parse(e);l.innerHTML="",f(t)}if(e.target.classList.contains("js-queue")){u="Queue",console.log(u);const e=localStorage.getItem(u),t=JSON.parse(e);l.innerHTML="",f(t)}})),n("cOgen"),n("lqUOw");var _=n("6yjRA");let p;const S=document.querySelector(".film-myLibrary__list"),y=document.querySelector("[data-main-modal]"),L=document.querySelector("[data-modal-main-close]"),h=document.querySelector(".main-modal__container"),v=document.querySelector("body");document.querySelector(".main-modal__backdrop");function q(){y.classList.add("is-hidden"),v.classList.remove("overflow")}function w(e){e.target.classList.contains("main-modal__backdrop")&&q()}S.addEventListener("click",(function(e){if(!e.target.closest(".film-gallery__item"))return;y.classList.remove("is-hidden"),v.classList.add("overflow"),p=u;const{id:t}=e.target.closest(".film-gallery__item");let a=JSON.parse(localStorage.getItem(p)).find((e=>e.id.toString()===t));h.innerHTML=(0,_.renderMarkupModal)(a),L.addEventListener("click",q),document.addEventListener("click",w);let n=[],o=[],s=document.querySelector(".main-modal__buttons--watched");s.textContent="Remove in watched",s.classList.add("added");let r=document.querySelector(".main-modal__buttons--queue");r.textContent="Remove in queue",r.classList.add("added"),localStorage.getItem("Watched").includes(a.id)||(s.textContent="Add to watched",s.classList.remove("added"));localStorage.getItem("Queue").includes(a.id)||(r.textContent="Add to queue",r.classList.remove("added"));document.querySelector(".main-modal__buttons").addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName){if(e.target.classList.contains("main-modal__buttons--watched")){if(localStorage.getItem("Watched")&&(n=JSON.parse(localStorage.getItem("Watched"))),e.target.classList.contains("added")){const e=n.findIndex((e=>e.id===a.id));return n.splice(e,1),localStorage.setItem("Watched",JSON.stringify(n)),s.textContent="Add to watched",s.classList.remove("added"),l.innerHTML="",f(JSON.parse(localStorage.getItem(p))),void q()}n.push(a),localStorage.setItem("Watched",JSON.stringify(n)),s.textContent="Remove in watched",s.classList.add("added")}if(e.target.classList.contains("main-modal__buttons--queue")){if(localStorage.getItem("Queue")&&(o=JSON.parse(localStorage.getItem("Queue"))),e.target.classList.contains("added")){const e=o.findIndex((e=>e.id===a.id));return o.splice(e,1),localStorage.setItem("Queue",JSON.stringify(o)),r.textContent="Add to queue",r.classList.remove("added"),l.innerHTML="",f(JSON.parse(localStorage.getItem(p))),void q()}o.push(a),localStorage.setItem("Queue",JSON.stringify(o)),r.textContent="Remove in queue",r.classList.add("added")}}}))}));
//# sourceMappingURL=library.b45bbf68.js.map
