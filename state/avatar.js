import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getDocumento } from "../fetchData/controllers";
import db from "../firebase/firebase-config";

export const getAvatar = createAsyncThunk("GET_AVATAR", async (userId) => {
    
    const usersRef = collection(db, "userAvatar");
    const avatarQuery = await query(
      usersRef,
      where("userId", "==", userId),
    );
    const avatarQuerySnap = await getDocs(avatarQuery).then(res=>res)
     
  
    // Agregar cada rival a un arreglo
    const avatar = [];

    avatarQuerySnap.forEach((doc) => {
      if (doc.id != userId) {
        // const docData = doc.data()
        // ({ ...obj, key: 'value' })
        avatar.push({ ...doc.data(), uid: doc.id });
      }
    })
    return avatar[0]
});

const avatarReducer = createReducer(null, {
    [getAvatar.fulfilled]: (state, action) => action.payload,
  
});

export default avatarReducer
