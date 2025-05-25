const productsContainer = document.getElementById("products");
    const cartCount = document.getElementById("cart-count");
    const filterButtons = document.querySelectorAll("#filters button");

    let cart = [];
    let allProducts = [];

    fetch("data/products.json")
      .then(res => res.json())
      .then(data => {
        allProducts = data;
        displayProducts(allProducts);
      });

    function displayProducts(products) {
      productsContainer.innerHTML = "";
      products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product");
        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>$${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(card);
      });
    }

    function addToCart(id) {
      const product = allProducts.find(p => p.id === id);
      cart.push(product);
      cartCount.textContent = cart.length;
    }

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        if (category === "all") {
          displayProducts(allProducts);
        } else {
          const filtered = allProducts.filter(p => p.category === category);
          displayProducts(filtered);
        }
      });
    });