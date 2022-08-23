export { pagination };

import { renderMarkup } from '../templates/renderMarkup';
import { getTrendData } from '../api/api_fetch';
import { filmGallery } from '../../index';

const paginationContainer = document.querySelector('.page__list');

let globalCurrentPage = 0;
let globalAllPages = 0;

function pagination(currentPage, allPages) {
  let markup = '';
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;

  globalCurrentPage = currentPage;
  globalAllPages = allPages;

  if (currentPage > 1) {
    markup += `<li class="page__item"><span class="page__arrow page__arrow--left"></span></li>`;
  }
  if (currentPage > 1) {
    markup += `<li class="page__item page__item--hidden"><span class="page__figure page__figure--transform">1</span></li>`;
  }
  if (currentPage > 4) {
    markup += `<li class="page__item page__item--hidden"><span class="page__dots">...</span></li>`;
  }
  if (currentPage > 3) {
    markup += `<li class="page__item"><span class="page__figure page__figure--transform">${beforeTwoPage}</span></li>`;
  }
  if (currentPage > 2) {
    markup += `<li class="page__item"><span class="page__figure page__figure--transform">${beforePage}</span></li>`;
  }
  markup += `<li class="page__item page__item--is-active"><span class="page__figure">${currentPage}</span></li>`;

  if (allPages - 1 > currentPage) {
    markup += `<li class="page__item"><span class="page__figure page__figure--transform">${afterPage}</span></li>`;
  }
  if (allPages - 2 > currentPage) {
    markup += `<li class="page__item"><span class="page__figure page__figure--transform">${afterTwoPage}</span></li>`;
  }
  if (allPages - 3 > currentPage) {
    markup += `<li class="page__item page__item--hidden"><span class="page__dots">...</span></li>`;
  }
  if (allPages > currentPage) {
    markup += `<li class="page__item page__item--hidden"><span class="page__figure page__figure--transform">${allPages}</span></li>`;
    markup += `<li class="page__item arrow"><span class="page__arrow page__arrow--right"></span></li>`;
  }

  paginationContainer.innerHTML = markup;
}

paginationContainer.addEventListener('click', onClickEvent);

function onClickEvent(event) {
  console.log(event.target);
  if (event.target.nodeName !== 'SPAN') {
    return;
  }
  if (event.target.classList.contains('page__arrow--left')) {
    getTrendData((globalCurrentPage -= 1)).then(data => {
      filmGallery.innerHTML = '';
      filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
      pagination(data.page, data.total_pages);
    });
    return;
  }
  if (event.target.classList.contains('page__arrow--right')) {
    getTrendData((globalCurrentPage += 1)).then(data => {
      filmGallery.innerHTML = '';
      filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
      pagination(data.page, data.total_pages);
    });
    return;
  }
  if (event.target.textContent === '...') {
    return;
  }
  const page = event.target.textContent;
  getTrendData(page).then(data => {
    filmGallery.innerHTML = '';
    filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
    pagination(data.page, data.total_pages);
  });
}
