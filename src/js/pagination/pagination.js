export { pagination };

import { renderMarkup } from '../templates/renderMarkup';
import { getTrendData } from '../api/api_fetch';
import { fetchMovieSearch } from '../api/api_fetch';
import { filmGallery } from '../../index';
import { hideSpinner } from '../../index';

const paginationContainer = document.querySelector('.page__list');

let globalCurrentPage = 0;
let globalAllPages = 0;

const CURRENT_FILMS_KEY = 'current films';

function pagination(currentPage, allPages) {
  let markup = '';
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;

  globalCurrentPage = currentPage;
  globalAllPages = allPages;

  if (currentPage > 1) {
    markup += `<li class="page__item"><a href="#render" class="page__arrow page__arrow--left"></a></li>`;
  }
  if (currentPage > 1) {
    markup += `<li class="page__item page__item--hidden"><a href="#render" class="page__figure page__figure--transform">1</a></li>`;
  }
  if (currentPage > 4) {
    markup += `<li class="page__item page__item--hidden"><a class="page__dots">...</a></li>`;
  }
  if (currentPage > 3) {
    markup += `<li class="page__item"><a href="#render" class="page__figure page__figure--transform">${beforeTwoPage}</a></li>`;
  }
  if (currentPage > 2) {
    markup += `<li class="page__item"><a href="#render" class="page__figure page__figure--transform">${beforePage}</a></li>`;
  }
  markup += `<li class="page__item page__item--is-active"><a href="#render" class="page__figure">${currentPage}</a></li>`;

  if (allPages - 1 > currentPage) {
    markup += `<li class="page__item"><a href="#render" class="page__figure page__figure--transform">${afterPage}</a></li>`;
  }
  if (allPages - 2 > currentPage) {
    markup += `<li class="page__item"><a href="#render" class="page__figure page__figure--transform">${afterTwoPage}</a></li>`;
  }
  if (allPages - 3 > currentPage) {
    markup += `<li class="page__item page__item--hidden"><a class="page__dots">...</a></li>`;
  }
  if (allPages > currentPage) {
    markup += `<li class="page__item page__item--hidden"><a href="#render" class="page__figure page__figure--transform">${allPages}</a></li>`;
    markup += `<li class="page__item arrow"><a href="#render" class="page__arrow page__arrow--right"></a></li>`;
  }

  paginationContainer.innerHTML = markup;
}

paginationContainer.addEventListener('click', onClickEvent);

function onClickEvent(event) {
  let valueFromInput = JSON.parse(localStorage.getItem('INPUT_VALUE'));
  if (event.target.nodeName !== 'A') {
    return;
  }
  if (event.target.classList.contains('page__arrow--left')) {
    if (valueFromInput) {
      fetchMovieSearch(valueFromInput, (globalCurrentPage -= 1)).then(data => {
        localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));
        filmGallery.innerHTML = '';
        filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
        hideSpinner();
        pagination(data.page, data.total_pages);
      });
      return;
    }
    getTrendData((globalCurrentPage -= 1)).then(data => {
      localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));
      filmGallery.innerHTML = '';
      filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
      hideSpinner();
      pagination(data.page, data.total_pages);
    });
    return;
  }
  if (event.target.classList.contains('page__arrow--right')) {
    if (valueFromInput) {
      fetchMovieSearch(valueFromInput, (globalCurrentPage += 1)).then(data => {
        localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));
        filmGallery.innerHTML = '';
        filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
        hideSpinner();
        pagination(data.page, data.total_pages);
      });
      return;
    }
    getTrendData((globalCurrentPage += 1)).then(data => {
      localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));
      filmGallery.innerHTML = '';
      filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
      hideSpinner();
      pagination(data.page, data.total_pages);
    });
    return;
  }
  if (event.target.textContent === '...') {
    return;
  }
  const page = event.target.textContent;

  if (valueFromInput) {
    fetchMovieSearch(valueFromInput, page).then(data => {
      console.log(data);
      localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));
      filmGallery.innerHTML = '';
      filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
      hideSpinner();
      pagination(data.page, data.total_pages);
    });
    return;
  } else {
    getTrendData(page).then(data => {
      localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));
      filmGallery.innerHTML = '';
      filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
      hideSpinner();
      pagination(data.page, data.total_pages);
    });
    return;
  }
}
