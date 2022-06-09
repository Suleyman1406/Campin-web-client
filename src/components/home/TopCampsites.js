import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import campsiteService from "../../services/campsite.service";
// import campsites from "../../static/campsites.json";
const TopCampsites = () => {
  const [campsites, setCampsites] = useState([]);
  useEffect(() => {
    campsiteService.getCampsites().then((response) => {
      console.log("response");
      response.shift();
      setCampsites([...response, ...response]);
    });
  }, []);
  return (
    <>
      <div className="px-6 md:px-12 lg:px-20 pt-8 md:pt-16 pb-12 md:pb-24 bg-campgreen/50">
        <p className="font-bold text-right mr-16 text-white text-4xl">
          <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
            <h2>Top Campsites</h2>
          </AnimationOnScroll>
        </p>
        <div className="w-full pt-5 flex h-[520px] relative overflow-x-auto overflow-y-visible pb-0 mt-5  customScrollBar whiteScrollBar">
          {campsites?.map((campsite, idx) => (
            <div
              key={idx}
              className="min-w-[300px] md:min-w-[450px] cursor-pointer group relative m-1 "
            >
              <img
                src={
                  campsite?.image || `/images/blank-image-${(idx % 2) + 1}.jpg`
                }
                alt={campsite?.name}
                className="rounded-3xl w-full h-[300px] object-cover group-hover:-translate-y-6 duration-500"
              />
              <div className="absolute p-2 w-[80%] group-hover:translate-y-6 h-[200px] bg-white -translate-x-[50%] -translate-y-[25%] shadow-md top-[50%] left-[50%] duration-300 rounded-[24px]">
                <p className="md:text-lg font-semibold">{campsite?.name}</p>
                <Rating
                  name="read-only"
                  value={campsite?.rate}
                  precision={0.125}
                  size={"small"}
                  readOnly
                  className="mx-1"
                />
                <p className="text-xs md:text-base -translate-y-[0.35rem] font-medium text-gray-500 inline-block">
                  {campsite?.rate} of 5
                  <span className="ml-2 hover:underline text-yellow-500 ">
                    {campsite?.reviews || 0} reviews
                  </span>
                </p>
                <p className="text-xs md:text-sm text-gray-500 font-semibold px-2">
                  {campsite?.location}
                </p>
                <p className="py-1 px-2 text-xs md:text-sm tracking-wide">
                  {campsite?.description?.length <= 150
                    ? campsite?.description
                    : campsite.description.substring(0, 150) + "..."}
                </p>

                <Link
                  to={`/details/${campsite.vacationSpotID}`}
                  className="text-white text-sm  font-semibold inline-block absolute right-2 bottom-2  px-2 py-1 bg-yellow-400 rounded-lg hover:opacity-80 duration-150 active:bg-yellow-300 active:translate-y-[0.1rem]"
                >
                  Click to Details...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-16 bg-white">
        <div className="w-full shadow-lg shadow-campgreen h-24 -translate-y-12 rounded-full bg-[#C2E598]"></div>
      </div>
    </>
  );
};

export default TopCampsites;
