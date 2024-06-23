import express from "express"
import cors from "cors"



const app = express()

app.use(cors({
    origin:["https://book-store-fullstack-working.vercel.app/"],
    method:['GET','POST'],
    credentials:true
}))


// frontend se data aayega to uski ye configuration hai 
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// routes for book
import bookRouter from "./routes/book.route.js"

app.use("https://book-store-fullstackworking-sachin-sadiwals-projects.vercel.app/",bookRouter)

// routes for user
import userRouter from "./routes/user.route.js"

app.use("https://book-store-fullstackworking-sachin-sadiwals-projects.vercel.app/",userRouter)


export {app}
