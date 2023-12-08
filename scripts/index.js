import express from "express";
// import restaurantViolations from "./routes/RestaurantViolations.js";

const app = express();
const port = 3000;

app.use(express.json());
// app.use("/script/places", restaurantViolations);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
