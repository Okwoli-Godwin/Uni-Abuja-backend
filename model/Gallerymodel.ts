import mongoose from "mongoose"

interface Books {
    title: string,
    course: string,
    coverImage: string,
}

interface iBooks extends Books, mongoose.Document{}

const Bookstoreschema = new mongoose.Schema({
    title: String,
    course: String,
    coverImage: String
})

export default mongoose.model<iBooks>("books", Bookstoreschema)