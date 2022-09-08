import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useState } from "react";
import db from "../firebase/firebase-config";

//Agregar un nuevo documento a una colección
export const addNewDoc = async (coleccion, data) => {
  const docRef = await addDoc(collection(db, coleccion), data);
  console.log("Document written with name ", docRef);
};

//Traer información
export const getData = async (coleccion) => {
  const data = await getDocs(collection(db, coleccion));
  return data.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
};

//Actualizar información
export const updateData = async (coleccion, id, data) => {
  const dataDoc = doc(db, coleccion, id);
  await updateDoc(dataDoc, data);
  console.log("ok");
};



//Borrar Información
export const deleteData = async (coleccion,id) => {
  const userDoc = doc(db, coleccion, id);
  await deleteDoc(userDoc);
  console.log(`Documento de ${coleccion} eliminado`);
};



//* Codigo de ejemplo

// import admin from '../firebase/nodeApp'

// export const getProfileData = async (username) => {
//   const db = admin.firestore()
//   const profileCollection = db.collection('profile')
//   const profileDoc = await profileCollection.doc(username).get()

//   if (!profileDoc.exists) {
//     return null
//   }

//   return profileDoc.data()
// }
