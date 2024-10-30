require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./model/products");
const ProductJson = require("./products.json");

const start = async () => {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL is not defined in the .env file");
    }

    console.log("Connecting to:", process.env.MONGODB_URL); // Debugging line
    await connectDB(process.env.MONGODB_URL);
    console.log("Database connected successfully");

    await Product.create(ProductJson);
    console.log("Products added successfully");

  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

start();
