import React from "react";
import Review from "./Review";

const CustomerReview = () => {
  const reviews = [1, 2, 3];

  return (
    <div className=" w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around items-end gap-5">
      {reviews.map((review) => (
        <Review></Review>
      ))}
    </div>
  );
};

export default CustomerReview;
