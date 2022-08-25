import { Router } from "express";
import { config } from "../config/dev";
import {
  createBlog,
  deleteBlogById,
  editBlogById,
  fetchBlogById,
  fetchBlogs,
  fetchMyBlogById,
  fetchMyBlogs,
} from "../controllers/blog";
import {
  loginController,
  logOutController,
  registerController,
} from "../controllers/user";
import { AuthMiddleWare } from "../middlewares/auth";

const router = Router({ caseSensitive: true });

const BASE_URL = config.BASE_URL;

// Health Check

router.get("/healthcheck", (req, res) => {
  res.status(200).send("Server is running fine");
});

//BLOG ROUTES

router.get(`${BASE_URL}/blogs`, AuthMiddleWare, fetchBlogs);
router.get(`${BASE_URL}/my-blogs`, AuthMiddleWare, fetchMyBlogs);
router.get(`${BASE_URL}/blogs/:id`, AuthMiddleWare, fetchBlogById);
router.get(`${BASE_URL}/my-blogs/:id`, AuthMiddleWare, fetchMyBlogById);

router.post(`${BASE_URL}/create-blog`, AuthMiddleWare, createBlog);

router.put(`${BASE_URL}/edit-blog/:id`, AuthMiddleWare, editBlogById);

router.delete(`${BASE_URL}/delete-blog/:id`, AuthMiddleWare, deleteBlogById);

//USER ROUTES

router.post(`${BASE_URL}/login`, loginController);
router.post(`${BASE_URL}/register`, registerController);
router.post(`${BASE_URL}/logout`, AuthMiddleWare, logOutController);

export { router };
