import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userAPI";
import { logout } from "../features/userSlice"; 

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1",  credentials: 'include', }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    register: builder.mutation({
      query(body) {
        return {
          url: "/register",
          method: "POST",
          body,
        };
      },
    }),
    login: builder.mutation({
      query(body) {
        return {
          url: "/login",
          method: "POST",
          body,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getUser.initiate(null)); 
        } catch (error) {
          console.log(error);
        }
      },
    }),
    logout: builder.mutation({
      query: () => "/logout",
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
          window.location.reload(); 
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApi;
