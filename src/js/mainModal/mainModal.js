const openModalBtn = document.querySelector('.film-gallery__list');
const closeModalBtn = document.querySelector('[data-modal-main-close]');
const modal = document.querySelector('[data-main-modal]');
// console.log(openModalBtn);
openModalBtn.addEventListener('click', openToggleModal);
closeModalBtn.addEventListener('click', closeToggleModal);

export function openToggleModal(evt) {
  modal.classList.remove('is-hidden');
  console.log(evt.path[2]);
}

function closeToggleModal(evt) {
  modal.classList.add('is-hidden');
  //   console.log(evt.target);
}
