import initArrowFeature from './js/arrow-logics';
import initModalLogics from './js/modal-logics';
import initCatalogInteractive from './js/catalog-logics';

document.addEventListener('DOMContentLoaded', () => {
  const sortSelect = document.getElementById('sort-select');
  const sortOrderSelect = document.getElementById('sort-order-select');
  const searchInput = document.getElementById('search-input');

  function updateCatalog() {
    const sortBy = sortSelect.value;
    const sortOrder = sortOrderSelect.value;
    const searchQuery = searchInput.value.trim();
    initCatalogInteractive(sortBy, sortOrder, searchQuery);
  }

  sortSelect.addEventListener('change', updateCatalog);
  sortOrderSelect.addEventListener('change', updateCatalog);
  searchInput.addEventListener('input', updateCatalog);

  // Initialize with default sorting (by name in ascending order) and no search query
  initCatalogInteractive('name', 'asc', '');
});

AOS.init();

initArrowFeature();
initModalLogics();
