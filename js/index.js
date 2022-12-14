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


const products = [
    {
        name: 'JBL E55BT KEY BLACK',
        image1: '/image/product/img-2.png',
        image2: '/image/product/img-2hover.png',
        oldPrice: '$400',
        currPrice: '$300'
    },
    {
        name: 'JBL JR 310BT',
        image1: '/image/product/img-3.png',
        image2: '/image/product/img-3hover.png',
        oldPrice: '$400',
        currPrice: '$300'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: '/image/product/img-4.png',
        image2: '/image/product/img-4hover.png',
        oldPrice: '$400',
        currPrice: '$300'
    },
    {
        name: 'JBL Horizon',
        image1: '/image/product/img-5.png',
        image2: '/image/product/img-5hover.png',
        oldPrice: '$400',
        currPrice: '$300'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: '/image/product/img-6.png',
        image2: '/image/product/img-6hover.png',
        oldPrice: '$400',
        currPrice: '$300'
    },
    {
        name: 'UA Project Rock',
        image1: '/image/product/img-7.png',
        image2: '/image/product/img-7hover.png',
        oldPrice: '$400',
        currPrice: '$300'
    },
    {
        name: 'JBL Endurance SPRINT',
        image1: '/image/product/img-8.png',
        image2: '/image/product/img-8hover.png',
        oldPrice: '$400',
        currPrice: '$300'
    },
    
]

const productList = document.querySelector('#latest-product');
const productList_2 = document.querySelector('#best-product');

products.forEach(e => {
    let product = `
        <div class="col-3">
            <div class="product__card">
                <div class="product__card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product__card-info">
                    <div class="product__btns">
                        <button class="btn-flat product__card-btn">SHOP NOW</button>
                        <button class="btn-flat product__card-btn"><i class="fa-solid fa-cart-plus"></i></button>
                        <button class="btn-flat product__card-btn"><i class="fa-solid fa-heart"></i></button>
                    </div>
                    <h4 class="product__card-name">${e.name}</h4>
                    <div class="product__card-price">
                        <span><del>${e.oldPrice}</del></span>
                        <span>${e.currPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    
    `
    productList.insertAdjacentHTML('beforeend', product)
    productList_2.insertAdjacentHTML('afterbegin', product)
})
