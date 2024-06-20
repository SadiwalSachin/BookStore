import {Book} from "./../modles/book.model.js"

const getBookData = async (req,res)=>{
    try {
        const book = await Book.find()
        return res
        .status(200)
        .json(book)
    } catch (error) {
        console.log(error);
    }
}

export {getBookData}