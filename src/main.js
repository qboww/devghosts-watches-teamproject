import initArrowFeature from './js/arrow-logics';
import initModalLogics from './js/modal-logics';
import initCatalogInteractive from './js/catalog-logics';

document.addEventListener('DOMContentLoaded', () => {
  const sortSelect = document.getElementById('sort-select');
  sortSelect.addEventListener('change', () => {
    const sortBy = sortSelect.value;
    initCatalogInteractive(sortBy);
  });

  // Initialize with default sorting (by name)
  initCatalogInteractive('name');
});


AOS.init();

initArrowFeature();
initModalLogics();