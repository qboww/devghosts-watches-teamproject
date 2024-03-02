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

    document.querySelector('.arrow').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

arrowUp.listenScroll();
