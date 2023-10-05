const header = document.querySelector('header');
const headerheigth = header.getBoundingClientRect().height;
const hero = document.querySelector('section.hero');

const question = document.querySelector('.question');

if (question) {
    question.addEventListener('click', (е) => {
        question.classList.toggle('_active');
    })
}


const sticky = () => {
    if (window.scrollY > 50) {
        header.classList.add('_scrolled')
        question.classList.add('_active')
        if (hero) header.classList.add('_sticky')
    }
    else {
        header.classList.remove('_scrolled')
        question.classList.remove('_active')

        if (hero) header.classList.remove('_sticky')
    }
}

sticky();
window.addEventListener('scroll', sticky);