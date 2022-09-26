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
import { getAvatar, getUserAvatar } from "../../../state/avatar";
import { getArena } from "../../../state/arena";

import AvatarGamer from "../avatarGamer";
import GameAccessories from "./gameAccessories";
import { getItems } from "../../../state/nftItems";
import { getItemsEquipped } from "../../../state/nftEquipped";

const PlayGame = () => {

    const arena = useSelector(state => state.arena)
    const user = useSelector(state => state.user)
    const nftItems = useSelector(state => state.nftItems)


    const dispatch = useDispatch()


    useEffect(() => {
        //Traer Avatar con el uid que nos da auth
        dispatch(getUserAvatar(auth?.currentUser?.uid));
        //Traer NFT Items con el uid que nos da auth
        dispatch(getItems(auth.currentUser?.uid))
        //Setear Arena dependiendo del nivel del user
        dispatch(getArena(user?.level));
        //Traer nfts equipados
        dispatch(getItemsEquipped(auth.currentUser?.uid))
    }, [user])

//    console.log(nftItems);
    
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