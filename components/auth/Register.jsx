import { useForm } from "react-hook-form";
import createAccount from "../../utils/createAccount";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../state/user";
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
  useColorModeValue,
  Link,
  Spacer,
  Grid,
  Container,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoIosEye, IoMdEye, IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const user = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await dispatch(registerUser(data)).then((res) =>
      res.payload.isActive
        ? toast({
            title: "Account created",
            description: "",
            status: "success",
            position: "top",
            duration: 6000,
            isClosable: true,
          })
        : toast({
            title: "Email is already in use",
            description: "Please try again",
            status: "error",
            position: "top",
            duration: 6000,
            isClosable: true,
          })
    );
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
                    Already a user? <Link color={"blue.400"}>Login</Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </>
  );
};

export default Register;
