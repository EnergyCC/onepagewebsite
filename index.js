import jsonData from './websitecontent.js';

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
const intervalTime = 5000;
let slideInterval;

let language;

language = 0;

let DOMcontent = document.querySelectorAll('body');
// console.log(DOMcontent);

function setDynamicContent(divClass, jsonObject) {
    return document.querySelector(divClass).innerHTML = jsonObject;
}

// web content from json object
// Navigation
// setDynamicContent('.homeLink', jsonData.Language[language].Navigation.Home)
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

document.querySelector('.galleryTitle').getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Gallery.Title;


document.querySelector('.contactTitle').getElementsByTagName('h1')[0].innerHTML = jsonData.Language[0].Contact.Title;



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


// console.log(window.screen.width);

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

//function to add event listener for clicks to change the shadow of the 
let cardDataArray = [jsonData.Language[0].Services.ServiceList.ServiceOne, jsonData.Language[0].Services.ServiceList.ServiceTwo, jsonData.Language[0].Services.ServiceList.ServiceThree, jsonData.Language[0].Services.ServiceList.ServiceFour, jsonData.Language[0].Services.ServiceList.ServiceFive, jsonData.Language[0].Services.ServiceList.ServiceSix, jsonData.Language[0].Services.ServiceList.ServiceSeven, jsonData.Language[0].Services.ServiceList.ServiceEight];
let serviceArray = [serviceOneEv, serviceTwoEv, serviceThreeEv, serviceFourEv, serviceFiveEv, serviceSixEv, serviceSevenEv, serviceEightEv];


function addingEventListenerToServ(indexOfservice) {
    for (let i = 0; i < serviceArray.length; i++) {
        serviceArray[indexOfservice].addEventListener('click',
            e => {
                serviceArray[i].classList.remove('serviceShadow');
                serviceArray[indexOfservice].classList.add('serviceShadow');
                if (screen.width > 550 && indexOfservice === 0) {
                    cardData.style.borderRadius = '0px 20px 20px 20px';
                } else if (screen.width > 550 && indexOfservice === 7) {
                    cardData.style.borderRadius = '20px 20px 20px 0px';
                } else if (screen.width > 550) {
                    cardData.style.borderRadius = '20px 20px 20px 20px';
                }
                cardData.getElementsByTagName('img')[0].src = cardDataArray[indexOfservice].icon;
                cardData.getElementsByTagName('h1')[0].innerHTML = cardDataArray[indexOfservice].title;
                cardData.getElementsByTagName('p')[0].innerHTML = cardDataArray[indexOfservice].body;
            })
    }
}

for (let i = 0; i < serviceArray.length; i++) {
    addingEventListenerToServ(i);
}


//gallery content

let galleryTabContents = document.querySelector('.galleryBar');
let galleryTabsArray = jsonData.Language[0].Gallery.Job;
let galleryTabBeforeImg = document.querySelector('.galleryContentBeforeImages');
let galleryTabAfterImg = document.querySelector('.galleryContentAfterImages');
let galleryTabArray = [];
let galleryImageContents = document.querySelector('.galleryImageContent');
let lightBoxDiv = document.querySelector('.lightbox');
let lightBoxImage = document.querySelector('.lightboxImage');
let exitButton = document.querySelector('.exitBtn');

for(let i = 0; i < galleryTabsArray.length; i++){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = galleryTabsArray[i].Title;
    galleryTabContents.appendChild(newDiv);
    newDiv.classList.add('galleryBarTab');

    // This sets the first element as the default gallery element
    if(i === 0){
        newDiv.classList.add('galleryBar--active');
        for(let j = 0; j < galleryTabsArray[i].Before.length; j++){
            let newImageTab = document.createElement('IMG');
            newImageTab.setAttribute('src', galleryTabsArray[i].Before[j]);
            newImageTab.style.cursor = 'pointer';
            galleryTabBeforeImg.appendChild(newImageTab);
            newImageTab.addEventListener('click', e =>{
                console.log(newImageTab.src);
                lightBoxDiv.classList.add('lightbox--active');
                document.body.style.overflow = 'hidden';
                lightBoxImage.appendChild(newImageTab);
                
            })
        };
        for(let j = 0; j < galleryTabsArray[i].After.length; j++){
            let newImageTab = document.createElement('IMG');
            newImageTab.setAttribute('src', galleryTabsArray[i].After[j]);
            galleryTabAfterImg.appendChild(newImageTab);
        }
        galleryImageContents.style.maxHeight = galleryImageContents.scrollHeight + 'px';
    };
    galleryTabArray.push(galleryTabContents.getElementsByTagName('div')[i]);
    

    // event listener for every gallery element added dynamically
    newDiv.addEventListener('click', e =>{
        if(galleryTabContents.getElementsByTagName('div')[i].classList.contains('galleryBar--active')){
            return;
        }else{
        galleryImageContents.style.maxHeight = '0px';
        setTimeout(() => {            
            galleryTabArray.forEach(tabElement => {
                tabElement.classList.remove('galleryBar--active');
            });
            galleryTabContents.getElementsByTagName('div')[i].classList.add('galleryBar--active');
            while(galleryTabBeforeImg.lastChild){
                galleryTabBeforeImg.removeChild(galleryTabBeforeImg.lastChild);
            }
            for(let j = 0; j < galleryTabsArray[i].Before.length; j++){
                let newImageTab = document.createElement('IMG');
                newImageTab.setAttribute('src', galleryTabsArray[i].Before[j]);
                galleryTabBeforeImg.appendChild(newImageTab);
                newImageTab.addEventListener('click', e =>{
                    console.log(newImageTab.src);
                })
            };
            while(galleryTabAfterImg.lastChild){
                galleryTabAfterImg.removeChild(galleryTabAfterImg.lastChild);
            }
            for(let k = 0; k < galleryTabsArray[i].After.length; k++){
                let newImageTab = document.createElement('IMG');
                newImageTab.setAttribute('src', galleryTabsArray[i].After[k]);
                galleryTabAfterImg.appendChild(newImageTab);
            };
            galleryImageContents.style.maxHeight = galleryImageContents.scrollHeight + 'px';
        }, 500);
    }
    })
}


    exitButton.addEventListener('click', e =>{
        lightBoxDiv.classList.remove('lightbox--active');
        document.body.overflow.style = 'scroll';
    })
