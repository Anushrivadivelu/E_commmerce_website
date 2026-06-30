const Product = require("../models/Product");

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE PRODUCT (ADMIN)
const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, countInStock } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      image,
      countInStock,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, createProduct };