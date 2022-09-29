import { Center, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase-config";
import { getNfts } from "../../state/myNfts";



const NtfBought = () => {

    const myNfts = useSelector(state => state.myNfts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNfts(auth.currentUser?.uid))
    }, [myNfts])


    return (
        <>
            <Center
                mt={10}>
                <TableContainer
                    bg={"gray.200"}
                    rounded={"lg"}
                    minW={'6xl'}

                >
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>NFT-ID</Th>
                                <Th>NAME</Th>
                                <Th>POWER</Th>
                                <Th>TYPE</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {/*   {active ? (
                                nfts?.map((nft, i) => ( */}
                            <Tr >
                                <Td>hola </Td>
                                <Td>hola </Td>
                                <Td>hola </Td>
                                <Td>hola </Td>
                            </Tr>
                            <Tr >
                                <Td>hola </Td>
                                <Td>hola </Td>
                                <Td>hola </Td>
                                <Td>hola </Td>
                            </Tr>
                            <Tr >
                                <Td>hola </Td>
                                <Td>hola </Td>
                                <Td>hola </Td>
                                <Td>hola </Td>
                            </Tr>
                            <Tr >
                                <Td>hola </Td>
                                <Td>hola </Td>
                                <Td>hola </Td>
                                <Td>hola </Td>
                            </Tr>
                            {/*     ))
                            ) : (
                                <Spinner size="lg" />
                            )} */}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Center>
        </>
    );
};

export default NtfBought;
