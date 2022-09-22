import React, { useEffect, useRef, useState } from "react";
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
import sendLoginLink from "../../utils/auth/loginLink";
import { useRouter } from "next/router";
import { isSignInWithEmailLink } from "firebase/auth";
import { sendFunding } from "../../utils/blockchain/tokenOperations";
import { useDispatch, useSelector } from "react-redux";
import { getItgx } from "../../state/itgx";



const Funding = () => {
  
  const [value, setValue] = useState("");
  const [bnb, setBnb] = useState("");
  const [wei, setWei]= useState("")
  const [loading, setLoading] = useState(false)
  const hasRendered = useRef(null);
  const itgx = useSelector(state=>state.itgx)
  const router = useRouter();
const dispatch = useDispatch()

console.log(itgx);
  
  const handleValue = (e) => {
    setValue(e.target.value);
    setBnb(e.target.value * 0.001);
    // setWei(bnb * 898117.59)
  };
  
  
  const handleFunding = (e) =>{
    e.preventDefault
    const { email } = auth.currentUser;
    sendLoginLink(email);
    dispatch(getItgx(value))

  setTimeout(() => {
    // Redirigir a carpeta de spam de Gmail
    router.push("https://mail.google.com/mail/u/0/#spam");
  }, 2500);
}

const confirmFunding = async () => {
  if (isSignInWithEmailLink(auth, router.asPath)) {
    // Enviar transaccion
    const txFunding = await sendFunding("10000000000000");
    // Si la transaccion fue exitosa, liberar los fondos
    if (txFunding.to) {
      console.log(txFunding);
      const tokenQuantity2 = itgx;
      // Actualizar la cantidad de tokens en la DB
      updateTokenQuant("users", auth.currentUser.uid, tokenQuantity2);
      console.log("Fondos actualizados");
      return "ok";
    } else {
      console.log("Transaccion falló");
    }
  }
};

useEffect(() => {
  if (!hasRendered.current){

    confirmFunding();
  hasRendered.current = true
  }


}, []);

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
        <form>
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
              onClick={handleFunding}
            >
              Continue
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default Funding;
