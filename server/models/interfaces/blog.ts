import { ObjectId } from "mongodb";

export interface BlogCollection {
  title: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  author: {
    id: ObjectId;
    firstName: string;
    lastName: string;
  };
}

export interface BlogDocument extends BlogCollection {}

export interface BlogRequestBody {
  title: string;
  content: string;
}
