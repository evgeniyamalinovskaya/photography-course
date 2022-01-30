//Форма imail отправки

const submitButton = document.querySelector('.footer__enroll');
const emailForm = document.querySelector('.enroll-button_size_footer');

function sendFromThanks(evt) {
    evt.preventDefault();
    emailForm.textContent = 'Спасибо!';
    emailForm.style.fontWeight = '400';
}

submitButton.addEventListener('submit', sendFromThanks);

//Бургерного меню

const headerMenuButton = document.querySelector('.header__menu-button');
const headerBurger = document.querySelector('.header__burger');
const headerBurgerCloseButton = document.querySelector('.header__burger-close');

// Функция открытия бургерного меню и закрытия главного меню

headerMenuButton.addEventListener('click', function (event) {
    headerBurger.classList.add('header__burger_opened');
});

headerMenuButton.addEventListener('click', function (event) {
    headerBurger.classList.remove('header__container_hidden');
});

// Функция закрытия бургерного меню и открытия главного меню

headerBurgerCloseButton.addEventListener('click', function (event) {
    headerBurger.classList.add('header__container_hidden');
});
headerBurgerCloseButton.addEventListener('click', function (event) {
    headerBurger.classList.remove('header__burger_opened');
});

