const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  licenseno: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    get: function (data) {
      try {
        return JSON.parse(data);
      } catch (err) {
        return data;
      }
    },
    set: function (data) {
      return JSON.stringify(data);
    },
  },
  place_id: {
    type: String,
    required: true,
    unique: true,
  },
  curbside_pickup: {
    type: Boolean,
    default: false,
  },
  delivery: {
    type: Boolean,
    default: false,
  },
  dine_in: {
    type: Boolean,
    default: false,
  },
  takeout: {
    type: Boolean,
    default: false,
  },
  reservable: {
    type: Boolean,
    default: false,
  },
  website: {
    type: String,
    default: "",
  },
  map_link: {
    type: String,
    default: "",
  },
  phone_number: {
    type: String,
    default: "",
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Array,
    default: [],
  },
  vicinity: {
    type: String,
    default: "",
  },
  user_ratings_total: {
    type: Number,
    default: 0,
  },
  photos: {
    type: Object,
    default: "",
  },
  opening_hours: {
    type: Object,
    default: {},
  },
  utc_offset: {
    type: Number,
    default: 0,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema, "Restaurants");

module.exports = Restaurant;
