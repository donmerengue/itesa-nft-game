import { useDispatch } from "react-redux";
import { linkLogin } from "../../state/user";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  Flex,
  Stack,
  Heading,
  Text,
  Box,
  useToast,
  Link,
} from "@chakra-ui/react";

const Login = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // Enviar link de login al mail del usuario
  const onSubmit = ({ email }) => {
    dispatch(linkLogin(email)).then((res) => {
      if (!res.payload) {
        toast({
          title: "Verification email sent",
          description: "Please check your inbox (and spam)",
          status: "info",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
        setTimeout(() => {
          // Redirigir a carpeta de spam de Gmail
          router.push("https://mail.google.com/mail/u/0/#spam");
        }, 3500);
      } else {
        toast({
          title: "Email not registered",
          description: "Please sign up",
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
                <Heading fontSize={"4xl"}> Sign In (1/2)</Heading>
                <Text fontSize={"md"} color={"gray.600"}>
                  Enter your email to initiate login with 2FA
                </Text>
              </Stack>
              <FormControl isInvalid={errors.email}>
                <Input
                  id="email"
                  placeholder="Email"
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
                  Send Login Link
                </Button>
              </Stack>
              <Heading fontSize={"md"} mt={9}></Heading>
              <Stack pt={6}>
                <Text align={"center"}>
                  New to Intergalaxy?{" "}
                  <Link href="/register" color={"blue.400"}>
                    Create your account
                  </Link>
                </Text>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
