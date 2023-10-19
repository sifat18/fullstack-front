import { IAdmin, IMeta, IUser } from "@/types/common";
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
    createAdmin: build.mutation({
      query: (data) => ({
        url: `/admins/create-admin`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["admin"],
    }),
    // -------------User-----------------
    clients: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/users",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: ["user"],
    }),
    updateClient: build.mutation({
      query: (data) => ({
        url: `/users/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
    deleteClient: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
//
export const {
  useAdminsQuery,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
  useCreateAdminMutation,
  useClientsQuery,
  useUpdateClientMutation,
  useDeleteClientMutation,
} = adminApi;
