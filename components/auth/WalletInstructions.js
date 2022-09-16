import Image from "next/image";
import React from "react";
import {
  addToken,
  isMetamaskInstalled,
  switchNetwork,
} from "../../utils/blockchain/tokenOperations";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';


const WalletInstructions = () => {

  const handleMetamask = () => {
    isMetamaskInstalled();
  };

  const handleSwitch = () => {
    switchNetwork();
  };

  const handleAddToken = () => {
    addToken();
  };

  return (
    <>
      <Box marginTop={10} marginBottom={10}>
        <Flex p={5} flex={1} align={'center'} justify={'center'}>
          <Stack>
            <Heading mb={2} fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Welcome!
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Follow the Instructions
              </Text>{' '}
            </Heading>

            <Text mb={2} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              1. Necesitas tener Metamask instalado. Para comprobarlo, haz click
              en el siguiente boton.
            </Text>

            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                onClick={handleMetamask}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Click
              </Button>
            </Stack>

            <Text mb={2} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              2. Si tienes Metamask, puedes continuar con la importacion.<br /> Si no, instalalo desde la pagina de Metamask
            </Text>
            <a
              href="https://metamask.io/download/"
              target="_blank"
              rel="noopener noreferrer">
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500'
                }}
                variant={"ghost"}>
                Click
              </Button>
            </a>

            <Text mb={2} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              3. Luego de haber instalado metamask te preguntara si eres nuevo
              usuario. <br /> Como ya cuentas con una frase de recuperacion
              proporcionada en el momento de registro debes dar al boton{" "}
              <strong>Importar wallet</strong>.
            </Text>
            
        <div >
            <Image
            src="https://i.imgur.com/UM09s6d.png"
            alt="import wallet"
            height={250}
            width={500}
            align={'center'}
            justify={'center'}
          />
          </div>

          <Text mb={2} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              4. Puedes copiar y pegar tu frase secreta en los campos vacios de la
              pantalla. <br></br>
              Creas una contraseña para usar Metamask y pulsas el boton{" "}
              <strong>Import</strong> que se encuentra al final de la pantalla
            </Text>

            <div style= { {display:'flex', align:'center', justify:'center'}}>
          <Image
            src="https://i.imgur.com/5h8jnKW.png"
            alt="import wallet"
            height={600}
            width={550}
          />
        </div>

        <Text mb={2} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              5. Metamask te confirmara la importacion de la cuenta, le das a
              aceptar a los avisos y continuas con los siguientes pasos:
            </Text>

            <Text mb={2} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              6. Agregar la red para los tokens pulsando el siguiente boton, para que puedas ver tus ITGX recibidos. <br /> Aprueba la operacion y luego cambia la red.
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  variant={"ghost"}
                  onClick={handleSwitch}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                >  Click
                </Button>
              </Stack>
            </Text>

            <Text mb={2} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>Al abrir Metamask, deberias estar viendo esta imagen:
            </Text>

            <div style= { {display:'flex', align:'center', justify:'center'}}>
          <Image
            src="https://i.imgur.com/9wYiTTt.png"
            alt="chain"
            height={50}
            width={262}
          />
        </div>
        <Text mb={2} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              El ultimo paso es para agregar el token desde este{" "}

              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Button
                  variant={"ghost"}
                  onClick={handleAddToken}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                >
                  Click
                </Button>
              </Stack>
              Una vez pulsado acepta los cambios y deberias poder verlos en tu
              wallet metamask.
            </Text>

          </Stack>
        </Flex>

      </Box>
      {/*     </Stack> */}
    </>
  );
};

export default WalletInstructions;



