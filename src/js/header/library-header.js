
const btnList = document.querySelector(".header-buttonlist")
const watchedBtn = document.querySelector(".js-watched")
const queueBtn = document.querySelector(".js-queue")

btnList.addEventListener("click", onBtnClick)

function onBtnClick(event){
    if(event.target.nodeName !== "BUTTON"){
        return
    }
    event.target.classList.add("current--btn")
    if(event.target.classList.contains("js-watched")){
        queueBtn.classList.remove("current--btn")
    }
    if(event.target.classList.contains("js-queue")){
        watchedBtn.classList.remove("current--btn")
    }
}


