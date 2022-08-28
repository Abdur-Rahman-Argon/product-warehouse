import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Details = ({ itemDetails }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
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

  const [nQuantity, setQuantity] = useState(quantity);
  const [nStock, setStock] = useState(stock);
  const [nDelivery, setDelivery] = useState(delivery);

  // delivery update--------------------------------------------

  const delivered = () => {
    const newStock = parseFloat(nStock) - 1;
    setStock(newStock);
    const newDelivery = parseFloat(nDelivery) + 1;
    setDelivery(newDelivery);
    const upDelivery = { stock: newStock, delivery: newDelivery };
    console.log(upDelivery);

    fetch(`http://localhost:5000/deliveryUpdate/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upDelivery),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  // stock update--------------------------------------------

  const onSubmit = (data) => {
    // event.preventdefault();
    const restok = data.restock;
    const newStock = parseFloat(nStock) + parseFloat(restok);
    setStock(newStock);
    const newQuantity = parseFloat(nQuantity) + parseFloat(restok);
    setQuantity(newQuantity);
    const upStock = { stock: newStock, quantity: newQuantity };
    console.log(upStock);

    fetch(`http://localhost:5000/stockUpdate/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upStock),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          reset();
        }
      });
  };
  return (
    <div>
      <div className=" my-10 flex flex-col md:flex-row justify-around">
        <div className="flex-1">
          <img src={image} alt="" className="w-96" />
        </div>
        <div className="flex-1">
          <div class=" px-2 text-left  ">
            <h2 class=" text-3xl mb-2 font-bold"> {itemsName}</h2>
            <h2 class=" text-[15px]">
              <span className="text-[16px] font-bold">Supplier Name: </span>
              <span className=" cursor-pointer font-bold hover:text-blue-500">
                {supplierName}
              </span>
            </h2>

            <div className=" font-[600] pr-8 my- flex items-center justify-start gap-20">
              <h4 className="my-2">
                <span className="text-[15px] font-bold"> Price: </span>
                <span>{price} $</span>
              </h4>
              <h4>
                <span className="text-[15px] font-bold">TotalQuantity: </span>
                <span>{nQuantity} p</span>
              </h4>
            </div>

            <div className=" font-[600] pr-8 my-[1px] flex items-center justify-start gap-28">
              <h4 className="my-2">
                <span className="text-[15px] font-bold"> Stock: </span>
                <span>{nStock} $</span>
              </h4>
              <h4>
                <span className="text-[15px] font-bold">Delivery: </span>
                <span>{nDelivery} p</span>
              </h4>
            </div>

            <p className=" text-left font-medium mb-5">
              <span className=" text-[16px] font-bold">Description: </span>
              <span className="text-[14px]">{description}</span>
            </p>
          </div>
          <div className=" my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center relative w-60">
                <input
                  name="restock"
                  type="number"
                  {...register("restock", { required: true })}
                  className=" font-medium text-sm py-2 px-5 focus:outline-none border-[1px] border-gray-200 rounded-l w-60"
                />
                <button
                  type="submit"
                  class=" absolute -right-6 font-medium text-sm rounded-r w-20 p-[9px] bg-success border-[1px] border-gray-200"
                >
                  ReStock
                </button>
              </div>
            </form>
          </div>
          <div className=" mt-2">
            <button
              onClick={delivered}
              class=" btn btn-success py-2 font-semibold rounded w-full text-base "
            >
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
