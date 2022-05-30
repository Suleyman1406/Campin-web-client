import React from "react";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <ul style={{ position: "relative", transform: "skewY(-10deg)" }}>
      <button
        disabled={selectedTab === "profile"}
        onClick={() => setSelectedTab("profile")}
        className="account-tab-element z-50 block"
      >
        <span className="uppercase tracking-wider block  duration-200  font-semibold">
          Profile
        </span>
      </button>
      <button
        disabled={selectedTab === "password"}
        onClick={() => setSelectedTab("password")}
        className="account-tab-element z-40 group block"
      >
        <span className="uppercase tracking-wider block duration-200 font-semibold">
          Change Password
        </span>
      </button>

      <button
        disabled={selectedTab === "reservations"}
        onClick={() => setSelectedTab("reservations")}
        className="account-tab-element z-30 group block"
      >
        <span className="uppercase tracking-wider block duration-200  font-semibold">
          Reservations
        </span>
      </button>
      <button
        disabled={selectedTab === "favorites"}
        onClick={() => setSelectedTab("favorites")}
        className="account-tab-element z-20 group shadow block"
      >
        <span className="uppercase tracking-wider block duration-200 font-semibold">
          Favorites
        </span>
      </button>
    </ul>
  );
};

export default Sidebar;
