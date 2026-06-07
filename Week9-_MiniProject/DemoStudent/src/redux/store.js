import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";

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
  },
});

store.subscribe(() => {
  saveState(store.getState());
});
