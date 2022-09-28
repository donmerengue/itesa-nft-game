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
  useBreakpointValue,
} from "@chakra-ui/react";

const NftItem = ({ nfts, id, active}) => {
  const [data, setData] = useState([]);
  const [nftImage, setNftImage] = useState("");
  const [nftDetail, setNftDetail] = useState([]);

  useEffect(() => {
    setData(nfts.filter((nft) => nft.name === id));
    
  }, [active]);

  useEffect(() => {
    if (data[0]?.image !== undefined) {
      setNftImage(convertImage(data[0]?.image));
    }
  }, [data]);

  console.log(data)
  return (
    <>
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
                {data[0]?.name}
              </Heading>
              <Text color={"gray.900"} fontWeight={300} fontSize={"2xl"}>
                ITGX: COMING SOON
              </Text>
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
                <Text fontSize={"lg"}>{data[0]?.description}</Text>
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
                        {data[0]?.attributes[0].value}
                      </ListItem>
                      <ListItem>
                        <Text
                          as={"span"}
                          fontWeight={"bold"}
                          textTransform={"uppercase"}
                        >
                          POWER:
                        </Text>{" "}
                        {data[0]?.attributes[2].value}
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
                        {data[0]?.attributes[1].value}
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
                      0x191a...2e8c{" "}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Token ID:
                      </Text>{" "}
                      2{" "}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Token Standard:
                      </Text>{" "}
                      ERC-721{" "}
                    </ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Blockchain:
                      </Text>{" "}
                      BSC Testnet{" "}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Last Updated:
                      </Text>{" "}
                      7 minutes ago{" "}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Creator Earnings:
                      </Text>{" "}
                      0%{" "}
                    </ListItem>
                  </List>
                </SimpleGrid>
              </Box>
            </Stack>

            <Box>
              <VStack
                w={"full"}
                justify={"center"}
                mt={"10"}
                px={useBreakpointValue({ base: 4, md: 8 })}
              >
                <Stack direction={"row"} justify={"center"}>
                  <Link href="">
                    <Button
                      bg={"gray.800"}
                      rounded={"full"}
                      color={"white"}
                      _hover={{ bg: "blue.500" }}
                    >
                      BUY NOW
                    </Button>
                  </Link>
                </Stack>
              </VStack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default NftItem;
