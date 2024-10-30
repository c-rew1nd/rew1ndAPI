const Product = require("../model/products");

const getAllProducts = async (req, res) => {
  try {
    const myData = await Product.find({});
    res.status(200).json({ myData });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "I am getAllProductsTesting" });
};

module.exports = { getAllProducts, getAllProductsTesting };
