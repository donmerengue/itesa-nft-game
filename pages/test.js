import React from "react";
import {
  addNewDoc,
  deleteData,
  getData,
  getDocumento,
  updateData,
  getId,
  setNewDoc,
} from "../fetchData/controllers";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";

const TestPage = () => {
  const user = useSelector((state) => state.user);

  useAuth();

  //Ejemplo de data
  const userData = {
    email: "victor@gmail.com",
    isAdmin: true,
    lastname: "Programador",
    name: "Victor",
    walletAddress: "asdsa68923sadsgsf",
    isActive: true,
  };
  // Data NFT
  const nftData = {
    image: "url",
    type: "attack", // attack defense luck
    power: "3",
    nftAddress: "",
    user: "2TrHnyokeoUlDS0r5MkAdnT3LYz1", // auth.currentUser?.uid o hardcoded
    equipped: false,
  };

  // Data user-stats
  const userStatsData = {
    battlesLost: 0,
    battlesTotal: 0,
    battlesWon: 0,
    experience: 0,
    level: 1,
  };

const arenaData = {
  planet:"https://imgur.com/2ZImUtf.jpg",
  level: 40
}

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
      <br />
      <button
        onClick={() => {
          addNewDoc("arenas", arenaData);
        }}>
        Ejecutar addNewNFT
      </button>
      <br />
      <button
        onClick={() => {
          setNewDoc(
            "user-stats",
            userStatsData,
            "2TrHnyokeoUlDS0r5MkAdnT3LYz1"
          );
        }}>
        Ejecutar addNewUser-stats
      </button>
      <br />

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
