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
exports.getone = exports.postbooks = exports.getall = void 0;
const Gallerymodel_1 = __importDefault(require("../model/Gallerymodel"));
const Cloudinary_1 = __importDefault(require("../config/Cloudinary"));
const postbooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cloudImg = yield Cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const { title, course } = req.body;
        const newbook = yield Gallerymodel_1.default.create({
            title,
            course,
            coverImage: cloudImg.secure_url,
        });
        return res.status(201).json({
            message: "Uploaded successfully",
            data: newbook
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error occured",
            data: error
        });
    }
});
exports.postbooks = postbooks;
const getall = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Gallerymodel_1.default.find();
        return res.status(201).json({
            message: "Gotten successfully",
            data: books
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "An error occutred",
            data: error
        });
    }
});
exports.getall = getall;
const getone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getone = yield Gallerymodel_1.default.findById(req.params.id);
        return res.status(201).json({
            message: "Gotten successfully",
            data: getone
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        });
    }
});
exports.getone = getone;
