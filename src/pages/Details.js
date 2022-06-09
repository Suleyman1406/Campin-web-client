import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";
import DetailComponent from "../components/details";
import campsiteService from "../services/campsite.service";
import { HashLoader } from "react-spinners";

const Details = () => {
  const { id } = useParams();
  const [campsite, setCampsite] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      campsiteService.getCampsiteById(id).then((response) => {
        setCampsite(response);
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);
    }
  }, []);
  // const campsite = campsites?.find((cs) => cs.id === id) || null;

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <HashLoader color={"#84cc16"} loading={true} size={100} />
        </div>
      ) : (
        <DetailComponent campsite={campsite} />
      )}
      <Footer />
    </>
  );
};

export default Details;
