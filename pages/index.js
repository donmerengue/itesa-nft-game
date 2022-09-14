import { useSelector } from "react-redux";
// TODO: React-Firebase Auth Hooks (Lucas, 10/9, 13:45);  
import { useCollection } from 'react-firebase-hooks/firestore';
/* import { auth } from '../firebase/firebase-config'; */
import useAuth from '../hooks/useAuth';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  TestimonialAvatar,
  Box,
  Container,
  Heading,
  Testimonial,
  TestimonialContent,
  TestimonialHeading,
  TestimonialText,
  Divider,
  Center,
  Avatar
} from '@chakra-ui/react';

function Home() {
  return (
    <Box>
      {/* DESCRIPTION GAME */}
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9178c8b8-b0b0-4e26-8fb7-63ae3ff5aebf/d9lb7db-972dfb99-2953-47ef-88ea-2c8c76fdac5c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkxNzhjOGI4LWIwYjAtNGUyNi04ZmI3LTYzYWUzZmY1YWViZlwvZDlsYjdkYi05NzJkZmI5OS0yOTUzLTQ3ZWYtODhlYS0yYzhjNzZmZGFjNWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hpKkfCIA6UZZdCWRJ08rFKvF21oU4N4DwvKQymjLW1Y)'
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
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor 
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                LOGIN
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                PLAY NOW
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>

      {/* REFERENCIAS GAMERS */}
      <Box bg={'gray.100'}>
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            <Heading>Our Gamers Speak</Heading>
            <Text>We have been playing around the world</Text>
          </Stack>
        </Container>
      </Box>

      <Flex >
        <Stack
          bg={'gray.50'}
          py={16}
          px={8}
          spacing={{ base: 8, md: 10 }}
          align={'center'}
          direction={'column'}>
             <Text fontSize={{ base: 'xl', md: '2xl' }}>Efficient Collaborating</Text>
          <Text
            textAlign={'center'}
            maxW={'3xl'}>
             Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor 
          </Text>
          <Box textAlign={'center'}>
            <Avatar
              src={
                "https://i.pravatar.cc/300"
              }
              alt={'Jenny Wilson'}
              mb={2}
            />
            <Text fontWeight={600}>Lino Mattos</Text>
          </Box>
        </Stack>

        <Stack
          bg={'gray.50'}
          py={16}
          px={8}
          spacing={{ base: 8, md: 10 }}
          align={'center'}
          direction={'column'}>
             <Text fontSize={{ base: 'xl', md: '2xl' }}>Efficient Collaborating</Text>
          <Text
            textAlign={'center'}
            maxW={'3xl'}>
             Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor 
          </Text>
          <Box textAlign={'center'}>
            <Avatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              alt={'Jenny Wilson'}
              mb={2}
            />
            <Text fontWeight={600}>Jenny Wilson</Text>
          </Box>
        </Stack>

               <Stack
          bg={'gray.50'}
          py={16}
          px={8}
          spacing={{ base: 8, md: 10 }}
          align={'center'}
          direction={'column'}>
             <Text fontSize={{ base: 'xl', md: '2xl' }}>Efficient Collaborating</Text>
          <Text
            textAlign={'center'}
            maxW={'3xl'}>
       Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor 
          </Text>
          <Box textAlign={'center'}>
            <Avatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              alt={'Jenny Wilson'}
              mb={2}
            />
            <Text fontWeight={600}>Francisco Leyes Campoy </Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
export default Home; 