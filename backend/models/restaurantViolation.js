const mongoose = require("mongoose");

const restaurantViolationSchema = new mongoose.Schema({
  licenseno: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  licensecat: {
    type: String,
    default: "",
  },
  licstatus: {
    type: String,
    default: "",
  },
  comments: {
    type: String,
    default: "",
  },
  violation: {
    type: String,
    default: "",
  },
  viollevel: {
    type: String,
    default: "",
  },
  violdesc: {
    type: String,
    default: "",
  },
  violdttm: {
    type: String,
    default: "",
  },
  violstatus: {
    type: String,
    default: "",
  },
  descript: {
    type: String,
    default: "",
  },
  result: {
    type: String,
    default: "",
  }
});

const RestaurantViolation = mongoose.model("RestaurantViolation", restaurantViolationSchema, "RestaurantViolations");

module.exports = RestaurantViolation;
