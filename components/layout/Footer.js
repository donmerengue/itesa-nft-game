import { Box, Icon, Container, Link, Stack, Text } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { ChatIcon, EmailIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import ModalChat from "../chatbot/Chat-bot1/ModalChat";
import { useState } from "react";

function Footer() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [activate, setActivate] = useState(false);

  const handleChat = () => {
    setActivate(true);
    onOpen();
  };

  return (
    <Box bg={"gray.900"} color={"gray.50"}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        className=" bottom-0 w-full"
      >
        <Link href="/">
          <Text>INTERGALAXY</Text>
        </Link>
        <Text>© 2022 Intergalaxy. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <button onClick={handleChat}>
            <Icon as={ChatIcon} className="text-4xl hover:bg-blue-400" />
          </button>
          {activate && (
            <ModalChat
              isOpen={isOpen}
              onClose={onClose}
            />
          )}
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
