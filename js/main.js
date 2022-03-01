const images = [`img/01.jpg`, `img/02.jpg`, `img/03.jpg`, `img/04.jpg`, `img/05.jpg`];
const places = [`Lago di Como`, `Svizzera`, `Firenze`, `Roma`, `Mare`];
const news = [`Lorem Ipsum`, `Lorem Ipsum`, `Lorem Ipsum`, `Lorem Ipsum`, `Lorem Ipsum`];

let carouselContent = ``;
let asideContent = ``;

for (let i = 0; i < images.length; i++){
    carouselContent += `
    <div class="main-carousel position-relative ${i != 0 ? 'd-none' : ''}">
        <img src="${images[i]}" alt="Main picture">
        <div class="text-white position-absolute" id="picture-info">
            <h3>${places[i]}</h3>
            <p>${news[i]}</p>
        </div>
    </div>`

    asideContent += `
    <div class="my-aside-container">
    <img src="${images[i]}" alt="">
    <div class="my-opacity"></div>
    </div>`
}

const mainContainer = document.getElementById("main-container");
mainContainer.innerHTML=carouselContent;

const asideContainer = document.getElementById("aside-container");
asideContainer.innerHTML+=asideContent;

const carouselElements = document.getElementsByClassName(`main-carousel`);
console.log(carouselElements);

const asideImg = document.getElementsByClassName("my-aside-container");

let index = 0;

const downButton = document.getElementById("down-arrow");
downButton.addEventListener(`click`, function() {
    carouselElements[index].classList.add(`d-none`);
    index++;
    carouselElements[index].classList.remove(`d-none`);

    //asideContent[i].classList.add(`my-border-white`)
    console.log(index);

    if (index > 4){
        
    }
})

const upButton = document.getElementById("up-arrow");
upButton.addEventListener(`click`, function() {
    carouselElements[index].classList.add(`d-none`);
    index--;
    carouselElements[index].classList.remove(`d-none`);

    //asideContent[i].classList.add(`my-border-white`)
    console.log(index)
    if (index < 0){
        
    }
})