"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asynchandler = void 0;
const asynchandler = (fn) => {
    return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
};
exports.asynchandler = asynchandler;
