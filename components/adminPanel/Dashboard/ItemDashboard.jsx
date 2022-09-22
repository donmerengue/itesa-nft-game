import { useState } from "react";
import { convertTime } from "../../../utils/blockchain/tokenOperations";

const ItemDashboard = ({ tx, custodio }) => {
  const [hash, setHash] = useState("");
  
  const convertDecimal = (n) => Number.parseInt(n) / 1000000000000000000;

  const handleHash = () => {
    hash ? setHash(null) : setHash(tx.hash);
  };

  return (
    <tbody className="flex-1 sm:flex-none">
      <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
        <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
          {convertTime(tx.timeStamp)}
        </td>
        <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
          {hash? <button onClick={handleHash}>{hash}</button>: <button onClick={handleHash}>{tx.hash.slice(0,10)}...</button>}
        </td>
        <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
          {custodio ? tx.from : tx.to}...
        </td>
        <td className=" p-2 text-center border-grey-light border hover:bg-gray-100  truncate">
          {convertDecimal(tx.value)}
        </td>
        <td className=" text-center border-grey-light border hover:bg-gray-100 p-1 truncate">
          {tx.confirmations}
        </td>
      </tr>
    </tbody>
  );
};

export default ItemDashboard;
