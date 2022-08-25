import { ObjectId } from "mongodb";
import { config } from "../config/dev";
import getCollection from "../models/get-collection";
import {
  BlogCollection,
  BlogDocument,
  BlogRequestBody,
} from "../models/interfaces/blog";

import { UserCollection } from "../models/interfaces/user";

const { BLOG_COLLECTION, USER_COLLECTION } = config;

class BlogService {
  static async fetchAllBlogs(userId: string): Promise<BlogDocument[]> {
    try {
      const blogCollection = await getCollection<BlogCollection>(
        BLOG_COLLECTION
      );

      if (!blogCollection) throw new Error("Collection not found");

      const filterQuery = { "author.id": { $ne: new ObjectId(userId) } };

      const cursor = blogCollection.find(filterQuery, {
        sort: { createdAt: -1 },
      });

      return cursor.toArray();
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async fetchBlogById(blogId: string): Promise<BlogDocument | null> {
    try {
      const blogCollection = await getCollection<BlogCollection>(
        BLOG_COLLECTION
      );

      if (!blogCollection) throw new Error("Collection not found");

      const id = new ObjectId(blogId);

      const filterQuery = { _id: id };

      const data = await blogCollection.findOne(filterQuery);

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async fetchAMyBlogs(userId: string): Promise<BlogDocument[]> {
    try {
      const blogCollection = await getCollection<BlogCollection>(
        BLOG_COLLECTION
      );

      if (!blogCollection) throw new Error("Collection not found");

      const id = new ObjectId(userId);

      const filterQuery = { "author.id": id };

      const cursor = blogCollection.find(filterQuery);

      return cursor.toArray();
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async fetchMyBlogById(
    blogId: string,
    userId: string
  ): Promise<BlogDocument | null> {
    try {
      const blogCollection = await getCollection<BlogCollection>(
        BLOG_COLLECTION
      );

      if (!blogCollection) throw new Error("Collection not found");

      const id = new ObjectId(blogId);

      const authorId = new ObjectId(userId);

      const filterQuery = { _id: id, "author.id": authorId };

      const data = await blogCollection.findOne(filterQuery);

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async createBlog(
    data: BlogRequestBody,
    userId: string
  ): Promise<Boolean> {
    try {
      const blogCollection = await getCollection<BlogCollection>(
        BLOG_COLLECTION
      );

      const userCollection = await getCollection<UserCollection>(
        USER_COLLECTION
      );

      if (!blogCollection) throw new Error("Collection not found");

      if (!userCollection) throw new Error("Collection not found");

      const filterUserQuery = { _id: new ObjectId(userId) };

      const user = await userCollection.findOne(filterUserQuery);

      if (!user) return false;

      const time = new Date().toString();

      const writeData = {
        author: {
          firstName: user.firstName,
          lastName: user.lastName,
          id: user._id,
        },
        content: data.content,
        title: data.title,
        createdAt: time,
        modifiedAt: time,
      };

      await blogCollection.insertOne(writeData);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async editBlogById(
    blogId: string,
    userId: string,
    data: BlogRequestBody
  ): Promise<Boolean> {
    try {
      const blogCollection = await getCollection<BlogCollection>(
        BLOG_COLLECTION
      );

      if (!blogCollection) throw new Error("Collection not found");

      const filterQuery = {
        _id: new ObjectId(blogId),
        "author.id": new ObjectId(userId),
      };

      const res = await blogCollection.updateOne(filterQuery, {
        $set: { content: data.content, title: data.title },
      });

      return Boolean(res.modifiedCount);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async deleteBlogById(blogId: string): Promise<Boolean> {
    try {
      const blogCollection = await getCollection<BlogCollection>(
        BLOG_COLLECTION
      );

      if (!blogCollection) throw new Error("Collection not found");

      const filterQuery = { _id: new ObjectId(blogId) };

      const result = await blogCollection.deleteOne(filterQuery);

      return Boolean(result.deletedCount);
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export default BlogService;
