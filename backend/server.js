const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require("./model/user");
const userRouter = require("./routes/userRouter");

// Loading dotenv and initializing express
dotenv.config();
const app = express();
app.use(express.json());
var allowedOrigins = ['http://localhost:3000'];
app.use(cors({
    origin: function(origin, callback){
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

// Getting port and connection string from .env
const port = process.env.PORT || 3001;
const connectionString = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/";
const database = process.env.DATABASE || "test";

// Connection to database
mongoose.connect(`${connectionString}${database}`)
    .then(_ => console.log("Connection established"))
    .catch(err => console.log(err));

app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})