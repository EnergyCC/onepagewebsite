import jsonData from './websitecontent.js';

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')
const intervalTime = 5000;
let slideInterval;

var languageElement = document.getElementById('languageSelect');
let language = languageElement.value;
if(localStorage.getItem('language')) language = localStorage.getItem('language');
// language = localStorage.getItem('language');
languageElement.value = language;
console.log(language.value)

// language = document.querySelector('.languageSelect').value;
languageElement.addEventListener('change', ()=>{
    language = languageElement.value;
    localStorage.setItem('language', language);
    location.reload();

})



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
document.querySelector('#slideOne').getElementsByTagName('h1')[0].innerHTML = jsonData.Language[language].Landing.SlideOne[0];
document.querySelector('#slideTwo').getElementsByTagName('h1')[0].innerHTML = jsonData.Language[language].Landing.SlideTwo[0];
document.querySelector('#slideThree').getElementsByTagName('h1')[0].innerHTML = jsonData.Language[language].Landing.SlideThree[0];
document.querySelector('#slideOne').getElementsByTagName('p')[0].innerHTML = jsonData.Language[language].Landing.SlideOne[1];
document.querySelector('#slideTwo').getElementsByTagName('p')[0].innerHTML = jsonData.Language[language].Landing.SlideTwo[1];
document.querySelector('#slideThree').getElementsByTagName('p')[0].innerHTML = jsonData.Language[language].Landing.SlideThree[1];

// Services page
document.querySelector('.serviceTitle').getElementsByTagName('h1')[0].innerHTML = jsonData.Language[language].Services.ServiceTitle;

document.querySelector('.serviceOne').getElementsByTagName('img')[0].src = jsonData.Language[language].Services.ServiceList.ServiceOne.icon;
document.querySelector('.serviceTwo').getElementsByTagName('img')[0].src = jsonData.Language[language].Services.ServiceList.ServiceTwo.icon;
document.querySelector('.serviceThree').getElementsByTagName('img')[0].src = jsonData.Language[language].Services.ServiceList.ServiceThree.icon;
document.querySelector('.serviceFour').getElementsByTagName('img')[0].src = jsonData.Language[language].Services.ServiceList.ServiceFour.icon;
document.querySelector('.serviceFive').getElementsByTagName('img')[0].src = jsonData.Language[language].Services.ServiceList.ServiceFive.icon;
document.querySelector('.serviceSix').getElementsByTagName('img')[0].src = jsonData.Language[language].Services.ServiceList.ServiceSix.icon;
document.querySelector('.serviceSeven').getElementsByTagName('img')[0].src = jsonData.Language[language].Services.ServiceList.ServiceSeven.icon;
document.querySelector('.serviceEight').getElementsByTagName('img')[0].src = jsonData.Language[language].Services.ServiceList.ServiceEight.icon;

document.querySelector('.serviceOne').getElementsByTagName('p')[0].innerHTML = jsonData.Language[language].Services.ServiceList.ServiceOne.title;
document.querySelector('.serviceTwo').getElementsByTagName('p')[0].innerHTML = jsonData.Language[language].Services.ServiceList.ServiceTwo.title;
document.querySelector('.serviceThree').getElementsByTagName('p')[0].innerHTML = jsonData.Language[language].Services.ServiceList.ServiceThree.title;
document.querySelector('.serviceFour').getElementsByTagName('p')[0].innerHTML = jsonData.Language[language].Services.ServiceList.ServiceFour.title;
document.querySelector('.serviceFive').getElementsByTagName('p')[0].innerHTML = jsonData.Language[language].Services.ServiceList.ServiceFive.title;
document.querySelector('.serviceSix').getElementsByTagName('p')[0].innerHTML = jsonData.Language[language].Services.ServiceList.ServiceSix.title;
document.querySelector('.serviceSeven').getElementsByTagName('p')[0].innerHTML = jsonData.Language[language].Services.ServiceList.ServiceSeven.title;
document.querySelector('.serviceEight').getElementsByTagName('p')[0].innerHTML = jsonData.Language[language].Services.ServiceList.ServiceEight.title;

