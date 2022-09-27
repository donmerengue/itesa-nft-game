import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import logger from "redux-logger";
import avatarReducer from "./avatar";
import itgxReducer from "./itgx";
import arenaReducer from "./arena";
import nftItemsReducer from "./nftItems";
import nftEquippedReducer from "./nftEquipped";
import rivalReducer from "./rival";
import rivalAvatarReducer from "./rivalAvatar";
import dailyMatchesReducer from "./dailyMatches"


const store = configureStore({
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),

    reducer:{
        user:userReducer,
        avatar:avatarReducer,
        itgx:itgxReducer,
        arena:arenaReducer,
        nftItems:nftItemsReducer,
        nftEquipped:nftEquippedReducer,
        rival:rivalReducer,
        rivalAvatar:rivalAvatarReducer,
        dailyMatches:dailyMatchesReducer
    }
})


export default store