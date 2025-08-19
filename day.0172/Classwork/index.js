// როდესაც კლიენტი აგზავნის JSON-ით request-ს (მაგ., POST ან PUT მოთხოვნა), მისი შიგთავსი (body) არის ჩვეულებრივი ტექსტი

function jsonMiddleware(req, res, next) {
  let data = '';

  req.on('data', chunk => {
    data += chunk;
  });

  req.on('end', () => {
    try {
      if (data) {
        req.body = JSON.parse(data);
      } else {
        req.body = {};
      }
      next();
    } catch (err) {
      res.status(400).send('Invalid JSON');
    }
  });
}

const express = require('express');
const app = express();

app.use(jsonMiddleware);

app.post('/user', (req, res) => {
  res.send(req.body);
});

app.listen(3000);