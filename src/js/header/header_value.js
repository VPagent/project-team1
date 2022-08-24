import { fetchMovieSearch } from '../api/api_fetch';
import { renderMarkup } from '../templates/renderMarkup';
import { filmGallery } from '../../index';
const form = document.querySelector('.header-form');
import { pagination } from '../pagination/pagination';
const errorText = document.querySelector('.error-text');
const searchBtn = form[1];
const CURRENT_FILMS_KEY = 'current films';

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  errorText.classList.remove('is-visible');

  const inputValue = event.target[0].value.trim('');
  filmGallery.innerHTML = '';

  fetchMovieSearch(inputValue).then(data => {

    if (!inputValue || data.results.length === 0) {
      errorText.classList.add('is-visible');
      searchBtn.classList.add('is-hidden');
      filmGallery.innerHTML = markError();
      removeClass();
      return;
    }

    filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
    filmGallery.insertAdjacentHTML(
      'beforeend',
      pagination(data.page, data.total_pages, inputValue)
    );
    localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));

  });
  form.reset();
}

function removeClass() {
  setTimeout(() => {
    errorText.classList.remove('is-visible');
    searchBtn.classList.remove('is-hidden');
  }, 2000);
}
function markError() {
  return `<div class="error-box">
          <h2 class="error-box__whoops">Whoops(</h2>
          <p class="error-box__text">Search result not successful. Enter the correct movie name and</p>
    </div>`;
}

export { onFormSubmit, form };
