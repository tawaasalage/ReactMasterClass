import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";
import { timeAPI } from "../api/timeAPI";
import { saveDateTimeAPI } from "../api/saveDateTimeAPI";

const STORAGE_KEY = "studentState";

function loadState() {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {}
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {}
}

export const store = configureStore({
  preloadedState: loadState(),
  reducer: {
    student: studentReducer,
    [timeAPI.reducerPath]: timeAPI.reducer,
    [saveDateTimeAPI.reducerPath]: saveDateTimeAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      timeAPI.middleware,
      saveDateTimeAPI.middleware,
    ),
});

store.subscribe(() => {
  saveState(store.getState());
});
