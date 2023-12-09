const Restaurant = require("../models/restaurant");

const getDineinRestaurants = async (req, res) => {
  // let collection = await db.collection("Restaurants");

  let results = await Restaurant.find({
    dine_in: true,
    place_id: { $ne: null },
    licenseno: { $ne: null },
  });

  results = results.map((result) => {
    const { licenseno, name, address, place_id, rating, takeout, photos } = result;
    return {
      licenseno: licenseno,
      place_id: place_id,
      name: name,
      address: address,
      rating: rating,
      takeout: takeout,
      photos: photos[0],
    };
  });
  console.log(results);
  res.send(results).status(200);
};

const getDeliveryRestaturants = async (req, res) => {
  let results = await Restaurant.find({
    delivery: true,
    place_id: { $ne: null },
    licenseno: { $ne: null },
  });

  results = results.map((result) => {
    const { licenseno, name, address, place_id, rating, photos } = result;
    return {
      licenseno: licenseno,
      place_id: place_id,
      name: name,
      address: address,
      rating: rating,
      photos: photos[0],
    };
  });
  console.log(results);
  res.send(results).status(200);
};

module.exports = { getDineinRestaurants, getDeliveryRestaturants };
