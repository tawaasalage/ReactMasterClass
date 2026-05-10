import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import normalCounterReducer from "./reduxCounterStore";

export const reduxStore = configureStore({
  reducer: {
    counter: counterReducer,
    normalCounter: normalCounterReducer,
  },
});
