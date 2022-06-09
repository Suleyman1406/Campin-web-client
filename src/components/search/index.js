import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import CampsitesList from "./list";
import Map from "../general/Map";
import campsites from "../../static/campsites.json";
import campsiteService from "../../services/campsite.service";
import { useParams } from "react-router-dom";
const Search = () => {
  const params = useParams();
  const [campsites, setCampsites] = useState([]);
  useEffect(() => {
    campsiteService
      .getCampsitesByLocations(params?.searchKey)
      .then((response) => {
        console.log(response);
        setCampsites(response);
      });
  }, []);
  const defaultPosition = {
    lat: Number(campsites[0]?.lat || 0),
    lng: Number(campsites[0]?.lng || 0),
  };
  const [position, setPosition] = useState(defaultPosition);
  useEffect(() => {
    if (campsites && campsites.length > 0) {
      setPosition({
        lat: Number(campsites[0]?.lat || 0),
        lng: Number(campsites[0]?.lng || 0),
      });
    }
  }, [campsites]);
  return (
    <div className="">
      <Filter />
      <div className="px-5 my-10 flex xl:flex-row flex-col-reverse items-center xl:items-start">
        {campsites && campsites?.length > 0 && (
          <>
            <div className="w-full xl:w-[60%] px-2 md:px-10 inline-block mt-5 xl:mt-0">
              <CampsitesList setPosition={setPosition} campsites={campsites} />
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
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
