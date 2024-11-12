const mongoose = require("mongoose")

const connectDB = async (uri) => {
    try {
    await mongoose.connect(uri);
   console.log("Connected to the database");
    } catch (error) {
     console.error("Database connection failed:", error);
   process.exit(1); // Exit process with failure
   }
  };
    

module.exports = connectDB;