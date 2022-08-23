import {onFormSubmit} from './js/header/header_value';
import { renderMarkup } from './js/templates/renderMarkup';
import './js/footer/footer-modal'
const filmGallery = document.querySelector('.film-gallery__list');
async function fetchImages() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=8760b701d30b729e44d512f24647f496'
  );
  const json = await response.json();
  return json;
}

fetchImages()
  .then(response => {
    filmGallery.insertAdjacentHTML('beforeend', renderMarkup(response));
  })
  .catch(console.error);
