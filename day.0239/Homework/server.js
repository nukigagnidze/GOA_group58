const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/books', bookRoutes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
