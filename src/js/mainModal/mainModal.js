const openModalBtn = document.querySelector('.film-gallery__list');
const closeModalBtn = document.querySelector('[data-modal-main-close]');
const modal = document.querySelector('[data-main-modal]');
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
}

function clickOverlay(overLay) {
  const isContain = overLay.target.classList.contains('main-modal__backdrop');
  if (isContain) {
    closeToggleModal();
  }
}
