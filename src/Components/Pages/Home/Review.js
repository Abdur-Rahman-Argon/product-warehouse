import React from "react";

const CustomerReview = () => {
  return (
    <div class="card w-72 px-2 py-3 bg-base-100 border-[1px] border-gray-100 shadow-xl">
      <div className="flex justify-between items-top">
        <div className="flex items-center ">
          <div class="avatar">
            <div class="w-9 h-9 mr-2 rounded-full ">
              <img
                src="https://placeimg.com/192/192/people"
                className="w-10"
                alt=""
              />
            </div>
          </div>
          <div className=" text-left">
            <h1 className="font-bold ">Name</h1>
            <span className=" text-xs font-bold my-0">05 May, 2022</span>
          </div>
        </div>
        <div>
          <span className=" text-orange-500 text-sm">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            {/* <i class="fa-regular fa-star"></i> */}
            <i class="fa-solid fa-star-half-stroke"></i>
          </span>
        </div>
      </div>
      <div class=" text-left">
        <h4 class="text-lg font-medium">Review Title</h4>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default CustomerReview;
