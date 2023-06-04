import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { menuApi } from "./menuApi";

export const store = configureStore({
  reducer: {
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(menuApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchMenuQuery, useFetchUserQuery } from "./menuApi";
