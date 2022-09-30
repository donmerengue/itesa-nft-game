import { Img, useToast, Wrap, Center, WrapItem, Flex,Box, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { addNewDoc } from "../../../fetchData/controllers";
import { auth } from "../../../firebase/firebase-config";

const Avatars = ({ avatar }) => {
  const [avatarName, setAvatarName] = useState("");
  const [realName, setRealName] = useState("");
  const toast = useToast();
  const router = useRouter();

  const handleName = (e) => {
    setRealName(e.target.value);
  };
  const definitiveName = (e) => {
    e.preventDefault();
    setAvatarName(realName);
  };

  const handleAvatar = (avatar) => {
    if (avatarName) {
      addNewDoc("userAvatar", avatar);
      toast({
        title: "Avatar created successfully",
        description: "Redirecting to home",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
      router.replace("/");
    } else {
      toast({
        title: "Error creating Avatar",
        description: "Please choose a name",
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Center>
        <Wrap ml={7} marginRight={10} columns={4}>
          {/*      <div className="lg:flex"> */}
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
                  mt={1}
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
                  <Img
                 /*    width={"20rem"}
                    height={"16rem"} */
                    rounded={"lg"}
                    height={280}
                    width={282}
                    objectFit={"cover"}
                    alt={""}
                    src={avatar.url}
                    bg={"white"}
                  
                  />
                  </Box>
                  <Stack pt={20} align={"center"}>

                  {/*   <div className="flex flex-col justify-between py-6 lg:mx-6"> */}
                  {avatarName ? (
                    <Text align={"center"}
                    color={"gray.500"}
                    fontSize={"sm"}
                    textTransform={"uppercase"}/* className="text-3xl font-semibold text-gray-800  dark:text-white " */>
                      {avatarName}
                    </Text>
                  ) : (
                    <form onSubmit={definitiveName}>
                      <input
                        type="search"
                        className="w-full border-black  px-4 py-1 text-gray-900 "
                        placeholder="Name your Avatar"
                        onChange={handleName}
                      />
                    </form>
                  )}

                  <span className="text-sm">SELECT YOUR AVATAR</span>
                  <button
                    onClick={() =>
                      handleAvatar({
                        img: avatar.url,
                        id: avatar.id,
                        name: avatarName,
                        userId: auth.currentUser.uid,
                      })
                    }
                    className="p-2 pl-5 pr-5 bg-transparent border-2 border-orange-500 text-orange-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-orange-600 hover:text-gray-100 focus:border-4 focus:border-indigo-300" 
                  >
                    Select
                  </button>
                  {/* </div> */}
                </Stack>
              </Box>
            </Center>
          </WrapItem>
          {/*   </div> */}
        </Wrap>
      </Center>
    </>
  );
};
export default Avatars;
