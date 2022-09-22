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

const ItemPage = () => {

    const nfts = [
        {
            name: 'TIERRA',
            categoria: 'Avatar',
            img: 'https://imgur.com/Au723mw.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
            price: '280'
        }
    ]

    return (

        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={nfts[0].name}
                        src={nfts[0].img}
                        fit={'cover'}
                        align={'center'}
                        justify={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>

                <Stack spacing={{ base: 4, md: 5 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={500}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {nfts[0].name}
                        </Heading>
                        <Text
                            color={'gray.900'}
                            fontWeight={300}
                            fontSize={'2xl'}>
                            ${nfts[0].price}
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
                                {nfts[0].categoria}
                            </Text>
                            <Text fontSize={'lg'}>
                                {nfts[0].description}
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
                                <List spacing={2}>
                                    <ListItem>Archetype</ListItem>
                                    <ListItem>Background</ListItem>{' '}
                                    <ListItem>Clothing</ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>Eyes</ListItem>
                                    <ListItem>Head</ListItem>
                                    <ListItem>Mouse</ListItem>
                                </List>
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
                                Characteristics
                            </Text>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <List spacing={2} >
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            BACKGROUND:
                                        </Text>{' '}
                                        None{' '}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            CLOTHING:
                                        </Text>{' '}
                                        Monstruo Skin Red{' '}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            EYES:
                                        </Text>{' '}
                                        One Yellow{' '}
                                    </ListItem>
                                </List>
                                <List spacing={2} >
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            MOUTH:
                                        </Text>{' '}
                                        Big Fear{' '}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            HANDS:
                                        </Text>{' '}
                                        Claws{' '}
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            ACCESSORY:
                                        </Text>{' '}
                                        Parrot Pet{' '}
                                    </ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                    </Stack>
                    
          

                </Stack>

                <VStack
                    w={"full"}
                    justify={"center"}
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
                        <Link href="">
                            <Button
                                bg={"gray.800"}
                                rounded={"full"}
                                color={"white"}
                                _hover={{ bg: "blue.500" }}>
                                MAKE AN OFFER
                            </Button>
                        </Link>
                    </Stack>
                </VStack>
                
            </SimpleGrid>
        </Container>
    );
}

export default ItemPage
