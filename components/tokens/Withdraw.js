import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { updateTokenQuant } from "../../fetchData/controllers";
import { auth } from "../../firebase/firebase-config";

const Withdraw = () => {
  // valor a enviar
  const [value, setValue] = useState("");
    // address que recibira los tokens
    const [addressReceiver, setAddressReceiver] = useState("")
  // Seteamos la cantidad de tokens para enviar
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  // Seteamos el address del receptor
  const handleAddressReceiver = (e) => {
    setAddressReceiver(e.target.value);
    console.log(addressReceiver);
  };

  // Enviando tokens desde el emisor del token
  const send = async (e) => {
    e.preventDefault();
    await sendTokens(addressReceiver, value);
    setAddressReceiver("");
    setValue("");
  };

  // Actualizar retiro en base de datos
  const handleWithdraw = (tokenQuantityParam) => {
    const tokenQuantity2 = -20;
    updateTokenQuant("users", auth.currentUser.uid, tokenQuantity2);
    // TODO: 20/9 pasar a un componente que sea RETIRO
    console.log("Fondos retirados y actualizados");
  };

  return (
    <div>
      <Button
        loadingText="Loading"
        size="lg"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
        type="submit"
        onClick={handleWithdraw}>
        Retiro
      </Button>

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
            onChange={handleAddressReceiver}
            value={addressReceiver}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Withdraw;
