const burger = document.querySelector('.burger__img');
const navLinks = document.querySelector('.links');
const mainel = document.querySelector('main');
let isActive = false;

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  isActive = !isActive;
  if (isActive) {
    burger.src = './assets/images/icon-menu-close.svg';
    mainel.style.opacity = '0.2';
  } else {
    mainel.style.opacity = '1';
    burger.src = './assets/images/icon-menu.svg';
  }
});
