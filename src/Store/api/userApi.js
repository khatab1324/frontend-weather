import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:2500",
  }),
  endpoints(builder) {
    return {
      fetchuser: builder.query({
        query: ({ username, password }) => ({
          url: `/getuser`,
          method: "POST",
          body: {
            username,
            password,
          },
        }),
      }),
      addUser: builder.mutation({
        query: ({ username, email, password, country, city, agreeTerms }) => {
          return {
            url: "/adduser",
            method: "POST",
            body: {
              username,
              password,
              email,
              country,
              city,
              agreeTerms,
            },
          };
        },
      }),
    };
  },
});
export const { useFetchuserQuery, useAddUserMutation } = userApi;
export { userApi };
