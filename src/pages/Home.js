import React from "react";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
