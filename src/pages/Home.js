import React from "react";
import Navbar from "../components/Navbar";
import PopDestinations from "../components/PopDestinations";
import Search from "../components/Search";
import TopCampsites from "../components/TopCampsites";

const Home = () => {
  return (
    <div className="font-sans min-h-[100vh]">
      <Navbar />
      <Search />
      <PopDestinations />
      <TopCampsites />
    </div>
  );
};

export default Home;
