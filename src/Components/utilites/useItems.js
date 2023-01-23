import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useItems = () => {
  const {
    data: items,
    isLoading,
    refetch,
  } = useQuery("items", () =>
    fetch(`${process.env.REACT_APP_PRO_URL}/AllItems`).then((res) => res.json())
  );

  return [items, isLoading, refetch];
};

export default useItems;
