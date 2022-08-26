import React from "react";
import Banner from "./Banner";
import Inventory from "./Inventory";

const Home = () => {
  return (
    <div className="">
      <section>
        <Banner></Banner>
      </section>

      <section>
        <h1 className=" text-xl font-bold text-left px-5 mt-5">
          Inventory Items :
        </h1>
        <div>
          <Inventory></Inventory>
        </div>
      </section>
    </div>
  );
};

export default Home;
