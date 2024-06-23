import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const initialAuthUser = localStorage.getItem("Users")
    console.log("initial User :" , initialAuthUser);

    const [authUser , setAuthUser] = useState( 
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    )

    return (
        <AuthContext.Provider value={[authUser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth =()=>useContext(AuthContext);

// import React, { createContext } from 'react'

// export const AuthContext = createContext()// ab context ban gya hai createContext ki madad se or context ka name hai AuthContext

// const AuthProvider = ({children}) => {
//   return (
//     <AuthContext.Provider value={databhenunga}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider
