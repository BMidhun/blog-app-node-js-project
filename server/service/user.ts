import { compare as bcryptCompare, genSalt, hash as bcryptHash } from "bcrypt";
import { sign as jwtSign } from "jsonwebtoken";

import { config } from "../config/dev";
import getCollection from "../models/get-collection";
import { UserCollection, UserDocument } from "../models/interfaces/user";

const USER_COLLECTION = config.USER_COLLECTION;
const SERVER_SECRET = config.SERVER_SECRET;

class UserService {
  static async Login(email: string, password: string): Promise<string | null> {
    try {
      const collection = await getCollection<UserCollection>(USER_COLLECTION);

      if (!collection) throw new Error("Collection not found");

      const query = { email };

      const user = await collection.findOne(query);

      if (!user) return null;

      const res = await bcryptCompare(password, user.password);

      return res ? jwtSign({ email, userId: user._id }, SERVER_SECRET) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async Register(userData: UserDocument): Promise<string | null> {
    try {
      const collection = await getCollection<UserCollection>(USER_COLLECTION);

      if (!collection) throw new Error("Collection not found");

      const query = { email: userData.email };

      const user = await collection.findOne(query);

      if (user) return null;

      const salt = await genSalt(12);

      const password = await bcryptHash(userData.password, salt);

      const writeData = {
        ...userData,
        password,
      };

      const id = await collection.insertOne(writeData);

      return id
        ? jwtSign({ email: userData.email, userId: id }, SERVER_SECRET)
        : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default UserService;
