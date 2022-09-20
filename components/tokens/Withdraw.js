import React from "react";
import { Button } from "@chakra-ui/react";

const Withdraw = () => {
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
    </div>
  );
};

export default Withdraw;
