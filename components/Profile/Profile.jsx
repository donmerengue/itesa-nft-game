import React from "react";
import CartDetails from "./CartDetails";
import CartStatistics from "./CartStatistics";
import styled from "styled-components";

const UserProfile = () => {
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
                <CartDetails />
              </div>
              <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-80 shadow-xl hover:rounded-2xl">
                <CartStatistics />
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
