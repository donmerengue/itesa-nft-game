import { Img } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const Avatars = ({ avatar }) => {
  const [avatarName, setAvatarName] = useState("");
  const [realName, setRealName] = useState("");
  const [avatarUser, setAvatarUser] = useState({});
  const router = useRouter();

  const handleName = (e) => {
    setRealName(e.target.value);
  };
  const definitiveName = (e) => {
    e.preventDefault();
    setAvatarName(realName);
  };

  const handleAvatar = (avatar) => {
    setAvatarUser(avatar);
    router.replace("/")
  };
console.log(avatarUser)
  return (
    <>
      <div className="lg:flex">
        <Img width={"16rem"} height={"12rem"} src={avatar.img} alt="" />
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          {avatarName ? (
            <p className="text-3xl font-semibold text-gray-800  dark:text-white ">
              {avatarName}
            </p>
          ) : (
            <form onSubmit={definitiveName}>
              <input
                type="search"
                className="w-full border-black  px-4 py-1 text-gray-900 "
                placeholder="give it a name"
                onChange={handleName}
              />
            </form>
          )}
          <span className="text-sm">SELECT YOUR AVATAR</span>
          <button
            onClick={() =>
              handleAvatar({
                img: avatar.img,
                name: avatarName,
              })
            }
            className="p-2 pl-5 pr-5 bg-transparent border-2 border-orange-500 text-orange-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-orange-600 hover:text-gray-100 focus:border-4 focus:border-indigo-300"
          >
            Select
          </button>
        </div>
      </div>
    </>
  );
};
export default Avatars;
