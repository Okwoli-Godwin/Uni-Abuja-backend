import mongoose from "mongoose"

const URI: string = "mongodb://localhost/UniAbuja"
const lifeURI: string = "mongodb+srv://uniAbuja:uniAbuja@cluster0.8usbdhw.mongodb.net/UniAbuja?retryWrites=true&w=majority";

const dbconnection = async():Promise<void> => {
    try {
        const conn = await mongoose.connect(lifeURI)
        console.log(`Database connected to ${conn.connection.host}`)
    } catch (error) {
        console.log(`An error occured ${error}`)
    }
}

export default dbconnection