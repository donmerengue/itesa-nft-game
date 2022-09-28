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
import { useState } from "react";
import { useEffect } from "react";
import { getMetaData } from "../../../utils/blockchain/nftFetch";
import NftItem from "./nftItem";

const ItemPage = ({ id }) => {
  const [nfts, setNfts] = useState({});
  const [details, setDetails] = useState({});
  const [active, setActive] = useState(false);

  useEffect(() => {
    getMetaData()
      .then((res) => res.map((nft) => JSON.parse(nft.metadata)))
      .then((res) => {
        setNfts(res);
        setActive(true);
      });
  }, []);

 

  return <>{active ? <NftItem nfts={nfts} id={id} active={active}  /> : ""}</>;
};

export default ItemPage;
