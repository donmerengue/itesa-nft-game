import { async } from "@firebase/util";
import React, { useState } from "react";
import { updateData } from "../../../fetchData/controllers";
import { auth } from "../../../firebase/firebase-config";




const ItemUser = ({ user, setUsers }) => {
  const [admin, setAdmin] = useState(false);

  const toggleAdmin=(e)=>{
    setAdmin(!admin)
     updateData("users", auth.currentUser.uid, { isAdmin: admin })
  }
  
  return (
    <>
      <tr className="border-b hover:bg-orange-100 bg-gray-100">
        <td className="p-3 px-5">
          <input
            type="text"
            value={user.name}
            readOnly
            className="bg-transparent focus:outline-none"
          />
        </td>
        <td className="p-3 px-5">
          <input
            type="text"
            value={user.email}
            readOnly
            className="bg-transparent focus:outline-none"
          />
        </td>
        <td className="p-3 px-5">
          {user.isAdmin === true ? (
            <button
            onClick={toggleAdmin}
              type="button"
              className="mr-3 text-sm bg-red-700 hover:bg-red-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              PUT OFF
            </button>
          ) : (
            <button
            onClick={toggleAdmin}
              type="button"
              className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              TO GIVE
            </button>
          )}
        </td>
        <td className="p-3 px-5 flex justify-end">
          {user.isActive === true ? (
            <button
              type="button"
              className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              BAN
            </button>
          ) : (
            <button
              type="button"
              className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              ACTIVATE
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default ItemUser;
