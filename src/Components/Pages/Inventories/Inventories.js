import React from "react";
// import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import useItems from "../../utilites/useItems";
import Items from "./../Home/Items";

const Inventories = () => {
  const [Alltems] = useItems();
  // const [Alltems, isLoading, refetch] = useItems();

  // const {
  //   data: items,
  //   isLoading,
  //   refetch,
  // } = useQuery("product", () =>
  //   fetch("http://localhost:5000/AllItems").then((res) => res.json())
  // );

  // if (isLoading) {
  //   return (
  //     <>
  //       <p>loading</p>
  //     </>
  //   );
  // }

  return (
    <div>
      <div className=" px-5 lg:px-10 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Alltems?.map((item) => (
          <Items item={item}></Items>
        ))}
      </div>
      <div>
        <Link to="/manageInventories">
          <button className=" btn-success  rounded font-semibold my-5  py-1 px-8">
            Manage Inventories <i class="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Inventories;
