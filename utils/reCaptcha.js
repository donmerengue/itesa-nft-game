import { auth } from "../firebase/firebase-config";
import { RecaptchaVerifier } from "firebase/auth";

/* const recaptchaVerifier = new RecaptchaVerifier(
  // Set the ID of the UI element that starts multi-factor enrollment (login button)
  "btnLoginLink",
  {
    size: "invisible",
    callback: function (response) {
      // reCAPTCHA solved, you can proceed with
      // phoneAuthProvider.verifyPhoneNumber(...).
      onSolvedRecaptcha();
    },
  },
  auth
); */

const recaptchaVerifier = new RecaptchaVerifier(
    "btnLoginLink",

    // Optional reCAPTCHA parameters.
    {
      "size": "normal",
      "callback": function(response) {
        // reCAPTCHA solved, you can proceed with 
        // phoneAuthProvider.verifyPhoneNumber(...).
        onSolvedRecaptcha();
      },
      "expired-callback": function() {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    }, auth
);


export default recaptchaVerifier;
