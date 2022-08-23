import {fetchMovieSearch} from '../api/api_fetch'

const form = document.querySelector(".header-form")
const errorText = document.querySelector(".error-text")
const searchBtn = form[1] 
console.log(searchBtn)

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event){
    event.preventDefault()
    errorText.classList.remove("is-visible")
    const inputValue = event.target[0].value.trim("")

    if(!inputValue){
        errorText.classList.add("is-visible") 
        searchBtn.classList.add("is-hidden")
        removeClass() 
    }
    console.log(inputValue)
    fetchMovieSearch(inputValue, 1)
    
    form.reset()
}

function removeClass(){
    setTimeout(() => {
        errorText.classList.remove("is-visible")
        searchBtn.classList.remove("is-hidden")
    },2000)
}
export {onFormSubmit, form} 