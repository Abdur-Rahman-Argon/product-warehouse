import React, { useContext } from "react";
import Loading from "../../Shared/Loading";
import useItems from "../../utilites/useItems";
import Items from "./Items";
import { useQuery } from "react-query";
import { ITEMS_CONTEXT } from "../../../context/ItemsProvider";

const Inventory = () => {
  const context = useContext(ITEMS_CONTEXT);

  const homeItems = context?.state?.items?.slice(0, 3);

  return (
    <div className=" px-5 lg:px-10 my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {homeItems?.map((item) => (
        <Items item={item}></Items>
      ))}
    </div>
  );
};

export default Inventory;
