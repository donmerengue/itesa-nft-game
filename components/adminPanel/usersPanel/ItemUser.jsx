import { useState } from "react";
import { updateData } from "../../../fetchData/controllers";


const ItemUser = ({ user, setUpdate }) => {
  const [admin, setAdmin] = useState(false);

  const toggleAdmin = async (e) => {
    await updateData("users", user.id, { isAdmin: !user.isAdmin });
    setUpdate((update) => !update);
  };

  const toggleBan = async (e) => {
    await updateData("users", user.id, { isActive: !user.isActive });
    setUpdate((update => !update));
  };

  return (
    <>
      <tbody className="flex-1 sm:flex-none">
        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td className="border-grey-light border hover:bg-gray-100 p-3">
            {user.name}
          </td>
          <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
            {user.email}
          </td>
          {user.isAdmin ? (
            <td
              onClick={toggleAdmin}
              className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
            >
              Put off
            </td>
          ) : (
            <td
              onClick={toggleAdmin}
              className="border-grey-light border hover:bg-gray-100 p-3 text-green-400 hover:text-green-600 hover:font-medium cursor-pointer"
            >
              To give
            </td>
          )}
          {user.isActive ? (
            <td onClick={toggleBan} className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
              BAN
            </td>
          ) : (
            <td onClick={toggleBan} className="border-grey-light border hover:bg-gray-100 p-3 text-green-400 hover:text-green-600 hover:font-medium cursor-pointer">
              Activate
            </td>
          )}
        </tr>
      </tbody>
    </>
  );
};

export default ItemUser;
