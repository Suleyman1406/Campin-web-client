import React from "react";
import { Link } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="h-14 bg-campgreen flex items-center px-10 shadow-md justify-between">
      <p className="font-logo text-3xl text-white">Campin</p>
      <div>
        <Link to="/login">
          <button className=" px-4 py-1.5 hover:shadow-md text-white border-gray-200  border border-dashed hover:border-solid duration-150 hover:shadow-gray-200">
            <BiLogInCircle className="inline-block -translate-y-[1px]" /> Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
