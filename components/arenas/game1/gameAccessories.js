import {
  useBreakpointValue,
  Link,
  Box,
  Center,
  Heading,
  Stack,
  WrapItem,
  Text,
  Image,
  Checkbox,
  SimpleGrid,
  List,
  Radio,
  ListItem,
  VStack,
  Button,
  RadioGroup,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { equipNFTitem } from "../../../fetchData/controllers";

const GameAccessories = () => {
  const nftItems = useSelector((state) => state.nftItems);
  const nftEquipped = useSelector((state) => state.nftEquipped);

  const [initialDefense] = nftEquipped.filter((nft) => nft.type === "defense");
  const [initialAttack] = nftEquipped.filter((nft) => nft.type === "attack");
  const [initialLuck] = nftEquipped.filter((nft) => nft.type === "luck");

  const defItems = nftItems.filter((nft) => nft.type === "defense");
  const attItems = nftItems.filter((nft) => nft.type === "attack");
  const luckItems = nftItems.filter((nft) => nft.type === "luck");

  // Estados para elegir un nft item por tipo
  const [defense, setDefense] = useState(initialDefense?.id);
  const [anteriorDef, setAnteriorDef] = useState(initialDefense?.id);
  const [attack, setAttack] = useState(initialAttack?.id);
  const [anteriorAtt, setAnteriorAtt] = useState(initialAttack?.id);
  const [luck, setLuck] = useState(initialLuck?.id);
  const [anteriorLuck, setAnteriorLuck] = useState(initialLuck?.id);

  // Setear los estados en la DB
  useEffect(() => {
    if (defense !== anteriorDef) {
      equipNFTitem(defense);
      equipNFTitem(anteriorDef);
    }
  }, [defense]);

  useEffect(() => {
    if (attack !== anteriorAtt) {
      equipNFTitem(attack);
      equipNFTitem(anteriorAtt);
    }
  }, [attack]);

  useEffect(() => {
    if (luck !== anteriorLuck) {
      equipNFTitem(luck);
      equipNFTitem(anteriorLuck);
    }
  }, [luck]);

  //
  const handlerDefense = (e) => {
    setAnteriorDef(defense);
    setDefense(e);
  };

  const handlerAttack = (e) => {
    setAnteriorAtt(attack);
    setAttack(e);
  };
  const handlerLuck = (e) => {
    setAnteriorLuck(luck);
    setLuck(e);
  };

  return (
    <WrapItem>
      <Center>
        <Box>
          <Box
            mt={10}
            mb={10}
            role={"group"}
            p={6}
            maxW={"350px"}
            w={"full"}
            bg={"gray.800"}
            color={"white"}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box maxW={"7xl"} columns={{ base: 1, md: 2 }} spacing={20}>
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                fontWeight={500}
                color={"white"}
                textTransform={"uppercase"}
                mb={"6"}
                align={"center"}
                justify={"center"}
              >
                YOUR ACCESSORIES
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <Text
                    fontSize={{ base: "8px", lg: "18px" }}
                    color={"white"}
                    textTransform={"uppercase"}
                    mb={"2"}
                    fontWeight={"bold"}
                    align={"left"}
                    justify={"center"}
                  >
                    Defense
                  </Text>
                  <RadioGroup
                    onChange={handlerDefense}
                    value={defense}
                    defaultValue={defense}
                  >
                    <Stack direction="row">
                      {defItems.map((item) => {
                       return <Radio
                          value={item.id} key={item.id}
                        >{`${item.type}: ${item.power}`}</Radio>;
                      })}
                    </Stack>
                  </RadioGroup>
                </List>
              </SimpleGrid>
              <Divider my={5} />
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <Text
                    fontSize={{ base: "8px", lg: "18px" }}
                    color={"white"}
                    textTransform={"uppercase"}
                    mb={"2"}
                    fontWeight={"bold"}
                    align={"left"}
                    justify={"center"}
                  >
                    Attack
                  </Text>
                  <RadioGroup onChange={handlerAttack} value={attack}>
                    <Stack direction="row">
                      {attItems.map((item) => {
                        return <Radio
                          value={item.id} key={item.id}
                        >{`${item.type}: ${item.power}`}</Radio>;
                      })}
                    </Stack>
                  </RadioGroup>
                </List>
              </SimpleGrid>
              <Divider my={5} />

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <Text
                    fontSize={{ base: "8px", lg: "18px" }}
                    color={"white"}
                    textTransform={"uppercase"}
                    mb={"2"}
                    fontWeight={"bold"}
                    align={"left"}
                    justify={"center"}
                  >
                    Luck
                  </Text>
                  <RadioGroup onChange={handlerLuck} value={luck}>
                    <Stack direction="row">
                    {luckItems.map((item) => {
                        return <Radio
                          value={item.id} key={item.id}
                        >{`${item.type}: ${item.power}`}</Radio>;
                      })}
                    </Stack>
                  </RadioGroup>
                </List>
              </SimpleGrid>
            </Box>
          </Box>

          {/* BOTONES */}
          <VStack
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
          >
            <Stack direction={"row"} justify={"center"}>
              <Link href="/">
                <Button
                  bg={"gray.800"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                >
                  HOME
                </Button>
              </Link>
              <Link href="/play">
                <Button
                  bg={"gray.800"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                >
                  PLAY
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Box>
      </Center>
    </WrapItem>
  );
};

export default GameAccessories;
