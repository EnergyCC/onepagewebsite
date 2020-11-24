import jsonData from './websitecontent.js';

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
const intervalTime = 5000;
let slideInterval;

let language;

language = 0;

// web content from json object
// Navigation
document.querySelector('.homeLink').innerHTML = jsonData.Language[language].Navigation.Home;
document.querySelector('.servicesLink').innerHTML = jsonData.Language[language].Navigation.Services;
document.querySelector('.galleryLink').innerHTML = jsonData.Language[language].Navigation.Gallery;
document.querySelector('.contactLink').innerHTML = jsonData.Language[language].Navigation.Contact;
// landing page
document.querySelector('#slideOne').getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Landing.SlideOne[0];
document.querySelector('#slideTwo').getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Landing.SlideTwo[0];
document.querySelector('#slideThree').getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Landing.SlideThree[0];
document.querySelector('#slideOne').getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Landing.SlideOne[1];
document.querySelector('#slideTwo').getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Landing.SlideTwo[1];
document.querySelector('#slideThree').getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Landing.SlideThree[1];

// Services page
document.querySelector('.serviceTitle').getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Services.ServiceTitle;

document.querySelector('.serviceOne').getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceOne.icon;
document.querySelector('.serviceTwo').getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceTwo.icon;
document.querySelector('.serviceThree').getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceThree.icon;
document.querySelector('.serviceFour').getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceFour.icon;
document.querySelector('.serviceFive').getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceFive.icon;
document.querySelector('.serviceSix').getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceSix.icon;
document.querySelector('.serviceSeven').getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceSeven.icon;
document.querySelector('.serviceEight').getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceEight.icon;

document.querySelector('.serviceOne').getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceOne.title;
document.querySelector('.serviceTwo').getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceTwo.title;
document.querySelector('.serviceThree').getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceThree.title;
document.querySelector('.serviceFour').getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceFour.title;
document.querySelector('.serviceFive').getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceFive.title;
document.querySelector('.serviceSix').getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceSix.title;
document.querySelector('.serviceSeven').getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceSeven.title;
document.querySelector('.serviceEight').getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceEight.title;

const nextSlide = () => {
    //get current class from current selected element
    const current = document.querySelector('.current');
    //remove current element class from
    current.classList.remove('current');
    //check for next slide
    if (current.nextElementSibling) {
        //Add current class to next sibling 
        current.nextElementSibling.classList.add('current');
    } else {
        //Add current to start
        slides[0].classList.add('current');
    }

    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    //get current class 
    const current = document.querySelector('.current');
    //remove current element class from div
    current.classList.remove('current');
    //check for prev slide
    if (current.previousElementSibling) {
        //add current to last sibling
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }

    setTimeout(() => current.classList.remove('current'));
}

//button events

nextBtn.addEventListener('click', e => {
    nextSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
})
prevBtn.addEventListener('click', e => {
    prevSlide();
    clearInterval(slideInterval);
    slideInterval = null;
})

//run next slide at interval time
slideInterval = setInterval(nextSlide, intervalTime);



//set scroll to top button
//scroll listening event
window.onscroll = () => {
        scrollToTop();
    }
    //function to check for scrolling over 150px from top
let scrollBtn = document.querySelector('#scrollTop');

function scrollToTop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.classList.remove('visibleBtn');
    } else {
        scrollBtn.classList.add('visibleBtn');
    }
}

//event listener to button to scroll top
scrollBtn.addEventListener('click', e => {
    window.scrollTo(0, 0);
})


console.log(window.screen.width);

// test about clicking

let serviceOneEv = document.querySelector('.serviceOne');
let serviceTwoEv = document.querySelector('.serviceTwo');
let serviceThreeEv = document.querySelector('.serviceThree');
let serviceFourEv = document.querySelector('.serviceFour');
let serviceFiveEv = document.querySelector('.serviceFive');
let serviceSixEv = document.querySelector('.serviceSix');
let serviceSevenEv = document.querySelector('.serviceSeven');
let serviceEightEv = document.querySelector('.serviceEight');
let calculatorCont = document.querySelector('.calculatorContent');
let calcInput = document.querySelector('.calculatorInput');
let calculatorTotal = document.querySelector('.calculatorTotal');

// get info card data
let cardData = document.querySelector('.servicesInformation');
cardData.getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceOne.icon
cardData.getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceOne.title;
cardData.getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceOne.body;

serviceOneEv.addEventListener('click', e =>{
    serviceOneEv.classList.add('serviceShadow');
    serviceTwoEv.classList.remove('serviceShadow');
    serviceThreeEv.classList.remove('serviceShadow');
    serviceFourEv.classList.remove('serviceShadow');
    serviceFiveEv.classList.remove('serviceShadow');
    serviceSixEv.classList.remove('serviceShadow');
    serviceSevenEv.classList.remove('serviceShadow');
    serviceEightEv.classList.remove('serviceShadow');
    if(screen.width > 550){
        cardData.style.borderRadius = '0px 20px 20px 20px';
    }
    cardData.getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceOne.icon
    cardData.getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceOne.title;
    cardData.getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceOne.body;
    
});

