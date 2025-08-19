const express = require('express');
const app = express();

const cars = [
  { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
  { id: 2, brand: 'BMW', model: 'X5', year: 2019 },
  { id: 3, brand: 'Tesla', model: 'Model 3', year: 2023 },
];

app.get('/cars', (req, res) => {
  res.json(cars);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
const express = require('express');
const app = express();

const cars = [
  { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
  { id: 2, brand: 'BMW', model: 'X5', year: 2019 },
  { id: 3, brand: 'Tesla', model: 'Model 3', year: 2023 },
];

app.get('/cars', (req, res) => {
  res.json(cars);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
