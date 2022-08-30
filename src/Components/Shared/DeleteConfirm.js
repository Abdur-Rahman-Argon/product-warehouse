import React from "react";
import deleteIcon from "./../../images/3389152.png";

const DeleteConfirm = ({ setDeleteModal, setDeleteConfirm }) => {
  //
  const deleteConfirm = () => {
    setDeleteConfirm(true);
    setDeleteModal(false);
  };

  const deleteCancel = () => {
    setDeleteConfirm(false);
    setDeleteModal(false);
  };

  return (
    <div>
      <input type="checkbox" id="DeleteConfirmPopUp" class="modal-toggle" />

      <div class="modal ">
        <div class="modal-box p-14 relative text-center">
          <div className="w-24 mb-8 mx-auto">
            <img src={deleteIcon} alt="" className="  w-20" />
          </div>
          <h3 class="text-xl font-bold">Are You Sure Remove this items?</h3>
          <h3 class="text-[16px] my-2 font-semibold">
            If you remove this items can't recover It.
          </h3>

          <div className=" flex justify-around mt-10">
            <button
              onClick={deleteCancel}
              className="btn bg-gray-500 hover:bg-gray-500 normal-case px-8  "
            >
              Cancel
            </button>
            <button
              onClick={deleteConfirm}
              className="btn btn-error normal-case px-5 "
            >
              Yes, Remove it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
