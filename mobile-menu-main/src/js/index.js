const onAppInit = function(e){
    addListeners()
}

window.addEventListener('load', onAppInit)


const addListeners = function(){
    document.querySelector('#modalButton').addEventListener('click', onHandleMenuRequest)
}

const onHandleMenuRequest = function(){
    toggleViewState(document.querySelector('#mobileMenu'))
}

//update the modal view in the browser
const toggleViewState = function(element){
    const state = element.dataset.state;

    if(state === "false"){
        element.classList.remove('hide')
        element.classList.add('show')
        element.dataset.state = "true"
    }else{
        element.classList.add('hide')
        element.classList.remove('show')
        element.dataset.state = "false"
    }
}