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
      <div className="px-5 my-10">
        <div className="w-[60%] px-10 inline-block">
          <CampsitesList setPosition={setPosition} />
        </div>
        <div className="w-[40%] z-0 inline-block">
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
