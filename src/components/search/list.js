import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import campsites from "../../static/campsites.json";
const CampsitesList = ({ setPosition }) => {
  const [selectedCampsite, setSelectedCampsite] = useState(0);
  return (
    <div className="w-full lg:p-2 h-[75vh] overflow-auto">
      {campsites?.map((campsite, idx) => (
        <div
          key={idx}
          onClick={() => {
            setSelectedCampsite(idx);
            setPosition({ lat: campsite.lat, lng: campsite.lng });
          }}
          className={
            "w-full cursor-pointer relative h-44 rounded-lg mb-6 shadow-sm overflow-hidden shadow-" +
            (selectedCampsite === idx ? "campgreen" : "gray-600")
          }
        >
          <Link
            to={`/details/${campsite.id}`}
            className="text-white text-xs md:text-base font-semibold inline-block absolute right-5 bottom-3 lg:bottom-auto lg:top-5 px-2 py-1 bg-yellow-400 rounded-lg hover:opacity-80 duration-150 active:bg-yellow-300 active:translate-y-[0.1rem]"
          >
            Click to Details...
          </Link>
          <div className="w-[30%] md:w-[20%] float-left">
            <img
              src={campsite.image}
              alt={campsite.name}
              className="w-full object-cover h-44 rounded-tl-lg rounded-bl-lg"
            />
          </div>
          <div className="w-[70%] md:w-[80%] p-3 flex flex-col ">
            <p>
              <span className="text-sm md:text-lg font-semibold">
                {campsite.title}
              </span>
              <span className="text-sm md:text-base ml-1 text-gray-400 font-medium">
                {campsite.location}
              </span>
            </p>
            <div>
              <Rating
                name="read-only"
                value={campsite?.rate}
                precision={0.125}
                size={"small"}
                readOnly
                className="md:mx-1"
              />
              <span className="text-xs md:text-base -translate-y-[0.35rem] font-medium text-gray-500 inline-block">
                {campsite?.rate} of 5
                <span className="ml-[0.1rem] md:ml-2 hover:underline text-yellow-500 ">
                  {campsite?.reviews} reviews
                </span>
              </span>
            </div>
            <p className="text-xs md:text-base">
              {campsite.desc.length < 250
                ? campsite.desc
                : campsite.desc.substring(0, 250) + "..."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampsitesList;
