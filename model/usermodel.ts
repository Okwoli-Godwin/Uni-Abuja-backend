import mongoose, {Document, Schema, model} from "mongoose";

interface IData {
    name: string,
    email: string,
    password: string
}

interface ISchema extends IData, Document{}

const userSchema = new Schema<IData>(
    {
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
    },
    {
        timestamps: true
    }
)

const userModel = model<IData>("Users", userSchema)
export default userModel