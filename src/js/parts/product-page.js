const sizeElements = document.querySelectorAll('.size');

const imageElements = document.querySelectorAll('.product-img');

sizeElements.forEach((sizeElement) => {
    sizeElement.addEventListener('click', () => {
        sizeElements.forEach((element) => {
            element.removeAttribute('data-active');
        });

        sizeElement.setAttribute('data-active', 'true');

        const selectedSize = sizeElement.getAttribute('data-size');

        imageElements.forEach((imageElement) => {
            imageElement.removeAttribute('data-active');
        });

        const selectedImage = document.querySelector(`.product-img[data-size="${selectedSize}"]`);
        selectedImage.setAttribute('data-active', 'true');
    });
});
