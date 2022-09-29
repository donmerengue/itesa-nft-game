import React from "react";
import Sidebar from "../../SideBar/Sidebar";
import AddAvatars from "./AddAvatars";

const index = () => {
  return (
    <div className="flex overflow-hidden bg-white ">
      <Sidebar />
      <AddAvatars />
    </div>
  );
};

export default index;
