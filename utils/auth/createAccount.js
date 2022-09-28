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
      wannaBet: false,
      level: 1,
      tokenQuantity: 0,
    };

    // Redirigir a creacion de avatar luego de verificar mail
    const location = window.location;
    let url;
    if (
      location.pathname === "/login" &&
      location.origin === "http://localhost:3000"
    )
      url = "http://localhost:3000/user/createavatar";
    else url = "https://itesa-nft-game.vercel.app/user/createavatar";

    const actionCodeSettings = {
      // URL you want to redirect back to
      url,
    };

    await sendEmailVerification(auth.currentUser, actionCodeSettings);
    await setNewDoc("users", userData, userCredential.user.uid);

    return getDocumento("users", userCredential.user.uid);
  } catch (error) {
    return error;
  }
};

export default createAccount;
