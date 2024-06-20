import dotenv from "dotenv"
import { app } from "./app.js";
import dbConnection from "../src/database/index.js"



dotenv.config({
    path:"./../env"
})

const PORT = process.env.PORT || 5000

dbConnection()
.then(()=>{

    app.on("error",(error)=>{
        console.log(error);
        throw error
    })


    app.listen(PORT,()=>{
        console.log("Server is running on port" , PORT);
    })

})