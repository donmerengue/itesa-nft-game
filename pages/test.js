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
    email: "mechi@gmail.com",
    isAdmin: true,
    lastName: "Programadora",
    name: "Mechi",
    walletAddress: "asdas6d5as4d65asd6",
  };
  const updatedData = {
    lastName: "Mechi actualizado",
    name: "MEchi Actualizado",
  };
  const statsData = {
    level: 5,
    lostBattles: 2,
    totalFights: 10,
    winFights: 8,
    cualquierCosa: "8",
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
