import { auth } from "../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocumento } from "../fetchData/controllers";

// Login using email/password
const loginEmail = async ({email,password}) => {
  // Get email/password from Form Inputs
  const loginEmail = email;
  const loginPassword = password;

  // Use auth from Firebase to log in to existing account
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );

    return getDocumento("users",userCredential.user.uid)
  } catch (error) {
   return error
  }
};

export default loginEmail;
