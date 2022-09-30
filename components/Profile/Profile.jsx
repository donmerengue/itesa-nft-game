import React, { useState } from "react";
import CartDetails from "./CartDetails";
import CartStatistics from "./CartStatistics";
import styled from "styled-components";
import { auth } from "../../firebase/firebase-config";
import { getId } from "../../fetchData/controllers";
import { Center, Heading, Img } from "@chakra-ui/react";
import Link from "next/link";
import NtfBought from "./nftBought";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const UserProfile = () => {
  const [avatar, setAvatar] = useState({});
  const [stats, setStats] = useState("");
  const [activate, setActivate] = useState(false);
  const [activate2, setActivate2] = useState(false);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    getId("userAvatar", auth.currentUser?.uid).then((res) => {
      setAvatar(res);
      setActivate(true);
      setStats(auth.currentUser?.uid);
    });
  }, [user]);

  const handleTable = (e) => {
    e.preventDefault();
    setActivate2(true);
  };
  const handleProfile = () => setActivate2(false);

  console.log(activate2);
  return (
    <div className="bg-[url('https://i.pinimg.com/originals/d7/d8/db/d7d8dbf3811c797e5d2cc364743ae3a7.gif')]">
      <div className="py-60 ">
        <Container>
          <div className="container m-auto px-6 text-white  md:px-12 xl:px-6">
            {!activate2 ? (
              <div className="mb-12 space-y-2 text-center">
                <h2 className="text-2xl font-bold md:text-4xl">PROFILE</h2>
                <p className="lg:w-6/12 lg:mx-auto">
                  Here you can find your user stats and personal data! <br />
                  <Link href={"/user/edit"}>
                    <button className=" p-2 pl-5 pr-5 bg-violet-500 border-2 border-gray-900  transition-colors duration-700 transform hover:bg-gray-900 hover:text-gray-100 focus:border-4  focus:bg-gray-900 focus:text-white focus:border-white">
                      Edit User
                    </button>
                  </Link>
                  <span>
                    {" "}
                    <button
                      onClick={handleTable}
                      className=" p-2 pl-5 pr-5 bg-violet-500 border-2 border-gray-900  transition-colors duration-700 transform hover:bg-gray-900 hover:text-gray-100 focus:border-4  focus:bg-gray-900 focus:text-white focus:border-white"
                    >
                      Nfts Inventory
                    </button>
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
            {activate2 ? (
              <>
                <div className="mb-12 space-y-2 text-center">
                  <h2 className="text-2xl font-bold md:text-4xl">
                    ACCESORIES NFT
                  </h2>
                  <p className="lg:w-6/12 lg:mx-auto">
                    Here you can see all your nfts <br />
                    <Link href={"/user/profile"}>
                      <button
                        onClick={handleProfile}
                        className=" p-2 pl-5 pr-5 bg-violet-500 border-2 border-gray-900  transition-colors duration-700 transform hover:bg-gray-900 hover:text-gray-100 focus:border-4  focus:bg-gray-900 focus:text-white focus:border-white"
                      >
                        Back To Profile
                      </button>
                    </Link>
                  </p>
                </div>
                <NtfBought />
              </>
            ) : (
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl hover:rounded-2xl">
                  {activate ? (
                    <CartDetails avatar={avatar} />
                  ) : (
                    <>
                      <Img
                        src="https://imgur.com/KnSE55d.gif"
                        alt="art cover"
                        loading="lazy"
                        width="1000"
                        height="450"
                        className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                      />
                      <div className="sm:w-7/12 pl-0 p-5">
                        <h4 className="text-2xl font-semibold bg-cyan-900 rounded-xl text-white">
                          Loading...
                        </h4>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl hover:rounded-2xl">
                  {activate ? (
                    <CartStatistics activate={activate} stats={stats} />
                  ) : (
                    <>
                      <Img
                        src="https://imgur.com/6KjlLkr.gif"
                        alt="art cover"
                        loading="lazy"
                        width="1000"
                        height="450"
                        className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                      />
                      <div className="sm:w-7/12 pl-0 p-5">
                        <h4 className="text-2xl font-semibold bg-cyan-900 rounded-xl text-white">
                          Loading...
                        </h4>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

const Container = styled.div`
  @media screen and (max-width: 1280px) {
    width: full;
  }
`;

export default UserProfile;
