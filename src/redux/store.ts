import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { searchApi } from "./api/searchApi";

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
