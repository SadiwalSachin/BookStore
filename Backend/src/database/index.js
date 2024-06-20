import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

const DATABASE_URL = process.env.DB_URL

const dbConnection = async ()=>{
    try {
       const connectionInstance =  await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`)
       console.log("MONGODB CONNECTION SUCCESSFULLY ::: ");

    } catch (error) {
        console.log("DATABASE CONNECTION FAILED");
        console.log(error);
        process.exit(1)
    }
}

export default dbConnection