import React, { useState } from "react";
import { useQuery } from "react-query";

const useItems = () => {
  //   const [Alltems, setItems] = useState();
  const {
    data: items,
    isLoading,
    refetch,
  } = useQuery("items", () =>
    fetch("http://localhost:5000/AllItems").then((res) => res.json())
  );

  //   if (items) {
  //     setItems(items);
  //   }

  return [items, isLoading, refetch];
};

export default useItems;
