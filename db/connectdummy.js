const mongoose = require("mongoose")

uri =""

const connectDB = async () => {
    try {
    await mongoose.connect(uri);
   console.log("Connected to the database");
    } catch (error) {
     console.error("Database connection failed:", error);
   process.exit(1); // Exit process with failure
   }
    };

module.exports = connectDB;