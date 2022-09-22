import React from "react";
import {
  addNewDoc,
  deleteData,
  getData,
  getDocumento,
  updateData,
  getId
} from "../fetchData/controllers";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config";
import useAuth from "../hooks/useAuth";
import {  useSelector } from "react-redux";

const TestPage = () => {
  const user = useSelector(state=>state.user)

  useAuth()

  //Ejemplo de data
  const userData = {
    email: "victor@gmail.com",
    isAdmin: true,
    lastname: "Programador",
    name: "Victor",
    walletAddress: "asdsa68923sadsgsf",
    isActive: true,
  };
  const updatedData = {
    lastName: "Mechi actualizado",
    name: "MEchi Actualizado",
  };

  const handlerGet = () => {
    getData("users").then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          addNewDoc("users", userData);
        }}>
        Ejecutar addNewDoc
      </button>
      <button onClick={handlerGet}> Ejecutar getDocs</button>
      <button
        onClick={() => {
          updateData("users", "kbQYfPHLHrkZ6SMojLvn", updatedData);
        }}>
        Actualizar información
      </button>

      <button
        onClick={() => {
          deleteData("users", "kbQYfPHLHrkZ6SMojLvn");
        }}>
        Borrar documento
      </button>
      <button
        onClick={() => {
          getDocumento("users", auth.currentUser.uid);
        }}>
        Traer un documento
      </button>
      <button
        onClick={() => {
          getId("userAvatar", auth.currentUser.uid);
        }}>
        Traer un documento por id
      </button>
    </div>
  );
};

export default TestPage;
