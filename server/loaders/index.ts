import { Application } from "express";
import { connectDB } from "./db";
import { initializeMiddleWares } from "./middlewares";

async function initialize(app: Application) {
  try {
    await connectDB();
    app = initializeMiddleWares(app);
    return app;
  } catch (error) {
    console.error(error);
  }
}

export default initialize;
