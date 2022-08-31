import React from "react";
import Loading from "../../Shared/Loading";
import Review from "./Review";

const CustomerReview = () => {
  const reviews = [
    {
      img: "https://pngimage.net/wp-content/uploads/2018/06/man-smile-png-4.png",
    },
    {
      img: "https://www.pngkit.com/png/full/395-3953134_home-transfer-slider-slide1-woman-teacher-png.png",
    },
    { img: "https://freepngimg.com/download/man/22654-6-man.png" },
  ];

  // if(loading){
  //   return <Loading></Loading>
  // }

  // window.location.reload(false);

  return (
    <div className=" w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around items-end gap-5 ">
      {reviews.map((review) => (
        <Review img={review.img}></Review>
      ))}
    </div>
  );
};

export default CustomerReview;
