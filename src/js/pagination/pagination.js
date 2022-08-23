export { pagination };
// import search froms
import { renderMarkup } from '../templates/renderMarkup';
import fetchImages from '../../index';

const paginationContainer = document.querySelector('.pagination-container');
let globalCurrentPage = 0;
let globalAllPages = 0;
// export default
function pagination(currentPage, allPages) {
  let markup = '';
  //   let activePage = '';
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;
  globalCurrentPage = currentPage;
  globalAllPages = allPages;

  if (currentPage > 1) {
    markup += `<li>&#129144;</li>`;
  }
  if (currentPage > 1) {
    markup += `<li>1</li>`;
  }
  if (currentPage > 4) {
    markup += `<li>...</li>`;
  }
  if (currentPage > 3) {
    markup += `<li>${beforeTwoPage}</li>`;
  }
  if (currentPage > 2) {
    markup += `<li>${beforePage}</li>`;
  }
  markup += `<li><b>${currentPage}</b></li>`;

  if (allPages - 1 > currentPage) {
    markup += `<li>${afterPage}</li>`;
  }
  if (allPages - 2 > currentPage) {
    markup += `<li>${afterTwoPage}</li>`;
  }
  if (allPages - 3 > currentPage) {
    markup += `<li>...</li>`;
  }
  if (allPages > currentPage) {
    markup += `<li>${allPages}</li>`;
    markup += `<li>&#129146;</li>`;
  }

  paginationContainer.innerHTML = markup;
}

paginationContainer.addEventListener('click', onClickEvent);

function onClickEvent(event) {
  if (event.target.nodeName !== 'LI') {
    return;
  }
  if (event.target.textContent === '🡸') {
    fetchImages((globalCurrentPage -= 1)).then(data => renderMarkup(data));
    return;
  }
  if (event.target.textContent === '🡺') {
    //   pagination((globalCurrentPage += 1));
    fetchImages((globalCurrentPage += 1)).then(data => renderMarkup(data));
    return;
  }
  if (event.target.textContent === '...') {
    return;
  }
  const page = event.target.textContent;
  fetchImages(page).then(data => {
    // console.log(data);
    renderMarkup(data);
    pagination(data.page, data.total_pages);
  });
  //   (page);
}
