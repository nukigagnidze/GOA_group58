const http = require('http');
const routes = require('./router/tours.router');

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  routes(req, res);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});
