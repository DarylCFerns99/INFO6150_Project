const express = require("express");
const Restaurant = require("../models/restaurant");

const router = express.Router();

const getDineinRestaurants = router.get(
  "/restaurantsList",
  async (req, res) => {
    // let collection = await db.collection("Restaurants");

    let results = await Restaurant.find({
      dine_in: true,
      place_id: { $ne: null },
      licenseno: { $ne: null },
    });

    results = results.map((result) => {
      const { licenseno, name, address, place_id, rating, takeout } = result;
      return {
        licenseno: licenseno,
        place_id: place_id,
        name: name,
        address: address,
        rating: rating,
        takeout: takeout,
      };
    });
    console.log(results);
    res.send(results).status(200);
  }
);

const getDeliveryRestaturants = router.get(
  "/deliveryList",
  async (req, res) => {
    let results = await Restaurant.find({
      delivery: true,
      place_id: { $ne: null },
      licenseno: { $ne: null },
    });

    results = results.map((result) => {
      const { licenseno, name, address, place_id, rating } = result;
      return {
        licenseno: licenseno,
        place_id: place_id,
        name: name,
        address: address,
        rating: rating,
      };
    });
    console.log(results);
    res.send(results).status(200);
  }
);

module.exports = { getDineinRestaurants, getDeliveryRestaturants };
