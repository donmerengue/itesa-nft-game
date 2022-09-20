import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const UserProfile = () => {
  //user logueado
  const user = useSelector((state) => state.user);

  return (
    <div className="bg-[url('https://i.pinimg.com/originals/d7/d8/db/d7d8dbf3811c797e5d2cc364743ae3a7.gif')]">
      <div className="py-60 ">
        <Container>
          <div className="container m-auto px-6 text-white  md:px-12 xl:px-6">
            <div className="mb-12 space-y-2 text-center">
              <h2 className="text-2xl font-bold md:text-4xl">PROFILE</h2>
              <p className="lg:w-6/12 lg:mx-auto">
                Here you can find your user stats and personal data!
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl hover:rounded-2xl">
                <Image
                  src="https://i.imgur.com/5YHuZ4g.gif"
                  alt="art cover"
                  loading="lazy"
                  width="750"
                  height="667"
                  className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
                />
                <div className="sm:w-7/12 pl-0 p-5">
                  <div className="space-y-2">
                    <div className="space-y-4">
                      <h4 className=" text-2xl font-semibold bg-cyan-900 rounded-xl text-white">
                        STATISTICS
                      </h4>
                      <p className="font-semibold text-gray-600">LEVEL: 25</p>
                      <p className="font-semibold text-gray-600">
                        EXPERIENCE: 95%
                      </p>
                      <p className="font-semibold text-gray-600">
                        WON BATTLES: 15
                      </p>
                      <p className="font-semibold text-gray-600">
                        LOST BATTLES: 3
                      </p>
                      <p className="font-semibold text-gray-600">
                        TOTAL BATTLES: 18
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl hover:rounded-2xl">
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
                            <span className="text-cyan-900 font-mono">
                              {" "}
                              {user.name}
                            </span>
                          </p>
                          <p className="text-gray-600 font-extrabold">
                            LAST NAME:
                            <span className="text-cyan-900 font-mono">
                              {" "}
                              {user.lastname}
                            </span>
                          </p>
                          <p className="text-gray-600 font-extrabold">
                            EMAIL:
                            <span className="text-cyan-900 font-mono">
                              {" "}
                              {user.email}
                            </span>
                          </p>

                          <p className="text-gray-600 font-extrabold">
                            ADMIN:
                            {user.isActive === true ? (
                              <span className="text-green-500 font-mono">{` ${user.isActive}`}</span>
                            ) : (
                              <span className="text-red-500 font-mono">{` ${user.isActive}`}</span>
                            )}
                          </p>

                          <p className="text-gray-600 font-extrabold">
                            ACTIVE:
                            {user.isAdmin === true ? (
                              <span className="text-green-500 font-mono">{` ${user.isAdmin}`}</span>
                            ) : (
                              <span className="text-red-500 font-mono">{` ${user.isAdmin}`}</span>
                            )}
                          </p>

                          <p className="text-gray-600 font-extrabold">
                            ADDRESS:
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
              </div>
            </div>
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
