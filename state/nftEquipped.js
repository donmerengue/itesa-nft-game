import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getEqNFTitems } from "../fetchData/controllers";

export const getItemsEquipped = createAsyncThunk("GET_NFT_ITEMS_EQUIPPED", async (uid) => {

    return getEqNFTitems(uid)
});



const nftEquippedReducer = createReducer(null, {
    [getItemsEquipped.fulfilled]: (state, action) => action.payload,
  });
  export default nftEquippedReducer;
  