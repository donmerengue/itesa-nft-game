import { Box } from "@chakra-ui/react";
import HeadMarket from "./head/head";
import GridMarket from "./grid/grid";
import { auth } from "../../firebase/firebase-config";
import DeslogueadoPage from "../auth/DeslogueadoPage";

const Marketplace = () => {
  return (
    <>
      {auth.currentUser ? (
        <Box>
          <HeadMarket />
          <GridMarket />
        </Box>
      ) : (
        <DeslogueadoPage />
      )}
    </>
  );
};
export default Marketplace;
