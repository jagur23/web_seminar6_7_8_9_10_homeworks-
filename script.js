const menuActive = document.querySelector ('.banner__menu');
const burger = document.querySelector('.burgerButton');

function toggleMenu() {
  menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu)