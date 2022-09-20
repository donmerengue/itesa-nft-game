import React from "react";

const TestTB = () => {
  // TODO: 20/9 ver si esto es necesario (enviar plata otro usuario dentro del juego)
  //   const handleTransferIngame = (tokenQuantity, userMail) => {
  //     // Actualizar aidrop en base de datos
  //     // TODO: pasar al registro
  //     updateData("users", auth.currentUser.uid, {
  //       tokenQuantity,
  //     });
  //     console.log("Transferencia a otro usario enviada");
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
    </div>
  );
};

export default TestTB;
