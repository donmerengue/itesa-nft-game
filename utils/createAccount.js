import { auth } from "../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDocumento, setNewDoc } from "../fetchData/controllers";

// Create new account using email/password
const createAccount = async () => {
  // Get email/password from Form Inputs
  const email = txtEmail.value;
  const password = txtPassword.value;

  // Use auth from Firebase to create new account
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
      isAdmin: true,
      lastname: "Programador",
      name: "Marcos",
      walletAddress: "asdsa68923sadsgsf",
      isActive: true,
    };
     await setNewDoc("users", userData, userCredential.user.uid)
     return getDocumento("users",userCredential.user.uid)
     
    

  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};

export default createAccount;
