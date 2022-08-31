import React from "react";

const CustomerReview = ({ img }) => {
  return (
    <div class="card w-72 px-2 py-3 bg-gray-50 border-[1px] border-gray-100 shadow-xl">
      <div className="flex justify-between items-top my-3">
        <div className="w-24 mx-auto  ">
          <img src={img} className="w-full h-24  rounded-full" alt="" />

          {/* <div className=" text-left">
            <h1 className="font-bold ">Name</h1>
            <span className=" text-xs font-bold my-0">05 May, 2022</span>
          </div>*/}
        </div>
        {/* <div>
          <span className=" text-orange-500 text-sm">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            {/* <i class="fa-regular fa-star"></i> 
            <i class="fa-solid fa-star-half-stroke"></i>
          </span>
        </div> */}
      </div>
      <div class=" text-center">
        <h4 class="text-xl font-semibold my-1"> Lorem ipsum dolor</h4>
        <p>
          Lorem ipsum dolor sit amet elit. Voluptatibus, rerum deleniti nemo
          porro sequi quas, cum nesciunt vitae asperiores architecto est.
        </p>
      </div>
    </div>
  );
};

export default CustomerReview;
