!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var r=document.querySelector(".header-buttonlist"),o=document.querySelector(".js-watched"),i=document.querySelector(".js-queue");r.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;e.target.classList.add("current--btn"),e.target.classList.contains("js-watched")&&i.classList.remove("current--btn");e.target.classList.contains("js-queue")&&o.classList.remove("current--btn")}));var s=n("5m7Gj"),c=document.querySelector(".film-myLibrary__list"),l=document.querySelector(".header-buttonlist"),d=(document.querySelector(".js-watched"),document.querySelector(".js-queue"),document.querySelector(".img-not-found")),u="Watched",m=localStorage.getItem(u),g=JSON.parse(m);function f(e){if(e){var t=e.map((function(e){var t=e.title,a=e.name,n=e.id,r=e.poster_path,o=e.vote_average,i=e.release_date,c=e.genre_ids,l="";return l=r?"https://image.tmdb.org/t/p/w500"+r:"https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=1000",'<li class="film-gallery__item" id="'.concat(n,'">\n        <div class="film-gallery__image-wrapper">\n        <img class="film-gallery__image" src="').concat(l,'"\n        alt="').concat(t||a,'" width ="394" height ="336"/>\n        </div>\n        <div class="film-gallery__info-wrapper">\n        <h3 class="film-gallery__name">').concat(a||t,'</h3>\n        <p class="film-gallery__info">\n        <span class="film-gallery__info-genres">\n        ').concat((0,s.matchGenresById)(c)||"No info",'</span>\n        |\n        <span class="film-gallery__info-year">').concat(i?i.slice(0,4):"No info",'</span>\n                      <span class="film-gallery__info-rang">').concat(o||"No info","</span>\n                      </p>\n                      </div>\n                      </li>")})).join("");c.insertAdjacentHTML("beforeend",t)}else d.classList.add("open")}c.innerHTML="",f(g),l.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;if(e.target.classList.contains("js-watched")){u="Watched";var t=localStorage.getItem(u),a=JSON.parse(t);c.innerHTML="",f(a)}if(e.target.classList.contains("js-queue")){u="Queue",console.log(u);var n=localStorage.getItem(u),r=JSON.parse(n);c.innerHTML="",f(r)}})),n("ckBNW"),n("iNwH7");var _,p=n("9zkr1"),S=document.querySelector(".film-myLibrary__list"),v=document.querySelector("[data-main-modal]"),y=document.querySelector("[data-modal-main-close]"),L=document.querySelector(".main-modal__container"),h=document.querySelector("body");document.querySelector(".main-modal__backdrop");function q(){v.classList.add("is-hidden"),h.classList.remove("overflow")}function N(e){e.target.classList.contains("main-modal__backdrop")&&q()}S.addEventListener("click",(function(e){if(!e.target.closest(".film-gallery__item"))return;v.classList.remove("is-hidden"),h.classList.add("overflow"),_=u;var t=e.target.closest(".film-gallery__item").id,a=JSON.parse(localStorage.getItem(_)).find((function(e){return e.id.toString()===t}));L.innerHTML=(0,p.renderMarkupModal)(a),y.addEventListener("click",q),document.addEventListener("click",N);var n=[],r=[],o=document.querySelector(".main-modal__buttons--watched");o.textContent="Remove in watched",o.classList.add("added");var i=document.querySelector(".main-modal__buttons--queue");i.textContent="Remove in queue",i.classList.add("added"),localStorage.getItem("Watched").includes(a.id)||(o.textContent="Add to watched",o.classList.remove("added"));localStorage.getItem("Queue").includes(a.id)||(i.textContent="Add to queue",i.classList.remove("added"));document.querySelector(".main-modal__buttons").addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName){if(e.target.classList.contains("main-modal__buttons--watched")){if(localStorage.getItem("Watched")&&(n=JSON.parse(localStorage.getItem("Watched"))),e.target.classList.contains("added")){var t=n.findIndex((function(e){return e.id===a.id}));return n.splice(t,1),localStorage.setItem("Watched",JSON.stringify(n)),o.textContent="Add to watched",o.classList.remove("added"),c.innerHTML="",f(JSON.parse(localStorage.getItem(_))),void q()}n.push(a),localStorage.setItem("Watched",JSON.stringify(n)),o.textContent="Remove in watched",o.classList.add("added")}if(e.target.classList.contains("main-modal__buttons--queue")){if(localStorage.getItem("Queue")&&(r=JSON.parse(localStorage.getItem("Queue"))),e.target.classList.contains("added")){var s=r.findIndex((function(e){return e.id===a.id}));return r.splice(s,1),localStorage.setItem("Queue",JSON.stringify(r)),i.textContent="Add to queue",i.classList.remove("added"),c.innerHTML="",f(JSON.parse(localStorage.getItem(_))),void q()}r.push(a),localStorage.setItem("Queue",JSON.stringify(r)),i.textContent="Remove in queue",i.classList.add("added")}}}))}))}();
//# sourceMappingURL=library.8b2918c7.js.map
