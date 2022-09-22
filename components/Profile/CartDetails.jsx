import { useSelector } from "react-redux";
import { getId } from "../../fetchData/controllers";
import Image from "next/image";
import { auth } from "../../firebase/firebase-config";

const CartDetails = () => {
  //user logueado
  const user = useSelector((state) => state.user);
  // const Avatar = getId("userAvatar", auth?.currentUser?.uid);

  // console.log(Avatar);

  return (
    <>
      <Image
        src="https://i.imgur.com/yxnzdts.gif"
        alt="art cover"
        loading="lazy"
        width="1000"
        height="667"
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
                <p className="text-gray-600 font-extrabold">
                  Avatar Name
                  <span className="text-cyan-900 font-mono">
                    {user.walletAddress}
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
