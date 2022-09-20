// Firebase
import { auth } from "../../firebase/firebase-config";
// React / Next
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
// Utils
import { registerUser } from "../../state/user";
// Controllers
import { updateData } from "../../fetchData/controllers";
// Tokens
import {
  createWallet,
  sendTokens,
} from "../../utils/blockchain/tokenOperations";
// UI / Styles
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  FormErrorMessage,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Divider,
} from "@chakra-ui/react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const user = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  // React Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // Estados de la wallet
  const [address, setAddress] = useState();
  const [phrase, setPhrase] = useState();
  const [key, setKey] = useState();
  const [userCreated, setUserCreated] = useState(false);

  const onSubmit = async (data) => {
    let userCreation = false;
    // Registrar usuario si no existe
    await dispatch(registerUser(data)).then((res) => {
      if (res.payload.isActive) {
        toast({
          title: "Account created",
          description: "",
          status: "success",
          position: "top",
          duration: 6000,
          isClosable: true,
        });
        userCreation = true;
      }
      // Avisar si el usuario ya existe
      else {
        toast({
          title: "Email is already in use",
          description: "Please try again",
          status: "error",
          position: "top",
          duration: 6000,
          isClosable: true,
        });
      }
    });

    // Si se acaba de registrar un usuario
    if (userCreation) {
      // Creacion de wallet
      const { address, mnomic, privateKey } = createWallet();

      // Agregar la walletAddress a los datos del usuario
      updateData("users", auth.currentUser.uid, {
        walletAddress: address,
      });

      // Setear estados de la wallet
      setAddress(address);
      setKey(privateKey);
      setPhrase(mnomic);
      // Abrir modal para mostrar datos
      onOpen();
    }
  };

  // FIXME: 20/9 ->esto ya no se maneja asi 
  const handlerClose = () => {
    // TODO: 15/9 AGREGAR COUNTDOWN EN CLOSE Y LUEGO CONFIRMACION AL CLIQUEAR
    // Cerrar modal
    onClose();
    // Resetear los estados de frase y key de la wallet
    setPhrase("");
    setKey("");
    // Hacer el airdrop (enviar tokens iniciales)
    sendTokens(address, "1");
    // Redirigir a las intrucciones de la wallet
    router.push("/wallet");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={"gray.50"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                ​🪐​ Create your account ​🪐​
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our features ​
              </Text>
            </Stack>
            <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl
                      id="firstName"
                      isInvalid={errors.name}
                      isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        {...register("name", {
                          pattern: {
                            value: /^[A-Za-z\s]+$/g,
                            message: "The name can only include letters.",
                          },
                          required: {
                            value: true,
                            message: "Complete this field to continue.",
                          },
                          minLength: {
                            value: 2,
                            message:
                              "The name cannot be less than two characters.",
                          },
                          maxLength: {
                            value: 20,
                            message:
                              "The name cannot be longer than twenty characters.",
                          },
                        })}
                      />
                      <FormErrorMessage>
                        {errors.name && errors.name.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl
                      id="lastname"
                      isInvalid={errors.lastname}
                      isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type="text"
                        {...register("lastname", {
                          pattern: {
                            value: /^[A-Za-z\s]+$/g,
                            message: "The name can only include letters.",
                          },
                          required: {
                            value: true,
                            message: "Complete this field to continue.",
                          },
                          minLength: {
                            value: 2,
                            message:
                              "The name cannot be less than two characters.",
                          },
                          maxLength: {
                            value: 20,
                            message:
                              "The name cannot be longer than twenty characters.",
                          },
                        })}
                      />
                      <FormErrorMessage>
                        {errors.lastname && errors.lastname.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl
                  id="email"
                  isInvalid={errors.email}
                  isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    placeholder=""
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Complete this field to continue.",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address.",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  id="password"
                  isInvalid={errors.password}
                  isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Complete this field to continue.",
                        },
                        minLength: {
                          value: 8,
                          message:
                            "Weak password, minimum length should be 8.",
                        },
                      })}
                    />
                    <InputRightElement h={"full"} w="">
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.password && errors.password.message}
                  </FormErrorMessage>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Loading"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    isLoading={isSubmitting}
                    type="submit">
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link href="/login" color={"blue.400"}>
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tu info privada</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size={"md"}>Tu frase de recuperacion</Heading>
            <Text> {phrase}</Text>
            <Divider my={"20px"} />

            <Heading size={"md"}>Tu llave privada </Heading>
            <Text> {key}</Text>

            <Divider my={"20px"} />
            <Text>
              {" "}
              Esta información va a desaparecer cuando cierres esta ventana
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handlerClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;
