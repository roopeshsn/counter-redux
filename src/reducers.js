import { BYVALUE, DECREMENT, INCREMENT } from "./constants";

// reducer = (state, action) => newState

export const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };

    case BYVALUE:
      if (action.payload.operator === "plus") {
        return {
          ...state,
          value: state.value + action.payload.value
        };
      } else {
        return {
          ...state,
          value: state.value - action.payload.value
        };
      }

    default:
      return state;
  }
};
