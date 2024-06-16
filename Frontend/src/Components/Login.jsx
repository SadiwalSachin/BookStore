import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
