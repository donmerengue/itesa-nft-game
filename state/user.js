import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getDocumento } from "../fetchData/controllers";
import createAccount from "../utils/createAccount";
import loginEmail from "../utils/loginEmail";


export const getUser = createAsyncThunk("GET_USER", (userId)=>{
    return getDocumento("users", userId)
})

export const register = createAsyncThunk("REGISTER", ()=>{
  return  createAccount()
})

export const login = createAsyncThunk("LOGIN", ()=>{
  return  loginEmail()
})


const userReducer = createReducer(null, {
    [getUser.fulfilled] : (state,action)=> action.payload,
    [register.fulfilled] : (state,action)=> action.payload,
    [login.fulfilled] : (state,action)=> action.payload

})

export default userReducer