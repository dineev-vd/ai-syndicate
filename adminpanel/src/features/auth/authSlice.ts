import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { authAPI } from "./authAPI";

type User = {
  email: string;
};

type AuthState = {
  user?: User | undefined;
  token?: string | undefined;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {} as AuthState,
  reducers: {
    logout: (state) => {
      state.user = undefined;
      state.token = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authAPI.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = "test-token";
        state.user = {
          email: "test@example.com",
        };
      }
    );
  },
});

export const { logout } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
