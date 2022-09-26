import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getRival } from "../fetchData/controllers";

export const getRivalData = createAsyncThunk("GET_RIVAL_DATA", async (userId) => {
    
return getRival("users",userId)
});

const rivalReducer = createReducer(null, {
    [getRivalData.fulfilled]: (state, action) => action.payload,
  
});

export default rivalReducer