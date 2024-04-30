function initModalLogics() {
  const btnClose = document.querySelector('#close');
  const btnOpen = document.querySelector('.menu-link');
  const mobileMenuBg = document.querySelector('.mob-menu-background');
  const mobileMenu = document.querySelector('.mobile-menu');

  btnOpen.addEventListener('click', e => {
    e.preventDefault();
    mobileMenuBg.classList.add('is-open');
    mobileMenu.classList.add('is-open');
  });

  btnClose.addEventListener('click', e => {
    e.preventDefault();
    mobileMenuBg.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
  });
}

export default initModalLogics;