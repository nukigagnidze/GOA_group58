const express = require('express');
const app = express();

app.use(express.json());

let tours = [
  { id: 1, name: 'City Tour', price: 50 },
  { id: 2, name: 'Mountain Hike', price: 100 },
  { id: 3, name: 'Beach Day', price: 80 },
];

app.get('/tours', (req, res) => {
  res.json(tours);
});

app.get('/tours/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tour = tours.find(t => t.id === id);
  if (!tour) return res.status(404).send('Tour not found');
  res.json(tour);
});

app.post('/tours', (req, res) => {
  const newTour = {
    id: tours.length ? tours[tours.length - 1].id + 1 : 1,
    name: req.body.name,
    price: req.body.price
  };
  tours.push(newTour);
  res.status(201).json(newTour);
});

app.put('/tours/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tour = tours.find(t => t.id === id);
  if (!tour) return res.status(404).send('Tour not found');
  tour.name = req.body.name;
  tour.price = req.body.price;
  res.json(tour);
});

app.delete('/tours/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tours.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).send('Tour not found');
  const deleted = tours.splice(index, 1);
  res.status(200).json(deleted[0]);
});

app.listen(3000);


// Middleware არის ფუნქცია express-ში რომელიც იღებს request-ს და response-ს
// და მუშაობს მათ შორის (შეიძლება შეამოწმოს, შეცვალოს ან დაამატოს რაღაც)

// გამოიყენება მონაცემების დამუშავებისთვის, ავტორიზაციისთვის, ლოგირებისთვის და ა.შ.

// მაგალითად: express.json() არის middleware, რომელიც კითხულობს JSON body-ს
// და request.body-ში ათავსებს დამუშავებულ მონაცემს

// Middleware ეშვება ყველა request-ზე მანამ სანამ კონკრეტულ route-ს მივა კონტროლი
// შემდეგ უნდა გამოიძახოს next() რომ გადაეცეს შემდეგს ან route-ს
