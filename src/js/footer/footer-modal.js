
import showConfetti from './confetti';

const openPopUp = document.querySelector('.open-pop-up');
const closePopUp = document.querySelector('.pop-up-close');
const popUp = document.querySelector('.pop-up');
const body = document.querySelector('body');
const popUpContainer = document.querySelector('.pop-up-container');


openPopUp.addEventListener('click', tisClick)

function tisClick(click) {
  if (click.srcElement.className === 'open-pop-up') {
    click.preventDefault();
    popUp.classList.add('open');
    showConfetti();
    body.addEventListener('keyup', esc);
    window.addEventListener('click', onWindow);
    closePopUp.addEventListener('click', closeToggleModal)

  body.classList.add('disable-scroll');
  }
}

function esc(key) {
  if (key.code === 'Escape') {
    closeToggleModal();
  }
}

function closeToggleModal() {
  popUp.classList.remove('open');
  body.classList.remove('disable-scroll');
  body.removeEventListener('keyup', esc);
  window.removeEventListener('click', esc);
}

function onWindow(click) {
  if (click.target == popUpContainer) {
    closeToggleModal();
  }
}

