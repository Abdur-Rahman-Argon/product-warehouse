import React from "react";
import img from "./../../../images/newsletter-img.png";

const NewsLetter = () => {
  return (
    <div className=" flex flex-col bg-orange-400 md:flex-row">
      <div className=" w-full lg:w-10/12 h-32 relative  ">
        <img
          src={img}
          className=" w-60 absolute -top-12 left-10 md:left-40"
          alt=""
        />
      </div>
      <div className=" w-full h-40 md:h-32 py-3 md:py-0 text-center text-gray-100 lg:text-left ">
        <h1 className=" text-2xl heading font-bold my-5 md:my-3">
          Subscribe for our newsletter
        </h1>
        <div className=" items-center">
          <input
            type="email"
            name=""
            id=""
            className="input input-primary focus:outline-none rounded-r-none"
          />
          <input
            type="submit"
            name=""
            id=""
            className=" bg-success p-3 font-semibold rounded-r-md "
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
