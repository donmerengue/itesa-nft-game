import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getDocumento } from "../fetchData/controllers";
import createAccount from "../utils/createAccount";
import loginEmail from "../utils/loginEmail";
import sendLoginLink from "../utils/loginLink";

const initialState = { userData: {}, exists: false };

export const getUser = createAsyncThunk("GET_USER", (userId) => {
  return getDocumento("users", userId);
});

export const registerUser = createAsyncThunk("REGISTER", (userData) => {
  return createAccount(userData);
});

export const login = createAsyncThunk("LOGIN", (userData) => {
  return loginEmail(userData);
});

export const linkLogin = createAsyncThunk("LOGIN_LINK", (email) => {
  console.log("email desde accion linkLogin", email);
  return sendLoginLink(email);
});

const userReducer = createReducer(null, {
  [getUser.fulfilled]: (state, action) => action.payload,
  [registerUser.fulfilled]: (state, action) => {
    action.payload.name === "FirebaseError" ? "ERROR" : action.payload;
  },
  [login.fulfilled]: (state, action) => {
    action.payload.name !== "FirebaseError" && action.payload;
  },
  [linkLogin.fulfilled]: (state, action) => {
    console.log("action payload desde user state", action.payload);
    // if (action.payload) return action.payload;
  },
});

export default userReducer;
