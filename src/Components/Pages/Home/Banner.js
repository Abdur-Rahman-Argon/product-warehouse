import React from "react";

const Banner = () => {
  return (
    <div
      className={`  bg-[url("https://i.ibb.co/NssXCCf/breadcrumb.png")] bg-center bg-cover text-left  md:px-10 lg:px-20 sm:py-10 lg:py-20  text-white `}
    >
      <div className="">
        <div className=" w-11/12 px-4 md:w-[500px] bg-gradient-to-r from-slate-900 sm:bg-none py-10 sm:py-1  pl-10 sm:ml-16 md:ml-20 lg:ml-28">
          <h1 className=" text-2xl md:text-4xl font-bold my-2 ">
            WARE HOUSEING AND
          </h1>
          <h1 className="my-2 text-2xl md:text-4xl font-bold text-white">
            TRANSPORT SERVICES
          </h1>
          <p className=" text-base  my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas ut
            accusantium ipsum vel dolores possimus recusandae pariatur veniam
            sapiente error animi porro iure, vero rem quaerat ipsa eaque.
          </p>
          <button class="btn btn-active btn-success outline-none my-5">
            Explore With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
