import express from "express";
import db from "../database/connection.js";
import { fetchPlaceDetails } from "./restaurantRouter.js";

const router = express.Router();

//fetch restaurant violations data and insert into Restaurant database
router.get("/insert", async (req, res) => {
  let collection = await db.collection("RestaurantViolations");

  let results = await collection
    .aggregate([
      {
        $group: {
          _id: {
            licenseno: "$licenseno",
            businessname: "$businessname",
            address: "$address",
            city: "$city",
            state: "$state",
            zip: "$zip",
            location: "$location",
          },
        },
      },
      {
        $sort: {
          "_id.businessname": 1, // 1 for ascending order, -1 for descending order
        },
      },
    ])
    .toArray();

  console.log(results);

  // Constructing the string
  let resultString = "";

  results.forEach(async (result) => {
    const { licenseno, businessname, address, city, state, zip, location } =
      result._id;
    resultString = `${businessname}, ${address}, ${city}, ${state}, ${zip}`;
    console.log(resultString);
    let latlong = location.replace("(", "").replace(")", "");
    console.log(latlong);
    console.log(licenseno);

    await fetchPlaceDetails(licenseno, latlong, resultString);
  });

  res.send("Data Inserted Succesfully!").status(200);
});

router.get("/list", async (req, res) => {
  let collection = await db.collection("RestaurantViolations");

  let results = await collection.distinct("businessname");

  // let results1 = await collection.find({}, { projection: { _id: 0, businessname: 1 } })
  //   .limit(50)
  //   .toArray();
  console.log(results);
  res.send(results).status(200);
});

router.get("/restaurantsList", async (req, res) => {
  let collection = await db.collection("Restaurants");

  // let results = await collection.find({dine_in: true, place_id: {$ne : null}, licenseno: {$ne : null}}, { projection: { _id: 0, place_id:1, licenseno: 1, name: 1, address: 2 } })
  // .toArray();

  let results = await collection.find({dine_in: true, place_id: {$ne : null}, licenseno: {$ne : null}})
    .toArray();
  results = results.map((result) => {
    const { licenseno, name, address, place_id, rating, takeout, photos } = result;
    return {
      licenseno: licenseno,
      place_id: place_id,
      name: name,
      address: address,
      rating: rating,
      takeout: takeout,
      photos: photos[0]
    }
  })
  console.log(results);
  res.send(results).status(200);
});

router.get("/deliveryList", async (req, res) => {
  let collection = await db.collection("Restaurants");

  // let results = await collection.find({dine_in: true, place_id: {$ne : null}, licenseno: {$ne : null}}, { projection: { _id: 0, place_id:1, licenseno: 1, name: 1, address: 2 } })
  // .toArray();

  let results = await collection.find({delivery: true, place_id: {$ne : null}, licenseno: {$ne : null}})
    .toArray();
  results = results.map((result) => {
    const { licenseno, name, address, place_id, rating } = result;
    return {
      licenseno: licenseno,
      place_id: place_id,
      name: name,
      address: address,
      rating: rating
    }
  })
  console.log(results);
  res.send(results).status(200);
});

router.get("/takeoutList", async (req, res) => {
  let collection = await db.collection("Restaurants");

  // let results = await collection.find({dine_in: true, place_id: {$ne : null}, licenseno: {$ne : null}}, { projection: { _id: 0, place_id:1, licenseno: 1, name: 1, address: 2 } })
  // .toArray();

  let results = await collection.find({takeout: true, place_id: {$ne : null}, licenseno: {$ne : null}})
    .toArray();
  results = results.map((result) => {
    const { licenseno, name, address, place_id, rating } = result;
    return {
      licenseno: licenseno,
      place_id: place_id,
      name: name,
      address: address,
      rating: rating
    }
  })
  console.log(results);
  res.send(results).status(200);
});

export default router;
