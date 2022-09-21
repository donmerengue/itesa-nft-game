import { async } from "@firebase/util";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  setDoc,
  increment,
  where,
  query,
} from "firebase/firestore";
import db from "../firebase/firebase-config";

//Agregar un nuevo documento a una colección
export const addNewDoc = async (coleccion, data) => {
  const docRef = await addDoc(collection(db, coleccion), data);
  console.log("Document written with name ", docRef);
};

//Agregar un nuevo documento a una colección seteando el ID
export const setNewDoc = async (coleccion, data, uid) => {
  const docRef = await setDoc(doc(db, coleccion, uid), data, {
    merge: true,
  });
  console.log("Document written with name ", docRef);
};

//Traer información
export const getData = async (coleccion) => {
  const data = await getDocs(collection(db, coleccion));
  return data.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
};

//Traer un solo doc
export const getDocumento = async (coleccion, id) => {
  const docRef = doc(db, coleccion, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

//Actualizar información
export const updateData = async (coleccion, id, data) => {
  const dataDoc = doc(db, coleccion, id);
  await updateDoc(dataDoc, data);
  console.log("ok");
};

// Actualizar cantidad de tokens
export const updateTokenQuant = async (coleccion, id, value) => {
  const dataDoc = doc(db, coleccion, id);
  await updateDoc(dataDoc, { tokenQuantity: increment(value) });
  console.log("ok");
};

//Borrar Información
export const deleteData = async (coleccion, id) => {
  const userDoc = doc(db, coleccion, id);
  await deleteDoc(userDoc);
  console.log(`Documento de ${coleccion} eliminado`);
};

// trae el documento que coincida con el id del usuario logueado

export const getId = async (coleccion, id) => {
  const data = await getData(coleccion);
  const avatar = data.filter((obj) => obj.userId === id);
// console.log(avatar)
  return avatar
};
