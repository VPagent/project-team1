import { onClickEvt } from '../pagination/paginationLibrary';
import { matchGenresById } from '../findGenres/findGenres';
import { pagination } from '../pagination/pagination';

const myLibraryContainer = document.querySelector('.film-myLibrary__list');
const paginationContainer = document.querySelector('.page__list-library');

console.log(pagination);

const savedFilms = localStorage.getItem('current films');
const parsedFilms = JSON.parse(savedFilms);
console.log(parsedFilms); // settings object
// console.log(localStorage.setItem("genres"));

export function renderMarkupLibrary(parsedFilms) {
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

  let page = 10;
  const totalPages = Math.ceil(parsedFilms.length / 20);
  pagination(page, totalPages, paginationContainer, onClickEvt);
  return markup;
}

myLibraryContainer.insertAdjacentHTML(
  'beforeend',
  renderMarkupLibrary(parsedFilms)
);
