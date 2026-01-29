const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postRoutes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));