import { configureStore } from "@reduxjs/toolkit";
import { patientApi } from "./api/patientAPI";
import { authApi } from "./api/authAPI";
import { userApi } from "./api/userAPI"; // ✅ Import userApi
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    auth: userReducer,
    [patientApi.reducerPath]: patientApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer, // ✅ Add userApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      patientApi.middleware,
      authApi.middleware,
      userApi.middleware, // ✅ Add userApi middleware
    ]),
});
