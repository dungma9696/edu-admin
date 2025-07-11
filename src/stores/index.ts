import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;

export type AppStore = typeof store;

export const useAppDispatch = () => useDispatch<AppDispatch>();
