// Array con immagini
const images = [`img/01.jpg`, `img/02.jpg`, `img/03.jpg`, `img/04.jpg`, `img/05.jpg`];
// Array con luoghi
const places = [`Lago di Como`, `Svizzera`, `Londra`, `Roma`, `Palermo`];
// Array con notizie
const news = [`Lorem Ipsum`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga veritatis consequuntur commodi nobis suscipit.`, `Lorem Ipsum`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga veritatis consequuntur commodi nobis suscipit.`, `Lorem Ipsum`];

// Inizializzo le variabili con cui verranno inseriti gli elementi nel file HTML
let carouselContent = ``;
let asideContent = ``;

// Creo un ciclo for per 
for (let i = 0; i < images.length; i++){
    carouselContent += `
    <div class="main-carousel position-relative ${i != 0 ? 'd-none' : ''}">
        <img src="${images[i]}" alt="Main picture">
        <div class="text-white text-end position-absolute bottom-0 end-0 pe-2">
            <h3>${places[i]}</h3>
            <p>${news[i]}</p>
        </div>
    </div>`

    asideContent += `
    <div class="my-aside-container ${i != 0 ? 'my-filter' : 'my-border-white'}">
    <img src="${images[i]}" alt="${places[i]}">
    </div>`
}

const mainContainer = document.getElementById("main-container");
mainContainer.innerHTML=carouselContent;

const asideContainer = document.getElementById("aside-container");
asideContainer.innerHTML+=asideContent;

const carouselElements = document.getElementsByClassName(`main-carousel`);
console.log(carouselElements);

const asideElements = document.getElementsByClassName("my-aside-container");
console.log(asideElements);

let index = 0;

const downButton = document.getElementById("down-arrow");
downButton.addEventListener(`click`, function() {
    carouselElements[index].classList.add(`d-none`);
    asideElements[index].classList.remove(`my-border-white`);
    asideElements[index].classList.add(`my-filter`);
    index++;
    carouselElements[index].classList.remove(`d-none`);
    asideElements[index].classList.add(`my-border-white`);
    asideElements[index].classList.remove(`my-filter`);
    console.log(index);

    if (index == 4){
        // index = 0
        
    }
})

const upButton = document.getElementById("up-arrow");
upButton.addEventListener(`click`, function() {
    carouselElements[index].classList.add(`d-none`);
    asideElements[index].classList.remove(`my-border-white`);
    asideElements[index].classList.add(`my-filter`);
    index--;
    carouselElements[index].classList.remove(`d-none`);
    asideElements[index].classList.add(`my-border-white`);
    asideElements[index].classList.remove(`my-filter`);

    console.log(index)
    if (index < 0){
        
    }
})