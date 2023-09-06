"use client";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "./Arrows";
import classes from "./serverButtons.module.css";
const ServersButtons = ({ servers }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: currentSlide === 2 ? null : <NextArrow />,
    // prevArrow: <PrevArrow />,
    prevArrow: currentSlide === 0 ? null : <PrevArrow />,
    afterChange: (current) => {
      console.log(current);
      setCurrentSlide(current);
    },
  };

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["container"]}>
        <Slider {...settings}>
          {servers.map((item, index) => (
            <div key={`${index}-${item}`} className={classes["lang"]}>
              <p className={classes["lang-text"]}>{item}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServersButtons;
