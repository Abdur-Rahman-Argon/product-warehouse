import React from "react";
import Banner from "./Banner";
import CustomerReview from "./CustomerReview";
import Inventory from "./Inventory";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div className="">
      <section>
        <Banner></Banner>
      </section>

      <section className="my-10">
        <h1 className=" text-sm text-center title2 font-bold text-gray-400 ">
          Our Inventory Items service?
        </h1>
        <h1 className=" text-3xl text-center title2 font-bold   px-5 mb-5 ">
          Inventory Items :
        </h1>
        <div>
          <Inventory></Inventory>
        </div>
      </section>

      <section className="my-10">
        <h1 className=" text-sm text-center title2 font-bold text-gray-400 ">
          What does Our Customer say?
        </h1>
        <h1 className=" mb-5 text-3xl text-center title2 font-bold ">
          Customer Review
        </h1>

        <div>
          <CustomerReview></CustomerReview>
        </div>
      </section>

      <section className="my-10">
        <h1 className=" text-sm text-center font-bold title2 text-gray-400">
          which services do we provide?
        </h1>
        <h1 className=" text-3xl text-center title2 font-bold mb-5 ">
          Our Services :
        </h1>
        <div>
          <OurServices></OurServices>
        </div>
      </section>
    </div>
  );
};

export default Home;
