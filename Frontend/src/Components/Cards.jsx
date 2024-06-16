import React from "react";

function Cards({ data }) {
  return (
    <>
      <div className="mt-4 mb-6 p-6">
        <div className="card w-80 md:w-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="object-cover object-center"
              src={data.imageUrl}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {data.name}
              <div className="badge badge-secondary">{data.Category}</div>
            </h2>
            <p>{data.title}</p>
            <div className="card-actions justify-between items-center">
              <div className="badge badge-outline">{data.price}</div>
              <button className="badge badge-outline hover:bg-pink-500 hover:text-white px-3 cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
