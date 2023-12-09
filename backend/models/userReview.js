const mongoose = require("mongoose");

// Create User schema
var userReviewSchema = new mongoose.Schema({
    restaurant_id: {
        type: String,
        required: [true, "Restaurant ID is required"],
    },
    user_id: {
        type: String,
        required: [true, "User ID is required"],
    },
    author: {
        type: String,
        required: [true, "Comment is required"],
    },
    content: {
        type: String,
        required: [true, "Comment is required"],
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
    },
    reply: {
        type: Array,
        required: [false, "Rating is required"],
    }
}, { timestamps: true, collection: "UserReview" });

// Adding schema to model
var UserReview = mongoose.model("userReview", userReviewSchema);
module.exports = UserReview;