import React, { useState } from "react";
import { auth } from "../../firebase/firebase-config";
import { updateTokenQuant } from "../../fetchData/controllers";

import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  useToast,
} from "@chakra-ui/react";




const Funding = () => {

  const [value, setValue] = useState("");
  const [bnb, setBnb] = useState("");

  const [loading, setLoading] = useState(false)

  const handleValue = (e) => {

    setValue(e.target.value);
    setBnb(e.target.value * 0.001);
  };
  


  // Actualizar fondeo en base de datos
  const handleFunding = (tokenQuantityParam) => {
    const tokenQuantity2 = 20;
    updateTokenQuant("users", auth.currentUser.uid, tokenQuantity2);
    // TODO: 20/9 pasar a un componente que sea FONDEO
    console.log("Fondos actualizados");
  };

const onSubmit = () =>{

}

  return (

    <>
       <Stack
        boxShadow={"lg"}
        spacing={8}
        mx={"auto"}
        my={20}
        maxW={"xl"}
        py={12}
        px={12}
        bg={"white"}
      >
        <Heading>Funding</Heading>
        <form onSubmit={onSubmit}>
          <FormControl>
            <FormLabel>Amount 💸</FormLabel>
            <InputGroup size='sm'>
            <Input required onChange={handleValue} value={value} />
            <InputRightAddon ><span>ITGX</span></InputRightAddon>
            </InputGroup>
            <Divider my={5}/>
            <FormLabel>How many BNB will it cost you?</FormLabel>
            <InputGroup size='sm'>
            <Input disabled onChange={handleValue} value={bnb} placeholder={bnb}/>
            <InputRightAddon ><span>BNB</span></InputRightAddon>
            </InputGroup>
          </FormControl>
          <Stack boxSize={"fit-content"} mt={8} justify={"end"}>
            <Button
              loadingText="Loading"
              isLoading={loading}
              size="md"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              type="submit"
            >
              Continue
            </Button>
          </Stack>
        </form>
      </Stack>
      {/* <Button

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
      </Button> */}
    </>
  );
};

export default Funding;
