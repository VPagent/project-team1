import { form, onFormSubmit } from './js/header/header_value';
import { renderMarkup } from './js/templates/renderMarkup';
import {
  getTrendData,
  fetchMovieSearch,
  fetchMovieId,
  getGenre,
} from './js/api/api_fetch';
import { renderMarkupModal } from './js/mainModal/renderMarkupModal';
import { openToggleModal } from './js/mainModal/mainModal';

export const filmGallery = document.querySelector('.film-gallery__list');
export const GENRES_KEY = 'genres';

async function checkGenresInLocaleStorage() {
  const { genres } = await getGenre();
  console.log(genres);
  localStorage.setItem(GENRES_KEY, JSON.stringify(genres));
}

if (!localStorage.getItem(GENRES_KEY)) {
  checkGenresInLocaleStorage();
}
getTrendData()
  .then(response => {
    // pagination(response.page, response.total_pages);
    filmGallery.insertAdjacentHTML('beforeend', renderMarkup(response));
  })
  .catch(console.error);
