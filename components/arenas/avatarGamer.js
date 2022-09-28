import {
  Box,
  Center,
  Heading,
  Stack,
  WrapItem,
  Text,
  Image,
  Checkbox,
  Switch,
  Divider,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { async } from "@firebase/util";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateData } from "../../fetchData/controllers";
import { auth } from "../../firebase/firebase-config";

const AvatarGamer = () => {
  const [toggled, setToggled] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const dailyMatches = useSelector((state) => state.dailyMatches);
  const user = useSelector((state) => state.user);
  const avatar = useSelector((state) => state.avatar);


  // console.log(user.wannaBet );
  // user.wannaBet = "hola" 
  // console.log(user.wannaBet);

  const handlerBetToggler = async () => {

user.wannaBet = !user.wannaBet
    
    await updateData("users", auth.currentUser?.uid, {
      wannaBet: user?.wannaBet,
    });


    if (user?.wannaBet) {
      toast({
        title: "Toggle succesful",
        description: "Now you can bet after your 5 daily battles",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    }

  };


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
          zIndex={1}
        >
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
            }}
          >
            <Image
              rounded={"lg"}
              height={280}
              width={282}
              objectFit={"cover"}
              src={avatar?.img}
              alt={""}
            />
          </Box>

          <Stack pt={20} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {avatar?.name}
            </Heading>
            <Text>Level: {user?.level}</Text>
            {router.pathname === "/arena/game" && (
              <>
                <Text>Matches played today: {dailyMatches?.length}</Text>
                <Divider py={5} />
                <Center>
                  <FormControl p={5}>
                    <FormLabel>
                      I want to bet{" "}
                      <Switch
                        ml={2}
                        size={"lg"}
                        defaultChecked={user?.wannaBet}
                        onChange={handlerBetToggler}
                      />
                    </FormLabel>
                  </FormControl>
                </Center>
              </>
            )}
          </Stack>
        </Box>
      </Center>
    </WrapItem>
  );
};

export default AvatarGamer;
