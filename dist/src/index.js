"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("../app");
const db_1 = __importDefault(require("../config/db"));
const port = 2035;
const app = (0, express_1.default)();
process.on("uncaughtException", (err) => {
    console.log(`UncaughtException, Server shutting down`);
    console.log(err.name, err.message);
    process.exit(1);
});
(0, app_1.appConfig)(app);
(0, db_1.default)();
const server = app.listen(port, () => {
    console.log("App is running fine");
});
process.on("unhandledRejection", (reason) => {
    console.log("UnhandlwdRejection, server is shutting down");
    console.log(reason.message, reason);
    server.close(() => {
        process.exit(1);
    });
});
