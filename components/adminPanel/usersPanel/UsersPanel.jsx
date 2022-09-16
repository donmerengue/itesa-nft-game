import React, { useState } from "react";
import { getData } from "../../../fetchData/controllers";
import ItemUser from "./ItemUser";


const UsersPanel = () => {
  const [users, setUsers] = useState({});
  const [active, setActive] = useState(false);
 
  const handlerGet = (e) => {
    e.preventDefault()
    getData("users").then((data) => {
      setUsers(data);
      setActive(true);
    });
  };
 
  return (
    <>
      <div className="text-gray-900 bg-white w-full h-full">
        <div className="p-4 flex ml-20">
          <button
            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            onClick={handlerGet}
          >
            ALL USERS
          </button>
        </div>
        <div className="pr-40 py-4 flex justify-center  relative  ml-20  ">
          <table className="w-full text-md bg-gray-300 shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">NAME</th>
                <th className="text-left p-3 px-5">EMAIL</th>
                <th className="text-left p-3 px-5">ADMIN</th>
                <th></th>
              </tr>
              {active
                ? users.map((user, i) => (             
                      <ItemUser key={i} user={user} setUsers={setUsers}/>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UsersPanel;
