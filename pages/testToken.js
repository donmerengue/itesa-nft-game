import React, { useEffect, useState } from "react";
import {
  getBalance,
  totalSupply,
  requestAccount,
  sendTokens,
} from "../utils/blockchain/tokenOperations";

const TestToken = () => {
  //   const address = "0x39906C8A5D39fc920DF46b2aCeDc1B80e75E5b50";
  const [balance, setBalance] = useState("");
  const [total, setTotal] = useState(0);
  const [account, setAccount] = useState(0);

  const [value, setValue] = useState("");
  const [wallet, setWallet] = useState("");

  const handleBalance = async () => {
    setBalance(await getBalance(`${account}`));
  };
  const handleAccount = async () => {
    setAccount(await requestAccount());
  };

  const handleValue =(e) => {
    
    setValue(e.target.value);
    console.log(value)
  };
  const handleWallet = (e) => {
    setWallet(e.target.value);
  };

  const send =async(e)=>{
    await sendTokens(`${value}`,wallet);
  }

  useEffect(() => {
    totalSupply().then((total) => setTotal(total));
  }, []);

  console.log(total);
  return (
    <>
      <button onClick={handleBalance}>BALANCE</button>
      <p>{balance}</p>
      <button onClick={handleAccount}>METAMASK</button>
      <p>{account}</p>
      <form onSubmit={send}>
        <input type="text"  onChange={handleValue} value={value}/> <br/>
        <input type="text"  onChange={handleWallet} value={wallet}/>
      </form>
    </>
  );
};

export default TestToken;
