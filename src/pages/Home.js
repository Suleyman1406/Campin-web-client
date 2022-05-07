import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="font-sans min-h-[100vh]">
      <Navbar />
      <Search />
    </div>
  );
};

export default Home;
