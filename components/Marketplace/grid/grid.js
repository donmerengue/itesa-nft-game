import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getMetaData, convertImage } from "../../../utils/blockchain/nftFetch";
import Items from "./items";

const GridMarket = () => {
  const [nfts, setNfts] = useState({});
  const [active, setActive] = useState(false);

  useEffect(() => {
    getMetaData()
      .then((res) => {
        setNfts(res);
        setActive(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Center>
        <Wrap ml={7} marginRight={7} columns={4} spacing={5}>
          {active ? (
            nfts?.map((nft, i) => (
              <>
                <Items active={active} nft={nft} key={i} />
              </>
            ))
          ) : (
            <Spinner size="lg" />
          )}
        </Wrap>
      </Center>
    </>
  );
};

export default GridMarket;
