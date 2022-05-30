import React, { useState } from "react";
import ChangePass from "./ChangePass";
import Favorites from "./Favorites";
import Profile from "./Profile";
import Reservations from "./Reservations";
import Sidebar from "./Sidebar";

const Account = () => {
  const [selectedTab, setSelectedTab] = useState("profile");
  return (
    <div className="flex flex-row">
      <div className="w-2/3 ">
        <div className="w-full py-5 px-8">
          <div className="w-[70%] py-7 mx-auto px-5 shadow-2xl border-[#3e3f46] min-h-[80vh] skew-x-3 border-4 border-dashed flex flex-col justify-center items-center">
            {selectedTab === "profile" && <Profile />}
            {selectedTab === "password" && <ChangePass />}
            {selectedTab === "reservations" && <Reservations />}
            {selectedTab === "favorites" && <Favorites />}
          </div>
        </div>
      </div>
      <div className="w-1/3 px-5 h-[80vh] flex justify-center items-center">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
    </div>
  );
};

export default Account;
