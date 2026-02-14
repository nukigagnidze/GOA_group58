const express = require("express");
const Product = require("../models/Product");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// CREATE PRODUCT (Admin)
router.post("/", auth, async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// UPDATE PRODUCT
router.put("/:id", auth, async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(product);
});

// DELETE PRODUCT
router.delete("/:id", auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;