import { renderMarkupModal } from './renderMarkupModal';

const openModalBtn = document.querySelector('.film-gallery__list');
const closeModalBtn = document.querySelector('[data-modal-main-close]');
const modal = document.querySelector('[data-main-modal]');
const modalContainer = document.querySelector('.main-modal__container');
const body = document.querySelector('body');
const backdrop = document.querySelector('.main-modal__backdrop');
// pasha

// 
openModalBtn.addEventListener('click', misClick);

body.addEventListener('keyup', esc)
closeModalBtn.addEventListener('click', closeToggleModal);
document.addEventListener('click', clickOverlay);
let currentFilm;
let watchedBtn;
let queueBtn;
let watchedObj = []
let queueObj = []

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
    currentFilm = films.find(film => film.id.toString() === id);
    // console.log(currentFilm);
    const modalContent = renderMarkupModal(currentFilm);
    modalContainer.innerHTML = modalContent;
  // PASHA
  // let watchedObj = []
  // let queueObj = []
    const modalBtnList = document.querySelector(".main-modal__buttons")
    modalBtnList.addEventListener("click", onBtnClickInModal)
    watchedBtn = document.querySelector(".main-modal__buttons--watched")
    queueBtn = document.querySelector(".main-modal__buttons--queue")
    // проверка, есть ли объект в локальном хранилище

    if(localStorage.getItem("Watched").includes(currentFilm.id)){
      watchedBtn.textContent = "Remove in watched"
      watchedBtn.classList.add("added")
    }
    if(localStorage.getItem("Queue").includes(currentFilm.id)){
      queueBtn.textContent = "Remove in queue"
      queueBtn.classList.add("added")
    }
    

  }
}
function onBtnClickInModal(event){
  if(event.target.nodeName !== "BUTTON"){
    return
  }

  if(event.target.classList.contains("main-modal__buttons--watched")){
    if(localStorage.getItem("Watched")){
      watchedObj = JSON.parse(localStorage.getItem("Watched"))
    }
    if(event.target.classList.contains("added")){
      const idx = watchedObj.findIndex(elem => elem.id === currentFilm.id)
      watchedObj.splice(idx, 1)
      localStorage.setItem("Watched", JSON.stringify(watchedObj))
      watchedBtn.textContent = "Add to watched"
      watchedBtn.classList.remove("added")
      return
    }
    watchedObj.push(currentFilm)
    localStorage.setItem("Watched", JSON.stringify(watchedObj))
    watchedBtn.textContent = "Remove in watched"
    watchedBtn.classList.add("added")
  }

  if(event.target.classList.contains("main-modal__buttons--queue")){
    if(localStorage.getItem("Queue")){
      queueObj = JSON.parse(localStorage.getItem("Queue"))
    }
    if(event.target.classList.contains("added")){
      const idx = queueObj.findIndex(elem => elem.id === currentFilm.id)
      queueObj.splice(idx, 1)
      localStorage.setItem("Queue", JSON.stringify(queueObj))
      queueBtn.textContent = "Add to queue"
      queueBtn.classList.remove("added")
      return
    }
    queueObj.push(currentFilm)
    localStorage.setItem("Queue", JSON.stringify(queueObj))
    queueBtn.textContent = "Remove in queue"
    queueBtn.classList.add("added")
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

function esc(key) {
  if (key.code === 'Escape') {
    closeToggleModal();
  }
}


