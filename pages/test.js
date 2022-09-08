import React from "react";
import {
  addNewDoc,
  deleteData,
  getData,
  updateData,
} from "../fetchData/controllers";
import handler from "./api/hello";

const test = () => {
  //Ejemplo de data
  const userData = {
    email: "mail@gmail.com",
    isAdmin: false,
    lastName: "Lastname",
    name: "Name",
    walletAddress: "6a5sd4a65sdasd565sa",
  };
  const updatedData = {
    lastName: "Apellido actualizado",
    name: "Nombre Actualizado",
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
        {" "}
        Ejecutar addNewDoc
      </button>
      <button onClick={handlerGet}> Ejecutar getDocs</button>
      <button
        onClick={() => {
          updateData("users", "baABYTOIt155ZKyCRr6E", updatedData);
        }}
      >
        {" "}
        Actualizar información{" "}
      </button>

      <button
        onClick={() => {
          deleteData("users", "p9b7RVlfzauRn2J2K4cU");
        }}
      >
        {" "}
        Borrar documento{" "}
      </button>
    </div>
  );
};

export default test;
