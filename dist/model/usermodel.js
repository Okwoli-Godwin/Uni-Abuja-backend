"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, "Please enter your fullname"]
    },
    email: {
        type: String,
        require: [true, "Please enter your email"],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        require: [true, "Please enter your password"],
        min: 8
    }
}, {
    timestamps: true
});
const userModel = (0, mongoose_1.model)("Users", userSchema);
exports.default = userModel;
