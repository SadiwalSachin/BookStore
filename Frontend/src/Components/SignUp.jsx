import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await axios.post("https://book-store-fullstack-working.vercel.app/signup", data);
      console.log(res.data);
      if (res) {
        setTimeout(() => {
          alert("user created successfully");
          localStorage.setItem("Users", JSON.stringify(res.data));
          window.location.reload()
        }, 1000);
      }
    } catch (error) {
      alert("User does not exist with this credentials")
      window.location.reload();
      console.log(error);
    }
  };

  return (
    <div  className="flex items-center justify-center h-screen w-full">
      <div id="my_modal_3" className="flex items-center justify-center p-6 rounded-xl">
        <div className="relative overflow-x-hidden md:w-[30vw] w-[50vh] modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">SignUp</h3>
            <div className="mt-3">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                id="name"
                className="w-full px-3 py-2 rounded-md outline-none mt-3"
                {...register("fullName", { required: true })}
              />
              <br />
              {errors.fullName && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="name">Username</label>
              <br />
              <input
                type="text"
                placeholder="Enter your username"
                id="name"
                className="w-full px-3 py-2 rounded-md outline-none mt-3"
                {...register("username", { required: true })}
              />
              <br />
              {errors.username && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                className="w-full px-3 py-2 rounded-md outline-none mt-3"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                className="w-full px-3 py-2 rounded-md outline-none mt-3"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-xs text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-between mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
                SignUp
              </button>
              <p>
                Have account{" "}
                <span
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="text-blue-500 underline"
                >
                  <a>Login</a>
                  <Login />
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
