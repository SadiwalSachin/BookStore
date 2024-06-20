import express from "express"
import cors from "cors"



const app = express()


app.use(cors({
    origin:"*",
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


// routes for book
import bookRouter from "./routes/book.route.js"

app.use("/book",bookRouter)

// routes for user
import userRouter from "./routes/user.routes.js"

app.use("/user",userRouter)


export {app}