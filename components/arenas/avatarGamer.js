import { Box, Center, Heading, Stack, WrapItem, Text, Image, Checkbox } from "@chakra-ui/react"

const AvatarGamer = () => {
    
    const nftGamer = [
        {
            name: 'NEPTUNO',
            level: '7',
            img: 'https://imgur.com/rjuWPzD.png',
            accessories: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
        }
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
                    src={nftGamer[0].img}
                    alt={''}
                />
            </Box>

            <Stack pt={20} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    {nftGamer[0].name}
                </Heading>
                <Text>Level: {nftGamer[0].level}</Text>
            </Stack>

            <Stack>
                            <Text fontSize={'sm'} textTransform={'uppercase'}>
                                Defense
                            </Text>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='white' defaultChecked>
                                    Checkbox
                                </Checkbox>
                                <Checkbox colorScheme='white' defaultChecked>
                                    Checkbox
                                </Checkbox>  
                            </Stack>
                        </Stack>
                        <Stack>
                            <Text fontSize={'sm'} textTransform={'uppercase'}>
                                Attack
                            </Text>
                            <Stack  spacing={5} direction='row'>
                                <Checkbox colorScheme='white' defaultChecked>
                                    Checkbox
                                </Checkbox>
                                <Checkbox colorScheme='white' defaultChecked>
                                    Checkbox
                                </Checkbox>
                             
                            </Stack>
                        </Stack>
        </Box>
    </Center>
</WrapItem>
  )
}

export default AvatarGamer