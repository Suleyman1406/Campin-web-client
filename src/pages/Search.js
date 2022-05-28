import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/general/Navbar";
import SearchSection from "../components/search";
const Search = () => {
  const params = useParams();
  const { searchKey } = params;
  console.log(searchKey);
  return (
    <>
      <Navbar />
      <SearchSection />
    </>
  );
};

export default Search;
