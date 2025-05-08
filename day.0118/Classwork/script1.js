function renderf(products) {
    const main = document.querySelector('main');

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

const products = [
    {
        id: 1,
        title: "Example Product",
        price: 19.99,
        description: "This is an example product.",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        title: "Another Product",
        price: 29.99,
        description: "This is another product.",
        image: "https://via.placeholder.com/150"
    }
];

renderf(products);




// main.js

const { add, subtract, multiply, divide } = require('./math');

console.log("შედეგი (შედება):", add(5, 3));  
console.log("შედეგი (გამოკლება):", subtract(5, 3)); 
console.log("შედეგი (გამრავლება):", multiply(5, 3)); 
console.log("შედეგი (გაყოფა):", divide(10, 2));    
