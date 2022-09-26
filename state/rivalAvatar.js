import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getAvatar } from "../fetchData/controllers";


export const getRivalAvatar = createAsyncThunk("GET_RIVAL_AVATAR", async (rivalId) => {
return getAvatar(rivalId)
    
});

const rivalAvatarReducer = createReducer(null, {
    [getRivalAvatar.fulfilled]: (state, action) => action.payload,
  
});

export default rivalAvatarReducer
