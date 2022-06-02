import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { MdOutlineAccountCircle, MdOutlineCreate } from "react-icons/md";
import Lottie from "react-lottie";
import animationData from "../../lotties/caravan-lottie-animation.json";
const Navbar = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [isLoggedIn, setisLoggedIn] = useState(true);
  return (
    <div className="h-16 bg-campgreen flex items-center px-12 shadow-md justify-between overflow-hidden">
      <div className="animate-comeFromTop">
        <Link to="/" className="relative">
          <p className="font-logo text-3xl text-white drop-shadow-lg">Campin</p>
          <Lottie
            options={defaultOptions}
            style={{ position: "absolute", left: -50, top: -40 }}
            height={50}
            width={50}
          />
        </Link>
      </div>

      <div className="animate-comeFromRight">
        {isLoggedIn ? (
          <>
            <Link to="/account">
              <button className="mr-3 px-4 py-1.5 hover:shadow-md text-white border-gray-200  border border-dashed hover:border-solid duration-150 hover:shadow-gray-200">
                <MdOutlineAccountCircle className="inline-block -translate-y-[1.5px] text-[1rem]" />{" "}
                Account
              </button>
            </Link>
            <button className=" px-4 py-1.5 hover:shadow-md text-white border-gray-200  border border-dashed hover:border-solid duration-150 hover:shadow-gray-200">
              <BiLogOutCircle className="inline-block -translate-y-[1px] text-[1rem]" />{" "}
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="mr-3 px-4 py-1.5 hover:shadow-md text-white border-gray-200  border border-dashed hover:border-solid duration-150 hover:shadow-gray-200">
                <BiLogInCircle className="inline-block -translate-y-[1px] text-[1rem]" />{" "}
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className=" px-4 py-1.5 hover:shadow-md text-white border-gray-200  border border-dashed hover:border-solid duration-150 hover:shadow-gray-200">
                <MdOutlineCreate className="inline-block -translate-y-[1px] text-[1rem]" />{" "}
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
