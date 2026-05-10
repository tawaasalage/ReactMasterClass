import { createStore } from "redux";

const initialState = {
  count: 0,
  fullname: "John Doe",
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
}

export function increment() {
  return { type: "INCREMENT" };
}

export function decrement() {
  return { type: "DECREMENT" };
}

export function reset() {
  return { type: "RESET" };
}

export const reduxStore = createStore(counterReducer);
