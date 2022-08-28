import React from "react";
import useItems from "../../utilites/useItems";
import Items from "./Items";

const Inventory = () => {
  const [items] = useItems();
  // const [items, isLoading, refetch] = useItems();

  // if (isLoading) {
  //   return;
  // }

  const homeItems = items?.slice(0, 3);

  // {
  //   itemsName: "",
  //   image: "",
  //   description: "",
  //   price: "",
  //   supplierName: "",
  //   quantity: "",
  //   quantity: "82",
  //   stock: "",
  //   delivery: "",
  // },

  return (
    <div className=" px-5 lg:px-10 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {homeItems?.map((item) => (
        <Items item={item}></Items>
      ))}
    </div>
  );
};

export default Inventory;
