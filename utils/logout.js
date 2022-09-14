import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

const logout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export default logout;
