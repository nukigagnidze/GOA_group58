function renderf(products) {
    const main = document.querySelector('main');
    main.innerHTML = '';
  
    products.forEach(product => {
      const section = document.createElement('section');
  
      section.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="${product.title}" width="150">
        <p>${product.description}</p>
        <p><strong>Price:</strong> $${product.price}</p>
      `;
  
      main.appendChild(section);
    });
  }

  let allProducts = [];
  
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      allProducts = data;
      renderf(allProducts);
    })
    .catch(error => console.error('Error fetching products:', error));

  const categorySelect = document.getElementById('categorySelect');
  categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;
  
    if (selectedCategory === 'all') {
      renderf(allProducts);
    } else {
      const filtered = allProducts.filter(p => p.category === selectedCategory);
      renderf(filtered);
    }
  });
  