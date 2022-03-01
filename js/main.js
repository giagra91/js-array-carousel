const images = [`img/01.jpg`, `img/02.jpg`, `img/03.jpg`, `img/04.jpg`, `img/05.jpg`];
const places = [`Svizzera`, `Lago di Como`, `Firenze`, `Spiaggia`, `Mare`];
const news = [`Lorem Ipsum`, `Lorem Ipsum`, `Lorem Ipsum`, `Lorem Ipsum`, `Lorem Ipsum`];

let carouselContent = ``;
let asideContent = ``;

for (let i = 0; i < images.length; i++){
    carouselContent = `
    <div class="main-carousel position-relative">
        <img src="${images[i]}" alt="Main picture">
        <div class="text-white position-absolute" id="picture-info">
            <h3>${places[i]}</h3>
            <p>${news[i]}</p>
        </div>
    </div>`
    asideContent += `
    <div class="my-aside-container">
    <img src="${images[i]}" alt="">
    </div>`
}

const mainContainer = document.getElementById("main-container");
mainContainer.innerHTML+=carouselContent;

const asideContainer = document.getElementById("aside-container");
asideContainer.innerHTML+=asideContent;

const carouselElements = document.getElementsByClassName(`main-carousel`);
console.log(carouselElements);

carouselElements[0].classList.add(`d-none`);

let dNoneElements = 0;

const downButton = document.getElementById("down-arrow");
downButton.addEventListener(`click`, function() {
    carouselElements[dNoneElements].classList.remove(`d-none`);
    dNoneElements++;
    carouselElements[dNoneElements].classList.add(`d-none`);
})