serviceTwoEv.addEventListener('click', e =>{
    serviceOneEv.classList.remove('serviceShadow');
    serviceTwoEv.classList.add('serviceShadow');
    serviceThreeEv.classList.remove('serviceShadow');
    serviceFourEv.classList.remove('serviceShadow');
    serviceFiveEv.classList.remove('serviceShadow');
    serviceSixEv.classList.remove('serviceShadow');
    serviceSevenEv.classList.remove('serviceShadow');
    serviceEightEv.classList.remove('serviceShadow');
    if(screen.width > 550){
        cardData.style.borderRadius = '20px 20px 20px 20px';
    }
    cardData.getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceTwo.icon;
    cardData.getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceTwo.title;
    cardData.getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceTwo.body;
    
});

serviceThreeEv.addEventListener('click', e =>{
    serviceOneEv.classList.remove('serviceShadow');
    serviceTwoEv.classList.remove('serviceShadow');
    serviceThreeEv.classList.add('serviceShadow');
    serviceFourEv.classList.remove('serviceShadow');
    serviceFiveEv.classList.remove('serviceShadow');
    serviceSixEv.classList.remove('serviceShadow');
    serviceSevenEv.classList.remove('serviceShadow');
    serviceEightEv.classList.remove('serviceShadow');
    if(screen.width > 550){
        cardData.style.borderRadius = '20px 20px 20px 20px';
    }
    cardData.getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceThree.icon;
    cardData.getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceThree.title;
    cardData.getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceThree.body;
    
});
serviceFourEv.addEventListener('click', e =>{
    serviceOneEv.classList.remove('serviceShadow');
    serviceTwoEv.classList.remove('serviceShadow');
    serviceThreeEv.classList.remove('serviceShadow');
    serviceFourEv.classList.add('serviceShadow');
    serviceFiveEv.classList.remove('serviceShadow');
    serviceSixEv.classList.remove('serviceShadow');
    serviceSevenEv.classList.remove('serviceShadow');
    serviceEightEv.classList.remove('serviceShadow');
    if(screen.width > 550){
        cardData.style.borderRadius = '20px 20px 20px 20px';
    }
    cardData.getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceFour.icon;
    cardData.getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceFour.title;
    cardData.getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceFour.body;
    
});
serviceFiveEv.addEventListener('click', e =>{
    serviceOneEv.classList.remove('serviceShadow');
    serviceTwoEv.classList.remove('serviceShadow');
    serviceThreeEv.classList.remove('serviceShadow');
    serviceFourEv.classList.remove('serviceShadow');
    serviceFiveEv.classList.add('serviceShadow');
    serviceSixEv.classList.remove('serviceShadow');
    serviceSevenEv.classList.remove('serviceShadow');
    serviceEightEv.classList.remove('serviceShadow');
    if(screen.width > 550){
        cardData.style.borderRadius = '20px 20px 20px 20px';
    }
    cardData.getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceFive.icon;
    cardData.getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceFive.title;
    cardData.getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceFive.body;
    
});
serviceSixEv.addEventListener('click', e =>{
    serviceOneEv.classList.remove('serviceShadow');
    serviceTwoEv.classList.remove('serviceShadow');
    serviceThreeEv.classList.remove('serviceShadow');
    serviceFourEv.classList.remove('serviceShadow');
    serviceFiveEv.classList.remove('serviceShadow');
    serviceSixEv.classList.add('serviceShadow');
    serviceSevenEv.classList.remove('serviceShadow');
    serviceEightEv.classList.remove('serviceShadow');
    if(screen.witdh > 550){
        cardData.style.borderRadius = '20px 20px 20px 20px';
    }
    cardData.getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceSix.icon;
    cardData.getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceSix.title;
    cardData.getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceSix.body;
    
});
serviceSevenEv.addEventListener('click', e =>{
    serviceOneEv.classList.remove('serviceShadow');
    serviceTwoEv.classList.remove('serviceShadow');
    serviceThreeEv.classList.remove('serviceShadow');
    serviceFourEv.classList.remove('serviceShadow');
    serviceFiveEv.classList.remove('serviceShadow');
    serviceSixEv.classList.remove('serviceShadow');
    serviceSevenEv.classList.add('serviceShadow');
    serviceEightEv.classList.remove('serviceShadow');
    if(screen.width > 550){
        cardData.style.borderRadius = '20px 20px 20px 20px';
    }
    cardData.getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceSeven.icon;
    cardData.getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceSeven.title;
    cardData.getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceSeven.body;
    
});
serviceEightEv.addEventListener('click', e =>{
    serviceOneEv.classList.remove('serviceShadow');
    serviceTwoEv.classList.remove('serviceShadow');
    serviceThreeEv.classList.remove('serviceShadow');
    serviceFourEv.classList.remove('serviceShadow');
    serviceFiveEv.classList.remove('serviceShadow');
    serviceSixEv.classList.remove('serviceShadow');
    serviceSevenEv.classList.remove('serviceShadow');
    serviceEightEv.classList.add('serviceShadow');
    if(screen.width > 550){
        cardData.style.borderRadius = '20px 20px 20px 0px';
    }
    cardData.getElementsByTagName('img')[0].src = jsonData.Language[0].Services.ServiceList.ServiceEight.icon;
    cardData.getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceEight.title;
    cardData.getElementsByTagName('p')[0].innerHTML = jsonData.Language[0].Services.ServiceList.ServiceEight.body;
    
});

calcInput.addEventListener('input', calculate);

function calculate(e){
    console.log(e.target.value);
    let sum = 30;
    let final = sum * e.target.value;
    calculatorTotal.textContent = final;
}

