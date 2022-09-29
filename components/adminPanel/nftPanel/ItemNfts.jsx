import { useEffect } from "react";
import { useState } from "react";
import { nftPrice } from "../../../utils/marketplace/nftPrice";
import { burnNft } from "../../../utils/blockchain/nftOps";
import { useRouter } from "next/router";

const ItemNfts = ({ nft, active, key }) => {
  const [data, setData] = useState({});
  const [attributes, setAttributes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (nft.metadata !== undefined && nft.metadata !== null) {
      setData(JSON.parse(nft.metadata));
    }
  }, [active]);

  useEffect(() => {
    if (data.attributes !== undefined) {
      setAttributes(data?.attributes);
    }
  }, [data]);

  const handleBurn = (e) => {
    e.preventDefault();
    burnNft(nft.token_id);
    // setTimeout(() => {
    //   router.reload();
    // }, 1300);
  };

  return (
    <>
      <tbody className="flex-1 sm:flex-none">
        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
            {nft.token_id}
          </td>
          <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
            {attributes[0]?.value}
          </td>
          <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
            {attributes[2]?.value}
          </td>
          <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
            {data?.name}
          </td>
          <td className="text-center text-orange-500 border-grey-light border hover:bg-gray-100 p-3 truncate">
            <button>{nftPrice(attributes[2]?.value)}</button>
          </td>
          <td className="text-center text-red-500 border-grey-light border hover:bg-red-300 p-3 truncate">
            <button onClick={handleBurn}>BURN</button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ItemNfts;
