function initModalLogics() {
  const btnClose = document.querySelector('#close');
  const btnOpen = document.querySelector('.menu-link');
  const mobileMenuBg = document.querySelector('.mob-menu-background');
  const mobileMenu = document.querySelector('.mobile-menu');
  const homeLink = document.querySelector('.mob-menu-link[href="/index.html"]');
  const catalogLink = document.querySelector('.mob-menu-link[href="./catalog-interactive.html"]');

  btnOpen.addEventListener('click', e => {
    e.preventDefault();
    mobileMenuBg.classList.add('is-open');
    mobileMenu.classList.add('is-open');

    homeLink.classList.remove('current');
    catalogLink.classList.add('current');
  });

  btnClose.addEventListener('click', e => {
    e.preventDefault();
    mobileMenuBg.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
  });
}

export default initModalLogics;
