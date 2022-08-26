import React from "react";

const Items = () => {
  return (
    <div class="card w-96 glass">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="car!" />
      </figure>
      <div class=" px-2 text-left ">
        <h2 class=" text-[19px] my-1 font-bold"> Lorem ipsum dolor dolor</h2>
        <h2 class=" text-[15px]">
          <span className="text-[15px] font-bold">supplierName: </span>
          <span> Anisul Islam</span>
        </h2>
        <div className=" font-[600] pr-8 my-1 flex justify-between">
          <h4>
            <span className="text-[15px] font-bold"> price: </span>
            <span>128 $</span>
          </h4>
          <h4>
            <span className="text-[15px] font-bold"> quantity: </span>
            <span>225 p</span>
          </h4>
        </div>
        <p className=" text-left font-medium">
          <span className=" text-[16px] font-bold">Description: </span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          labore velit asperiores iure expedita impedit eos!
        </p>
      </div>
      <div className=" mt-2">
        <button class=" btn-primary py-2 rounded-t-none w-full text-lg ">
          Update
        </button>
      </div>
    </div>
  );
};

export default Items;
