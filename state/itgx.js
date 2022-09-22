import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getDocumento } from "../fetchData/controllers";

export const getItgx = createAsyncThunk("GET_ITGX", (amount) => {
  return amount;
});

const itgxReducer = createReducer(null, {
  [getItgx.fulfilled]: (state, action) => action.payload,
});

export default itgxReducer;
