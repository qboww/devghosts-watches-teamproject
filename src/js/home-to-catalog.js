function initShowMore() {
  const showMoreBtn = document.getElementById('show-more');
  showMoreBtn.addEventListener('click', () => {
    window.location.href = './catalog-interactive.html';
  });
}
export default initShowMore;