import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getCategories: builder.query({
      query: () => "/products/categories",
    }),
  }),
});

export const { useGetAllProductsQuery, useGetCategoriesQuery } = productApi;
