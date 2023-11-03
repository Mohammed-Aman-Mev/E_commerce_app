import { configureStore } from "@reduxjs/toolkit";
import authState from "./authSlice";
import itemdata from "./itemSlice";

export const store = configureStore({
  reducer: {
    authState,
    itemdata,
  },
});
