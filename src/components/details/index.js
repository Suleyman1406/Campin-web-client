import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RiCaravanFill } from "react-icons/ri";
import { GiCaravan, GiBarracksTent, GiCampingTent } from "react-icons/gi";
import ImageCarousel from "./ImageCarousel";
import { useNavigate } from "react-router-dom";
import Map from "../general/Map";
import Comments from "./Comments";
import campsiteService from "../../services/campsite.service";
const Details = ({ campsite }) => {
  const navigate = useNavigate();
  const [imagesUrls, setImageUrls] = useState([]);
  useEffect(() => {
    if (!campsite) {
      navigate("/");
    }
  }, [campsite, navigate]);
  useEffect(() => {
    if (campsite) {
      try {
        campsiteService
          .getCampsiteImagesUrl(campsite.vacationSpotID)
          .then((response) => {
            setImageUrls(response.map((e) => e.url));
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [campsite]);
  if (!campsite) return <></>;
  return (
    <div className="px-3 lg:px-7 py-2 lg:py-5 ">
      <div className="bg-gray-100 relative p-3 md:p-5 lg:p-8 rounded-lg w-full ">
        <p className="text-2xl font-semibold animate-comeWithScale">
          {campsite.name}
          <span className="text-xl text-gray-500 ml-3">
            {campsite.location}
          </span>
        </p>
        <div className="mt-2 animate-comeFromLeft inline-block">
          <Rating
            name="read-only"
            value={campsite?.rate}
            precision={0.125}
            size={"medium"}
            readOnly
            className="mx-1"
          />
          <span className="text-xl -translate-y-[0.35rem] font-medium text-gray-500 inline-block">
            {campsite?.rate} of 5
            <span className="ml-2 hover:underline text-yellow-500 ">
              {campsite?.reviews} reviews
            </span>
          </span>
        </div>
        <div className="lg:absolute mt-2 lg:mt-0 right-7 top-7 flex flex-row space-x-3">
          <GiCampingTent className="bg-white p-2 rounded-full text-4xl" />
          <RiCaravanFill className="bg-white p-2 rounded-full text-4xl" />
          <GiCaravan className="bg-white p-2 rounded-full text-4xl" />
          <GiBarracksTent className="bg-white p-2 rounded-full text-4xl" />
        </div>
        <div className="w-full flex flex-col lg:flex-row mt-6">
          <div className="w-full lg:w-1/2  animate-comeWithOpacity">
            <p className="tracking-wider text-xl leading-loose">
              {campsite.description} <br />
              <br /> {campsite.description}
            </p>
            <p className="text-xl mt-4 mb-2 font-semibold">
              Contact number:{" "}
              <a href="tel:90-543-678-99-00" className="text-yellow-500 ml-1">
                +90 543 678 99 00
              </a>
            </p>
            <a
              className="text-xl text-cyan-600 hover:text-cyan-500"
              target="_blank"
              href="https://www.google.com/maps/place/Kaş+Kamping/@36.199307,29.632565,15z/data=!4m8!3m7!1s0x0:0xa5cc0b316040ae6e!5m2!4m1!1i2!8m2!3d36.199307!4d29.632565"
              rel="noreferrer"
            >
              Click to open in Google Map
            </a>
          </div>
          <div className="w-full lg:w-1/2 px-8 mt-5 lg:mt-0">
            <ImageCarousel images={imagesUrls} />
          </div>
        </div>
        <div className="w-full md:w-[90%] h-[350px] mx-auto items-center  mt-5">
          <Map
            position={{ lat: Number(campsite.lat), lng: Number(campsite.lng) }}
            containerStyle={{
              width: "100%",
              height: "350px",
            }}
          />
        </div>
        <div>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Details;
