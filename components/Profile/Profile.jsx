import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const UserProfile = () => {
  //user logueado
  const user = useSelector((state) => state.user);
  
  return (
    <Div>
      <div className="py-40 ">
        <div className="container m-auto px-6 text-white  md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-2xl font-bold md:text-4xl">PROFILE</h2>
            <p className="lg:w-6/12 lg:mx-auto">
              Here you can find your statistics as a user and your personal
              data!
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl hover:rounded-2xl">
              <img
                src="https://c.tenor.com/lCz7qXcoTSMAAAAC/data-world-circle.gif"
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
              />
              <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    
                    <h4 className=" text-2xl font-semibold bg-cyan-900 rounded-xl text-white">
                     STATISTICS
                    </h4>
                    <p className="font-semibold text-gray-600">LEVEL:</p>
                    <p className="font-semibold text-gray-600">EXPERIENCE:</p>
                    <p className="font-semibold text-gray-600">WON BATTLES:</p>
                    <p className="font-semibold text-gray-600">LOST BATTLES:</p>
                    <p className="font-semibold text-gray-600">TOTAL BATTLES:</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl hover:rounded-2xl">
              <img
                src="https://veganmonsters.io/assets/images/vegan-monster-images.gif"
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
      </div>
    </Div>
  );
};

const Div = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  height: 100vh;
  background-image: url('https://i.pinimg.com/originals/d7/d8/db/d7d8dbf3811c797e5d2cc364743ae3a7.gif'); 
`;

export default UserProfile;
