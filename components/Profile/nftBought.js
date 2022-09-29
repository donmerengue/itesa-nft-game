import { Center, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase-config";
import { getNfts } from "../../state/myNfts";


const NtfBought = () => {

    const myNfts = useSelector(state => state.myNfts)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNfts(auth.currentUser?.uid))
    }, [user])


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
                            {myNfts?.map((nft, i) => {
                                return <Tr key={i} >
                                    <Td>{nft.tokenId} </Td>
                                    <Td>{nft.name}</Td>
                                    <Td>{nft.power} </Td>
                                    <Td>{nft.type} </Td>
                                </Tr>
                            }
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Center>
        </>
    );
};

export default NtfBought;
