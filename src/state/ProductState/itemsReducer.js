import { actionTypes } from "./actionTypes";

export const initialState = {
  isLoading: false,
  items: [],
  error: false,
};

export const itemsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
        error: false,
      };

    case actionTypes.FETCHING_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case actionTypes.UPDATE_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
};
