import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import DeleteConfirm from "../../Shared/DeleteConfirm";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading";

const MyItems = () => {
  const [user, ULoading] = useAuthState(auth);

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    data: myItems,
    isLoading,
    refetch,
  } = useQuery("items", () =>
    fetch(`http://localhost:5000/userItems/${user.email}`).then((res) =>
      res.json()
    )
  );

  if (ULoading || isLoading || loading) {
    return <Loading></Loading>;
  }

  const removeItems = (id) => {
    setDeleteModal(true);
    setDeleteId(id);
  };

  if (deleteConfirm) {
    setLoading(true);
    fetch(`http://localhost:5000/deleteItem/${deleteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.deletedCount === 1) {
          toast.success("Your items remove Successful!");
          setDeleteModal(false);
          setDeleteConfirm(false);
          setDeleteId("");
          refetch();
          setLoading(false);
          // navigate("/");
        }
      });
  }

  return (
    <div className="px-5">
      {myItems.length > 0 ? (
        <>
          <div className=" my-5 font-bold text-2xl">
            <h1>My All Items Here</h1>
          </div>
        </>
      ) : (
        <>
          <div className=" my-5 font-bold text-2xl">
            <h1> You have no added items here.</h1>
          </div>
        </>
      )}
      {myItems.length > 0 && (
        <>
          <div class="divider"></div>
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
        </>
      )}
      <div className=" grid grid-cols-1">
        {myItems?.map((itm, index) => (
          <>
            <div className=" flex items-center">
              <div className="mr-16 lg:mr-20 ml-8 font-bold">{index + 1}</div>
              <div className=" grid grid-cols-3 md:grid-cols-6 gap-5 items-center w-full">
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

        {deleteModal && (
          <DeleteConfirm
            setDeleteModal={setDeleteModal}
            setDeleteConfirm={setDeleteConfirm}
          ></DeleteConfirm>
        )}
      </div>
    </div>
  );
};

export default MyItems;
