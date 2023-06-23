import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({ slides }) => {
  return (
    <Carousel showArrows>
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={slide.title} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
