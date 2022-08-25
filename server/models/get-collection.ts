import { Collection } from "mongodb";
import { config } from "../config/dev";
import { client as DbClient } from "../loaders/db";

const DBName = config.MONGODB_NAME;

async function getCollection<T>(
  collectionName: string
): Promise<Collection<T> | null> {
  const db = DbClient.db(DBName);

  return db.collection<T>(collectionName);
}

export default getCollection;
