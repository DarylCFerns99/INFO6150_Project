const express = require("express");
const restaurantRouter = express.Router();
const { newMenuItem, fetchMenuItems, bulkInsertMenuItems } = require("../controllers/menuController");
const { getOrder, createOrder } = require("../controllers/orderController");
const { createReview, getReviews, editComment } = require("../controllers/userReviewController");
const RestaurantsListController = require('../controllers/restaurantListController');
const SingleRestuarntsController = require('../controllers/singleRestaurantController');


restaurantRouter.get('/restaurantsList', RestaurantsListController.getDineinRestaurants);
restaurantRouter.get('/deliveryList', RestaurantsListController.getDeliveryRestaturants);
restaurantRouter.get('/:placeId', SingleRestuarntsController.getRestaurantByPlaceId);
restaurantRouter.get('/:placeId/violations', SingleRestuarntsController.getRestaurantViolations);
restaurantRouter.post("/createReview", createReview);
restaurantRouter.post("/getReviews", getReviews);
restaurantRouter.post("/editReview", editComment);
restaurantRouter.post("/addMenuItem", newMenuItem);
restaurantRouter.post("/addBulkMenuItems", bulkInsertMenuItems);
restaurantRouter.post("/getMenu", fetchMenuItems);
restaurantRouter.post("/getOrders", getOrder);
restaurantRouter.post("/createOrder", createOrder);


module.exports = restaurantRouter;