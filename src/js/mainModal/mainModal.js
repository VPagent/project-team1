import { renderMarkupModal } from './renderMarkupModal';

const openModalBtn = document.querySelector('.film-gallery__list');
const closeModalBtn = document.querySelector('[data-modal-main-close]');
const modal = document.querySelector('[data-main-modal]');
const modalContainer = document.querySelector('.main-modal__container');
const body = document.querySelector('body');
const backdrop = document.querySelector('.main-modal__backdrop');

openModalBtn.addEventListener('click', misClick);
body.addEventListener('keyup', esc);
closeModalBtn.addEventListener('click', closeToggleModal);
document.addEventListener('click', clickOverlay);

function misClick(click) {
  if (click.srcElement.className === 'film-gallery__image') {
    // console.log(e.target.alt);
    modal.classList.remove('is-hidden');
    body.classList.add('overflow');

    const { id } = click.path.find(path => path.id);
    // console.log(id);

    const localData = localStorage.getItem('current films');

    const films = JSON.parse(localData);
    // console.log(films);
    const currentFilm = films.find(film => film.id.toString() === id);
    // console.log(currentFilm);
    const modalContent = renderMarkupModal(currentFilm);
    modalContainer.innerHTML = modalContent;
  }
}

function esc(key) {
  if (key.code === 'Escape') {
    closeToggleModal();
  }
}

function closeToggleModal() {
  modal.classList.add('is-hidden');
  body.classList.remove('overflow');
  // modalContainer.innerHTML = '';
}

function clickOverlay(overLay) {
  const isContain = overLay.target.classList.contains('main-modal__backdrop');
  if (isContain) {
    closeToggleModal();
  }
}
