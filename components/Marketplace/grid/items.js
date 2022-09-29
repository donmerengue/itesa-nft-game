import { WrapItem, Link, Center, Box, Stack, Image, Heading, Text, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { convertImage } from '../../../utils/blockchain/nftFetch'
import { nftPrice } from '../../../utils/marketplace/nftPrice'

const Items = ({nft, active }) => {

  const [nftData, setNftData] = useState({})
  const [nftImage, setNftImage] = useState('')

  useEffect(()=>{
    setNftData(JSON.parse(nft.metadata))
  },[active])

  useEffect(()=>{
   if(nftData?.image !== undefined){
    setNftImage(convertImage(nftData?.image))
   }
  }, [nftData])

  console.log(nftData?.attributes);

  return (
    <>
    {nftData?.attributes?
      <Link href={`marketplace/${nft?.token_id}`}>
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
                  alt={''}
                  src={nftImage}
                />
              </Box>
              <Stack pt={20} align={'center'}>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  {nftData?.name}
                </Heading>
                <Text>{}</Text>
          
                <Text align={'center'} color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                {nftData?.attributes[2].trait_type || ""}
                </Text>
                <Text align={'center'} color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
               POWER {nftData?.attributes[2].value || ""}
                </Text>
                <Text color={'gray.200'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                 {nftPrice(nftData?.attributes[2].value)} ITGX
                </Text>
              </Stack>
            </Box>
          </Center>
        </WrapItem>
      </Link>
      : 
      ""
      }
    </>
  )
}

export default Items