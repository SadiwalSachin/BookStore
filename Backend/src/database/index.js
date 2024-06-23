import mongoose from "mongoose"

const dbConnection = async ()=>{
    try {
       const connectionInstance =  await mongoose.connect(`mongodb+srv://sachinaiuser:sachin.08082005@bookstore.pw5inoo.mongodb.net/`)
       console.log("MONGODB CONNECTION SUCCESSFULLY ::: ");

    } catch (error) {
        console.log("DATABASE CONNECTION FAILED");
        console.log(error);
        process.exit(1)
    }
}

export default dbConnection
