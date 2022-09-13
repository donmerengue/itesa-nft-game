import { auth } from "../firebase/firebase-config";
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";
import { getDocumento } from "../fetchData/controllers";

// Login using email/password
const loginLink = async () => {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:3000/logintest",
    // This must be true.
    handleCodeInApp: true,
  };

  // Get email/password from Form Inputs
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  sendSignInLinkToEmail(auth, loginEmail, actionCodeSettings)
    .then(() => {
      console.log("Login Link set to:", loginEmail);
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", loginEmail);
      // ...
    })
    .catch((error) => {
      console.log("error con este mail: ", loginEmail);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });

  //   // Use auth from Firebase to log in to existing account
  //   try {
  //     await sendSignInLinkToEmail(auth, loginEmail, loginPassword);

  //     const loginEmail = window.localStorage.setItem(
  //       "emailForSignIn",
  //       email
  //     );

  //   } catch (error) {
  //     console.log(`There was an error: ${error}`);
  //   }
};
export default loginLink;

export const loginWithLink = async () => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem("emailForSignIn");
    console.log(email);
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt("Please provide your email for confirmation");
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem("emailForSignIn");
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }
};
