// import { isMobile } from './isMobile.js'

const body = document.body;
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const burger = document.querySelector('.header__burger');

if (burger) {
    burger.addEventListener('click', (е) => {
        menu.classList.toggle('_open');
        burger.classList.toggle('_active');
        header.classList.toggle('_sticky');
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