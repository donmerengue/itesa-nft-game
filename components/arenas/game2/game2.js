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
    Checkbox,
    ListItem,
    List,
    SimpleGrid,
    Radio,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../firebase/firebase-config";
import { getAvatar, getUserAvatar } from "../../../state/avatar";
import Game2Avatar from "../game1/gameAvatar"
import Game2Chat from "./game2Chat";
import Game2Random from "./game2Random";

const PlayGame2 = () => {

    const avatar = useSelector(state => state.avatar)
    const dispatch = useDispatch()
    const [arena, setArena] = useState('')

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
    }

    useEffect(() => {
        dispatch(getUserAvatar(auth.currentUser?.uid))
        bgLevel(images)
    }, [])

    
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
                        GOOD JOB!
                        </Text>
                    </Stack>
                </VStack> 

                <Wrap mt={20} justify={'center'} columns={2} spacing={100}>

                 <Game2Avatar/>
                 <Game2Chat/>
                 <Game2Random/>

                </Wrap>

                {/* BOTONES */}
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
                        <Link href="/game">
                            <Button
                                bg={"gray.800"}
                                rounded={"full"}
                                color={"white"}
                                _hover={{ bg: "blue.500" }}>
                                PLAY AGAIN
                            </Button>
                        </Link>
                    </Stack>
                </VStack>

            </Box>
        </>
    )
}
export default PlayGame2