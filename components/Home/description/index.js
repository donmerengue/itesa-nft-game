import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Description = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={"url(https://i.imgur.com/oSysA4g.png)"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}>
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
              WELCOME TO INTERGALAXY
            </Text>

            <Text
              color={"white"}
              fontWeight={500}
              lineHeight={1.5}
              fontSize={useBreakpointValue({ base: "3xl", md: "2xl" })}>
              Intergalaxy is a 2D play to earn NFT game linked to Metamask.
              Your mission will be to travel around the galaxy winning as
              many battles as possible. Intergalaxy has 5 planets, and each
              planet will host a different combat arena grouping fighters
              by level. As your performance increases, you will be able to
              buy NFT accessories, which will help you gain a greater
              advantage over your rival. You can also sell your avatar and
              even win NFT Prizes! What are you waiting to play?
            </Text>
            <Stack direction={"row"}>
              {!user ? (
                <Link href="/login">
                  <Button
                    bg={"blue.400"}
                    rounded={"full"}
                    color={"white"}
                    _hover={{ bg: "blue.500" }}>
                    LOGIN
                  </Button>
                </Link>
              ) : (
                ""
              )}
              <Link href="/arena">
                <Button
                  bg={"blue.400"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "whiteAlpha.300" }}>
                  PLAY NOW
                </Button>
              </Link>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
};

export default Description;
