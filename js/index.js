// JS goes here
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav')
//check onwindow resize event
hamburger.addEventListener('click', ()=>{
    nav.style.visibility = 'visible';
})
const jumbotronImg = document.getElementById("jumbotron-img");
const imgOne = document.getElementById("img-1");
const imgTwo = document.getElementById("img-2");
const villaImg = document.getElementById("villa-img");
const outskirtsImg = document.getElementById("outskirts-img");
const blocksImg = document.getElementById("blocks-img");



function resize() {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // console.log(w);
    if(w > 500){
        jumbotronImg.src = "img/home/home-jumbotron.png"
        imgOne.src ="img/home/home-img-1.png";
        imgTwo.src = "img/home/home-img-2.png";
        villaImg.src = "img/home/home-villas-img.png";
        outskirtsImg.src = "img/home/home-outskirts-img.png";
        blocksImg.src = "img/home/home-the-blocks-img.png";
        console.log(jumbotronImg.src);
    } else {
        jumbotronImg.src = "img/home/home-mobile-jumbotron.png";
        imgOne.src = "img/home/home-mobile-img-1.png";
        imgTwo.src = "img/home/home-mobile-img-2.png";
        villaImg.src = "img/home/home-mobile-villas-img.png";
        outskirtsImg.src = "img/home/home-mobile-outskirts-img.png";
        blocksImg.src = "img/home/home-mobile-the-blocks-img.png";
        console.log(imgOne.src);
    }
}

window.onresize = resize;