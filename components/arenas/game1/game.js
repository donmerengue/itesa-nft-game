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
    Spinner,
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
import { getAvatar } from "../../../state/avatar";
import { getArena } from "../../../state/arena";

import AvatarGamer from "../avatarGamer";
import GameAvatar from "../game1/gameAvatar"
import GameAccessories from "./gameAccessories";

const PlayGame = () => {

    const avatar = useSelector(state => state.avatar)
    const arena = useSelector(state => state.arena)
    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    const nftGamer = [
        {
            name: 'NEPTUNO',
            level: '7',
            img: 'https://imgur.com/rjuWPzD.png',
            accessories: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
        }
    ]


    useEffect(() => {
        dispatch(getAvatar(auth?.currentUser?.uid));

        dispatch(getArena(user?.level));
    }, [user])

    
    return (
        <>
            <Box
                w={"full"}
                h={"100vh"}
                backgroundSize={"cover"}
                backgroundImage={arena?.planet}
                backgroundPosition={"center center"}>
                    {arena? <>
                <VStack
                    w={"full"}
                    justify={"center"}
                    >
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

                <Wrap mt={20} justify={'center'} columns={2} spacing={200}>

                 {/* <GameAvatar/> */}
                 <AvatarGamer/>
                 <GameAccessories/>

                </Wrap></> :
                 <Center>
                 <Spinner size="xl" />
               </Center>
                }
                
            </Box>
        </>
    )
}
export default PlayGame