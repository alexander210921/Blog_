let buttonClick = document.getElementById('mybutton')
let container = document.getElementById('contt')
let buttonClick2 = document.getElementById('mybutton3')

buttonClick.addEventListener('click',ocultar)

buttonClick2.addEventListener('click',ver)

function ocultar(){
    container.style.transitionProperty ='opacity-top'
    container.style.transitionDuration='20s, 10s'    
    container.style.display ='none'
    buttonClick2.style.display='flex'
}
function ver(){
    container.style.display ='flex'
    buttonClick2.style.display='none'


}