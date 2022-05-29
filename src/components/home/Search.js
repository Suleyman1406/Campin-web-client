import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
const StyledAutocomplete = styled(Autocomplete)({
  "& label.Mui-focused": {
    color: "#84cc16",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#84cc16",
  },
});

const staticDestinations = [
  { label: "Antalya" },
  { label: "Bodrum" },
  { label: "Izmir" },
  { label: "Istanbul" },
  { label: "Marmaris" },
  { label: "Muğla" },
  { label: "Çeşme" },
  { label: "Alaçatı" },
  { label: "Kuşadası" },
  { label: "Alanya" },
];

const Search = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState([]);
  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);
  const search = (e) => {
    e.preventDefault();
    console.log("geldi");
    if (searchValue && searchValue.length > 0) {
      let searchKey = String(searchValue[0].label).toLowerCase();
      for (var i = 1; i < searchValue.length; i++)
        searchKey += `-${String(searchValue[i].label).toLowerCase()}`;
      navigate(`/search/${searchKey}`);
    }
  };
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
          <form
            onSubmit={search}
            className="w-[80%] md:w-[60%] lg:w-[50%] h-fit py-1 pt-[0.5rem] sticky top-2 bg-white border hover:border-campgreen/70 duration-100 focus:shadow-lg border-campgreen/50 shadow-sm flex flex-row justify-around items-center px-4 shadow-campgreen/40 rounded-2xl "
          >
            <BiSearchAlt2 className="text-2xl w-10 translate-y-[2px] text-gray-300" />
            <StyledAutocomplete
              id="auto-complete"
              multiple
              options={staticDestinations}
              onChange={(e, record) => {
                setSearchValue(record);
              }}
              autoComplete
              limitTags={2}
              includeInputInList
              classes={{ input: { "&::placeholder": { color: "red" } } }}
              sx={{
                width: "calc(100% - 150px)",
                transform: "translateY(-8px)",
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Destinations"
                  color="info"
                  style={{
                    color: "#84cc16",
                    borderColor: "red",
                    outlineColor: "#84cc16",
                  }}
                  placeholder="Select Destination"
                />
              )}
            />
            <button
              onClick={search}
              className="px-3 py-2 bg-campgreen rounded-xl w-[100px] text-white hover:opacity-90 shadow-sm"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="w-full h-8 bg-white">
        <div className="w-full shadow-md shadow-white h-8 -translate-y-3 shadow- rounded-full bg-[#fff]"></div>
      </div>
    </>
  );
};

export default Search;
