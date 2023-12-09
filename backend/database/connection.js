const mongoose = require("mongoose")
const dotenv = require('dotenv');
const { MongoMemoryServer } = require("mongodb-memory-server")

dotenv.config();

const connect = async () => {
    const connectionString = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/";
    const database = process.env.DATABASE || "test";

    const mongoServer = await MongoMemoryServer.create()
    const mongoUri = mongoServer.getUri()
    // await mongoose.connect(`${connectionString}${database}`)
    await mongoose.connect(`${connectionString}`)
    // await mongoose.connect(mongoUri, { dbName: "imageTest" })
}

module.exports = { connect }