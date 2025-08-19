function loggerMiddleware(req, res, next) {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const log = `${req.method} ${req.url} ${res.statusCode} ${duration}ms`;
    console.log(log);
  });

  next();
}

const express = require('express');
const app = express();

app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(3000);

// Morgan არის Express-ისთვის შექმნილი middleware ლოგირების ბიბლიოთეკა.