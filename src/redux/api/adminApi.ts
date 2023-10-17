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
    }),
  }),
});
//     // get single faculty user endpoint
//     faculty: build.query({
//       query: (id: string | string[] | undefined) => ({
//         url: `${BASE_FACULTY_API_URL}/profile/${id}`,
//         method: "GET",
//       }),
//       providesTags: [tagTypes.faculty],
//     }),
//     // create faculty user endpoint
//     addFacultyWithFormData: build.mutation({
//       query: (data) => ({
//         url: "/users/create-faculty",
//         method: "POST",
//         data,
//         contentType: "multipart/form-data",
//       }),
//       invalidatesTags: [tagTypes.faculty],
//     }),
//     // update faculty user endpoint
//     updateFaculty: build.mutation({
//       query: (data) => ({
//         url: `${BASE_FACULTY_API_URL}/${data.id}`,
//         method: "PATCH",
//         data: data.body,
//       }),
//       invalidatesTags: [tagTypes.faculty],
//     }),
//     // delete faculty user endpoint
//     deleteFaculty: build.mutation({
//       query: (id) => ({
//         url: `${BASE_FACULTY_API_URL}/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: [tagTypes.faculty],
//     }),

//     facultyCourses: build.query({
//       query: (arg: Record<string, any>) => {
//         return {
//           url: `${BASE_FACULTY_API_URL}/my-courses`,
//           method: "GET",
//           params: arg,
//         };
//       },
//       transformResponse: (response: IFacultyCourse[], meta: IMeta) => {
//         return {
//           myCourses: response,
//           meta,
//         };
//       },
//       providesTags: [tagTypes.student],
//     }),

//     facultyCourseStudents: build.query({
//       query: (arg: Record<string, any>) => {
//         return {
//           url: `${BASE_FACULTY_API_URL}/my-course-students`,
//           method: "GET",
//           params: arg,
//         };
//       },
//       transformResponse: (response: ICoreFaculty[], meta: IMeta) => {
//         return {
//           myCourseStudents: response,
//           meta,
//         };
//       },
//       providesTags: [tagTypes.student],
//     }),
//   }),
// });
export const { useAdminsQuery } = adminApi;
