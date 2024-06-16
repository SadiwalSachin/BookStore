import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from "./Cards";

function FreeBook() {
  const filteredData = list.filter((data) => data.Category === "free");


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container px-4 mx-auto md:px-10">
        <div>
          {" "}
          <h1 className="text-xl font-bold">Free offered Book</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id alias
            voluptas repellat! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Voluptatibus cumque sequi culpa.
          </p>
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            {filteredData.map((data, index) => (
              <Cards data={data} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
