import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    List,
    ListItem,
    Link,
    useBreakpointValue
} from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMetaData, convertImage } from '../../../utils/blockchain/nftFetch'
import NftItem from './nftItem';

const ItemPage = ({ id }) => {

    const [nfts, setNfts] = useState({})
    const [nft, setNft] = useState({})
    const [data, setData] = useState([])
    const [active, setActive] = useState(false)

    useEffect(() => {
        getMetaData()
            .then(res => res.map((nft) => JSON.parse(nft.metadata)))
            .then(res => res.filter((data) => data.name === id))
            .then(res => console.log(res))
            .catch((error) => console.log(error))
        setActive(true)
    }, [])

  

/*     return (
        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={}
                        src={}
                        fit={'cover'}
                        align={'center'}
                        justify={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '500px', lg: '600px' }}
                    /> 
                </Flex>

                <Stack spacing={{ base: 4, md: 5 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={500}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {data[0]?.name}
                        </Heading>
                        <Text
                            color={'gray.900'}
                            fontWeight={300}
                            fontSize={'2xl'}>
                            ITGX: {}
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={'gray.200'}
                            />
                        }>
                        <VStack spacing={{ base: 2, sm: 3 }}>
                            <Text
                                color={'gray.500'}
                                fontSize={'2xl'}
                                fontWeight={'250'}>
                                { }
                            </Text>
                            <Text fontSize={'lg'}>
                                {data[0]?.description}
                            </Text>
                        </VStack>

                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '20px' }}
                                color={'gray.900'}
                                fontWeight={'bold'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Properties
                            </Text>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                { }
                                <>
                                    <List spacing={2} >
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'} textTransform={'uppercase'}>
                                                TYPE:
                                            </Text>{' '}
                                            Attak
                                        </ListItem>
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'} textTransform={'uppercase'}>
                                                POWER:
                                            </Text>{' '}
                                            3
                                        </ListItem>
                                    </List>
                                    <List spacing={2} >
                                        <ListItem>
                                            <Text as={'span'} fontWeight={'bold'} textTransform={'uppercase'}>
                                                MATERIAL:
                                            </Text>{' '}
                                            Steel
                                        </ListItem>
                                    </List>
                                </>
                                { }
                            </SimpleGrid>
                        </Box>

                        <Box columns={{ base: 1, md: 2 }} spacing={10}>
                            <Text
                                fontSize={{ base: '16px', lg: '20px' }}
                                color={'gray.900'}
                                fontWeight={'bold'}
                                textTransform={'uppercase'}
                                mb={'4'}
                                justifyContent={'center'}>
                                Details
                            </Text>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <List spacing={2} >
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Contract Address:
                                        </Text>{' '}
                                        0x191a...2e8c{' '}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Token ID:
                                        </Text>{' '}
                                        2{' '}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Token Standard:
                                        </Text>{' '}
                                        ERC-721{' '}
                                    </ListItem>
                                </List>
                                <List spacing={2} >
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Blockchain:
                                        </Text>{' '}
                                        BSC Testnet{' '}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Last Updated:
                                        </Text>{' '}
                                        7 minutes ago{' '}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            Creator Earnings:
                                        </Text>{' '}
                                        0%{' '}
                                    </ListItem>
                                </List>
                            </SimpleGrid>

                        </Box>
                    </Stack>

                    <Box>
                        <VStack
                            w={"full"}
                            justify={"center"}
                            mt={'10'}
                            px={useBreakpointValue({ base: 4, md: 8 })}>
                            <Stack direction={"row"} justify={'center'}>
                                <Link href="">
                                    <Button
                                        bg={"gray.800"}
                                        rounded={"full"}
                                        color={"white"}
                                        _hover={{ bg: "blue.500" }}>
                                        BUY NOW
                                    </Button>
                                </Link>
                            </Stack>
                        </VStack>
                    </Box>
                </Stack>

            </SimpleGrid>
        </Container>
    ) */
}

export default ItemPage
