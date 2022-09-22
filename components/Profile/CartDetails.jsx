import { useSelector } from "react-redux";
import { async } from "@firebase/util";
import { getId } from "../../fetchData/controllers";
import { Img } from "@chakra-ui/react";

const CartDetails = ({avatar}) => {
 
  const user = useSelector((state) => state.user);

  return (
    <>
      <Img
        src={`${avatar[0].img}`}
        alt="art cover"
        loading="lazy"
        width="1000"
        height="450"
        className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
      />
      <div className="sm:w-7/12 pl-0 p-5">
        <div className="space-y-2">
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold bg-cyan-900 rounded-xl text-white">
              DETAILS
            </h4>
            {user ? (
              <>
                <p className="text-gray-600 font-extrabold">
                  NAME:
                  <span className="text-cyan-900 font-mono">{user.name}</span>
                </p>
                <p className="text-gray-600 font-extrabold">
                  LAST NAME:
                  <span className="text-cyan-900 font-mono">
                    {user.lastname}
                  </span>
                </p>
                <p className="text-gray-600 font-extrabold">
                  EMAIL:
                  <span className="text-cyan-900 font-mono">{user.email}</span>
                </p>
                <p className="text-gray-600 font-extrabold">
                  ADDRESS:
                  <span className="text-cyan-900 font-mono">
                    {user.walletAddress}
                  </span>
                </p>
                <hr />
                <p className="text-left text-blue-400">My avatar</p>
                <p className="text-gray-600 font-extrabold">
                  Avatar Name:
                  <span className="text-cyan-900 font-mono">
                    {avatar[0].name}
                  </span>
                </p>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
