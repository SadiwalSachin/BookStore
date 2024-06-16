import React from "react"
import Home from "./Home/HomeRoute"
import Course from "./Course/CourseRoute"
import { Routes ,Route} from "react-router-dom"
import SignUp from "./Components/SignUp"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/signup" element={<SignUp/>}/>

    </Routes>
    </>
  )
}

export default App
