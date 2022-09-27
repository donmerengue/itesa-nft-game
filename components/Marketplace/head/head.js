import { SearchIcon } from '@chakra-ui/icons'
import { Input, Box, Flex, IconButton, Stack, VStack, Text, Button, useBreakpointValue, } from '@chakra-ui/react'
import { useState } from 'react';
import { getMetaData, convertImage } from '../../../utils/blockchain/nftFetch'


const HeadMarket = () => {

    const [nfts, setNfts] = useState([]); 

    const handleSearchNfts = (e) => {
        setNfts(e.target.value);
       
      };

    

    return (
        <Flex
            w={'full'}
            h={'30vh'}
            mb={10}
            backgroundImage={
                'url(https://i.imgur.com/oSysA4g.png)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        Explore, collect, and sell NFTs
                    </Text>
                </Stack>
                <Flex>
                    <IconButton handleSearchNfts={handleSearchNfts} href={''}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{ bg: 'blue.500' }}
                        aria-label='Search database'
                        icon={<SearchIcon />}
                    />
                    <Input color={'gray.400'} placeholder='Search items, collections, avatars' />
                </Flex>
            </VStack>
        </Flex>
    )
}

export default HeadMarket