import React, { useState , useEffect } from "react";
import Cards from "./Cards"
import axios from "axios"
import {Link} from "react-router-dom"

function Course() {

  const [bookData , setBookData] = useState([])
  
  useEffect(()=>{
    ( async ()=>{
      try {
        console.log("Api started");
       const res = await axios.get("https://book-store-fullstackworking-sachin-sadiwals-projects.vercel.app//book")
       console.log("data not coming");
       console.log(res.data);
       setBookData(res.data)
      } catch (error) {
        console.log(error);
      }
    })()
    // getBookData()
  },[])

  return (
    <>
      <div className="max-w-screen-2xl min-h-screen container px-4 mx-auto md:px-10">
        <div className="mt-32 flex flex-col items-center">
          <h1 className="text-white font-semibold text-2xl md:text-4xl text-center">
            We're delighated to have you here! :
          </h1>
          <p className="mt-12 text-center">
           
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">Back</button>
          </Link>          
        </div>
        <div className="flex flex-wrap  justify-center items-center mt-10 ">
          {
            bookData.map((data,index)=><Cards data={data}/>)
          }
        </div>
      </div>
    </>
  );
}

export default Course;
