import { useBreakpointValue, Link, Box, Center, Heading, Stack, WrapItem, Text, Image, Checkbox, SimpleGrid, List, Radio, ListItem, VStack, Button } from "@chakra-ui/react"


const Game2Random = () => {

    const nftRandom = [
        {
          name: "URANO",
          level: "3",
          img: "https://imgur.com/nvD4rT2.png",
        },
      ];

    return (
        <WrapItem>
        <Center >
            <Box
                mt={10}
                mb={10}
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={'gray.800'}
                color={'white'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        filter: 'blur(10px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(10px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={280}
                        width={282}
                        objectFit={'cover'}
                        src={nftRandom[0].img}
                        alt={''}
                    />
                </Box>

                <Stack pt={20} align={'center'}>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {nftRandom[0].name}
                    </Heading>
                    <Text>Level: {nftRandom[0].level}</Text>
                </Stack>
            </Box>
        </Center>
    </WrapItem>
    )
}

export default Game2Random