const Product = require("../model/products");

const getAllProducts = async (req, res) => {
  try {
    const {company, name} = req.query
    const queryObject = {}
    if(company){
      queryObject.company = {$regex: company, $options: 'i'}
    }
    if(name){
      queryObject.name ={$regex: name, $options: 'i'}
    }

    
    const myData = await Product.find(queryObject);
    res.status(200).json({ myData });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

const getAllProductsTesting = async (req, res) => {
   try {
    const myData = await Product.find(req.query);
    console.log("getAllProductsTesting: ", req.query);
    res.status(200).json({ myData });
   } catch (error) {
    console.error("Error in getAllProductsTesting:", error);
    res.status(500).json({ error: "Failed to fetch products with query" });
   }
  };
  

module.exports = { getAllProducts, getAllProductsTesting };
