import ItemAvatar from "./itemAvatar";
import { getData} from "../../../fetchData/controllers";
import { useState, useEffect } from "react";

const Avatars = () => {
  const [avatars, setAvatars] = useState([]);
  const [allAvatars, setAllAvatars] = useState(false);
  
  useEffect(() => {
    getData("avatars").then((res) => {
      setAvatars(res);
      setAllAvatars(true)
    });
  }, []);

  return (
    <>
      <div className="text-gray-900 bg-white w-full h-full">
        <div className="container">
            <h1 className="text-4xl">Avatars</h1>
          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-3">
            <thead className="text-white">
              <tr className="bg-gray-900 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">ID</th>
                <th className="p-3 text-center ">URL IMAGE</th>
                <th className="p-3 text-center ">DELETE</th>
              </tr>
            </thead>
            {allAvatars &&
              avatars?.map((avatar, i) => (
                <ItemAvatar avatar={avatar} key={i} />
              ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Avatars;
