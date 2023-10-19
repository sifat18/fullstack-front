import { IAdmin, IMeta, IOrder, IUser } from "@/types/common";
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
    orders: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/orders",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IOrder[], meta: IMeta) => {
        return {
          orders: response,
          meta,
        };
      },
      providesTags: ["order"],
    }),
    updateOrder: build.mutation({
      query: (data) => ({
        url: `/orders/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["order"],
    }),
    deleteOrder: build.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
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
  useOrdersQuery,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = adminApi;
