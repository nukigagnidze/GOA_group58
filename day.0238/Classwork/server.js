const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/items', itemRoutes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));