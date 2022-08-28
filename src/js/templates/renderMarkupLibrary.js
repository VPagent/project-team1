import { matchGenresById } from '../findGenres/findGenres';

export const myLibraryContainer = document.querySelector(
  '.film-myLibrary__list'
);

const headerButtonlist = document.querySelector('.header-buttonlist');

export const btnWatched = document.querySelector('.js-watched');
export const btnQueue = document.querySelector('.js-queue');

const PER_PAGE = 6;
let currentPage = 1;

const imgNotFound = document.querySelector('.img-not-found');

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
  }
  if (evt.target.classList.contains('js-queue')) {
    filmKey = 'Queue';
    const savedFilms = localStorage.getItem(filmKey);
    const parsedFilms = JSON.parse(savedFilms);
    myLibraryContainer.innerHTML = '';
    renderMarkupLibrary(parsedFilms);
  }
}

export function renderMarkupLibrary(parsedFilms) {
  if (parsedFilms.length === 0) {
    // imgNotFound.classList.add('open');
    return errorBox(myLibraryContainer)
    
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
  myLibraryContainer.insertAdjacentHTML('beforeend', markup);
}

function errorBox(div){
  return div.innerHTML = `<div class="error-box">
  <p class="error-text-lib">Whoops( </br>
  you haven't added anything yet
  </p>
  </div>`
}