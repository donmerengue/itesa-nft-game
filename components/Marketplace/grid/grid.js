import { Box, Center, Flex, Heading, Image, Stack, Text, Wrap, WrapItem, Link } from '@chakra-ui/react';
import nftData from '../../../assets/nftData'

const GridMarket = () => {

    return (
        <>
            <Wrap ml={7} marginRight={7} columns={4} spacing={5}>

                {nftData.map(nft => ( 
                    <>
                        <Link href={'marketplace/item'}>
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
                                            mt={1}
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
                                            <Text>{nft.category}</Text>
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
                        </Link>
                    </>
                 ))} 
            </Wrap> 
        </>
    )
}

export default GridMarket