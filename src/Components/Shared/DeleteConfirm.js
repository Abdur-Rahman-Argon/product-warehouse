import React from "react";

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
        <div class="modal-box p-16 relative">
          <h3 class="text-lg font-bold">
            <i class="fa-solid fa-calendar-xmark"></i> Are You Sure Remove this
            items? <i class="fa-solid fa-calendar-xmark"></i>
          </h3>

          <div className=" flex justify-around mt-10">
            <button
              onClick={deleteConfirm}
              className="btn btn-success normal-case btn-sm lg:btn-md"
            >
              Confirm
            </button>
            <button
              onClick={deleteCancel}
              className="btn btn-error normal-case btn-sm lg:btn-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
