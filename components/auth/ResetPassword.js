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
} from "@chakra-ui/react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


const ResetPassword = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const toast = useToast();
    const [showPassword, setShowPassword] = useState(false);
  
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm();
  
    const onSubmit = (data) => {

        if (data.password === data.password2)
        console.log("COINCIDEN");
        else console.log("no coinciden fiera");
    //   dispatch(login(password)).then((res) => {
    //     if (res.payload.isActive) {
    //       toast({
    //         title: "Password changed successful",
    //         status: "success",
    //         position: "top",
    //         duration: 6000,
    //         isClosable: true,
    //       });
    //       router.push("/");
    //     } else {
    //       toast({
    //         title: "Wrong password",
    //         description: "Please try again",
    //         status: "error",
    //         position: "top",
    //         duration: 6000,
    //         isClosable: true,
    //       });
    //     }
    //   });
    };

  return (
     <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={"gray.50"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
              <Stack align={"center"} mb="8">
                <Heading fontSize={"4xl"}>Reset password</Heading>
               
              </Stack>
              <FormControl isInvalid={errors.password} mt={5}>
              <FormLabel>Enter your new password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Complete this field to reset your password.",
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
                      }>
                      {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
             <Stack mt={10}>
              <FormControl
                  id="password2"
                  isInvalid={errors.password2}
                  isRequired
                >
                  <FormLabel>Confirm your new password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password2"
                      {...register("password2", {
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
                        }
                      >
                        {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.password2 && errors.password2.message}
                  </FormErrorMessage>
                </FormControl>
                </Stack>
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
            </Box>
          </form>
        </Stack>
      </Flex>
  )
}

export default ResetPassword