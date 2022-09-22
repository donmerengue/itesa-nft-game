import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { isSignInWithEmailLink } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { sendFunding } from "../../utils/blockchain/tokenOperations";

const CheckOut = () => {
    const router = useRouter();
  
      

  return (
    <Container maxW="container.sm">
      <Box textAlign="center" py={10} px={6}>
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
         Funding complete
        </Heading>
        <Text color={"gray.500"}>
         Check out your profile to see your ITGX. 

        </Text>
        <Container p={"4"}>
        </Container>
      </Box>
    </Container>
  );
};

export default CheckOut;
