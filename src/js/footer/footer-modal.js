const openPopUp = document.querySelector('.open-pop-up');
console.log(openPopUp);
const closePopUp = document.querySelector('.pop-up-close');
const popUp = document.querySelector('.pop-up');
const body = document.querySelector('body');

openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('open');
  // body.classList.add(modal_open);
});

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('open');
});

body.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    popUp.classList.remove('open');
  }
});
