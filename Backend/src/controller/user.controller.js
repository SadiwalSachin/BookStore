import { User } from "../modles/user.model.js";
import { asyncHandler } from "../utility/asyncHandler.js";

const registerUser = asyncHandler( async (req , res) =>{
    const {fullName , username , email , password} = req.body
    console.log(fullName,email,password,username);

    if([fullName,username,email,password].some((field)=>{
        field?.trim()==="" })){
            console.log("empty details mt bhejiye");
        }
     
    const existedUser = await User.findOne({
        $or:[{username},{email}]
    })
    
    if(existedUser){
        console.log("this user is already exist");
    }

    const user = await User.create({
        fullName,
        username,
        email,
        password
    })

    const responseUser = await User.findById(user._id).select("-password")

    if(!responseUser){
        console.log("something went wrong");
    }

    res.status(200).json(responseUser)

} )

const loginUser = asyncHandler( async (req ,res) =>{
    const {email , password} = req.body
    console.log(email , password);

    if(!email){
        console.log("emial is required")
    }

    const findedUser  = await User.findOne({email})
    console.log("this is finded user",findedUser);
    
    if(!findedUser){
        console.log("user does not exist with this username");
    }
    console.log(password);

    if(password==findedUser.password){
        console.log("password is correct");
    }

    const responseUser = await User.findById(findedUser._id).select("-password")

    // const isPasswordValid = await findedUser.isPasswordCorrect(password)

    // if(!isPasswordValid){
    //     console.log("wrong password entred");
    // }

    res.json(responseUser)

} )

export {registerUser , loginUser}

