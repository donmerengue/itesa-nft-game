import {
    Stack,
    Flex,
    Text,
    Box,
    Container,
    Heading,
    Avatar
} from '@chakra-ui/react';

const References = () => {

    const references = [
        {
            name: 'Juan Perez',
            subject: 'RECOMIENDO!',
            img: "https://i.pravatar.cc/300",
            description: 'Es un juego divertido, adictivo, con buena gráfica y fácil de aprender a jugar, con hartas desafíos por lo cual no hay que estar esperando vidas no tiempos tan prolongados. Me gustó mucho'
        },
        {
            name: 'Juan José Castillo',
            subject: 'MUY BUENO',
            img: "https://i.pravatar.cc/300",
            description: 'Es entretenido, sin embargo hay momentos en que ciertos recursos escasean y da la impresión de que puedes avanzar más rápido pero pagando por los paquetes q ofrecen.',
        },
        {
            name: 'Pablo Correa',
            subject: 'HALLAZGO',
            img: "https://i.pravatar.cc/300",
            description: 'Una grata sorpresa este juego. Se agradece y se nota la dedicación de los desarrolladores al producir las cartas como las descripciones de las mismas (punto que me parece espectacular).',
        }
    ]

    return (
        <>
            <Box bg={'gray.100'}>
                <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                    <Stack spacing={0} align={'center'}>
                        <Heading>Our Gamers Speak</Heading>
                        <Text>We have been playing around the world</Text>
                    </Stack>
                </Container>
            </Box>

            <Flex bg={'gray.50'}>
                {references.map(reference => (
                    <>
                        <Stack
                            ml={7}
                            marginRight={7}
                            columns={4}
                            spacing={5}
                            
                            py={16}
                            px={8}
                            align={'center'}
                            direction={'column'}>
                            <Text fontSize={{ base: 'xl', md: '2xl' }}>{reference.subject}</Text>
                            <Text textAlign={'center'} maxW={'3xl'}>
                                {reference.description}
                            </Text>
                            <Box textAlign={'center'}>
                                <Avatar
                                    src={reference.img}
                                    alt={reference.name}
                                    mb={2}
                                />
                                <Text fontWeight={600}>{reference.name}</Text>
                            </Box>
                        </Stack>

                    </>
                ))}
            </Flex>
        </>
    )
}

export default References