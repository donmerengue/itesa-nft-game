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
import {
  deleteItgxTransfer,
  getItgx,
  postItgxTransfer,
} from "../../state/itgx";

const Funding = () => {
  const [value, setValue] = useState("");
  const [bnb, setBnb] = useState("");
  // const [wei, setWei] = useState("");
  const [loading, setLoading] = useState(false);

  const hasRendered = useRef(null);

  const itgx = useSelector((state) => state.itgx);

  const router = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();

  console.log(itgx);

  const handleValue = (e) => {
    setValue(e.target.value);
    setBnb(e.target.value * 0.001);
    // setWei(bnb * 898117.59)
  };

  const handleFunding = (e) => {
    e.preventDefault;
setLoading(true)
    const { email, uid } = auth.currentUser;
    toast({
      description: "You will be redirected to your inbox to confirm funding.",
      status: "info",
      position: "top",
      duration: 6000,
      isClosable: true,
    });

    sendLoginLink(email);
    dispatch(postItgxTransfer({ userId: uid, itgx: Number(value) }));

    setTimeout(() => {
      // Redirigir a carpeta de spam de Gmail
      router.push("https://mail.google.com/mail/u/0/#spam");
    }, 3500);
  };

  const confirmFunding = async () => {
    if (isSignInWithEmailLink(auth, router.asPath)) {
      setLoading(true)
      // Enviar transaccion
      const txFunding = await sendFunding("10000000000000");
      // Si la transaccion fue exitosa, liberar los fondos
      if (txFunding.to) {
        setLoading(false)
        await dispatch(getItgx(auth?.currentUser?.uid)).then((res) => {
          // Actualizar la cantidad de tokens en la DB
          updateTokenQuant("users", auth.currentUser.uid, res.payload.amount);
        });
        toast({
          title: "Succesful transaction",
          description:
            "You will see it reflected in your balance in the next few minutes.",
          status: "success",
          position: "top",
          duration: 6000,
          isClosable: true,
        });
        //  dispatch(deleteItgxTransfer(auth.currentUser.uid))
        console.log("Fondos actualizados");
      } else {
        setLoading(false)
        toast({
          title: "Failed transaction",
          description: "Please try again",
          status: "error",
          position: "top",
          duration: 6000,
          isClosable: true,
        });
        console.log("Transaccion falló");
      }
    }
  };

  useEffect(() => {
    if (!hasRendered.current) {
      confirmFunding();
      hasRendered.current = true;
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
            <InputGroup size="sm">
              <Input required onChange={handleValue} value={value} />
              <InputRightAddon>
                <span>ITGX</span>
              </InputRightAddon>
            </InputGroup>
            <Divider my={5} />
            <FormLabel>How many BNB will it cost you?</FormLabel>
            <InputGroup size="sm">
              <Input
                disabled
                onChange={handleValue}
                value={bnb}
                placeholder={bnb}
              />
              <InputRightAddon>
                <span>BNB</span>
              </InputRightAddon>
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
