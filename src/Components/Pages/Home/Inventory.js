import React from "react";
import Items from "./Items";

const Inventory = () => {
  const itms = [
    {
      itemsName: "",
      image: "",
      description: "",
      price: "",
      quantity: "",
      supplierName: "",
    },
    {
      itemsName: "",
      image: "",
      description: "",
      price: "",
      quantity: "",
      supplierName: "",
    },
    {
      itemsName: "",
      image: "",
      description: "",
      price: "",
      quantity: "",
      supplierName: "",
    },
  ];

  return (
    <div className=" px-10 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {itms.map((ims) => (
        <Items></Items>
      ))}
    </div>
  );
};

export default Inventory;
