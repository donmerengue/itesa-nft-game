import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import logger from "redux-logger";
import avatarReducer from "./avatar";


const store = configureStore({
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),

    reducer:{
        user:userReducer,
        avatar:avatarReducer,
        // arena,
        // battle,
        // avatar,
        // nftItem,
        // nftItems
    }
})


export default store