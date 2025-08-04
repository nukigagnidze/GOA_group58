const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/cars' && req.method === 'GET') {
    fs.readFile('cars.json', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Internal Server Error' }))
        return
      }
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(data)
    })
  } else if (req.url === '/cars' && req.method === 'POST') {
    let body = ''
    req.on('data', chunk => {
      body += chunk.toString()
    })
    req.on('end', () => {
      const newCar = JSON.parse(body)
      fs.readFile('cars.json', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Internal Server Error' }))
          return
        }
        const cars = JSON.parse(data)
        cars.push(newCar)
        fs.writeFile('cars.json', JSON.stringify(cars, null, 2), err => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Could not save data' }))
            return
          }
          res.writeHead(201, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify(newCar))
        })
      })
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
  }
})

server.listen(3000)
