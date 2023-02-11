import {Request, Response} from "express"
import gallerymodel from "../model/Gallerymodel"
import cloudinary from "../config/Cloudinary"

const postbooks = async (req: Request, res: Response):Promise<Response> => {
    try {
        const cloudImg = await cloudinary.uploader.upload(req?.file!.path)
        const {title, course} = req.body

        const newbook = await gallerymodel.create({
            title,
            course,
            coverImage: cloudImg.secure_url,
        })
        return res.status(201).json({
            message: "Uploaded successfully",
            data: newbook
        })
    } catch (error) {
        return res.status(404).json({
            message: "Error occured",
            data: error
        })
    }
}

const getall = async (req: Request, res: Response):Promise<Response> => {
    try {
        const books = await gallerymodel.find()
        return res.status(201).json({
            message: "Gotten successfully",
            data: books
        })
    } catch (error) {
        return res.status(201).json({
            message: "An error occutred",
            data: error
        })
    }
}

const getone = async (req: Request, res: Response):Promise<Response> => {
    try {
        const getone = await gallerymodel.findById(req.params.id)
        return res.status(201).json({
            message: "Gotten successfully",
            data: getone
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
}


export {getall, postbooks, getone}