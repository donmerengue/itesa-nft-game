import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getDocumento } from "../fetchData/controllers";

export const getAvatar = createAsyncThunk("GET_AVATAR", (avatarId) => {
    return getDocumento("avatar", avatarId);
});

const avatarReducer = createReducer(null, {
    [getAvatar.fulfilled]: (state, action) => action.payload,
  
});

export default avatarReducer
