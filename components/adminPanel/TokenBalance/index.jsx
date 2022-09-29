import Sidebar from "../SideBar/Sidebar";
import TokenBalance from "./TokenBalance";

const index = () => {
  return (
    <>
      <div className="flex overflow-hidden bg-white ">
        <Sidebar />
        <TokenBalance />
      </div>
    </>
  );
};

export default index;
