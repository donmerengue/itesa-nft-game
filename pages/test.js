import React from "react";
import {
  addNewDoc,
  deleteData,
  getData,
  getDocumento,
  updateData,
} from "../fetchData/controllers";

const test = () => {
  //Ejemplo de data
  const userData = {
    email: "carlitos@gmail.com",
    isAdmin: true,
    lastName: "Programador",
    name: "Carlos",
    walletAddress: "asdas6d5as23sadsgsf",
    isActive:true,
    level:2,
    experience:20,
    wonBattles:1,
    lostBattles:0,
    totalBattles:1
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
        }}
      >
        Ejecutar addNewDoc
      </button>
      <button onClick={handlerGet}> Ejecutar getDocs</button>
      <button
        onClick={() => {
          updateData("users", "kbQYfPHLHrkZ6SMojLvn", updatedData);
        }}
      >
        Actualizar información
      </button>

      <button
        onClick={() => {
          deleteData("users","kbQYfPHLHrkZ6SMojLvn");
        }}
      >
        Borrar documento
      </button>
      <button
        onClick={() => {
            getDocumento( "users","jMspmTasdasG4p3gchomkXQIZ")     
   }}
      >
        Traer un documento
      </button>
    </div>
  );
};

export default test;
