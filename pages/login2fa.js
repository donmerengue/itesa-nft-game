import React, { useEffect } from "react";
import LoginPassword from "../components/auth/LoginPassword";
import { checkLoginLink } from "../utils/auth/loginLink";
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'


const Login2fa = () => {
  useEffect(() => {
    checkLoginLink();
  });

  return(
     <>
     <Navbar/>
     <LoginPassword />
     <Footer/>
     </>
     );
};

export default Login2fa;
