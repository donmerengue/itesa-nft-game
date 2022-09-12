import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import logger from "redux-logger";



const store = configureStore({
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),

    reducer:{
        user:userReducer,
        // arena,
        // battle,
        // avatar,
        // nftItem,
        // nftItems
    }
})


export default store