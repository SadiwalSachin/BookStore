import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
    {
        name:String,
        title:String,
        price:Number,
        category:String,
        image:String
    },{})

export const Book = mongoose.model("Book",bookSchema)