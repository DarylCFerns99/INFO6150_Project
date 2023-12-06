const express = require('express');
const router = express.Router();
const RestaurantsListController = require('../controllers/restaurantListController');

router.get('/restaurantsList', RestaurantsListController.getDineinRestaurants);
router.get('/deliveryList', RestaurantsListController.getDeliveryRestaturants);

module.exports = router;