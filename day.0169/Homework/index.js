const express = require('express');
const app = express();

app.use(express.json());

let products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Headphones', price: 200 },
  { id: 4, name: 'Monitor', price: 400 },
  { id: 5, name: 'Keyboard', price: 100 }
];

app.get('/products', (req, res) => {
  let result = [...products];

  if (req.query.sort === 'asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (req.query.sort === 'desc') {
    result.sort((a, b) => b.price - a.price);
  }

  if (req.query.limit) {
    const limit = parseInt(req.query.limit);
    result = result.slice(0, limit);
  }

  res.json(result);
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

app.post('/products', (req, res) => {
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.patch('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).send('Product not found');

  if (req.body.name) product.name = req.body.name;
  if (req.body.price) product.price = req.body.price;

  res.json(product);
});

app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).send('Product not found');
  const deleted = products.splice(index, 1);
  res.status(200).json(deleted[0]);
});

app.listen(3000);
