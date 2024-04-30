function initCatalogInteractive(sortBy) {
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
      // Sort data based on sortBy criteria
      if (sortBy === 'name') {
        data.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'price') {
        data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      }

      const catalogList = document.getElementById('catalog-list');
      // Clear existing list items
      catalogList.innerHTML = '';

      // Render sorted list items
      data.forEach(item => {
        catalogList.appendChild(createListItem(item));
      });
    })
    .catch(error => console.error('Error loading JSON:', error));
}

export default initCatalogInteractive;
