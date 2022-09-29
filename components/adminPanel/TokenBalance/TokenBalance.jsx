import React, { useState } from "react";
import { getDocumento } from "../../../fetchData/controllers";
import {
  getBalance,
  getBalanceBNB,
} from "../../../utils/blockchain/tokenOperations";

const TokenBalance = () => {
  const [virtualBalance, setVirtualBalance] = useState(0);
  const [realBalance, setRealBalance] = useState(0);
  const [tokensEmitted, setTokensEmitted] = useState(0);
  const [balanceBNB, setBalanceBNB] = useState(0);

  const handleBalance = async (e) => {
    e.preventDefault();

    const getVirtualBalance = await getDocumento("virtualBalance", "1");
    setVirtualBalance(getVirtualBalance.ITGX);

    const getRealBalance = await getBalance(
      "0x52Ec083D30192691872B60334bFDd1450C1826d9"
    );
    setRealBalance(getRealBalance);

    setTokensEmitted(realBalance - virtualBalance);

    const getBNBBalance = await getBalanceBNB();
    setBalanceBNB(getBNBBalance);
  };

  return (
    <>
      <div className="text-gray-900 bg-white w-full h-full">
        <div className="container">
          <button
            className=" p-2 pl-5 pr-5 bg-transparent border-2 border-gray-900  transition-colors duration-700 transform hover:bg-gray-900 hover:text-gray-100 focus:border-4  focus:bg-gray-900 focus:text-white focus:border-white"
            onClick={handleBalance}
          >
            Token Balance
          </button>

          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-3">
            <thead className="text-white">
              <tr className="bg-gray-900 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">Virtual Balance</th>
                <th className="p-3 text-center ">Real Balance</th>
                <th className="p-3 text-center ">Tokens Emitted</th>
                <th className="p-3 text-center ">Balance Bnb</th>
              </tr>
            </thead>
            <tbody className="flex-1 sm:flex-none">
        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
            {virtualBalance}
          </td>
          <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
            {realBalance}
          </td>
          <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
            {tokensEmitted}
          </td>
          <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
            {balanceBNB}
          </td>
        </tr>
      </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TokenBalance;
