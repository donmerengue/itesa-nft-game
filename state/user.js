import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getDocumento } from "../fetchData/controllers";
import createAccount from "../utils/auth/createAccount";
import loginEmail from "../utils/auth/loginEmail";
import sendLoginLink from "../utils/auth/loginLink";
import logout from "../utils/auth/logout";

// const initialState = { userData: {}, exists: false };

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
  return sendLoginLink(email);
});

export const logoutUser = createAsyncThunk("LOGOUT", () => {
  return logout();
});

const userReducer = createReducer(null, {
  [getUser.fulfilled]: (state, action) => action.payload,
  [registerUser.fulfilled]: (state, action) => {
    if (action.payload.isActive) {
      return action.payload;
    }
  },
  [login.fulfilled]: (state, action) => {
    if (action.payload.isActive) {
      return action.payload;
    }
  },
  [linkLogin.fulfilled]: (state, action) => {
    // if (action.payload) return action.payload;
  },
  [logoutUser.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
