import {
  Box,
  Center,
  Heading,
  Stack,
  WrapItem,
  Text,
  Image,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const AvatarRandom = () => {

  const rival = useSelector(state=>state.rival)
  const rivalAvatar = useSelector(state=>state.rivalAvatar)

  return (
    <WrapItem>
      <Center>
        <Box
          mt={10}
          mb={10}
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={"gray.800"}
          color={"white"}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}>
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              filter: "blur(10px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(10px)",
              },
            }}>
            <Image
              rounded={"lg"}
              height={280}
              width={282}
              objectFit={"cover"}
              src={rivalAvatar?.img}
              alt={""}
            />
          </Box>

          <Stack pt={20} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {rivalAvatar?.name}
            </Heading>
            <Text>Level: {rival?.level}</Text>
          </Stack>
        </Box>
      </Center>
    </WrapItem>
  );
};

export default AvatarRandom;
