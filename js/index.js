// JS goes here
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav')

hamburger.addEventListener('click', ()=>{
    nav.style.visibility = 'visible';
})