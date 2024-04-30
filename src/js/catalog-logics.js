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

function initCatalogInteractive(sortBy, sortOrder, searchQuery, minPrice) {
  function createListItem(item) {
    const li = document.createElement('li');
    li.classList.add('catalog-list-item');
    li.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3 class="catalog-title">${item.name}</h3>
      <p class="catalog-text"><span>€</span>${item.price}</p>
    `;
    return li;
  }

  fetch('../data/watches.json')
    .then(response => response.json())
    .then(data => {
      let filteredData = data;

      if (searchQuery) {
        filteredData = data.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      if (minPrice) {
        filteredData = filteredData.filter(item => parseFloat(item.price) >= minPrice);
      }

      if (sortBy === 'name') {
        filteredData.sort((a, b) =>
          sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
      } else if (sortBy === 'price') {
        filteredData.sort((a, b) =>
          sortOrder === 'asc'
            ? parseFloat(a.price) - parseFloat(b.price)
            : parseFloat(b.price) - parseFloat(a.price)
        );
      }

      const catalogList = document.getElementById('catalog-list');
      catalogList.innerHTML = '';

      if (filteredData.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.classList.add('no-items-found');
        noResultsMessage.textContent = 'No items found.';
        catalogList.appendChild(noResultsMessage);
      } else {
        filteredData.forEach(item => {
          catalogList.appendChild(createListItem(item));
        });
      }
    })
    .catch(error => console.error('Error loading JSON:', error));
}