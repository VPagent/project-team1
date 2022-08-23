import {fetchMovieSearch} from '../api/api_fetch'
import { renderMarkup } from '../templates/renderMarkup'
import { filmGallery } from '../../index'
const form = document.querySelector(".header-form")
const errorText = document.querySelector(".error-text")
const searchBtn = form[1] 

console.log(searchBtn)

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event){
    event.preventDefault()
    errorText.classList.remove("is-visible")
    localStorage.removeItem("films")
    const inputValue = event.target[0].value.trim("")
    filmGallery.innerHTML = ""
    
    fetchMovieSearch(inputValue).then(data => {
        if(!inputValue || data.results.length === 0){
            errorText.classList.add("is-visible") 
            searchBtn.classList.add("is-hidden")
            filmGallery.innerHTML= markError()
            removeClass() 
            return
        }
        filmGallery.insertAdjacentHTML("beforeend", renderMarkup(data))
        console.log(data)
        addLocalStore(data)
    }) 
    form.reset()
}

function removeClass(){
    setTimeout(() => {
        errorText.classList.remove("is-visible")
        searchBtn.classList.remove("is-hidden")
    },2000)
}
function markError(){
    return `<div class="error-box">
          <h2 class="error-box__whoops">Whoops(</h2>
          <p class="error-box__text">Search result not successful. Enter the correct movie name and</p>      
    </div>`
}
function addLocalStore(data){
    let localObj = []

    data.results.forEach(elem => {
        localObj.push(elem)
    });

    localStorage.setItem("films", JSON.stringify(localObj))
}
export {onFormSubmit, addLocalStore, form} 