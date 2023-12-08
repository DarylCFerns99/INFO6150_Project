const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")

const connect = async () => {
    const mongoServer = await MongoMemoryServer.create()
    const mongoUri = mongoServer.getUri()
    // await mongoose.connect(`${connectionString}${database}`)
    await mongoose.connect(mongoUri, { dbName: "imageTest" })
}

module.exports = { connect }