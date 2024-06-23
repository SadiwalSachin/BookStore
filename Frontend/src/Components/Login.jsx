import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);

  const onSubmit = async (data)=>{
    try {
      const res = await axios.post("https://book-store-fullstack-working.vercel.app//login" , data)
      console.log(res.data);
      if(res){
        setTimeout(()=>{
          // alert("user logined successfully")
          document.getElementById("my_modal_3").close()
          localStorage.setItem("Users",JSON.stringify(res.data))
          window.location.reload()
        },2000)
        
      }
    } catch (error) {
      setTimeout(()=>{
        alert("Invalid credentials")
        document.getElementById("my_modal_3").close()
      },2000)
    }
  }


  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link 
              onClick={()=> document.getElementById("my_modal_3").close()}
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-3">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                className="w-80 px-3 py-2 rounded-md outline-none mt-3"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-xs text-red-500">This field is required</span>}
            </div>
            <div className="mt-3">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                className="w-80 px-3 py-2 rounded-md outline-none mt-3"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-xs text-red-500">This field is required</span>}
            </div>
            <div className="flex justify-between mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
                Login
              </button>
              <p>
                Not Registered?{" "}
                <span className="text-blue-500 underline">
                  <a href="/signup">SignUp</a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
