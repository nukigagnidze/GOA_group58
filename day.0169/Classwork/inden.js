const express = require('express');
const app = express();

let tours = [
  { id: 1, name: 'City Tour', price: 50 },
  { id: 2, name: 'Mountain Hike', price: 120 },
  { id: 3, name: 'Safari Adventure', price: 300 },
  { id: 4, name: 'Historical Tour', price: 80 },
  { id: 5, name: 'Beach Escape', price: 200 }
];

app.get('/tours', (req, res) => {
  const { sort, limit } = req.query;
  let result = [...tours];

  if (sort === 'price') {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === '-price') {
    result.sort((a, b) => b.price - a.price);
  }

  if (limit) {
    const lim = parseInt(limit);
    result = result.slice(0, lim);
  }

  res.json(result);
});

app.listen(3000);
