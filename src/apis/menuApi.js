import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuApi = createApi({
  reducerPath: "menu",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(bulder) {
    return {
      fetchUser: bulder.query({
        query: (userId) => {
          return {
            url: `/menu/${userId}`,
          };
        },
      }),
      fetchMenu: bulder.query({
        query: () => {
          return {
            url: "/menu",
          };
        },
      }),
    };
  },
});

export const { useFetchMenuQuery, useFetchUserQuery } = menuApi;
