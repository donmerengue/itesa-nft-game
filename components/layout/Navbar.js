import { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { requestAccount } from "../../utils/blockchain/tokenOperations";
import { logoutUser } from "../../state/user";
import useAuth from "../../hooks/useAuth";
import { async } from "@firebase/util";
import Image from "next/image";
import Cookies from "js-cookie";

const Navbar = ({ userCookie }) => {
  const [account, setAccount] = useState("");
  const dispatch = useDispatch();

  // FIXME: 15/9 -> Funciona la cookie pero genera react hydration error
  const userCookieFront = Cookies.get("user");
  console.log("userCookieFront", userCookieFront);

  //Traer info del usuario logueado
  useAuth();
  const user = useSelector((state) => state.user);
  
  //Manejo de cuenta de Metamask
  const handleAccount = async () =>
    account ? setAccount(null) : setAccount(await requestAccount());

  //Manejo del logout
  const handlerLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Box bg={"gray.900"} color={"gray.50"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Stack direction="row" spacing={4} align="center">

          <Link href="/">
            <Button colorScheme="gray.50" variant="ghost">
              INTERGALAXY
            </Button>
            {/* <Image
              src="/jupiter.png"
              alt="intergalaxy logo"
              height={64}
              width={64}></Image> */}
          </Link>

          <Link href="/marketplace">
          <Button colorScheme="gray.50" variant="ghost">
            MARKETPLACE
          </Button>
          </Link>

          <Link >
          <Button colorScheme="gray.50" variant="ghost">
            PLAY NOW
          </Button>
          </Link>
          
        </Stack>
        <Stack direction="row" spacing={4} align="center">
          {user ? (
            <Link href="/">
              <Button
                colorScheme="gray.50"
                variant="ghost"
                onClick={handlerLogout}>
                LOGOUT
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button colorScheme="gray.50" variant="ghost">
                LOGIN
              </Button>
            </Link>
          )}

          {user ? (
            <>
              <Link href="/user/profile">
                <Button colorScheme="gray.50" variant="ghost">
                  PROFILE
                </Button>
              </Link>
              <Link href="/user/history">
                <Button colorScheme="gray.50" variant="ghost">
                  HISTORY
                </Button>
              </Link>
            </>
          ) : (
            ""
          )}
           {user?(
            <Link href="/admin/dashboard">
              <Button colorScheme="gray.50" variant="ghost">
                ADMIN
              </Button>
            </Link>
          ) : (
            ""
          )}           
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                onClick={handleAccount}>
                {account ? (
                  <p className="text-white">{account[0].slice(0, 8)}</p>
                ) : (
                  <Avatar
                    size={"sm"}
                    bg="gray.900"
                    src={"https://imgur.com/w9VLtoi.png"}
                  />
                )}
              </MenuButton>
            </Menu>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
