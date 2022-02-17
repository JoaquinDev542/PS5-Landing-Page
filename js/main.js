const ToggleButton =document.getElementsByClassName('toggle-button') [0];
const List =document.getElementsByClassName('list') [0] ;
console.log('ToggleButton') 

ToggleButton.addEventListener ('click' , () => {
    List.classList.toggle ('active')
})