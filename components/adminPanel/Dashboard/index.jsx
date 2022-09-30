import React from "react";
import { auth } from "../../../firebase/firebase-config";
import DeslogueadoPage from "../../auth/DeslogueadoPage";
import Sidebar from "../SideBar/Sidebar";
import Dashboar from "./Dashboard";

const Index = () => {

  return (
    <>
        <div className="flex overflow-hidden bg-white ">
          <Sidebar />
          <Dashboar />
        </div>
    </>
  );
};

export default Index;
