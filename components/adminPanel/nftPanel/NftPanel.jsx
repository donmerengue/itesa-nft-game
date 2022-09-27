import { useState } from "react";
import { getMetaData } from "../../../utils/blockchain/nftFetch";
import ItemNfts from "./ItemNfts";

const NftPanel = () => {
  const [nfts, setNfts] = useState({});
  const [active, setActive] = useState(false);

  const handleNfts = async () => {
    setNfts(await getMetaData());
    setActive(true);
  };
 

  return (
    <>
      <div className="text-gray-900 bg-white w-full h-full">
        <div className="container">
          <button
            className=" p-2 pl-5 pr-5 bg-transparent border-2 border-gray-900  transition-colors duration-700 transform hover:bg-gray-900 hover:text-gray-100 focus:border-4  focus:bg-gray-900 focus:text-white focus:border-white"
            onClick={handleNfts}
          >
            NFTS ACCESORIES
          </button>
          <td className="text-center text-white  border-grey-light border bg-gray-900 hover:bg-gray-700  p-2 truncate">
            token_address: {nfts[0]?.token_address}
          </td>
          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-3">
            <thead className="text-white">
              <tr className="bg-gray-900 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">ID</th>
                <th className="p-3 text-center ">TYPE</th>
                <th className="p-3 text-center ">POWER</th>
                <th className="p-3 text-center ">NFT NAME</th>
                <th className="p-3 text-center" width="110px">
                  ACTIVE
                </th>
              </tr>
            </thead>
            {active
              ? nfts.map((nft, i) => (
                
                  <ItemNfts nft={nft} active={active} key={i} />
                ))
              : ""}
          </table>
        </div>
      </div>
    </>
  );
};

export default NftPanel;
