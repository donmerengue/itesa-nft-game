import React, { useEffect, useRef, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import {
  deleteData,
  getDocumento,
  updateData,
  updateTokenQuant,
} from "../../fetchData/controllers";

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
import { increment } from "firebase/firestore";

const Funding = () => {
  const user = useSelector((state) => state.user);
  const [value, setValue] = useState("");
  const [bnb, setBnb] = useState("");
  // const [wei, setWei] = useState("");
  const [loading, setLoading] = useState(false);

  const hasRendered = useRef(null);

  const itgx = useSelector((state) => state.itgx);

  const router = useRouter();
  const dispatch = useDispatch();
  const toast = useToast();
  const convertDecimal = (n) => Number(n) * 1000000000000000000;

  let bnbDecimal;
  const handleValue = (e) => {
    setValue(e.target.value);
    setBnb(e.target.value * 0.001);
    // setWei(bnb * 898117.59)
  };
  bnbDecimal = convertDecimal(bnb);
  console.log("bnbDecimal debajo del handleValue ", bnbDecimal);

  const handleFunding = (e) => {
    e.preventDefault;
    setLoading(true);
    const { email, uid } = auth.currentUser;
    toast({
      description: "You will be redirected to your inbox to confirm funding.",
      status: "info",
      position: "top",
      duration: 6000,
      isClosable: true,
    });

    //mandar link
    sendLoginLink(email);
    dispatch(
      postItgxTransfer({ userId: uid, itgx: Number(value), bnb: bnbDecimal })
    );

    setTimeout(() => {
      // Redirigir a carpeta de spam de Gmail
      router.push("https://mail.google.com/mail/u/0/#spam");
    }, 3500);
  };

  const confirmFunding = async () => {
    setTimeout(async () => {
      if (isSignInWithEmailLink(auth, router.asPath)) {
        setLoading(true);
        //traer de la db la cantidad de bnb a depositar
        const transfer = await getDocumento("transfers",auth?.currentUser?.uid);

        // Enviar transaccion
        const txFunding = await sendFunding(transfer.bnb.toString(16));

        // Si la transaccion fue exitosa, liberar los fondos
        if (txFunding.to) {
          setLoading(false);
          // Actualizar la cantidad de tokens del usuario en la DB
          updateTokenQuant("users", auth.currentUser.uid, transfer.amount);
          // Actualizar nuestro saldo virtual
          updateData("virtualBalance", "1", {
            ITGX: increment(-transfer.amount),
          });

          toast({
            title: "Succesful transaction",
            description:
              "You will see it reflected in your balance in the next few minutes",
            status: "success",
            position: "top",
            duration: 6000,
            isClosable: true,
          });
        } else {
          setLoading(false);
          toast({
            title: "Failed transaction",
            description: "Check your Metamask connection",
            status: "error",
            position: "top",
            duration: 6000,
            isClosable: true,
          });
        }
        deleteData("transfers",auth.currentUser.uid)
      }
    }, 1000);
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
