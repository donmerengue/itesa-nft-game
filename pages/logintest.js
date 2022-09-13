import React, { useEffect } from "react";
import { loginWithLink } from "../utils/loginLink";

const LoginTest = () => {
  useEffect(() => {
    loginWithLink();
  });

  return <div>LoginTest</div>;
};

export default LoginTest;
