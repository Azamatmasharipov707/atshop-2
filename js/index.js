let slides = document.querySelectorAll('.slide');
let slideIndex = 0;
let slidePlay = true

const hideSlide = () => {
    slides.forEach((e) => {
        e.classList.remove('active')
    })
}

const showSlide = () => {
    hideSlide();
    slides[slideIndex].classList.add('active');
}

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const nextSlide = () => {
    if (slideIndex + 1 === slides.length) {
        slideIndex = 0
    } else {
        slideIndex  += 1
    }
}

const prevSlide = () => {
    if (slideIndex -1 < 0) {
        slideIndex += slides.length - 1
    } else {
        slideIndex += - 1
    }
}

next.addEventListener('click', () => {
    nextSlide()
    showSlide()
})
prev.addEventListener('click', () => {
    prevSlide()
    showSlide()
})

setInterval(() => {
    if (slidePlay) {
        nextSlide()
        showSlide()
    }
}, 3000);


let slider = document.querySelector('#slider')

console.log(slider)

slider.addEventListener('mouseover', () => slidePlay = false);
slider.addEventListener('mouseleave', () => slidePlay = true);
