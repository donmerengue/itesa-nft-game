import React from "react";
import {
  addNewDoc,
  deleteData,
  getData,
  getDocumento,
  updateData,
} from "../fetchData/controllers";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config";

const TestPage = () => {
  const [user, loading, error] = useAuthState(auth);

  console.log(user)

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
          getDocumento("users", "8reEa96yYeNOBAp7pfYc");
        }}>
        Traer un documento
      </button>
    </div>
  );
};

export default TestPage;
