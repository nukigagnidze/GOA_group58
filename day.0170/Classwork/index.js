// 1
// ვთქვათ ეს თქვენი tours array-ია
const tours = [
  { id: 1, title: "Tour A", date: "2025-08-10" },
  { id: 2, title: "Tour B", date: "2025-07-20" },
  { id: 3, title: "Tour C", date: "2025-08-15" }
];

// თქვენი GET /tours როუტი
app.get('/tours', (req, res) => {
  let result = [...tours];

  const { sort } = req.query;

  if (sort === 'date_asc') {
    result.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sort === 'date_desc') {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  res.json(result);
});


// 2
app.get('/tours/:id', (req, res) => {
  const { id } = req.params;
  const tour = tours.find(t => t.id === parseInt(id));

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Tour not found'
    });
  }

  res.json(tour);
});


// 3
const express = require('express');
const router = express.Router();

const tours = [
  { id: 1, title: "Tour A", date: "2025-08-10" },
  { id: 2, title: "Tour B", date: "2025-07-20" },
  { id: 3, title: "Tour C", date: "2025-08-15" }
];

// GET all tours with sorting
router.get('/', (req, res) => {
  let result = [...tours];
  const { sort } = req.query;

  if (sort === 'date_asc') {
    result.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sort === 'date_desc') {
    result.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  res.json(result);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const tour = tours.find(t => t.id === parseInt(id));

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Tour not found'
    });
  }

  res.json(tour);
});

module.exports = router;
