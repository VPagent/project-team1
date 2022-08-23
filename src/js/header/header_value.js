export {onFormSubmit} 
const form = document.querySelector(".header-form")
const errorText = document.querySelector(".error-text")
console.log(form)

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event){
    event.preventDefault()
    errorText.classList.remove("is-visible")
    const inputValue = event.target[0].value.trim("")

    if(!inputValue){
        errorText.classList.add("is-visible") 
        removeClass() 
    }
    
    
    form.reset()
}

function removeClass(){
    setTimeout(() => errorText.classList.remove("is-visible"),2000)
}