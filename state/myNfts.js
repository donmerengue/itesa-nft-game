import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getMyNfts } from "../utils/marketplace/nftDetails";

export const getNfts = createAsyncThunk("GET_MY_NFTS", async (uid) => {

    return getMyNfts(uid)
});


const myNftsReducer = createReducer([], {
    [getNfts.fulfilled]: (state, action) => action.payload,
  });
  export default myNftsReducer;
  