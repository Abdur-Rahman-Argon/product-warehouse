import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
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
    </div>
  );
};

export default ItemsDetails;
