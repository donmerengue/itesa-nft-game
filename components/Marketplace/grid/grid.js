import { Box, Center, Flex, Heading, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import CardDetail from '../itemPage';

const GridMarket = () => {

    const nfts = [
        {
            name: 'NEPTUNO',
            categoria: 'Avatar',
            img: 'https://imgur.com/rjuWPzD.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
            price: '720'
        },
        {
            name: 'URANO',
            categoria: 'Avatar',
            img: 'https://imgur.com/nvD4rT2.png',
            description: '  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
            price: '300'
        },
        {
            name: 'MERCURIO',
            categoria: 'Avatar',
            img: 'https://imgur.com/6yKQ65s.png',
            description: '  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
            price: '400'
        },
        {
            name: 'VENUS',
            categoria: 'Avatar',
            img: 'https://imgur.com/JuHKTlD.png',
            description: '  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
            price: '200'
        },
        {
            name: 'TIERRA',
            categoria: 'Avatar',
            img: 'https://imgur.com/Au723mw.png',
            description: '  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
            price: '280'
        },
        {
            name: 'MARTE',
            categoria: 'Avatar',
            img: 'https://imgur.com/rNudYb8.png',
            description: '  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
            price: '800'
        },
        {
            name: 'PLUTON',
            categoria: 'Avatar',
            img: 'https://imgur.com/FQdD8s4.png',
            description: '  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
            price: '550'
        },
        {
            name: 'SATURNO',
            categoria: 'Avatar',
            img: 'https://imgur.com/GZNo6Af.png',
            description: '  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor',
            price: '100'
        },

    ];

    return (
        <div className=''>

            <Wrap ml={7} marginRight={7} columns={4} spacing={5}>

                {nfts.map(nft => (
                    <>
                        <WrapItem>
                            <Center>
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
                                            src={nft.img}
                                            alt={''}
                                        />
                                    </Box>
                                    <Stack pt={20} align={'center'}>
                                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                            {nft.name}
                                        </Heading>
                                        <Text>{nft.categoria}</Text>
                                        <Text align={'center'} color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                            {nft.description}
                                        </Text>
                                        <Text color={'gray.200'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                            {nft.price}
                                        </Text>
                                    </Stack>
                                </Box>
                            </Center>
                        </WrapItem>
                    </>
                ))}
            </Wrap>
        </div>
    )
}

export default GridMarket