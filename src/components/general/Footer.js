import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="w-full h-fit bg-white/40 flex flex-row justify-evenly px-2 md:px-8 py-10 items-center">
      <div>
        <p className="font-logo text-2xl">Campin</p>
        <p className="w-44 md:w-96 p-2 text-gray-500">
          Our mission is to make it easy to find and book the UK's best camping,
          glamping and touring holidays.
        </p>
        <p className="text-sm px-2 text-gray-500">
          © 2022 Campin. All rights reserved
        </p>
      </div>
      <div>
        <div className="my-1 md:my-2 flex flex-row justify-around">
          <a
            target="_blank"
            href="https://github.com/Suleyman1406"
            rel="noreferrer"
          >
            <AiOutlineGithub className="text-3xl hover:bg-gray-300 p-1 rounded-full duration-200 " />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/dadashow/"
          >
            <AiOutlineLinkedin className="text-3xl hover:bg-gray-300 p-1 rounded-full duration-200 " />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/suleyman._.14/"
          >
            <AiOutlineInstagram className="text-3xl hover:bg-gray-300 p-1 rounded-full duration-200 " />
          </a>
        </div>
        <a
          href="https://dadashow.me"
          className="text-sm md:text-base drop-shadow-xl  font-semibold text-gray-700 hover:text-gray-500 duration-200 "
        >
          Designed & Built by <br /> Suleyman Dadashov
        </a>
      </div>
    </div>
  );
};

export default Footer;
