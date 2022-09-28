import { useEffect } from "react";
import { useState } from "react";

const ItemNfts = ({ nft, active }) => {
  const [data, setData] = useState({});
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    if (nft.metadata !== undefined && nft.metadata !== null) {
      setData(JSON.parse(nft.metadata));
    }
  }, [active]);

  useEffect(() => {
    if(data.attributes !== undefined){
        setAttributes(data?.attributes)
    }
    ;
  }, [data]);

  return (
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
        <td className="text-center text-green-500 border-grey-light border hover:bg-gray-100 p-3 truncate">
          <button>true</button>
        </td>
      </tr>
    </tbody>
  );
};

export default ItemNfts;
