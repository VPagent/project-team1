!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var n=document.querySelector(".header-buttonlist"),i=document.querySelector(".js-watched"),l=document.querySelector(".js-queue");n.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;e.target.classList.add("current--btn"),e.target.classList.contains("js-watched")&&l.classList.remove("current--btn");e.target.classList.contains("js-queue")&&i.classList.remove("current--btn")}));var o=document.querySelector(".page__list-library");function s(e,t){console.log(e);var a="",r=e-1,n=e+1,i=e+2;globalCurrentPage=e,globalAllPages=t,e>1&&(a+='<li class="page__item"><a href="#render" class="page__arrow page__arrow--left"></a></li>'),e>1&&(a+='<li class="page__item page__item--hidden"><a href="#render" class="page__figure page__figure--transform">1</a></li>'),e>4&&(a+='<li class="page__item page__item--hidden"><a class="page__dots">...</a></li>'),e>3&&(a+='<li class="page__item"><a href="#render" class="page__figure page__figure--transform">'.concat(e-2,"</a></li>")),e>2&&(a+='<li class="page__item"><a href="#render" class="page__figure page__figure--transform">'.concat(r,"</a></li>")),a+='<li class="page__item page__item--is-active"><a href="#render" class="page__figure">'.concat(e,"</a></li>"),t-1>e&&(a+='<li class="page__item"><a href="#render" class="page__figure page__figure--transform">'.concat(n,"</a></li>")),t-2>e&&(a+='<li class="page__item"><a href="#render" class="page__figure page__figure--transform">'.concat(i,"</a></li>")),t-3>e&&(a+='<li class="page__item page__item--hidden"><a class="page__dots">...</a></li>'),t>e&&(a+='<li class="page__item page__item--hidden"><a href="#render" class="page__figure page__figure--transform">'.concat(t,"</a></li>"),a+='<li class="page__item arrow"><a href="#render" class="page__arrow page__arrow--right"></a></li>'),o.innerHTML=a}var c=r("5m7Gj"),d=document.querySelector(".film-myLibrary__list"),g=document.querySelector(".header-buttonlist"),u=document.querySelector(".page__list-library"),m=1,_=[],f=document.querySelector(".img-not-found"),p="Watched",h=localStorage.getItem(p),v=JSON.parse(h);function S(e){if(e){var t=e.map((function(e){var t=e.title,a=e.name,r=e.id,n=e.poster_path,i=e.vote_average,l=e.release_date,o=e.genre_ids,s="";return s=n?"https://image.tmdb.org/t/p/w500"+n:"https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=1000",'<li class="film-gallery__item" id="'.concat(r,'">\n        <div class="film-gallery__image-wrapper">\n        <img class="film-gallery__image" src="').concat(s,'"\n        alt="').concat(t||a,'" width ="394" height ="336"/>\n        </div>\n        <div class="film-gallery__info-wrapper">\n        <h3 class="film-gallery__name">').concat(a||t,'</h3>\n        <p class="film-gallery__info">\n        <span class="film-gallery__info-genres">\n        ').concat((0,c.matchGenresById)(o)||"No info",'</span>\n        |\n        <span class="film-gallery__info-year">').concat(l?l.slice(0,4):"No info",'</span>\n                      <span class="film-gallery__info-rang">').concat(i||"No info","</span>\n                      </p>\n                      </div>\n                      </li>")})).join("");d.insertAdjacentHTML("beforeend",t);for(var a=0,r=0;r<e.length;r+=1)if(_.push(e[r]),5===(a+=1))return;S(_)}else f.classList.add("open")}function y(e){return Math.ceil(e.length/6)}function L(e,t){return(e-1)*t}console.log(v.length),d.innerHTML="",S(v),g.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;if(e.target.classList.contains("js-watched")){p="Watched";var t=localStorage.getItem(p),a=JSON.parse(t);d.innerHTML="",S(a);var r=y(a);s(m,r);var n=L(m,6)+6-1;console.log(n)}if(e.target.classList.contains("js-queue")){p="Queue",console.log(p);var i=localStorage.getItem(p),l=JSON.parse(i);d.innerHTML="",S(l);var o=y(l);s(m,o);var c=L(m,6)+6-1;console.log(c)}})),u.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;m=e.target.textContent})),r("ckBNW"),r("iNwH7");var q,w=r("9zkr1"),N=document.querySelector(".film-myLibrary__list"),b=document.querySelector("[data-main-modal]"),I=document.querySelector("[data-modal-main-close]"),O=document.querySelector(".main-modal__container"),T=document.querySelector("body");document.querySelector(".main-modal__backdrop");function x(){b.classList.add("is-hidden"),T.classList.remove("overflow")}function k(e){e.target.classList.contains("main-modal__backdrop")&&x()}N.addEventListener("click",(function(e){if(console.log(1),!e.target.closest(".film-gallery__item"))return;b.classList.remove("is-hidden"),T.classList.add("overflow"),q=p;var t=e.target.closest(".film-gallery__item").id,a=JSON.parse(localStorage.getItem(q)).find((function(e){return e.id.toString()===t}));O.innerHTML=(0,w.renderMarkupModal)(a),I.addEventListener("click",x),document.addEventListener("click",k);var r=[],n=[],i=document.querySelector(".main-modal__buttons--watched");i.textContent="Remove in watched",i.classList.add("added");var l=document.querySelector(".main-modal__buttons--queue");l.textContent="Remove in queue",l.classList.add("added"),localStorage.getItem("Watched").includes(a.id)||(i.textContent="Add to watched",i.classList.remove("added"));localStorage.getItem("Queue").includes(a.id)||(l.textContent="Add to queue",l.classList.remove("added"));document.querySelector(".main-modal__buttons").addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName){if(e.target.classList.contains("main-modal__buttons--watched")){if(localStorage.getItem("Watched")&&(r=JSON.parse(localStorage.getItem("Watched"))),e.target.classList.contains("added")){var t=r.findIndex((function(e){return e.id===a.id}));return r.splice(t,1),localStorage.setItem("Watched",JSON.stringify(r)),i.textContent="Add to watched",i.classList.remove("added"),d.innerHTML="",S(JSON.parse(localStorage.getItem("Watched"))),void x()}r.push(a),localStorage.setItem("Watched",JSON.stringify(r)),i.textContent="Remove in watched",i.classList.add("added")}if(e.target.classList.contains("main-modal__buttons--queue")){if(localStorage.getItem("Queue")&&(n=JSON.parse(localStorage.getItem("Queue"))),e.target.classList.contains("added")){var o=n.findIndex((function(e){return e.id===a.id}));return n.splice(o,1),localStorage.setItem("Queue",JSON.stringify(n)),l.textContent="Add to queue",l.classList.remove("added"),d.innerHTML="",S(JSON.parse(localStorage.getItem("Queue"))),void x()}n.push(a),localStorage.setItem("Queue",JSON.stringify(n)),l.textContent="Remove in queue",l.classList.add("added")}}}))}))}();
//# sourceMappingURL=library.1da07055.js.map
