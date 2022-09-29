import {
  Stack,
  Button,
  VStack,
  useBreakpointValue,
  Link,
  Box,
  Wrap,
  Spinner,
  Center,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { increment } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewDoc,
  getDailyMatches,
  getDocumento,
  getEqNFTitems,
  updateData,
  updateTokenQuant,
} from "../../fetchData/controllers";
import { auth } from "../../firebase/firebase-config";
import { getArena } from "../../state/arena";
import { getUserAvatar } from "../../state/avatar";
import dailyMatchesReducer from "../../state/dailyMatches";
import { getRivalData } from "../../state/rival";
import { getRivalAvatar } from "../../state/rivalAvatar";
import {
  getLoserUser,
  getTotalPower,
  getWinnerUser,
} from "../../utils/gameplay/battles";
import {
  experiencePerBattle,
  levelUp,
} from "../../utils/gameplay/levelUp";
import AvatarGamer from "./UserAvatar";
import RivalAvatar from "./RivalAvatar";

const ArenaCopy = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const arena = useSelector((state) => state.arena);
  const rival = useSelector((state) => state.rival);
  const [winner, setWinner] = useState(false);
  const [reward, setReward] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAvatar(auth?.currentUser?.uid));
    dispatch(getArena(user?.level));
    dispatch(getRivalData(auth.currentUser?.uid));
  }, [user]);

  useEffect(() => {
    dispatch(getRivalAvatar(rival?.uid));
  }, [rival]);

  const handlePlay = async () => {
    // ID del usuario loggeado
    const uid = auth.currentUser.uid;
    // NFT-items propios
    const nftOwn = await getEqNFTitems(uid);

    // Obtener total poder propio
    const totalOwnPower = await getTotalPower(nftOwn);

    // NFT-items del rival
    const nftRival = await getEqNFTitems(rival.uid);
    // Obtener total poder rival
    const totalRivalPower = await getTotalPower(nftRival);

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

    setWinner(winnerUser);

    // Agregar registro de partida a collecion de matches (general)
    const now = new Date();
    const fullfecha = `${now.getDate()}/${
      now.getMonth() + 1
    }/${now.getFullYear()}`;

    const matchesData = {
      date: fullfecha,
      user1: uid,
      user2: rival.uid,
      winner: winnerUser,
    };
    await addNewDoc("matches", matchesData);

    // Traer data del usuario
    const winnerUserStats = await getDocumento("user-stats", winnerUser);
    // Actualizar estadisticas de batalla del usuario ganador
    const dataBattlesWinner = {
      battlesTotal: increment(1),
      battlesWon: increment(1),
    };
    updateData("user-stats", winnerUser, dataBattlesWinner);

    // Actualizar estadisticas de batalla del usuario perdedor
    const dataBattlesLoser = {
      battlesTotal: increment(1),
      battlesLost: increment(1),
    };
    updateData("user-stats", loserUser, dataBattlesLoser);

    // Obtener cantidad de batallas diarias del usuario
    const dailyMatches = await getDailyMatches(uid);
    console.log("today's matches", dailyMatches);

    // Prize per win (hasta 5 batallas) solo para quien inicio la batalla
    const prizeParams = await getDocumento("gameParams", "prizeParams");
    if (dailyMatches.length < 5) {
      const { prizePerWin } = prizeParams;

      // Actualizar saldo del usuario ganador si fue el que inició la batalla
      if (winnerUser == uid) {
        await updateTokenQuant("users", winnerUser, prizePerWin);
        // Actualizar nuestro saldo virtual
        updateData("virtualBalance", "1", {
          ITGX: increment(-prizePerWin),
        });
      }
    }

    // Prize per win apuestas (post 5 batallas)
    if (dailyMatches.length >= 5) {
      // Parametros de premios
      const { betPerBattle } = prizeParams; // Apuesta de cada jugador por batalla
      const { feePerBattle } = prizeParams; // Fee (tasa) retenida por el juego por batalla
      const { prizePerWinBet } = prizeParams; // Pozo de ganancia por batalla
      const totalWonBet = prizePerWinBet - betPerBattle; // Ganancia total neta por batalla
      setReward(totalWonBet);

      // Actualizar saldos virtuales de cada jugador
      await updateTokenQuant("users", winnerUser, totalWonBet);
      await updateTokenQuant("users", loserUser, -betPerBattle);

      // Actualizar nuestro saldo virtual
      updateData("virtualBalance", "1", {
        ITGX: increment(feePerBattle),
      });
    }

    // Determinar aumento de experiencia y nivel
    const expAfterBattle = await experiencePerBattle(
      winnerUserStats.experience
    );
    // Actualizar experiencia y nivel
    const dataLevelExp = await levelUp(
      expAfterBattle,
      winnerUserStats.level
    );
    // Actualizar nivel en coleccion de user-stats
    await updateData("user-stats", winnerUser, dataLevelExp);
    // Actualizar nivel en coleccion de users
    await updateData("users", winnerUser, { level: dataLevelExp.level });

    console.log("PARTIDA FINALIZADA");
  };

  return (
    <>
      <Box
        w={"full"}
        h={"100vh"}
        backgroundSize={"cover"}
        backgroundImage={arena?.planet}
        backgroundPosition={"center center"}>
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}>
          <Stack maxW={"2xl"} align={"flex-center"} spacing={6}>
            {!winner ? (
              <Heading
                mt={10}
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                // fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                {"LET'S PLAY!"}
              </Heading>
            ) : (
              <Stack maxW={"2xl"} align={"flex-center"} spacing={6}>
                <Heading
                  mt={10}
                  color={"white"}
                  fontWeight={700}
                  lineHeight={1.2}
                  // fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                >
                  {winner === auth.currentUser?.uid ? (
                    <>
                      GANASTE PAPÁ!
                      <Center>
                        <Image
                          mt={5}
                          boxSize="100px"
                          src="https://imgur.com/8Y4nDNr.png"
                        />
                      </Center>
                      {reward ? <Text>You won {reward} ITGX</Text> : ""}
                    </>
                  ) : (
                    <>
                      PERDISTE BOBY
                      <Center>
                        <Image
                          mt={5}
                          boxSize="100px"
                          src="https://i.imgur.com/GkTTm2z.png"
                        />
                      </Center>
                      {reward ? <Text>You lost the bet </Text> : ""}
                    </>
                  )}
                </Heading>
              </Stack>
            )}
          </Stack>
        </VStack>

        {arena ? (
          <>
            <Wrap justify={"center"} columns={2} spacing={300}>
              <AvatarGamer />
              {router.asPath === "/play" && rival ? (
                <RivalAvatar />
              ) : (
                <Center>
                  <Spinner size="xl" />
                </Center>
              )}
            </Wrap>

            <VStack w={"full"} justify={"center"}>
              <Stack direction={"row"} justify={"center"}>
                <Link href="/arena">
                  <Button
                    bg={"gray.800"}
                    rounded={"full"}
                    color={"white"}
                    _hover={{ bg: "blue.500" }}>
                    BACK
                  </Button>
                </Link>
                {!winner ? (
                  <Button
                    bg={"gray.800"}
                    rounded={"full"}
                    color={"white"}
                    _hover={{ bg: "blue.500" }}
                    onClick={handlePlay}>
                    START BATTLE
                  </Button>
                ) : (
                  <Link href="/play">
                    <Button
                      bg={"gray.800"}
                      rounded={"full"}
                      color={"white"}
                      _hover={{ bg: "blue.500" }}>
                      PLAY AGAIN
                    </Button>
                  </Link>
                )}
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
