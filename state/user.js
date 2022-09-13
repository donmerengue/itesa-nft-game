import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getDocumento } from "../fetchData/controllers";
import createAccount from "../utils/createAccount";
import loginEmail from "../utils/loginEmail";
import sendLoginLink from "../utils/loginLink";

export const getUser = createAsyncThunk("GET_USER", (userId) => {
  return getDocumento("users", userId);
});

export const registerUser = createAsyncThunk("REGISTER", (userData) => {
  return createAccount(userData);
});

export const login = createAsyncThunk("LOGIN", () => {
  return loginEmail();
});

export const linkLogin = createAsyncThunk("LOGIN_LINK", () => {
  return sendLoginLink();
});

const userReducer = createReducer(null, {
  [getUser.fulfilled]: (state, action) => action.payload,
  [registerUser.fulfilled]: (state, action) => {
    action.payload.name === "FirebaseError" ? "ERROR" : action.payload;
  },
  [login.fulfilled]: (state, action) => action.payload,
  [linkLogin.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
