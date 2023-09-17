import { lockPadding, unLockPadding } from "../utils/lockPadding.js";



const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const burger = document.querySelector('.header__burger');

menu.style.maxHeight = `calc(100% - ${header.getBoundingClientRect().height}px)`;

if (burger) {
    burger.addEventListener('click', (е) => {
        menu.classList.toggle('_open');
        burger.classList.toggle('_active');
        document.body.classList.toggle('_noscroll');

        if (!header.classList.contains('_scrolled')) {
            header.classList.toggle('_sticky');
        }

        if (menu.classList.contains('_open')) {
            lockPadding();
            setMenuTopPosition();
        }
        else {
            unLockPadding()
            resetMenuTopPosition();
        }
    })
}

function setMenuTopPosition() {
    menu.style.top = header.getBoundingClientRect().height + 'px';
}

function resetMenuTopPosition() {
    menu.style.top = 0;
}