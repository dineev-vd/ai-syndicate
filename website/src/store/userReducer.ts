import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface User {
  email: string;
  name: string;
  phoneNumber: string;
  region: string;
  city: string;
  investedStartups: string[];
}

interface UserState {
  user: User | null;
}

const initialState: UserState = { user: null };
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    investInId: (state, action: PayloadAction<string>) => {
      if (state.user === null) return;

      state.user.investedStartups = [
        ...state.user.investedStartups,
        action.payload,
      ];
    },
  },
});

export const selectUser = (state: RootState) => state.persistedReducer.user;
export const { logout, setUser, investInId } = userSlice.actions;

export default userSlice.reducer;
