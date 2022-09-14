import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { updateData } from "../../fetchData/controllers";
import { auth } from "../../firebase/firebase-config";
import { createWallet } from "../../utils/blockchain/tokenOperations";

const WalletInstrucions = () => {
  const user = useSelector((state) => state.user);

//   const { address, mnomic } = createWallet();

//   updateData("users", auth.currentUser.uid, {
//     walletAddress: address,
//     mnomic,
//   });

  return (
    <>
      <div>Wallet Address : {address}</div>
      <div>Wallet mnomic : {mnomic}</div>
    </>
  );
};

export default WalletInstrucions;
