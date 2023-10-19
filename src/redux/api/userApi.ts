import { IMeta, IReview, IService, IUser } from "@/types/common";
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
    createReview: build.mutation({
      query: (data) => ({
        url: `/create-review`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["review"],
    }),
    reviews: build.query({
      query: () => {
        return {
          url: "/reviews",
          method: "GET",
        };
      },
      transformResponse: (response: IReview[]) => {
        return {
          reviews: response,
        };
      },
      providesTags: ["review"],
    }),
    updateReview: build.mutation({
      query: (data) => ({
        url: `/reviews/${data.id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["review"],
    }),
    deleteReview: build.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["review"],
    }),
    createOrder: build.mutation({
      query: (data) => ({
        url: `/orders`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});
//
export const {
  useUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useCreateReviewMutation,
  useReviewsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useCreateOrderMutation,
} = serviceApi;
