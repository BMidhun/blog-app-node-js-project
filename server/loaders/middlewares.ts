import {
  Application,
  json,
  urlencoded,
  Request,
  Response,
  NextFunction,
} from "express";
import { router } from "../routes";

function initializeMiddleWares(app: Application) {
  app.use(urlencoded({ extended: false }));
  app.use(json());

  app.use(router);

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: "page not found" });
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    return res
      .status(res.statusCode)
      .json({ message: err.message, success: false });
  });

  return app;
}

export { initializeMiddleWares };
