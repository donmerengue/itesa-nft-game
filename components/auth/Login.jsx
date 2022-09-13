import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { login, linkLogin } from "../../state/user";
import { useForm } from "react-hook-form";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  Box,
  useToast,
  Link,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { IoIosEye, IoMdEye, IoMdEyeOff } from "react-icons/io";

import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const user = useSelector((state) => state.user);
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);

  // console.log(router.push("/"));
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(user);
    dispatch(login(data)).then((res) => {
      console.log(res);
      if (res.payload.isActive) {
        // dispatch(linkLogin(data));

        toast({
          title: "Login successful",
          description: "We sent you a email to the 2FA",
          status: "success",
          position: "top",
          duration: 6000,
          isClosable: true,
        });
        // router.push("/")
      } else {
        toast({
          title: "Wrong email or password.",
          description: "Please try again.",
          status: "error",
          position: "top",
          duration: 6000,
          isClosable: true,
        });
      }
    });
  };

  const loginLinkHandler = () => {
    dispatch(linkLogin(data));
  };

  

  return (
    <>
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.50"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
              <Stack align={"center"} mb="8">
                <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                <Text fontSize={"lg"} color={"gray.600"}></Text>
              </Stack>
              <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Complete this field to login.",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password} mt={5}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Complete this field to login.",
                      },
                      minLength: {
                        value: 8,
                        message: "Minimum length should be 8",
                      },
                    })}
                  />
                  <InputRightElement h={"full"} w="">
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
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
                  type="submit"
                >
                  Login
                </Button>
              </Stack>
              <Heading fontSize={"md"} mt={9}></Heading>
              <Stack pt={6}>
                <Text align={"center"}>
                  New in Intergalaxy?{" "}
                  <Link href="/register" color={"blue.400"}>
                    Create your account
                  </Link>
                </Text>
              </Stack>
            </Box>
          </form>
          <button
        id="btnLoginLink"
        type="button"
        className="button buttonBlue"
        onClick={loginLinkHandler}>
        Send Login Link
      </button>
        </Stack>
      </Flex>
    </>

  );
};

export default Login;
