import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container px-4 mx-auto md:px-10 flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 w-full mt-12 md:mt-32">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">
              Hello , welcomes here to learn something{" "}
              <span className="text-pink-500"> new everyday!!! </span>{" "}
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              repudiandae incidunt corporis quasi id officia.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-active btn-secondary">Secondary</button>
          </div>
        </div>
        <div className="md:w-1/2 w-full p-4 mt-20 md:p-10 md:mt-9">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
