import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import logger from "redux-logger";
import avatarReducer from "./avatar";
import itgxReducer from "./itgx";
import arenaReducer from "./arena";


const store = configureStore({
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),

    reducer:{
        user:userReducer,
        avatar:avatarReducer,
        itgx:itgxReducer,
        arena:arenaReducer
        // nftItem,
        // nftItems
    }
})


export default store