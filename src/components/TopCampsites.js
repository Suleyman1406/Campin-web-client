import { Rating } from "@mui/material";
import React from "react";
import campsites from "../static/campsites.json";
const TopCampsites = () => {
  return (
    <div className="px-20 pt-24 pb-32 bg-white">
      <p className="font-bold text-right mr-16 text-campgreen text-4xl">
        Top Campsites
      </p>
      <div className="w-full pt-5 flex h-[520px] overflow-x-scroll overflow-y-visible pb-8 mt-5">
        {campsites?.map((campsite) => (
          <div className="min-w-[450px] cursor-pointer group relative m-1 ">
            <img
              src={campsite?.image}
              alt={campsite?.name}
              className="rounded-3xl w-full h-[300px] object-cover group-hover:-translate-y-6 duration-500"
            />
            <div className="absolute p-2 w-[80%] group-hover:translate-y-8 h-[200px] bg-white -translate-x-[50%] -translate-y-[25%] shadow-md top-[50%] left-[50%] duration-300 rounded-[24px]">
              <p className="text-lg font-semibold">{campsite?.title}</p>
              <Rating
                name="read-only"
                value={campsite?.rate}
                precision={0.125}
                size={"small"}
                readOnly
                className="mx-1"
              />
              <p className="-translate-y-[0.35rem] font-medium text-gray-500 inline-block">
                {campsite?.rate} of 5
                <span className="ml-2 hover:underline text-yellow-500 ">
                  {campsite?.reviews} reviews
                </span>
              </p>
              <p className="text-sm text-gray-500 font-semibold px-2">
                {campsite?.location}
              </p>
              <p className="py-1 px-2 text-sm tracking-wide">
                {campsite?.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCampsites;
