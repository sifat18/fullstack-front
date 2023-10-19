import { IMeta, IService, IUser } from "@/types/common";
import { baseApi } from "../baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all faculty user endpoint
    user: build.query({
      query: () => {
        return {
          url: "/users/my-profile",
          method: "GET",
        };
      },
      transformResponse: (response: IUser) => {
        return {
          profile: response,
        };
      },
      providesTags: ["user"],
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: `/users/my-profile`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),

    createUser: build.mutation({
      query: (data) => ({
        url: `/auth/signup`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
//
export const { useUserQuery, useCreateUserMutation, useUpdateUserMutation } =
  serviceApi;
