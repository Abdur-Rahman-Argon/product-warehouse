import React from "react";
import { Link } from "react-router-dom";

const Items = ({ item }) => {
  const {
    _id,
    itemsName,
    image,
    description,
    price,
    supplierName,
    quantity,
    stock,
    delivery,
  } = item;

  return (
    <div class="card w-[320px] md:w-96 border-[1px] border-gray-200  shadow-md hover:shadow-2xl hover:scale-105 ease-in-out duration-200 ">
      <figure>
        <img src={image} alt="car!" className=" w-80 h-52" />
      </figure>
      <div class=" px-2 text-left  ">
        <h2 class=" text-[19px] mb-1 font-bold"> {itemsName}</h2>
        <h2 class=" text-[15px]">
          <span className="text-[15px] font-bold">supplierName: </span>
          <span className=" cursor-pointer font-bold hover:text-blue-500">
            {supplierName}
          </span>
        </h2>
        <div className=" font-[600] pr-8 my-1 flex justify-between">
          <h4>
            <span className="text-[15px] font-bold"> Price: </span>
            <span>{price} $</span>
          </h4>
          <h4>
            <span className="text-[15px] font-bold"> Quantity: </span>
            <span>{quantity} pc.</span>
          </h4>
        </div>
        <p className=" text-left font-medium">
          <span className=" text-[16px] font-bold">Description: </span>
          <span className="text-[14px]">
            {description?.slice(0, 135)} . . .
          </span>
        </p>
      </div>
      <div className=" mt-2">
        <Link to={`/inventories/${_id}`}>
          <button class=" btn-success py-2 rounded-t-none w-full text-lg font-medium ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Items;
