import React from 'react'
import {useAuth} from "./../Context/AuthProvider"

const LogOut = () => {
    
    const [authUser,setAuthUser]= useAuth()

    const handleLogOut = ()=>{
        try {
            setAuthUser({
               ...authUser,
               user:null 
        });
        localStorage.removeItem("Users")
        window.location.reload()
        } catch (error) {
           console.log(error); 
        }
    }

  return (
    <>
        <button onClick={handleLogOut} className=' md:w-[6vw] px-2 py-1 text-white rounded-md bg-orange-500'>Log Out</button>
    </>
  )
}

export default LogOut
