var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);const a=document.querySelector(".header-buttonlist"),l=document.querySelector(".js-watched"),s=document.querySelector(".js-queue");a.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;e.target.classList.add("current--btn"),e.target.classList.contains("js-watched")&&s.classList.remove("current--btn");e.target.classList.contains("js-queue")&&l.classList.remove("current--btn")}));r("8huCE");var i=r("fQFWi");const o=document.querySelector(".film-myLibrary__list"),c=document.querySelector(".header-buttonlist");let d="Watched";const f=localStorage.getItem(d),g=JSON.parse(f);function u(e){console.log(e);const t=e.map((({title:e,name:t,id:n,poster_path:r,vote_average:a,release_date:l,genre_ids:s})=>{let o="";return o=r?"https://image.tmdb.org/t/p/w500"+r:"https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=1000",`<li class="film-gallery__item" id="${n}">\n        <div class="film-gallery__image-wrapper">\n        <img class="film-gallery__image" src="${o}"\n        alt="${e||t}" width ="394" height ="336"/>\n        </div>\n        <div class="film-gallery__info-wrapper">\n        <h3 class="film-gallery__name">${t||e}</h3>\n        <p class="film-gallery__info">\n        <span class="film-gallery__info-genres">\n        ${(0,i.matchGenresById)(s)||"No info"}</span>\n        |\n        <span class="film-gallery__info-year">${l?l.slice(0,4):"No info"}</span>\n                      <span class="film-gallery__info-rang">${a||"No info"}</span>\n                      </p>\n                      </div>\n                      </li>`})).join("");o.insertAdjacentHTML("beforeend",t)}o.innerHTML="",u(g),c.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;if(e.target.classList.contains("js-watched")){d="Watched";const e=localStorage.getItem(d),t=JSON.parse(e);o.innerHTML="",u(t)}if(e.target.classList.contains("js-queue")){d="Queue",console.log(d);const e=localStorage.getItem(d),t=JSON.parse(e);o.innerHTML="",u(t)}})),r("cOgen"),r("lqUOw");
//# sourceMappingURL=library.4b4f58cd.js.map
