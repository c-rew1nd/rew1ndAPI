const Product = require("../model/products");


const getAllProducts = async (req, res) => {
  try {
    const { company, name, sort, select } = req.query;
    const queryObject = {};

    if (company) {
      queryObject.company = { $regex: company, $options: 'i' };
    }
    if (name) {
      queryObject.name = { $regex: name, $options: 'i' };
    }

    let productQuery = Product.find(queryObject);

    // Sorting functionality
    if (sort) {
      const sortBy = sort.split(',').join(' ');
      productQuery = productQuery.sort(sortBy);
    }

    if (select) {
      const fieldsToSelect = select.split(',').join(' ');
      productQuery = productQuery.select(fieldsToSelect);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip  = (page-1) *limit;

    productQuery = productQuery.skip(skip).limit(limit)
    
    const myData = await productQuery;
    res.status(200).json({ myData });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

const getAllProductsTesting = async (req, res) => {
   try {
    const myData = await Product.find(req.query).sort("price name");
    console.log("getAllProductsTesting: ", req.query);
    res.status(200).json({ myData });
   } catch (error) {
    console.error("Error in getAllProductsTesting:", error);
    res.status(500).json({ error: "Failed to fetch products with query" });
   }
  };
  

module.exports = { getAllProducts, getAllProductsTesting };
