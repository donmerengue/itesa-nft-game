import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase/firebase-config";

export const getArena = createAsyncThunk("GET_ARENA", async (level) => {
    console.log(level);
  const usersRef = collection(db, "arenas");
  const arenaQuery = await query(usersRef, where("level", ">=", level));
  const arenaQuerySnap = await getDocs(arenaQuery).then((res) => res);

  // Agregar cada arena a un arreglo
  const arena = [];

  arenaQuerySnap.forEach((doc) => {
    if (doc.level != level) {
      // const docData = doc.data()
      // ({ ...obj, key: 'value' })
      arena.push({ ...doc.data() });
    }
  });
  return arena[0];
});

const arenaReducer = createReducer(null, {
  [getArena.fulfilled]: (state, action) => action.payload,
});
export default arenaReducer;
