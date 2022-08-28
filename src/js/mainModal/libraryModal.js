import { renderMarkupModal } from "./renderMarkupModal"
import { filmKey, renderMarkupLibrary, myLibraryContainer, btnWatched, btnQueue } from "../templates/renderMarkupLibrary"
let CURRENT_STORAGE
const filmList = document.querySelector(".film-myLibrary__list")

const modal = document.querySelector('[data-main-modal]');
const closeModalBtn = document.querySelector('[data-modal-main-close]');
const modalContainer = document.querySelector('.main-modal__container');
const body = document.querySelector('body');
const backdrop = document.querySelector('.main-modal__backdrop');

filmList.addEventListener("click", onFilmClick)

function onFilmClick(event){
    if(!event.target.closest(".film-gallery__item")){
        return
    }
    modal.classList.remove('is-hidden');
    body.classList.add('overflow');
    CURRENT_STORAGE = filmKey
    const  {id}  = event.target.closest(".film-gallery__item")
    const allFilms  = JSON.parse(localStorage.getItem(CURRENT_STORAGE))

    let currFilm = allFilms.find(elem => elem.id.toString() === id)
    
    modalContainer.innerHTML= renderMarkupModal(currFilm)
    body.addEventListener("keyup", esc)
    closeModalBtn.addEventListener('click', closeToggleModal);
    document.addEventListener('click', clickOverlay);
    let watchedObj = []
    let queueObj = []
    let watchedBtnL = document.querySelector(".main-modal__buttons--watched")
    watchedBtnL.textContent = "Remove in watched"
    watchedBtnL.classList.add("added")

    let queueBtnL = document.querySelector(".main-modal__buttons--queue")
    queueBtnL.textContent = "Remove in queue"
    queueBtnL.classList.add("added")

    if (!localStorage.getItem('Watched').includes(currFilm.id)) {
      watchedBtnL.textContent = 'Add to watched';
      watchedBtnL.classList.remove('added');
    }
    if (!localStorage.getItem('Queue').includes(currFilm.id)) {
      queueBtnL.textContent = 'Add to queue';
      queueBtnL.classList.remove('added');
    }

    const modalBtnList = document.querySelector(".main-modal__buttons")
    modalBtnList.addEventListener("click", onBtnClickInModalLib)
    function onBtnClickInModalLib(event){
      if(event.target.nodeName !== "BUTTON"){
          return
      }
  
      if(event.target.classList.contains("main-modal__buttons--watched")){
          if(localStorage.getItem("Watched")){
            watchedObj = JSON.parse(localStorage.getItem("Watched"))
          }
          if(event.target.classList.contains("added")){
            const idx = watchedObj.findIndex(elem => elem.id === currFilm.id)
            watchedObj.splice(idx, 1)
            localStorage.setItem("Watched", JSON.stringify(watchedObj))
            watchedBtnL.textContent = "Add to watched"
            watchedBtnL.classList.remove("added")
            myLibraryContainer.innerHTML=""
            renderMarkupLibrary( JSON.parse(localStorage.getItem(CURRENT_STORAGE)))
            return
          }
          watchedObj.push(currFilm)
          localStorage.setItem("Watched", JSON.stringify(watchedObj))
          watchedBtnL.textContent = "Remove in watched"
          watchedBtnL.classList.add("added")
          myLibraryContainer.innerHTML=""
          renderMarkupLibrary( JSON.parse(localStorage.getItem(CURRENT_STORAGE)))
      }
  
      if(event.target.classList.contains("main-modal__buttons--queue")){
          if(localStorage.getItem("Queue")){
            queueObj = JSON.parse(localStorage.getItem("Queue"))
          }
  
          if(event.target.classList.contains("added")){
            const idx = queueObj.findIndex(elem => elem.id === currFilm.id)
            queueObj.splice(idx, 1)
            localStorage.setItem("Queue", JSON.stringify(queueObj))
            queueBtnL.textContent = "Add to queue"
            queueBtnL.classList.remove("added")
            myLibraryContainer.innerHTML=""
            renderMarkupLibrary( JSON.parse(localStorage.getItem(CURRENT_STORAGE)))
            return
          }
          queueObj.push(currFilm)
          localStorage.setItem("Queue", JSON.stringify(queueObj))
          queueBtnL.textContent = "Remove in queue"
          queueBtnL.classList.add("added")
          myLibraryContainer.innerHTML=""
          renderMarkupLibrary( JSON.parse(localStorage.getItem(CURRENT_STORAGE)))
      }
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
    body.removeEventListener('keyup', esc);
}
  
function clickOverlay(overLay) {
    const isContain = overLay.target.classList.contains('main-modal__backdrop');
    if (isContain) {
      closeToggleModal();
    }
}


