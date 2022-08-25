import { NextFunction, Request, Response } from "express";
import UserService from "../service/user";

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const token = await UserService.Login(email, password);

    return token
      ? res.status(200).json({ success: true, token })
      : res
          .status(400)
          .json({ success: false, message: "Failed to login", token });
  } catch (error) {
    res.statusCode = 500;
    next(error);
  }
};

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    const token = await UserService.Register(data);

    return token
      ? res
          .status(201)
          .json({ success: true, message: "User registered", token })
      : res
          .status(400)
          .json({
            success: false,
            message: "Failed to register user",
            token: null,
          });
  } catch (error) {
    res.statusCode = 500;
    next(error);
  }

  return res.status(200).json({ blogs: [] });
};

export const logOutController = (req: Request, res: Response) => {
  return res.status(200).json({ blogs: [] });
};
