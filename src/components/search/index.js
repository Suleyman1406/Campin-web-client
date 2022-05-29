import React, { useState } from "react";
import Filter from "./Filter";
import CampsitesList from "./list";
import Map from "../general/Map";
import campsites from "../../static/campsites.json";
const Search = () => {
  const defaultPosition = {
    lat: campsites[0].lat,
    lng: campsites[0].lng,
  };
  const [position, setPosition] = useState(defaultPosition);
  return (
    <div className="">
      <Filter />
      <div className="px-5 my-10 flex xl:flex-row flex-col-reverse items-center xl:items-start">
        <div className="w-full xl:w-[60%] px-2 md:px-10 inline-block mt-5 xl:mt-0">
          <CampsitesList setPosition={setPosition} />
        </div>
        <div className="w-[85%] xl:w-[40%] z-0 inline-block">
          <Map
            position={position}
            containerStyle={{
              width: "100%",
              height: "75vh",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
