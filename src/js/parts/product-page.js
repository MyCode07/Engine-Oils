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
            
        //     // Проверяем, есть ли у изображения data-size и оно совпадает с выбранным размером

        //     if (sizeElement.hasAttribute('data-left')) {
        //         imageElement.style.left = '-10%';
        //         imageElement.style.right = 'unset';
        //     } else if (sizeElement.hasAttribute('data-right')) {
        //         imageElement.style.left = 'unset';
        //         imageElement.style.right = '-10%';
        //     }
        });

        const selectedImage = document.querySelector(`.product-img[data-size="${selectedSize}"]`);
        selectedImage.setAttribute('data-active', 'true');
    });
});
