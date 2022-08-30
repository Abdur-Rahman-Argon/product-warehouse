import React from "react";
import Banner from "./Banner";
import CustomerReview from "./CustomerReview";
import Inventory from "./Inventory";
import OurServices from "./OurServices";
import { Link } from "react-router-dom";

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

        <div>
          <Link to="/inventories">
            <button className=" btn-success  rounded font-semibold my-5  py-1 px-8">
              See All Go Inventories <i class="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </section>

      <section className="my-14">
        <h1 className=" text-sm text-center title2 font-bold text-gray-400 ">
          What does Our Customer say?
        </h1>
        <h1 className=" mb-5 text-3xl text-center title2 font-bold underline ">
          Customer Review
        </h1>

        <div>
          <CustomerReview></CustomerReview>
        </div>
      </section>

      <section className="my-14">
        <h1 className=" text-sm text-center font-bold title2 text-gray-400">
          which services do we provide?
        </h1>
        <h1 className=" mb-4 underline text-3xl text-center title2 font-bold ">
          Our Services
        </h1>
        <div className=" mb-10 font-medium text-[16px] w-10/12 lg:w-8/12 mx-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure
            animi a deleniti ipsam? Distinctio ipsam eligendi enim eos molestias
            nulla, in explicabo repellendus, veniam voluptate est qui
            necessitatibus?
          </p>
        </div>
        <div>
          <OurServices></OurServices>
        </div>
      </section>
    </div>
  );
};

export default Home;
