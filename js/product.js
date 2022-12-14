const productImgItem = document.querySelectorAll('.product-img__item');
const image = document.querySelector('#product-img img');

productImgItem.forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        image.setAttribute('src', img)
    })
})