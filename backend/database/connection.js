const mongoose = require("mongoose")
const dotenv = require('dotenv');
const { MongoMemoryServer } = require("mongodb-memory-server")

dotenv.config();

const connect = async () => {
    const connectionString = process.env.MONGODB_URI || "";
    const database = process.env.DATABASE || "";

    const mongoServer = await MongoMemoryServer.create()
    const mongoUri = mongoServer.getUri()
    // await mongoose.connect(`${connectionString}${database}`)
    await mongoose.connect(`${connectionString}`)
    // await mongoose.connect(mongoUri, { dbName: "imageTest" })
}

module.exports = { connect }