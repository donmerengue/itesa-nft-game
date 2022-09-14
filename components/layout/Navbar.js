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
import { useSelector } from "react-redux";
/* import { HamburgerIcon, CloseIcon, } from '@chakra-ui/icons'; */
import { requestAccount } from "../../utils/blockchain/tokenOperations";

const Navbar = () => {
  const [account, setAccount] = useState("");
  const user = useSelector((state) => state.user);
 
  const handleAccount = async () =>account ? setAccount(null) : setAccount(await requestAccount());

  return (
    <Box bg={"gray.900"} color={"gray.50"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Stack direction="row" spacing={4} align="center">
          <Link href="/">
            <Button colorScheme="gray.50" variant="ghost">
             HOME
            </Button>
          </Link>
          <Button colorScheme="gray.50" variant="ghost">
         MARKETPLACE
          </Button>
        </Stack>
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="gray.50" variant="ghost">
            PLAY NOW
          </Button>
        </Stack>
        <Stack direction="row" spacing={4} align="center">
    
          {user ? (
            <Link href="/">
              <Button colorScheme="gray.50" variant="ghost">
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

          {user? (
            <>
            <Link href="/">
              <Button colorScheme="gray.50" variant="ghost">
               PROFILE
              </Button>
            </Link>
            <Link href="/">
              <Button colorScheme="gray.50" variant="ghost">
                HISTORY
              </Button>
            </Link>
            </>
          ):""}

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                onClick={handleAccount}
              >
                {account ? (
                  <p>{account[0].slice(0, 8)}</p>
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
