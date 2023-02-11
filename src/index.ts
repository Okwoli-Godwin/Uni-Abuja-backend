import express, {Application} from "express"
import { appConfig } from "../app"
import dbconnection from "../config/db"
const port: number = 2035




const app: Application = express()

process.on("uncaughtException", (err: Error) => {
    console.log(`UncaughtException, Server shutting down`)
    console.log(err.name, err.message)
    process.exit(1)
})

appConfig(app)
dbconnection()

const server = app.listen(port, () => {
    console.log("App is running fine")
})

process.on("unhandledRejection", (reason: any) => {
    console.log("UnhandlwdRejection, server is shutting down")
    console.log(reason.message, reason)
    server.close(() => {
        process.exit(1)
    })
})
