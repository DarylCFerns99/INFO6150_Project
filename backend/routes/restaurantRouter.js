const express = require("express");
const restaurantRouter = express.Router();
const { newMenuItem, fetchMenuItems } = require("../controllers/menuController");
const { getOrder, createOrder } = require("../controllers/orderController");
const RestaurantsListController = require("../controllers/restaurantListController");
const SingleRestuarntsController = require("../controllers/singleRestaurantController");

restaurantRouter.get("/restaurantsList", RestaurantsListController.getDineinRestaurants);
restaurantRouter.get("/deliveryList", RestaurantsListController.getDeliveryRestaturants);
restaurantRouter.get("/:placeId", SingleRestuarntsController.getRestaurantByPlaceId);
restaurantRouter.post("/addMenuItem", newMenuItem);
restaurantRouter.post("/getMenu", fetchMenuItems);
restaurantRouter.post("/getOrders", getOrder);
restaurantRouter.post("/createOrder", createOrder);

module.exports = restaurantRouter;
