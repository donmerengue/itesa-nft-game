import {
  Stack,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link,
  Box,
  Wrap,
  Spinner,
  Container,
  Center,
} from "@chakra-ui/react";
import { increment } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewDoc,
  getDocumento,
  getEqNFTitems,
  getRival,
  updateData,
  updateTokenQuant,
} from "../../fetchData/controllers";
import { auth } from "../../firebase/firebase-config";
import { getArena } from "../../state/arena";
import { getAvatar } from "../../state/avatar";
import {
  getLoserUser,
  getTotalPower,
  getWinnerUser,
} from "../../utils/gameplay/battles";
import { levelUp } from "../../utils/gameplay/levelUp";
import AvatarGamer from "./avatarGamer";
import AvatarRandom from "./avatarRandom";

const ArenaCopy = () => {
  const router = useRouter();
  const avatar = useSelector((state) => state.avatar);
  const user = useSelector((state) => state.user);
  const arena = useSelector((state) => state.arena);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAvatar(auth?.currentUser?.uid));
    dispatch(getArena(user?.level));
  }, [user]);

  const handlePlay = async () => {
    // ID del usuario loggeado
    const uid = auth.currentUser.uid;
    // NFT-items propios
    const nftOwn = await getEqNFTitems("nft", uid);
    // Obtener total poder propio
    const totalOwnPower = getTotalPower(nftOwn);

    // Obtener rival
    const rival = await getRival("users", uid);
    // NFT-items del rival
    const nftRival = await getEqNFTitems("nft", rival.uid);
    // Obtener total poder rival
    const totalRivalPower = getTotalPower(nftRival);

    // Usuario ganador
    const winnerUser = getWinnerUser(
      totalOwnPower,
      uid,
      totalRivalPower,
      rival.uid
    );

    // Usuario perdedor
    const loserUser = getLoserUser(
      totalOwnPower,
      uid,
      totalRivalPower,
      rival.uid
    );

    // Agregar registro de partida a collecion de matches (general)
    const now = new Date();
    const matchesData = {
      date: now,
      user1: uid,
      user2: rival.uid,
      winner: winnerUser,
    };
    await addNewDoc("matches", matchesData);
    // Traer data del usuario
    const winnerUserStats = await getDocumento("user-stats", winnerUser);
    // TODO: Actualizar estadisticas de batalla del usuario
    const dataBattlesWinner = {
      battlesTotal: increment(1),
      battlesWon: increment(1),
    };
    updateData("user-stats", winnerUser, dataBattlesWinner);

    const dataBattlesLoser = {
      battlesTotal: increment(1),
      battlesLost: increment(1),
    };
    updateData("user-stats", loserUser, dataBattlesLoser);

    // Prize per win
    await updateTokenQuant("users", winnerUser, 2);

    // Determinar aumento de experiencia y nivel
    const dataLevelExp = levelUp(
      winnerUserStats.experience + 1,
      winnerUserStats.level
    );
    // Actualizar nivel en coleccion de user-stats
    await updateData("user-stats", winnerUser, dataLevelExp);
    // Actualizar nivel en coleccion de users
    await updateData("users", winnerUser, { level: dataLevelExp.level });
  };

  return (
    <>
      <Box
        w={"full"}
        h={"100vh"}
        backgroundSize={"cover"}
        backgroundImage={arena?.planet}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Stack maxW={"2xl"} align={"flex-center"} spacing={6}>
            <Text
              mt={10}
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              {router.asPath === "/arena"
                ? "ARE YOU READY TO PLAY?"
                : "LET'S PLAY!"}
            </Text>

            <Text
              mt={8}
              color={"white"}
              fontWeight={400}
              lineHeight={1}
              fontSize={useBreakpointValue({ base: "3xl", md: "3xl" })}
              textAlign="center"
            >
              {router.asPath === "/arena" && "Choose Your Equipment!"}
            </Text>
          </Stack>
        </VStack>

        {arena ? (<>
          <Wrap justify={"center"} columns={2} spacing={300}>
            <AvatarGamer />
            {router.asPath === "/play" && <AvatarRandom />}
          </Wrap>
        

        <VStack
          w={"full"}
          justify={"center"}
          // px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Stack direction={"row"} justify={"center"}>
            <Link href="/arena/game">
              <Button
                bg={"gray.800"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                BACK
              </Button>
            </Link>
            {/* <Link href="/play"> */}
            <Button
              bg={"gray.800"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              onClick={handlePlay}
            >
              START BATTLE
            </Button>
            {/* </Link> */}
        </Stack>
        </VStack>
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
export default ArenaCopy;
