import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../images/banner1.webp";
import s2 from "../images/banner2.webp";
import s3 from "../images/banner3.webp";
import s4 from "../images/banner4.webp";
import s5 from "../images/banner5.webp";
import s6 from "../images/banner6.webp";

const Imageswitcher = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageSources = [s1, s2, s3, s4, s5, s6];
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the slide index in a cyclic manner
      setImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
      // Use the slickGoTo method to change the slide
      sliderRef.current.slickGoTo(imageIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imageSources.length, imageIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-auto ">
      <Slider ref={sliderRef} {...settings}>
        {imageSources.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Imageswitcher;
