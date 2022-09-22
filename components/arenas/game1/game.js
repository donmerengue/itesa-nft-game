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
import { getAvatar } from "../../../state/avatar";
import GameAvatar from "../game1/gameAvatar"
import GameAccessories from "./gameAccessories";

const PlayGame = () => {

    const avatar = useSelector(state => state.avatar)
    const dispatch = useDispatch()
    const [arena, setArena] = useState('')
    console.log('ARENA----->', arena);

    /* useparam con un use effect, ruta dinamica
     */
    const images = {
        planet1: "url(https://imgur.com/qxGy6KM.jpg)",
        planet2: "url(https://imgur.com/qeSAqBu.jpg)",
        planet3: "url(https://imgur.com/wkT0Riu.jpg)",
        planet4: "url(https://imgur.com/kFYGOdQ.jpg)",
        planet5: "url(https://imgur.com/2ZImUtf.jpg)"
    };

    const nftGamer = [
        {
            name: 'NEPTUNO',
            level: '7',
            img: 'https://imgur.com/rjuWPzD.png',
            accessories: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
        }
    ]

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
        dispatch(getAvatar('1'))
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
                            ARE YOU READY TO PLAY?
                        </Text>
                    </Stack>
                </VStack>

                <Wrap mt={20} justify={'center'} columns={2} spacing={200}>

                 <GameAvatar/>
                 <GameAccessories/>

                </Wrap>
                
            </Box>
        </>
    )
}
export default PlayGame