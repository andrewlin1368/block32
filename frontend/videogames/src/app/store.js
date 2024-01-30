import { configureStore } from "@reduxjs/toolkit";
import videogamesSlice from "./videogamesSlice";
import { videogamesApi } from "./videogamesApi";

export const store = configureStore({
  reducer: {
    videogamesSlice,
    [videogamesApi.reducerPath]: videogamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videogamesApi.middleware),
});
