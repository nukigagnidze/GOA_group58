const express = require('express');
const app = express();

// middleware რომელიც JSON ფორმატში მოსულ body-ს გადააქცევს JS ობიექტად
app.use(express.json());

let cars = [
  { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
  { id: 2, brand: 'BMW', model: 'X5', year: 2021 },
  { id: 3, brand: 'Tesla', model: 'Model 3', year: 2022 },
  { id: 4, brand: 'Mercedes', model: 'C-Class', year: 2019 },
  { id: 5, brand: 'Ford', model: 'Focus', year: 2018 },
];

let nextId = 6;

app.get('/cars', (req, res) => {
  res.json(cars);
});

app.get('/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const car = cars.find(c => c.id === id);

  if (!car) {
    return res.status(404).json({ message: 'Car not found' });
  }

  res.json(car);
});

app.delete('/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cars.findIndex(c =>
