import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import DeleteConfirm from "../../../Shared/DeleteConfirm";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const MyItems = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const [user, loading] = useAuthState(auth);
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

  if (isLoading || loading) {
    return;
  }

  const removeItems = (id) => {
    setDeleteModal(true);
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
    <div>
      <label
        onClick={() => removeItems()}
        htmlFor="DeleteConfirmPopUp"
        className="btn btn-error btn-sm lg:btn-md"
      >
        Remove
      </label>
      {deleteModal && (
        <DeleteConfirm
          setDeleteModal={setDeleteModal}
          setDeleteConfirm={setDeleteConfirm}
        ></DeleteConfirm>
      )}
    </div>
  );
};

export default MyItems;
