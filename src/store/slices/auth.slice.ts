// import axios from "axios";
import { AuthType } from "./../../types/AuthType";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// const timestamp = 948880187000; // 2000 year

// const setAuthorization = (token: string) => {
//   axios.defaults.headers.common["authorization"] = "Bearer " + token;
// };

const initialState: AuthType = {
  token: null,
  isAuth: false,
  // expiresAt: timestamp,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthType>) => {
      console.log("token :", state.token)
      state.token = action.payload.token;
      // state.expiresAt = action.payload.expiresAt;
      state.isAuth = true;
      localStorage.setItem("token", JSON.stringify(state.token));
      // localStorage.setItem("expiresAt", JSON.stringify(state.expiresAt));
      // setAuthorization(action.payload.token ?? "");
    },
    logOut: (state) => {
      state.isAuth = false;
      state.token = null;
      // state.expiresAt = timestamp;
      localStorage.removeItem("token");
      // localStorage.removeItem("expiresAt");
    },
  },
});

export const authActions = slice.actions;

export default slice.reducer;
