const ATLAS_URI =
  "mongodb+srv://jovin:root123@cluster0.tezow6h.mongodb.net/?retryWrites=true&w=majority";

import { MongoClient } from "mongodb";
const connectionString = ATLAS_URI || "";

const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn.db("SafeDine");
export default db;
