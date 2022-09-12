import { auth } from "../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setNewDoc } from "../fetchData/controllers";

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
    const userData = {
      email: userCredential.user.email,
      isAdmin: true,
      lastname: "Programador",
      name: "Marcos",
      walletAddress: "asdsa68923sadsgsf",
      isActive: true,
    };
    setNewDoc("users", userData, userCredential.user.uid);
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};

export default createAccount;
