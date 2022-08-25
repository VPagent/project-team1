export { onClickEvt };
import { pagination } from './pagination';

// const paginationLibraryContainer = document.querySelector(
//   '.page__list-library'
// );

function onClickEvt(event) {
  const WATCHED_KEY = localStorage.getItem('Watched');
  console.log(WATCHED_KEY);
  if (event.target.nodeName !== 'A') {
    return;
  }
  if (event.target.classList.contains('page__arrow--left')) {
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
