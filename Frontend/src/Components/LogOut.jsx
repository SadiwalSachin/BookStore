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
    <div>
        <button onClick={handleLogOut} className='px-4 py-1 rounded-md bg-orange-500'>Log Out</button>
    </div>
  )
}

export default LogOut
