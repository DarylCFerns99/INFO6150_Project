const express = require("express");
const { newMenuItem } = require("../controllers/menuController");

const restaurantRouter = express.Router();

// restaurantRouter.get("/getOrders", )
restaurantRouter.post("/addMenuItem", newMenuItem);

module.exports = restaurantRouter;