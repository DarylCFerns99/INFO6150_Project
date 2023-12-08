const express = require('express');
const router = express.Router();
const RestaurantsListController = require('../controllers/restaurantListController');
const SingleRestuarntsController = require('../controllers/singleRestaurantController');

router.get('/restaurantsList', RestaurantsListController.getDineinRestaurants);
router.get('/deliveryList', RestaurantsListController.getDeliveryRestaturants);
router.get('/:placeId', SingleRestuarntsController.getRestaurantByPlaceId);


module.exports = router;