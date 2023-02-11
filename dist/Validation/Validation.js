"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Apperror_1 = require("../Utils/Apperror");
// Central validation function
const validator = (schemaName, body, next) => __awaiter(void 0, void 0, void 0, function* () {
    const value = yield schemaName.validate(body, {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true,
    });
    try {
        value.error
            ? next(new Apperror_1.AppError({
                httpCode: Apperror_1.HttpCode.BAD_REQUEST,
                message: value.error.details[0].message,
            }))
            : next();
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = validator;
