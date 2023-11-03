"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../arrows/Arrows";
import FreebiePlan from "./freebie/FreebiePlan";
import MonthlyPlan from "./monthly/MonthlyPlan";
import classes from "./plans.module.css";
import YearlyPlan from "./yearly/YearlyPlan";

const Plans = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: currentSlide !== 2 ? <NextArrow /> : null,
    prevArrow: currentSlide !== 0 ? <PrevArrow /> : null,
    afterChange: (current) => {
      setCurrentSlide(current);
      console.log(current);
    },
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["slider-wrapper"]}>
        <Slider className={classes["slider"]} {...settings}>
          <FreebiePlan />
          <YearlyPlan />
          <MonthlyPlan />
        </Slider>
      </div>
      {/* <div className={classes["plans"]}>
        <FreebiePlan />
        <YearlyPlan />
        <MonthlyPlan />
      </div> */}
    </div>
  );
};

export default Plans;
