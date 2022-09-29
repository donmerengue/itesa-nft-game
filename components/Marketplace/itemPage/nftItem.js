import { useEffect, useState } from "react";
import { convertImage } from "../../../utils/blockchain/nftFetch";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { nftPrice } from "../../../utils/marketplace/nftPrice";
import ModalBuy from "./modalBuy";

const NftItem = ({ nfts, id, data, active }) => {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();

  const [nftImage, setNftImage] = useState("");
  const [nftDetail, setNftDetail] = useState([]);
  const [nft, setNft] = useState([]);
  const [meta, setMeta] = useState({});
  const [nftAttribute, setNftAttribute] = useState();
  const [complete, setComplete] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setNftDetail(nfts.filter((nft) => nft.token_id === id));
  }, [active]);

  useEffect(() => {
    setNft(nftDetail.filter((nft) => nft.token_id === id));
  }, [data]);

  useEffect(() => {
    if (nft[0]?.metadata !== undefined) {
      setMeta(JSON.parse(nft[0]?.metadata));
    }
    if (meta.image !== undefined) {
      setNftImage(convertImage(meta.image));
    }
    if (meta.attributes !== undefined) {
      setNftAttribute(meta.attributes);
    }
    setComplete(true);
  }, [nft]);

  const handlerBuy = () => {
    setModal((modal) => !modal);
    onOpen();
  };

  return (
    <>
      {complete ? (
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={nftImage}
                src={nftImage}
                fit={"cover"}
                align={"center"}
                justify={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "500px", lg: "600px" }}
              />
            </Flex>

            <Stack spacing={{ base: 4, md: 5 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={500}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {meta.name}
                </Heading>
                ITGX:{" "}
                {nftAttribute !== undefined
                  ? nftPrice(nftAttribute[2]?.value)
                  : ""}
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider borderColor={"gray.200"} />}
              >
                <VStack spacing={{ base: 2, sm: 3 }}>
                  <Text color={"gray.500"} fontSize={"2xl"} fontWeight={"250"}>
                    {}
                  </Text>
                  <Text fontSize={"lg"}>{meta.description}</Text>
                </VStack>

                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "20px" }}
                    color={"gray.900"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Properties
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    {}
                    <>
                      <List spacing={2}>
                        <ListItem>
                          <Text
                            as={"span"}
                            fontWeight={"bold"}
                            textTransform={"uppercase"}
                          >
                            Type:
                          </Text>{" "}
                          {nftAttribute !== undefined
                            ? nftAttribute[0]?.value
                            : ""}
                        </ListItem>
                        <ListItem>
                          <Text
                            as={"span"}
                            fontWeight={"bold"}
                            textTransform={"uppercase"}
                          >
                            POWER:
                          </Text>{" "}
                          {nftAttribute !== undefined
                            ? nftAttribute[2]?.value
                            : ""}
                        </ListItem>
                      </List>
                      <List spacing={2}>
                        <ListItem>
                          <Text
                            as={"span"}
                            fontWeight={"bold"}
                            textTransform={"uppercase"}
                          >
                            MATERIAL:
                          </Text>{" "}
                          {nftAttribute !== undefined
                            ? nftAttribute[1]?.value
                            : ""}
                        </ListItem>
                      </List>
                    </>
                    {}
                  </SimpleGrid>
                </Box>

                <Box columns={{ base: 1, md: 2 }} spacing={10}>
                  <Text
                    fontSize={{ base: "16px", lg: "20px" }}
                    color={"gray.900"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    mb={"4"}
                    justifyContent={"center"}
                  >
                    Details
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Contract Address:
                        </Text>{" "}
                        {nftDetail[0]?.token_address}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Token ID:
                        </Text>{" "}
                        {nftDetail[0]?.token_id}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Token Standard:
                        </Text>{" "}
                        {nftDetail[0]?.contract_type}
                      </ListItem>
                    </List>
                    <List spacing={2}>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Blockchain:
                        </Text>{" "}
                        BSC Testnet{" "}
                      </ListItem>
                    </List>
                  </SimpleGrid>
                </Box>
              </Stack>

              <Box>
                <VStack w={"full"} justify={"center"} mt={"10"}>
                  <Stack direction={"row"} justify={"center"}>
                    <Button
                      bg={"gray.800"}
                      rounded={"full"}
                      color={"white"}
                      _hover={{ bg: "blue.500" }}
                      onClick={handlerBuy}
                    >
                      BUY NOW
                    </Button>
                  </Stack>
                </VStack>
                {nftAttribute !== undefined ? (
                  <ModalBuy
                    open={modal}
                    price={nftPrice(nftAttribute[2]?.value)}
                    id={nft[0].token_id}
                  />
                ) : (
                  ""
                )}
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default NftItem;
