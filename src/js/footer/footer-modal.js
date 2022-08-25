
import showConfetti from './confetti';

const openPopUp = document.querySelector('.open-pop-up');
const closePopUp = document.querySelector('.pop-up-close');
const popUp = document.querySelector('.pop-up');
const body = document.querySelector('body');
const popUpContainer = document.querySelector('.pop-up-container');


openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('open');
  showConfetti();
  body.classList.add('disable-scroll');
});

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('open');
  body.classList.remove('disable-scroll');
});


  body.addEventListener('keyup', e => {
    if (e.code === 'Escape') {
      popUp.classList.remove('open');
      body.classList.remove('disable-scroll');
    }
  });

  window.addEventListener('click', (e) => {
    if (e.target == popUpContainer) {
      popUp.classList.remove('open');
      body.classList.remove('disable-scroll');
    }
  })
