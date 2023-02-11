import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import Userrouters from "./Routes/userRouter";
import galleryrouter from "./Routes/Galleryrouter";
import { errorHandler } from "./Middlewares/errorhandle";
import {HttpCode, AppError} from "./Utils/Apperror"

export const appConfig = (app: Application) => {
  // middleware configuration
  app
    .use(express.json())
    .use(cors())
    .use(morgan("dev"))

    // router configuration
    .use("/api", Userrouters)
    .use("/image", galleryrouter)

    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new AppError({
          message: `This route ${req.originalUrl} does not exist`,
          httpCode: HttpCode.NOT_FOUND,
          isOperational: true,
        })
      );
    })

    // error handlers; note: it should be the last in your app
    .use(errorHandler);
};