import React from "react";
import Navbar from "../../components/layout/Navbar";
import Balance from "../../components/tokens/Balance";
import Funding from "../../components/tokens/Funding";
import Withdraw from "../../components/tokens/Withdraw";

const TokensPage = () => {
  return (
    <div>
      <Navbar />
      <Balance />
      <Funding />
      <Withdraw />
    </div>
  );
};

export default TokensPage;
