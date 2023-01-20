import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "greetings",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3000/api/v1/" }),
  endpoints: (builder) => ({
    getGreetings: builder.query({
      query: () => "greetings",
    }),
  }),
});

export const { useGetGreetingsQuery } = apiSlice;
