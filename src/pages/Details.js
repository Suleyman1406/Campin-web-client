import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/general/Navbar";
import DetailComponent from "../components/details";
import campsites from "../static/campsites.json";

const Details = () => {
  const { id } = useParams();
  const campsite = campsites?.find((cs) => cs.id === id) || null;

  return (
    <>
      <Navbar />
      <DetailComponent campsite={campsite} />
    </>
  );
};

export default Details;
