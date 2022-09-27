import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { deleteData, getDocumento, setNewDoc } from "../fetchData/controllers";

export const getItgx = createAsyncThunk("GET_ITGX", (userId) => {
    return getDocumento("transfers", userId);
  });
  
  export const postItgxTransfer = createAsyncThunk("POST_ITGX", ({userId, itgx, bnb}) => {
    return setNewDoc("transfers",{amount:itgx, bnb:bnb},userId);
  });

  export const deleteItgxTransfer = createAsyncThunk("DELETE_ITGX", (amount) => {
    return deleteData("transfers",userId);
  });


const itgxReducer = createReducer(null, {
  [getItgx.fulfilled]: (state, action) => {
    console.log(action.payload)

    return action.payload},
  [postItgxTransfer.fulfilled]: (state, action) => action.payload,
 

});

export default itgxReducer;
