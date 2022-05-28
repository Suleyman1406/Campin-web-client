import React from "react";
import Footer from "../components/general/Footer";
import Navbar from "../components/general/Navbar";
import PopDestinations from "../components/home/PopDestinations";
import Search from "../components/home/Search";
import TopCampsites from "../components/home/TopCampsites";

const Home = () => {
  return (
    <div className="font-sans min-h-[100vh]">
      <Navbar />
      <Search />
      <PopDestinations />
      <TopCampsites />
      <Footer />
    </div>
  );
};

export default Home;
