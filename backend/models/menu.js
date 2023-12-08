const mongoose = require("mongoose");

// Create User schema
var menuSchema = new mongoose.Schema({
    restaurant_id: {
        type: String,
        required: [true, "Restaurant ID is required"],
    },
    title: {
        type: String,
        unique: true,
        required: [true, "Title is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    price: {
        type: String,
        required: [true, "Price is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    }
}, { timestamps: true, collection: "menu" });

// Adding schema to model
var Menu = mongoose.model("menu", menuSchema);
module.exports = Menu;