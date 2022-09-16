import {
    Box,
    Icon,
    Container,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';
import { ChatIcon, EmailIcon } from '@chakra-ui/icons'


function Footer() {
    return (
        <Box
            bg={('gray.900')}
            color={('gray.50')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
                className=" bottom-0 w-full"
            >
                <Link href='/'>
                    <Text>INTERGALAXY</Text>
                </Link>
                <Text>© 2022 Intergalaxy. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <FaInstagram />
                    <Icon as={EmailIcon} />
                    <Icon as={ChatIcon} />
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer; 