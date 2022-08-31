import React from "react";
// import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading";
import useItems from "../../utilites/useItems";
import Items from "./../Home/Items";

const Inventories = () => {
  const [Alltems, loading] = useItems();

  // const [Alltems, isLoading, refetch] = useItems();

  // const {
  //   data: items,
  //   isLoading,
  //   refetch,
  // } = useQuery("product", () =>
  //   fetch("https://thawing-crag-90386.herokuapp.com/AllItems").then((res) => res.json())
  // );

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className=" my-10 heading font-bold text-4xl">
        <h1>
          <span className=" text-success">All Inventories </span>items Here
        </h1>
        <p className=" w-8/12 my-2 mx-auto font-semibold text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi
          quaerat exercitationem dignissimos atque commodi, aliquid quam cumque
          natus, aliquam deserunt veritatis sed sequi labore fugiat eaque.
        </p>
      </div>
      <div className=" px-5 lg:px-10 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Alltems?.map((item) => (
          <Items item={item}></Items>
        ))}
      </div>
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

export default Inventories;
