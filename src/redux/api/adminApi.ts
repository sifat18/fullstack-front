import { IAdmin } from "@/types/common";
import { baseApi } from "../baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all faculty user endpoint
    admins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/admins",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAdmin[]) => {
        return {
          admins: response,
        };
      },
      providesTags: ["admin"],
    }),
    updateAdmin: build.mutation({
      query: (data) => ({
        url: `/admin/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["admin"],
    }),
    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admin"],
    }),
  }),
});
//
export const {
  useAdminsQuery,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
} = adminApi;
