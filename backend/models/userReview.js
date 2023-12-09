const mongoose = require("mongoose");

// Create User schema
var userReviewSchema = new mongoose.Schema({
    restaurant_id: {
        type: String,
        unique: false,
        required: [true, "Restaurant ID is required"],
    },
    user_id: {
        type: String,
        unique: false,
        required: [true, "User ID is required"],
    },
    author: {
        type: String,
        unique: false,
        required: [true, "Comment is required"],
    },
    content: {
        type: String,
        unique: false,
        required: [true, "Comment is required"],
    },
    rating: {
        type: Number,
        unique: false,
        required: [true, "Rating is required"],
    },
    reply: {
        type: Array,
        unique: false,
        required: [false, "Rating is required"],
    }
}, { timestamps: true, collection: "UserReview" });

// Adding schema to model
var UserReview = mongoose.model("userReview", userReviewSchema);
module.exports = UserReview;