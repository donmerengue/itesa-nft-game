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

// Traer el documento que coincida con el id del usuario logueado
export const getId = async (coleccion, id) => {
  const data = await getData(coleccion);
  const avatar = data.filter((obj) => obj.userId === id);
  // console.log(avatar)
  return avatar;
};

// Matchmaking: buscar con mismo rango de nivel
export const getRival = async (coleccion, id) => {
  // Redondear de 10 en 10 (para arriba)
  function roundDecimalUp(value) {
    return Math.ceil(value / 10) * 10;
  }
  // Redondear de 10 en 10 (para abajo)
  function roundDecimalDown(value) {
    return Math.floor(value / 10) * 10;
  }

  // Traer data del usuario actual
  const user = await getDocumento("users", id);

  // Filtrar por niveles
  const usersRef = collection(db, coleccion);
  const levelQuery = query(
    usersRef,
    where("level", "<=", roundDecimalUp(user.level)),
    where("level", ">=", roundDecimalDown(user.level))
  );
  const levelQuerySnap = await getDocs(levelQuery);

  // Agregar cada rival a un arreglo
  const rivals = [];
  levelQuerySnap.forEach((doc) => {
    if (doc.id != id) {
      rivals.push(doc.data());
    }
  });

  // Elegir rival al azar
  const rival = rivals[Math.floor(Math.random() * rivals.length)];

  console.log(rivals);
  console.log(rival);

  // console.log(avatar)
  // return rivals;
};

/* // Matchmaking: buscar usuarios con wannaPlay: true y mismo rango de nivel
export const getRivalWannaPlay = async (coleccion, id) => {
  // Traer data del usuario actual
  const user = await getDocumento("users", id);

  // Elegir usuarios dispuestos a jugar
  const usersRef = collection(db, coleccion);
  const wannaPlayQuery = query(usersRef, where("wannaPlay", "==", true));
  const wannaPlayQuerySnap = await getDocs(wannaPlayQuery);
  // wannaPlayQuerySnap.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  // });

  // Query combinada wannaPlay + filtro Level
  const wannaPlayLevelQuery = query(
    usersRef,
    where("wannaPlay", "==", true),
    where("level", "<=", user.level * 2)
  );

  // Filtrar por niveles
  const wannaPlayLevelQuerySnap = await getDocs(wannaPlayLevelQuery);
  wannaPlayLevelQuerySnap.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });

  // Elegir uno al azar

  // console.log(avatar)
  // return rivals;
}; */
