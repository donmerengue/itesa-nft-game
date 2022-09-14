import { auth } from "../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { getDocumento, setNewDoc } from "../fetchData/controllers";

// Create new account using email/password
const createAccount = async ({ name, lastname, email, password }) => {
  //Guardamos el user en Firebase Authentication y recibimos un userId
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    //Guardamos el usuario en Firestore con el userId y datos del form recibidos
    //TODO: Agregar walletAddress 12/09
    const userData = {
      email: userCredential.user.email,
      isAdmin: false,
      lastname,
      name,
      walletAddress: "asdsa68923sadsgsf",
      isActive: true,
    };
    await sendEmailVerification(auth.currentUser);
    await setNewDoc("users", userData, userCredential.user.uid);
    return getDocumento("users", userCredential.user.uid);
  } catch (error) {
    return error;
  }
};

export default createAccount;
