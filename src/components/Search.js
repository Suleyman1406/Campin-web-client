import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
const Search = () => {
  return (
    <>
      <div className="w-full">
        <div className="h-[80vh] bg-searchImage bg-no-repeat relative bg-center  bg-cover flex flex-col justify-center items-center">
          <p className="w-[80%] md:w-[60%] lg:w-[50%] text-white font-bold text-2xl md:text-4xl absolute top-[25%] drop-shadow-lg">
            <span>Love camping and glamping?</span>
            <br />
            <span className="text-xl md:text-3xl">
              Then you are in the{" "}
              <span className="text-campgreen/90">right place.</span>
            </span>
          </p>
          <div className="w-[80%] md:w-[60%] lg:w-[50%] h-16 sticky top-2 bg-white border hover:border-campgreen/70 duration-100 focus:shadow-lg border-campgreen/50 shadow-sm flex flex-row items-center px-4 shadow-campgreen/40 rounded-2xl ">
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
      <div className="w-full h-8 bg-white">
        <div className="w-full shadow-md shadow-white h-8 -translate-y-3 shadow- rounded-full bg-[#fff]"></div>
      </div>
    </>
  );
};

export default Search;
