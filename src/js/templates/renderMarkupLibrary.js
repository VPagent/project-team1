import { onClickEvt } from '../pagination/paginationLibrary';
import { matchGenresById } from '../findGenres/findGenres';
import { paginationLibrary } from '../pagination/paginationLibrary';


export const myLibraryContainer = document.querySelector('.film-myLibrary__list');
const headerButtonlist = document.querySelector('.header-buttonlist');
// pasha
export const btnWatched = document.querySelector(".js-watched")
export const btnQueue = document.querySelector(".js-queue")
// 

const paginationLibraryContainer = document.querySelector(
  '.page__list-library'
);

const PER_PAGE = 6;
let currentPage = 1;


let arr = [];

const imgNotFound = document.querySelector('.img-not-found')

export let filmKey = 'Watched';



const savedFilms = localStorage.getItem(filmKey);
const parsedFilms = JSON.parse(savedFilms);
myLibraryContainer.innerHTML = '';
renderMarkupLibrary(parsedFilms);



headerButtonlist.addEventListener('click', getFilmsKey);
function getFilmsKey(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  if (evt.target.classList.contains('js-watched')) {
    filmKey = 'Watched';
    const savedFilms = localStorage.getItem(filmKey);
    const parsedFilms = JSON.parse(savedFilms);
    myLibraryContainer.innerHTML = '';
    renderMarkupLibrary(parsedFilms);
    const totalPage = getTotalPages(parsedFilms);
    paginationLibrary(currentPage, totalPage);
    // paginationLibraryContainer.addEventListener('click', onClickEvt);
    const startIdx = getIndex(currentPage, PER_PAGE);
    const endIdx = startIdx + PER_PAGE - 1;
    console.log(endIdx);
    // console.log(startIdx);
  }
  if (evt.target.classList.contains('js-queue')) {
    filmKey = 'Queue';
    console.log(filmKey);
    const savedFilms = localStorage.getItem(filmKey);
    const parsedFilms = JSON.parse(savedFilms);
    myLibraryContainer.innerHTML = '';
    renderMarkupLibrary(parsedFilms);
    const totalPage = getTotalPages(parsedFilms);
    paginationLibrary(currentPage, totalPage);
    // paginationLibraryContainer.addEventListener('click', onClickEvt);
    const startIdx = getIndex(currentPage, PER_PAGE);
    const endIdx = startIdx + PER_PAGE - 1;
    console.log(endIdx);
    // console.log(startIdx);
  }
}
// if(filmKey === "Watched"){
//   btnWatched.classList.add("current--btn")
//   btnQueue.classList.remove("current--btn")
// }
// if(filmKey === "Queue"){
//   btnQueue.classList.add("current--btn")
//   btnWatched.classList.remove("current--btn")
// }


paginationLibraryContainer.addEventListener('click', onClickEvt);

export function renderMarkupLibrary(parsedFilms) {
if (!parsedFilms) {
  imgNotFound.classList.add('open');
  return
} 
  const markup = parsedFilms
    .map(
      ({
        title,
        name,
        id,
        poster_path,
        vote_average,
        release_date,
        genre_ids,
      }) => {
        let POSTER_IMG_URL = '';
        if (poster_path) {
          POSTER_IMG_URL = 'https://image.tmdb.org/t/p/w500' + poster_path;
        } else {
          POSTER_IMG_URL =
            'https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=1000';
        }
        return `<li class="film-gallery__item" id="${id}">
        <div class="film-gallery__image-wrapper">
        <img class="film-gallery__image" src="${POSTER_IMG_URL}"
        alt="${title || name}" width ="394" height ="336"/>
        </div>
        <div class="film-gallery__info-wrapper">
        <h3 class="film-gallery__name">${name || title}</h3>
        <p class="film-gallery__info">
        <span class="film-gallery__info-genres">
        ${matchGenresById(genre_ids) || 'No info'}</span>
        |
        <span class="film-gallery__info-year">${
          release_date ? release_date.slice(0, 4) : 'No info'
        }</span>
                      <span class="film-gallery__info-rang">${
                        vote_average || 'No info'
                      }</span>
                      </p>
                      </div>
                      </li>`;
      }
    )
    .join('');
  // return markup;
  myLibraryContainer.insertAdjacentHTML('beforeend', markup);

  let number = 0;
  for (let i = 0; i < parsedFilms.length; i += 1) {
    arr.push(parsedFilms[i]);
    number += 1;
    if (number === 5) {
      return;
    }
  }

  // paginationLibrary(allPages);
}

// console.log(arr);

function getTotalPages(arr) {
  return Math.ceil(arr.length / 6);
}

function getIndex(currentPage, perPage) {
  return (currentPage - 1) * perPage;
}

function onClickEvt(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }
  currentPage = event.target.textContent;
}
