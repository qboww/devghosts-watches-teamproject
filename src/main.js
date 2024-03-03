// Arrow up button
const arrowUp = {
  item: document.querySelector('.arrow-button'),

  hide() {
    this.item.classList.add('hide');
  },

  show() {
    this.item.classList.remove('hide');
  },

  listenScroll() {
    window.addEventListener('scroll', () => {
      const scrollByY = window.scrollY || document.documentElement.scrollTop;

      scrollByY > 400 ? this.show() : this.hide();
    });

    document.querySelector('.arrow-button').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

arrowUp.listenScroll();

const btnClose = document.querySelector('#close');
const btnOpen = document.querySelector('.menu-link');
const mobileMenuBg = document.querySelector('.mob-menu-background');
const mobileMenu = document.querySelector('.mobile-menu');


btnOpen.addEventListener('click', (e) => {
 e.preventDefault();
 mobileMenuBg.classList.add('is-open')
 mobileMenu.classList.add('is-open')
})

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  mobileMenuBg.classList.remove('is-open')
  mobileMenu.classList.remove('is-open')
})







// const mobileMenu = {
//   btnClose: document.querySelector('#close'),

//   btnOpen: document.querySelector('.menu-link'),

//   mobileMenuBg: document.querySelector('.mob-menu-background'),

//   mobileMenu: document.querySelector('.mobile-menu'),

//   show: this.mobileMenuBg.add('is-open') && this.mobileMenu.add('is-open'),
   
//   close: this.mobileMenuBg.remove('is-open') && this.mobileMenu.remove('is-open'),

//   listenMenu() {
//     window.addEventListener('click', (e) => {
//       e.preventDefault();

//     })
//   }
// }