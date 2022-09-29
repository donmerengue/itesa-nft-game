import ItemDashboard from "./ItemDashboard";
import { useState } from "react";
import {
  getBalance,
  getBalanceBNB,
  getTokenTransactions,
  getTotalTransactionsBNB,
} from "../../../utils/blockchain/tokenOperations";
import { getDocumento } from "../../../fetchData/controllers";

const Dashboard = () => {
  const [txToken, setTxToken] = useState([]);
  const [active, setActive] = useState(false);
  const [custodio, setCustodio] = useState(false);
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
      
  
  console.log("virtualBalance", virtualBalance);
  console.log("realBalance", realBalance);
  console.log("Tokens en circulacion", tokensEmitted);
  console.log("BNB en cuenta custodio:", balanceBNB);

  const handleTx = (e) => {
    e.preventDefault();
    getTokenTransactions().then((res) => {
      setTxToken(res);
      setCustodio(false);
      setActive(true);
    });
  };
  const handleCustodio = (e) => {
    e.preventDefault();
    getTotalTransactionsBNB().then((res) => {
      let arr = res.filter((tx) => tx.methodId === "0x");
      setTxToken(arr);
      setActive(true);
      setCustodio(true);
    });
  };

  return (
    <>
      <div className="text-gray-900 bg-white w-full h-full">
        <div className="container">
          <button
            className=" p-2 pl-5 pr-5 bg-transparent border-2 border-gray-900  transition-colors duration-700 transform hover:bg-gray-900 hover:text-gray-100 focus:border-4  focus:bg-gray-900 focus:text-white focus:border-white"
            onClick={handleBalance}>
            Token Balance
          </button>
          <button
            className=" p-2 pl-5 pr-5 bg-transparent border-2 border-gray-900  transition-colors duration-700 transform hover:bg-gray-900 hover:text-gray-100 focus:border-4  focus:bg-gray-900 focus:text-white focus:border-white"
            onClick={handleTx}>
            Token-Tx ITGX
          </button>
          <button
            className="p-2 pl-5 pr-5 bg-transparent border-2 border-gray-900  transition-colors duration-700 transform hover:bg-gray-900 hover:text-gray-100 focus:border-4 focus:bg-gray-900 focus:text-white focus:border-white"
            onClick={handleCustodio}>
            Custodio-Tx BNB
          </button>
          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-3">
            <thead className="text-white">
              <tr className="bg-gray-900 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">Date</th>
                <th className="p-3 text-center ">Hash tx</th>
                {custodio ? (
                  <th className="p-3 text-center">From</th>
                ) : (
                  <th className="p-3 text-center">Receiver</th>
                )}

                <th className="p-3 text-center" width="110px">
                  Value
                </th>
                <th className="p-6 text-center" width="110px">
                  Confirmations
                </th>
              </tr>
            </thead>
            {active
              ? txToken?.map((tx, i) => (
                  <ItemDashboard key={i} tx={tx} custodio={custodio} />
                ))
              : ""}
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
