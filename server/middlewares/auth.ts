import { NextFunction, Request, Response } from "express";
import { verify as jwtVerify, JwtPayload } from "jsonwebtoken";
import { config } from "../config/dev";

interface UserPayload extends JwtPayload {
  email: string;
  userId: string;
}

const AuthMiddleWare = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length === 0) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const data = jwtVerify(authorization, config.SERVER_SECRET);

  const user = data as UserPayload;

  if (user && user.userId) {
    req.app.locals.user = user;
    next();
  } else
    return res.status(401).json({ success: false, message: "Unauthorized" });
};

export { AuthMiddleWare };
