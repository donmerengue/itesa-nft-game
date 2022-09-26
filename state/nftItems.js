import { async } from "@firebase/util";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getNFTItems } from "../fetchData/controllers";

export const getItems = createAsyncThunk("GET_NFT_ITEMS", async (uid) => {

    return getNFTItems(uid)
});


export const toggleEquipped = createAsyncThunk("TOGGLE_EQUIPPED", async () =>{
    
})


const nftItemsReducer = createReducer(null, {
    [getItems.fulfilled]: (state, action) => action.payload,
  });
  export default nftItemsReducer;
  