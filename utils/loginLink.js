import { auth } from "../firebase/firebase-config";
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";

// Login using email/password
const sendLoginLink = async () => {
  const actionCodeSettings = {
    // URL you want to redirect back to TODO: 13/9 cambiar a Vercel
    url: "http://localhost:3000/logintest",
    handleCodeInApp: true,
  };

  // Get email/password from Form Inputs
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  sendSignInLinkToEmail(auth, loginEmail, actionCodeSettings)
    .then(() => {
      // The link was successfully sent.
      console.log("Login Link set to:", loginEmail);
      // Save the email locally
      window.localStorage.setItem("emailForSignIn", loginEmail);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
export default sendLoginLink;

export const loginWithLink = async () => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    // Get the email if available
    let email = window.localStorage.getItem("emailForSignIn");

    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again.
      email = window.prompt("Please provide your email for confirmation");
    }
    // Login with email saved in local storage
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem("emailForSignIn");
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
