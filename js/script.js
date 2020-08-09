//Переключение языка

var ruButton = document.querySelector(".ru-button");
var enButton = document.querySelector(".en-button");

var ruElements = document.querySelectorAll(".ru");
var enElements = document.querySelectorAll(".en");

function showRu() {
    for (let i = 0; i < enElements.length; i++) {
        enElements[i].classList.add("hide");
        ruElements[i].classList.remove("ru");
    }
}

function showEng() {
    for (let i = 0; i < enElements.length; i++) {
        enElements[i].classList.remove("hide");
        ruElements[i].classList.add("ru");
    }
}

ruButton.addEventListener("click", showRu);
enButton.addEventListener("click", showEng);

//Slider

var next = document.querySelector('.arrow-right');
var prev = document.querySelector('.arrow-left');
var sliders = document.querySelectorAll('.slider__item');
var clicker = 0;

next.addEventListener('click', function () {
    ++clicker;
    if (clicker > sliders.length - 1) {
        clicker = 0;
    }
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].classList.add('hide-slide');
    }
    sliders[clicker].classList.remove('hide-slide');
    sliders[clicker].classList.add('show-slide');
})

prev.addEventListener('click', function () {
    --clicker;
    if (clicker < 0) {
        clicker = sliders.length - 1;
    }
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].classList.add('hide-slide');
    }
    sliders[clicker].classList.remove('hide-slide');
    sliders[clicker].classList.add('show-slide');
})