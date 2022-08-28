import React, { useState } from "react";
import useItems from "./../../utilites/useItems";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DeleteConfirm from "../../Shared/DeleteConfirm";

const ManageInventories = () => {
  const [items] = useItems();

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const navigate = useNavigate();

  const removeItems = (id) => {
    setDeleteModal(true);
    // setDeleteConfirm(true);
    if (deleteConfirm) {
      //   fetch(`http://localhost:5000/deleteItem/${id}`, {
      //     method: "DELETE",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //   })
      //     .then((res) => res.json())
      //     .then((result) => {
      //       console.log(result);
      //       if (result.deletedCount === 1) {
      //         toast.success("Your Information Update Successful!");
      //         navigate("/");
      //       }
      //     });
    } else {
    }
  };

  return (
    <div className="px-5">
      <div className=" flex items-center mt-3">
        <div className="mx-8 font-bold">Si</div>
        <div className=" w-full font-semibold grid grid-cols-3 md:grid-cols-6 gap-5 items-center">
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
        {items?.map((itm, index) => (
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
                  <label
                    onClick={() => removeItems(itm._id)}
                    htmlFor="DeleteConfirmPopUp"
                    className="btn btn-error btn-sm lg:btn-md"
                  >
                    Remove
                  </label>
                </div>
              </div>
            </div>
            <div class="divider"></div>
          </>
        ))}
      </div>
      {deleteModal && (
        <DeleteConfirm
          setDeleteModal={setDeleteModal}
          setDeleteConfirm={setDeleteConfirm}
        ></DeleteConfirm>
      )}
    </div>
  );
};

export default ManageInventories;
