import { TextField } from "@mui/material";
import React from "react";

const Search = () => {
  return (
    <div className="h-[2000px]">
      <div className="w-full h-[4.5rem] sticky top-0 py-2 px-6 rounded-b-[3rem] flex flex-row justify-around items-center shadow-md shadow-campgreen bg-campgreen">
        <TextField label="Outlined secondary" color="secondary" />
      </div>
    </div>
  );
};

export default Search;
