import { Img, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { addNewDoc } from "../../../fetchData/controllers";
import { auth } from "../../../firebase/firebase-config";

const Avatars = ({ avatar }) => {
  const [avatarName, setAvatarName] = useState("");
  const [realName, setRealName] = useState("");
  const toast = useToast();
  const router = useRouter();

  const handleName = (e) => {
    setRealName(e.target.value);
  };
  const definitiveName = (e) => {
    e.preventDefault();
    setAvatarName(realName);
  };

  const handleAvatar = (avatar) => {
    if (avatarName) {
      addNewDoc("userAvatar", avatar);
      toast({
        title: "Avatar created successfully",
        description: "Redirecting to home",
        status: "success",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
      router.replace("/");
    }else{
      toast({
        title: "Error creating Avatar",
        description: "Please choose a name",
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      })
    }
  };

  return (
    <>
      <div className="lg:flex">
        <Img width={"20rem"} height={"16rem"} src={avatar.url} alt="" />
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
                placeholder="Name your Avatar"
                onChange={handleName}
              />
            </form>
          )}
          <span className="text-sm">SELECT YOUR AVATAR</span>
          <button
            onClick={() =>
              handleAvatar({
                img: avatar.url,
                id: avatar.id,
                name: avatarName,
                userId: auth.currentUser.uid,
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
