import express from "express";
import multer from "multer";
import path from "path";

const app = express();
const PORT = 5000;

// uploads folder storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// make uploads public
app.use("/uploads", express.static("uploads"));

app.post("/products", upload.single("image"), (req, res) => {
  const { name, price, category } = req.body;

  const product = {
    name,
    price,
    category,
    image: req.file.filename,
  };

  res.json(product);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});