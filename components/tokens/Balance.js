import React from "react";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";

const Balance = () => {
  //Traer info del usuario logueado
  useAuth();
  const user = useSelector((state) => state.user);

  return <div>You have {user?.tokenQuantity} ITGX </div>;
};

export default Balance;
