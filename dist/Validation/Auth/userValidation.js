"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.registerValidation = void 0;
const userSchema_1 = __importDefault(require("./userSchema"));
const Validation_1 = __importDefault(require("../Validation"));
const registerValidation = (req, res, next) => {
    (0, Validation_1.default)(userSchema_1.default.register, req.body, next);
};
exports.registerValidation = registerValidation;
const loginValidation = (req, res, next) => {
    (0, Validation_1.default)(userSchema_1.default.login, req.body, next);
};
exports.loginValidation = loginValidation;
