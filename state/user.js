import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getDocumento } from "../fetchData/controllers";
import createAccount from "../utils/createAccount";
import loginEmail from "../utils/loginEmail";
import loginLink from "../utils/loginLink";

export const getUser = createAsyncThunk("GET_USER", (userId) => {
  return getDocumento("users", userId);
});

export const register = createAsyncThunk("REGISTER", () => {
  return createAccount();
});

export const login = createAsyncThunk("LOGIN", () => {
  return loginEmail();
});

export const linkLogin = createAsyncThunk("LOGIN_LINK", () => {
  console.log("linkLogin action being dispatched by LOGIN LINK BUTTON");
  return loginLink();
});

const userReducer = createReducer(null, {
  [getUser.fulfilled]: (state, action) => action.payload,
  [register.fulfilled]: (state, action) => action.payload,
  [login.fulfilled]: (state, action) => action.payload,
  [linkLogin.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
