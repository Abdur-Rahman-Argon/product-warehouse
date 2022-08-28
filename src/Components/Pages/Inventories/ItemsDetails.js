import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Details from "./Details";

const ItemsDetails = () => {
  const { id } = useParams();

  const {
    data: itemDetails,
    isLoading,
    refetch,
  } = useQuery("items", () =>
    fetch(`http://localhost:5000/AllItems/${id}`).then((res) => res.json())
  );

  // if (id) {
  //   console.log(id);
  // }

  if (isLoading) {
    return;
  }

  return (
    <div>
      <Details itemDetails={itemDetails}></Details>
      <div>
        <Link to="/manageInventories">
          <button className=" btn-success  rounded font-semibold my-5  py-1 px-8">
            Go Manage Inventories <i class="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemsDetails;
