export { onClickEvt };
export { paginationLibrary };

export let a;

const paginationLibraryContainer = document.querySelector(
  '.page__list-library'
);

function paginationLibrary(currentPage, allPages) {
  console.log(currentPage);
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

  paginationLibraryContainer.innerHTML = markup;
}
function onClickEvt(event) {
  if (event.target.nodeName !== 'A') {
    return;
  }
  return event.target.textContent;
  // const WATCHED_KEY = localStorage.getItem('Watched');
  // const pages = JSON.parse(WATCHED_KEY);
  // console.log(pages);
  // if (event.target.nodeName !== 'A') {
  //   return;
  // }
  // if (event.target.classList.contains('page__arrow--left')) {
  //   getTrendData((globalCurrentPage -= 1)).then(data => {
  //     localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));
  //     filmGallery.innerHTML = '';
  //     filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
  //     hideSpinner();
  //     pagination(data.page, data.total_pages);
  //   });
  //   return;
  // }
  // if (event.target.classList.contains('page__arrow--right')) {
  //   if (valueFromInput) {
  //     fetchMovieSearch(valueFromInput, (globalCurrentPage += 1)).then(data => {
  //       localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));
  //       filmGallery.innerHTML = '';
  //       filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
  //       hideSpinner();
  //       pagination(data.page, data.total_pages);
  //     });
  //     return;
  //   }
  //   getTrendData((globalCurrentPage += 1)).then(data => {
  //     localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));
  //     filmGallery.innerHTML = '';
  //     filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
  //     hideSpinner();
  //     pagination(data.page, data.total_pages);
  //   });
  //   return;
  // }
  // if (event.target.textContent === '...') {
  //   return;
  // }
  // const page = event.target.textContent;

  // if (valueFromInput) {
  //   fetchMovieSearch(valueFromInput, page).then(data => {
  //     console.log(data);
  //     localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));
  //     filmGallery.innerHTML = '';
  //     filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
  //     hideSpinner();
  //     pagination(data.page, data.total_pages);
  //   });
  //   return;
  // } else {
  //   getTrendData(page).then(data => {
  //     localStorage.setItem(CURRENT_FILMS_KEY, JSON.stringify(data.results));
  //     filmGallery.innerHTML = '';
  //     filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
  //     hideSpinner();
  //     pagination(data.page, data.total_pages);
  //   });
  //   return;
  // }
}

// paginationLibraryContainer.addEventListener('click', onClickEvt);
