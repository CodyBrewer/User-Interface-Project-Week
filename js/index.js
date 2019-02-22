// JS goes here
const hamburger = document.getElementById('hamburger');
const closeButton = document.getElementById('close')
const nav = document.querySelector('nav');
const navigation = document.querySelector('.navigation');
//check onwindow resize event
hamburger.addEventListener('click', ()=>{
    nav.style.visibility = 'visible';
    navigation.style.height = '100vh';
    navigation.style.zIndex = 2;
    navigation.style.opactity = 0.40;
    closeButton.classList.toggle('invisible');
    hamburger.classList.toggle('invisible');

})
closeButton.addEventListener('click', ()=>{
    closeButton.classList.toggle('invisible');
    hamburger.classList.toggle('invisible');
    navigation.style.height = '31px';
    nav.style.visibility = 'hidden';
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