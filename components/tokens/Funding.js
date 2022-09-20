import React from "react";
import { auth } from "../../firebase/firebase-config";
import { updateTokenQuant } from "../../fetchData/controllers";
import { Button } from "@chakra-ui/react";

const Funding = () => {
  // Actualizar fondeo en base de datos
  const handleFunding = (tokenQuantityParam) => {
    const tokenQuantity2 = 20;
    updateTokenQuant("users", auth.currentUser.uid, tokenQuantity2);
    // TODO: 20/9 pasar a un componente que sea FONDEO
    console.log("Fondos actualizados");
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
        onClick={handleFunding}>
        Fondeo
      </Button>
    </div>
  );
};

export default Funding;
