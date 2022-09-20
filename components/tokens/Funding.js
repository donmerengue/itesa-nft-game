import React, { useState } from "react";
import { auth } from "../../firebase/firebase-config";
import { updateTokenQuant } from "../../fetchData/controllers";
import { sendTokens } from "../../utils/blockchain/tokenOperations";
import { Button } from "@chakra-ui/react";

const Funding = () => {
  // valor a enviar
  const [value, setValue] = useState("");
  // address que recibira los tokens
  const [addressSender, setAddressSender] = useState("");
  // Seteamos la cantidad de tokens para enviar
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  // Seteamos el address del emisor
  const handleAddressSender = (e) => {
    setAddressSender(e.target.value);
    console.log(addressSender);
  };

  // Enviando tokens a la cuenta custodio
  const send = async (e) => {
    e.preventDefault();
    await sendTokens("0x52Ec083D30192691872B60334bFDd1450C1826d9", value);
    setAddressSender("");
    setValue("");
  };

  // Actualizar fondeo en base de datos
  const handleFunding = (tokenQuantityParam) => {
    const tokenQuantity2 = 20;
    updateTokenQuant("users", auth.currentUser.uid, tokenQuantity2);
    // TODO: 20/9 pasar a un componente que sea FONDEO
    console.log("Fondos actualizados");
  };

  return (
    <div>
      <form onSubmit={send}>
        <label>
          Tokens a transferir 💸
          <input type="text" onChange={handleValue} value={value} />{" "}
        </label>
        <br />
        <label>
          Address donde envio tokens:
          <input
            type="text"
            onChange={handleAddressSender}
            value={addressSender}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
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
    </div>
  );
};

export default Funding;
