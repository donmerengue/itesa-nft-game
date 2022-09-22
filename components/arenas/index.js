import {
  Stack,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link,
  Heading,
  Box,
  Center,
  WrapItem,
  Wrap,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvatar } from "../../state/avatar";
import AvatarGamer from "./avatarGamer";
import AvatarRandom from "./avatarRandom";

const ArenaOne = () => {
  const router = useRouter();
  const avatar = useSelector((state) => state.avatar);

<<<<<<< HEAD
    const avatar = useSelector(state => state.avatar)
    const dispatch = useDispatch()
    const [arena, setArena] = useState('')
   /*  const arenaLevel = useParams() */
  
     /* useparam con un use effect, ruta dinamica
     */
    const images = {
        planet1: "url(https://imgur.com/qxGy6KM.jpg)",
        planet2: "url(https://imgur.com/qeSAqBu.jpg)",
        planet3: "url(https://imgur.com/wkT0Riu.jpg)",
        planet4: "url(https://imgur.com/kFYGOdQ.jpg)",
        planet5: "url(https://imgur.com/2ZImUtf.jpg)"
    }; 

    function bgLevel(images) {
        if (avatar) {
            if (avatar.level <= 10) {
                  setArena(images.planet1) 
                 console.log('imagen1--->', images.planet1)
            } else if (avatar.level > 10 && avatar.level <= 20) {
                 setArena(images.planet2)
                 console.log('imagen2--->', images.planet2)
            } else if (avatar.level > 20 && avatar.level <= 30) {
                 setArena(images.planet3) 
                 console.log('imagen3--->', images.planet3)
            } else if (avatar.level > 30 && avatar.level <= 40) {
                  setArena(images.planet4) 
                 console.log('imagen4--->', images.planet4)
            } else if (avatar.level > 40 && avatar.level < 50) {
                  setArena(images.planet5) 
                 console.log('imagen5--->', images.planet5)
            }
        }
=======
  const dispatch = useDispatch();

  const [arena, setArena] = useState("url(https://imgur.com/qxGy6KM.jpg)");
  console.log("ARENA----->", arena);

  const images = {
    planet1: "url(https://imgur.com/qxGy6KM.jpg)",
    planet2: "url(https://imgur.com/qeSAqBu.jpg)",
    planet3: "url(https://imgur.com/wkT0Riu.jpg)",
    planet4: "url(https://imgur.com/kFYGOdQ.jpg)",
    planet5: "url(https://imgur.com/2ZImUtf.jpg)",
  };

  console.log("router.asPath", router.asPath);

  function bgLevel(images) {
    if (avatar) {
      if (avatar.level <= 10) {
        setArena(images.planet1);
      } else if (avatar.level > 10 && avatar.level <= 20) {
        setArena(images.planet2);
      } else if (avatar.level > 20 && avatar.level <= 30) {
        setArena(images.planet3);
      } else if (avatar.level > 30 && avatar.level <= 40) {
        setArena(images.planet4);
      } else if (avatar.level > 40 && avatar.level < 50) {
        setArena(images.planet5);
      }
>>>>>>> main
    }
  }

<<<<<<< HEAD
    console.log('ARENA----->', arena);

 useEffect(() => {
        dispatch(getAvatar('1')) 
        bgLevel(images)
    }, []) 
=======
  useEffect(() => {
    dispatch(getAvatar("1"));
    bgLevel(images);
  }, []);
>>>>>>> main

  return (
    <>
      <Box
        w={"full"}
        h={"100vh"}
        backgroundSize={"cover"}
        backgroundImage={arena}
        backgroundPosition={"center center"}>
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}>
          <Stack maxW={"2xl"} align={"flex-center"} spacing={6}>
            <Text
              mt={10}
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
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
              textAlign="center">
              {router.asPath === "/arena" && "Choose Your Equipment!"}
            </Text>
          </Stack>
        </VStack>

        <Wrap justify={"center"} columns={2} spacing={300}>
          <AvatarGamer />
          {router.asPath === "/play" && <AvatarRandom />}
        </Wrap>

<<<<<<< HEAD
                <VStack
                    w={"full"}
                    justify={"center"}
                    px={useBreakpointValue({ base: 4, md: 8 })}>
                    <Stack direction={"row"} justify={'center'}>
                        <Link href="/">
                            <Button
                                bg={"gray.800"}
                                rounded={"full"}
                                color={"white"}
                                _hover={{ bg: "blue.500" }}>
                                HOME
                            </Button>
                        </Link>
                        <Link href="/arena">
                            <Button
                                bg={"gray.800"}
                                rounded={"full"}
                                color={"white"}
                                _hover={{ bg: "blue.500" }}>
                                PLAY NOW
                            </Button>
                        </Link>
                    </Stack>
                </VStack>
            </Box>
        </>
    )
}
export default ArenaOne        
=======
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}>
          <Stack direction={"row"} justify={"center"}>
            <Link href="/">
              <Button
                bg={"gray.800"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}>
                HOME
              </Button>
            </Link>
            <Link href="/play">
              <Button
                bg={"gray.800"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}>
                PLAY NOW
              </Button>
            </Link>
          </Stack>
        </VStack>
      </Box>
    </>
  );
};
export default ArenaOne;
>>>>>>> main
