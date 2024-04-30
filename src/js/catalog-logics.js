function initCatalogInteractive(sortBy, sortOrder, searchQuery) {
  function createListItem(item) {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${item.name}</h3>
      <img src="${item.image}" alt="${item.name}">
      <p>${item.price}</p>
    `;
    return li;
  }

  fetch('../data/watches.json')
    .then(response => response.json())
    .then(data => {
      // Filter data based on search query
      if (searchQuery) {
        data = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
      }

      // Sort filtered data based on sortBy and sortOrder criteria
      if (sortBy === 'name') {
        data.sort((a, b) =>
          sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
      } else if (sortBy === 'price') {
        data.sort((a, b) =>
          sortOrder === 'asc'
            ? parseFloat(a.price) - parseFloat(b.price)
            : parseFloat(b.price) - parseFloat(a.price)
        );
      }

      const catalogList = document.getElementById('catalog-list');
      // Clear existing list items
      catalogList.innerHTML = '';

      // Render sorted and filtered list items
      data.forEach(item => {
        catalogList.appendChild(createListItem(item));
      });
    })
    .catch(error => console.error('Error loading JSON:', error));
}

export default initCatalogInteractive;
