import React from "react";
import Banner from "./Banner";
import Inventory from "./Inventory";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div className="">
      <section>
        <Banner></Banner>
      </section>

      <section className="my-10">
        <h1 className=" text-3xl text-center title2 font-bold   px-5 my-10 ">
          Inventory Items :
        </h1>
        <div>
          <Inventory></Inventory>
        </div>
      </section>

      <section className="my-10">
        <h1 className=" text-3xl text-center title2 font-bold   px-5 my-5 lg:my-10 ">
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
