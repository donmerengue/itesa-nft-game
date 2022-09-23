import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";

import {
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const Balance = () => {
  //Traer info del usuario logueado
  useAuth();
  const user = useSelector((state) => state.user);

  const itgx = user?.tokenQuantity;

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
        <Heading>Balance</Heading>
        {itgx ? (
          <Text>
            You have <strong>{itgx} ITGX</strong>
          </Text>
        ) : (
          <Text>Loading...</Text>
        )}
      </Stack>
    </>
  );
};

export default Balance;
