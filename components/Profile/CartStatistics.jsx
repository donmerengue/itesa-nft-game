import { Img } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { getDocumento } from "../../fetchData/controllers";

const CartStatistics = ({ stats, activate }) => {
  const [userStats, setUSerStats] = useState({});

  //funcion que trae las estadisticas del usuario
  const estadisticas = async () =>
    setUSerStats(await getDocumento("user-stats", stats));

  useEffect(() => {
    estadisticas();
  }, [activate]);

  console.log(userStats);
  return (
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
        <div className="space-y-2">
          <div className="space-y-4">
            <h4 className=" text-2xl font-semibold bg-cyan-900 rounded-xl text-white">
              STATISTICS
            </h4>
            <p className="font-semibold text-gray-600">
              LEVEL: {userStats.level}
            </p>
            <p className="font-semibold text-gray-600">
              EXPERIENCE: {userStats.experience}
            </p>
            <p className="font-semibold text-gray-600">
              WON BATTLES: {userStats.battlesWon}
            </p>
            <p className="font-semibold text-gray-600">
              LOST BATTLES: {userStats.battlesLost}
            </p>
            <p className="font-semibold text-gray-600">
              TOTAL BATTLES: {userStats.battlesTotal}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartStatistics;
