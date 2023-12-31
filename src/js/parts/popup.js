import { lockPadding, unLockPadding } from "../utils/lockPadding.js";

const popupAll = document.querySelectorAll('.popup');
const popupOpenButtons = document.querySelectorAll('[data-open-popup]');

if (popupOpenButtons.length)
    popupOpenButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const id = btn.dataset.id;
            const popup = document.querySelector(`.popup#${id}`);

            if (popup) {
                popup.classList.add('_open');
                document.body.classList.add('_noscroll');

                lockPadding()
            }
        })
    })

if (popupAll.length)
    popupAll.forEach(popup => {
        const popupClose = popup.querySelector('.popup__close');

        popupClose.addEventListener('click', function () {
            popup.classList.remove('_open');
            document.body.classList.remove('_noscroll');

            unLockPadding()
        })

        popup.addEventListener('click', function (e) {
            if (e.target.classList.contains('popup')) {
                popup.classList.remove('_open')
                document.body.classList.remove('_noscroll');
                unLockPadding()
            }
        })
    })


