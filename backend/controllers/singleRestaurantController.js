const express = require("express");
const Restaurant = require("../models/restaurant");
const RestaurantViolation = require("../models/restaurantViolation");

const router = express.Router();

// API endpoint to get a single restaurant by placeId
const getRestaurantByPlaceId = router.get("/:placeId", async (req, res) => {
  try {
    const { placeId } = req.params;
    console.log(placeId);
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
});

const getRestaurantViolations = router.get(
  "/:placeId/violations",
  async (req, res) => {
    try {
      const { placeId } = req.params;
      const licenseno = "126243";

      const response = await RestaurantViolation.aggregate([
        {
          $match: {
            licenseno: `${licenseno}`,
            violdttm: {
              $ne: null,
            },
          },
        },
        {
          $group: {
            _id: {
              $substr: ["$violdttm", 0, 10],
            },
            violdttm: {
              $push: {
                licenseno: "$licenseno",
                name: "$businessname",
                severity: "$viollevel",
                code: "$violation",
                heading: "$violdesc",
                description: "$comments",
                status: "$violstatus",
              },
            },
          },
        },
        {
          $sort: {
            _id: -1, // 1 for ascending order, -1 for descending order
          },
        },
      ]);

      // console.log(result);
      if (!response) {
        return res.status(404).json({ message: "Violations not found" });
      }
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

module.exports = { getRestaurantByPlaceId, getRestaurantViolations };
