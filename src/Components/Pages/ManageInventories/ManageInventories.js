import React from "react";
import useItems from "./../../utilites/useItems";

const ManageInventories = () => {
  const [items] = useItems();
  return (
    <div className="px-5">
      <div className=" flex items-center">
        <div className="mx-8 font-bold">Si</div>
        <div className=" w-full font-semibold grid grid-cols-3 md:grid-cols-6 gap-5 mt-3 items-center">
          <div>image</div>
          <div>Items title</div>
          <div>Price</div>
          <div>Stock</div>
          <div>delivered</div>
          <div>Remove Items</div>
        </div>
      </div>
      <div class="divider"></div>
      <div className=" grid grid-cols-1">
        {items.map((itm, index) => (
          <>
            <div className=" flex items-center">
              <div className="mx-8 font-bold">{index + 1}</div>
              <div className=" grid grid-cols-3 md:grid-cols-6 gap-8 items-center w-full">
                <div>
                  <img src={itm.image} className=" w-16" alt="" />
                </div>
                <div>
                  <h1 className=" font-bold text-lg"> {itm.itemsName}</h1>
                </div>
                <div>
                  <h4 className=" font-bold text-lg">{itm.price}</h4>
                </div>
                <div>
                  <h4 className=" font-bold text-lg">{itm.stock}</h4>
                </div>
                <div>
                  <h4 className=" font-bold text-lg">{itm.delivery}</h4>
                </div>
                <div>
                  <button className="btn btn-error btn-sm lg:btn-md">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div class="divider"></div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
