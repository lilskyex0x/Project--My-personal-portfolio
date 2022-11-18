const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#navbar');
const helloBtn = document.querySelector('#Hello');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  helloBtn.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  helloBtn.classList.remove('active');
}));
