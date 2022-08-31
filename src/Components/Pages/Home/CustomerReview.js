import React from "react";
import Loading from "../../Shared/Loading";
import Review from "./Review";

const CustomerReview = () => {
  const reviews = [
    {
      img: "https://pngimage.net/wp-content/uploads/2018/06/man-smile-png-4.png",
      name: "Jon Smith",
      review:
        " Perfect Themes and the best of all that you have many options to choose! Very fast responding! I highly recommend this theme and these people! Smith John Happy Customer",
    },
    {
      img: "https://www.pngkit.com/png/full/395-3953134_home-transfer-slider-slide1-woman-teacher-png.png",
      name: "Frank Shila",
      review:
        "Our support and response has been amazing, helping me with several issues I came across and got them solved almost the same day. A pleasure to work with them! Frank Shila Happy Customer",
    },
    {
      img: "https://freepngimg.com/download/man/22654-6-man.png",
      name: "Mr  Anderson",
      review:
        "We are interesting template and others are very good. The support has served me immediately. Are to be congratulated. Mr Anderson Happy Customer",
    },
  ];

  // if(loading){
  //   return <Loading></Loading>
  // }

  // window.location.reload(false);

  return (
    <div className=" w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around items-center gap-5 ">
      {reviews.map((review) => (
        <Review review={review}></Review>
      ))}
    </div>
  );
};

export default CustomerReview;
