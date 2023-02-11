"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = __importDefault(require("./Routes/userRouter"));
const Galleryrouter_1 = __importDefault(require("./Routes/Galleryrouter"));
const errorhandle_1 = require("./Middlewares/errorhandle");
const Apperror_1 = require("./Utils/Apperror");
const appConfig = (app) => {
    // middleware configuration
    app
        .use(express_1.default.json())
        .use((0, cors_1.default)())
        .use((0, morgan_1.default)("dev"))
        // router configuration
        .use("/api", userRouter_1.default)
        .use("/image", Galleryrouter_1.default)
        .all("*", (req, res, next) => {
        next(new Apperror_1.AppError({
            message: `This route ${req.originalUrl} does not exist`,
            httpCode: Apperror_1.HttpCode.NOT_FOUND,
            isOperational: true,
        }));
    })
        // error handlers; note: it should be the last in your app
        .use(errorhandle_1.errorHandler);
};
exports.appConfig = appConfig;
