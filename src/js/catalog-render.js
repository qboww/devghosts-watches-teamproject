import initCatalogInteractive from './catalog-logics';

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

  initCatalogInteractive('name', 'asc', '');
});

