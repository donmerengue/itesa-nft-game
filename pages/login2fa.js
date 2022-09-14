import React, { useEffect } from "react";
import LoginPassword from "../components/auth/LoginPassword";
import { checkLoginLink } from "../utils/loginLink";

const Login2fa = () => {
  useEffect(() => {
    checkLoginLink();
  });

  return <LoginPassword />;
};

export default Login2fa;
