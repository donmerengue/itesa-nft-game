import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { getDocumento } from "../fetchData/controllers";
import { auth } from "../firebase/firebase-config";
import createAccount from "../utils/createAccount";
import loginEmail from "../utils/loginEmail";
import sendLoginLink from "../utils/loginLink";
import logout from "../utils/logout";

// FIXME: 15/9 -> genera react hydration error
// const initialState = Cookies.get("user") || null;
const initialState = null;

export const getUser = createAsyncThunk("GET_USER", (userId) => {
  return getDocumento("users", userId);
});

export const registerUser = createAsyncThunk("REGISTER", (userData) => {
  return createAccount(userData);
});

export const login = createAsyncThunk("LOGIN", (password) => {
  return loginEmail(password);
});

export const linkLogin = createAsyncThunk("LOGIN_LINK", (email) => {
  return sendLoginLink(email);
});

export const logoutUser = createAsyncThunk("LOGOUT", () => {
  Cookies.remove("user");
  return logout();
});

const userReducer = createReducer(initialState, {
  [getUser.fulfilled]: (state, action) => action.payload,
  [registerUser.fulfilled]: (state, action) => {
    if (action.payload.isActive) {
      return action.payload;
    }
  },
  [login.fulfilled]: (state, action) => {
    if (action.payload.isActive) {
      // Agregar Cookie con user data
      Cookies.set("user", JSON.stringify(action.payload));
      return action.payload;
    }
  },
  [linkLogin.fulfilled]: (state, action) => {
    // if (action.payload) return action.payload;
  },
  [logoutUser.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
