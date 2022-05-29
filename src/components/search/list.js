import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import campsites from "../../static/campsites.json";
const CampsitesList = ({ setPosition }) => {
  const [selectedCampsite, setSelectedCampsite] = useState(0);
  return (
    <div className="w-full p-2 h-[75vh] overflow-auto">
      {campsites?.map((campsite, idx) => (
        <div
          key={idx}
          onClick={() => {
            setSelectedCampsite(idx);
            setPosition({ lat: campsite.lat, lng: campsite.lng });
          }}
          className={
            "w-full cursor-pointer relative h-44 rounded-lg mb-6 shadow-sm shadow-" +
            (selectedCampsite === idx ? "campgreen" : "gray-600")
          }
        >
          <Link
            to={`/details/${campsite.id}`}
            className="text-white font-semibold absolute right-5 top-5 px-2 py-1 bg-yellow-400 rounded-lg hover:opacity-80 duration-150 active:bg-yellow-300 active:translate-y-[0.1rem]"
          >
            Click to Details...
          </Link>
          <div className="w-[20%] float-left">
            <img
              src={campsite.image}
              alt={campsite.name}
              className="w-full object-cover h-44 rounded-tl-lg rounded-bl-lg"
            />
          </div>
          <div className="w-[80%] p-3 flex flex-col ">
            <p>
              <span className="text-lg font-semibold">{campsite.title}</span>
              <span className="ml-1 text-gray-400 font-medium">
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
                className="mx-1"
              />
              <span className="text-xs md:text-base -translate-y-[0.35rem] font-medium text-gray-500 inline-block">
                {campsite?.rate} of 5
                <span className="ml-2 hover:underline text-yellow-500 ">
                  {campsite?.reviews} reviews
                </span>
              </span>
            </div>
            <p>{campsite.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampsitesList;
