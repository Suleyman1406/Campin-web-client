import React from "react";
import destinations from "../static/destinations.json";
const PopDestinations = () => {
  return (
    <div className="px-20 pt-16 pb-24 bg-white">
      <p className="font-bold ml-16 text-campgreen text-4xl">
        Popular Destinations
      </p>
      <div className="w-full pt-5 flex  overflow-x-scroll pb-8 mt-5 scrollbar-thin scrollbar-thumb-campgreen scrollbar-track-transparent">
        {destinations?.map((dest, idx) => (
          <div
            style={{
              zIndex: idx,
            }}
            className="min-w-[350px] border rounded-[16px] ml-[-140px] first:ml-[0] first:hover:z-10 hover:shadow-campgreen delay-[25ms] cursor-pointer duration-[400ms] first:z-3 first:hover:translate-x-[0] hover:-translate-x-[140px] hover:-translate-y-4  bg-[#fff] shadow-md shadow-white flex flex-col -rotate-2 hover:rotate-0"
          >
            <img
              className="w-full h-64 object-cover object-center rounded-t-[16px]"
              src={dest?.image}
              alt={dest?.name}
            />
            <div className="px-3 pt-2">
              <p className="text-xl font-semibold ">{dest?.name}</p>
              <p className=" text-gray-500 p-2 ">{dest?.title}</p>
              <div className="mb-2 mt-auto">
                {dest?.tags?.map((tag) => (
                  <span className="text-xs mx-[0.125rem] bg-gray-500 text-white px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopDestinations;
