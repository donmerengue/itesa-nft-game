import { async } from "@firebase/util";
import React, { useState } from "react";
import { updateData } from "../../../fetchData/controllers";
import { auth } from "../../../firebase/firebase-config";

const ItemUser = ({ user, setUsers }) => {
  const [admin, setAdmin] = useState(false);

  const toggleAdmin = (e) => {
    setAdmin(!admin);
    updateData("users", auth.currentUser.uid, { isAdmin: admin });
  };
console.log(user)
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
          {user.isAdmin?(
            <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
            Put off
            </td>
          ):(
            <td className="border-grey-light border hover:bg-gray-100 p-3 text-green-400 hover:text-green-600 hover:font-medium cursor-pointer">
            To give
          </td>
          )}
          {user.isActive? (
            <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
            BAN
          </td>
          ):(
            <td className="border-grey-light border hover:bg-gray-100 p-3 text-green-400 hover:text-green-600 hover:font-medium cursor-pointer">
            Activate
          </td>
          )}
          
        </tr>
      </tbody>
    </>
  );
};

export default ItemUser;
