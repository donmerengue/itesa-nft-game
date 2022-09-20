import { auth } from "../../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { getDocumento, setNewDoc } from "../../fetchData/controllers";

// Create new account using email/password
const createAccount = async ({ name, lastname, email, password }) => {
  try {
    // const {address, mnomic} = createWallet()

    //Guardamos el user en Firebase Authentication y recibimos un userId
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    //Guardamos el usuario en Firestore con el userId y datos del form recibidos
    const userData = {
      email: userCredential.user.email,
      isAdmin: false,
      lastname,
      name,
      walletAddress: "",
      isActive: true,
      wannaPlay: false,
    };
    await sendEmailVerification(auth.currentUser);
    await setNewDoc("users", userData, userCredential.user.uid);
    // TODO: 20/9 ver si esto es necesario (hablar con Marcos)
    return getDocumento("users", userCredential.user.uid);
  } catch (error) {
    return error;
  }
};

export default createAccount;
