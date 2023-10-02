"use client";
import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "./Arrows";
import classes from "./serverButtons.module.css";
const ServersButtons = ({ playingServerLang, servers, handleServerClicks }) => {
  console.log(servers, "server buttons");
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: servers?.length > 4 ? 4 : servers?.length,
    slidesToScroll: 1,
    nextArrow:
      servers?.length - 4 > 0 && servers?.length - 4 - currentSlide > 0 ? (
        <NextArrow />
      ) : null,
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
          {servers &&
            servers?.map((item, index) => (
              <div
                onClick={() => {
                  handleServerClicks(item, Object.keys(item)[0]);
                }}
                key={`${index}-${item}`}
                className={
                  playingServerLang === Object.keys(item)[0]
                    ? classes["lang-selected"]
                    : classes["lang"]
                }
              >
                <p
                  className={
                    Object.keys(item)[0] == "arabic" &&
                    playingServerLang === Object.keys(item)[0]
                      ? classes["arabic-selected"]
                      : Object.keys(item)[0] === "arabic"
                      ? classes["arabic-lang"]
                      : playingServerLang === Object.keys(item)[0]
                      ? classes["text-selected"]
                      : classes["lang-text"]
                  }
                >
                  {Object.keys(item)[0] == "arabic"
                    ? "العربيه"
                    : Object.keys(item)[0]}
                </p>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServersButtons;
