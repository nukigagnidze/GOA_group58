// express.json() — არის Express-ის მშობლიური middleware,
// რომელიც ფუქნციას უწევს მოსმენას და მიღებული HTTP მოთხოვნის
// body-ს JSON-ში გარდაქმნას.
// თუ მოთხოვნის body JSON ფორმატშია და კარგად არის ჩაწერილი,
// ეს middleware თავის თავით გამოიძახებს JSON.parse()-ს
// და შექმნის req.body ობიექტს, რომელიც შემდეგ როუტებში იქნება ხელმისაწვდომი.


function simpleJsonParser(req, res, next) {
  if (req.headers['content-type'] && req.headers['content-type'].includes('application/json')) {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', () => {
      try {
        req.body = data ? JSON.parse(data) : {};
        next();
      } catch (err) {
        res.status(400).json({ error: 'Invalid JSON' });
      }
    });
  } else {
    req.body = {};
    next();
  }
}
