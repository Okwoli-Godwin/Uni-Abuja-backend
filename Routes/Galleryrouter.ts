import {Router} from "express"
import { getall, postbooks, getone} from "../Controller/Gallerycontroller"
import { coverUpload } from "../config/multer"

const galleryrouter = Router()

galleryrouter.route("/post").post(coverUpload, postbooks)
galleryrouter.route("/get").get(getall)

export default galleryrouter