document.querySelector('.galleryTitle').getElementsByTagName('h1')[0].innerHTML = jsonData.Language[language].Gallery.Title;


document.querySelector('.contactTitle').getElementsByTagName('h1')[0].innerHTML = jsonData.Language[language].Contact.Title;



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
cardData.getElementsByTagName('img')[0].src = jsonData.Language[language].Services.ServiceList.ServiceOne.icon
cardData.getElementsByTagName('h1')[0].innerHTML = jsonData.Language[language].Services.ServiceList.ServiceOne.title;
cardData.getElementsByTagName('p')[0].innerHTML = jsonData.Language[language].Services.ServiceList.ServiceOne.body;

//function to add event listener for clicks to change the shadow of the 
let cardDataArray = [jsonData.Language[language].Services.ServiceList.ServiceOne, jsonData.Language[language].Services.ServiceList.ServiceTwo, jsonData.Language[language].Services.ServiceList.ServiceThree, jsonData.Language[language].Services.ServiceList.ServiceFour, jsonData.Language[language].Services.ServiceList.ServiceFive, jsonData.Language[language].Services.ServiceList.ServiceSix, jsonData.Language[language].Services.ServiceList.ServiceSeven, jsonData.Language[language].Services.ServiceList.ServiceEight];
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
let galleryTabsArray = jsonData.Language[language].Gallery.Job;
let galleryTabBeforeImg = document.querySelector('.galleryContentBeforeImages');
let galleryTabAfterImg = document.querySelector('.galleryContentAfterImages');
let galleryTabArray = [];
let galleryImageContents = document.querySelector('.galleryImageContent');
let lightBoxDiv = document.querySelector('.lightbox');
let lightBoxImage = document.querySelector('.lightboxImage');
let exitButton = document.querySelector('.exitBtn');
let previousGalleryButton = document.querySelector('.prevImage');
let nextGalleryButton = document.querySelector('.nextImage');
let jobDescriptionContainer = document.querySelector('.descriptionContainer');
let galleryContainer = document.querySelector('.galleryContainer');

