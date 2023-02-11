"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Gallerycontroller_1 = require("../Controller/Gallerycontroller");
const multer_1 = require("../config/multer");
const galleryrouter = (0, express_1.Router)();
galleryrouter.route("/post").post(multer_1.coverUpload, Gallerycontroller_1.postbooks);
galleryrouter.route("/get").get(Gallerycontroller_1.getall);
exports.default = galleryrouter;
