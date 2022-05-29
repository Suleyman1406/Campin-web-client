import React from "react";
import Carousel from "react-material-ui-carousel";

const ImageCarousel = () => {
  const images = [
    "https://images.campsites.co.uk/campsite/21192/ebec05b6-3663-4031-a5d9-924a58fbe283/1200/600/-/pitches-at-east-crinnis-holiday-park.jpg?q=50",
    "https://images.campsites.co.uk/campsite/21192/8b7f46c0-ea32-4917-b109-7a81094e1778/1200/600/-/tent-camping-at-east-crinnis-holiday-park.jpg?q=50",
    "https://images.campsites.co.uk/campsite/21192/7b4d0bf1-bffd-48d4-ba40-cf5d6ba92432/1200/600/-/pitches-at-east-crinnis-holiday-park.jpg?q=50",
    "https://images.campsites.co.uk/campsite/21192/686b20b5-6a5c-4b29-9c23-faf0a10a2719/1200/600/-/camping-at-east-crinnis-holiday-park.jpg?q=50",
    "https://images.campsites.co.uk/campsite/21192/557ddf60-0323-44f0-bb25-af68d3449739/1200/600/-/touring-at-east-crinnis-holiday-park.jpg?q=50",
  ];
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
