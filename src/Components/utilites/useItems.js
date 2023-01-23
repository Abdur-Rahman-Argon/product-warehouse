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
  //     fetch(`${process.env.REACT_APP_PRO_URL}/AllItems`).then((res) => res.json())
  //   );

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_PRO_URL}/AllItems`)
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
