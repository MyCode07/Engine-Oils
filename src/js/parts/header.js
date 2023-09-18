const header = document.querySelector('header');
const sms = document.querySelector('.question');
const headerheigth = header.getBoundingClientRect().height;

const sticky = () => {
    if (window.scrollY > 50) {
        header.classList.add('_scrolled')
        header.classList.add('_sticky')
        sms.classList.add('_active')
    }
    else {
        header.classList.remove('_sticky')
        header.classList.remove('_scrolled')
        sms.classList.remove('_active')
    }
}

sticky();
window.addEventListener('scroll', sticky);