import React, { useState } from "react";
import { getData } from "../../../fetchData/controllers";
import ItemUser from "./ItemUser";

const UsersPanel = () => {
  const [users, setUsers] = useState({});
  const [active, setActive] = useState(false);

  const handlerGet = (e) => {
    e.preventDefault();
    getData("users").then((data) => {
      setUsers(data);
      setActive(true);
    });
  };

  return (
    <>
      <div className="text-gray-900 bg-white w-full h-full">
        <body className="responsive">
          <div className="container">
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-3">
              <thead className="text-white">
                <tr className="bg-gray-900 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left" width="110px">
                    Admin
                  </th>
                  <th className="p-3 text-left" width="110px">
                    Baneo
                  </th>

                  {active ? (
                    ""
                  ) : (
                    <th className="p-3 text-left" width="140px">
                      <button
                        className="mr-3 text-sm bg-orange-400 hover:bg-orange-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        onClick={handlerGet}
                      >
                        All users
                      </button>
                    </th>
                  )}
                </tr>
              </thead>
              {active? users.map((user,i)=>(
                <ItemUser user={user} setUsers={setUsers} key={i}/>
              )):""}
            </table>
          </div>
        </body>
      </div>
    </>
  );
};

export default UsersPanel;
