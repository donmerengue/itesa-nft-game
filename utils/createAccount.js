import { auth } from "../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

// Create new account using email/password
const createAccount = async () => {
  // Get email/password from Form Inputs
  const email = txtEmail.value;
  const password = txtPassword.value;

  // Use auth from Firebase to create new account
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user.uid);
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};

export default createAccount;