for (let i = 0; i < galleryTabsArray.length; i++) {
    let newDiv = document.createElement('div'); //creates new div
    newDiv.innerHTML = galleryTabsArray[i].Title; //sets the new div's innerHTML as one of the object titles from the array
    galleryTabContents.appendChild(newDiv); //appends the new div to the gallery bar which holds all the tabs
    newDiv.classList.add('galleryBarTab'); //sets a new class to the created div, for css purposes only

    // This sets the first element as the default gallery element
    if (i === 0) {        
        galleryTabsArray[i].Description.forEach(descr =>{
            let descriptionElement = document.createElement('h3');
            jobDescriptionContainer.appendChild(descriptionElement);
            descriptionElement.innerHTML = descr;
        })
        // jobDescriptionContainer.innerHTML = galleryTabsArray[i].Description;
        newDiv.classList.add('galleryBar--active'); //sets the first tab as the highlighted one
        for (let j = 0; j < galleryTabsArray[i].Before.length; j++) {
            let newImageTab = document.createElement('IMG'); //creates a new image element
            newImageTab.setAttribute('src', galleryTabsArray[i].Before[j]); //sets the source of the new image element as the current index of the array
            newImageTab.style.cursor = 'pointer'; //css to make the image cursor into a pointer
            newImageTab.id = j
            galleryTabBeforeImg.appendChild(newImageTab); //appends the new image element to the before strip 
            newImageTab.addEventListener('click', e => {
                let newImageGallery = document.createElement('IMG'); //creates a new image element
                newImageGallery.setAttribute('src', newImageTab.src); //sets the source of the new element as the current image source
                newImageGallery.id = j;
                lightBoxDiv.classList.add('lightbox--active'); //sets the lightbox as active to show on screen
                document.body.style.overflow = 'hidden'; //removes scroll bar from the body element
                lightBoxImage.appendChild(newImageGallery); //appends the new image element to the light box div to show on the screen
                // console.log(newImageGallery);
            });
        };
        for (let j = 0; j < galleryTabsArray[i].After.length; j++) {
            let newImageTab = document.createElement('IMG');
            newImageTab.setAttribute('src', galleryTabsArray[i].After[j]);
            newImageTab.style.cursor = 'pointer';
            galleryTabAfterImg.appendChild(newImageTab);
            newImageTab.addEventListener('click', e => {
                let newImageGallery = document.createElement('IMG');
                newImageGallery.setAttribute('src', newImageTab.src);
                lightBoxDiv.classList.add('lightbox--active');
                document.body.style.overflow = 'hidden';
                lightBoxImage.appendChild(newImageGallery);
            });
        }
        galleryContainer.style.maxHeight = galleryContainer.scrollHeight + 'px';
    };
    galleryTabArray.push(galleryTabContents.getElementsByTagName('div')[i]); //pushes the gallery tab divs into a new array


    // event listener for every gallery element added dynamically
    newDiv.addEventListener('click', e => {
        if (galleryTabContents.getElementsByTagName('div')[i].classList.contains('galleryBar--active')) {
            return;
        } else {
            galleryContainer.style.maxHeight = '0px';
            setTimeout(() => {
                jobDescriptionContainer.innerHTML = '';
                galleryTabArray.forEach(tabElement => {
                    tabElement.classList.remove('galleryBar--active');
                });
                galleryTabsArray[i].Description.forEach(descr =>{
                    let descriptionElement = document.createElement('h3');
                    jobDescriptionContainer.appendChild(descriptionElement);
                    descriptionElement.innerHTML = descr;
                })
                // jobDescriptionContainer.innerHTML = galleryTabsArray[i].Description;
                galleryTabContents.getElementsByTagName('div')[i].classList.add('galleryBar--active');
                while (galleryTabBeforeImg.lastChild) {
                    galleryTabBeforeImg.removeChild(galleryTabBeforeImg.lastChild);
                }
                for (let j = 0; j < galleryTabsArray[i].Before.length; j++) {
                    let newImageTab = document.createElement('IMG');
                    newImageTab.setAttribute('src', galleryTabsArray[i].Before[j]);
                    galleryTabBeforeImg.appendChild(newImageTab);
                    newImageTab.style.cursor = 'pointer';
                    newImageTab.addEventListener('click', e => {
                        let newImageGallery = document.createElement('IMG');
                        newImageGallery.setAttribute('src', newImageTab.src);
                        lightBoxDiv.classList.add('lightbox--active');
                        document.body.style.overflow = 'hidden';
                        lightBoxImage.appendChild(newImageGallery);
                    });
                };
                while (galleryTabAfterImg.lastChild) {
                    galleryTabAfterImg.removeChild(galleryTabAfterImg.lastChild);
                }
                for (let k = 0; k < galleryTabsArray[i].After.length; k++) {
                    let newImageTab = document.createElement('IMG');
                    newImageTab.setAttribute('src', galleryTabsArray[i].After[k]);
                    galleryTabAfterImg.appendChild(newImageTab);
                    newImageTab.style.cursor = 'pointer';
                    newImageTab.addEventListener('click', e => {
                        let newImageGallery = document.createElement('IMG');
                        newImageGallery.setAttribute('src', newImageTab.src);
                        lightBoxDiv.classList.add('lightbox--active');
                        document.body.style.overflow = 'hidden';
                        lightBoxImage.appendChild(newImageGallery);
                    });
                };
                galleryContainer.style.maxHeight = galleryContainer.scrollHeight + 'px';
            }, 500);
        }
    })
}


exitButton.addEventListener('click', e => {
    lightBoxDiv.classList.remove('lightbox--active');
    document.body.style.overflow = 'auto';
    // console.log(lightBoxImage.getElementsByTagName('img'));
    lightBoxImage.removeChild(lightBoxImage.getElementsByTagName('img')[0]);
});

// previousGalleryButton.addEventListener('click', e => {
//     let beforePrevArray = galleryTabBeforeImg.getElementsByTagName('img');
//     beforePrevArray.forEach()
//     console.log(beforePrevArray)
// })