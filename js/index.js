let slides = document.querySelectorAll('.slide');
let slideIndex = 0;

const hideSlide = () => {
    slides.forEach((e) => {
        e.classList.remove('active')
    })
}

const showSlide = () => {
    hideSlide();
    slides[slideIndex].classList.add('active');
}
