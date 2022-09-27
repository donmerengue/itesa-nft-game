import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getDailyMatches } from "../fetchData/controllers";

export const getMatches = createAsyncThunk(
  "GET_DAILY_MATCHES",
  async (userId) => {
    return getDailyMatches(userId);
  }
);

const dailyMatchesReducer = createReducer(null, {
  [getMatches.fulfilled]: (state, action) => action.payload,
});

export default dailyMatchesReducer;
