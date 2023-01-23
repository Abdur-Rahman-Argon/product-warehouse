import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Details from "./Details";
import Loading from "../../Shared/Loading";

const ItemsDetails = () => {
  const { id } = useParams();

  const {
    data: itemDetails,
    isLoading,
    refetch,
  } = useQuery("items", () =>
    fetch(`${process.env.REACT_APP_PRO_URL}/AllItems/${id}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
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
