$(function () {
    $('#main__information_button').on('click', function () {
        $('.section__block').slideToggle(1000);
    })

    $('#Записаться').on('click', function () {
        $('.section__login').show(1000);
    })

    $('.section__login_box_button').on('click', function () {
        $('.section__login').hide(1000);
    })
})

const button = document.querySelectorAll('.main__information_button');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        button[i].classList.remove('active');
        for (let x = 0; x < button.length; x++) {
            button[x].classList.remove('active');
        }
        button[i].classList.add('active');
    })
}