import express, { json } from "express";
import dotenv from "dotenv";
import axios from "axios";
import db from "../database/connection.js";
import Restaurant from "../models/restaurant.js";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const RADIUS = "1500";
let PLACE_ID = "";
let LOCATION = "";
let TEXT_SERARCH = "";

const router = express.Router();

async function fetchPlaceDetails(licenseno, location, textSearch) {
  try {
    LOCATION = location;
    TEXT_SERARCH = textSearch;
    let placesURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=${LOCATION}&radius=${RADIUS}&keyword=${TEXT_SERARCH}`;
    console.log(placesURL);

    const response = await axios.get(placesURL); //Nearby Search
    const data = response.data;

    PLACE_ID =
      data.results[0] && data.results[0].place_id
        ? data.results[0].place_id
        : "";
    console.log(PLACE_ID);

    if (PLACE_ID.length !== 0) {
      console.log("Inside Google Places API call:");
      let placeDetailsURL = `https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&place_id=${PLACE_ID}`;
      console.log(placeDetailsURL);

      const response2 = await axios.get(placeDetailsURL); //Place Details
      const data2 = response2.data.result;
      // console.log(data2);

      const customKeysObject = {
        licenseno: licenseno,
        name: data2.name,
        address: data2.formatted_address,
        place_id: data2.place_id,
        curbside_pickup: data2.curbside_pickup,
        delivery: data2.delivery,
        dine_in: data2.dine_in,
        takeout: data2.takeout,
        website: data2.website,
        map_link: data2.url,
        phone_number: data2.formatted_phone_number,
        rating: data2.rating,
        reviews: data2.reviews,
        user_ratings_total: data2.user_ratings_total,
        photos: data2.photos,
        opening_hours: data2.current_opening_hours,
        vicinity: data2.vicinity,
        utc_offset: data2.utc_offset,
        // Add other custom keys based on your requirements
      };

      const myModelInstance = new Restaurant(customKeysObject);
      // console.log(myModelInstance);

      db.collection("Restaurants").updateOne(
        { place_id: myModelInstance.place_id },
        { $set: customKeysObject },
        { upsert: true },
        function (err, res) {
          if (err) throw err;
          console.log("Document Updated Successfully!");
          db.close();
        }
      );

      // db.collection("Restaurants").insertOne(
      //   myModelInstance,
      //   function (err, res) {
      //     if (err) throw err;
      //     console.log("Document Inserted Successfully!");
      //     db.close();
      //   }
      // );

      return myModelInstance;
    }
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
}

export { fetchPlaceDetails };
