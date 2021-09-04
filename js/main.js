$(function () {
    $('.header_btn').on('click', function () {
        $('.header__menu-nav').slideDown(900);
        $('.header__x').show(1000);
        $('.header_btn').hide(1000);
    })

    $('.header__x').on('click', function () {
        $('.header__menu-nav').slideUp(900);
        $('.header_btn').show(1000);
        $('.header__x').hide(1000);
    })
})

const Kurs = document.querySelector('#Button_media');
const login = document.querySelector('.header__box_login');
const Заказать = document.querySelector('.header__box_login_button');
const catalog = document.querySelector('#Выбрать_курс');

if (window.matchMedia('(max-width: 767px)').matches) {
    Kurs.addEventListener('click', function () {
        login.style.display = 'block';
        login.style.position = 'fixed';
        login.style.top = '70px';
        login.style.width = '500px';
    })

    Заказать.addEventListener('click', function () {
        login.style.display = 'none';
    })
}

// catalog.addEventListener('click', function () {
//     window.open('inform.html');
// })