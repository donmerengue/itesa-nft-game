import { Link, Box, Center, Heading, Stack, WrapItem, Text, Image, Checkbox, Button, VStack, useBreakpointValue } from "@chakra-ui/react"

const Game2Chat = () => {

    const emogi = [
        { img: 'https://imgur.com/8Y4nDNr.png' }
    ]

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
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-3}
                        pos={'relative'}
                        height={'100px'}
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
                            height={100}
                            width={100}
                            objectFit={'cover'}
                            src={emogi[0].img}
                            alt={''} 
                            align={'center'}
                        />
                    </Box>

                    <Stack pt={20} align={'center'}>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            I am the winner!
                        </Heading>
                    </Stack>
                </Box>
            </Center>
        </WrapItem>
    )
}

export default Game2Chat