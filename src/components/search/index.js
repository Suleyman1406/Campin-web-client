import React, { useState } from "react";
import Filter from "./Filter";
import CampsitesList from "./list";
import Map from "./Map";

const Search = () => {
  return (
    <div className="h-[2000px]">
      <Filter />
      <div className="px-5 my-10 w-full flex flex-row">
        <div className="w-[60%]">
          <CampsitesList />
        </div>
        <div className="w-[40%] z-0">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Search;
