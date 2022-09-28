import {
  Stack,
  VStack,
  Link,
  Heading,
  Box,
  Center,
  Spinner,
  WrapItem,
  Wrap,
  Highlight,
  Container,
  Text,
  Divider,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
// Components
import { getArena } from "../../../state/arena";
import AvatarGamer from "../avatarGamer";
import GameAccessories from "./gameAccessories";
// Firebase
import { auth } from "../../../firebase/firebase-config";
// React
import { useEffect } from "react";
// Redux Store
import { useDispatch, useSelector } from "react-redux";
import { getUserAvatar } from "../../../state/avatar";
import { getItems } from "../../../state/nftItems";
import { getItemsEquipped } from "../../../state/nftEquipped";
import { getMatches } from "../../../state/dailyMatches";

const PlayGame = () => {
  const dispatch = useDispatch();
  const arena = useSelector((state) => state.arena);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    //Traer Avatar con el uid que nos da auth
    dispatch(getUserAvatar(auth?.currentUser?.uid));
    //Traer NFT Items con el uid que nos da auth
    dispatch(getItems(auth.currentUser?.uid));
    //Setear Arena dependiendo del nivel del user
    dispatch(getArena(user?.level));
    //Traer nfts equipados
    dispatch(getItemsEquipped(auth.currentUser?.uid));
    // Consultar cantidad de partidas diarias del usuario
    dispatch(getMatches(auth.currentUser?.uid));
  }, [user]);

  const { isOpen, onToggle } = useDisclosure()


  return (
    <>
      <Box
        w={"full"}
        h={"100vh"}
        backgroundSize={"cover"}
        backgroundImage={arena?.planet}
        backgroundPosition={"center center"}>
        {arena ? (
          <>
            <VStack w={"full"} justify={"center"}>
              <Stack maxW={"2xl"} align={"flex-center"} spacing={6}>
                <Heading
                  mt={10}
                  color={"white"}
                  fontWeight={700}
                  lineHeight={1.2}
                  // fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                >
                  ARE YOU READY TO PLAY?
                </Heading>
              </Stack>
            </VStack>

            <Wrap mt={20} justify={"center"} columns={2} spacing={200}>
              {/* <GameAvatar/> */}
              <AvatarGamer />
              <GameAccessories />
            </Wrap>
          </>
        ) : (
          <Center>
            <Spinner size="xl" />
          </Center>
        )}
      </Box>
    </>
  );
};
export default PlayGame;

{/* <Box
     mt={10}
     mb={10}
     role={"group"}
     p={6}
     maxW={"330px"}
     w={"full"}
     bg={"gray.800"}
     color={"white"}
     boxShadow={"2xl"}
     rounded={"lg"}
     align={"center"}
     justifyContent={"center"}
>

<Text fontSize="3xl">
<Highlight
  query={["bet", "3 ITGX", "unlimited fee fights."]}
  styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
  >
 You have already made your 5 free daily fights available. 
  You have unlimited fee fights.
</Highlight>
</Text>
<Divider my={5}/>
<Text fontSize={"2xl"}>
To fight again you can place a bet of 3 ITGX. If you win, you get the reward, otherwise you lose your bet.
</Text>
<Button onClick={onToggle}>Click Me</Button>
<Fade in={isOpen}>
<Box
p='40px'
color='white'
mt='4'
bg='teal.500'
rounded='md'
shadow='md'
>
Fade
</Box>
</Fade>
  </Box> */}