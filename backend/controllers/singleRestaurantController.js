const express = require("express");
const Restaurant = require("../models/restaurant");

const router = express.Router();

// API endpoint to get a single restaurant by placeId
const getRestaurantByPlaceId = router.get(
  "/:placeId",
  async (req, res) => {
    try {
      const { placeId } = req.params;
      // Find a single restaurant based on the provided placeId
      const result = await Restaurant.findOne({ place_id: placeId });

      if (!result) {
        return res.status(404).json({ message: "Restaurant not found" });
      }


      console.log(result);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

module.exports = { getRestaurantByPlaceId };