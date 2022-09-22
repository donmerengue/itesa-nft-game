import { Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
import Balance from "../../../components/tokens/Balance";
import Funding from "../../../components/tokens/Funding";
import Withdraw from "../../../components/tokens/Withdraw";

const TokensPage = () => {
  return (
    <>
      <Navbar />
      <Tabs mt={10} isFitted variant="enclosed" >
        <TabList mb="1em" >
          <Tab>Balance</Tab>
          <Tab>Funding</Tab>
          <Tab>Withdraw</Tab>
        </TabList>
        <TabPanels > 
          <TabPanel>
            <Balance />
          </TabPanel>
          <TabPanel  >
            <Funding />
          </TabPanel>
          <TabPanel>
            <Withdraw />
          </TabPanel>
        </TabPanels>
      </Tabs>
    <Footer/>

    </>
  );
};

export default TokensPage;
