import { MongoClient } from "mongodb";
import { parseMongoDBURL } from "../config/dev";

const URI = parseMongoDBURL();

let client: MongoClient;

async function connectDB() {
  try {
    client = new MongoClient(URI, {
      connectTimeoutMS: 1000,
      compressors: "zlib,snappy",
    });

    await client.connect();

    await client.db("admin").command({ ping: 1 });

    console.log("Connected to DB successfully...");
  } catch (error) {
    console.error("DB connection failed!", error);
  }
}

export { connectDB, client };
