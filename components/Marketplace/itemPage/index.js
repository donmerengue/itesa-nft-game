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
  const [data, setData] = useState([]);

  useEffect(() => {
    getMetaData().then((res) => {
      setNfts(res);
      setActive(true);
    });
  }, []);

  useEffect(() => {
    getMetaData()
      .then((res) => res.map((nft) => JSON.parse(nft.metadata)))
      .then((res) => {
        setData(res);
      });
  }, [active]);

  

  return (
    <>
      {active ? (
        <NftItem nfts={nfts} id={id} active={active} data={data} />
      ) : (
        ""
      )}
    </>
  );
};

export default ItemPage;
