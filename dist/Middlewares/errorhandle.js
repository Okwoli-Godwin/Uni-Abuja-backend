"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const Apperror_1 = require("../Utils/Apperror");
const devErrorHandler = (err, res) => {
    res.status(Apperror_1.HttpCode.INTERNAL_SERVER_ERROR).json({
        status: err.httpCode,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};
const errorHandler = (err, req, res, next) => {
    devErrorHandler(err, res);
};
exports.errorHandler = errorHandler;
