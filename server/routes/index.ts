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

const router = Router({ caseSensitive: true });

const BASE_URL = config.BASE_URL;

// Health Check

router.get("/healthcheck", (req, res) => {
  res.status(200).send("Server is running fine");
});

//BLOG ROUTES

router.get(`${BASE_URL}/blogs`, fetchBlogs);
router.get(`${BASE_URL}/my-blogs`, fetchMyBlogs);
router.get(`${BASE_URL}/blogs/:id`, fetchBlogById);
router.get(`${BASE_URL}/my-blogs/:id`, fetchMyBlogById);

router.post(`${BASE_URL}/create-blog`, createBlog);

router.put(`${BASE_URL}/edit-blog/:id`, editBlogById);

router.delete(`${BASE_URL}/delete-blog/:id`, deleteBlogById);

//USER ROUTES

router.post(`${BASE_URL}/login`, loginController);
router.post(`${BASE_URL}/register`, registerController);
router.post(`${BASE_URL}/logout`, logOutController);

export { router };
