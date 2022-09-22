import Image from "next/image";

const CartStatistics = ({stats}) => {
  console.log(stats)
  return (
    <>
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
            <p className="font-semibold text-gray-600">EXPERIENCE: 95%</p>
            <p className="font-semibold text-gray-600">WON BATTLES: 15</p>
            <p className="font-semibold text-gray-600">LOST BATTLES: 3</p>
            <p className="font-semibold text-gray-600">TOTAL BATTLES: 18</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartStatistics;
