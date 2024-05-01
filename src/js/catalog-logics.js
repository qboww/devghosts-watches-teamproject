document.addEventListener('DOMContentLoaded', () => {
  const sortSelect = document.getElementById('sort-select');
  const sortOrderSelect = document.getElementById('sort-order-select');
  const searchInput = document.getElementById('search-input');
  const minPriceInput = document.getElementById('min-price-input');
  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');
  const currentPageSpan = document.getElementById('current-page');

  const homeLink = document.querySelector('.nav-link-studio[href="./index.html"]');
  const catalogLink = document.querySelector('.nav-link[href="./catalog-interactive.html"]');
  homeLink.classList.remove('nav-link-studio');
  catalogLink.classList.add('nav-link-studio');

  let currentPage = 1;
  const itemsPerPage = 6;
  let totalItems = 0;
  let totalPages = 0;
  prevPageBtn.disabled = true;

  function updateCatalog() {
    const sortBy = sortSelect.value;
    const sortOrder = sortOrderSelect.value;
    const searchQuery = searchInput.value.trim();
    const minPrice = minPriceInput.value.trim();
    initCatalogInteractive(sortBy, sortOrder, searchQuery, minPrice, currentPage, itemsPerPage);
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
      updateCatalog();
    }

    if (currentPage === 1) {
      prevPageBtn.disabled = true;
    }

    nextPageBtn.disabled = false;
  }

  function goToNextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
      updateCatalog();
    }

    if (currentPage === totalPages) {
      nextPageBtn.disabled = true;
    }

    prevPageBtn.disabled = false;
  }

  function updatePagination() {
    currentPageSpan.textContent = `Page ${currentPage}`;
  }

  sortSelect.addEventListener('change', updateCatalog);
  sortOrderSelect.addEventListener('change', updateCatalog);
  searchInput.addEventListener('input', updateCatalog);
  minPriceInput.addEventListener('input', updateCatalog);
  prevPageBtn.addEventListener('click', goToPreviousPage);
  nextPageBtn.addEventListener('click', goToNextPage);

  fetch('./data/watches.json')
    .then(response => response.json())
    .then(data => {
      totalItems = data.length;
      totalPages = Math.ceil(totalItems / itemsPerPage);
      updatePagination();
      initCatalogInteractive('name', 'asc', '', '', currentPage, itemsPerPage);
    })
    .catch(error => console.error('Error loading JSON:', error));
});

function initCatalogInteractive(
  sortBy,
  sortOrder,
  searchQuery,
  minPrice,
  currentPage,
  itemsPerPage
) {
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

  fetch('./data/watches.json')
    .then(response => response.json())
    .then(data => {
      let filteredData = data;

      if (searchQuery) {
        filteredData = filteredData.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (minPrice) {
        filteredData = filteredData.filter(item => parseFloat(item.price) >= parseFloat(minPrice));
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

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const itemsToShow = filteredData.slice(startIndex, endIndex);

      const catalogList = document.getElementById('catalog-list');
      catalogList.innerHTML = '';

      if (itemsToShow.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.classList.add('no-items-found');
        noResultsMessage.textContent = 'No items found.';
        catalogList.appendChild(noResultsMessage);
      } else {
        itemsToShow.forEach(item => {
          catalogList.appendChild(createListItem(item));
        });
      }
    })
    .catch(error => console.error('Error loading JSON:', error));
}
