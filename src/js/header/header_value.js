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

  fetchMovieSearch(inputValue).then(data => {
    console.log(data);

    if (!inputValue || data.results.length === 0) {
      errorText.classList.add('is-visible');
      searchBtn.classList.add('is-hidden');

      removeClass();
      return
    }

    filmGallery.innerHTML = '';
    filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
    
    localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));
    localStorage.setItem('INPUT_VALUE', JSON.stringify(inputValue));

  });
  form.reset();
}

function removeClass() {
  setTimeout(() => {
    errorText.classList.remove('is-visible');
    searchBtn.classList.remove('is-hidden');
  }, 2000);
}


export { onFormSubmit, form };
