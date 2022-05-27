import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
const Search = () => {
  return (
    <div className="w-full mt-2 ">
      <div className="h-[80vh] bg-searchImage bg-no-repeat bg-center  bg-contain flex justify-center ">
        <div className="w-[50%] h-16 bg-white mt-48 border hover:border-campgreen/70 duration-100 focus:shadow-lg border-campgreen/50 shadow-sm flex flex-row items-center px-4 shadow-campgreen/40 rounded-2xl ">
          <BiSearchAlt2 className="text-2xl w-10 translate-y-[1px] text-gray-300" />
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="false"
            placeholder="Search for camping..."
            className="tracking-widest outline-none w-[calc(100%-140px)]"
          />
          <button className="px-3 py-2 bg-campgreen rounded-xl w-[100px] text-white hover:opacity-90 shadow-sm">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
