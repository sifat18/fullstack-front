import { IMeta, IService } from "@/types/common";
import { baseApi } from "../baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all faculty user endpoint
    services: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/services",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: ["service"],
    }),
    updateService: build.mutation({
      query: (data) => ({
        url: `/services/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["service"],
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
    createService: build.mutation({
      query: (data) => ({
        url: `/create-services`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["service"],
    }),
  }),
});
//
export const {
  useCreateServiceMutation,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
  useServicesQuery,
} = serviceApi;
