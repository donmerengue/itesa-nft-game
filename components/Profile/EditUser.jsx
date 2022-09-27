import { auth } from "../../firebase/firebase-config";
import { updateData } from "../../fetchData/controllers";
import { useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

const EditUser = () => {
  const [newData, setNewData] = useState({});
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const router = useRouter();
  const toast = useToast();

  const handleName = (e) => setNewName(e.target.value);
  const handleLastName = (e) => setNewLastName(e.target.value);
  const handleEmail = (e) => setNewEmail(e.target.value);

  const handleNewData = async (e) => {
    e.preventDefault();
    setNewData({ name: newName, lastname: newLastName, email: newEmail });
    await updateData("users", auth?.currentUser?.uid, newData);
    toast({
      title: "Usuario editado",
      description: "Redirecting to profile",
      status: "success",
      position: "top",
      duration: 5000,
      isClosable: true,
    });
    setTimeout(() => {
      router.replace("/user/profile");
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col items-start justify-between w-full px-10 pt-5 pb-20 lg:pt-20 lg:flex-row">
        <div className="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
          <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
            <h4 className="w-full text-4xl font-medium leading-snug">
              Edit User
            </h4>
            <form className="relative w-full mt-6 space-y-8">
              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  First Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  onChange={handleName}
                  required
                />
              </div>
              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  Last Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  onChange={handleLastName}
                  required
                />
              </div>
              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  Email Address
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  onChange={handleEmail}
                  required
                />
              </div>
              <div className="relative">
                <button
                  className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-orange-600 rounded-lg hover:bg-orange-500 ease"
                  onClick={handleNewData}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
