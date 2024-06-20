import React from "react"
import Home from "./Home/HomeRoute"
import Course from "./Course/CourseRoute"
import { Routes ,Route, Navigate} from "react-router-dom"
import SignUp from "./Components/SignUp"
import { useAuth } from "./Context/AuthProvider"


function App() {

  const[authUser,setAuthUser] = useAuth()

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={ authUser? <Course/> : <Navigate to="/signup"/>}/>
      <Route path="/signup" element={<SignUp/>}/>

    </Routes>
    </>
  )
}

export default App
