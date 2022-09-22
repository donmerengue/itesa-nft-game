import { useBreakpointValue, Link, Box, Center, Heading, Stack, WrapItem, Text, Image, Checkbox, SimpleGrid, List, Radio, ListItem, VStack, Button } from "@chakra-ui/react"


const GameAccessories = () => {

    const nftGamer = [
        {
            name: 'NEPTUNO',
            level: '7',
            img: 'https://imgur.com/rjuWPzD.png',
            defense: '',
            attack:''
        }
    ]
    return (
        <WrapItem>
        <Center >
            <Box>
                <Box
                    mt={10}
                    mb={10}
                    role={'group'}
                    p={6}
                    maxW={'350px'}
                    w={'full'}
                    bg={'gray.800'}
                    color={'white'}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>

                    <Box maxW={'7xl'} columns={{ base: 1, md: 2 }} spacing={20}>

                        <Heading
                            fontSize={'2xl'}
                            fontFamily={'body'}
                            fontWeight={500}

                            color={'white'}
                            textTransform={'uppercase'}
                            mb={'6'}
                            align={'center'}
                            justify={'center'}
                        >
                            YOUR ACCESSORIES
                        </Heading>
                
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            <List spacing={2} >
                                <Text
                                    fontSize={{ base: '8px', lg: '18px' }}
                                    color={'white'}
                                    textTransform={'uppercase'}
                                    mb={'2'}
                                    fontWeight={'bold'}
                                    align={'left'}
                                    justify={'center'}>
                                    Defense
                                </Text>
                                <List direction='row'>
                                    <ListItem>
                                        <Radio value='1'>First</Radio>
                                    </ListItem>
                                    <ListItem>
                                        <Radio value='2'>Second</Radio>
                                    </ListItem>
                                    <ListItem>
                                        <Radio value='3'>Third</Radio>
                                    </ListItem>
                                </List>
                            </List>

                            <List spacing={2} >
                                <Text
                                    fontSize={{ base: '8px', lg: '18px' }}
                                    color={'white'}
                                    textTransform={'uppercase'}
                                    fontWeight={'bold'}
                                    mb={'2'}
                                    align={'left'}
                                    justify={'center'}>
                                    Attack
                                </Text>
                                <List direction='row'>
                                    <ListItem>
                                        <Radio value='1'>First</Radio>
                                    </ListItem>
                                    <ListItem>
                                        <Radio value='2'>Second</Radio>
                                    </ListItem>
                                    <ListItem>
                                        <Radio value='3'>Third</Radio>
                                    </ListItem>
                                </List>
                            </List>
                        
                        </SimpleGrid>
                    </Box>
                </Box>

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
        </Center>
    </WrapItem>
    )
}

export default GameAccessories