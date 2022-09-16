import { auth } from "../firebase/firebase-config";
import Register from "../components/auth/Register";
import NotFound from "../components/NotFound";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

const RegisterPage = ({ user }) => {
  // TODO: 15/9 Asegurar ruta (no mostrar si el usuario esta logeado)
  // FIXME: 15/9 proteccion de ruta -> asi bugea el flujo del registro
  // if (user !== null) return <NotFound />;

  return <Register />;
};

export default RegisterPage;
