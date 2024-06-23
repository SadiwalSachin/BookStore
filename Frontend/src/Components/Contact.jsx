import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {

    const {register,handleSubmit,formState: { errors }} = useForm()

    const handleFormSubmit = (event , data)=>{
        event.preventDefualt()
        console.log(data);

    }

  return (
    <>
      <div className="w-full md:h-[83vh] min-h-[100vh] md:mt-0 mt-16 md:flex md:flex-row flex flex-col items-center justify-center gap-10 container px-4 mx-auto md:px-10" >
        <div className="left md:w-1/2 w-full md:px-20 md:py-10 h-fit ">
          <h2 className="md:text-xl text-xs">Give me your valuable feedback</h2>
          <h1 className="md:text-[3vw] text-[6vh] mt-3">Get in touch</h1>
          <p className="mt-3">
            Use our contact form for all information requests or contact us
            directly using the contact information below.All information is
            treated with complete confidentially and in accordance with our data
            protection statement
          </p>
        </div>
        <div className="right md:w-1/2 w-full md:px-28 md:py-10 ">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col  gap-3" action="">
            <label className="input input-bordered flex items-center gap-2">
              <input {...register("fullName")}  type="text" className="grow outline-none" placeholder="Full Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input {...register("emialAddress")}  type="email" className="grow outline-none" placeholder="Email address" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input {...register("collegeName")}  type="text" className="grow outline-none" placeholder="College Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input {...register("MobileNo")}  type="text" className="grow outline-none" placeholder="Mobile No" />
            </label>
            <textarea className="bg-transparent input input-bordered" placeholder="Give me your feedback" name="" id=""></textarea>
            <span>
                <button className="px-4 py-1 bg-orange-500 rounded-md text-white">Submit</button>
            </span>
          </form>
        </div>
      </div>
      <h2 className="text-center mb-10">Thanks for the feedback</h2>
    </>
  );
};

export default Contact;
