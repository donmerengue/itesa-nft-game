import { Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import {
  addToken,
  isMetamaskInstalled,
  switchNetwork,
} from "../../utils/blockchain/tokenOperations";

const WalletInstructions = () => {
  const handleMetamask = () => {
    isMetamaskInstalled();
  };

  const handleSwitch = () => {
    switchNetwork();
  };

  const handleAddToken = () => {
    addToken();
  };

  return (
    <>
      <Text>
        1. Necesitas tener Metamask instalado. Para comprobarlo, haz click
        en el siguiente boton.
      </Text>
      <Button variant={"ghost"} onClick={handleMetamask}>
        Comprobar
      </Button>
      <Text>
        2. Si tienes Metamask, puedes continuar con la importacion.{" "}
        <a
          href="https://metamask.io/download/"
          target="_blank"
          rel="noopener noreferrer">
          Si no, instalalo desde la pagina de{" "}
          <Button variant={"ghost"}>Metamask </Button>
        </a>
      </Text>
      <Text>
        Luego de haber instalado metamask te preguntara si eres nuevo
        usuario. <br /> Como ya cuentas con una frase de recuperacion
        proporcionada en el momento de registro debes dar al boton{" "}
        <strong>importar wallet.</strong>
      </Text>
      <Image
        src="https://i.imgur.com/UM09s6d.png"
        alt="import wallet"
        height={196}
        width={426}
      />
      <br></br>
      <Text>
        Puedes copiar y pegar tu frase secreta en los campos vacios de la
        pantalla. <br></br>
        Creas una contraseña para usar metamask y pulsas el boton{" "}
        <strong>Import</strong> que se encuentra al final de la pantalla
      </Text>
      <Image
        src="https://i.imgur.com/5h8jnKW.png"
        alt="import wallet"
        height={392}
        width={370}
      />
      <Text>
        Metamask te confirmara la importacion de la cuenta, le das a
        aceptar a los avisos y continuas con los siguientes pasos:
      </Text>

      <Text>
        Agregar la red para los tokens pulsando el siguiente{" "}
        <Button variant={"ghost"} onClick={handleSwitch}>
          boton{" "}
        </Button>
        para que puedas ver tus ITGX recibidos. Aprueba la operacion y
        luego cambia la red.
      </Text>
      <Text>Al abrir Metamask, deberias estar viendo esta imagen:</Text>
      <Image
        src="https://i.imgur.com/9wYiTTt.png"
        alt="chain"
        height={50}
        width={262}
      />

      <Text>
        El ultimo paso es para agregar el token desde este{" "}
        <Button variant={"ghost"} onClick={handleAddToken}>
          boton{" "}
        </Button>
        . Una vez pulsado acepta los cambios y deberias poder verlos en tu
        wallet metamask.
      </Text>
    </>
  );
};

export default WalletInstructions;
