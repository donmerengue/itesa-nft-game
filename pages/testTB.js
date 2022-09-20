import React from "react";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import { Button } from "@chakra-ui/react";
import {
  incrementValue,
  updateData,
  updateTokenQuant,
} from "../fetchData/controllers";
import { auth } from "../firebase/firebase-config";
import { increment } from "firebase/firestore";

const TestTB = () => {
  //FIXME: 20/9 ver por que gatilla 2 el refresh de la pagina (en vez de 1)
  //   useAuth();
  //   const user = useSelector((state) => state.user);
  console.log("aaaa");
  //   console.log(user);
  //   console.log(auth.currentUser)

  
  // Actualizar fondeo en base de datos
  const handleFunding = (tokenQuantityParam) => {
    const tokenQuantity2 = 20;
    updateTokenQuant("users", auth.currentUser.uid, tokenQuantity2);
    // TODO: 20/9 pasar a un componente que sea FONDEO
    console.log("Fondos actualizados");
  };

  // Actualizar aidrop en base de datos
  const handleAirdrop = () => {
    const tokenQuantity = 100;
    // TODO: 20/9 pasar al registro

    updateData("users", auth.currentUser.uid, {
      tokenQuantity,
    });
    console.log("Airdrop dado");
  };

  // TODO: 20/9 ver si esto es necesario (enviar plata otro usuario dentro del juego)
//   const handleTransferIngame = (tokenQuantity, userMail) => {
//     // Actualizar aidrop en base de datos
//     // TODO: pasar al registro
//     updateData("users", auth.currentUser.uid, {
//       tokenQuantity,
//     });
//     console.log("Airdrop dado");
//   };

  return (
    <div>
      {/* TODO: 20/9 ver si loadingText tiene sentido (preg a Marcos) */}
      {/* TODO: Ver si transferIngame esto es necesario */}
      {/* <Button
        loadingText="Loading"
        size="lg"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
        type="submit"
        onClick={handleTransferIngame}>
        Enviar token a otro usuario
      </Button> */}
      <Button
        loadingText="Loading"
        size="lg"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
        type="submit"
        onClick={handleFunding}>
        Fondeo
      </Button>
      <Button
        loadingText="Loading"
        size="lg"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
        type="submit"
        onClick={handleAirdrop}>
        Dar Airdrop
      </Button>
    </div>
  );
};

export default TestTB;
