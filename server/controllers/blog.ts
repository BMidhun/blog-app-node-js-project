import { NextFunction, Request, Response } from "express";
import BlogService from "../service/blog";

export const fetchBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.app.locals.user;
    const blogs = await BlogService.fetchAllBlogs(user.userId);
    return res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.statusCode = 500;
    next(error);
  }
};

export const fetchMyBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.app.locals.user;
    const blogs = await BlogService.fetchAMyBlogs(user.userId);
    return res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.statusCode = 500;
    next(error);
  }
};

export const fetchBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blogId = req.params.id;
    const blog = await BlogService.fetchBlogById(blogId);
    return blog
      ? res.status(200).json({ success: true, blog })
      : res.status(400).json({ success: false, blog });
  } catch (error) {
    res.statusCode = 500;
    next(error);
  }
};

export const fetchMyBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blogId = req.params.id;
    const userId = "";
    const blog = await BlogService.fetchMyBlogById(blogId, userId);
    return res.status(200).json({ success: true, blog });
  } catch (error) {
    res.statusCode = 500;
    next(error);
  }
};

export const createBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blogData = req.body;
    const userId = "asdasdasdasdasdadasdasdasda";
    const created = await BlogService.createBlog(blogData, userId);
    return created
      ? res.status(201).json({ success: true, created })
      : res.status(500).json({ success: false, created });
  } catch (error) {
    res.statusCode = 500;
    next(error);
  }
};

export const editBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blogId = req.params.id;
    const blogData = req.body;
    const userId = "";
    const updated = await BlogService.editBlogById(blogId, userId, blogData);
    return updated
      ? res.status(204).json({ success: true, updated })
      : res.status(400).json({ success: false, updated });
  } catch (error) {
    res.statusCode = 500;
    next(error);
  }
};

export const deleteBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blogId = req.params.id;
    const deleted = await BlogService.deleteBlogById(blogId);
    return deleted
      ? res.status(204).json({ success: true, deleted })
      : res.status(404).json({ success: false, deleted });
  } catch (error) {
    res.statusCode = 500;
    next(error);
  }
};
