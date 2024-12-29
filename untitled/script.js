console.log('Hello World!');
let slideIdx = 0;
let timer = null;

function showSlide(selectedIdx) {
    clearTimeout(timer);
    timer = setTimeout(showNextSlide, 2500);
    let slides = document.getElementsByClassName("advantage__slide");
    const dots = document.getElementsByClassName("slider__dot");
    const maxIdx = slides.length;
    const idx = (maxIdx + selectedIdx) % maxIdx;
    const currentSlide = slides[slideIdx];
    const nextSlide = slides[idx];
    currentSlide.classList.add("anima--fade-out");
    const currentDot = dots[slideIdx];
    const nextDot = dots[idx];

    setTimeout(() => {
        currentSlide.classList.remove("advantage__slide--show", "anima--fade-in");
        nextSlide.classList.remove("anima--fade-out");
        nextSlide.classList.add("advantage__slide--show", "anima--fade-in");
        currentDot.classList.remove("slider__dot--active");
        nextDot.classList.add("slider__dot--active");
    }, 200);
    slideIdx = idx;
}

function showNextSlide(num = 1) {
    showSlide(slideIdx + num);
}

setTimeout(showNextSlide, 2500);


document.getElementById('vacantion').addEventListener('click', scrollToElement);

function scrollToElement(e) {
    element = document.getElementById('job');
    element.scrollIntoView(true);
}

document.getElementById('contacts').addEventListener('click', scrollToElement2);

function scrollToElement2(e) {
    element2 = document.getElementById('contacts_main');
    element2.scrollIntoView(true);
}

document.getElementById('info').addEventListener('click', scrollToElement3);

function scrollToElement3(e) {
    element3 = document.getElementById('info_main');
    element3.scrollIntoView(true);
}

document.getElementById('services').addEventListener('click', scrollToElement4);

function scrollToElement4(e) {
    element4 = document.getElementById('services_main');
    element4.scrollIntoView(true);
}
