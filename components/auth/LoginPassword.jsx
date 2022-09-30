import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { login } from "../../state/user";
import { useForm } from "react-hook-form";
import { useState } from "react";

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
  Box,
  useToast,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const LoginPassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (password) => {
    dispatch(login(password)).then((res) => {    
      console.log("res", res)
      console.log(res.payload)
      if (res.payload.level) {
        toast({
          title: "Login successful",
          status: "success",
          position: "top",
          duration: 6000,
          isClosable: true,
        });
        router.push("/");
      } else {
        toast({
          title: "Wrong password",
          description: "Please try again",
          status: "error",
          position: "top",
          duration: 6000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={"gray.50"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
              <Stack align={"center"} mb="8">
                <Heading fontSize={"4xl"}>Sign In (2/2)</Heading>
                <Text fontSize={"md"} color={"gray.600"}>
                  Enter your password to login with 2FA
                </Text>
              </Stack>
              <FormControl isInvalid={errors.password} mt={5}>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Complete this field to login.",
                      },
                      minLength: {
                        value: 6,
                        message: "Minimum length should be 6",
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
                  Login
                </Button>
              </Stack>
              <Heading fontSize={"md"} mt={9}></Heading>
              <Text align={"center"}>
                Forgot your password?{" "}
                <Link href="/resetpassword" color={"blue.400"}>
                  Click here to reset
                </Link>
              </Text>
            </Box>
          </form>
        </Stack>
      </Flex>
    </>
  );
};

export default LoginPassword;
