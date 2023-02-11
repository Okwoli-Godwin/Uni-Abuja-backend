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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.Login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usermodel_1 = __importDefault(require("../model/usermodel"));
const Asynchandler_1 = require("../Utils/Asynchandler");
const Apperror_1 = require("../Utils/Apperror");
exports.register = (0, Asynchandler_1.asynchandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body || {};
    const salt = yield bcrypt_1.default.genSalt(12);
    const hashed = yield bcrypt_1.default.hash(password, salt);
    const user = yield usermodel_1.default.create({ name, email, password: hashed });
    if (!user) {
        next(new Apperror_1.AppError({
            message: "Account not Created",
            httpCode: Apperror_1.HttpCode.BAD_REQUEST,
            isOperational: true,
        }));
    }
    return res.status(200).json({
        user,
    });
}));
exports.Login = (0, Asynchandler_1.asynchandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield usermodel_1.default.findOne({ email });
    if (!user) {
        next(new Apperror_1.AppError({
            message: "User not found",
            httpCode: Apperror_1.HttpCode.NOT_FOUND,
        }));
    }
    const checkpass = yield bcrypt_1.default.compare(password, user.password);
    if (!checkpass) {
        next(new Apperror_1.AppError({
            message: "Email or password not correct",
            httpCode: Apperror_1.HttpCode.UNAUTHORISED,
            isOperational: true,
        }));
    }
    return res.status(200).json({ message: `Welcome ${user.name}` });
}));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield usermodel_1.default.find();
        return res.status(200).json({
            data: user,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
});
exports.getUsers = getUsers;
