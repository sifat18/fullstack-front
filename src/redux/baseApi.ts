import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
// https://laundry-7cy7.onrender.com
// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://laundry2-bncs.onrender.com/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["admin", "service", "user", "order", "review"],
});
