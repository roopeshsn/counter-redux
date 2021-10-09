import { INCREMENT, DECREMENT, BYVALUE } from "./constants";

// action creators
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const byValue = (value, operator) => {
  return {
    type: BYVALUE,
    payload: {
      value,
      operator
    }
  };
};
