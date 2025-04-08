import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setUser, setLoading } from "../features/userSlice";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({  baseUrl: import.meta.env.VITE_REACT_APP_API_URL || "/api/v1" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/me", // or whatever the endpoint is
      transformResponse: (result) => result.user,
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          dispatch(setIsAuthenticated(true));
          dispatch(setLoading(false))
        } catch (error) {
          console.log(error);
          dispatch(setLoading(false))
        }
      },
      providesTags: ["User"]
    })    
  }),
});

export const {
  useGetUserQuery
} = userApi;
