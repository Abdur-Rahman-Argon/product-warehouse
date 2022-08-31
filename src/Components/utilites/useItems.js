import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useItems = () => {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState();

  //   const {
  //     data: items,
  //     isLoading,
  //     refetch,
  //   } = useQuery("items", () =>
  //     fetch("https://thawing-crag-90386.herokuapp.com/AllItems").then((res) => res.json())
  //   );

  useEffect(() => {
    setLoading(true);
    fetch("https://thawing-crag-90386.herokuapp.com/AllItems")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        // console.log(data);
        setLoading(false);
      });
  }, []);

  //   if (items) {
  //     ;
  //   }

  //   return [items, isLoading, refetch];
  return [items, loading];
};

export default useItems;
