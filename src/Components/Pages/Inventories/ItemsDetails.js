import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const ItemsDetails = () => {
  const { id } = useParams();

  const {
    data: itemDetails,
    isLoading,
    refetch,
  } = useQuery("items", () =>
    fetch(`http://localhost:5000/AllItems/${id}`).then((res) => res.json())
  );

  if (id) {
    console.log(id);
  }

  if (isLoading) {
    return;
  }

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
  } = itemDetails;

  return (
    <div>
      <div className=" my-10 flex flex-col md:flex-row justify-around">
        <div className="flex-1">
          <img src={itemDetails.image} alt="" className="w-96" />
        </div>
        <div className="flex-1">
          <div class=" px-2 text-left  ">
            <h2 class=" text-[19px] mb-2 font-bold"> {itemsName}</h2>
            <h2 class=" text-[15px]">
              <span className="text-[15px] font-bold">Supplier Name: </span>
              <span className=" cursor-pointer font-bold hover:text-blue-500">
                {supplierName}
              </span>
            </h2>
            <h4 className="my-2">
              <span className="text-[15px] font-bold"> price: </span>
              <span>{price} $</span>
            </h4>
            <div className=" font-[600] pr-8 my-1 flex justify-between">
              <h4>
                <span className="text-[15px] font-bold"> Quantity: </span>
                <span>{quantity} p</span>
              </h4>
            </div>
            <p className=" text-left font-medium my-5">
              <span className=" text-[16px] font-bold">Description: </span>
              <span className="text-[14px]">{description}</span>
            </p>
          </div>
          <div className=" mt-2">
            <button class=" btn-success py-2 rounded w-full text-lg ">
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsDetails;
