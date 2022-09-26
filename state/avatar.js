import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAvatar, getDocumento } from "../fetchData/controllers";
import db from "../firebase/firebase-config";

export const getUserAvatar = createAsyncThunk("GET_USER_AVATAR", async (userId) => {
    
return getAvatar(userId)
});

const avatarReducer = createReducer(null, {
    [getUserAvatar.fulfilled]: (state, action) => action.payload,
  
});

export default avatarReducer
