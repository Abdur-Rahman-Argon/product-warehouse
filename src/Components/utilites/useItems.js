import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useItems = () => {
  const [items, setItems] = useState();

  //   const {
  //     data: items,
  //     isLoading,
  //     refetch,
  //   } = useQuery("items", () =>
  //     fetch("http://localhost:5000/AllItems").then((res) => res.json())
  //   );

  useEffect(() => {
    fetch("http://localhost:5000/AllItems")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  //   if (items) {
  //     ;
  //   }

  //   return [items, isLoading, refetch];
  return [items];
};

export default useItems;
