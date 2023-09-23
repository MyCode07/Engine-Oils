const accordions = document.querySelectorAll('[data-accordion]');

function toggleAccordion(item) {
    const accordeon = item.closest('[data-accordion]');
    const accordeonItems = accordeon.querySelectorAll('[data-accordion-item]');

    if (!item.hasAttribute('data-open')) {

        accordeonItems.forEach(item => {
            if (item.hasAttribute('data-open')) item.removeAttribute('data-open')
        })

        item.setAttribute('data-open', 'open')
        item.classList.add('_open')
    }
    else {
        item.removeAttribute('data-open')
    }
}

export const accorden = () => {
    if (!accordions.length) return

    accordions.forEach(accordion => {
        const accordeonItems = accordion.querySelectorAll('[data-accordion-item]');
        const windowWidth = +accordion.dataset.width;

        if (accordeonItems.length && window.innerWidth <= windowWidth)
            accordeonItems.forEach(item => {
                const openBtn = item.querySelector('[data-accordion-title]')

                openBtn.addEventListener('click', function (e) {
                    toggleAccordion(item);
                });
            });
    });
}


const correspondence = document.querySelector('.correspondence');

if (correspondence) {
    correspondence.addEventListener('click', function (e) {
        correspondence.classList.toggle('_active')
    });
}
