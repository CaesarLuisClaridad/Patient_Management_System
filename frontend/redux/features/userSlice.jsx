import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

// Get the persisted state from localStorage (if it exists)
const persistedUserState = JSON.parse(localStorage.getItem("userState"));

const initialStateWithPersistence = persistedUserState || initialState;

export const userSlice = createSlice({
  initialState: initialStateWithPersistence,
  name: "userSlice",
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      // Save the user data to localStorage
      localStorage.setItem("userState", JSON.stringify(state));
    },
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
      // Save the authentication status to localStorage
      localStorage.setItem("userState", JSON.stringify(state));
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      // Remove the user data from localStorage when logging out
      localStorage.removeItem("userState");
    }
  },
});

export default userSlice.reducer;

export const { setUser, setIsAuthenticated, setLoading, logout } = userSlice.actions;
