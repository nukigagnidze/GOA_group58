require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL);

app.use("/auth", require("./routes/auth"));
app.use("/products", require("./routes/products"));

app.listen(5000, () => console.log("Server running"));