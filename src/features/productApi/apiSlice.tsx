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
    getProductsOfCategory: builder.query({
      query: (name) => `/products/category/${name}`,
    }),
    getNumberOfProducts: builder.query({
      query: ({ number, skip }) => `/products?limit=${number}&skip=${skip}`,
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getProductBySearch: builder.query({
      query: ({ name, limit }) => `/products/search?q=${name}&limit=${limit}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useGetProductsOfCategoryQuery,
  useGetNumberOfProductsQuery,
  useGetProductQuery,
  useGetProductBySearchQuery,
} = productApi;
