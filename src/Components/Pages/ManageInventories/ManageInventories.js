import React, { useContext, useState } from "react";
import useItems from "./../../utilites/useItems";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import DeleteConfirm from "../../Shared/DeleteConfirm";
import Loading from "../../Shared/Loading";
import { useQuery } from "react-query";
import { ITEMS_CONTEXT } from "../../../context/ItemsProvider";

const ManageInventories = () => {
  const context = useContext(ITEMS_CONTEXT);

  const [loading, setLoading] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const navigate = useNavigate();

  if (loading || context?.state?.isLoading) {
    return <Loading></Loading>;
  }

  const removeItems = (id) => {
    setDeleteModal(true);
    setDeleteId(id);
  };

  if (deleteConfirm) {
    setLoading(true);
    fetch(`${process.env.REACT_APP_PRO_URL}/deleteItem/${deleteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        //  console.log(result);
        if (result.deletedCount === 1) {
          toast.success("Your Information Update Successful!");
          setDeleteModal(false);
          setDeleteConfirm(false);
          setDeleteId("");

          setLoading(false);
          window.location.reload();
        }
      });
  }

  return (
    <div className="px-5">
      <div className=" my-10 heading font-bold text-4xl">
        <h1>
          Manage <span className=" text-success">Your Inventories</span>
        </h1>
        <p className=" font-semibold text-base my-1">
          I can manage here all items, remove or update items. If we confirm
          remove then it permanently delete from database then you cannot remove
          it.
        </p>
      </div>
      <div className=" border-[0] border-b-0 border-t-0 border-gray-600">
        <div className="py-4 mb-2 bg-slate-700 text-white flex items-center">
          <div className="mx-8 font-bold">Si</div>
          <div className="  w-full font-semibold grid grid-cols-3 md:grid-cols-6 gap-5 items-center">
            <div>image</div>
            <div>Items title</div>
            <div>Price</div>
            <div>Stock</div>
            <div>delivered</div>
            <div>Remove Items</div>
          </div>
        </div>
        <div className=" grid grid-cols-1">
          {context?.state?.items?.map((itm, index) => (
            <>
              <div className=" flex items-center">
                <div className="mx-8 font-bold">{index + 1}</div>
                <div className=" grid grid-cols-3 md:grid-cols-6 md:gap-8 gap-2 items-center w-full">
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
                      className="cursor-pointer hover:text-orange-500 btn-sm lg:btn-md"
                    >
                      <i class="fa-solid fa-trash-can  text-2xl "></i>
                    </label>
                  </div>
                </div>
              </div>
              <div class="divider mb-0"></div>
            </>
          ))}
        </div>
        <div>
          <Link
            to="/addNewItems"
            className="btn btn-success font-bold my-5 text-xl"
          >
            <i class="fa-solid fa-folder-plus mr-2 "></i> Add New Items
          </Link>
        </div>
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
