import React, { createContext, useContext, useEffect, useReducer } from "react";
import { actionTypes } from "../state/ProductState/actionTypes";
import { initialState, itemsReducer } from "../state/ProductState/itemsReducer";

export const ITEMS_CONTEXT = createContext();

const ItemsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemsReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch(`${process.env.REACT_APP_PRO_URL}/AllItems`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
      )
      .catch(() => dispatch({ type: actionTypes.FETCHING_ERROR }));
  }, []);

  //  console.log(state);

  const value = {
    state,
    dispatch,
  };

  return (
    <div>
      <ITEMS_CONTEXT.Provider value={value}>{children}</ITEMS_CONTEXT.Provider>
    </div>
  );
};

export const useItems = () => {
  const context = useContext(ITEMS_CONTEXT);
  //  console.log(context);
  return context;
};

export default ItemsProvider;
