import { auth } from "../../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocumento } from "../../fetchData/controllers";

// Login using email/password
const loginEmail = async ({ password }) => {
  // Get email from local storage
  let email = window.localStorage.getItem("emailForSignIn");
  // Use auth from Firebase to log in to existing account
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Borrar mail de local storage
    window.localStorage.removeItem("emailForSignIn");
    // Devolver data del usuario desde la DB
    return getDocumento("users", userCredential.user.uid)
  } catch (error) {
    return error;
  }
};

export default loginEmail;
