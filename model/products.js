const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:[true, "price is required"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default : 0.0,
    },
    createdAt: {
        type: Date,
        defualt: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: `${VALUE} is not supported`
        },
    },
})


module.exports = mongoose.model("Product", productSchema)