import React from "react";
import Carousel from "react-material-ui-carousel";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel
      autoPlay
      animation="slide"
      duration={500}
      navButtonsAlwaysVisible
      swipe
    >
      {images.map((item, i) => (
        <div className="w-full flex justify-center">
          <img
            src={item}
            alt="deneme"
            className="w-[95%] md:w-[80%] lg:w-[70%] h-[300px] md:h-[400px] lg:h-[500px] object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
