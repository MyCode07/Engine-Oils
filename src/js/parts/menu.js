// import { isMobile } from './isMobile.js'

const body = document.body;
const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');

if (burger) {
    burger.addEventListener('click', (е) => {
        menu.classList.toggle('_open');
        burger.classList.toggle('_active');
        document.body.classList.toggle('_noscroll');
    })
}


const searchBtn = document.querySelector('.search');

if (searchBtn && window.innerWidth <= 1024 && window.innerWidth >= 769) {
    searchBtn.addEventListener('click', (е) => {
        searchBtn.classList.add('_active');
    })


    document.onclick = function (e) {
        let target = e.target;

        if (!target.classList.contains('_active')) {
            searchBtn.classList.remove('_active');
        }
    };
} 