const mongoose = require("mongoose");

// Create User schema
var orderSchema = new mongoose.Schema({
    restaurant_id: {
        type: String,
        required: [true, "Restaurant ID is required"],
    },
    user_id: {
        type: String,
        required: [true, "Restaurant ID is required"],
    },
    menu_item_id: {
        type: String,
        required: [true, "Menu Item ID is required"],
    },
    quantity: {
        type: String,
        required: [true, "Quantity is required"],
    }
}, { timestamps: true, collection: "Order" });

// Adding schema to model
var Order = mongoose.model("order", orderSchema);
module.exports = Order;