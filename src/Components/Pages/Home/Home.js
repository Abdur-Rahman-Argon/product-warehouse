import React from "react";
import Banner from "./Banner";
import CustomerReview from "./CustomerReview";
import Inventory from "./Inventory";
import OurServices from "./OurServices";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import Extra from "./Extra";
import WhyChose from "./WhyChose";

const Home = () => {
  return (
    <div className="">
      <section>
        <Banner></Banner>
      </section>

      <section className="my-10">
        <div className="my-10">
          <h1 className=" text-sm text-center heading font-bold text-gray-400 ">
            Our Inventory Items service?
          </h1>
          <h1 className=" text-3xl text-center heading font-bold   px-5">
            Inventory Items :
          </h1>
          <p className=" w-10/12 mx-auto my-3  text-base font-medium">
            <span className="text-success">P-Store House</span> the most latgest
            bike store in the wold can serve you latest qulity of motorcycle
            also you can sell here your motorcycle
          </p>
        </div>
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

      <section className="py-14 bg-slate-300 ">
        <h1 className=" text-base text-center heading font-bold text-gray-500 ">
          What does Our Customer say?
        </h1>
        <h1 className=" mb-5 text-4xl text-center heading font-bold ">
          Customer Review
        </h1>

        <div>
          <CustomerReview></CustomerReview>
        </div>
      </section>

      <section className="my-14">
        <h1 className=" text-base text-center font-bold heading text-gray-500">
          which services do we provide?
        </h1>
        <h1 className=" mb-4  text-4xl text-center heading font-bold ">
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

      {/*  */}
      <section className="py-12 bg-slate-300">
        <div>
          <WhyChose></WhyChose>
        </div>
      </section>

      {/*       
      <section className="">
        <div>
          <NewsLetter></NewsLetter>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
