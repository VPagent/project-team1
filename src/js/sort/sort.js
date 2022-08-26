import { getWeekTrendData, getDayTrendData } from '../api/api_fetch';
import { renderMarkup } from '../templates/renderMarkup';
import { hideSpinner, filmGallery } from '../../index';

const buttonDay = document.querySelector('.sort-button_day');
const buttonWeek = document.querySelector('.sort-button_week');
const form = document.querySelector('.header-form');
const sort = document.querySelector('.sort');

function changeClassButton(sort) {
  if (sort === 'week') {
    buttonWeek.classList.add('clickOn');
    buttonDay.classList.remove('clickOn');
    buttonWeek.setAttribute('disabled', 'disabled');
    buttonDay.removeAttribute('disabled');
  } else {
    buttonDay.classList.add('clickOn');
    buttonWeek.classList.remove('clickOn');
    buttonDay.setAttribute('disabled', 'disabled');
    buttonWeek.removeAttribute('disabled');
  }
}

(function switchButton() {
  const sort = localStorage.getItem('sort');
  changeClassButton(sort);
})();

buttonDay.addEventListener('click', clickOnButtonDay);
buttonWeek.addEventListener('click', clickOnButtonWeek);
form.addEventListener('submit', onSearch);

function onSearch() {
  sort.classList.add('hidden-sort');
}

function clickOnButtonDay() {
  changeClassButton('day');
  localStorage.setItem('sort', 'day');
  getDayTrendData().then(data => renderData(data));
}

function clickOnButtonWeek() {
  changeClassButton('week');
  localStorage.setItem('sort', 'week');
  getWeekTrendData().then(data => renderData(data));
}

export function renderData(data) {
  localStorage.setItem('current films', JSON.stringify(data.results));
  filmGallery.innerHTML = '';
  filmGallery.insertAdjacentHTML('beforeend', renderMarkup(data));
  hideSpinner();
  pagination(data.page, data.total_pages);
}
