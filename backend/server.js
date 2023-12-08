const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require("./model/user");
const userRouter = require("./routes/userRouter");
const { connect } = require('./database/connection');
const restaurantRouter = require('./routes/restaurantRouter');

// Loading dotenv and initializing express
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// var allowedOrigins = [`http://localhost:${port}`];
// app.use(cors({
//     origin: function(origin, callback){
//         // allow requests with no origin 
//         // (like mobile apps or curl requests)
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) === -1) {
//             var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     }
// }));

// Getting port and connection string from .env
const port = process.env.PORT || 3001;

// Connection to database
// mongoose.connect(`${connectionString}${database}`)
//     .then(_ => console.log("Connection established"))
//     .catch(err => console.log(err));
app.use("/user", userRouter);
app.use("/restaurant", restaurantRouter);

connect()
    .then(_ => {
        console.log("Connection established")
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        })
    })
    .catch(err => console.log(err));

