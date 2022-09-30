import { Box } from "@chakra-ui/react";
import HeadMarket from "./head/head";
import GridMarket from "./grid/grid";

const Marketplace = () => {
  return (
    <>
      <Box>
        <HeadMarket />
        <GridMarket />
      </Box>
    </>
  );
};
export default Marketplace;
