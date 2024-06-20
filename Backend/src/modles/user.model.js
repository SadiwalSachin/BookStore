import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = mongoose.Schema(
    {
        
        fullName:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }

    },{timestamps:true}
)

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }else{
        this.password = bcrypt.hash(this.password,10)
    }
})

userSchema.methods.isPasswordCorrect = async (password)=>{
    return await bcrypt.compare(password , this.password)
}

userSchema.methods.generateAccessToken = async ()=>{
    return jwt.sign(
        {
            _id:this._id,
            emial:this.email
        },
        "sacchin",
        {
            expiresIn:"1d"
        }
    )
}

userSchema.methods.generateRefreshToken = async ()=>{
    return jwt.sign(
        {
            _id:this._id,
            emial:this.email
        },
        "sacchin",
        {
            expiresIn:"10d"
        }
    )
}

export const User = mongoose.model("User",userSchema)