import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import logger from "redux-logger";
import avatarReducer from "./avatar";
import itgxReducer from "./itgx";


const store = configureStore({
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),

    reducer:{
        user:userReducer,
        avatar:avatarReducer,
        itgx:itgxReducer,
        // battle,
        // avatar,
        // nftItem,
        // nftItems
    }
})


export default store