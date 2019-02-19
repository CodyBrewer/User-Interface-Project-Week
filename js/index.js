// JS goes here
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav')
let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
console.log(w);
hamburger.addEventListener('click', ()=>{
    nav.style.visibility = 'visible';
})

const imgOne = document.getElementById("img-1");
const imgTwo = document.getElementById("img-2");
if(w <= 500){
    imgOne.src = "img/home/home-mobile-img-1.png";
    imgTwo.src = "img/home/home-mobile-img-2.png";
} else {
    imgOne.src ="img/home/home-img-1.png";
    imgTwo.src = "img/home/home-img-2.png";
}