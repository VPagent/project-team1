import { onClickEvt } from '../pagination/paginationLibrary';
import { matchGenresById } from '../findGenres/findGenres';
// import { pagination } from '../pagination/pagination';


const myLibraryContainer = document.querySelector('.film-myLibrary__list');
const headerButtonlist = document.querySelector('.header-buttonlist');

let filmKey = 'Watched';

const savedFilms = localStorage.getItem(filmKey);
const parsedFilms = JSON.parse(savedFilms);
myLibraryContainer.innerHTML = '';
renderMarkupLibrary(parsedFilms)

headerButtonlist.addEventListener('click', getFilmsKey);
function getFilmsKey(evt) {
  if(evt.target.nodeName !== "BUTTON"){
      return
    }
  if (evt.target.classList.contains('js-watched')) {
    filmKey = 'Watched'
    const savedFilms = localStorage.getItem(filmKey);
    const parsedFilms = JSON.parse(savedFilms);
    myLibraryContainer.innerHTML = '';
     renderMarkupLibrary(parsedFilms)
  }
  if (evt.target.classList.contains('js-queue')) {
    filmKey = 'Queue'
     console.log(filmKey);
     const savedFilms = localStorage.getItem(filmKey);
    const parsedFilms = JSON.parse(savedFilms);
    myLibraryContainer.innerHTML = '';
    renderMarkupLibrary(parsedFilms);
  }
}

// console.log(parsedFilms); // settings object

export function renderMarkupLibrary(parsedFilms) {
  console.log(parsedFilms);
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
                    // pagination(data.page, data.total_pages);
                    // return markup;
                    myLibraryContainer.insertAdjacentHTML('beforeend', markup);
                  }



