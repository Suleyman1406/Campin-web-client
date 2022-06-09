import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import CampsitesList from "./list";
import Map from "../general/Map";
import campsiteService from "../../services/campsite.service";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
const Search = () => {
  const params = useParams();
  const [campsites, setCampsites] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(params);
  const [searchValue, setSearchValue] = useState(params?.searchKey);
  useEffect(() => {
    try {
      campsiteService.getCampsitesByLocations(searchValue).then((response) => {
        console.log(response);
        setCampsites(response);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
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
      <Filter searchKey={searchValue} setSearchKey={setSearchValue} />
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
        {loading && (
          <div className="w-full h-full min-h-[70vh] flex justify-center items-center">
            <HashLoader color={"#84cc16"} loading={true} size={100} />
          </div>
        )}
        {campsites?.length <= 0 && !loading && (
          <div className="w-full min-h-[80vh] flex justify-center">
            <img
              src="https://cdn.dribbble.com/users/1507491/screenshots/4945826/media/116a8ebc414c519ad1cfc0fe63f79d3e.jpg?compress=1&resize=800x600&vertical=top"
              alt="nothing to see"
              className="[80%] xs:[60%] md:w-[40%] h-fit object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
