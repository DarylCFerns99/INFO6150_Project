const express = require('express');
const router = express.Router();
const RestaurantsListController = require('../controllers/restaurantListController');
const SingleRestuarntsController = require('../controllers/singleRestaurantController');


restaurantRouter.get('/restaurantsList', RestaurantsListController.getDineinRestaurants);
restaurantRouter.get('/deliveryList', RestaurantsListController.getDeliveryRestaturants);
restaurantRouter.get('/:placeId', SingleRestuarntsController.getRestaurantByPlaceId);
restaurantRouter.get('/:placeId/violations', SingleRestuarntsController.getRestaurantViolations);
restaurantRouter.post("/addMenuItem", newMenuItem);



module.exports = router;