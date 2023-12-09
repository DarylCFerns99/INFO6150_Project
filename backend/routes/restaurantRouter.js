const express = require("express");
const restaurantRouter = express.Router();
const { newMenuItem, fetchMenuItems, bulkInsertMenuItems } = require("../controllers/menuController");
const { getOrder, createOrder } = require("../controllers/orderController");
const { createReview, getReviews, editComment } = require("../controllers/userReviewController");
const { getDineinRestaurants, getDeliveryRestaturants } = require("../controllers/restaurantListController");
const { getRestaurantByPlaceId } = require("../controllers/singleRestaurantController");

restaurantRouter.post("/createReview", createReview);
restaurantRouter.post("/getReviews", getReviews);
restaurantRouter.post("/editReview", editComment);
restaurantRouter.post("/addMenuItem", newMenuItem);
restaurantRouter.post("/addBulkMenuItems", bulkInsertMenuItems);
restaurantRouter.post("/getMenu", fetchMenuItems);
restaurantRouter.post("/getOrders", getOrder);
restaurantRouter.post("/createOrder", createOrder);
restaurantRouter.get("/restaurantsList", getDineinRestaurants);
restaurantRouter.get("/deliveryList", getDeliveryRestaturants);
restaurantRouter.get("/:placeId", getRestaurantByPlaceId);

module.exports = restaurantRouter;
