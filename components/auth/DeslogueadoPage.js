import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { sendEmailVerification } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase-config";
import { getURLPath } from "../../utils/auth/getURL";

const DeslogueadoPage = () => {
  const router = useRouter();

  const urlPath = getURLPath();
  const [userAuth, loading, error] = useAuthState(auth);

  // Redirigir a Home luego de verificar mail
  const handleVerify = () => {
    let url;
    //   // Redirigir a localhost si viene de localhost
    if (
      urlPath?.pathname === "/verify" &&
      urlPath?.origin === "http://localhost:3000"
    )
      url = "http://localhost:3000/";
    // Redirigir a Vercel si viene de Vercel
    else url = "https://itesa-nft-game.vercel.app/";

    const actionCodeSettings = {
      // URL you want to redirect back to
      url,
    };
    // Reenviar mail de verificacion
    sendEmailVerification(userAuth, actionCodeSettings);
  };

  return (
    <Container maxW="container.sm" mb={"375px"}>
      <Box textAlign="center" py={10} px={6}>
        <InfoOutlineIcon boxSize={"50px"} color={"blue.200"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
        Unlogged user
        </Heading>
        <Text color={"gray.500"}>
          Please login to enjoy all of
          Intergalaxy features.
        </Text>
        <br></br>
        <Link href="/login">
        <button>
          Login
        </button>
        </Link>
        <br></br>
        <Link href="/">
          <a>Go Back Home</a>
        </Link>
      </Box>
    </Container >
  );
};

export default DeslogueadoPage;
